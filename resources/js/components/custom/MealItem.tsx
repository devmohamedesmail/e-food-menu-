import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


function MealItem({ image, title, description, price,currency, increaseQuantity, decreaseQuantity, quantity, addCart }: any) {
    return (
        <div className='item flex flex-col justify-center items-center rounded-2xl overflow-hidden bg-gray-900 pb-5'>
            <div className='overflow-hidden'>
                <img src={image} alt="" />
            </div>
            <div>
                <h5 className='text-center text-sm  font-bold text-white arabic-font'>{title}</h5>
                <h5 className='text-center mt-3 text-white text-sm '>{description}</h5>
                <h5 className='text-center  font-bold text-primary mt-3'>{price} {currency}</h5>
            </div>
            <div className='flex justify-between items-center  w-full px-3 mt-5'>
                <div className='flex '>
                    <button
                        onClick={increaseQuantity}

                        className='w-7 h-7 rounded-sm bg-primary flex justify-center items-center'>
                        <FaPlus />
                    </button>

                    <input type="text" readOnly value={quantity} className='w-6 text-white text-center' />

                    <button
                        onClick={decreaseQuantity}

                        className='w-7 h-7 rounded-sm bg-primary flex justify-center items-center'>
                        <FaMinus />
                    </button>
                </div>

                <button onClick={addCart} className='w-10 h-10 rounded-sm bg-primary flex justify-center items-center'>
                    <FaPlus />
                </button>
            </div>

        </div>
    )
}

export default MealItem