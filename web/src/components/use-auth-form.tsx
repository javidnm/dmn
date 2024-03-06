"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { userAuthSchema } from "@/lib/schemas/auth";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { fetcher } from "@/client";
import { useRequest } from 'ahooks';
import { useSession, useUser } from '@/hooks/use-user'
const formSchema = userAuthSchema;
const login = fetcher.path('/api/auth/sign-in').method('post').create();
export function LoginForm() {
  const navigation = useNavigate()
  const { updateSessionId } = useSession();
  const { updateUser } = useUser();
  const { runAsync, loading } = useRequest(login, {
    manual: true,
    onSuccess: (res:any) => {
      if(res.data){
        updateSessionId(res.data.token)
        updateUser(res.data.user)
        navigation('/admin/setting')
      }
    }
  })
  const {t} = useTranslation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    runAsync(values as any)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-extrabold">{t('email')}</FormLabel>
              <FormControl>
                <Input placeholder={t('enterEmail')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-extrabold">{t('password')}</FormLabel>
              <FormControl>
                <Input type="password" placeholder={t('enterPassword')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <div className="text-right">
          <Link to="/auth/forgot-password" className="text-primary underline font-bold">
          {t('login.forgot')}
          </Link> 
        </div> */}
        <Button isLoading={loading} type="submit" className="w-full font-extrabold text-lg">
          {t('signin')}
        </Button>
      </form>
    </Form>
  );
}
