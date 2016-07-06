/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'


export default class Controller extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var {items} = this.props;
        var images = items.map(function(item,index){
            console.log(item.imageURL);
            return (

                <img key={index} src={item.imageURL} alt=""/>
            )
        })
        return (
            <div id="scene">
                <a href="javascript:" className="pre-controller" onClick={this.props.handlePreControl}>
                    <i>&lt;</i>
                </a>
                <div id="scroll-bar">
                    {images}
                </div>
                <a href="javascript:" className="next-controller" onClick={this.props.handleNextControl}>
                    <i>&gt;</i>
                </a>
            </div>
        )
    }
}