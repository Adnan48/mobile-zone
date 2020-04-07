import React,{PureComponent} from 'react';

type Props = {};

export default class Text extends PureComponent<Props>{
    render(){
        return(
            <p style={{ ...this.props.style  }} >
                {this.props.children}
                </p>
        )
    }
}