import React from 'react'
import { useState, useEffect } from 'react'

const FormInput = ({ note, setNote }) => {
    const maxLength = 50;
    const [remainingCharacter, setRemainingCharacter] = useState(maxLength);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            id: Math.random().toString(36).substring(7),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false
        }
        setNote([...note, newNote]);

        setTitle('');
        setBody('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    useEffect(() => {
        const remaining = maxLength - title.length;
        setRemainingCharacter(remaining);
    }, [title])

    return (
        <div className='form-input flex flex-col items-center w-full py-4'>
            <div className="remaining ">
                <p className='text-gray-400'> Remaining Character : {remainingCharacter}</p>
            </div>
            <form onSubmit={handleSubmit} action='submit' className='flex items-center flex-col w-96 gap-3 py-4 '>
                <input
                    type="text"
                    placeholder="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    maxLength={maxLength}
                    onKeyDown={handleKeyDown}
                    autoFocus={true}
                    className='input-judul border border-black-700 mx-1 w-full p-2 normal-case shadow-md rounded-md'
                    required
                />
                <textarea
                    name="note"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    id="id"
                    maxLength={300}
                    placeholder="note"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    className='input-catatan block border border-black-700 mx-1 w-full h-40 p-2 normal-case shadow-md rounded-md'
                    required
                />
                <button
                    className='btn-submit text-white _bg-green py-2 px-4 rounded-xl  hover:_bg-green hover:shadow-md mt-2 active:_bg-dark-green' type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormInput