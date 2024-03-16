import {macbooks} from "../repositories/macbooks.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {featureCards} from "../repositories/swipers/featureCards.js";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";

export const MacPage = () => {
    return (
        <>
        <header className='header'>
            <div className="mx-auto w-full flex justify-center">
                <ul className='flex justify-between items-center gap-8'>
                    {
                        macbooks.map((macbook) => {
                            return (
                                <li key={macbook.id} className='flex flex-col items-center'>
                                    <a href={macbook.href}><img className='w-[50px]' src={macbook.src}
                                                                alt={macbook.label}/></a>
                                    <p>{macbook.label}</p>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
            <div className="container">
                <div className="my-8 flex justify-between items-center container">
                    <h1 className="text-6xl font-bold">Mac</h1>
                    <div className='font-bold text-2xl'>
                        <p>If you can dream it,</p>
                        <p> Mac can do it.</p>
                    </div>
                </div>

            </div>
            <video autoPlay={true}
                   className='mx-auto rounded-3xl'
                   src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/xlarge.mp4#t=0"></video>
        </header>
            <main>
                <section>
                    <div className="container">
                        <h2 className='text-6xl my-8 font-bold'>Get to know Mac.</h2>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true,  }}
                        >
                            {
                                featureCards.map(card=>{
                                    return <SwiperSlide key={card.id}>
                                        <p>{card.text}</p>
                                        <h2>{card.title}</h2>
                                        <img src={card.url} alt='card'/>
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                </section>
            </main>
        </>

    )
}