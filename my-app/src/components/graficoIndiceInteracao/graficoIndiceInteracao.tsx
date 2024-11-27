import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { InputNumber } from "primereact/inputnumber"; // Importando InputNumber
import { useEffect, useState } from "react";
import { IIndiceIntResponse } from "../../@types/IIndiceIntResponse";

interface IGraficoIndiceInteracaoProps {
  indiceInt: IIndiceIntResponse | undefined;
  quantidadeClientes: number;
  minValue: number;
  maxValue: number;
}

const GraficoIndiceInteracao: React.FC<IGraficoIndiceInteracaoProps> = ({
  indiceInt,
  quantidadeClientes,
  minValue,
  maxValue,
}) => {
  const [min, setMin] = useState<number>(minValue || 0);
  const [max, setMax] = useState<number>(maxValue || 10);

  const dados = indiceInt?.contas
    ?.slice(0, quantidadeClientes)
    .filter((item) => item.indice_interacao >= min && item.indice_interacao <= max)
    .map((item, index) => ({
      ...item,
      uniqueKey: `${item.devedor_id}-${item.conta_id}-${item.indice_interacao}-${index}`,
    }));

  return (
    <div>
      {/* InputNumber para ajuste do intervalo */}
      <div className="flex flex-row pt-3">
        <div className="mr-2 pl-2">
          <label htmlFor="minValue">Valor mínimo</label>
          <InputNumber value={min} onValueChange={(e) => setMin(e.value ?? 0)} min={0} max={10} />
        </div>
        <div className="mr-2">
          <label htmlFor="maxValue">Valor máximo</label>
          <InputNumber value={max} onValueChange={(e) => setMax(e.value ?? 10)} min={0} max={10} />
        </div>
      </div>

      {/* Gráfico */}
      <ResponsiveContainer width="105%" height={500}>
        <BarChart
          data={dados}
          margin={{
            top: 50,
            right: 100,
            bottom: 50,
            left: 70,
          }}
          barCategoryGap={10}
          barGap={2}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="devedor_id" />
          <YAxis dataKey="indice_interacao" />
          <Tooltip />
          <Legend />
          <Bar dataKey="indice_interacao" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { GraficoIndiceInteracao };
