import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css"
const blog =[
  { id:1,
    img:"https://www.w3schools.com/w3images/woods.jpg",
    Heading: "TITLE HEADING",
    subHeading:"Title description",
    date: "April 7, 2014",
    content:"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  },
  {
    id:2,
    img:"https://www.w3schools.com/w3images/bridge.jpg",
    Heading: "BLOG ENTRY",
    subHeading:"Title description",
    date: "April 2, 2014",
    content:"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
  }
]



function Cards() {
  return (
    <div>
      {blog.map((blogContent)=>(
     <Card key={blogContent.id} style={{ width: '53rem',marginBottom:'40px'}}>
      <Card.Img variant="top" src={blogContent.img} />
      <Card.Body>
        <h3>{blogContent.Heading}</h3>
        <h5>{blogContent.subHeading}, <span class="opacity">{blogContent.date}</span></h5> 
        <Card.Text>
        {blogContent.content}
        </Card.Text>
        <div className='cardFooter'>
        <Button className='read'>READ MORE »</Button>
        
          <p><span class="comment"><b>Comments  </b> <span class="badge">2</span></span></p>
          </div>
      </Card.Body>
    </Card>
    ))}
    </div>
    
  );
}

export default Cards;