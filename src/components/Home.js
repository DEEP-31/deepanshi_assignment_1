import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Home = (props) => {
   
  const [images, setImages] = useState([])
  const fetchImages = async () => {
    const url=  `https://api.api-ninjas.com/v1/randomimage?category=${props.category}`;
    let data = await fetch(url);
    setImages(data);
   } 
  
  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div className="container text-center">
         <br/><br/>
         <h2 className="my-5">Random Image Display</h2>
         <br/><hr/>
         <img src={images.url} alt="random"/>
         <br/><hr/>
    </div>
  )
}

Home.defaultProps = {
  category: "nature"
}
Home.propTypes = {
  category: PropTypes.string,
}


export default Home