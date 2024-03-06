import { ForgotPasswordForm } from "@/components/forgot-passord-form";
import { useTranslation } from "@/hooks/use-translation";
import React from "react";

const ForgotPassord = () => {
  const {t} = useTranslation();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md min-w-[448px] space-y-4">
        <div className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold capitalize">{t('forgot.title')}</h1>
          <p className="text-xl font-medium">{t('forgot.description')}</p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPassord;
