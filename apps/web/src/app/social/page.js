import { Reveal } from "@/components/reveal";

const instagramEmbed = "https://www.instagram.com/p/C5k3YXORr4L/embed";
const tiktokEmbed = "https://www.tiktok.com/embed/7361436022231258410";

export default function SocialPage() {
  return (
    <div className="shell section">
      <Reveal>
        <p className="eyebrow">Social</p>
        <h1>Instagram + TikTok Feed Wall</h1>
        <p>
          This tab keeps social content inside the brand experience while still linking users to the
          official profiles.
        </p>
      </Reveal>

      <section className="section">
        <div className="grid cols-3">
          <article className="panel" style={{ gridColumn: "span 2" }}>
            <h3>Instagram</h3>
            <iframe title="DE'JERI Instagram" className="social-embed" src={instagramEmbed} />
          </article>
          <article className="panel" style={{ gridColumn: "span 1" }}>
            <h3>TikTok</h3>
            <iframe title="DE'JERI TikTok" className="social-embed" src={tiktokEmbed} />
          </article>
        </div>
      </section>
    </div>
  );
}

