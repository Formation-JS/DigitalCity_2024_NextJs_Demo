import Image from 'next/image';

export default function HomePage() {
  return (
    <div>
      <h1 className='text-5xl mb-5'>Hello Logal</h1>
      <Image 
        src='/polatouche-landscape.jpg'
        alt='Un polatouche !'
        width={1920}
        height={1080}
        className='hidden md:block'
        />
      <Image 
        src='/polatouche-portait.jpg'
        alt='Un polatouche !'
        width={610}
        height={690}
        className='block md:hidden'
        />

    </div>
  );
}
