import { projects } from "../../data";

export default function Projects() {
  const regular = projects.filter((p) => !p.featured);
  const featured = projects.find((p) => p.featured);

  return (
    <section id="projects" className="px-8 py-12" 
     style={{
        padding: "48px 32px",
        borderBottom: "0.5px solid var(--border)",
      }}>
      {/* Header */}
      <div className="flex items-baseline gap-3 mb-7">
        <span className="section-num">02</span>
        <span className="section-title">Projects</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-[14px]">
        {/* Regular cards */}
        {regular.map((p) => (
          <div key={p.id} className="proj-card overflow-hidden rounded-xl">
            {/* Image + Overlay */}
            <div className="relative overflow-hidden group">
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full block transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="proj-thumb">
                  <span className="proj-thumb-inner">screenshot</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col justify-center px-5 group-hover:px-6 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:mx-6 text-center">
                <p className="font-display text-white text-[20px] font-semibold mb-1.5">
                  {p.title}
                </p>
                <p className="text-white/70 text-[18px] leading-relaxed mb-4">
                  {p.desc}
                </p>
                <p
                  className="text-white/70 text-[14px] leading-relaxed mb-4 text-underline"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  <a href={p.live} target="blank">
                    {" "}
                    View Site
                  </a>
                </p>
                {/* Tags row */}
                <p className="px-4 py-3 text-center">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag px-4 py-3 text-[14px]">
                      {t}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Featured full-width card */}
        {featured && (
          <div className="proj-card col-span-2 grid grid-cols-[180px_1fr] rounded-xl overflow-hidden">
            {/* Featured thumbnail + overlay */}
            <div className="relative overflow-hidden group border-r border-border">
              {featured.img ? (
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="proj-thumb h-full">
                  <div className="proj-thumb-lines" />
                  <span className="proj-thumb-inner">screenshot</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col justify-center px-5 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                <p className="font-display text-white text-[15px] font-semibold mb-1.5">
                  {featured.title}
                </p>
                <p className="text-white/70 text-[12px] leading-relaxed mb-4">
                  {featured.desc}
                </p>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit font-mono text-[11px] text-accent border border-accent/60 rounded-full px-4 py-1 bg-white/10 hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    live →
                  </a>
                )}
              </div>
            </div>

            {/* Featured right panel */}
            <div className="p-4">
              <span className="inline-block font-mono text-[10px] px-3 py-0.5 rounded-full bg-accent-light text-accent-dark mb-2">
                featured
              </span>
              <p className="font-display text-[15px] font-medium text-primary mb-1.5">
                {featured.title}
              </p>
              <p className="text-[12px] text-secondary leading-relaxed mb-3">
                {featured.desc}
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1">
                  {featured.tags.map((t) => (
                    <span key={t} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
                {featured.live && (
                  <a
                    href={featured.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[11px] text-accent hover:opacity-70 transition-opacity"
                  >
                    live →
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
