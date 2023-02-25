import './Blog.css'
import BlogItem from './BlogItem';

import blogimage1 from '../../assets/images/post-1.jpg'
import blogimage2 from '../../assets/images/post-2.jpg'
import blogimage3 from '../../assets/images/post-3.jpg'

function Blog(){

    let blog =[
        {
        blogimage :blogimage1,
        blogtitle :'POST TITLE 1',
        bloginfo :'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        blogauther :'Randa Burn',
        blogtime :10,
    },
    {
        blogimage :blogimage2,
        blogtitle :'POST TITLE 2',
        bloginfo :'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        blogauther :'Sherif Graymz',
        blogtime :5,
    },
    {
        blogimage :blogimage3,
        blogtitle :'POST TITLE 3',
        bloginfo :'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
        blogauther :'Adamz richard',
        blogtime :15,
    },
    ]
    return(

        <section id="blog">
        <div className="container">
          <div className="section-info">
            <h2 className="section-title">BLOG</h2>
            <p className="section-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="row">
            <BlogItem {...blog[0]}/>
            <BlogItem {...blog[1]}/>
            <BlogItem {...blog[2]}/>
          </div>
        </div>
      </section>

    )


}

export default Blog;