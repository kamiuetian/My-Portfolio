import type { ProjectRecord } from "@/lib/projects";

const themes = [
  {
    frame: "border-green-200 bg-green-50",
    panel: "bg-white",
    accent: "bg-green-600",
    text: "text-green-800",
  },
  {
    frame: "border-sky-200 bg-sky-50",
    panel: "bg-white",
    accent: "bg-sky-600",
    text: "text-sky-800",
  },
  {
    frame: "border-amber-200 bg-amber-50",
    panel: "bg-white",
    accent: "bg-amber-500",
    text: "text-amber-800",
  },
  {
    frame: "border-rose-200 bg-rose-50",
    panel: "bg-white",
    accent: "bg-rose-500",
    text: "text-rose-800",
  },
];

function getTheme(project: ProjectRecord) {
  const value = project.id
    .split("")
    .reduce((total, character) => total + character.charCodeAt(0), 0);

  return themes[value % themes.length];
}

function getHost(url?: string) {
  if (!url) {
    return "Portfolio project";
  }

  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/^www\./, "");
  }
}

function ProjectVisual({ project }: { project: ProjectRecord }) {
  const theme = getTheme(project);
  const stack = project.stack?.slice(0, 3) || project.tags.slice(0, 3);

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-lg border ${theme.frame}`}
    >
      <div className="absolute inset-x-0 top-0 grid grid-cols-6 gap-2 p-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 rounded-sm ${
              index % 3 === 0 ? theme.accent : "bg-white"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-x-5 bottom-5 top-12 grid grid-rows-[1fr_auto] rounded-lg border border-white/80 bg-white/90 p-5 shadow-sm">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wide ${theme.text}`}>
            {project.tags[0]}
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-800">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-slate-500">{getHost(project.url)}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectVisual;
