import React, { useState } from 'react'

const TextForm = (props) => {

    const handleOnChange = (event) => {
        console.log("On Change");

        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Upper Case Button Clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }


    // Change Text - Hindi

    async function translateToHindi(text) {

        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=' + encodeURIComponent(text);

        try {
        const response = await fetch(url);
        const result = await response.json();

        return result[0][0][0];
         } catch (error) {
            alert('Please Enter Your Text !!!!');
         return null;
     }

    }

    // calling the function

    const hinditext = () => {
        translateToHindi(text)
            .then(translatedText => {
                console.log('Translated Text:', translatedText);
                let hindi = translatedText
                setText(hindi)
            });
    }

    // Text Change In Odiya

    async function translateToOdia(text) {
        const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=or&dt=t&q=' + encodeURIComponent(text);

        try {
            const response = await fetch(url);
            const result = await response.json();
            
            return result[0][0][0];
        } catch (error) {
            alert('Please Enter Your Text !!!!');
            return null;
        }
    }

    // Usage example

    const odiyaText = () =>{
    translateToOdia(text)
        .then(translatedText => {
            console.log('Translated Text:', translatedText);
            let odiya = translatedText
            setText(odiya)
        });
    }


    const [text, setText] = useState("");

    return (

        <div className='w-full h-screen bg-cover bg-no-repeat'
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1645226880663-81561dcab0ae?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        <div className='flex flex-col justify-center items-center border p-4 space-y-4 max-w-lg mx-auto bg-gray-500 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold'>{props.heading}</h1>
        <div className='w-full'>
            <textarea className='w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder="Enter Text" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <div className='flex flex-wrap justify-center space-x-2 space-y-2'>
            <button className='border bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200' onClick={handleUpClick}>Convert Upper Case</button>
            <button className='border bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200' onClick={hinditext}>Hindi Language</button>
            <button className='border bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200' onClick={odiyaText}>Odia Language</button>
        </div>
     </div>
     </div>
    
    )
}

export default TextForm
