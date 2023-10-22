"use client"

import Profile from "@components/Profile"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";


const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name')
    const [ userPosts, setUserPosts ] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params?.id}/posts`);
          const data = await response.json();
    
          setUserPosts(data);
        };
    
        if (params?.id) fetchPosts();
      }, [params?.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s profile page. Share your exceptional prompts and inspire others with the power of your imagination`}
      data={userPosts}
    />
  )
}

export default UserProfile