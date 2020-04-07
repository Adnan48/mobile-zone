import React, {PureComponent} from 'react';
import View from './View';
import Text from './Text';
import {DropdownButton, DropdownItem} from 'react-bootstrap';

export default class DropDown extends PureComponent{
    render(){
        const {options, onSelect, defaultOption } = this.props;
        return(
    <DropdownButton title={defaultOption} >
    {options.map(o => <DropdownItem onSelect={() => onSelect(o)} ><Text style={{background: '#ffffff', padding: 10}} >{o}</Text></DropdownItem>)}
    </DropdownButton>
        )
    }
}