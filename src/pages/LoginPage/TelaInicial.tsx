import Agua from "../../components/AnimaçãoAgua";

export default function TelaInicial() {
  return (
    <div className="bg-custom-bg min-h-screen">
      <header className="flex flex-col items-center w-full">
        <div className="flex justify-center w-[150px] h-[130px] my-10">
          <img src="/src/imagens/logo.svg" alt="Logo" />
        </div>

        <div className="flex flex-col space-y-5 items-center">
          <div className="flex flex-row space-x-2">
            <div className="w-auto h-auto p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-center">
              <img src="/src/imagens/3traçosM.svg" alt="Três traços" />
            </div>

            <div className="w-auto h-auto p-2 rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-center">
              <div className="w-auto h-auto p-6 mx-5 px-10 rounded-lg   bg-white flex items-center justify-center"></div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                  <Agua />
                </div>
              </div>
            </div>
          </div>

          <div className="w-auto h-auto p-2  rounded-lg bg-gradient-to-r from-[#A0D4A8] to-[#536E57] flex items-center justify-center">
            <div className="w-auto h-auto p-6 mx-5 px-10 rounded-lg   bg-white flex items-center justify-center"></div>
            <div className="w-12 h-12 mx-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden">
                <Agua />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
