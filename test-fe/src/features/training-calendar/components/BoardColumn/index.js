import {Container, Draggable} from 'react-smooth-dnd'
import {mapOrder} from '../../../../utils'
import ExerciseCard from '../ExerciseCard'
import styled from './BoardColumn.module.css'

function BoardColumn ({column, onCardDrop, onAddExercise}) {
  const {
    id,
    title,
    date,
  } = column
  
  const isToday = date === new Date().toISOString().split('T')[0]

  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  const handleAddExercise = (cardId, exercise) => {
    onAddExercise({columnId: id, cardId, exercise})
  }
  
  return (
    <div className={`${styled.boardColumn} ${isToday ? styled.today : ''}`}>
      <div className={styled.dayHeader}>
        {title}
      </div>
      <div className={styled.dayBody}>
        <div className={styled.date}>{date.slice(-2)}</div>
        <Container
          groupName='col'
          onDragStart={e => console.log('drag started', e)}
          onDragEnd={e => console.log('drag end', e)}
          onDrop={e => onCardDrop(e, column.id)}
          getChildPayload={index => (cards[index])}
          dragClass='card-ghost'
          dropClass='card-ghost-drop'
          onDragEnter={(index) => {
            console.log('drag enter:', cards[index])
          }}
          onDragLeave={(index) => {
            console.log('drag leave:', cards[index])
          }}
          onDropReady={p => console.log('Drop ready: ', p)}
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'column-drop-preview',
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map(card => (
            <Draggable key={card.id}>
              <ExerciseCard card={card} onAddExercise={handleAddExercise}/>
            </Draggable>
          ))}
        </Container>
      </div>
    </div>
  )
}

export default BoardColumn