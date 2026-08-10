import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gary-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vel velit inventore qui aperiam autem obcaecati repellendus sed?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi obcaecati soluta quia voluptate animi maxime cum fuga doloribus deserunt. Incidunt.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi illum nihil ducimus tempore illo dolore architecto ab blanditiis fuga modi, accusantium ipsum officiis eligendi! Harum?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb:20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo vero cum ullam veritatis non aspernatur recusandae cumque. Quia, molestiae.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat reprehenderit dolore sit sint qui odit dicta magnam! Perferendis tenetur tempore iure provident magnam expedita sapiente, nam quas a iste?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional CUstomer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt ratione omnis facere quisquam cum alias saepe maiores ut ab blanditiis?</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
