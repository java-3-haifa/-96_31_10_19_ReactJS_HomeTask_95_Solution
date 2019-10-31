import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.min
        }

    }

    inc() {
        let current = this.state.current;
        current++;
        this.setValue(current);
    }

    dec() {
        let current = this.state.current;
        current--;
        this.setValue(current);
    }

    setValue(value) {
        let current = Math.max(this.props.min, Math.min(this.props.max, value));
        this.setState({current});
    }

    onChangeHandler(e) {
        let inp = parseInt(e.target.value);
        this.setValue(inp);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.dec()}>-</button>
                <input type="text"
                       value={this.state.current}
                       onChange={e => this.onChangeHandler(e)}/>
                <button onClick={() => this.inc()}>+</button>
            </div>
        )
    }
}
