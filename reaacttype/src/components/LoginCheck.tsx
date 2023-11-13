import React from "react";
import { useState } from "react";
const LoginCheck = () => {
  type userType = {
    name: string;
    email: string;
  };
  const [user, setUser] = useState<userType | null>({} as userType);
  const handleLogin = () => {
    setUser({
      name: "Minaya",
      email: "hjhjh@hhh",
    });
  };
  console.log(user);
  
  const handleLogOut = () => {
    setUser({} as userType)
  };

  return (
    <div>
      <button onClick={handleLogin}>Giris yap</button>
      <button onClick={handleLogOut}>Cikis yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default LoginCheck;
