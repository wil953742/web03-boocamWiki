interface DocData {
  generation: number;
  boostcamp_id: string;
  name: string;
  content: string;
  nickname: string;
  location: string;
  language: string;
  user_image: string;
  mbti: string;
  field: string;
  link: string;
  classification: 'camper' | 'master' | 'manager';
}

export const initialDocData = {
  generation: 0,
  boostcamp_id: '',
  name: '',
  content: '',
  nickname: null,
  location: null,
  language: null,
  user_image: null,
  mbti: null,
  field: null,
  link: null,
  classification: 'camper',
};

export const docDataReducer = (state: DocData, action: {type: string, payload: DocData}): DocData => {
  switch (action.type) {
    case 'INPUT_DOC_DATA':
      return { ...state, ...action.payload }
    default:
      return state;
  }
};
