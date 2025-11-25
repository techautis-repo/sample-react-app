import React from 'react'

import { Button } from 'primereact/button';   
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setSample, selectSample, Sample } from '../../redux/slice/sampleSlice'
 

export function CadastroSample() {
  const sample = useAppSelector(selectSample)
  const dispatch = useAppDispatch()

  function updateValue(){
    const id = Math.random().toString(20)
    const name =  Math.random().toString(30)

    const newSample: Sample = {
        id,
        name
    }
    dispatch(setSample(newSample))
  }

  return (
    <div className="flex flex-column md:flex-row gap-3 p-4">
      <div className='flex flex-column'>
        <div className='flex'> 
          <Button onClick={updateValue}>Update Sample</Button>
        </div>  
        <div className='flex pt-2 pb-2'>
            <label className='pr-2'>Code:</label>
            <span>{sample?.id}</span>
        </div>  
        <div className='flex'>
            <label className='pr-2'>Name:</label>
            <span>{sample?.name}</span> 
        </div>  
      </div>  
    </div>
  )
} 