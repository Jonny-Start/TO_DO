import React from 'react';
import { AppUI } from './AppUI'
import { ToDoProvider } from './../ToDoContext'

function App() {
  return (
    <ToDoProvider>
      {/* Hemos definido en el archivo de ToDoProvider que todo lo que contenga, puede acceder a los valores de las funciones */}
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
