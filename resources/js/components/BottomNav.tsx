import { Link, useForm } from '@inertiajs/react';
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from 'react-icons/io5';
import { IoBagHandle } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useSelector } from 'react-redux';


function BottomNav() {
    const { t } = useTranslation();
    const modalRef = useRef<HTMLDialogElement>(null);
    const [showToast, setShowToast] = useState(false);
    const cart = useSelector((state: any) => state.cart.meals);
    const { data, setData, post, processing, errors, reset } = useForm({
        rating: '',
    });

    const send_feedback = (e: any) => {
        e.preventDefault();

        const ratingInput = document.querySelector<HTMLInputElement>('input[name="rating-11"]:checked');
        const rating = ratingInput?.ariaLabel?.split(' ')[0];

        setData('rating', rating ?? '');

        post(route('send.feedback'), {
            onSuccess: () => {
                reset();
                if (modalRef.current) {
                    modalRef.current.close(); // Close modal immediately after submission
                }
                setShowToast(true); // Show toast after feedback is successfully sent
                setTimeout(() => setShowToast(false), 3000);
            },
        });
    };

    const openModal = () => {
        modalRef.current?.showModal();
    };


    const total = cart.reduce((acc: number, item: any) => {
        return acc + item.price * item.quantity;
    }, 0);
    return (
        <>
            {/* Modal */}
            <dialog ref={modalRef} id="rate_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => modalRef.current?.close()}
                        >
                            <IoMdClose color="white" />
                        </button>
                    </form>

                    <form onSubmit={send_feedback}>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="font-bold text-lg text-primary">{t('rate-us')}</h3>
                            <p className="py-4 text-primary">شكراً لك! يرجى تقييم تجربتك معنا.</p>
                            <div className="rating rating-lg rating-half">
                                <input type="radio" name="rating-11" className="rating-hidden" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="0.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="1 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="1.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="2 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="2.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="3 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="3.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="4 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-1 bg-green-500" aria-label="4.5 star" />
                                <input type="radio" name="rating-11" className="mask mask-star-2 mask-half-2 bg-green-500" aria-label="5 star" defaultChecked />
                            </div>
                            <button className="btn btn-primary my-5" type="submit" disabled={processing}>
                                {processing ? (
                                    <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                    t('send')
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>

            {showToast && (
                <div className="toast toast-top toast-end z-50">
                    <div className="alert alert-success">
                        <span> {t('thank-feedback')} ✅</span>
                    </div>
                </div>
            )}

            <div className="dock bg-black text-neutral-content">
                <Link href="/">
                    <IoHomeOutline size={25} className="text-primary" />
                    <span className="dock-label text-primary">{t('home')}</span>
                </Link>

                <button onClick={openModal} className="flex flex-col items-center justify-center">
                    <IoStar size={25} className="text-primary" />
                    <span className="dock-label text-primary">{t('rate-us')}</span>
                </button>

                <Link href="/" className='relative'>
                    <span className='absolute -top-2 right-10 bg-primary rounded-full w-5 h-5 flex items-center justify-center'>{cart && cart.length}</span>
                    <IoBagHandle size={25} className="text-primary" />
                    <span className="dock-label text-primary">{t('cart')}</span>
                </Link>

                <Link href={route('show.menu')}>
                     <MdOutlineRestaurantMenu size={25} className="text-primary" />
                   
                    <span className="dock-label text-primary">{t('food-menu')}</span>
                </Link>


            </div>
        </>
    );
}

export default BottomNav;
