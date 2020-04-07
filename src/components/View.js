import React,{PureComponent} from 'react';

export default class View extends PureComponent{
    render(){
        return(
            <div style={{ position: 'relative',
            display: 'flex', flexDirection: 'row', ...this.props.style }} >
                {this.props.children}
                </div>
        )
    }
}