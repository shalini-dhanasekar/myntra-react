import React,{Component} from 'react';
import { Carousel} from 'react-bootstrap';

class Maincarousel3 extends Component{
    render(){
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/d0a0ffbb-3d8c-4d3a-8156-9115da2e28ee1595876907259-MAC_Desk.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/3a892d3c-1315-4e26-a676-d8ce49bc2d211595936813694-Flat500.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/5fc753b6-2f1b-47fd-a721-f6af427c7bda1595876907103-UpTo300.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

       
            );
    }
}
export default Maincarousel3;