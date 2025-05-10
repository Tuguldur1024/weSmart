import { PlusIcon } from "../../public/icons/plus";
import { useRouter } from "next/navigation";

const Help = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/addReport");
    }
    return <div onClick={handleClick} className="flex px-[17px] pb-[10px] pt-[28px] flex-col gap-2 [background:linear-gradient(to_right,#00B2FF_0%,#0AA9FA_15%,#4670DA_100%)] 
    backdrop-blur-md rounded-[20px]">
        <p className="text-[19px] text-white"> танд асуудал тулгарсан уу? </p>
        <p className="text-[#91C3F2] text-xs">Бидэнтэй хуваалцаач?</p>
        <button className="flex items-center [background:linear-gradient(to_right,#00AFFF,#005BFF)] 
    border border-[color:#245DB3] border-opacity-50 
    shadow-[0_4px_6px_rgba(0,0,0,0.1)] mx-auto rounded-full p-3 w-fit"> <PlusIcon/> </button>
    </div>
}
export default Help;