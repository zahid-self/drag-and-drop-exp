import React from 'react'
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import Task from './Task'
import { Task as TaskType } from '@/app/page'

const Column = ({ tasks }: { tasks: TaskType[] }) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {
            tasks.map((task) => (
              <Task title={task.title} id={task.id} key={task.id} />
            ))
          }
        </SortableContext>
      </div>
    </div>
  )
}

export default Column