import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { IIndiceRepResponse } from "../../@types/IIndiceRepResponse";
import { InputNumber } from "primereact/inputnumber"; // Para o InputNumber
import { useState } from "react";

interface IGraficoIndiceReputacao {
  indiceRep: IIndiceRepResponse | undefined;
  quantidadeClientes: number;
  minValue: number;
  maxValue: number;
}

export const GraficoIndiceReputacao: React.FC<IGraficoIndiceReputacao> = ({
  indiceRep, 
  quantidadeClientes, 
  minValue, 
  maxValue 
}) => {
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  const dados = indiceRep?.indices
    ?.slice(0, quantidadeClientes)
    .filter((item) => item.i_rep >= min && item.i_rep <= max)
    .map((item, index) => ({
      ...item,
      uniqueKey: `${item.devedor_id}-${item.conta_id}-${index}`,
    }));

  return (
    <div>
      {/* Filtros para intervalo de valores */}
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

      <ResponsiveContainer width="105%" height={500}>
        <LineChart
          data={dados}
          margin={{
            top: 50,
            right: 100,
            bottom: 50,
            left: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="devedor_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="i_pag" stroke="#8884d8" />
          <Line type="monotone" dataKey="i_reg" stroke="#82ca9d" />
          <Line type="monotone" dataKey="i_int" stroke="#ffc658" />
          <Line type="monotone" dataKey="i_rep" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
