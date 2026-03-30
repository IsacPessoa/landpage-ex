const benefits = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada paciente recebe uma avaliacao pensada para suas necessidades e objetivos.",
  },
  {
    title: "Tecnologia moderna",
    description:
      "Procedimentos realizados com equipamentos atuais e foco em seguranca.",
  },
  {
    title: "Equipe especializada",
    description:
      "Profissionais preparados para oferecer orientacao cuidadosa em cada etapa.",
  },
  {
    title: "Ambiente acolhedor",
    description:
      "Um espaco pensado para proporcionar conforto, bem-estar e confianca.",
  },
];

function Benefits() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm">
            Diferenciais
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Uma experiencia estetica feita com excelencia.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <h3 className="text-lg font-semibold text-stone-900 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600 sm:mt-4 sm:text-base sm:leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
