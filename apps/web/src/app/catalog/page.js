import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/data";

export default function CatalogPage() {
  return (
    <div className="shell section">
      <Reveal>
        <p className="eyebrow">Catalog</p>
        <h1>Current + Archived Product Inventory</h1>
      </Reveal>
      <div className="grid cols-3" style={{ marginTop: "1.5rem" }}>
        {products.map((product, index) => (
          <Reveal key={product.sku} delay={index * 0.05}>
            <article className="tile">
              <Image src={product.image} alt={product.name} width={500} height={600} />
              <div className="tile-copy">
                <h3>{product.name}</h3>
                <p className="eyebrow">{product.sku}</p>
                <p>${product.price}</p>
                <span className={`status ${product.stock === "Out of Stock" ? "out" : ""}`}>
                  {product.stock}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

