import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "High-quality item with great features.",
    image: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Built for performance and durability.",
    image: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Elegant design meets modern use.",
    image: "https://via.placeholder.com/300x200?text=Product+3",
  },
  {
    id: 4,
    name: "Product 4",
    description: "A bestseller with excellent reviews.",
    image: "https://via.placeholder.com/300x200?text=Product+4",
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".product-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left 85%",
            horizontal: true,
            scroller: containerRef.current,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-yellow-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2 inline-block">
        Best Selling Products
      </h2>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card w-[250px] flex-shrink-0 snap-start bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out border"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
