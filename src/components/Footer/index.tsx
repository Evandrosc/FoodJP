export function Footer() {
  return (
    <footer className="my-14 flex flex-col gap-8 sm:flex-row md:my-24">
      <span className="text-2xl font-bold text-dark900 md:text-4xl">
        Food<span className="text-brand">JP</span>
      </span>
      <div className="flex flex-wrap gap-8 sm:w-[71%] sm:justify-around">
        <div>
          <h3 className="mb-4 font-medium md:text-3xl">Contato</h3>
          <a
            href="tel:+"
            target="_blank"
            rel="external noreferrer"
            className="mb-2 block font-inter text-sm md:text-lg"
          >
            +55 21 9999-9999
          </a>
          <a
            href="mailto:email@gmail.com"
            target="_blank"
            rel="external noreferrer"
            className="block font-inter text-sm md:text-lg"
          >
            email@gmail.com
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-medium md:text-3xl">Serviços</h3>
          <a href="#" className="mb-2 block font-inter text-sm md:text-lg">
            Entrega
          </a>
          <a href="#" className="block font-inter text-sm md:text-lg">
            Retirada
          </a>
        </div>
        <div>
          <h3 className="mb-4 font-medium md:text-3xl">Sobre nós</h3>
          <a href="#" className="mb-2 block font-inter text-sm md:text-lg">
            Menu
          </a>
          <a href="#" className="mb-2 block font-inter text-sm md:text-lg">
            Valores
          </a>
          <a href="#" className="block font-inter text-sm md:text-lg">
            Pagina principal
          </a>
        </div>
      </div>
    </footer>
  )
}
