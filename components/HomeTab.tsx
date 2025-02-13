'use client'

import Wallet from '@/icons/Wallet'
import pixelart_Dark from '@/images/pixelart_Dark.png'
import Community from '@/icons/Community'
import Star from '@/icons/Star'
import ArrowRight from '@/icons/ArrowRight'
import { sparkles } from '@/images'
import Image from 'next/image'
import { useEffect } from 'react'

const HomeTab = () => {
    useEffect(() => {
        const createHeart = () => {
            const heart = document.createElement('div')
            heart.classList.add('heart')
            heart.style.left = `${Math.random() * 100}vw`
            heart.style.animationDuration = `${2 + Math.random() * 3}s`
            document.body.appendChild(heart)

            setTimeout(() => {
                heart.remove()
            }, 5000)
        }

        const interval = setInterval(createHeart, 300)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <style jsx global>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-100px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
                .heart {
                    position: absolute;
                    top: -50px;
                    width: 20px;
                    height: 20px;
                    background-color: red;
                    transform: rotate(45deg);
                    animation: fall linear infinite;
                }
                .heart::before,
                .heart::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: red;
                    border-radius: 50%;
                }
                .heart::before {
                    top: -10px;
                    left: 0;
                }
                .heart::after {
                    top: 0;
                    left: -10px;
                }
            `}</style>

            <div className="relative overflow-hidden bg-gradient-to-b from-[#2a004e] to-[#000000] min-h-screen">
                {/* Connect Wallet Button */}
                <button className="w-full flex justify-center mt-8">
                    <div className="bg-[#3c3ce7] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
                        <Wallet className="w-5 h-5" />
                        <span>Connect wallet</span>
                    </div>
                </button>

                {/* PAWS Balance */}
                <div className="flex flex-col items-center mt-8">
                    <div className="image-container mb-4">
                        <Image
                            src="/images/pixelart_Dark.png"
                            alt="Pixel Art Dark"
                            width={140}
                            height={80}
                            style={{
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-1 text-center">
                        <div className="text-6xl font-bold mb-1">1M</div>
                        <div className="text-[#a3a3a3] text-3xl">Dark</div>
                    </div>
                    <div className="flex items-center gap-1 text-[#a3a3a3] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
                        <span>NEWCOMER</span>
                        <Image src={sparkles} alt="sparkles" width={18} height={18} />
                        <span>RANK</span>
                        <a href="https://t.me/Rabbit_coinR" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            <ArrowRight className="w-6 h-6 text-blue-500" />
                        </a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 px-4 mt-8 mb-8">
                    <a
                        href="https://t.me/Rabbit_coinR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#797979] rounded-lg px-4 py-2 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 font-medium">
                            <Community className="w-8 h-8" />
                            <span>Join our community</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                    </a>

                    <a
                        href="https://t.me/Rabbit_coinR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-[#000000] border-[1px] border-[#797979] rounded-lg px-4 py-2 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 font-medium">
                            <Star className="w-8 h-8" />
                            <span>Check your rewards</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomeTab
