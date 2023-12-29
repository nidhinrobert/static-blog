import React from 'react'
import './Post.css'

const posts = [
    { img: "https://www.w3schools.com/w3images/workshop.jpg", title: "Lorem", subtitle: "Sed mattis nunc" },
    { img: "https://www.w3schools.com/w3images/gondol.jpg", title: "Ipsum", subtitle: "Praes tinci sed" },
    { img: "https://www.w3schools.com/w3images/skies.jpg", title: "Dorum ", subtitle: "Ultricies congue" },
    { img: "https://www.w3schools.com/w3images/rock.jpg", title: "Mingsum", subtitle: "Lorem ipsum dipsum" },
]

const Post = () => {
    return (
        <div>
        {posts.map((postprops) => (
        <div className='posting'>
            

       
        <div className='Postingimage'>
            <img src={postprops.img} alt="" />
        </div>
        <div><span className='large'>{postprops.title}</span><br />
            <span className='small'>{postprops.subtitle}</span>
            
        </div>
          
        </div>
          ))}
          </div>
    )
}

export default Post