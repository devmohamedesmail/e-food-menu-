import { Link } from '@inertiajs/react'
import React from 'react'

export default function CategoryItem({image,title , link}:any) {
    return (
        <Link href={link} className='item flex flex-col justify-center items-center'>
            <div className='rounded-full overflow-hidden'>
                <img src={image} className='w-52 h-52' alt="" />
            </div>
            <h5 className='text-center mt-2 font-bold text-primary arabic-font'>
                {title}
            </h5>
        </Link>
    )
}
