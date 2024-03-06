import React from "react";
import { LoginForm } from "@/components/use-auth-form";
import { useUser } from "@/hooks/use-user";
import { useNavigate } from "react-router-dom";

import  {useTranslation} from '@/hooks/use-translation';
const Login = () => {

  const  {t} = useTranslation();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md min-w-[448px] space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold capitalize">{t('login.title')}</h1>
          <p className="text-xl font-medium">{t('login.description')}</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
