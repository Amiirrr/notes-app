import React from 'react'
import { useState } from 'react'
import { getInitialData } from '../../utils';

import FormInput from '../../components/modules/note_app/FormInput';
import Notes from '../../components/modules/note_app/Notes';
import Archived from '../../components/modules/note_app/Archived';

import Dots from '../../assets/foto/three-dots.svg';

const NoteApp = () => {

    const [note, setNote] = useState(getInitialData());
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedNoteId, setSelectedNoteId] = useState(null);
    const [selected, setSelected] = useState('notes');

    const handleToggleDropdown = (id) => {
        setSelectedNoteId(id);
        setShowDropdown(!showDropdown);
    }

    const handleDelete = () => {
        const updateNotes = note.filter((item) => item.id !== selectedNoteId)
        setNote(updateNotes)
    }

    const handleArchived = () => {
        const updateNotes = note.map((item) => {
            if (selectedNoteId === item.id) {
                return {
                    ...item,
                    archived: !item.archived,
                }
            }
            return item
        })
        setNote(updateNotes);
        setShowDropdown(false);
        setSelectedNoteId(null);
    }

    return (
        <div className='note-app container max-w-screen-xl mx-auto mt-3 mb-10'>
            <FormInput note={note} setNote={setNote} />
            <button
                className={`py-5 px-10 bg-white tracking-widest rounded-tl-lg ${selected === 'notes' ? '_btn-active' : ''}`}
                onClick={() => setSelected('notes')}>
                <span>Notes</span>
            </button>
            <button
                className={`py-5 px-10 bg-white tracking-widest rounded-tr-lg ${selected === 'archived' ? '_btn-active' : ''}`}
                onClick={() => setSelected('archived')}>
                <span>Archived</span>
            </button>
            <div className="note-body flex flex-row flex-wrap gap-4 justify-center py-10 bg-white rounded-r-2xl rounded-b-2xl shadow-md max-w-7xl max-h-100">
                {
                    selected === 'notes' ? (
                        note.length > 0 ? (
                            <Notes note={note} showDropdown={showDropdown} selectedNoteId={selectedNoteId} handleArchived={handleArchived} handleDelete={handleDelete} Dots={Dots} handleToggleDropdown={handleToggleDropdown} />
                        ) : (
                            <p className='text-gray-400'>notes is empty</p>
                        )
                    )
                        : selected === 'archived' ? (
                            note.length > 0 ? (
                                <Archived note={note} showDropdown={showDropdown} selectedNoteId={selectedNoteId} handleArchived={handleArchived} handleDelete={handleDelete} Dots={Dots} handleToggleDropdown={handleToggleDropdown} />
                            ) : (
                                <p className='text-gray-400'>archive is empty</p>
                            ))
                            : null
                }
            </div>
        </div >
    )
}

export default NoteApp