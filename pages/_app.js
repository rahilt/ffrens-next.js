import { getDefaultProvider } from "ethers";
import { goerli, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WagmiConfig, createClient, configureChains } from "wagmi";

import "../styles/globals.css";

const { chains, provider, webSocketProvider } = configureChains([mainnet, goerli], [publicProvider()], { targetQuorum: 1 });

const connectors = [
    new MetaMaskConnector({
        chains,
        options: {
            shimDisconnect: true,
            UNSTABLE_shimOnConnectSelectAccount: true,
        },
    }),
];

const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <Component {...pageProps} />
        </WagmiConfig>
    );
}

export default MyApp;
