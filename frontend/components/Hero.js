import { InjectedConnector } from "wagmi/connectors/injected";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import Mint from "./Mint";

const WalletButton = () => {
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });

    if (isConnected) {
        return (
            <div className="flex flex-col items-center py-4 pt-14">
                <Mint />

                <div className="space-x-3">
                    <button className="bg-blue-600 px-10 py-3 rounded-lg my-3" onClick={() => write?.()}>
                        Mint
                    </button>
                    <button className="bg-red-600 px-8 py-3 rounded-lg" onClick={() => disconnect()}>
                        Disconnect
                    </button>
                </div>
            </div>
        );
    }

    return (
        <button className="bg-blue-600 px-8 py-3 rounded-lg my-10" onClick={() => connect()}>
            Connect Wallet
        </button>
    );
};

const Hero = () => {
    return (
        <div className="text-white">
            <h1 className="font-bold text-3xl px-16 py-10">family frens</h1>

            <div className="flex flex-col items-center pt-40">
                <h2 className="font-bold text-7xl">Mint your</h2>
                <p className="font-bold text-7xl"> Free Family Frens NFT</p>
                <span className="pt-7 text-lg">Mint 4 for free (plus gas) then more for a cheap price of 0.003</span>

                <WalletButton />
            </div>
        </div>
    );
};

export default Hero;
