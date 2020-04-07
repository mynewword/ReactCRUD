import React, { Component } from 'react'
import Comment from './Comment'
export default class CommentList extends Component {
    static defaultProps={
        comments:[]
    }
    handleDelete(index){
        // console.log(index)
        if(this.props.onhandleDeleteComment)
        {
            this.props.onhandleDeleteComment(index)
        }   
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment,i)=>{return( <Comment key={i} index={i} comment={comment} onhandleDelete={this.handleDelete.bind(this)}/>)})}
            </div>
        )
    }
}
