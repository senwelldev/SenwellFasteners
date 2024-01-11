import React, { useEffect, useState } from "react";
import "./Blog1.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBlog, setFilteredBlogs } from "../../../Actions";
import { ref, get } from "firebase/database";
import { data } from "../../../FirebaseConfig";

const Blog1 = () => {
  const { blogId } = useParams();
  const pageData = useSelector((state) => state.blogs);
  const blog = useSelector((state) => state.filteredBlogs);
  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (pageData.length == 0) {
        const blogRef = ref(data, "blog");

        try {
          const blogSnapshot = await get(blogRef);
          const blogArray = [];

          blogSnapshot.forEach((blog) => {
            const blogItems = blog.val();
            blogArray.push(blogItems);
          });

          dispatch(setBlog(blogArray));

         
        } catch (error) {
          console.log("ERROR", error);
        }
      }
      else{
        try{
          const filteredBlog = pageData.filter(
            (item) => item.blogId == blogId
          );
          dispatch(setFilteredBlogs(filteredBlog));

          if (filteredBlog && filteredBlog.length > 0) {
            setLoading(false);
          }
        }
        catch(error){
          console.log("ERROR",error)
        }
      }
    };

    fetchData();
  }, [dispatch, blogId, pageData]);



  return (
    <div className="conatiner blogBody1">
      {loading ? (
        <div className="text-center vh-100 m-5 p-5 text-info">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {blog.map((blogs, index) => (
            <React.Fragment key={index}>
              <div
                className="blogHeading"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.555), rgba(0, 0, 0, 0.534)), url(${
                    blogs.imgurl
                  })`,
                }}
              >

             
                <h1>{blogs.title}</h1>
              </div>
              <div className="blogsContent">
                <p>{blogs.introduction}</p>
                <br />
                {blogs.body.map((item, index) => (
                  <React.Fragment key={index}>
                    <h2>{item.title}</h2>
                    <br />
                    <p>{item.content}</p>
                    <br />
                  </React.Fragment>
                ))}
                <h2>{blogs.conclusion.title}</h2>
                <br />
                <p>{blogs.conclusion.content}</p>
              </div>
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default Blog1;
