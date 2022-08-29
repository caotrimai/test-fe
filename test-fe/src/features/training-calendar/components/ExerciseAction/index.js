import styled from './ExerciseAction.module.css'

function ExerciseAction ({exerciseAction}) {
  const {name, number, info} = exerciseAction

  return (
    <div className={styled.exerciseAction}>
      <div className={`${styled.exerciseName} text-eclipse`}>
        {name}
      </div>
      <div className={styled.exerciseDetails}>
        <span className={styled.exerciseNumber}>
          {number}
        </span>
        <span className={`${styled.exerciseInfo} text-eclipse`}>
          {info}
        </span>
      </div>
    </div>
  )
}

export default ExerciseAction