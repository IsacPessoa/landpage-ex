import aboutImage from "../assets/about-clinic.jpg";

function About() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 h-[280px] rounded-[2rem] bg-gradient-to-br from-stone-200 via-rose-100 to-stone-100 shadow-sm sm:h-[360px] md:h-[420px] lg:order-1">
          <img
            src={aboutImage}
            alt="Ambiente sofisticado de clinica estetica"
            className="h-full w-full object-cover rounded-[2rem]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm">
            Sobre a clinica
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Beleza, confianca e cuidado em cada detalhe.
          </h2>

          <p className="mt-5 text-base leading-7 text-stone-600 sm:mt-6 sm:leading-8">
            Nossa proposta e oferecer uma experiencia estetica sofisticada, com
            atendimento humanizado e tratamentos pensados para valorizar a
            individualidade de cada paciente.
          </p>

          <p className="mt-4 text-base leading-7 text-stone-600 sm:leading-8">
            Unimos tecnica, sensibilidade e tecnologia para criar resultados
            harmoniosos, respeitando a beleza natural e os objetivos de cada
            pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
