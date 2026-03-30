const whatsappCtaUrl =
  "https://wa.me/5592999999999?text=Ola%2C%20gostaria%20de%20mais%20informacoes%20sobre%20os%20tratamentos.";

function CTA() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-stone-900 px-5 py-12 text-center text-white sm:px-8 sm:py-14 md:px-16 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-rose-200 sm:text-sm">
          Agende sua avaliacao
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Descubra o tratamento ideal para valorizar sua beleza com
          naturalidade.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:mt-6 sm:leading-8">
          Entre em contato para conhecer nossos procedimentos e receber um
          atendimento pensado especialmente para voce.
        </p>

        <a
          href={whatsappCtaUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block w-full rounded-full bg-white px-6 py-3.5 text-center text-sm font-medium text-stone-900 transition hover:bg-rose-100 sm:w-auto"
        >
          Falar com a clinica
        </a>
      </div>
    </section>
  );
}

export default CTA;
