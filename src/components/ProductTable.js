import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import View from './View';
import Text from './Text';
import Button from './Button';

 class ProductTable extends PureComponent{
    render(){
        const data = this.props.data;
        return(
            <View style={{flexDirection: 'column', width: '80%', alignItems: 'center'}} >
                <ProductRow name="Name" weight="Weight" availability="Availability" history={this.props.history} isTitle={true} />
                {data && data.map((d, index) => 
                <ProductRow 
                    name={d.name}
                    weight={d.weight} 
                    availability={d.availability} 
                    isEditable={d.isEditable} 
                    history={this.props.history} 
                    index={index} 
                />)}

             </View>

        )
    }
}

function mapStateToProps(reduxStore){
    return{
        data: reduxStore.uiReducer.data,
    }
}

export default connect(mapStateToProps, null)(ProductTable)


class ProductRow extends PureComponent{
    render(){
        const {name, weight, availability, history,isEditable, index, isTitle} = this.props;
        const style={padding: 10, width: '20%',textAlign: 'center',  borderStyle: "solid", borderWidth: 1, margin: 5, borderRadius: 5, fontWeight : isTitle ? 'bold' : 'normal'};
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', padding: 10 }} >
                <Text style={style} >{name}</Text>
                <Text style={style} >{weight} grams </Text>
                <Text style={style}>{availability}</Text>
                 {!isTitle ? <Button onClick={() => history.push(`/edit/${index}`) } style={{...style, backgroundColor: isEditable ? '#29B6F6' : '#9E9E9E', outline: 'normal'}} >
                EDIT
                </Button> : 
                 <Text style={style}>IsEditable</Text> 

                }
            </View>
        )
    }
}