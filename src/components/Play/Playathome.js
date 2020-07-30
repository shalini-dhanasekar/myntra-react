import React,{Component} from 'react';
import {Row} from 'react-bootstrap';
import './Playathome.css';

class Playathome extends Component{
    render(){
        return(
            <div>
            <h2 className="textplay">Play At Home</h2>

                <Row className="play">

                <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/22/95c386ff-73fc-4a1d-8583-ac97bb617c6f1590134696200-Daily-Crossword.jpg" width="25%" height="auto"/>
                <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/22/6304aeb2-a946-4d5d-ab7f-70b1cc3bf9a01590134696240-Daily-quiz.jpg"  width="25%" height="auto"/>
                <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/22/37434a84-ac9b-41c0-8c44-6309011138501590134696318-Pictionary.jpg" width="25%" height="auto"/>
                <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/7/23/8c6c86c2-557e-450c-ada6-e47cf81fdf471595482629772-Myngo.jpg" width="25%" height="auto"/>
                </Row>


            </div>
       
            );
    }
}
export default Playathome;