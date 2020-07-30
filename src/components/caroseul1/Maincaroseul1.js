import React,{Component} from 'react';
import { Carousel} from 'react-bootstrap';
import './Maincaroseul1.css'

class Maincarousel1 extends Component{
    render(){
        return(
            <div className="topcarousel">
            <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/27/3013e2fd-c939-4e77-acd3-d3180cf7ab6e1595871605012-premiumPC_dk.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/27/7a19f7d6-a87a-4698-9e01-cb927892212a1595871605346-Sangria_Desk.jpg"
                alt="second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/27/ee39f9c9-f3f7-4bff-b0c4-9f4ea5a658331595871605194-M-H_Desk_Banner.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
            </div> 
       
       
       
            );
    }
}
export default Maincarousel1;