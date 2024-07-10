"use client";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { useState } from "react";
import Column from "@/components/Column";
import { arrayMove } from "@dnd-kit/sortable";

export type Task = {
  id: number,
  title: string
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Title 1' },
    { id: 2, title: 'Title 2' },
    { id: 3, title: 'Title 3' },
    { id: 4, title: 'Title 4' },
    { id: 5, title: 'Title 5' },
  ]);

  const findIndex = (id: number) => {
    return tasks.findIndex((task) => id === task.id);
  }

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((prevTask) => {
      const oldIndex = findIndex(active.id);
      const newIndex = findIndex(over.id);
      return arrayMove(prevTask, oldIndex, newIndex);
    })

  }


  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium text-white">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks} />
        </DndContext>
      </div>
    </div>
  );
}
