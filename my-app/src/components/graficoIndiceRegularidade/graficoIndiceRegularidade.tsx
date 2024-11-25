import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IIndiceRegResponse } from "../../@types/IIndiceRegResponse";

interface IGraficoIndiceRegularidadeProps {
  indiceReg: IIndiceRegResponse | undefined;
  quantidadeClientes: number;
}

const GraficoIndiceRegularidade: React.FC<IGraficoIndiceRegularidadeProps> = ({ quantidadeClientes,indiceReg }) => {
  // Adicionar uma chave única se necessário
  const dados = indiceReg?.indices?.slice(0, quantidadeClientes)?.map((item, index) => ({
    ...item,
    uniqueKey: `${item.devedor_id}-${item.desvio_padrao}-${item.indice_regularidade}-${index}`,
  }));
  


  return (
    <ResponsiveContainer width="105%" height={500}>
      <BarChart
        data={dados}
        margin={{
          top: 120,
          right: 100,
          bottom: 50,
          left: 100,
        }}
        barCategoryGap={10}
        barGap={2}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="devedor_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="desvio_padrao" stackId="a" fill="#8884d8" />
        <Bar dataKey="indice_regularidade" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export { GraficoIndiceRegularidade };
