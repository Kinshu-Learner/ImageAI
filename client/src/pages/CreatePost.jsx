import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import preview from '../assets';
import { getRandomPrompt } from '../utils';

import { FormFiled, Loader } from '../components';

const CreatePost = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const handleSurpriseMe = () => {

  }

  return (
    <section className='max-w-7xl mx-auto'>

      <div className="">
        <h1 className='font-extrabold text-3xl text-[#222328]'>The Create</h1>
        <p className='text-[#666e75] mt-2'>Create imaginative and visually stunning images using DALL-E AI and share them with the community</p>
      </div>

      <form action="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormFiled
            labelname = 'Your name'
            type = 'text'
            name = 'name'
            placeholder = 'King Singh'
            value = {form.name}
            handleChange = {handleChange}
          />
          <FormFiled
            labelname = 'Prompt'
            type = 'text'
            name = 'prompt'
            placeholder = 'an oil painting by Matisse of a humanoid robot playing chess'
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe = {handleSurpriseMe}
          />
        </div>
      </form>

    </section>
  )
}

export default CreatePost
