'use client'

import { useBoardStore } from '@/Store/BoardStore';
import { useEffect } from 'react';
import {DragDropContext, DropResult, Droppable} from 'react-beautiful-dnd';
import Column from './Column';

function Board() {
    const [board, getBoard] = useBoardStore((state) => [
        state.board,
        state.getBoard,
    ]);

    useEffect(() => {
        getBoard();
    }, [getBoard]);

    // console.log(board);
    const handleOnDragEnd = (result: DropResult) =>{

    }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='Board' direction='horizontal' type='column'>
            {(provided) => (
                <div
                    className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {/* rendering all the columns */}
                    {Array.from(board.columns.entries()).map(([id,column], index) => (
                        <Column key={id} id={id} todos={column.todos} index={index} />
                    ))}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default Board