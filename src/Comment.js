import React, { Component } from 'react'

export default class comment extends Component {
    constructor(){
        super()
        this.state={timestring:""}
    }
    componentWillMount(){
        this._updateTimeString()
        this.timer=setInterval(this._updateTimeString.bind(this),5000)
    }
    _updateTimeString(){
        const createtime=this.props.comment.createtime;
        const duration=((+new Date()-createtime)/1000)//Date.now();
        this.setState({
            timestring:duration>60?`${Math.round(duration/60)}分钟前`:`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    handleDelete(){
        // console.log(this.props.index);
        if(this.props.onhandleDelete){

            this.props.onhandleDelete(this.props.index)
        }
    }
    render() {
        return (
            <div className="comment">
                <div className="comment-user" >
                    <span>{this.props.comment.username}：</span>
                </div>
                <p>{this.props.comment.comment}</p>
                <span className="comment-createtime">
                    {this.state.timestring}
                </span>
                <span
                    onClick={this.handleDelete.bind(this)}
                    className="comment-delete"
                >
                    删除
                </span>
            </div>
        )
    }
}
