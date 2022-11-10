import './PersonajesDetallesPage.scss'
import axios from "axios";
import {  useEffect, useState } from "react";
import { useParams} from "react-router-dom";

export default function PersonajesDetallesPage(){
    const [Personaje, PonerPersonajes] = useState([]);
    const [Alianzas, PonerAlianzas] = useState([])
    const [Apariciones, PonerApariciones] = useState([]);
    const [Descendientes, PonerDescendientes] = useState([]);
    const [Titulos, PonerTitulos] = useState([]);
    const { name } = useParams();
    
    useEffect(() => {
        
        const getData = async () => {
            const { data } = await axios.get(
                `https://api.got.show/api/show/characters/${name}`
            );
            console.log(data)
            console.log(data.allegiances)
            console.log(data.appearances)
            console.log(data.siblings)
            console.log(data.titles)
            PonerPersonajes(data);
            PonerAlianzas(data.allegiances);
            PonerApariciones(data.appearances);
            PonerDescendientes(data.siblings);
            PonerTitulos(data.titles);
            
        }
        getData();console.log(Alianzas)
    }, [])
    
    return(
        <div className='Personaje'>
           
            <div className='Personaje-1'>
                <div className='Personaje-img'><img className='Personaje-img-img' src={Personaje.image} alt="" /></div>
                <div className='Personaje-name'><h1 className='Personaje-name-h1'>{Personaje.name}</h1></div>
            </div>
            <div className='Personaje-2'>
                <div className='Personaje-casa'>
                    <div className='Personaje-Casa-titulo'><h1>CASA</h1></div>
                    <div className='Personaje-Casa-img'><img src="" alt="" /></div>
                </div>
                <div className='Personaje-alianzas'>
                    <div className='Personaje-alianzas-titulo'><h1>ALIANZAS</h1></div>
                    <div className='Personaje-alianzas-desc'>
                    {Alianzas.map((alianza, index)=>
                        <p className='Personaje-Tarjeta' key={index}>
                            {alianza}
                        </p>
                        )}
             
                    </div>
                </div>
                <div className='Personaje-apariciones'>
                    <div className='Personaje-apariciones-titulo'><h1>APARICIONES</h1></div>
                    <div className='Personaje-apariciones-desc'>
                    {Apariciones.map((aparicion, index)=>
                        <p className='Personaje-Tarjeta' key={index}>
                            {aparicion}
                        </p>
                        )}
                    </div>
                </div>
                <div className='Personaje-padre'>
                    <div className='Personaje-padre-titulo'><h1>PADRE</h1></div>
                    <div className='Personaje-padre-desc'>
                        {Personaje.father}
                    </div>
                </div>
                <div className='Personaje-descendientes'>
                    <div className='Personaje-descendientes-titulo'><h1>DESCENDIENTES</h1></div>
                    <div className='Personaje-descendientes-desc'>
                    {Descendientes.map((descendiente, index)=>
                        <p className='Personaje-Tarjeta' key={index}>
                            {descendiente}
                        </p>
                        )}
                    </div>
                </div>
                <div className='Personaje-titulos'>
                    <div className='Personaje-titulos-titulo'><h1>TITULOS</h1></div>
                    <div className='Personaje-titulos-desc'>
                    {Titulos.map((titulo, index)=>
                        <p className='Personaje-Tarjeta' key={index}>
                            {titulo}
                        </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}