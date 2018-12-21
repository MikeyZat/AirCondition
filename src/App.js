import React, {Component} from 'react';
import "./themes/App.css";
import AirInfo from './components/AirInfo'

class App extends Component {

    state = {
        shouldRender: false,
        id:0
    };

    getData = () => {
        let select = document.getElementById("regions");
        let id = select.options[select.selectedIndex].value;
        if (id > 0) {
            console.log("ładuję dane");
            this.setState({
                shouldRender: true,
                id
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

                <section id="airInfo">
                    <AirInfo
                        shouldRender={this.state.shouldRender}
                        id={this.state.id}
                    />
                </section>

            </div>
        );
    }
}

export default App;
