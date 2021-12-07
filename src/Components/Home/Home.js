import React, {Component} from 'react';

class Home extends Component {
    render(){
        console.log('We did it.')

        return(
            <div className="home">
                <div className="column">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square noBorderBottom"></div>
                </div>
                <div className="column">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square noBorderBottom"></div>
                </div>
                <div className="column noBorderRight">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square noBorderBottom"></div>
                </div>
            </div>
        )
    }
}

export default Home