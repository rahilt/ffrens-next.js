import Head from "next/head";
import Hero from "../components/Hero";
import Socials from "../components/Socials";

export default function Home() {
    return (
        <div className="text-white ">
            <Head>
                <title>Family Friends</title>
                <meta name="description" content="Family Friends NFT" />
            </Head>

            <main className="bg-gradient-texture min-h-screen bg-no-repeat bg-black">
                <Hero />
                <Socials />

                <img className="pt-44" src="/profiles.png" alt="Picture of the author" />
            </main>
        </div>
    );
}
