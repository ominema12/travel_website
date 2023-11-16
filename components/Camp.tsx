import React from 'react'
import Image from 'next/image';

interface CampProps{
  backgroundImage: string;
  title:string;
  subtitle:string;
  peopleJoined: string;

}

const CampSite= ({ backgroundImage, title, subtitle, peopleJoined}: CampProps)=>{
  return(
    <div className={'h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl'} >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image 
            src="/folded-map.svg"
            />
             </div>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py:10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"> </div>
      <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
    </section>
  )
}

export default Camp