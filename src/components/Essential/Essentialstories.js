import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import './Essentialstories.css'

class Essentialstories extends Component{
    render(){
        return(
            <div>
            <h2 className="textplay">Essential Stories</h2>
            <Row className="essential">
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/6/6b4a1fc8-c772-4210-a1fb-a66ca023c2f91588763003663-Final-Desktop-revamp_23_01_01.jpg"width="33%" height="auto"/>
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/6/f05f0f31-03cd-478b-b6d0-89fc7cfad4971588763003707-Final-Desktop-revamp_23_01_02.jpg"width="33%" height="auto"/>
            <img src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/6/00eec4e8-8d8c-42f7-8d26-67720c8032661588763003748-Final-Desktop-revamp_23_01_03.jpg"width="33%" height="auto"/>
            </Row>
            </div>
       
            );
    }
}
export default Essentialstories;