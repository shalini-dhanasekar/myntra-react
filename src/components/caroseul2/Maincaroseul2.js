import React,{Component} from 'react';
import { Carousel} from 'react-bootstrap';


class Maincarousel2 extends Component{
    render(){
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/14/4f5f11f3-dd6f-4a65-8477-0dc28a49fa8e1594751303618-PayZap-desktop-strips.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/2/11/50837176-6137-46cb-b7ad-f9bf34c180871581415422575-Desktop.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/10/29/c7bcbc44-18f5-4769-bc7b-1791e5f849bc1572350261990-Airtel-strip-D-.jpG"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

       
            );
    }
}
export default Maincarousel2;