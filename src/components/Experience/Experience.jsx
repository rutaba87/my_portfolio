import { experiences } from '../../data'

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg2)', padding: '7rem 4rem' }}>
      <div className="section-label">My Journey</div>
      <h2 style={{ marginBottom: '4rem' }}>Experience</h2>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
        {experiences.map(exp => (
          <div key={exp.id} className="exp-item" style={{ paddingLeft: '3.5rem', paddingBottom: '3.5rem', position: 'relative' }}>
            <div className="exp-dot" style={{
              position: 'absolute', left: '-5px', top: '6px',
              width: '11px', height: '11px', borderRadius: '50%',
              background: 'var(--bg)', border: '2px solid var(--accent)',
              transition: 'background 0.2s',
            }} />
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--syne)', fontWeight: 700, fontSize: '1.1rem' }}>{exp.company}</span>
              <span style={{
                fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em',
                padding: '0.2rem 0.6rem', border: '1px solid var(--border)', borderRadius: '20px',
              }}>{exp.period}</span>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--accent)', marginBottom: '0.7rem' }}>{exp.role}</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '650px' }}>{exp.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
              {exp.stack.map(t => (
                <span key={t} style={{
                  fontSize: '0.72rem', fontWeight: 500, color: 'var(--muted)',
                  padding: '0.25rem 0.6rem',
                  background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '2px',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .exp-item:hover .exp-dot { background: var(--accent) !important; }
        .exp-item:last-child { padding-bottom: 0 !important; }
        @media (max-width: 768px) {
          #experience { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}