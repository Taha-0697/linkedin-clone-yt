import Image from 'next/image'
import HeaderLink from '../components/HeaderLink'
import ExploreIcon from '@mui/icons-material/Explore'
import GroupIcon from '@mui/icons-material/Group'
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

const Home = () => {
  return (
    <>
      <header className="flex py-4 items-center justify-around">
        <div className="relative h-10 w-36">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Home
