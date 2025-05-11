"use client";
import Help from "@/components/needHelp";
import axios from "axios";
import { useEffect, useState } from "react";


export type Location = {
  lat: number;
  lng: number;
}

export type Report = {
  _id: string;
  imageUrl: string;
  userId: string;
  location: Location;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const Home = () => {
  const [posts, setPosts] = useState<Report[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const fetchPosts = async () => {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/report/byUser`,{
          userId : JSON.parse(user || "{}")._id,
        });
        console.log("response", response.data);
        setPosts(response.data.reports);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  },[])
  return (
    <div className="flex w-full min-h-screen bg-black flex-col px-[16px] pt-[30px]" style={{ backgroundImage: 'url(/images/Background.png)' }}> 
      <Help/>
      <p className="pl-[20px] text-[14px] text-white mt-[34px] mb-3"> Миний бичсэн асуудлууд </p> 
      <div className="flex flex-col gap-4 mx-[35px] mb-[130px]">
        {posts.map((post) => (
        <div key={post._id} className="flex flex-col gap-4 rounded-[20px]">
          {<p className="text-white text-[12px]"> {post.description} </p>}
          <div className="border border-gray-700"></div>
        </div>
      ))}
      </div>
      <div className="flex flex-col items-start mt-[40px]">
        <p className="text-white text-[18px]">Таны рекламны орон зай</p>
        <img 
  className="w-full h-[300px] object-cover" 
  src="/images/Group%2098.png" 
  alt="Background Image" 
/>


      </div>
      
    </div>
  )
}
export default Home;