import React, {Component} from 'react';
import "./themes/App.css";
import AirInfo from './components/AirInfo'

class App extends Component {

    state = {
        info: {},
        shouldRender: false
    };

    getData = () => {
        let select = document.getElementById("regions");
        let id = select.options[select.selectedIndex].value;
        if (id > 0) {
            console.log("ładuję dane");
            this.setState({
                shouldRender: true
            });

        }

    };

    render() {

        return (
            <div className="App">
                <header>
                    <h1>Sprawdź stan powietrza i pogodę</h1>
                </header>
                <section id="chooseRegion">
                    <form>
                        <label htmlFor="region">Wybierz dzielnicę</label>
                        <div className="select">
                            <select name="region" id="regions" onChange={this.getData}>
                                <option value="0">Wybierz dzielnicę</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </form>
                </section>

                <section id="airInfo">
                    <AirInfo
                        shouldRender={this.state.shouldRender}
                        info={this.state.info}
                    />
                </section>

            </div>
        );
    }
}

export default App;
