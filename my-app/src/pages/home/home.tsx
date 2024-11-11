import React, { useState } from 'react';
import FiltroIndices from '../../components/filtro/filter';
import GraficoIRep from '../../components/graficos/graficos';
import Cliente from '../../components/cliente/cliente';
import { ContainerHome } from './homeStyle';

const Home: React.FC = () => {
  const [selectedIndices, setSelectedIndices] = useState<string[]>([]);

  return (
    <div className="App">
      <Cliente/>
      <ContainerHome>
        <FiltroIndices onSelectIndices={setSelectedIndices} />
        <GraficoIRep selectedIndices={selectedIndices} />
      </ContainerHome>
    </div>
  );
}

export default Home;
