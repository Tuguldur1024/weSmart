"use client";
import Help from "@/components/needHelp";
import axios from "axios";


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
  return (
    <div> <Help/> </div>
  )
}
export default Home;