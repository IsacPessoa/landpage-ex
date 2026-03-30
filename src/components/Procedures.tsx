const procedures = [
  "Limpeza de pele",
  "Rejuvenescimento facial",
  "Microagulhamento",
  "Drenagem linfatica",
  "Harmonizacao facial",
  "Botox",
];

function Procedures() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm">
            Tratamentos
          </p>
          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Procedimentos pensados para realcar sua beleza natural.
          </h2>
          <p className="text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Solucoes esteticas para cuidados faciais e corporais com foco em
            naturalidade, bem-estar e autoestima.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {procedures.map((procedure) => (
            <div
              key={procedure}
              className="rounded-3xl bg-stone-50 p-6 shadow-sm ring-1 ring-stone-200 sm:p-8"
            >
              <h3 className="text-xl font-medium text-stone-900 sm:text-2xl">
                {procedure}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600 sm:mt-4 sm:text-base sm:leading-7">
                Atendimento cuidadoso e avaliacao personalizada para indicar o
                melhor tratamento para cada necessidade.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Procedures;
