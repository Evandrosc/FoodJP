import sushiJapanese from '../../../public/image/sushi-japanese.png'
import imgSegurandoPrato from '../../../public/image/img segurando prato.png'

import img3 from '../../../public/image/img-3.png'
import img1 from '../../../public/image/img-1.png'
import img2 from '../../../public/image/img-2.png'

import mapa from '../../../public/image/map.png'

import { starIcon } from '../../assets/img/starIcon'

import { locationIcon } from '../../assets/img/locationIcon'
import { searchIcon } from '../../assets/img/searchIcon'

const populares = [
  {
    id: 1,
    img: img3,
    titulo: 'Ramen de Frango',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: '30',
  },
  {
    id: 2,
    img: img1,
    titulo: 'Ramen Apimentado',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: '30',
  },
  {
    id: 3,
    img: img2,
    titulo: 'Ramen Tradicional',
    paragrafo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preco: '30',
  },
]

const comentarios = [
  {
    id: 1,
    img: 'https://github.com/Evandrosc.png',
    nome: 'Evandro Marcos',
    comentario: 'Ótimo serviço! Encantado com a qualidade dos pratos.',
  },
  {
    id: 2,
    img: 'https://github.com/Evandrosc.png',
    nome: 'Evandro Marcos',
    comentario:
      'Não é apenas a comida excelente, o serviço torna a experiência especial.',
  },
]

const windowSize = window.innerWidth
const mobileSize = 640

export function Main() {
  return (
    <main className="flex flex-col lg:mt-24">
      <section className="items-center justify-between md:flex">
        <div className="mb-12 mt-14">
          <h1 className="text-3xl font-semibold sm:text-5xl">
            Comida Oriental
          </h1>
          <p className="mb-8 mt-6 font-inter text-base sm:text-2xl lg:mb-12 lg:w-128">
            A culinária Japonesa é bastante equilibrada, sendo muito rica em
            peixes (ômega 3), vegetais, massas e ingredientes frescos.
          </p>
          <a
            href="#"
            className="w-23 inline-block w-full rounded-md border-2 border-solid  border-brand bg-brand py-2 text-center font-inter text-base font-semibold text-dark400 transition-all duration-100 ease-linear hover:border-brand hover:bg-dark400 hover:text-brand sm:w-74"
          >
            Cardápio
          </a>
        </div>
        <img src={sushiJapanese} alt="" className="hidden lg:block" />
      </section>

      <section className="justify-between gap-8 sm:flex sm:items-center lg:mt-20">
        <img
          src={imgSegurandoPrato}
          alt=""
          className="w-full rounded-lg sm:h-clampH sm:w-clampW"
        />
        <div className="my-14 flex max-w-[500px] flex-col items-center gap-6 sm:my-0 sm:items-start">
          <h2 className="text-center text-clamp1 font-semibold text-dark900 sm:text-left">
            Feita de forma Tradicional
          </h2>
          <p className="text-center font-inter sm:text-left lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href="#"
            className="font-inter font-medium text-brand underline underline-offset-4 lg:text-2xl"
          >
            Ler mais sobre o modo de preparo
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-28 text-center text-clamp1 font-semibold text-dark900 sm:mb-24 sm:mt-24">
          Mais populares
        </h2>
        <div className="flex flex-col gap-24 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-11">
          {populares.map((popular) => (
            <div
              key={popular.id}
              className="flex w-full flex-col items-center gap-4 rounded-lg bg-dark500 px-8 pb-12 sm:w-[46.28%] sm:last:mt-11 lg:w-[30.32%] lg:px-4 lg:last:mt-0"
            >
              <img
                src={popular.img}
                alt=""
                className="-mt-12 max-h-72 min-w-44"
              />
              <h3 className="text-center text-2xl font-medium lg:text-3xl">
                {popular.titulo}
              </h3>
              <p className="max-w-60 text-center font-inter lg:text-lg">
                {popular.paragrafo}
              </p>
              <span className="text-3xl text-dark900">R$ {popular.preco}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-10 mt-14 text-center text-clamp1 font-semibold text-dark900 sm:text-left">
          Comentários
        </h2>
        <div className="flex flex-col gap-7 sm:flex-row sm:gap-5">
          {comentarios.map((comentario) => (
            <div
              key={comentario.id}
              className="flex w-full flex-col items-center gap-4 rounded-lg bg-dark500 p-6 lg:items-start lg:p-10"
            >
              <img
                src={comentario.img}
                alt=""
                className="h-16 w-16 rounded-full sm:h-28 sm:w-28"
              />
              <span className="text-lg font-medium text-dark900 lg:text-3xl">
                {comentario.nome}
              </span>
              <p className="max-w-[28.4375rem] text-center font-inter text-dark700 lg:text-left lg:text-2xl">
                {comentario.comentario}
              </p>
              <div className="flex gap-2">
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
                {starIcon}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-center text-clamp1 font-semibold text-dark900 sm:text-left">
          Localização
        </h2>

        <img
          src={mapa}
          alt=""
          className="mb-8 min-h-[15.125rem] object-cover"
        />

        <form className="mx-auto flex max-w-[50.8125rem]">
          <div className="flex w-full items-center rounded-s-xl border-y border-l border-solid border-dark900">
            <div className="pl-4 pr-3">{locationIcon}</div>
            <input
              type="text"
              placeholder="Localização para entrega"
              className="h-10 w-full font-inter text-xs outline-none placeholder:text-xs placeholder:text-dark900 sm:h-[4.375rem] sm:text-2xl sm:placeholder:text-2xl"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center rounded-e-xl border border-solid border-brand bg-brand px-4 sm:w-[11.4375rem] sm:px-0 sm:text-2xl sm:text-dark400"
          >
            {windowSize < mobileSize ? searchIcon : 'Buscar'}
          </button>
        </form>
      </section>
    </main>
  )
}
