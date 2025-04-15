"use client";
import { UserContext } from '@/context/UserContext';
import { supabase } from '@/services/superbaseClient';
import React, { useEffect, useState } from 'react';

const Provider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const CreateNewUser = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error fetching user:", userError.message);
      return;
    }

    if (user) {
      const { data: Users, error: fetchError } = await supabase
        .from('Users')
        .select("*")
        .eq('email', user.email);

      if (fetchError) {
        console.error("Error checking user:", fetchError.message);
        return;
      }

      if (Users?.length === 0) {
        const { data: insertData, error: insertError } = await supabase
          .from("Users")
          .insert({
            name: user?.user_metadata?.name || "",
            email: user?.email,
            profilepic: user?.user_metadata?.picture || ""
          })
          .select(); // Get inserted row

        if (insertError) {
          console.error("Error inserting user:", insertError.message);
        } else {
          console.log("New user inserted:", insertData);
          setCurrentUser(insertData?.[0]);
        }
      } else {
        console.log("User already exists:", Users);
        setCurrentUser(Users[0]);
      }
    } else {
      console.log("No user logged in.");
    }
  };

  useEffect(() => {
    CreateNewUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div>{children}</div>
    </UserContext.Provider>
  );
};

export default Provider;


export const useUser=()=>{
    const context = UserContext(UserContext)
    return context
}