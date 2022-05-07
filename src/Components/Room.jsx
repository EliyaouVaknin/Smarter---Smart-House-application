import React,{useState} from 'react'
import Grid from '@react-css/grid'
import {Link} from 'react-router-dom'
import '../Styles/Room.css'

export default function Room(props) {
    //Hooks
    const [StyleAddProduct, setStyleAddProduct] = useState({display:'none'});
    const [flag, setflag] = useState(false);
    const [ProductI, setProductI] = useState(0);
    
    //Functions
    function showAddProduct(){
        setStyleAddProduct({display: 'block'});
    }

    function hideAddProduct(){
        setStyleAddProduct({display: 'none'})
    }

    function saveProduct(e){
        let NewProduct;
        let ThisProduct = e.currentTarget.id;
        let musicCounter = 0;

        //Find if we have boiler in this room
        props.ThisRoom.Product.find(function(Product, index) {
            if(Product.Type == 'music')
            musicCounter++;
        });

        //Check if in the room we have less than 6 product or 0/1 music system or if this room is not bathroom and you try to add boiler  
        if(props.ThisRoom.Product.length >= 6 || (musicCounter >= 1 && ThisProduct == 'music') 
            || (props.ThisRoom.Type != 'Bathroom' && ThisProduct == 'boiler')){
            alert('Cannot add this item');
        }else{
            //if all chacks are pass seccesfully-save product
            setProductI(ProductI + 1);
            NewProduct = {
                Id: ProductI,
                Type: ThisProduct,
                Status: 'off'
            }
            props.ThisRoom.Product.push(NewProduct);
            alert('Product added seccesfully')
        }
    }

    function Toggle(e){
        let P = e.currentTarget.id;
        if(flag == false){
            props.ThisRoom.Product[P].Status='on';
        } else {
            props.ThisRoom.Product[P].Status='off';
        }
    setflag(!flag);   
    }
    
    /////////////////////////////////////////////////////////////////////////////////////
    return (
        <div id = 'RoomCard' >
            <div id = 'AddProductCard' style = {StyleAddProduct}>
                <button id = 'music' className = 'ProductClass' onClick = {saveProduct}><img className = 'RoomImg' src = {require('../Img/musicImg.png')} /></button>
                <button id = 'air' className = 'ProductClass' onClick = {saveProduct}><img className = 'RoomImg' src = {require('../Img/airImg.png')} /></button>
                <button id = 'boiler' className = 'ProductClass' onClick = {saveProduct}><img className = 'RoomImg' src = {require('../Img/boilerImg.png')} /></button>
                <button id = 'light' className = 'ProductClass' onClick = {saveProduct}><img className = 'RoomImg' src = {require('../Img/lightImg.png')} /></button><br/>
                <button className = 'Btn' onClick = {hideAddProduct} style = {{marginLeft: '5%'}}>Hide</button>
            </div>

            <div>
            <button className = 'Btn' onClick = {showAddProduct}>Add Product</button>
            <h1>{props.ThisRoom.Name}</h1>
            <h2>{props.ThisRoom.Type}</h2>
            <div id = 'ProductDiv'>
                <Grid columns = '150px 150px 150px' style = {{marginLeft:'18%'}}>
                    {props.ThisRoom.Product.map( p => {  
                    return <button className = 'ProductBtn' style = {p.Status == 'on' ? {boxShadow:'0px 0px 10px 4px white'} : {boxShadow:'0px 0px 0px 0px white'}}
                            onClick = {Toggle} id = {p.Id} key = {p} Type = {p.Type} Status = {p.Status}>{p.Type}<br/>{p.Status}</button>
                    } )}
                </Grid>
                <Link to = '/home' id = 'BackToHomeLink'>Back To Home</Link>
            </div>
            </div>
        </div>  
    )
}
