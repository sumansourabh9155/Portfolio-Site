import { BiRightArrowAlt } from 'react-icons/bi'
import React from 'react'
import desk from '../../../assets/desk.jpg'

export const HelpU = () => {
    return (
        <div className='pl-8'>
            <p className='text-white lg:text-4xl font-bold pt-8'><spam className="underlin">How can </spam> I help you ?</p>

            <div className='flex flex-col md:flex-row justify-center pt-8'>
                <div className='flex-1 '>
                    <img className='md:w-[75%] rounded-lg shadow-none hover:shadow-xl flex-col' src={desk} alt="" />
                </div>

                <div className='flex-1 text-white pt-20 pr-20'>
                    <h3 className='font-bold lg:text-3xl'>UI/UX</h3>
                    <p className='font-semibold text-gray-400 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa fames mattis massa sed lacus luctus at mattis.</p>
                    <div className='flex pt-5' >
                        <a href="#" className="btn btn-primary font-bold">Learn More  </a>
                        <BiRightArrowAlt size={30} />
                    </div>
                </div>

            </div >
        </div>
    )
}
