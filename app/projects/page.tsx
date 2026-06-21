import Link from "next/link";
import WebsiteMainLayout from "@/website-components/layout/WebsiteMainLayout";
import SubTitle from "@/website-components/ui/SubTitle";
import { readProjectsFile } from "@/lib/projects";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

async function Projects() {
  const projects = await readProjectsFile();

  return (
    <WebsiteMainLayout>
      <section className="py-10 relative z-10">
        <div className="max-w-3xl">
          <SubTitle title="Projects" />
          <p className="mt-3 text-slate-500">
            Resume-backed project work across full-stack products, AI tools,
            Web3 platforms, WordPress, mobile apps, and production support.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-2xl font-medium text-slate-800 hover:text-green-700"
                >
                  {project.title}
                </Link>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-green-700 hover:text-green-900"
                  >
                    Live <ArrowTopRightIcon />
                  </a>
                ) : null}
              </div>
              <p className="mt-3 text-slate-500">{project.description}</p>
              {project.role ? (
                <p className="mt-4 text-sm font-medium text-slate-700">
                  {project.role}
                </p>
              ) : null}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </WebsiteMainLayout>
  );
}

export default Projects;
