import { Grid } from "@mui/material";
import { Box } from "@mui/system";
// import { Paper } from "@mui/material";
// import img from '../images/img1.jpg'
import MultiActionAreaCard from './mealCard'
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { addMeal } from "../../redux/slices/addMeal";
import axios from 'axios'



const MealsSection = (props)=>{

    const styles = {
        background: 'rgb(255, 255, 255,0)',
        width: '60%',
        minHeight:'30%',
        border: '1px solid white',
        margin: 'auto',
        marginTop: '2rem',
        borderRadius: '25px',
        padding: '1rem'
    }


    const meal = useSelector(state=> state.mealReducer.meal)
    const dispatch = useDispatch()

    useEffect(()=>{


        const fetchData =  async ()=>{
            const data =  await axios.get('http://localhost:8000/api/repas')
                                    .then((res)=>{
                                        dispatch(addMeal(res.data.repas))
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                    })
        }

        fetchData()

            
        
        
    }, [])

    


    return (
        
        
            <Box boxShadow={12} sx={styles} >
            <Box sx={{height: '100px', display: 'flex', justifyContent:'start', padding: '1rem'}}>
                <h1 style={{fontFamily: 'Roboto, sans-serif', color: '#33313B'}}>{props.name} : </h1>
            </Box>
            <Grid container spacing={2}  sx={{marginBottom: '1rem'}}>
                
                    {meal.map(e => {
                        console.log(e.description);
                        return (
                            <Grid sx={{height: '380px'}} item xs={4}>
                                    <Box sx={{width: '80%', height: '100%', border: '1px solid black', margin: 'auto' }}>
                                            <MultiActionAreaCard image={e.image} description={e.description} name={e.name} price= {e.prix}/>
                                    </Box>
                                </Grid>

                        )
                        
                    })
                    }
            </Grid>
            


            

        </Box>
            
        
    )

        
            
        



    
}


export default MealsSection;