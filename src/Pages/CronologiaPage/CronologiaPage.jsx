
import './CronologiaPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

export default function CronologiaPage(){
    const [Personaje, PonerPersonaje] = useState([]);
    const [Orden, PonerOrden ] =useState( true );
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/characters/"
            )
            console.log(data)
            PonerPersonaje(data);
            
        }
        getData();
        
        
    }, [])
    useEffect(()=>{
        if(Orden){
            ordenmayormenor(Personaje);
        }else{
            ordenmenormayor(Personaje);
        }
    },[Orden, Personaje])

    
    return(
        <div>
            <div className='Caja-btn'>
                <button className='btn' onClick={ordenar}></button>
            </div>
            <div className='Caja-personajes'>
                {Personaje.map((personaje, index)=>(
                    <div key={index} className={index%2===0? "impar" : "par"}>
                        <p>{personaje.age?.age}</p>
                        <img src={personaje.image} alt="" />

                        </div>
                ))}
            </div>
        </div>
    );
    function ordenar(){
        PonerOrden(!Orden);
        console.log("ordenar prueba")
    }
    function ordenmenormayor(Personaje){
        if(Personaje && Personaje.length > 0){
            Personaje.sort((a,b)=> a.age?.age - b.age?.age)
        }
        return Personaje;
    }
    function ordenmayormenor(Personaje){
        if(Personaje && Personaje.length > 0){
            Personaje.sort((a,b)=> b.age?.age - a.age?.age)
        }
        return Personaje;
    }
}