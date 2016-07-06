/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'
import 'normalize.css'
// import jQuery from 'jquery'
// import 'bootstrap'
import './styles/main.css'
import Controller from './components/Controller'
// import Scene from './components/Scene'

import ReactDOM from 'react-dom'


var imageDatas = require('./data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = './images/' + singleImageData.fileName;

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);



class GalleryContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            Items:imageDatas
        }
        this.handleCenter = this.handleCenter.bind(this);
        this.handleNextControl = this.handleNextControl.bind(this)
        this.handlePreControl = this.handlePreControl.bind(this)
    }
    componentDidMount(){

    }
    handleCenter(){

    }
    handlePreControl(){

    }
    handleNextControl(){

    }
    render(){
        return (
            <div id="stage" ref="stage">

                <Controller items={this.state.Items} handlePreControl={this.handlePreControl} handleNextControl={this.handlePreControl} handleCenter={this.handleCenter}/>
            </div>
        )
    }
}

ReactDOM.render(
    <GalleryContainer />,
    document.querySelector('#content')

)



