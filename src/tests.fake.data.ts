const visitorTestBaseInfo: any = {
  id: '13dsaf4f4f4f4f4f4f4',
  startedAt: null,
  finishedAt: null,
  test: {
    title: 'English Test',
    code: 'ENGTEST',
    description:
      "If you are not sure about your level, don't worry, you can take this test. There are 20 questions and there is no time limit. You will be able to see the answers when you finish the test.",
  },
  visitor: {
    firstName: 'Dovar',
    lastName: 'ASD',
    imageUrl: null,
  },
};

const visitorTestQuestions: any = [
  {
    id: 'fadsfasdfasd',
    answerIds: [],
    question: {
      title: '________ name is Robert.',
      variants: [
        {
          id: 'fadsfasdfasdf',
          value: 'I',
        },
        {
          id: '123dasdasddsa',
          value: 'Me',
        },
        {
          id: 'gfdgfdagfdgfgg',
          value: 'My',
        },
      ],
    },
  },
  {
    id: 'gfdsgfdg444',
    answerIds: [],
    question: {
      title: '________ are you from?',
      variants: [
        {
          id: 'g5gfdgfdgg',
          value: 'What',
        },
        {
          id: 'gfdshg',
          value: 'Where',
        },
        {
          id: 'dfvdsfff',
          value: 'Who',
        },
      ],
    },
  },
  {
    id: 'gfasdfasdf4',
    answerIds: [],
    question: {
      title: '________ he play tennis?',
      variants: [
        {
          id: 'gfdv33333dd',
          value: 'Where',
        },
        {
          id: 'fdsafsadf',
          value: 'Does',
        },
        {
          id: 'asdcasdcasdc',
          value: 'Do',
        },
      ],
    },
  },
];

// РЕЗУЛЬТАТ В ТАКОМ ВИДЕ И ПО ТАКОМУ УРЛ:
// api/testing/{visitorTestBaseInfo.id}/finish

const finishBody: any = [
  {
    id: 'fadsfasdfasd', // visitorTestQuestions[0].id
    answerIds: ['123dasdasddsa'], // visitorTestQuestions[0].answerIds - те варианты которые выбрал пользователь
  },
  {
    id: 'gfdsgfdg444',
    answerIds: ['gfdshg'],
  },
  {
    id: 'gfasdfasdf4',
    answerIds: ['fdsafsadf'],
  },
];


export {finishBody,visitorTestBaseInfo,visitorTestQuestions,}