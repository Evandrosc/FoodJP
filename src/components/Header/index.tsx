import { useState } from 'react'
import { openIcon } from '../../assets/img/openIcon'
import { Menubar } from './Menubar'

export function Header() {
  const [activeMenubar, setActiveMenubar] = useState(false)

  function handleMenubar() {
    setActiveMenubar((value) => !value)
  }

  return (
    <header className="mt-6 flex items-center justify-between">
      <span className="text-2xl font-bold text-dark900 md:text-4xl">
        Food<span className="text-brand">JP</span>
      </span>
      <Menubar active={activeMenubar} onActive={handleMenubar} />
      <button
        type="button"
        className="hidden h-12 w-44 rounded-lg border-2 border-dark900 font-semibold transition-all duration-100 ease-linear hover:border-brand hover:text-brand sm:block"
      >
        Entrar
      </button>
      <button onClick={handleMenubar} type="button" className="block sm:hidden">
        {openIcon}
      </button>
    </header>
  )
}
