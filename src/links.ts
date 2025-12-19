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
// --- 新增图标导入 ---
import telegram from '../public/icons/telegram.svg'
import nike from '../public/icons/nike.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

// 这里决定了网页上显示的顺序和项目
const websites = [
  'github',
  'telegram',  // 已启用
  'running',   // 已启用
  'x',
  'instagram',
  'youtube',
]

const LINKS: { [key in SocialMedia]: Link } = {
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/jimrory',
    text: '@jimrory',
  },
  telegram: {
    title: 'Telegram',
    icon: telegram, // 使用你上传的 telegram.svg
    link: 'https://t.me/jimrory',
    text: '@jimrory',
  },
  running: {
    title: 'Running Log',
    icon: nike,     // 使用你上传的 nike.svg
    link: 'https://running.jimluo.com',
    text: 'Running Journey',
  },
  x: {
    title: 'X (Twitter)',
    icon: x,
    link: 'https://x.com/jimrory',
    text: '@jimrory',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/jimrory/',
    text: '@jimrory',
  },
  youtube: {
    title: 'Youtube',
    icon: youtube,
    link: 'https://www.youtube.com/@jimrory',
    text: '@jimrory',
  },
  // 备选项（不在上面的 websites 列表中，所以不会在页面显示）
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
