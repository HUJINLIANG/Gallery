/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'
import 'normalize.css'
// import jQuery from 'jquery'
// import 'bootstrap'
// import './styles/main.css'
import Controller from './components/Controller'
import Scene from './components/Scene'

import ReactDOM from 'react-dom'


var imageDatas = require('./data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageURL = require('./images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatas);



class GalleryContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imageArrInfo:[
                // {
                //     pos:{
                //         left:''
                //     },
                //     active:false
                // }

            ]
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
        var imageNewInfo = this.state.imageArrInfo;
        var length = imageNewInfo.length;
        var index;
        for(var i = 0;i < imageNewInfo.length; i++){
            if(imageNewInfo[i].active){
                index = i;
                if(i>0) {
                    imageNewInfo[i].active = false;
                    imageNewInfo[i - 1].active = true;
                    break;
                }
            }
        }


        if(index!=length-1&&index!=length-2&&index!=2&&index!=1&&index!=0){


            for(var i = 0;i < imageNewInfo.length; i++){
                imageNewInfo[i].pos.left+=234
            }


        }




        this.setState({
            imageArrInfo:imageNewInfo
        })
    }
    handleNextControl(){
        var imageNewInfo = this.state.imageArrInfo;
        var index;
        for(var i = 0;i < imageNewInfo.length; i++){
            if(imageNewInfo[i].active){
                index = i;
                if(i<imageNewInfo.length-1) {
                    imageNewInfo[i].active = false;
                    imageNewInfo[i + 1].active = true;
                    break;
                }
            }
        }

        if(index!=0&&index!=1&&index!=13&&index!=14&&index!=15){


            for(var i = 0;i < imageNewInfo.length; i++){
                imageNewInfo[i].pos.left-=234
            }

        }



        this.setState({
            imageArrInfo:imageNewInfo
        })
    }
    render(){

        var {imageArrInfo} = this.state;

        imageDatas.forEach(function(value,index){
            if(!this.state.imageArrInfo[index]) {
                this.state.imageArrInfo[index] = {
                    pos: {
                        left: (index-2) * 234+10
                    },
                    active: index == 4
                }
            }
        }.bind(this))

        for(var i = 0;i < imageArrInfo.length; i++){
            if(imageArrInfo[i].active){
                break;
            }
        }

        // console.log(imageDatas[i])


        return (
            <div className="stage" ref="stage">
                <Scene item={imageDatas[i]}/>
                <Controller items={imageDatas} imageArr={this.state.imageArrInfo} handlePreControl={this.handlePreControl} handleNextControl={this.handleNextControl} handleCenter={this.handleCenter}/>
            </div>
        )
    }
}

ReactDOM.render(
    <GalleryContainer />,
    document.querySelector('#content')

)



