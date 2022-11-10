import './CasasPage.scss'
import axios from "axios";
import React, {  useEffect, useState } from "react";

import Filtro from '../../Components/Filtro-Personajes/Filtro-Personajes';
import GaleriaCasas from '../../Components/Galeria-Casas/Galeria-Casas';
export default function CasasPage(){
    const [Casas, PonerCasas] = useState([]);
    const [CasasFiltradas, PonerCasasFiltradas] =useState([]);
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                "https://api.got.show/api/show/houses"
            )
            console.log(data)
            PonerCasas(data);
            PonerCasasFiltradas(data);
            
        }
        getData();
        
           
    }, [])
        const BuscarCasas = (name)=>{
       
            const filtro = Casas.filter((casa)=> casa.name.toLowerCase().includes(name.toLowerCase()));
            PonerCasasFiltradas(filtro);
            console.log(filtro)
        } 
    


    return(
        <div>
            <header>
                <div className="Buscador">
                <Filtro setBusca={BuscarCasas}></Filtro>
            </div>
            </header>
            
            <GaleriaCasas casas={CasasFiltradas} />
        </div>
        
    )
}