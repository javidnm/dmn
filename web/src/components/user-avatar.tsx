import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
interface UserAvatarProps extends AvatarProps {
  user: string | undefined;
}
export const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return (
    <Avatar {...props}>
      {/* <AvatarImage src={img_url} /> */}
      <AvatarFallback className='bg-primary text-white text-xl '>{user?.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};
