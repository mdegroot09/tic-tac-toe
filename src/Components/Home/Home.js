import React, {Component} from 'react';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            turnX: true,
            squares: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']
        }
    }

    fillSquare = (id) => {
        let {turnX} = this.state
        let mark = turnX ? 'X' : 'O'
        let e = document.getElementById(id)
        e.innerText = mark
        e.style.pointerEvents = 'none'
        let isGameOver = this.checkForWinner(mark, id)
        isGameOver ? this.completeGame() : this.setState({turnX: !turnX})
    }

    checkForWinner = (mark, id) => {
        let a1 = document.getElementById('a1').innerText
        let a2 = document.getElementById('a2').innerText
        let a3 = document.getElementById('a3').innerText
        let b1 = document.getElementById('b1').innerText
        let b2 = document.getElementById('b2').innerText
        let b3 = document.getElementById('b3').innerText
        let c1 = document.getElementById('c1').innerText
        let c2 = document.getElementById('c2').innerText
        let c3 = document.getElementById('c3').innerText
        switch (id){
            case 'a1':
                if ((a1 === mark && a2 === mark && a3 === mark) || (a1 === mark && b1 === mark && c1 === mark) || (a1 === mark && b2 === mark && c3 === mark)){
                    return true
                } else {return false}
            case 'a2':
                if ((a1 === mark && a2 === mark && a3 === mark) || (a2 === mark && b2 === mark && c2 === mark)){
                    return true
                } else {return false}
            case 'a3':
                if ((a1 === mark && a2 === mark && a3 === mark) || (a3 === mark && b3 === mark && c3 === mark) || (a3 === mark && b2 === mark && c1 === mark)){
                    return true
                } else {return false}
            case 'b1':
                if ((b1 === mark && b2 === mark && b3 === mark) || (a1 === mark && b1 === mark && c1 === mark)){
                    return true
                } else {return false}
            case 'b2':
                if ((b1 === mark && b2 === mark && b3 === mark) || (a2 === mark && b2 === mark && c2 === mark) || (a1 === mark && b2 === mark && c3 === mark) || (a3 === mark && b2 === mark && c1 === mark)){
                    return true
                } else {return false}
            case 'b3':
                if ((b1 === mark && b2 === mark && b3 === mark) || (a3 === mark && b3 === mark && c3 === mark)){
                    return true
                } else {return false}
            case 'c1':
                if ((c1 === mark && c2 === mark && c3 === mark) || (a3 === mark && b3 === mark && c3 === mark)){
                    return true
                } else {return false}
            case 'c2':
                if ((c1 === mark && c2 === mark && c3 === mark) || (a2 === mark && b2 === mark && c2 === mark)){
                    return true
                } else {return false}
            case 'c3':
                if ((c1 === mark && c2 === mark && c3 === mark) || (a3 === mark && b3 === mark && c3 === mark) || (a1 === mark && b2 === mark && c3 === mark)){
                    return true
                } else {return false}
            default:
                return false
        }
    }

    completeGame = () => {
        let winner = document.getElementById('winner')
        let turn = document.getElementById('turn')

        winner.style.display = 'block'
        turn.style.display = 'none'

        let {squares} = this.state
        squares.forEach(id=>{
            document.getElementById(id).style.pointerEvents = 'none'
        })
    }

    render(){
        let turnX = this.state.turnX ? 'X' : 'O'

        return(
            <div className="home">
                <h1 id="winner" style={{display: 'none'}}>{turnX} WINS!</h1>
                <h1 id="catsGame" style={{display: 'none'}}>Cat's Game!</h1>
                <h1 id="turn">{turnX}'s turn</h1>
                <div className="board">
                    <div className="column">
                        <div className="square" id="a1" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square" id="a2" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square noBorderBottom" id="a3" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className="column">
                        <div className="square" id="b1" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square" id="b2" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square noBorderBottom" id="b3" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                    <div className="column">
                        <div className="square noBorderRight" id="c1" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square noBorderRight" id="c2" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                        <div className="square noBorderRight noBorderBottom" id="c3" onClick={(e) => {this.fillSquare(e.target.id)}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home