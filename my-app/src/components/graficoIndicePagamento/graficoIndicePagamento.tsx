import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import { IIndicePagResponse } from "../../@types/IIndicePagResponse";

interface IIGraficoIndicePagamento {
  indicePag: IIndicePagResponse | undefined;
  quantidadeClientes: number;
}

const GraficoIndicePagamento: React.FC<IIGraficoIndicePagamento> = ({ indicePag, quantidadeClientes }) => {
  // Aqui usamos quantidadeClientes para ajustar a quantidade de dados
  const dados = indicePag?.contas?.slice(0, quantidadeClientes)?.map((item, index) => ({
    ...item,
    uniqueKey: `${item.devedor_id}-${item.conta_id}-${item.indice_pagamento}-${index}`,
  }));

  return (
    <ResponsiveContainer width="105%" height={500}>
      <ScatterChart
        margin={{
          top: 120,
          right: 100,
          bottom: 50,
          left: 100,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="media_tempo_pagamento" name="Média de Tempo de Pagamento" unit="dias" />
        <YAxis type="number" dataKey="indice_pagamento" name="Índice de Pagamento" unit="nota" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        {/* Aqui passamos os dados com base em quantidadeClientes */}
        <Scatter name="Indice de Pagamento por Média de Tempo de Pagamento" data={dados} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export { GraficoIndicePagamento };
