"use client";
import { LeftArrow } from "../../../public/icons/leftArrow";
import { Logo } from "../../../public/icons/logo";
import { NotSelected } from "../../../public/icons/notSelected";
import { Selected } from "../../../public/icons/selected";
import { OrganizationIcon } from "../../../public/icons/organization";
import { User } from "../../../public/icons/userIcon";
import { useState } from "react";


const Home = () => {
    const [isUser, setIsUser] = useState(false);
    const handleIsUser = () => {
        setIsUser(!isUser);
    };

  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/Rectangle.png)' }}
      ></div>

      <div className="flex flex-col relative z-10">
        <div className="flex items-center">
          <LeftArrow />
        </div>
        <div className="flex items-center justify-center gap-[10px] mb-[15px]">
          <Logo />
          <p className="text-[34px] text-[#FFFFFF]">HABULA</p>
        </div>
        <div className="mb-[16px] mx-[32px] border border-gray-700"></div>
        <div className="flex items-center gap-[27px] mx-auto mb-[40px]">
            <div className="flex items-center gap-1 justify-center">
                <button onClick={handleIsUser} className="flex items-center">
                    {isUser && (
                        <Selected/>
                    )}
                    {!isUser && (
                        <NotSelected/>
                    )}
                </button>
                <User/>
                <p className="text-white"> Хувь хүн </p>
            </div>
            <div className="flex items-center gap-1 justify-center ">
                <button onClick={handleIsUser} className="flex items-center">
                    {isUser && (
                        <NotSelected/>
                    )}
                    {!isUser && (
                        <Selected/>
                    )}
                </button>   
                <OrganizationIcon/>
                <p className="text-white"> Байгууллага </p>
            </div>
        </div>
        {isUser && (
            <div className="flex flex-col gap-4">
                <div className="relative mx-auto w-fit rounded-full bg-[#0B2A45]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/60 to-black/0 pointer-events-none"></div>
                <input
                    className="relative z-10 w-[270px] text-white px-4 py-5 rounded-full bg-transparent placeholder-[#656565]"
                    placeholder="Регистерийн дугаар:"
                />
                </div>
                <div className="relative mx-auto w-fit rounded-full bg-[#0B2A45]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/60 to-black/0 pointer-events-none"></div>
                <input
                    type="password"
                    className="relative z-10 w-[270px] text-white px-4 py-5 rounded-full bg-transparent placeholder-[#656565]"
                    placeholder="Нууц үг:"
                />
            </div>
            </div>  
            )}
            {!isUser && (
            <div className="flex flex-col gap-4">
                <div className="relative mx-auto rounded-full bg-[#0B2A45]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/60 to-black/0 pointer-events-none"></div>
                <input
                    className="relative z-10 w-[270px] text-white px-4 py-5 rounded-full bg-transparent placeholder-[#656565]"
                    placeholder="Байгууллага РД:"
                />
                </div>
                <div className="relative mx-auto rounded-full bg-[#0B2A45]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/60 to-black/0 pointer-events-none"></div>
                <input
                    type="password"
                    className="relative z-10 w-[270px] text-white px-4 py-5 rounded-full bg-transparent placeholder-[#656565]"
                    placeholder="Нууц үг:"
                />
            </div>
            </div>  
            )}
            <div className="w-[270px] flex flex-col mx-auto">
            <div className="flex justify-between items-start w-[270px] mt-[12px] mx-auto mb-[90px]"> 
                <p className="text-white underline text-[10px] font-medium"> Нууц үгээ мартсан уу?  </p>
                <button className="flex items-center text-[#E0E0E0] text-[12px] font-semibold py-1 px-[18px] rounded-4xl" style={{
                     background: "linear-gradient(90deg, #00B2FF 0%, #0AA9FA 15%, #4670DA 100%)"
                }}> Цааш </button>    
            </div>
            <button className="flex w-fit items-center text-[#E0E0E0] text-[12px] font-semibold py-1 px-[18px] rounded-4xl" style={{
                     background: "linear-gradient(90deg, #00B2FF 0%, #0AA9FA 15%, #4670DA 100%)"
                }}> Бүртгүүлэх </button> 
            </div>
            
            
      </div>
    </div>
  );
};

export default Home;
