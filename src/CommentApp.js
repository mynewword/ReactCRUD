import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class commentApp extends Component {
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    handleSubmitContent(e){
        console.log(e)
        if(!e.username){alert("请输入用户名");return}
        if(!e.comment){ alert("请输入评论内容");return}
        let comments=this.state.comments.concat([e]);
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        const comments=JSON.parse(localStorage.getItem("comments"));
        if(comments){ 
            this.setState({comments})
        }
    }
    _saveComments(comments){
        localStorage.setItem("comments",JSON.stringify(comments))
    }
    handleDeleteComment(index){
        // console.log(index)
        let  comments=this.state.comments;
        comments.splice(index,1)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={
                    this.handleSubmitContent.bind(this)
                }/>
                <CommentList comments={this.state.comments} onhandleDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}
