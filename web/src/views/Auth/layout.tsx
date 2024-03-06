import logo from "@/assets/img/logo-white.svg";
import ChangeLang from "@/components/change-lang";
import { useUser } from "@/hooks/use-user";
import { Outlet, useNavigate } from "react-router-dom";
const Auth = () => {
  const naviigate = useNavigate();
  const { user } = useUser();
  if (!!user) {
    naviigate('/admin')
  }
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className=" bg-black flex   py-10 px-20 flex-col justify-between   relative z-20">
        <div className="w-full ">
          <img src={logo} width={150} height={100} alt="" />
        </div>
        {/* <p className="text-white">Acme Inc “This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.” Sofia Davis</p> */}
      </div>
      <div>
        <div className="absolute top-4 right-4">
          <ChangeLang/>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
