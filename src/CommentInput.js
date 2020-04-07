import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class CommentInput extends Component {
    static propTypes={
        onSubmit:PropTypes.func
    }
    constructor(){
        super()
        this.state={
            username:"",
            comment:""
        }
    }
    handleUserNameChange(e){
        this.setState({
            username:e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            comment:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,comment}=this.state;
            const createtime=+new Date();
            this.props.onSubmit({username,comment,createtime})
        }
        this.setState({comment:""})
        this.textarea.focus();
        

    }
    componentDidMount(){
        this.textarea.focus()
    }
    componentWillMount(){
        this._loadUsername()
    }
    _loadUsername(){
        const username=localStorage.getItem("username");
        if(username){
            this.setState({
                username
            })
        }
        
    }
    _saveUsername(username){
        localStorage.setItem("username",username)
    }
    handleUsernameBlur(e){
        this._saveUsername(e.target.value)
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input"><input type="text" value={this.state.username}  onChange={this.handleUserNameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/></div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.comment} ref={(textarea)=>{this.textarea=textarea}} onChange={this.handleContentChange.bind(this)} ></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
