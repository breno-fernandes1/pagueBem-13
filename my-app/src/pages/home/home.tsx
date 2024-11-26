import { Dropdown } from "primereact/dropdown";
import { Layout } from "../../components/layout/layout";
import { GraficoIndicePagamento } from "../../components/graficoIndicePagamento/graficoIndicePagamento";
import { GraficoIndiceRegularidade } from "../../components/graficoIndiceRegularidade/graficoIndiceRegularidade";
import { GraficoIndiceReputacao } from "../../components/graficoIndiceReputacao/graficoIndiceReputacao";
import { ProgressSpinner } from "primereact/progressspinner";
import { useHomeData } from "./useHomeData";
import { GraficoIndiceInteracao } from "../../components/graficoIndiceInteracao/graficoIndiceInteracao";
import { TituloGrafico } from "./homeStyle";

const Home: React.FC = () => {
  const { dados, quantidadeClientes, setQuantidadeClientes } = useHomeData();

  const opcoes = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <Layout>
      {dados?.indicePag && dados?.indiceReg && dados?.indiceRep ? (
        <div className="p-4 xl:p-0 p-fluid formgrid grid aling-items-center justify-content-center">
          <div
            className="field col-12 flex flex-column align-items-center justify-content-center"
            style={{ marginTop: 120 }}
          >
            <label htmlFor="dropdownQuantidadeClientes">Quantidade de Clientes</label>
            <Dropdown
              name="dropdownQuantidadeClientes"
              value={quantidadeClientes}
              onChange={(e) => setQuantidadeClientes(e.value)}
              options={opcoes}
              placeholder="Selecione uma quantidade"
              className="w-full md:w-14rem"
              checkmark={true}
              highlightOnSelect={false}
            />
          </div>
          
          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Interação</TituloGrafico>
            <GraficoIndiceInteracao indiceInt={dados.indiceInt} quantidadeClientes={quantidadeClientes} />
          </div>  

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Regularidade</TituloGrafico>
            <GraficoIndiceRegularidade indiceReg={dados.indiceReg} quantidadeClientes={quantidadeClientes} />
          </div>

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Pagamento</TituloGrafico>
            <GraficoIndicePagamento indicePag={dados.indicePag} quantidadeClientes={quantidadeClientes} />
          </div>

          <div className="field col-12 xl:col-5 border-round-lg shadow-1 bg-white flex flex-column align-items-center justify-content-center ml-3">
            <TituloGrafico>Indice de Reputação</TituloGrafico>
            <GraficoIndiceReputacao indiceRep={dados.indiceRep} quantidadeClientes={quantidadeClientes} />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row align-items-center justify-content-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <ProgressSpinner />
        </div>
      )}
    </Layout>
  );
};

export default Home;
