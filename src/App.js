import React, {Component} from 'react';
import "./themes/App.css";
import AirInfo from './components/AirInfo'

class App extends Component {

    state = {
        shouldRender: false,
        id:0
    };

    showData = () => {
        let select = document.getElementById("regions");
        let id = select.options[select.selectedIndex].value;
        if (id > 0) {
            this.setState({
                shouldRender: true,
                id
            });

        }else{
            this.setState({
                shouldRender: false,
                id
            })
        }

    };

    changeColor = (colorCase) =>{
        let body = document.getElementsByTagName("body")[0];
        if(body.classList.length) body.classList.remove(body.classList);
        switch(colorCase){
            case 0:
                body.classList.add("green");
                break;
            case 1:
                body.classList.add("green-yellow");
                break;
            case 2:
                body.classList.add("yellow");
                break;
            case 3:
                body.classList.add("yellow-red");
                break;
            case 4:
                body.classList.add("red");
                break;
            default:
                break;
        }
    };

    render() {

        return (
            <div className="App">
                <div className="app-container">
                    <div className="form-container">
                        <header>
                            <h1>Sprawdź stan powietrza</h1>
                        </header>
                        <section id="chooseRegion">
                            <form>
                                <label htmlFor="region">Wybierz dzielnicę</label>
                                <div className="select">
                                    <select name="region" id="regions" onChange={this.showData}>
                                        <option value="0">Wybierz dzielnicę</option>
                                        <option value="400">al. Krasińskiego</option>
                                        <option value="401">ul. Bujaka</option>
                                        <option value="402">ul. Bulwarowa</option>
                                        <option value="10121">ul. Dietla</option>
                                        <option value="10123">ul. Złoty Róg</option>
                                        <option value="10139">os. Piastów</option>
                                        <option value="10447">ul. Wadów</option>
                                    </select>
                                </div>
                            </form>
                        </section>
                    </div>
                    <section id="airInfo">
                        <AirInfo
                            shouldRender={this.state.shouldRender}
                            id={this.state.id}
                            changeColor = {this.changeColor}
                        />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
