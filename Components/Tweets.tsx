import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
ChatAlt2Icon,
HeartIcon,
UploadIcon,
} from '@heroicons/react/outline'

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';





function Tweets() {
  const [tweets, setTweets] = useState<any[]>([])
  async function fetchTweets(){
    const {data} = await axios.get("https://qqbe6g8r.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'tweet'%5D%0A%0A%0A%0A")
    setTweets(data.result);
    console.log(tweets)
  }

useEffect(() => {
 
  fetchTweets();
}, [])


  return (
    <div>
     {tweets.map((tweets) => {
      return (
  <div className='flex flex-col space-x-3 border-y p-5 border-gray-100 '>
  <div className='flex space-x-3'>
    <img className='h-10 w-10 rounded-full object-cover' src={tweets?.profileImg} alt="" />
    <div>
      <div className='flex items-center'>
        <p className='mr-1 font-bold'>{tweets?.username}</p>
        <p className='hidden text-sm text-gray-500 sm:inline'> @{tweets?.username.toLowerCase().trim()} .</p>
      </div>
      <p className='pt-1'>{tweets?.text}</p>

      <img src={tweets?.image} alt="" className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'/>
    </div>
  </div>
  <div className='flex justify-between mt-5'>
    <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
   < ChatAlt2Icon className='h-5 w-5' />
    </div>
    <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
    <CachedOutlinedIcon className='h-5 w-5' />
    </div>
    <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
    <HeartIcon className='h-5 w-5' />
    </div>
    <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
    <UploadIcon className='h-5 w-5' />
    </div>
    <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
    <BarChartOutlinedIcon className='h-5 w-5' />
    </div>
  </div>
</div>
      )
     })}
  </div>

  
  )
}

export default Tweets
