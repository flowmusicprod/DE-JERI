import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { products, releases } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="shell">
      <section className="hero">
        <Reveal>
          <p className="eyebrow">Luxury Street Atelier</p>
          <h1>DE&apos;JERI moves like a statement before it speaks.</h1>
          <p>
            Editorial silhouettes, dynamic campaign storytelling, and a catalog built for drops that
            live across social, video, and the street.
          </p>
          <div className="cta-row">
            <Link className="btn primary" href="/catalog">
              Shop Catalog
            </Link>
            <Link className="btn" href="/showcase">
              Explore Releases
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="hero-card">
            <Image
              src="/assets/catalog/products/morredshirt_front.jpeg"
              alt="DE'JERI campaign model"
              width={820}
              height={980}
              className="hero-image"
              priority
            />
          </article>
        </Reveal>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Live Release Thread</h2>
          <Link className="btn" href="/showcase">
            Open Showcase
          </Link>
        </div>
        <div className="grid cols-3">
          {releases.map((release, index) => (
            <Reveal key={release.title} delay={index * 0.08}>
              <article className="tile">
                <Image src={release.image} alt={release.title} width={500} height={600} />
                <div className="tile-copy">
                  <p className="eyebrow">{release.season}</p>
                  <h3>{release.title}</h3>
                  <p>{release.notes}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <h2>Featured Catalog</h2>
          <Link className="btn" href="/catalog">
            View All
          </Link>
        </div>
        <div className="grid cols-3">
          {products.slice(0, 3).map((product, index) => (
            <Reveal key={product.sku} delay={index * 0.06}>
              <article className="tile">
                <Image src={product.image} alt={product.name} width={500} height={600} />
                <div className="tile-copy">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <span className={`status ${product.stock === "Out of Stock" ? "out" : ""}`}>
                    {product.stock}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

