"use client";

import Image from "next/image";
import Header from "./Header";

const HeroSection = () => {
    const scrollToLatestWorks = () => {
        const latestWorksSection = document.getElementById('latest-works-section');
        if (latestWorksSection) {
            latestWorksSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <section className="flex flex-col justify-between h-screen">
            <Header />
            <div className="absolute inset-0 hidden md:block" id="wrapper-canvas"></div>
            <div className="flex -mt-10 relative">
                <div className="w-full px-4 max-w-screen-xl mx-auto">
                    <Image src="/icons/y_logo.png" width={100} height={100} alt="name logo" className="absolute left-[10%] md:left-[15%] xl:left-[40%] top-[-90%] w-[300px] sm:w-[400px] md:w-[650px]" />
                    <div className="relative ml-4 md:ml-12">
                        <h1
                            className="pointer-events-none text-4xl md:text-[64px] mr-12 font-bold"
                        >
                            Yash Makwana
                        </h1>
                        <p
                            className="pointer-events-none italic my-4 md:my-8"
                        >
                            MERN Stack Developer
                        </p>
                        <button
                            className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-300 group"
                        >
                            About Me

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                x="0px"
                                y="0px"
                                width="44"
                                height="44"
                                viewBox="0 0 100 100"
                                className="absolute top-0 translate-y-1/2 -right-7 group-hover:-right-8 ease-in-out duration-300"
                            >
                                <g transform="translate(0,-952.36218)">
                                    <path
                                        style={{
                                            textIndent: 0,
                                            textTransform: "none",
                                            direction: "ltr",
                                            baselineShift: "baseline",
                                            color: "#000000",
                                        }}
                                        d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                                        fill="#fff"
                                        fillOpacity="1"
                                        stroke="white"
                                        strokeWidth="2"
                                        visibility="visible"
                                        display="inline"
                                        overflow="visible"
                                    ></path>
                                </g>
                            </svg>


                        </button>
                    </div>
                </div>

                <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute right-8">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/yashmakwana/"
                            target="_blank"
                            aria-label="Linked in"
                        >
                            <svg
                                className="w-7 hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/yashmakwana" target="_blank" aria-label="Twitter">
                            <svg
                                className="w-7 hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/makwana_yash/" aria-label="Instagram">
                            <svg
                                className="w-7 hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:yashmakwanab57@gmail.com" target="_blank" aria-label="Mail">
                            <svg
                                className="w-7 hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@yashmakwana" aria-label="Youtube">
                            <svg
                                className="w-7 hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                            >
                                <path
                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]"
            >
                <button
                    onClick={scrollToLatestWorks}
                    className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-300 group mb-20"
                >
                    Latest Works

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        x="0px"
                        y="0px"
                        width="44"
                        height="44"
                        viewBox="0 0 100 100"
                        className="absolute -rotate-270 left-1/2 -translate-x-1/2 top-13 group-hover:top-12 ease-in-out duration-300"
                    >
                        <g transform="translate(0,-952.36218)">
                            <path
                                d="m 88.999835,1002.3621 c 0,-0.4628 -0.2799,-1.0773 -0.5639,-1.3755 l -15.9997,-17.00026 c -0.747,-0.7723 -1.9572,-0.8618 -2.8281,-0.078 -0.7786,0.7007 -0.798,2.0673 -0.078,2.8282 l 12.8435,13.62516 -69.37347,0 c -1.1046,0 -2,0.8954 -2,2 0,1.1046 0.8954,2.0001 2,2.0001 l 69.37347,0 -12.8435,13.6252 c -0.7199,0.7608 -0.6688,2.0938 0.078,2.8281 0.7885,0.7752 2.0925,0.7062 2.8281,-0.078 l 15.9997,-17.0002 c 0.4701,-0.4611 0.556,-0.9052 0.5639,-1.3748 z"
                                fill="#fff"
                                fillOpacity={1}
                                stroke="white"
                                strokeWidth={2}
                                visibility="visible"
                                display="inline"
                                overflow="visible"
                            />
                        </g>
                    </svg>

                </button>
            </div>
        </section>
    )
}

export default HeroSection