import React, { useState, useEffect, useMemo } from 'react'
import ContactUsImage from '../../public/assets/ContactUsImage2.jpg'
import Ripple from '../Utils/Ripple'
import AddCloudIcon from '../../public/assets/AddCloudIcon.svg'
import AddImage from '../../public/assets/AddImage.svg'


function ContactUsPage() {

    const [Imgs, setImg] = useState([
        {
            id: 1,
            img: '',
            preview: ''
        }
    ]);

    function HandleAddImageClick() {
        if (Imgs.length < 3) {
            setImg((PreVal) => {
                let newArray = [...PreVal]
                let newArray2 = [...newArray, { id: newArray.length + 1, img: '' }]
                return newArray2;
            })
        }
    }

    function handleImageChange(e, index) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg((preVal) => {
                    let NewArray = [...preVal];
                    NewArray[index] = {
                        ...NewArray[index],
                        img: file,
                        preview: reader.result
                    };
                    return NewArray;
                });
            };
            reader.readAsDataURL(file);
        }
    }


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        phone: '+91 ',
        issue: ''
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: id === 'phone' ? value.replace(/[^0-9]/g, '') : value
        }));
    }

    function handleContactClick(e) {
        e.preventDefault();
        setFormData({ firstName: '', lastName: '', emailId: '', phone: '+91 ', issue: '' }); // Reset form data
    }


    return (
        <div className='relative flex items-center justify-center'>
              <div className="absolute flex h-[700px] z-0 left-0 right-0 top-0 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Ripple />
                <h1 className='text-[#9FB9E2] text-7xl fontStyle'>Contact Us</h1>
            </div>
            <div className='flex items-center justify-center w-full mt-[500px] relative z-10'>
                <div className="flex flex-col xl:flex-row  md:w-[90%] mt-32 mb-24 bg-white">
                    <div className="xl:w-[40%] h-[500px] md:h-full flex items-center justify-center bg-[#e6f3ff]">
                        <img className='w-full h-full' src={ContactUsImage} alt="" />
                    </div>
                    <div className="p-4 md:p-7 lg:p-12 xl:w-[60%]">
                        <div className="">
                            <h1 className='text-2xl'>Get In <span className='font-medium'>Touch</span></h1>
                            <p className='text-sm text-primary-default'>We Will Guide you Whenever you want</p>
                        </div>

                        <form onSubmit={handleContactClick} className='flex flex-col gap-10 mt-16'>
                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="flex flex-col w-full">
                                    <label className='text-gray-500 text-sm' htmlFor="firstName">First Name <span className='text-primary-default'>*</span></label>
                                    <input required id='firstName' type="text" value={formData.firstName} onChange={handleChange} className='outline-none border p-2 focus:outline-primary-default' />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label className='text-gray-500 text-sm' htmlFor="lastName">Last Name <span className='text-primary-default'>*</span></label>
                                    <input required id='lastName' type="text" value={formData.lastName} onChange={handleChange} className='outline-none border p-2 focus:outline-primary-default' />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className='text-gray-500 text-sm' htmlFor="emailId">Email <span className='text-primary-default'>*</span> </label>
                                <input required id='emailId' type="text" value={formData.emailId} onChange={handleChange} className='outline-none border p-2 focus:outline-primary-default' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-gray-500 text-sm' htmlFor="phone">Phone <span className='text-primary-default'>*</span> </label>
                                <input required id='phone' type="text" value={formData.phone} onChange={handleChange} className='outline-none border p-2 focus:outline-primary-default' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-gray-500 text-sm' htmlFor="issue">Describe(optional) </label>
                                <textarea id="issue" value={formData.issue} onChange={handleChange} className='border outline-none p-2 mt-2 focus:outline-primary-default'></textarea>
                            </div>

                            <div className="">
                                <p className="text-sm text-gray-600 mb-2">
                                    Upload images of your jewelry items to help us better understand your design or inquiry.
                                </p>
                                <p className="text-xs text-gray-500 italic">
                                    • Supported formats: JPEG, PNG
                                    • Maximum 3 images
                                    • Each image should be clear and well-lit
                                </p>
                            </div>

                            <div className="w-full py-2 flex flex-col md:flex-row items-center px-4 gap-4">
                                <div className="flex flex-wrap gap-4">
                                    {Imgs.map((item, index) => (
                                        <div className="w-32 h-32 hover:scale-105 transition-all duration-300 ease-in-out border rounded-lg flex items-center justify-center relative">
                                            {item.preview ? (
                                                <img
                                                    src={item.preview}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            ) : (
                                                <img src={AddCloudIcon} alt="Upload" />
                                            )}
                                            <input type="file" onChange={(e) => handleImageChange(e, index)} className='w-full h-full opacity-0  cursor-pointer absolute' /></div>
                                    ))}
                                </div>
                                <div onClick={() => { HandleAddImageClick() }} className="w-25 p-7 hover:scale-105 transition-all duration-300 ease-in-out rounded-full cursor-pointer h-25 border flex items-center justify-center"><img src={AddImage} alt="" /></div>
                            </div>
                            <button className='border py-2 bg-white/10 backdrop-blur-sm text-primary-default rounded-full'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage
