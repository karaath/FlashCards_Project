export function Navbar(props){
    function goToPrevious(){
        if(props.currentIndex === 0) return
        props.setAnswerIsVisible(false)
        props.setCurrentIndex(props.currentIndex - 1)
    }

    function goToNext(){
        if(props.currentIndex === props.lastIndex) return
        props.answerIsVisible(false)
        props.setCurrentIndex(props.currentIndex + 1)
    }

    function flipCard(){
        props.setAnswerIsVisible(!props.answerIsVisible)
    }

    return <div>
        <button onClick={goToPrevious}>voltar</button>
        <button onClick={flipCard}>Mostrar {props.answerIsVisible ? 'pergunta' : 'resposta'}</button>
        <button onClick={goToNext}>avançar</button>
    </div>
}

