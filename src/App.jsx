
import Header from "./Components/Assets/Header/Header"
import Posts from "./Components/Posts/Posts"

const App = (props) => {
    return (
        <>
            <Header />
            <Posts
                postsStore = {props.postsStore}
                reRender = {props.reRender}
                type="posts"
             />
        </>
    )
}

export default App