import React from 'react'


const data = [
    {
      name: "John", 
      age: 25, 
      gender: "Male", 
      profession: "Engineer", 
      photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"
    }, 
    {
      name: "Sarah", 
      age: 22, gender: "Female", 
      profession: "Designer", 
      photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"
    }, 
    {
      name: "David", 
      age: 30, 
      gender: "Male", 
      profession: "Programmer", 
      photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"
    },
    {
      name: "Kate", 
      age: 27, 
      gender: "Female", 
      profession: "Model", 
      photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" 
    }
  ]


class Cards extends React.Component{
    render(){
        return(
        <>
            {data.map(el => {
                return (
                    <div className="cards">
                    <image data ={el.photo}/>
                    <div className="text">
                        <h3>{el.name}</h3>
                        <p>{el.profession}</p>
                         <p>{el.age}</p>
                    </div>
                    </div>
                )
            })}
         </>
        )    
    }
}

export default Cards