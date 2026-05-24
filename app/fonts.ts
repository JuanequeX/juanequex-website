import { Road_Rage, Sora } from 'next/font/google'

export const road_rage = Road_Rage({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  variable: '--font-road-rage',
})

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: 'normal',
  variable: '--font-sora',
})
