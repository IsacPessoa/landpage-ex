const testimonials = [
  {
    name: "Mariana Costa",
    text: "Fui muito bem atendida desde a primeira avaliacao. O cuidado em cada detalhe fez toda a diferenca.",
  },
  {
    name: "Juliana Alves",
    text: "A clinica transmite confianca e delicadeza. O resultado ficou natural e exatamente como eu queria.",
  },
  {
    name: "Fernanda Lima",
    text: "Ambiente lindo, atendimento acolhedor e uma experiencia realmente premium do inicio ao fim.",
  },
];

function Testimonials() {
  return (
    <section className="bg-stone-100 px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Experiencias que refletem cuidado e excelencia.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">
                "{testimonial.text}"
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-stone-900 sm:mt-6 sm:text-sm">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
