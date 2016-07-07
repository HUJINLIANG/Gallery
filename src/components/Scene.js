/**
 * Created by jialao on 2016/7/6.
 */
import React from 'react'


export default class Scene extends React.Component{
    constructor(props){
        super(props)
    }
   
    render(){
        var {item} = this.props;
        console.log(item)
        return (
            <div className="img-sec">
                 <h1>---------</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-8 img-container">
                            <div className="figure"></div>
                        </div>
                        <div className="col-sm-4 img-description">
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}