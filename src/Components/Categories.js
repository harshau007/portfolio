import React from 'react'
 
function Categories({ filter,categories }) {
    return (
        <div className="buttons">
            {
                categories.map((cat, i)=>{
                    return <button type="button" className="btn-port" key={i} onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Categories;
