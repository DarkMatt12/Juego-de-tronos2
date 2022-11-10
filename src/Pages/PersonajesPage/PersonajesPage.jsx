import './PersonajesPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

import Filtro from '../../Components/Filtro-Personajes/Filtro-Personajes';
import GaleriaPersonajes from '../../Components/Galeria-Personajes/Galeria-Personajes';



export default function PersonajesPage(){
    const [Personajes, PonerPersonajes] = useState([]);
    const [PersonajesFiltrados, PonerPersonajesFiltrados] =useState([]);
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/characters/"
            )
            console.log(data)
            PonerPersonajes(data);
            PonerPersonajesFiltrados(data);
            
        }
        getData();
        
           
    }, [])
        const BuscarPersonajes = (name)=>{
       
            const filtro = Personajes.filter((character)=> character.name.toLowerCase().includes(name.toLowerCase()));
            PonerPersonajesFiltrados(filtro);
            console.log(filtro)
        } 

    return(
        <div>
            <header>
                <div className="Buscador">
                <Filtro setBusca={BuscarPersonajes}></Filtro>
            </div>
            </header>

            
            <GaleriaPersonajes characters={PersonajesFiltrados} />
        
        </div>
    )
}