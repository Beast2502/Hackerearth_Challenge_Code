import React, { Component } from 'react';

class Home extends Component {

    
    render() {

        

        console.log("props",this.props.data)
        
        
        
        

        const data = this.props.data.map( (data,i) =>
        {if (data.id <11)
                
        return  <div key={i} className="col-md-4">
        
        <div className="card text-center">
            <div className="overflow">
                <img src ={data.url} alt={data.id} width="200rem" height="200repm"/>
            </div>
            <div className="card-body text-dark"></div>
            <h4 className="card-title">{data.id}</h4>
            <a href="#" className="btn btn-outline-primary">View Profile</a>
            <a href="#" className="btn btn-outline-success">Shortlisted</a>
            <a href="#" className="btn btn-outline-danger">Rejected</a>
        </div>
    </div>

    

        }
        )
        return (
            <>
            
            <div className="conatainer-fluid d-fles justify-content-center">
                <div className="row">
                
                {data}
                
                </div>
            </div>
            </>
        );
    }
}

export default Home;