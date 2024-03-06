import { generate as OTP } from 'otp-generator';
import { generateToken, getExpireTime } from './jwt';
const TOKEN_EXPIRE_IN = (1 * 24 * 60) / 15;
export default function ( email:string, id :string) {
  const otp = OTP(6, { upperCaseAlphabets: false, specialChars: false });
  return {
    hash: generateToken({ otp, email, id }, getExpireTime(TOKEN_EXPIRE_IN)),
    plain: otp
  };

}