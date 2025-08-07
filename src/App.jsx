import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'
import { Navbar } from './Navbar'

function App() {

  const questions = [
    { text: "O que é React?", answer: "React é uma biblioteca JavaScript para construção de interfaces de usuário, desenvolvida pelo Facebook." },
    { text: "O que é JSX?", answer: "JSX é uma extensão de sintaxe do JavaScript que permite escrever HTML dentro do JavaScript." },
    { text: "O que são componentes em React?", answer: "Componentes são blocos reutilizáveis de código que definem partes da interface do usuário." },
    { text: "Qual a diferença entre componentes de classe e funcionais?", answer: "Componentes de classe usam classes ES6 e possuem state e lifecycle methods, enquanto componentes funcionais são funções simples que podem usar hooks para gerenciar estado e efeitos." },
    { text: "O que é o useState?", answer: "useState é um hook que permite adicionar estado a componentes funcionais." },
    { text: "O que é o useEffect?", answer: "useEffect é um hook que permite executar efeitos colaterais em componentes funcionais, como chamadas a APIs ou manipulação de DOM." },
    { text: "O que são props?", answer: "Props são propriedades passadas para componentes, permitindo que dados fluam de componentes pais para filhos." },
    { text: "O que é o Virtual DOM?", answer: "O Virtual DOM é uma representação leve da UI em memória que permite que o React atualize apenas as partes da interface que mudaram, aumentando a performance." },
    { text: "Como você cria um evento de clique em React?", answer: "Você cria um evento de clique usando a prop 'onClick', passando uma função que será executada quando o evento ocorrer." },
    { text: "O que é lifting state up?", answer: "Lifting state up é a prática de mover o estado para o componente pai para compartilhá-lo entre componentes filhos." }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const[answerIsVisible, setAnswerIsVisible] = useState(false)
  const currentQuestion = questions[currentIndex]
  
  const lastIndex = questions.length -1

  return <>
    <Card text = {answerIsVisible ? currentQuestion.answer : currentQuestion.text} />
    <Navbar 
    setCurrentIndex = {setCurrentIndex} 
    currentIndex= {currentIndex} 
    lastIndex={lastIndex}
    answerIsVisible = {answerIsVisible}
    setAnswerIsVisible = {setAnswerIsVisible}
    />
  </>
     
}

export default App
