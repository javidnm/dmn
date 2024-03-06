import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboard,
  Link,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  CheckCircle,
  BarChart2,
  LogOut,
  Info,
  BellPlus,
} from 'lucide-react';


import { Circle } from 'lucide-react';
import { cn } from '../lib/utils';


export const Icons = {
  logo: ({ className, ...props }: LucideProps) => (
    <svg
      className={cn('w-12 h-12', className)}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-name='Layer 1'
      viewBox='0 0 360 360'
      {...props}
    >
      <defs>
        <linearGradient id='a' x1={46.75} x2={187.88} y1={135.17} y2={135.17} gradientUnits='userSpaceOnUse'>
          <stop offset={0} stopColor='#ea681c' />
          <stop offset={1} stopColor='#f99c69' />
        </linearGradient>
        <linearGradient xlinkHref='#a' id='b' x1={187.88} x2={329} y1={135.17} y2={135.17} />
        <linearGradient xlinkHref='#a' id='c' x1={135.12} x2={187.88} y1={245.37} y2={245.37} />
        <linearGradient xlinkHref='#a' id='d' x1={187.88} x2={240.64} y1={245.37} y2={245.37} />
      </defs>
      <title>{'Untitled-3'}</title>
      <path
        d='M187.88 6.25s-32.4-.8-48.3 37.06c-1.42 3.39-2.87 6.78-4.42 10.13l-86.84 188.1s-9.79 21.27 19.57 22.55h120v-35.32H91.72l83.05-172.39c.56-1.16 1.1-2.33 1.63-3.5 1.25-2.74 5.95-10 11.48-10Z'
        style={{
          fill: 'url(#a)',
        }}
      />
      <path
        d='M187.88 6.25s32.39-.8 48.29 37.06c1.43 3.39 2.87 6.78 4.42 10.13l86.84 188.1s9.79 21.27-19.57 22.55h-120v-35.32H284L201 56.38c-.55-1.16-1.09-2.33-1.63-3.5-1.25-2.74-5.94-10-11.47-10Z'
        style={{
          fill: 'url(#b)',
        }}
      />
      <path
        d='M187.88 169.63v-33.19s-51.06-6.8-52.76 92.33l4.25 35.32s33.61 94 48.51 90.2v-60.84s-12.65-21.1-13.64-27.89c-.35-2.42-.71-4.83-1.22-7.21l-6.42-29.58s2.56-53.61 21.28-59.14Z'
        style={{
          fill: 'url(#c)',
        }}
      />
      <path
        d='M187.88 169.63v-33.19s51.05-6.8 52.76 92.33l-4.26 35.32s-33.61 94-48.5 90.2v-60.84s12.65-21.1 13.63-27.89c.35-2.42.71-4.83 1.23-7.21l6.41-29.58s-2.55-53.61-21.27-59.14Z'
        style={{
          fill: 'url(#d)',
        }}
      />
    </svg>
  ),
  close: X,
  spinner: ({ className, ...props }: LucideProps) => (
    <Loader2 className={cn('animate-spin', className)} {...props} />
  ),
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  barChart2: BarChart2,
  logout: LogOut,
  info: Info,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden='true'
      focusable='false'
      data-prefix='fab'
      data-icon='github'
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 496 512'
      {...props}
    >
      <path
        fill='currentColor'
        d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
      ></path>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='0 0 256 262' {...props}>
      <path
        fill='#4285F4'
        d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
      />
      <path
        fill='#34A853'
        d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
      />
      <path
        fill='#FBBC05'
        d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
      />
      <path
        fill='#EB4335'
        d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
      />
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  dashboard: LayoutDashboard,
  link: Link,
  circle: Circle,
  checkCircle: CheckCircle,
  BellPlus:BellPlus,
  outlook: (props: LucideProps) => (
    <svg viewBox='0 0 48 48' {...props}>
      <path fill='#e64a19' d='M7 12L29 4 41 7 41 41 29 44 7 36 29 39 29 10 15 13 15 33 7 36z' />
    </svg>
  ),
};
