import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder = "Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder = "digite seu cargo"/>
      <CampoTexto label="Imagem" placeholder = "digite o endereço da imagem"/>

    </div>
  );
}

export default App;
