'use client'
import React from 'react'
import Image from 'next/image'
import Avatar from 'react-avatar';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <header >
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-2xl'>
                <div className=" absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50" />
                <Image
                    // src={"https://www.vectorlogo.zone/logos/trello/trello-ar21.svg"}
                    src={"https://links.papareact.com/c2cdd5"}
                    alt='trello logo'
                    width={300}
                    height={300}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />

                <div className='flex items-center space-x-5 flex-1 justify-end w-full'>

                    {/* search */}
                    <form className='flex items-center space-x-5 bg-white  rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                        <input type="text" placeholder='Search' className='flex-1 outline-none' />
                        <button type='submit' hidden>Search</button>
                    </form>
                    {/* avatar */}
                    <Avatar name='hafid selbi' round size='40' color='#0055d1' />
                </div>
            </div>

        </header>
    )
}

export default Header