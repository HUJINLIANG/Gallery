/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'
import 'normalize.css'
import './styles/main.css'
import ReactDOM from 'react-dom'

import imageDatas from './data/imageDatas.json'


console.log(imageDatas)

class GalleryContainer extends React.Component{
    
    render(){
        return (
            <div>
                <p>buhaoahehe</p>
            </div>
        )
    }
}

ReactDOM.render(
    <GalleryContainer />,
    document.querySelector('#content')

)



