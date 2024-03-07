import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './carousel.css';

function Example(props)
{
    var items = [
        {
            name:'Lorem ipsum knwwi wnefiknwde nndoej wdnfnd qkwndnd kknqwidn kndw',
            description: "Probably the most random thing you have ever seen! Lorem ipsum knwwi wnefiknwde nndoej wdnfnd "
        },
        {
            name: "Lorem ipsum knwwi wnefiknwde nndoej wdnfnd qkwndnd kknqwidn kndw",
            description: "Hello World! Lorem ipsum knwwi wnefiknwde nndoej wdnfnd qkwndnd kknqwidn kndw Lorem ipsum knwwi "
        }
    ]

    return (
        <div className='carousel_div'>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <div className='main_item'>
        <div className='item_div'>
            <h5>{props.item.name}</h5>
            <p>{props.item.description}</p>
        </div>
        <div className='item_div'>
        <h5>{props.item.name}</h5>
        <p>{props.item.description}</p>
    </div>
    </div>
    )
}
export default Example;