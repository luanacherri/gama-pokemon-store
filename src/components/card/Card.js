import React, { useState, useEffect } from 'react'
import './Card.css'
export default function Card () {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        fetch('https://api.reinaldowft.com/pokestore?page=1&limit=150')
            .then(response => response.json())
            .then(data => setPokemons(data.results))  
    },[])
    
    let total = 0;
    function sumPrice(id) {
        console.log(pokemons[id-1].price)
        total += parseInt(pokemons[id-1].price);
        document.getElementById('list').innerHTML += `<li><img src="${pokemons[id-1].sprite}"
         width="50px" height="50px"/> <span>${pokemons[id-1].name}</span><span>R$ ${pokemons[id-1].price}</span></li>`;
        document.getElementById('total').innerHTML = ` R$: ${total} `;
        return total;
        
    }

    return (
        <>        
        {pokemons.map(pokemon => (
            <div key={pokemon.id} className="card">
                <img src={pokemon.sprite} alt={pokemon.name} />
    
                <div className="container">                    
                    <h4><b>{pokemon.name}</b></h4>
                    <p><b>R$ {pokemon.price}</b></p>
                    <p><button type="button" value={pokemon.id} onClick={e => sumPrice(e.currentTarget.value)}>Comprar</button></p>
                </div>
            </div> 
            ))}  

            <div className="car">                    
                <div className="container">
                    <div className="carTop">
                        <h4><b>Carrinho</b></h4>
                    </div>
                     
                    <ul>
                    <span id="list"></span>
                    </ul>            

                    <div className="carBottom">
                        <p><b>TOTAL<span id="total"></span></b></p>
                    </div>
                                                        
                    
                </div>
            </div>                
        </>            
    )
}
    
