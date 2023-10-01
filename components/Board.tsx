'use client'
import { useBoardStore } from '@/store/BoardStore';
import { useEffect } from 'react';
// import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {
    const getBoard = useBoardStore((state) => state.getBoard)
    useEffect(() => {
        getBoard();
        // get board
    }, [getBoard])
  return (
    <h1>hellow</h1>
//     <DragDropContext>
//         <Droppable droppableId="board" direction="horizontal" type="column">
// {(provided) => <div>{/*all render*/}</div>}
//         </Droppable>
//     </DragDropContext>
  )
}

export default Board