import Image from 'next/image';
export default function Home() {
return (
<html lang="en">
  <body className='lg:px-24 px-5'>
    <header className="max-w-[1440px] mx-auto p-lg-12 p-5">
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
        <div className='flex gap-x-10 align-items-center my-auto'>
          <ul className='text-xl flex gap-x-10 text-black font-normal my-auto'>
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <button className='border-black border text-xl font-normal text-black rounded-[14px] px-9 py-5 my-auto hover:bg-black hover:text-white'>Request a quote</button>
        </div>
      </nav>
      {/* <nav>
        <div className="flex justify-between">
          <a href="#" className='my-auto'>
            <Image
            src="/logo.svg"
            alt="Logo"
            width={219}
            height={36}
            priority
            />
          </a>
          <a href="">
            <Image
            src="/BurgerMenu.svg"
            alt="menu"
            width={24}
            height={16}
            priority
            />
          </a>
        </div>
        <div>
          <div className='flex flex-col gap-x-10 align-items-center my-auto'>
            <ul className='text-xl flex flex-col gap-y-6 text-black font-normal my-auto'>
              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
            <button className='border-black border text-xl font-normal text-black rounded-[14px] px-9 py-5 my-auto hover:bg-black hover:text-white'>Request a quote</button>
          </div>
        </div>
      </nav> */}
      <div className="lg:py-[100px] flex lg:flex-row flex-col lg:justify-between justify-center mx-auto items-center">
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
    <section className='lg:py-[100px] py-[60px] max-w-[1440px] mx-auto px-5'>
      <div className='mx-auto flex gap-x-10 items-center lg:flex-row flex-col gap-y-7 pb-20'>
        <h2 className='font-medium lg:text-[40px] text-4xl lg:text-left text-center bg-lime-300 max-w-[178px] text-center rounded-md px-2 py-0.5'>Services</h2>
        <p class="lg:text-lg text-base text-black max-w-[580px] lg:text-left text-center">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className='grid lg:grid-cols-2 lg:gap-10 gap-7 justify-center mx-auto'>
        <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between items-center border-b-8'>
          <div className=''>
            <div className='lg:pb-20 pb-7'>
            <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-lime-300 px-[7px] rounded-md'>Search engine</span></h2>
              <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-lime-300 px-[7px] rounded-md'>optimization</span></h2>
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
        <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-lime-300 items-center border-b-8'>
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
                <span className='bg-lime-300 px-[7px] rounded-md'>Email</span></h2>
              <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-lime-300 px-[7px] rounded-md'>Marketing</span></h2>
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
        <div className='p-[50px] rounded-[45px] border border-zinc-900 lg:flex justify-between bg-lime-300 items-center border-b-8'>
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
                <span className='bg-lime-300 px-[7px] rounded-md'>Analytics and </span></h2>
              <h2 className='font-medium text-3xl lg:text-3xl text-[26px] text-black rounded-md flex'>
                <span className='bg-lime-300 px-[7px] rounded-md'>Tracking</span></h2>
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
  </body>
</html>
);
}