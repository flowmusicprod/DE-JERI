import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { collaborations } from "@/lib/data";

const collabFormEmbed = "https://docs.google.com/forms/d/e/1FAIpQLScx7IwWmLi4nQ9QvGw7kfRj7wQ3usZ3nVh_NvEXAMPLE/viewform?embedded=true";

export default function CollaborationPage() {
  return (
    <div className="shell section">
      <Reveal>
        <p className="eyebrow">Collaboration</p>
        <h1>Build the Next Capsule with DE&apos;JERI</h1>
        <p>Apply as a model, creative partner, or brand collaborator through the intake form below.</p>
      </Reveal>

      <section className="section">
        <Reveal>
          <h2>Recent Collaborations</h2>
        </Reveal>
        <div className="grid cols-3" style={{ marginTop: "1rem" }}>
          {collaborations.map((collab, index) => (
            <Reveal key={collab.name} delay={index * 0.08}>
              <article className="panel">
                <h3>{collab.name}</h3>
                <p>{collab.summary}</p>
                <p className="eyebrow">{collab.release}</p>
              </article>
            </Reveal>
          ))}
          <article className="panel">
            <h3>Linked Collab Catalog</h3>
            <p>Each approved collaboration can be tied to a dedicated catalog release in admin.</p>
            <Link className="btn" href="/catalog">
              Open Catalog
            </Link>
          </article>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2>Collaboration Signup</h2>
        </Reveal>
        <div className="panel" style={{ padding: "0.6rem", marginTop: "0.8rem" }}>
          <iframe className="social-embed" title="Collaboration signup form" src={collabFormEmbed}>
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
}

