export const initData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: [
        'column-1',
        'column-2',
        'column-3',
        'column-4',
        'column-5',
        'column-6',
        'column-7',
      ],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'MON',
          date: '2020-08-01',
          cardOrder: ['card-1', 'card-2'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Chest day - with ARM exercises',
              exercises: [
                {
                  id: 'exercise-1',
                  name: 'Bench Press Medium Grip (5x5)',
                  number: '3x',
                  info: '50 lb x 5, 60 lb x 5, 70 lb x 5 lb x 5, 70 lb x 5',
                }, {
                  id: 'exercise-2',
                  name: 'Exercise B',
                  number: '1x',
                  info: '40 lb x 10',
                },
              ],
            }, {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Leg day',
              exercises: [
                {
                  id: 'exercise-1',
                  name: 'Exercise C',
                  number: '1x',
                  info: '30 lb x 6',
                }, {
                  id: 'exercise-2',
                  name: 'Exercise D',
                  number: '1x',
                  info: '40 lb x 5',
                }, {
                  id: 'exercise-3',
                  name: 'Exercise E',
                  number: '1x',
                  info: '50 lb x 5',
                },
              ],
            },
          ],
        }
        ,
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'TUE',
          date: '2020-08-02',
          cardOrder: ['card-4', 'card-5'],
          cards: [
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Belly day',
              exercises: [
                {
                  id: 'exercise-1',
                  name: 'Bench Press Medium Grip (5x5)',
                  number: '3x',
                  info: '50 lb x 5, 60 lb x 5, 70 lb x 5 lb x 5, 70 lb x 5',
                }, {
                  id: 'exercise-2',
                  name: 'Exercise B',
                  number: '1x',
                  info: '40 lb x 10',
                },
              ],
            }, {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Body day',
              exercises: [
                {
                  id: 'exercise-1',
                  name: 'Exercise C',
                  number: '1x',
                  info: '30 lb x 6',
                }, {
                  id: 'exercise-2',
                  name: 'Exercise D',
                  number: '1x',
                  info: '40 lb x 5',
                }, {
                  id: 'exercise-3',
                  name: 'Exercise E',
                  number: '1x',
                  info: '50 lb x 5',
                },
              ],
            },
          ],
        }
        ,
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'WED',
          date: '2020-08-03',
          cardOrder: [],
          cards: [],
        }
        ,
        {
          id: 'column-4',
          boardId: 'board-1',
          title: 'THUS',
          date: '2020-08-04',
          cardOrder: [],
          cards: [],
        }
        ,
        {
          id: 'column-5',
          boardId: 'board-1',
          title: 'FRI',
          date: '2020-08-05',
          cardOrder: [],
          cards: [],
        }
        ,
        {
          id: 'column-6',
          boardId: 'board-1',
          title: 'SAT',
          date: '2020-08-06',
          cardOrder: [],
          cards: [],
        }
        ,
        {
          id: 'column-7',
          boardId: 'board-1',
          title: 'SUN',
          date: '2020-08-07',
          cardOrder: [],
          cards: [],
        }
        ,
      ],
    },
  ],
}

Date.prototype.GetFirstDayOfWeek = function() {
  return (new Date(this.setDate(this.getDate() - this.getDay()+ (this.getDay() === 0 ? -6:1) )));
}

Date.prototype.GetLastDayOfWeek = function() {
  return (new Date(this.setDate(this.getDate() - this.getDay() +7)));
}

export const getBoardData = (boardId) => {
  const boardData = initData.boards.find(board => board.id === boardId);
  const counterDate = new Date().GetFirstDayOfWeek();
  for (let i = 0; i < 7; i++) {
    boardData.columns[i].date = counterDate.toISOString().split('T')[0];
    counterDate.setDate(counterDate.getDate() + 1);
  }
  return boardData;
}