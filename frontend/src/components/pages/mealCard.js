import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
// import {add} from '../../redux/slices/cartSlice';
import {increment} from '../../redux/slices/counterSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';
// import img from '../images/img1.jpg'

export default function MultiActionAreaCard(props) { 


    let count = useSelector(state=>state.counterReducer.count)
    console.log(count);
    const dispatch = useDispatch()


    let [isDisabled, setDisabled] = useState(false)

    let [cardInfo, setInfo] = useState({
      name: '',
      description: '',
      price: '',
      image: '',
      quantity: 1
    })



    const handleAdding = (price, description,name, image)=>{
       setInfo(prev=>{
        prev.name = name
        prev.description= description
        prev.price = price
        prev.image = image
      })

      setDisabled(true)

      dispatch(increment())

      let repas = localStorage.getItem(JSON.stringify('repas'))
      console.log(repas);


      if(!repas){
        localStorage.setItem(JSON.stringify('repas'), JSON.stringify([cardInfo]))
      }else {
        let data = JSON.parse(repas)
        data.push(cardInfo)
        localStorage.removeItem(JSON.stringify('repas'))
        localStorage.setItem(JSON.stringify('repas'), JSON.stringify(data))
      }
      console.log(localStorage.getItem('repas'));




      }
    return (
        <Card sx={{ width: '100%', height: '100%' }}>
        <CardMedia
          component="img"
          sx={{height:"50%"}}
        //   image={img}
          alt="green iguana"
        />
        <CardContent  sx={{padding: '0%', width: '100%',height: '30%'}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}

          </Typography>
        </CardContent>
        <CardActions  sx={{padding: '0%', height:'20%', display: 'flex',flexDirection:'column', flex:'1', alignItems: 'start'}}>
          <Button id='add' disabled= {isDisabled} onClick={()=>{
            handleAdding(props.price, props.description, props.name, props.image)
          }} sx={{marginTop: 'auto', height: '50%', width: '50%'}} variant='contained' size="small">ADD TO CART</Button>
        </CardActions>
      </Card>
);
}