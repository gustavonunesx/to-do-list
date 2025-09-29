import React, {useState} from 'react'; // Import de React
import TodoList from "./TodoList"; // Import de TodoList (com TodoItem)

// Componente Principal
export default function App(){

  // Variável de estado que guarda todas atividades
  const [todos, setTodos] = useState([]); // [] -> Lista, Array

  // Variável de estado - Relativo à tarefa
  const [newTask, setNewTask] = useState(""); // " " -> Tarefa, Texto

  // Variável de estado - Relativo à Data
  const [datadia, setDatadia] = useState(""); // " " -> Tarefa, Texto

  // Variável de estado - Relativo à Hora
  const [hora, setHora] = useState(""); // " " -> Tarefa, Texto

  // Primeira Function:
  // Adiciona Tarefa na Lista
  const addTask = () => {
    if (newTask.trim() === "") return // ".trim" -> "Raspa" os espaços vazios de uma String

    // Criando um Objeto que represente a atividade
    const newTodo = {
      id: Date.now(), // Criação de ID único baseado na hora ATUAL (.now)
      text: newTask,
      date: datadia,
      hora: hora
    }

    setTodos([...todos, newTodo]); // "..." -> Pega todos os elemento dentro do Array 'to-dos' e esparrama dentro do novo array junto de 'newTodo'
    
    // Limpeza de variáveis de estado:
    setNewTask("");
    setDatadia("");
    setHora("");
  }

  // Função de remoção de tarefas pelo id
  const removeTask = (id) => (
    setTodos(todos.filter((todo) => todo.id !== id)) // Filtra 'to-dos'
  );

  return(
    <div>
      <h1>Minha To-Do List</h1>
      <div>
        <input
        type="text"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // "e" é referenciado ao Input/estímulo de evento
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <div>
        <TodoList todos = {todos} removeTask = {removeTask}/>
      </div>

    </div>
  )

}