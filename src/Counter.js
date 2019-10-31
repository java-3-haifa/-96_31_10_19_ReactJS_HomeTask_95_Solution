import React,{Component} from 'react';

export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : props.min
        }

    }

    inc(){
        let current = this.state.current;
        current++;
        if(current <= this.props.max){
            this.setState({current});
        }
    }

    dec = ()=>{
        let current = this.state.current;
        current--;
        if(current >= this.props.min){
            this.setState({current});
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.dec.bind(this)}>-</button>
                <span>{this.state.current}</span>
                <button onClick={()=>this.inc()}>+</button>
            </div>
        )
    }
}
