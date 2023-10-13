import Link from 'next/link'
import Image from 'next/image'
import Logo from './niceLogo.png'
export default function Navbar() {
  return (
    <nav>

        <Image
            src={Logo}
            alt='My blog logo'
            width={100}
            quality={70}
            placeholder='blur'
        />

          
          <Link href="/">主页</Link>
          <Link href="/blogs">我的博客</Link>
        </nav>
  )
}
