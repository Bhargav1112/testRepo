import React from 'react'

const VideoBanner = () => {
    return (
        <div className='xl:max-w-[1224px] max-full xl:px-0 px-[15px] mx-auto xl:mb-[100px] lg:mb-[80px] md:mb-[60] mb-[40px]'>
            <iframe width="100%" className='lg:h-[493px] h-auto' src="https://www.youtube.com/embed/6nN_54ddzcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBanner