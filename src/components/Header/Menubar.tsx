import { closeIcon } from '../../assets/img/closeMenubar'

interface MenubarProps {
  active: boolean
  onActive: () => void
}

export function Menubar({ active, onActive }: MenubarProps) {
  return (
    <div
      className={`fixed top-0 flex min-h-full w-full justify-between transition-all duration-500 ease-out sm:static sm:w-auto ${
        active ? 'right-0' : '-right-full'
      }`}
    >
      <div onClick={onActive} className="w-1/3 sm:hidden" />
      <nav className="flex flex-1 flex-col gap-3 bg-brand px-4 pt-8 font-inter text-base sm:bg-white sm:px-0 sm:pt-0">
        <button
          onClick={onActive}
          type="button"
          className="flex h-8 w-8 items-center justify-center sm:hidden"
        >
          {closeIcon}
        </button>
        <div className="flex flex-col gap-10 text-xl text-dark400 sm:flex-row sm:text-dark900 md:gap-20">
          <a
            href="#"
            className="border-b border-solid border-dark400 font-medium transition-all duration-100 ease-linear hover:text-brand sm:border-none"
          >
            Inicio
          </a>
          <a
            href="#"
            className="border-b border-solid border-dark400 font-medium transition-all duration-100 ease-linear hover:text-brand sm:border-none"
          >
            Cardápio
          </a>
          <a
            href="#"
            className="border-b border-solid border-dark400 font-medium transition-all duration-100 ease-linear hover:text-brand sm:border-none"
          >
            Sobre
          </a>
          <button
            type="button"
            className="h-12 w-full rounded-lg border-2 border-dark400 font-semibold sm:hidden"
          >
            Entrar
          </button>
        </div>
      </nav>
    </div>
  )
}
