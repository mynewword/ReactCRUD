import React, { Component } from 'react'
import CommentInput from '../components/CommentInput'
import  { addComment } from '../reducers/comment'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
class CommentInputContainer extends Component {
    static propTypes={
        comments:PropTypes.array,
        onSubmit:PropTypes.func
    }
    constructor(){
        super()
        this.state={
            username:""
        }
    }
    componentWillMount(){
        this._loadUserName();
    }
    _loadUserName(){
        const username=localStorage.getItem("username")
        if(username){
            this.setState({username})
        }
    }
    _saveUserName(username){
        localStorage.setItem("username",username);
    }
    handleUserNameInputBlur(username){
        this._saveUserName(username)
    }
    handleSubmit(e){
        if(!e.username) return alert("请输入用户名")
        if(!e.comment) return alert("请输入评论内容")
        const {comments}=this.props;
        const newComments=[...comments,e]
        localStorage.setItem("comments",JSON.stringify(newComments));

        if(this.props.onSubmit){
            this.props.onSubmit(e)
        }
    }
    render() {
        return (
                <CommentInput onSubmit={this.handleSubmit.bind(this)} username={this.state.username} onUserNameInputBlur={this.handleUserNameInputBlur.bind(this)}/>            
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onSubmit:(comment)=>{
            dispatch(addComment(comment))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentInputContainer)