import React, {Component} from 'react';
import "../themes/DataTable.css"
class DataTable extends Component{



    componentDidMount(){
        this.draw();
    }

    componentDidUpdate(){
        this.clear();
        this.draw();
    }

    draw = () =>{

        let params = [];
        for (let key in this.props.data) {
            switch (key) {
                case "pył zawieszony PM10":
                    params.push({
                    value:this.props.data[key] / 50,
                    name: 'PM10'
                    });
                    break;
                case "pył zawieszony PM2.5":
                    params.push({
                        value:this.props.data[key] / 25,
                        name: 'PM2.5'
                    });
                    break;
                case "dwutlenek azotu":
                    params.push({
                        value:this.props.data[key] / 80,
                        name: 'NO2'
                    });
                    break;
                case "dwutlenek siarki":
                    params.push({
                        value:this.props.data[key] / 125,
                        name: 'SO2'
                    });
                    break;
                case "benzen":
                    params.push({
                        value:this.props.data[key] / 5,
                        name: 'benzen'
                    });
                    break;
                case "tlenek węgla":
                    params.push({
                        value:this.props.data[key] / 3000,
                        name: 'CO2'
                    });
                    break;
                default:
                    break;
            }
        }

        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = "#66cc66";
        let width = 10; //bar width
        let X = 15; // first bar position
        ctx.fillRect(X,120,180,1);
        ctx.fillText("poziom dopuszczalny",200,120);
        for (let i =0; i<params.length; i++) {
            ctx.fillStyle = '#f39c12';
            let h = Math.floor(params[i].value*20);
            ctx.fillRect(X,canvas.height - h-10,width,h);

            X +=  width+25;
            /* text to display Bar number */
            ctx.fillStyle = '#f39c12';
            ctx.fillText(params[i].name,X-width-30,canvas.height );
        }
    };


    clear = () =>{
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };


    render() {


        let dataList = [];

        for (let key in this.props.data) {
            if (this.props.data[key])
                dataList.push(
                    <li key={key}><span className="sensor"> {key}:</span> {this.props.data[key]}</li>
                );
            else
                dataList.push(
                    <li key={key}><span className="sensor">{key}:</span> Brak aktualnych danych</li>
                );
        }
        return <div>
            <ul className="sensors">
                {dataList}
            </ul>
            <canvas id="myCanvas"></canvas>
        </div>;
    }
};

export default DataTable;