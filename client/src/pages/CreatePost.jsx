import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import preview from '../assets/preview.png';
import { getRandomPrompt } from '../utils';

import { FormField, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {

  }

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>

      <div className="">
        <h1 className='font-extrabold text-3xl text-[#222328]'>Create</h1>
        <p className='text-[#666e75] mt-2'>Create imaginative and visually stunning images using DALL-E AI and share them with the community</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelname = 'Your name'
            type = 'text'
            name = 'name'
            placeholder = 'King Singh'
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormField
            labelname = 'Prompt'
            type = 'text'
            name = 'prompt'
            placeholder = 'an oil painting by Matisse of a humanoid robot playing chess'
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe = {handleSurpriseMe}
          />

          <div className="relative bg-gray-50 text-gray-900 text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img 
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'
              />
            ) : (
              <img
                src={preview}
                alt='Preview'
                className='h-9/12 w-9/12 object-contain opacity-40'
              />
            )
            }

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-black opacity-50 rounded-lg">
                <Loader/>
              </div>
            )}
            
          </div>

        </div>

        <div className="mt-5 flex gap-5">
          <button 
          type='button'
          onClick={generateImage}
          className='text-white bg-green-700 font-medium text-sm rounded-md w-full sm:w-auto px-5 py-2.5 text-center'>
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className="mt-10">
          <p className='mt-2 text-[#666e75] text-sm'>Once you have created the image you want, you can share it with others in the community</p>
        </div>

      </form>

    </section>
  )
}

export default CreatePost
