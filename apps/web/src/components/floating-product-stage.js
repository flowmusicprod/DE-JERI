"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stageItems = [
  {
    name: "MOR Red Shirt",
    sku: "DJ-MOR-RED",
    image: "/assets/catalog/products/morredshirt_front.jpeg",
    className: "float-item item-a",
    rotate: -8,
  },
  {
    name: "Black MOR Frames",
    sku: "DJ-FRM-BLK",
    image: "/assets/catalog/products/black_morframes_front.jpeg",
    className: "float-item item-b",
    rotate: 4,
  },
  {
    name: "White Sunglasses",
    sku: "DJ-SNG-WHT",
    image: "/assets/catalog/products/white_sunglasses_front.jpeg",
    className: "float-item item-c",
    rotate: -3,
  },
  {
    name: "MOR White Shirt",
    sku: "DJ-MOR-WHT",
    image: "/assets/catalog/products/morwhiteshirt_front.jpeg",
    className: "float-item item-d",
    rotate: 7,
  },
];

export function FloatingProductStage() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  function onMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    setMouse({ x: px, y: py });
  }

  return (
    <motion.div className="floating-stage" onMouseMove={onMove}>
      <motion.div
        className="stage-glow"
        style={{
          background: `radial-gradient(420px circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.35), rgba(255,255,255,0.0) 48%)`,
        }}
      />
      {stageItems.map((item, index) => (
        <motion.article
          key={item.sku}
          className={item.className}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          style={{
            transform: `translate(${(mouse.x - 50) * (0.08 + index * 0.012)}px, ${(mouse.y - 50) * (0.07 + index * 0.01)}px) rotate(${item.rotate}deg)`,
          }}
        >
          <div className="float-img-wrap">
            <Image src={item.image} alt={item.name} width={560} height={560} className="float-img" />
          </div>
          <div className="float-meta">
            <p className="eyebrow">{item.sku}</p>
            <h3>{item.name}</h3>
            <Link className="btn" href={`/checkout?sku=${item.sku}`}>
              View Product
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
