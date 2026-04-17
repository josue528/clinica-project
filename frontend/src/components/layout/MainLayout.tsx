import { Outlet, Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa"
import { TbPointFilled } from "react-icons/tb"
import { CiCalendar } from "react-icons/ci"
import { IoIosStar } from "react-icons/io";

export function MainLayout() {
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const token = localStorage.getItem("auth_token")

    if (token) {
      setUser()
    } else {
      setUser(null)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between bg-gray-50 p-4">
        <div className="flex items-center gap-2">
          <img src="/faviico.ico" className="size-10 rounded-full" />
          <span className="text-lg font-semibold">
            Clínica Vida<span className="text-cyan-500"> +</span>
          </span>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <Link to="/especialidades">Especialidades</Link>
            </li>
            <li>
              <Link to="/medicos">Médicos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden gap-2 md:flex">
          {user ? (
            <span className="text-sm">Olá, {user}</span>
          ) : (
            <Link to="/login">
              <Button className="bg-black">Entrar</Button>
            </Link>
          )}

          <Link to="/agendar">
            <Button className="bg-blue-500">Agendar</Button>
          </Link>
        </div>

        <button className="text-xl md:hidden" onClick={() => setOpen(true)}>
          <FaBars />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setOpen(false)} />

          <div className="w-64 bg-white p-5 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/especialidades" onClick={() => setOpen(false)}>
                  Especialidades
                </Link>
              </li>
              <li>
                <Link to="/medicos" onClick={() => setOpen(false)}>
                  Médicos
                </Link>
              </li>
              <li>
                <Link to="/contato" onClick={() => setOpen(false)}>
                  Contato
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              {user ? (
                <span className="text-sm">Olá, {user}</span>
              ) : (
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-black">Entrar</Button>
                </Link>
              )}

              <Link to="/agendar" onClick={() => setOpen(false)}>
                <Button className="w-full bg-blue-500">Agendar</Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <section className="flex p-30">
          <div className="flex-1">
            <div>
              <p className="flex w-3xs items-center rounded-full border border-gray-400 bg-gray-50 p-2 text-xs">
                {" "}
                <TbPointFilled className="size-4 text-cyan-300 font-inter"  />
                Atendimento disponível hoje
              </p>
              <div className="mt-10">
                <h1 className="text-6xl font-semibold">Cuidado que</h1>
                <h2 className="text-6xl font-semibold ">transforma sua saúde</h2>
                <p className="max-w-2xl text-xl mt-5 text-gray-600">
                  Agende consultas com especialistas qualificados em poucos
                  cliques. Atendimento humanizado, tecnologia de ponta e o
                  cuidado que você merece.
                </p>
                <div className="mt-5 flex gap-4 border-b border-b-gray-200 pb-6 max-w-2xl">
                    <Link to={""}>
                      <Button className="text-md p-5 bg-cyan-500 font-inter">
                        <CiCalendar />Agendar consulta
                      </Button>
                    </Link>
                    <Link to={""}>
                     <Button className="text-md p-5 font-inter">
                       Saiba mais <FaArrowRight />
                      </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                    <div>
                      <h1 className="text-2xl font-semibold ">1K+</h1>
                      <p className="text-sm  text-gray-400">Pacientes</p>
                    </div>
                     <div>
                      <h1 className="text-2xl font-semibold ">10+</h1>
                      <p className="text-sm  text-gray-400">Medicos</p>
                    </div>
                     <div>
                      <h1 className="text-2xl font-semibold flex items-center">4.9<IoIosStar /></h1>
                      <p className="text-sm text-gray-400">Avaliação</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="clinic-hero.jpg" alt="" className="rounded-2xl"/>
          </div>
        </section>
        <div>
          ...
        </div>
      </main>

      <footer className="mt-10 bg-gray-50">
        <div className="border-t">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <img src="/faviico.ico" className="size-8 rounded-full" />
                <h1 className="font-semibold">
                  Clínica Vida <span className="text-cyan-500">+</span>
                </h1>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Cuidado médico humanizado para você e sua família.
              </p>
            </div>

            <div>
              <h1 className="mb-2 font-semibold">Contato</h1>
              <p className="text-sm text-gray-600">
                Email: contato@clinicavida.com
              </p>
              <p className="text-sm text-gray-600">Tel: (11) 99999-9999</p>
            </div>

            <div>
              <h1 className="mb-2 font-semibold">Links</h1>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>
                  <Link to="/especialidades">Especialidades</Link>
                </li>
                <li>
                  <Link to="/medicos">Médicos</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 text-center text-sm text-gray-400">
          © {year} Clínica Vida+. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
