import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaArrowLeft, FaBriefcaseMedical } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CiUser } from "react-icons/ci"
import { MdAdminPanelSettings } from "react-icons/md"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Login() {
  const year = new Date().getFullYear()

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="hidden flex-col justify-between bg-black p-10 text-white md:flex md:flex-1">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm hover:opacity-80"
        >
          <FaArrowLeft />
          Voltar ao site
        </Link>

        <div className="flex max-w-md flex-col gap-6">
          <div className="w-fit rounded-full bg-blue-500 p-4">
            <FaBriefcaseMedical size={28} />
          </div>

          <h1 className="text-4xl leading-tight font-semibold">
            Sua saúde, na palma da sua mão.
          </h1>

          <p className="text-gray-300">
           Agende, remarque e acompanhe seus atendimentos com facilidade. Cuidado humanizado a um clique.
          </p>
        </div>

        <div className="text-sm text-gray-400">© {year} Clínica Vida+</div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-gray-50 p-4 sm:p-6">
        <div className="w-full max-w-md rounded-lg bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-2 text-center text-xl font-semibold text-gray-700 sm:text-2xl">
            Bem-vindo de volta
          </h2>

          <p className="mb-4 text-center text-sm text-gray-600 sm:text-base">
            Entre para continuar
          </p>

          <Tabs defaultValue="paciente" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger
                value="paciente"
                className="flex items-center justify-center gap-2"
              >
                <CiUser />
                Account
              </TabsTrigger>

              <TabsTrigger
                value="admin"
                className="flex items-center justify-center gap-2"
              >
                <MdAdminPanelSettings />
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="paciente">
              <p className="mb-4 text-sm text-gray-600">
                Acesse seus agendamentos e prontuário.
              </p>

              <form className="space-y-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <Input placeholder="seu@email.com" />
                </div>

                <div>
                  <p className="font-semibold">Senha</p>
                  <Input type="password" placeholder="●●●●●●●●" />
                </div>

                <Button className="w-full">Entrar como paciente</Button>

                <p className="text-center text-sm">
                  Não tem conta?{" "}
                  <Link to="/register" className="text-blue-500">
                    Cadastre-se
                  </Link>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="admin">
              <p className="mb-4 text-sm text-gray-600">
                Gerencie a clínica, médicos e consultas.
              </p>

              <form className="space-y-4">
                <div>
                  <p className="font-semibold">Email</p>
                  <Input placeholder="seu@email.com" />
                </div>

                <div>
                  <p className="font-semibold">Senha</p>
                  <Input type="password" placeholder="●●●●●●●●" />
                </div>

                <Button className="w-full">Entrar como admin</Button>

                <p className="text-center text-sm">
                  Não tem conta?{" "}
                  <Link to="/register" className="text-blue-500">
                    Cadastre-se
                  </Link>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
