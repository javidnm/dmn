import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
  password:z.string(),
})
export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})
export const resetPassordSchema = z.object({
  password: z.string(),
  confirm_password: z.string(),
})
export const profileSetting = z.object({
  name: z.string().optional(),
  password: z.string().min(8).optional(),
  confirm_passowrd: z.string().min(8).optional(),
})