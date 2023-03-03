import React from 'react'

const MenuCard = ({menuData,}) => {
    console.log(menuData,);
  return (
    <>
        <section className='main-card--cointainer '>
            {menuData.map((curlElem)=>{
                return(

               
        <div className='card-container' key={curlElem.id}>

        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{curlElem.id}</span>
                <span className='card-author subtle' >{curlElem.category}</span>
                <h2 className='card-title'>{curlElem.name}</h2>
                <span className='card-description subtle'>
                    Hii order now this item its now available....fast order now..
                    Hii order now this item its now available....fast order now..
                    Hii order now this item its now available....fast order now..
                    Hii order now this item its now available....fast order now..
                </span>
                <div className='card-read'>Read</div>

            </div>
            <img src={curlElem.images} className='card-media'></img>
        <span className='card-tag subtle' >Order Now</span>


        </div>
    </div>
         );

        })}

    </section>

    </>
 
  )
}

export default MenuCard;




