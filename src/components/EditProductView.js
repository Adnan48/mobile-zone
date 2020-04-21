import React, {PureComponent} from 'react';
import View from './View';

import Text from './Text';
import {connect} from 'react-redux';
import { TextField, Radio, Checkbox } from '@material-ui/core';
import {getEditProductData, updateProductData, saveEditedData} from '../actions/uiAction';
import Button from './Button';
import DropDown from './DropDown';
import {pricingInfo} from '../product';


 class EditProductView extends PureComponent{
     constructor(){
         super();
         this.state ={ errorMsg : null };
     }

    componentDidUpdate(prevProps){
        const {editStatus} = this.props;
        if(editStatus === 'FULFILLED' && prevProps.editStatus !== editStatus ){
            this.props.history.goBack();
        }
    }

    componentDidMount(){
        this.props.dispatch(getEditProductData(this.props.index));
    }

    onChangeName = (e) => this.props.dispatch(updateProductData({name: e.target.value}));

    onChangeWeight = (e) => this.props.dispatch(updateProductData({weight: e.target.value}));

    onChangeAvailability = (e) => this.props.dispatch(updateProductData({availability: e.target.value}));

    onChangeProductUrl = (e) => this.props.dispatch(updateProductData({productUrl: e.target.value}));

    onClickRadioButton = (e) => {
        this.props.dispatch(updateProductData({pricingTier: e.target.value}));
        this.props.dispatch(updateProductData({priceRange: null}));
    }

    onSelectDropDownOption = (e) => {
        this.props.dispatch(updateProductData({priceRange: e}));
    }

    onClickedCheckBox = (e) => {
        console.log(e.target.checked);
        this.props.dispatch(updateProductData({isEditable: e.target.checked}));
    }

    onClickSaveButton = () =>{
        const {editedProduct, index} = this.props;
        if(this.checkValidation()){
        this.props.dispatch(saveEditedData(index));
        }
    }

    checkValidation(){
        const {name, weight, productUrl, pricingTier} = this.props.editedProduct;
        if(name !== '' && weight !== '' && productUrl !== '' && pricingTier !== "" ){
            return  true;
        }else{
            this.setState({errorMsg: 'Fill up all Details'});
            return false;
            }
        }

    render(){
        const {editedProduct} = this.props;
        const {errorMsg} = this.state;
        if(!editedProduct) return null;
        const {pricingTier, name, weight, availability, productUrl, priceRange, isEditable} = editedProduct;
                return(
            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '80%', padding: 10, borderStyle: 'solid', borderWidth: 1 }} > 
                <Text style={{ textAlign: 'center'}} > Edit Product </Text> 
                <EditProduct property="Name" value={name} onChange={this.onChangeName} required />
                <EditProduct property="Weight" value={weight} onChange={this.onChangeWeight} required />
                <EditProduct property="Availability" value={availability} onChange={this.onChangeAvailability} />
                <EditProduct property="Product URL" value={productUrl} onChange={this.onChangeProductUrl} required />
                <View style={{padding: 5, width: '50%', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{width: '25%', textAlign: 'center'}} >Price Tier </Text>
                    <Text style={{ padding: '0px 15px' }} >:</Text>
                    <Radio value="budget" checked={pricingTier === "budget"} onChange={this.onClickRadioButton} />
                    <Text>Budget</Text>
                    <Radio value="premier" checked={pricingTier === "premier"} onChange={this.onClickRadioButton} />
                    <Text>Premier</Text>
                </View>
                <View style={{padding: 5, width: '50%', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{width: '30%', textAlign: 'center'}} >Pricing Range </Text>
                    <Text style={{ padding: '0px 15px' }} >:</Text>
                <DropDown options={pricingTier === 'budget' ? pricingInfo['budget'] : pricingInfo['premier'] } defaultOption={priceRange}
                onSelect={this.onSelectDropDownOption}
                placeholder="Select a pricing range"
                />
                </View> 
                <View style={{ flexDirection: 'row' }} >
                <Checkbox checked={isEditable} onChange={this.onClickedCheckBox} />
                 <Text>Can Edit</Text>
                </View>
                {errorMsg && <Text style={{color: '#f44336'}} >{errorMsg}</Text>}
                <Button style={{ padding: 10, width: '30%', borderRadius: 5, background: '#29B6F6' }} onClick={this.onClickSaveButton} > Save </Button>
                </View>
        )
    }
}

function mapStateToProps(reduxStore){
    return{
        editedProduct: reduxStore.uiReducer.editedProduct,
        editStatus: reduxStore.uiReducer.editStatus,
    }
}

export default connect(mapStateToProps, null)(EditProductView)


class EditProduct extends PureComponent{
    render(){
        const {property, onChange, value, type,label, required} = this.props;
        return(
<View style={{ padding: 5, width: '50%', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{ width: '25%', textAlign: 'center' }} > {property} </Text>
                    <Text style={{ padding: '0px 15px' }} >:</Text>
                    <TextField
                    variant="outlined"
                    type={type}
                    label={label}
                    size="small"
                    onChange={onChange}
                    value={value}
                    required={required}
                    />
                </View>
        )
    }
}
