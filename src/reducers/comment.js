//action types
const INIT_COMMENTS="INIT_COMMENTS";
const ADD_COMMENT="ADD_COMMENT";
const DELETE_COMMENT="DELETE_COMMENT";

//reducer
export default (state,action)=>{
    console.log(state);
    if(!state){
        state={comments:[]}
    }
    switch(action.type){
        case INIT_COMMENTS:
            return{comments:action.comments}
        case ADD_COMMENT:
            return{ comments:[...state.comments,action.comment]}
        case DELETE_COMMENT:
            const comments=state.comments;
            const newComments=[...comments.slice(0,action.commentIndex),...comments.slice(action.commentIndex+1)]
            return{comments:newComments}
        default:
            return state

    }
}
//action creators
//comments为数组对象
export const initComments=(comments)=>{
    return{type:INIT_COMMENTS,comments}
}
//comment为对象
export const addComment=(comment)=>{
    return{type:ADD_COMMENT,comment}
}
export const deleteComment=(commentIndex)=>{
    return{type:DELETE_COMMENT,commentIndex}
}