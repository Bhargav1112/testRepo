import { Progress } from '@material-tailwind/react';
import React from 'react'
import { FaStar, FaStarHalf } from "react-icons/fa";

const Reviews = () => {
    return (
        <>
            <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto mb-[50px]'>
                <div className='flex items-center justify-between lg:flex-row flex-col'>
                    <div className='lg:w-[50%] w-full flex items-center lg:flex-row flex-col gap-[30px]'>
                        <div className='lg:w-[50%] w-full'>
                            <h2 className='text-[40px] leading-[52px] font-[600] text-[#000]'>4.5</h2>
                            <div className='flex items-center gap-1 mb-[12px]'>
                                <FaStar className='w-[26px] h-[26px]' />
                                <FaStar className='w-[26px] h-[26px]' />
                                <FaStar className='w-[26px] h-[26px]' />
                                <FaStar className='w-[26px] h-[26px]' />
                                <FaStarHalf className='w-[26px] h-[26px]' />
                            </div>
                            <p className='text-[16px] leading-[24px] text-[#000]'>Based on 177 reviews</p>
                        </div>
                        <div className='lg:w-[50%] w-full'>
                            <div className='flex items-center gap-2 mb-[5px]'>
                                <div className='flex items-center gap-1 min-w-[126px]'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='w-[15px] h-[15px]' />
                                        <FaStar className='w-[15px] h-[15px]' />
                                        <FaStar className='w-[15px] h-[15px]' />
                                        <FaStar className='w-[15px] h-[15px]' />
                                        <FaStarHalf className='w-[15px] h-[15px]' />
                                    </div>
                                    <p className='text-[14px] leading-[22px]'>(172)</p>
                                </div>
                                <Progress value={80} className="h-[10px] rounded bg-[#e1e1e1]" />
                            </div>
                            <div className='flex items-center gap-2 mb-[5px]'>
                                <div className='flex items-center gap-1 min-w-[126px]'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='w-[15px] h-[15px]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                    </div>
                                    <p className='text-[14px] leading-[22px]'>(0)</p>
                                </div>
                                <Progress value={20} className="h-[10px] rounded bg-[#e1e1e1]" />
                            </div>
                            <div className='flex items-center gap-2 mb-[5px]'>
                                <div className='flex items-center gap-1 min-w-[126px]'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                    </div>
                                    <p className='text-[14px] leading-[22px]'>(0)</p>
                                </div>
                                <Progress value={0} className="h-[10px] rounded bg-[#e1e1e1]" />
                            </div>
                            <div className='flex items-center gap-2 mb-[5px]'>
                                <div className='flex items-center gap-1 min-w-[126px]'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                    </div>
                                    <p className='text-[14px] leading-[22px]'>(0)</p>
                                </div>
                                <Progress value={0} className="h-[10px] rounded bg-[#e1e1e1]" />
                            </div>
                            <div className='flex items-center gap-2 mb-[5px]'>
                                <div className='flex items-center gap-1 min-w-[126px]'>
                                    <div className='flex items-center gap-1'>
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                        <FaStar className='w-[15px] h-[15px] text-[#e1e1e1]' />
                                    </div>
                                    <p className='text-[14px] leading-[22px]'>(0)</p>
                                </div>
                                <Progress value={0} className="h-[10px] rounded bg-[#e1e1e1]" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] w-full flex items-center justify-end gap-[9px]'>
                        <div className='w-[135px] h-[135px] bg-[#F6F7F9]'></div>
                        <div className='w-[135px] h-[135px] bg-[#F6F7F9]'></div>
                        <div className='w-[135px] h-[135px] bg-[#F6F7F9]'></div>
                        <div className='w-[135px] h-[135px] bg-[#F6F7F9]'></div>
                    </div>
                </div >
            </div>
            <div className='border border-[#4d4d4d]'></div>
            <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto xl:mb-[50px] lg:mb-[40px] mb-[30px] xl:pt-[51px] lg:pt-[40px] pt-[30px]'>
                <div className='flex items-center justify-between mb-[5px]'>
                    <h3 className='text-[16px] leading-[28px] font-[700] mb-[3px]'>Wade Warren</h3>
                    <span>8/15/17</span>
                </div>
                <div className='flex items-center gap-1 mb-[12px]'>
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStarHalf className='w-[20px] h-[20px]' />
                </div>
                <p className='text-[16px] leading-[28px] font-[600] mb-[3px]'>Great quality and so easy</p>
                <p className='text-[16px] leading-[24px] font-[300] mb-[3px]'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
            </div>
            <div className='border border-[#4d4d4d]'></div>
            <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto xl:mb-[50px] lg:mb-[40px] mb-[30px] xl:pt-[51px] lg:pt-[40px] pt-[30px]'>
                <div className='flex items-center justify-between mb-[5px]'>
                    <h3 className='text-[16px] leading-[28px] font-[700] mb-[3px]'>Wade Warren</h3>
                    <span>8/15/17</span>
                </div>
                <div className='flex items-center gap-1 mb-[12px]'>
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStarHalf className='w-[20px] h-[20px]' />
                </div>
                <p className='text-[16px] leading-[28px] font-[600] mb-[3px]'>Great quality and so easy</p>
                <p className='text-[16px] leading-[24px] font-[300] mb-[3px]'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
            </div>
            <div className='border border-[#4d4d4d]'></div>
            <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto xl:mb-[50px] lg:mb-[40px] mb-[30px] xl:pt-[51px] lg:pt-[40px] pt-[30px]'>
                <div className='flex items-center justify-between mb-[5px]'>
                    <h3 className='text-[16px] leading-[28px] font-[700] mb-[3px]'>Wade Warren</h3>
                    <span>8/15/17</span>
                </div>
                <div className='flex items-center gap-1 mb-[12px]'>
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStarHalf className='w-[20px] h-[20px]' />
                </div>
                <p className='text-[16px] leading-[28px] font-[600] mb-[3px]'>Great quality and so easy</p>
                <p className='text-[16px] leading-[24px] font-[300] mb-[3px]'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
            </div>
            <div className='border border-[#4d4d4d]'></div>
            <div className='xl:max-w-[1224px] max-w-auto xl:px-0 px-3 mx-auto xl:mb-[50px] lg:mb-[40px] mb-[30px] xl:pt-[51px] lg:pt-[40px] pt-[30px]'>
                <div className='flex items-center justify-between mb-[5px]'>
                    <h3 className='text-[16px] leading-[28px] font-[700] mb-[3px]'>Wade Warren</h3>
                    <span>8/15/17</span>
                </div>
                <div className='flex items-center gap-1 mb-[12px]'>
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStar className='w-[20px] h-[20px]' />
                    <FaStarHalf className='w-[20px] h-[20px]' />
                </div>
                <p className='text-[16px] leading-[28px] font-[600] mb-[3px]'>Great quality and so easy</p>
                <p className='text-[16px] leading-[24px] font-[300] mb-[3px]'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.”</p>
            </div>

            <div className='text-center xl:mt-[100px] lg:mt-[60px] md:mt-[40px] mt-[30px] mb-[40px]'>
                <button className='text-[16px] leading-[32px] py-[6px] px-[23px] font-Josefin border border-[#000]'>View More</button>
            </div>
        </>
    )
}

export default Reviews