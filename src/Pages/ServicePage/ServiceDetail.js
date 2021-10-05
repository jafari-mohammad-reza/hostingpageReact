import React from 'react'

function ServerDetailComponent({
  ServerGroup,
  ServerName,
  ServerDetail,
  ServerCpuType,
  ServerCpuCores,
  ServerPrice,
  ServerHddStorage,
  ServerRamStorage,
  ServerSdd = null,
}) {
  ServerName = 'Test'
  ServerGroup = 'test'
  ServerDetail = 'Test'
  ServerCpuType = 'Test'
  ServerCpuCores = 'Test'
  ServerPrice = 'Test'
  ServerHddStorage = 'Test'
  ServerRamStorage = 'Test'
  ServerSdd = 'Test'

  return (
    <div className="">
      <header className="bg-primary1 h-28" />
      <main className="px-5 py-10 h-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl text-center">{ServerName}</h1>
        <main className="w-4/5 h-5/6 py-16 "></main>
      </main>
    </div>
  )
}

export default ServerDetailComponent
