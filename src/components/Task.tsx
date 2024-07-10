import { useSortable } from '@dnd-kit/sortable'
import React from 'react'
import { CSS } from "@dnd-kit/utilities"

const Task = ({ title, id }: { title: string, id: number }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-2 w-full sm:w-1/2" >
      <div className="bg-gray-700 rounded flex p-4 ">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
          className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
        <span className="font-medium text-white">{title}</span>
      </div>
    </div >
  )
}

export default Task