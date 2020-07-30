import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import './Diyathome.css';

class Diyathome extends Component{
    render(){
        return(
            <div>
            <h2 className="textplay">DIY At Home</h2>
            <Row className="diy">
            <img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/1/b77a500e-0db1-43e0-9b7f-27b12cb772b11585744715055-Final-Desktop-revamp_16_01.jpg" width="50%" height="auto"/>
            <img src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/1/b600636a-25db-4fe0-b33d-717198578ace1585744715017-Final-Desktop-revamp_16_02.jpg" width="50%" height="auto"/>
            </Row>
            </div>
       
            );
    }
}
export default Diyathome;