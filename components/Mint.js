import { useContractReads, useContractWrite, usePrepareContractWrite } from "wagmi";
import { useEffect, useState } from "react";
import FamilyFrensABI from "./abis/FamilyFrens.json";

const Mint = () => {
    const [contractState, setContractState] = useState({});
    const CONTRACT_ABI = FamilyFrensABI.abi;
    const CONTRACT_ADDRESS = "0x21b7712AA354a959af04daD19C7Fe62728906D1d";

    const contract = {
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
    };

    const { config } = usePrepareContractWrite({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: CONTRACT_ABI,
        functionName: "mint",
        chainId: 5,
    });

    const { write } = useContractWrite(config);
    const { data, isLoading } = useContractReads({
        contracts: [
            {
                ...contract,
                functionName: "maxSupply",
            },
            {
                ...contract,
                functionName: "MAX_FREE_MINT",
            },
            {
                ...contract,
                functionName: "PUBLIC_SALE_PRICE",
            },
            {
                ...contract,
                functionName: "getCurrentId",
            },
            {
                ...contract,
                functionName: "isPublicSaleActive",
            },
        ],
        cacheOnBlock: true,
        async onSuccess(data) {
            const dd = await data.map((values) => {
                const convert = parseInt(values, 10);
                if (isNaN(convert)) return values;
                return convert;
            });

            setContractState({
                ...contractState,
                maxSupply: dd[0],
                maxFreeMint: dd[1],
                salePrice: dd[2],
                currentCount: dd[3],
                isActive: dd[4],
            });
        },
    });

    if (isLoading || !contractState?.currentCount) return <span>Loading...</span>;

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center space-x-3">
                <img src="/eth.png" className="w-5" />
                <span className="text-2xl font-bold">Mint</span>
                <span>
                    ({contractState?.currentCount} / {contractState?.maxSupply})
                </span>
            </div>
        </div>
    );
};

export default Mint;
