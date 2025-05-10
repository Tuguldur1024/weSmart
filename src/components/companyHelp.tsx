import { useRouter } from "next/navigation";

const CompanyHelp = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/addReport");
    }
    return <div onClick={handleClick} className="flex px-[17px] pb-[40px] pt-[28px] flex-col gap-2 [background:linear-gradient(to_right,#00B2FF_0%,#0AA9FA_15%,#4670DA_100%)] 
    backdrop-blur-md rounded-[20px]">
        <p className="text-[19px] text-white"> бидэнд ийм асуудал байна. </p>
        <p className="text-[#91C3F2] text-xs">Та бидэнд туслах уу?</p>
    </div>
}
export default CompanyHelp;