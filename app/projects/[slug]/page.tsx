import { notFound } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import WebsiteMainLayout from "@/website-components/layout/WebsiteMainLayout";
import SubTitle from "@/website-components/ui/SubTitle";
import Paragraph from "@/website-components/ui/Paragraph";
import { findProjectById, readProjectsFile } from "@/lib/projects";
import ProjectVisual from "@/website-components/ProjectVisual";

interface ProjectProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = await readProjectsFile();

  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectProps) {
  const projects = await readProjectsFile();
  const project = findProjectById(projects, params.slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

async function Project({ params }: ProjectProps) {
  const projects = await readProjectsFile();
  const project = findProjectById(projects, params.slug);

  if (!project) {
    notFound();
  }

  return (
    <WebsiteMainLayout>
      <section className="pt-4 pb-12 relative z-10">
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              className="rounded border border-slate-300 px-2 py-1 text-xs text-slate-500"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <SubTitle title={project.title} />
            <Paragraph content={project.description} />

            <div className="mt-6">
              <ProjectVisual project={project} />
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            {project.role ? (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Role
                </h2>
                <p className="mt-2 text-slate-700">{project.role}</p>
              </div>
            ) : null}

            {project.period ? (
              <div className="mt-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Period
                </h2>
                <p className="mt-2 text-slate-700">{project.period}</p>
              </div>
            ) : null}

            {project.stack?.length ? (
              <div className="mt-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Stack
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                Visit project <ArrowTopRightIcon />
              </a>
            ) : null}
          </aside>
        </div>

        {project.highlights?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-800">
              What this project shows
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-lg border border-slate-200 bg-white p-4 text-slate-600 shadow-sm"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </WebsiteMainLayout>
  );
}

export default Project;
