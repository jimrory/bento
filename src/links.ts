import behance from '../public/icons/behance.svg'
import buymeacoffee from '../public/icons/buymeacoffee.svg'
import dribbble from '../public/icons/dribbble.svg'
import figma from '../public/icons/figma.svg'
import github from '../public/icons/github.svg'
import gumroad from '../public/icons/gumroad.svg'
import instagram from '../public/icons/instagram.svg'
import kofi from '../public/icons/kofi.svg'
import linkedin from '../public/icons/linkedin.svg'
import medium from '../public/icons/medium.svg'
import patreon from '../public/icons/patreon.svg'
import producthunt from '../public/icons/producthunt.svg'
import readcv from '../public/icons/read-cv.svg'
import reddit from '../public/icons/reddit.svg'
import tiktok from '../public/icons/tiktok.svg'
import twitch from '../public/icons/twitch.svg'
import x from '../public/icons/x.svg'
import youtube from '../public/icons/youtube.svg'
import telegram from '../public/icons/telegram.svg'
import nike from '../public/icons/nike.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

// --- 按照你要求的顺序重新排列了这里 ---
const websites = [
  'running',   // 1. Running Log
  'youtube',   // 2. Youtube
  'instagram', // 3. Instagram
  'x',         // 4. X
  'telegram',  // 5. Telegram
]

const LINKS: { [key in SocialMedia]: Link } = {
  running: {
    title: 'Running Log',
    icon: nike,
    link: 'https://running.jimluo.com',
    text: 'Running Journey',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@jimrory',
    text: '@jimrory',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/jimrory/',
    text: '@jimrory',
  },
  x: {
    title: 'X (Twitter)',
    icon: x,
    link: 'https://x.com/jimrory',
    text: '@jimrory',
  },
  telegram: {
    title: 'Telegram',
    icon: telegram,
    link: 'https://t.me/jimrory',
    text: '@jimrory',
  },
  // 以下项目链接为空且未加入 websites 数组，将保持隐藏
  github: { title: 'Github', icon: github, link: '', text: '' },
  linkedin: { title: 'Linkedin', icon: linkedin, link: '', text: '' },
  behance: { title: 'Behance', icon: behance, link: '', text: '' },
  buymeacoffee: { title: 'Buy me a coffee', icon: buymeacoffee, link: '' },
  dribbble: { title: 'Dribbble', icon: dribbble, link: '', text: '' },
  figma: { title: 'Figma', icon: figma, link: '', text: '' },
  gumroad: { title: 'Gumroad', icon: gumroad, link: '' },
  kofi: { title: 'Ko-fi', icon: kofi, link: '', text: '' },
  medium: { title: 'Medium', icon: medium, link: '', text: '' },
  patreon: { title: 'Patreon', icon: patreon, link: '', text: '' },
  producthunt: { title: 'Product Hunt', icon: producthunt, link: '', text: '' },
  readcv: { title: 'Read CV', icon: readcv, link: '', text: '' },
  reddit: { title: 'Reddit', icon: reddit, link: '', text: '' },
  tiktok: { title: 'Tiktok', icon: tiktok, link: '', text: '' },
  twitch: { title: 'Twitch', icon: twitch, link: '', text: '' },
}

export default LINKS
