import React,{Component} from 'react';
import './App.css';
import Navigationbar from './components/Navbar/Navigationbar';
import Maincaroseul1 from './components/caroseul1/Maincaroseul1';
import Maincaroseul2 from './components/caroseul2/Maincaroseul2';
import Maincaroseul3 from './components/caroseul3/Maincaroseul3';
import Cardcategories from './components/Cardcategory/Cardcategories';
import Explore from './components/Explorecards/Explore';
import Playathome from './components/Play/Playathome';
import Centerpic from './components/Center/Centerpic';
import Diyathome from './components/DIY/Diyathome';
import Coloredit from './components/Color/Coloredit';
import Essentialstories from './components/Essential/Essentialstories';
import Footer from './components/Footerfile/Footer';

class App extends Component {
  render(){
  return (
    <div className="main">

    <Navigationbar/>
    <Maincaroseul1/>
    <Maincaroseul2/>
    <Maincaroseul3/>
    <Cardcategories/>
    <Explore/>
    <Playathome/>
    <Centerpic/>
    <Diyathome/>
    <Coloredit/>
    <Essentialstories/>
    <Footer/>





      </div>
        );
      }
      }

export default App;