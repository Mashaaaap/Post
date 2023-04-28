import React from 'react'
import s from './Posts.module.css'
import Post from "./Post/Post"
const Posts = (props) => { 
    let postsStore = props.postsStore
    let PostElements = postsStore.map((post, index) => {
        return <Post key={`${props.type}${index}`} theme={post.theme} text={post.text} title={post.title}/>
    })
    let inputRef = React.createRef()
    let inputRef2 = React.createRef()

    const createNewPost = () => {
        postsStore.push({
            title: inputRef.current.value,
            text: inputRef2.current.value,
        })
        props.reRender(postsStore)
        inputRef.current.value = null
        inputRef2.current.value = null
    }
    return(
        <>
            {PostElements}
            <div className={s.form}>
                <input ref={inputRef} className={s.input} type="text" placeholder="Write new title"/>
                <input ref={inputRef2} className={s.input} type="text" placeholder="Write new text"/>
                <button onClick={createNewPost} className={s.btn}>Create</button>
            </div>
        </>
    )
}

class PostsStore {
    constructor(title, text, index) {
        this.title = title
        this.text = text
        this.index = index
    }
}

export default Posts