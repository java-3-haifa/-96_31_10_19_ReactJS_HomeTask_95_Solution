import React,{Component} from 'react';
import SimpleCounter from './Counter.js';
import AdvCounter from './AdvCounter.js';

export default class extends Component{
    render(){
       return  (
            <div>
                <h2>Simple counter</h2>
                <SimpleCounter min={10} max={20}/>
                <h2>Advanced counter</h2>
                <AdvCounter min={20} max={50}/>
            </div>
        )
    }
}
