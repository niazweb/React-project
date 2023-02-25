function BlogItem(props){
    return(

        <div className="col-4">
        <div className="blog-box">
          <div className="blog-img">
            <img src={props.blogimage}className="img-fluid" />
          </div>
          <div className="blog-content">
            <h3 className="blog-title">{props.blogtitle}</h3>
            <p className="blog-desc">
            {props.bloginfo}
            </p>
          </div>
          <div className="blog-footer">
            <div className="post-author">
              <p className="author">{props.blogauther}</p>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span>{props.blogtime}
            </div>
          </div>
        </div>
      </div>
    )
}

export default BlogItem;