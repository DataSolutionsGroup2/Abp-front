import Animação from "../../components/Animação";
import aguaJson from "../../assets/animacoes/agua.json";
import passoJson from "../../assets/animacoes/passo.json";
import caloriasJson from "../../assets/animacoes/calorias.json";
import tempoativoJson from "../../assets/animacoes/tempoativo.json";

export default function TelaInicial() {
  return (
    <div className="bg-custom-bg min-h-screen ">
      <header className="flex flex-col items-center mx-2">
        <div className="flex justify-center w-[150px] h-[130px] my-8">
          <img src="/src/assets/imagens/logo.svg" alt="Logo" />
        </div>

        <div className="flex flex-col space-y-5 items-center ">
          <div className="flex flex-row space-x-5 ">
            <div className="w-full  p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center  ">
              <img src="/src/assets/imagens/3traçosM.svg" alt="Três traços" />
            </div>

            <div className="w-full  p-5  rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-center">
              <h1 className="font-bold text-white text-lg text-center mx-24 ">
                Nome
              </h1>
            </div>
          </div>
          <div className="w-full p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-between">
            <div className="w-12 h-12 mx-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
                <div className="w-12 h-12">
                  <Animação animationData={aguaJson} />
                </div>
              </div>
            </div>
            <h2 className="font-bold text-white">Água</h2>
            <div className="p-6 mx-5 px-10 rounded-lg bg-white"></div>
          </div>

          <div className="w-full p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-between">
            <div className="w-12 h-12 mx-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8">
                <Animação animationData={passoJson} />
              </div>
            </div>
            <h2 className="font-bold text-white">Passos</h2>
            <div className="p-6 mx-5 px-10 rounded-lg bg-white"></div>
          </div>
          <div className="w-full  p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-between">
            <div className="w-12 h-12 mx-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10">
                <Animação animationData={caloriasJson} />
              </div>
            </div>
            <h2 className="font-bold text-white">Calorias</h2>
            <div className="p-6 mx-5 px-10 rounded-lg bg-white"></div>
          </div>
          <div className="w-full  p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-between">
            <div className="w-12 h-12 mx-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 ">
                <Animação animationData={tempoativoJson} />
              </div>
            </div>
            <h2 className="font-bold text-white">Tempo ativo</h2>
            <div className="p-6 mx-5 px-10 rounded-lg bg-white"></div>
          </div>
        </div>
      </header>
    </div>
  );
}
