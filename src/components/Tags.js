import React from 'react'
import './Tags.css'
const tags = [

    { Tag: "Travel" },
    { Tag: "New York" },
    { Tag: "London" },
    { Tag: "IKEA" },
    { Tag: "Norway" },
    { Tag: "DIY" },
    { Tag: "Ideas" },
    { Tag: "Baby" },
    { Tag: "Family" },
    { Tag: "News" },
    { Tag: "Clothing" },
    { Tag: "Shopping" },
    { Tag: "Sports" },
    { Tag: "Games" }

]


const Tags = () => {
    return (
        <div className='blogtags'>
            <h4>Tags</h4>
            <div className='tag'>
            {tags.map((tagsprops) => (
                    <li>{tagsprops.Tag}</li>
            ))}</div>
        </div>
    )
}

export default Tags