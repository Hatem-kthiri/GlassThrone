import React, { useState } from "react";

const Blog = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState([
        {
            image: "blog-post-1.jpg",
            DayOfPost: "18",
            MonthOfPost: "OCT",
            title: "How to Create Your Own Website",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
        },
        {
            image: "blog-post-2.jpg",
            DayOfPost: "18",
            MonthOfPost: "OCT",
            title: "Become a Web Designer in 10 Days",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
        },
        {
            image: "blog-post-3.jpg",
            DayOfPost: "18",
            MonthOfPost: "OCT",
            title: "Get started with Web Design and UI Design",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
        },
        {
            image: "blog-post-4.jpg",
            DayOfPost: "18",
            MonthOfPost: "OCT",
            title: "This is what you need to know about Web Developpment",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
        },
    ]);
    return (
        <section id="blog" className="">
            <div className="main-title">
                <h2>
                    Latest <span>Post</span>
                    <span className="bg-text">My Blogs</span>
                </h2>
            </div>
            <p className="port-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="container">
                <div className="row">
                    {blogs.map((blog, index) => {
                        return (
                            <div className="col-12 col-sm-6" key={index}>
                                <article>
                                    <figure className="blog-figure">
                                        {/* eslint-disable-next-line */}
                                        <a href="#">
                                            <img
                                                className="img-fluid"
                                                src={require(`../Assets/img/blog/${blog.image}`)}
                                                alt=""
                                            />
                                        </a>
                                        <div className="post-date">
                                            <span>{blog.DayOfPost}</span>
                                            <span>{blog.MonthOfPost}</span>
                                        </div>
                                    </figure>
                                    {/* eslint-disable-next-line */}
                                    <a href="#">
                                        <h4>{blog.title}</h4>
                                    </a>
                                    <div className="blog-excerpt">
                                        <p>
                                            {blog.description}
                                            {/* */}...
                                        </p>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className="btn readmore">
                                            <span>Read more</span>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blog;
