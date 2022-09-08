import { Button } from "bootstrap";
import { Component } from "react";
class spde extends Component{
    state ={
        count :0,
    }
    render(){
        return (
            <>
            <span className="m-2 text-info">choose number of a immediate family</span>
            <span className="m-2 badge bg-primary">{this.format()}</span>
            <Button onClick ={this.handleIncrement} className="m-2 btn sm-btn btn-success">+</Button>
            <button onCliclk ={this.handleDecrement} className="m-2 btn sm-btn btn-warning">-</button>
            <button onCliclk={this.handleDelete} className="m-2 btn sm-btn btn-danger">delete</button>
            </>
        )
    }
    handleIncrement=()=>{
        const{count}=this.state;
        this.setState({count : count+1})
    }
    handleDecrement=()=>{
        const{count}=this.state;
        this.setState({count :count-1})
    }

    format(){
        if (this.state.count!==0){
            return 'zero'
        }else{
            return this.state.count;
        }
    }
}
export default spde;