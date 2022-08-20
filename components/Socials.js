const Socials = () => {
    const socials = [
        { title: "Etherscan", url: "", styles: "px-8 py-2 bg-yellow-300 bg-opacity-30 text-bright-yellow rounded-md" },
        { title: "Twitter", url: "", styles: "px-8 py-2 bg-purple-600 bg-opacity-30 text-bright-purple rounded-md" },
        { title: "OpenSea", url: "", styles: "px-8 py-2 bg-cyan-500 bg-opacity-30 text-bright-blue rounded-md" },
    ];

    return (
        <div className="flex flex-row justify-center space-x-5">
            {socials.map((social, index) => {
                return (
                    <a href={social.url} key={index}>
                        <span className={social.styles}>{social.title}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default Socials;
