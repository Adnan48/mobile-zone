import React, {PureComponent} from 'react';

export default class Button extends PureComponent{
    render(){
        return(
        <button style={{ padding: 10, margin:5,  ...this.props.style }} onClick={this.props.onClick} >{this.props.children}</button>
        );
    }
}