'use client'

import ArrowBigRight from "@/icons/ArrowBigRight"

const CheckFootprint = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="fixed top-0 w-full max-w-md px-4 py-3 bg-[#151516] cursor-pointer">
                <div className="flex justify-between items-center pl-2 border-l-[2px] border-[#39a3ff]">
                    <div className="text-base text-white font-medium">Check the Dark Chanel</div>
                    {/* لینک دادن به فلش آبی */}
                    <a href="https://t.me/Rabbit_coinR" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#319af7] rounded-full px-2 py-1">
                            <ArrowBigRight className="w-5 h-5" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CheckFootprint
