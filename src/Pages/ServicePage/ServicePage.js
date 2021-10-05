import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { FaHelicopter } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { IoRocketSharp } from 'react-icons/io5'
import IISServerComponent from './Components/ServerComponent'
function ServicePage() {
  return (
    <div className="my-20">
      <section className="text-center flex flex-col px-4 md:px-24 mx-0 ">
        <div className="my-16">
          <h2 className="font-bold text-3xl my-8">IIS Servers</h2>
          <Carousel
            className="h-full "
            infiniteLoop={true}
            emulateTouch={true}
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            interval={3000}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 p-5  gap-10 ">
              <IISServerComponent
                Icon={FaHelicopter}
                Name={'Regular'}
                CpuType={'nvidia'}
                CpuCore={'CoreI7'}
                Description={'Regular Server for light websites for few users'}
                Price={25}
                HddStorage={20}
                RamStorage={8}
                AdditionalOption={['Joining At <a href="#">Customer Club</a>']}
                className="mx-0"
              />
              <IISServerComponent
                Icon={GiCommercialAirplane}
                Name={'Standard'}
                Description={
                  'Very Good Server for new ECommercial websites or any website with medium range of users'
                }
                CpuType={'nvidia'}
                HddStorage={50}
                CpuCore={'CoreI9'}
                Price={49.99}
                RamStorage={16}
                AdditionalOption={[
                  'Joining At <a href="#">Special Customer Club</a>',
                  'Attended at our monthly giveaway',
                ]}
                className="mx-0"
              />
              <IISServerComponent
                Icon={IoRocketSharp}
                Name={'RocketShip'}
                Description={
                  'Fantastic  server for websites with millions of users'
                }
                Price={90}
                CpuType={'nvidia'}
                CpuCore={'CoreI10'}
                HddStorage={100}
                RamStorage={32}
                AdditionalOption={[
                  'Joining At <a href="#">Special Customer Club</a>',
                  'Attended at our monthly giveaway',
                  '1 month sponsor free account',
                ]}
                className="mx-0"
              />
            </div>
          </Carousel>
        </div>
        <div className="my-16">
          <h2 className="font-bold text-3xl my-8">Linux Servers</h2>
          <Carousel
            className="h-full "
            infiniteLoop={true}
            emulateTouch={true}
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            interval={3000}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 p-5  gap-10 ">
              <IISServerComponent
                Icon={FaHelicopter}
                Name={'Regular'}
                CpuType={'nvidia'}
                CpuCore={'CoreI7'}
                Description={'Regular Server for light websites for few users'}
                Price={25}
                HddStorage={20}
                RamStorage={8}
                AdditionalOption={['Joining At <a href="#">Customer Club</a>']}
                className="mx-0"
              />
              <IISServerComponent
                Icon={GiCommercialAirplane}
                Name={'Standard'}
                Description={
                  'Very Good Server for new ECommercial websites or any website with medium range of users'
                }
                CpuType={'nvidia'}
                HddStorage={50}
                CpuCore={'CoreI9'}
                Price={49.99}
                RamStorage={16}
                AdditionalOption={[
                  'Joining At <a href="#">Special Customer Club</a>',
                  'Attended at our monthly giveaway',
                ]}
                className="mx-0"
              />
              <IISServerComponent
                Icon={IoRocketSharp}
                Name={'RocketShip'}
                Description={
                  'Fantastic  server for websites with millions of users'
                }
                Price={90}
                CpuType={'nvidia'}
                CpuCore={'CoreI10'}
                HddStorage={100}
                RamStorage={32}
                AdditionalOption={[
                  'Joining At <a href="#">Special Customer Club</a>',
                  'Attended at our monthly giveaway',
                  '1 month sponsor free account',
                ]}
                className="mx-0"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export default ServicePage
