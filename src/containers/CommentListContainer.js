import React, { Component } from 'react'
import CommentList from "../components/CommentList"
import PropTypes from 'prop-types'
import { deleteComment,initComments } from '../reducers/comment'
import { connect } from 'react-redux'
class CommentListContainer extends Component {
    static propTypes={
        comments:PropTypes.array,
        initComments:PropTypes.func,
        onDeleteComment:PropTypes.func
    }
    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        const comments=localStorage.getItem("comments");
        console.log(comments);
        if(comments){
            this.props.initComments(JSON.parse(comments));
        }

    }
    handleDeleteComment(index){
        let {comments}=this.props;
        let newComments=[...comments.slice(0,index),...comments.slice(index+1)];
        localStorage.setItem("comments",newComments)
        console.log(newComments);
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render() {
        const {comments}=this.props;
        return (
            <CommentList comments={comments} onhandleDeleteComment={this.handleDeleteComment.bind(this)}/>
        )
    }
}
const mapStateToProps=(state)=>{
    return{comments:state.comments}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        initComments:(comments)=>{
            dispatch(initComments(comments));
        },
        onDeleteComment:(index)=>{
            dispatch(deleteComment(index))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer)