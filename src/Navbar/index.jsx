export function Navbar(props){
    function goToPrevious(){
        props.setCurrentIndex(props.CurrentIndex - 1)
    }

    function goToNext(){
        props.setCurrentIndex(props.CurrentIndex + 1)
    }

    return <div>
        <button onClick={goToPrevious}>voltar</button>
        <button>resposta</button>
        <button onClick={goToNext}>avançar</button>
    </div>
}

