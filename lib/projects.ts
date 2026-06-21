import fs from "fs/promises";
import path from "path";

export type ProjectRecord = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  cover_url: string;
  content?: unknown;
  url?: string;
  repo_url?: string;
  stack?: string[];
  role?: string;
  period?: string;
  featured?: boolean;
  highlights?: string[];
};

type ProjectsFile = {
  projects: ProjectRecord[];
};

const projectsPath = path.join(process.cwd(), "data", "projects.json");

export const shouldUseLocalProjects = () => {
  return process.env.PROJECTS_SOURCE === "local";
};

export const shouldUseSupabaseProjects = () => {
  const source = process.env.PROJECTS_SOURCE?.toLowerCase();
  return source === "supabase" || source === "remote";
};

export const readProjectsFile = async (): Promise<ProjectRecord[]> => {
  try {
    const raw = await fs.readFile(projectsPath, "utf8");
    const parsed = JSON.parse(raw) as ProjectsFile | ProjectRecord[];

    if (Array.isArray(parsed)) {
      return parsed;
    }

    if (parsed && Array.isArray(parsed.projects)) {
      return parsed.projects;
    }
  } catch {
    return [];
  }

  return [];
};

export const findProjectById = (
  projects: ProjectRecord[],
  id: string
) => {
  const targetId = id.trim().toLowerCase();
  return projects.find((project) => {
    return String(project.id).toLowerCase() === targetId;
  });
};

export const filterProjects = (
  projects: ProjectRecord[],
  term: string,
  page: number,
  limit: number
) => {
  const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 10;
  const safePage = Number.isFinite(page) && page >= 0 ? page : 0;
  const normalizedTerm = term.trim().toLowerCase();

  const filtered = normalizedTerm
    ? projects.filter((project) => {
        const haystack = [
          project.title,
          project.description,
          ...(project.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedTerm);
      })
    : projects;

  const start = safePage * safeLimit;
  const end = start + safeLimit;
  return {
    data: filtered.slice(start, end),
    total: filtered.length,
  };
};
