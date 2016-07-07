/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'
import ImageFigure from './ImageFigure'


export default class Controller extends React.Component{
    constructor(props){
        super(props)
    }



    componentDidMount(){

    }

    render(){
        var {items,imageArr} = this.props;
        var images = items.map(function(item,index){
            return (

                <ImageFigure key={index} src={item.imageURL} info={imageArr[index]} alt=""/>
            )
        })
        return (
            <div className="controller">
                <a href="javascript:" className="pre-controller" onClick={this.props.handlePreControl}>
                     <i className="icon-circle-left"></i>
                </a>
                <div className="scroll-bar">
                    {images}
                </div>
                <a href="javascript:" className="next-controller" onClick={this.props.handleNextControl}>
                    <i className="icon-circle-right"></i>
                </a>
            </div>
        )
    }
}