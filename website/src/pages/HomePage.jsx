import React from "react";
import PostCard from "../components/HomePage/PostCard";
import "../styles/HomePage.css";

function HomePage() {
  // Sample data for posts
  const posts = [
    {
      titl: "Exploring the Beauty of Nature",
      text: "Nature is the ultimate source of inspiration and tranquility. From lush forests to serene beaches, every landscape tells a story.",
      image: "https://example.com/user-image1.jpg",
      User_name: "John Doe",
      User_id: "john_doe", 
      hm_post_date: "October 20, 2024",
    },
    {
      titl: "The Wonders of Technology",
      text: "Technology continues to advance at an unprecedented pace, shaping our lives in ways we never imagined.",
      image: "https://example.com/user-image2.jpg",
      User_name: "Jane Smith",
      User_id: "jane_smith", 
      hm_post_date: "October 21, 2024",
    },
    {
      titl: "Traveling the World",
      text: "Every journey brings new experiences, and traveling allows us to explore diverse cultures and landscapes.",
      image: "https://example.com/user-image3.jpg",
      User_name: "Alice Johnson",
      User_id: "alice_johnson", 
      hm_post_date: "October 22, 2024",
    },
   
  ];

  return (
    <div className="HomePage_front">
      <div className="hm_container1"></div>
      <div className="hm_container2">
        <div className="mid_header"></div>
        {posts.map((Newpost, index) => (
          <PostCard
            key={index} // Use a unique key for each PostCard
            titl={Newpost.titl}
            text={Newpost.text}
            image={Newpost.image}
            User_name={Newpost.User_name}
            User_id={Newpost.User_id} 
            hm_post_date={Newpost.hm_post_date}
          />
        ))}
      </div>
      <div className="hm_container3"></div>
    </div>
  );
}

export default HomePage;
