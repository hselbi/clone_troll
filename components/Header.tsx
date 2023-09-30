import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const Header = () => {
    return (
        <header >
            <Image src={"https://www.vectorlogo.zone/logos/trello/trello-ar21.svg"} alt='trello logo' width={300} height={300} className='w-44 md:w-56 pb-10 md:pb-0 object-contain' />
            {/* search */}
            
            <form className='flex items-center space-x-5 bg-white  rounded-md p-2 shadow-md'>
                <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
                <input type="text" placeholder='Search'/>
                <button hidden>Search</button>
            </form>
            {/* avatar */}
        </header>
    )
}

export default Header