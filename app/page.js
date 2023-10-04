"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Fragment, useState } from "react";
import "swiper/css";
import {
Accordion,
AccordionHeader,
AccordionBody,
accordion,
} from "@material-tailwind/react";
let colorStyle = { backgroundColor: "white"};
function Icon({ id, open }) {
if(id===open){
colorStyle = { backgroundColor: "#B9FF66"};
return(
<svg width="58" height="58" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
  <path d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z" fill="#191A23"/>
</svg>
)
}
else{
colorStyle = { backgroundColor: "white"};
return(
<svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
  <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/>
</svg>
)
}
}
export default function Home() {
const [open, setOpen] = useState(0);
const handleOpen = (value) => {
setOpen(open === value ? 0 : value);
};
const [showMenu, setShowMenu] = useState(false);
return (
    <div className='px-5 max-w-[1440px] mx-auto overflow-hidden'>
      
      <header className="mx-auto p-lg-12 p-5">
        <nav className='lg:flex hidden justify-between items-center'>
          <a href="#" className='my-auto'>
            <Image
            src="/logo.svg"
            alt="Logo"
            width={219}
            height={36}
            priority
            />
          </a>
          <div className='flex xl:gap-x-10 gap-x-6 align-items-center my-auto'>
            <ul className='xl:text-xl text-lg flex xl:gap-x-10 gap-x-6 text-black font-normal my-auto'>
              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <button className='border-black border text-xl font-normal text-black rounded-[14px] 2xl:px-9 px-4 py-5 my-auto hover:bg-black hover:text-white'>Request a quote</button>
          </div>
        </nav>
         <nav className='lg:hidden block'>
          <div className="flex justify-between gap-x-6">
            <a href="#" className='my-auto'>
              <Image
              src="/logo.svg"
              alt="Logo"
              width={219}
              height={36}
              priority
              />
            </a>
            <button onClick={() => setShowMenu(!showMenu)}>
              <Image
              src="/BurgerMenu.svg"
              alt="menu"
              width={24}
              height={16}
              priority
              />
            </button>
          </div>
          <div  className={ 
                            showMenu
                              ? "absolute top-16 left-0 w-full block lg:hidden py-5 z-40 bg-black transition duration-700 ease-in-out"
                              : "absolute top-16 left-0 hidden lg:hidden py-5  z-40 bg-black ease-in-out"}
                            id="mobile-nav">
            <div className='flex flex-col gap-x-10 align-items-center my-auto'>
              <ul className='text-xl flex flex-col gap-y-6 text-white px-6 font-normal my-auto'>
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
              <button className='border-black border text-xl font-normal text-black rounded-[14px] px-9 py-5 my-auto hover:bg-black hover:text-white'>Request a quote</button>
            </div>
          </div>
        </nav>
        <div className="lg:py-[100px] flex lg:flex-row flex-col lg:justify-between justify-center mx-auto items-center py-10">
          <div className="max-w-[513px]">
            <h1 className="font-medium text-6xl text-black">
            Navigating the digital landscape for success
            </h1>
            <Image
            src="/Frame29.svg"
            alt="Logo"
            className="lg:hidden block py-4"
            width={429}
            height={310}
            priority
            />
            <p className="text-xl font-black font-normal lg:py-9 py-5">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="py-5 px-9 text-white bg-zinc-900 rounded-[14px] hover:bg-white hover:text-zinc-900 hover:border-zinc-900 border lg:w-auto w-full">Book a consultation</button>
          </div>
          <Image
          src="/Illustration.svg"
          alt="Logo"
          className="lg:block hidden"
          width={600}
          height={515}
          priority
          />
        </div>
      </header>
      <section className='py-5 lg:max-w-[1440px]  md:max-w-[768px] max-w-[546px] flex-wrap mx-auto flex justify-between'>
        <div>
          <Image
          src="/Amazon.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={124}
          height={48}
          priority
          />
        </div>
        <div>
          <Image
          src="/dribble.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={126}
          height={48}
          priority
          />
        </div>
        <div className='bg-gray-900 border border-gray-200 bg-clip-padding'>
          <Image
          src="/hubspot.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={126}
          height={48}
          />
        </div>
        <div>
          <Image
          src="/Notion.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={145}
          height={34}
          />
        </div>
        <div>
          <Image
          src="/netflix.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={125}
          height={84}
          />
        </div>
        <div>
          <Image
          src="/ZOOM.svg"
          alt="Logo"
          className="mix-blend-luminosity"
          width={110}
          height={84}
          />
        </div>
      </section>
      <section className='lg:py-[100px] py-5 max-w-[1440px] mx-auto'>
        <div className='mx-auto flex gap-x-10 items-center lg:flex-row flex-col gap-y-7  pb-lg-20 pb-10'>
          <h2 className='font-medium lg:text-[40px] text-4xl lg:text-left text-center bg-[#B9FF66] max-w-[178px] text-center rounded-md px-2 py-0.5'>Services</h2>
          <p class="lg:text-lg text-base text-black max-w-[580px] lg:text-left text-center">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
        </div>
        <div className='grid lg:grid-cols-2 lg:gap-10 gap-7 justify-center mx-auto'>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>Search engine</span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>optimization</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-black lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyos.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo.svg"
            alt="Logo"
            className="lg:flex hidden h-auto max-w-full"
            width={210}
            height={166}
            />
          </div>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-[#B9FF66] items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>Pay-per-click</span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>advertising</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-black lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyo1s.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo1.svg"
            alt="Logo"
            className="lg:block hidden"
            width={210}
            height={166}
            />
          </div>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-zinc-900 items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>Social Media</span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>Marketing</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon2.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-white lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyo2s.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo2.svg"
            alt="Logo"
            className="lg:block hidden"
            width={210}
            height={166}
            />
          </div>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>Email</span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>Marketing</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-black lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyo3s.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo3.svg"
            alt="Logo"
            className="lg:flex hidden h-auto max-w-full"
            width={210}
            height={166}
            />
          </div>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-[#B9FF66] items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>Content</span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-white px-[7px] rounded-md'>Creation</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-black lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyo4s.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo4.svg"
            alt="Logo"
            className="lg:block hidden"
            width={210}
            height={166}
            />
          </div>
          <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-zinc-900 items-center border-b-8'>
            <div className=''>
              <div className='lg:pb-20 pb-7'>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>Analytics and </span></h2>
                <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-[#B9FF66] px-[7px] rounded-md'>Tracking</span></h2>
              </div>
              <div>
                <div className='cursor-pointer flex gap-x-4 lg:items-center items-end justify-between lg:justify-start'>
                  <Image
                  src="/Icon2.svg"
                  alt="Logo"
                  width={41}
                  height={41}
                  />
                  <a href="" className='text-xl text-white lg:block hidden'>
                  Learn more</a>
                  <Image src="tokyo5s.svg" alt="pic"  className='lg:hidden block' width={165} height={129}/>
                </div>
              </div>
            </div>
            <Image
            src="/tokyo5.svg"
            alt="Logo"
            className="lg:block hidden"
            width={210}
            height={166}
            />
          </div>
        </div>
      </section>
      <section className='py-[100px] lg:max-w-[1440px] mx-auto'>
        <div className='relative flex lg:flex-row flex-col gap-5 items-center py-5'>
          <div className=' rounded-[45px] bg-zinc-100'>
            <div className='lg:max-w-[500px]'>
              <h2 className='font-medium lg:text-3xl text-[26px] text-black'>Let’s make things happen</h2>
              <p className='text-lg font-normal text-black py-5'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
              <button className='text-xl text-white bg-gray-900 rounded-[14px] py-5 px-9 hover:bg-white hover:text-zinc-900 lg:w-auto w-full border border-zinc-900'>Get your free proposal</button>
            </div>
          </div>
          <Image
          src="/stars.svg"
          alt="Logo"
          className=""
          width={359}
          height={394}
          />
        </div>
      </section>
      <section className='lg:py-36 py-5 max-w-[1440px] mx-auto'>
        <div className='mx-auto flex gap-x-4 items-center lg:flex-row flex-col gap-y-7 pb-lg-20 pb-10'>
          <h2 className='font-medium lg:text-[40px] text-4xl lg:text-left'>
          <span className='bg-[#B9FF66] px-2 py-0.5 rounded-md'> Case Studies</span> </h2>
          <p class="lg:text-lg text-base text-black max-w-[530px] xl:w-full lg:text-left text-center">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
        <div className='xl:py-[70px] md:py-6 py-4 xl:px-[40px] md:px-6 px-4 py-[42px] bg-black border border-2 rounded-[45px]'>
          <Swiper className="mySwiper" init="false"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
          768: {
          slidesPerView:2,
          spaceBetween:10,
          },
          1024: {
          slidesPerView:3,
          spaceBetween:10,
          },
          }}>
          <SwiperSlide>
          <div className="px-4 lg:py-0">
            <p className='text-lg font-normal text-white pb-5'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
            <button className='flex gap-x-4 text-[#B9FF66] items-center'>Learn more
            <Image
            src="/Iconarrow.svg"
            alt="Logo"
            className="mt-auto"
            width={17}
            height={10}
            />
            </button>
            <div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>  <div className="px-4 lg:bg-transparent bg-black md:border-l lg:border-r border-white">
            <p className='text-lg font-normal text-white pb-5'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
            <button className='flex gap-x-4 text-[#B9FF66] items-center'>Learn more
            <Image
            src="/Iconarrow.svg"
            alt="Logo"
            className="mt-auto"
            width={17}
            height={10}
            />
            </button>
            <div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>  <div className="px-4 rounded-[45px]">
            <p className='text-lg font-normal text-white pb-5'>&quotFor a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.&quot</p>
            <button className='flex gap-x-4 text-[#B9FF66] items-center'>Learn more
            <Image
            src="/Iconarrow.svg"
            alt="Logo"
            className="mt-auto"
            width={17}
            height={10}
            />
            </button>
            <div>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className='lg:py-36 py-5 max-w-[1440px] mx-auto'>
        <div className='mx-auto flex gap-x-10 items-center lg:flex-row flex-col gap-y-7 pb-lg-20 pb-10'>
          <h2 className='font-medium lg:text-[40px] text-4xl lg:text-left'>
          <span className='bg-[#B9FF66] px-2 py-0.5 rounded-md'> Our Working Process </span> </h2>
          <p class="lg:text-lg text-base text-black max-w-[292px] lg:text-left text-center">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <Fragment>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px] mb-5 lg:mb-[30px]' open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>01 <span className='lg:text-3xl text-lg'>Consultation</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px] mb-5 lg:mb-[30px]' open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>02 <span className='lg:text-3xl text-lg'>Research and Strategy Development</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px] mb-5 lg:mb-[30px]' open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>03 <span className='lg:text-3xl text-lg'>Implementation</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px] mb-5 lg:mb-[30px]' open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>04 <span className='lg:text-3xl text-lg'>Monitoring and Optimization</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px]  mb-5 lg:mb-[30px]' open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>05 <span className='lg:text-3xl text-lg'>Reporting and Communication</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        <Accordion style={colorStyle} className='border-b-4 border-gray-800 border-t-2 border-x-2 lg:py-10 lg:px-[60px] p-[30px] rounded-[45px]' open={open === 6} icon={<Icon id={6} open={open}/>}>
          <AccordionHeader onClick={() => handleOpen(6)} className='border-0'>
            <p className='text-black font-medium lg:text-6xl text-3xl flex gap-x-6 items-center'>06<span className='lg:text-3xl text-lg'>Continual Improvement</span> </p>
          </AccordionHeader>
          <AccordionBody className='text-lg font-normal text-black pt-7 mt-7 border-t border-gray-800'>
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </AccordionBody>
        </Accordion>
        </Fragment>
      </section>
      <section className='py-[100px] mx-auto max-w-[1440px]'>
        <div className='mx-auto flex gap-x-10 items-center lg:flex-row flex-col gap-y-7 pb-lg-20 pb-10'>
          <h2 className='font-medium lg:text-[40px] text-4xl lg:text-left'>
          <span className='bg-[#B9FF66] px-2 py-0.5 rounded-md'>Team</span> </h2>
          <p class="lg:text-lg text-base text-black max-w-[476px] lg:text-left text-center">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex lg:pb-7 pb-5 border-b border-gray-800'>
              <Image
              src="/s1.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>John Smith <span className='text-lg font-normal'>CEO and Founder</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
              />
            </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex lg:pb-7 pb-5 border-b border-gray-800'>
              <Image
              src="/s2.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>Jane Doe<span className='text-lg font-normal'>Director of Operations</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
              />
            </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
          </div>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex lg:pb-7 pb-5 border-b border-gray-800'>
              <Image
              src="/3.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>Michael Brown<span className='text-lg font-normal'>Senior SEO Specialist</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
              />
            </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
          </div>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex lg:pb-7 justify-between pb-5 border-b border-gray-800'>
              <Image
              src="/s4.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>Emily Johnson<span className='text-lg font-normal'>PPC Manager</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
            />   </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
          </div>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex lg:pb-7 justify-between pb-5 border-b border-gray-800'>
              <Image
              src="/s5.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>Brian Williams<span className='text-lg font-normal'>Social Media Specialist</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
              />
            </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
          </div>
          <div className='py-10 px-8 rounded-[45px] border-x-2 border-b border-b-4 border-gray-800 border-t'>
            <div className='flex justify-between lg:pb-7 pb-5 border-b border-gray-800'>
              <Image
              src="/s6.svg"
              alt="Logo"
              className="mt-auto"
              width={107}
              height={161}
              />
              <p className='pl-5 text-xl font-medium text-black flex flex-col mt-auto'>Sarah Kim<span className='text-lg font-normal'>Content Creator</span> </p>
              <Image
              src="/linked.svg"
              alt="Logo"
              className="mb-auto"
              width={34}
              height={34}
              />
            </div>
            <p className='text-lg text-black lg:pt-7 pt-5'>2+ years of experience in writing and editing
            Skilled in creating compelling, SEO-optimized content for various industries</p>
          </div>
        </div>
        <button className='py-5 px-9 lg:w-auto w-full text-center border border-black bg-black text-white hover:bg-white hover:text-black text-xl rounded-[14px] flex lg:ml-auto mt-10'>See all team</button>
      </section>
    </div>
);
}