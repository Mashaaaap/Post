import style from "./Post.module.css"
const Post = (props) => { 
    return (
        <div className={style.post}>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}

export default Post