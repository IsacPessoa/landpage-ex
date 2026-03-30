import heroImage from "../assets/hero-clinic.jpg";

const whatsappBaseUrl =
  "https://wa.me/5592999999999?text=Ola%2C%20gostaria%20de%20agendar%20uma%20avaliacao.";

function Hero() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-18 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-1 text-xs font-medium tracking-[0.18em] text-rose-700 uppercase sm:text-sm">
            Clinica estetica premium
          </span>

          <h1 className="text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Realce sua beleza com cuidado, leveza e sofisticacao.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:mt-6 sm:text-lg sm:leading-8">
            Tratamentos esteticos personalizados para valorizar sua beleza
            natural com tecnologia, seguranca e atendimento acolhedor.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-stone-900 px-6 py-3.5 text-center text-sm font-medium text-white transition hover:bg-stone-700 sm:w-auto"
            >
              Agendar avaliacao
            </a>

            <a
              href={whatsappBaseUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-stone-300 px-6 py-3.5 text-center text-sm font-medium text-stone-700 transition hover:border-stone-400 sm:w-auto"
            >
              Ver tratamentos
            </a>
          </div>
        </div>

        <div className="h-[280px] rounded-[2rem] bg-gradient-to-br from-rose-100 via-stone-100 to-amber-100 shadow-sm sm:h-[360px] md:h-[440px] lg:h-[540px]">
          <img
            src={heroImage}
            alt="Ambiente sofisticado de clinica estetica"
            className="h-full w-full object-cover rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
