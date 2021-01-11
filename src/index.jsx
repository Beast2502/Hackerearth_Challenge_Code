import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Switch, Route , Redirect ,BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'



import Header from './Component/Header';
import Home from './Component/Home';
import Shortlisted from './Component/Shortlisted';
import Rejected from './Component/Rejected';
import SearchBox from './Component/Search';


import axios from 'axios';

class Index extends Component {

  state={
    persons:[],
    searchBox: " "
  }

  componentDidMount(){

    axios.get(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`)
    .then(res=>{
      this.setState({
        persons: res.data
      });
    })


  }

  handleInput =(e)=>{
    console.log(e.target.value)
    this.setState({
      searchBox : e.target.value
    })

  }
  render() {

    const filterdata = this.state.persons.filter((data)=>
    {
      return data.name.toLowerCase().includes(this.state.searchBox.toLowerCase())
    })
      
    const HomePage =()=>{
      return (<Home data = {filterdata}/>)
    }
   
    return (
      
      <>
      
      
      <BrowserRouter>
      <Header/>
      <SearchBox handleInput={this.handleInput}/>
      <Switch>
      
        <Route exact path="/home" component ={HomePage}/>
        <Route path="/shortlisted" component = {()=><Shortlisted/>}/>
        <Route path ='/rejected' component = {()=><Rejected/>}/>
        <Redirect to ="/home"/>

        
        
      </Switch>
      </BrowserRouter>
      
    
      </>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('root'));