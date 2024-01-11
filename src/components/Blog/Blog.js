import React, { useEffect, useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
import { ref, get } from "firebase/database";
import { data } from "../../FirebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../../Actions";

const Blogs = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const blogData = useSelector((state) => state.blogs);

  useEffect(() => {
    const fetchData = async () => {
      const blogRef = ref(data, "blog");
      
      try {
        const blogSnapshot = await get(blogRef);
        const blogArray = [];

        blogSnapshot.forEach((blog) => {
          const blogItems = blog.val();
          blogArray.push(blogItems);
        });

        dispatch(setBlog(blogArray));

          setLoading(false);
        
        // const timeout = setTimeout(() => {
        // }, 1000);
    
       
        // return () => clearTimeout(timeout);
      
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  const skeletonItems = Array.from({ length: blogData.length || 3}, (_, index) => index);
  return (
    <div className="Blogs1Body">
      <div className="blog-section-container">
        <div className="Blogs1Heading">
          <h1>Blogs</h1>
          <p>Our blogs on various topics</p>
        </div>
      </div>
      {loading ? (
        <div className="card-container blogscardsContainer">
          {skeletonItems.map((index) => (
            <div className="blogsCard" key={index}>
              <div
                className="card-img-top img-fluid skeleton"
                style={{ height: "200px" }} // Adjust the height as needed
              />
              <div className="card-body">
                <p className="skeleton-text"></p>
                <h5 className="card-title skeleton-text"></h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-container blogscardsContainer">
          {blogData.map((item, index) => (
            <div className="blogsCard" key={index}>
              <img
                src={`${process.env.PUBLIC_URL + item.imgurl}`}
                className="card-img-top img-fluid"
                alt="Fissure in Sandstone"
                loading="lazy"
              />
              <div className="card-body">
                <p >{item.date}</p>
                <h5
                  className="card-title "
                  onClick={() => {
                    navigate(`/blogs/blog/${item.blogId}`);
                  }}
                >
                  {item.title}
                </h5>
               
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
