function CardPost(props) {
    return (
        <div className="card">
            <h4>{props.post.title.toUpperCase()}</h4>
            {props.post.body}
        </div>
    )
}

export default CardPost;