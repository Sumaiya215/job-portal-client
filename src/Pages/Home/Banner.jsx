
import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96 pb-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                    <motion.img
                        src={team2}
                        animate ={{y:[50,100,50]}}
                        transition={{duration:10, repeat:Infinity}}
                        className="max-w-xl w-72 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 rounded-lg shadow-2xl" />
                   
                   <motion.img
                        src={team1}
                        animate ={{x:[100,150,100]}}
                        transition={{duration:10, delay: 5,repeat:Infinity}}
                        className="max-w-xl w-72 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 rounded-lg shadow-2xl" />
                    </div>
                    <div className='flex-1 pl-8'>
                        <motion.h1 animate={{x:50, color:['violet', 'skyblue']}} transition = {{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity}}
                         className="text-5xl font-bold"> Latest Jobs For You!</motion.h1>
                        <p className="py-6 ">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;