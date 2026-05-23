const services = [
  {
    number: "01",
    title: "Frontend Development",
    desc: "Pixel-perfect, responsive interfaces built with React, Tailwind, and modern CSS. From landing pages to complex SPAs.",
    stack: ["React", "Next.js", "Tailwind"],
  },
  {
    number: "02",
    title: "Backend Engineering",
    desc: "Scalable REST APIs, database design, and server architecture. Clean, documented, production-ready code.",
    stack: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    number: "03",
    title: "Full Stack Applications",
    desc: "End-to-end web applications from concept to deployment. Auth, payments, real-time features — all covered.",
    stack: ["MERN Stack", "REST APIs", "JWT", "WebSockets"],
  },
  {
    number: "04",
    title: "UI/UX Design",
    desc: "Clean, modern interfaces designed with purpose. Wireframes, prototypes, and design systems that developers love.",
    stack: ["Figma", "Design Systems", "Prototyping", "User Research"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#101318] py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="font-['Space_Mono'] text-gray-500 text-xs tracking-[0.4em] uppercase mb-16">
          SERVICES
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-10 bg-[#101318] hover:bg-white/3 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-['Space_Mono'] text-gray-600 text-xs tracking-widest">
                  {service.number}
                </span>
                <span className="text-gray-600 group-hover:text-white transition-colors duration-300 text-xl">
                  ↗
                </span>
              </div>
              <h3 className="font-['Space_Mono'] text-white text-xl font-bold mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 font-['DM_Sans'] text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-['Space_Mono'] text-gray-500 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
