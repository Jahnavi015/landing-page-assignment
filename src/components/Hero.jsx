import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Page load animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Paragraph word-by-word animation
    const words = paragraphRef.current.innerText.split(" ");
    paragraphRef.current.innerHTML = words
      .map(word => `<span class="inline-block opacity-0 translate-y-2">${word}&nbsp;</span>`)
      .join("");

    gsap.to(paragraphRef.current.children, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      ease: "power2.out",
      duration: 0.4,
    });
  }, []);

  return (
    <section
      ref={paragraphRef}
      className="text-lg md:text-xl text-black max-w-xl mb-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Welcome to Our Landing Page
      </h1>
      <p
       ref={paragraphRef}
       className="text-lg md:text-xl text-gray-800 max-w-xl mb-6"
      >
       We create beautiful and responsive websites that work seamlessly across all devices. With a focus on performance, design, and animation, our landing pages bring ideas to life.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
