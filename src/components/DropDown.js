import React, {PureComponent} from 'react';
import View from './View';
import Text from './Text';
import {DropdownButton, DropdownItem} from 'react-bootstrap';

export default class DropDown extends PureComponent{
    render(){
        const {options, onSelect, defaultOption, placeholder } = this.props;
        return(
    <DropdownButton title={defaultOption || placeholder} style={{ width: '40%', textAlign: 'center', background: '#ffffff' }} >
    {options.map(o => <DropdownItem onSelect={() => onSelect(o)}>
        <View style={{ background: '#ffffff', padding: 5, border: '1px solid #000000',  width: '100%' }} >
            <Text style={{background: '#ffffff'}} >{o}</Text>
            </View>
        </DropdownItem>)}
    </DropdownButton>
        )
    }
}
