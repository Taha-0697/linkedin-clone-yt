import Image from "next/image";
import HeaderLink from "../components/HeaderLink";

const Home = () => {
    return (
        <>
            <header className="flex justify-around items-center py-4">
                <div className="relative w-36 h-10">
                    <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
                </div>
                <div className="flex items-center sm:divide-x divide-gray-300">
                    <div className="hidden sm:flex space-x-8 pr-4">
                        <HeaderLink />
                        <HeaderLink />
                        <HeaderLink />
                        <HeaderLink />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;