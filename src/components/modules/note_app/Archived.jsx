import React from 'react'

const Archived = ({ note, showDropdown, selectedNoteId, handleArchived, handleDelete, Dots, handleToggleDropdown }) => {
    return (
        note
            .filter((item) => item.archived === true)
            .map((item) => (
                <div className="card-note flex flex-col w-3/5 border box-border p-4 gap-2 shadow-md _bg-blue text-black rounded-lg lg:w-1/4 md:w-2/6 relative" key={item.id}>
                    <div className="head-note flex justify-between">
                        <h3 className="judul font-bold truncate _blue text-lg">{item.title}</h3>
                        <img
                            src={Dots}
                            alt="Dropdown"
                            className='w-4 mr-2 cursor-pointer'
                            onClick={() => handleToggleDropdown(item.id)}
                        />
                        {showDropdown && selectedNoteId === item.id && (
                            <div className='dropdown absolute flex _bg-green flex-col gap-2 p-3 px-10 top-10 right-6 rounded-l-2xl rounded-b-2xl'>
                                <span
                                    className='cursor-pointer hover:text-white'
                                    value="archive"
                                    onClick={handleArchived}
                                >Unarchive</span>

                                <span
                                    className='cursor-pointer hover:text-white'
                                    value="Delete"
                                    onClick={handleDelete}
                                >Delete</span>
                            </div>
                        )}
                    </div>
                    <p className="catatan max-h-36 line-clamp-6 " >{item.body}</p>
                    <p className="date _green">{item.createdAt}</p>
                </div>
            ))
    )
}

export default Archived