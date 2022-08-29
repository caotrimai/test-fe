import ExerciseAction from '../ExerciseAction'
import styled from './ExerciseCard.module.css'
import plusIcon from '../../../../assets/images/icon-plus.png'

function ExerciseCard ({card, onAddExercise}) {
  const {id, title, exercises} = card
  
  const testAddedExercise = {
    id: 'exercise-test-1',
    name: 'Added Exercise',
    number: '1x',
    info: '30 lb x 6',
  }
  
  return (
    <div className={`ExerciseDay ${styled.exerciseCard}`}>
      <div className={styled.header}>
        <div className={`${styled.headerTitle} text-eclipse`}>
          {title}
        </div>
        <div className={styled.headerMenu}>...</div>
      </div>
      <div className={styled.body}>
        {exercises && exercises.length > 0
          && exercises.map((exercise) => (
            <ExerciseAction key={exercise.id} exerciseAction={exercise}/>
          ))}
      </div>
      <div className={styled.addExercise}>
        <img 
          src={plusIcon} 
          alt='add exercise' 
          width='12'
          height='12'
          onClick={() => onAddExercise(id, testAddedExercise)}
        />
      </div>
    </div>
  )
}

export default ExerciseCard