import {useEffect, useReducer} from 'react'
import {applyDrag, getBoardData, mapOrder} from '../../../../utils'
import BoardColumn from '../BoardColumn'
import styled from './TrainingBoard.module.css'

function TrainingBoard () {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      board: {},
      columns: [],
    },
    undefined)
  const {board, columns} = state

  useEffect(() => {
    const boardInit = getBoardData('board-1')
    if (boardInit) {
      // sort columns by columnOrder
      const sortedColumns = mapOrder(boardInit.columns, boardInit.columnOrder,
        'id')
      setState({
        columns: sortedColumns,
        board: boardInit,
      })
    }
  }, [])

  const handleCardDrop = (dropResult, columnId) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns]
      const currentColumn = newColumns.find(column => column.id === columnId)
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult)
      currentColumn.cardOrder = currentColumn.cards.map(card => card.id)
      setState({
        columns: newColumns,
      })
    }
  }
  
  const handleAddExercise = ({columnId, cardId, exercise}) => {
    const newColumns = [...columns]
    const currentColumn = newColumns.find(column => column.id === columnId)
    currentColumn.cards = currentColumn.cards.map(card => {
      if (card.id === cardId) {
        card.exercises.push(exercise)
      }
      return card
    })
    setState({
      columns: newColumns,
    })
  }

  if (!board.id) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className={styled.trainingBoard}>
      <div className={styled.boardColumns}>
        {columns && columns.length > 0 && columns.map((column) => (
          <BoardColumn
            key={column.id}
            column={column}
            onCardDrop={handleCardDrop}
            onAddExercise={handleAddExercise}
          />
        ))}
      </div>
    </div>
  )
}

export default TrainingBoard