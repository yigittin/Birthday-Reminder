import React from 'react'
import {data} from './data'
const Person = () => {
    const[people,setPeople]=React.useState(data);
    return (
        <>
            {people.map((person=>{   
                const{id,name,age,image}=person;  
                    return(                    
                    <div key={id} className='person'>                        
                        <img className='img' src={image} alt=""></img>
                        <h3 className='isimler'>{name}</h3>                        
                        <h10>{age} years old</h10>
                    </div>                    
                   
                )
            }))}
           <button className='btn' onClick={()=>setPeople([])}>Delete List</button>
        </>
    );
};

export default Person;
