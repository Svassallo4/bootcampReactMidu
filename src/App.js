
import './App.css';
import ModuloExportado from './nuevoModulo'

//Creo mis componentes//

const Mensaje = () => {
  return <h1>Hola mundo</h1>
}

const Descripcion = () => {
  return <p>Aprendiendo REACT!!</p>
}




function App() {  
  return (
    <div className="App">
      <Mensaje />
      <Descripcion />
      <ModuloExportado color='red' message='Estamos trabajando en ello' />
      <ModuloExportado color='green' message='(modulo exportado con un parametro) "nuevoModulo" "params" ' />  
      <ModuloExportado color='violet' message='App de react' />
    </div>
  );
}

export default App;
