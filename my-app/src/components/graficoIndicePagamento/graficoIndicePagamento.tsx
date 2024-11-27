import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import { IIndicePagResponse } from "../../@types/IIndicePagResponse";
import { InputNumber } from "primereact/inputnumber"; // Para o InputNumber
import { useState } from "react";

interface IIGraficoIndicePagamento {
  indicePag: IIndicePagResponse | undefined;
  quantidadeClientes: number;
  minValue: number;
  maxValue: number;
}

const GraficoIndicePagamento: React.FC<IIGraficoIndicePagamento> = ({ indicePag, quantidadeClientes, minValue, maxValue }) => {
  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  const dados = indicePag?.contas
    ?.slice(0, quantidadeClientes)
    .filter((item) => item.indice_pagamento >= min && item.indice_pagamento <= max)
    .map((item, index) => ({
      ...item,
      uniqueKey: `${item.devedor_id}-${item.conta_id}-${item.indice_pagamento}-${index}`,
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
        <ScatterChart
          margin={{
            top: 50,
            right: 100,
            bottom: 50,
            left: 70,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="media_tempo_pagamento" name="Média de Tempo de Pagamento" unit="dias" />
          <YAxis type="number" dataKey="indice_pagamento" name="Índice de Pagamento" unit="nota" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Indice de Pagamento por Média de Tempo de Pagamento" data={dados} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export { GraficoIndicePagamento };
