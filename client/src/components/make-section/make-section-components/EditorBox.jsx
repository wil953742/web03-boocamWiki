import React, { useState } from "react";
import styled from "styled-components";
import EditorWithPreview from './EditorWithPreview';
import Editor from './Editor';
import Preview from './Preview';

const TotalBox = styled.div`
  width: 868px;
  height: 401px;
  border: 2px solid #D7D7D7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxHeader = styled.div`
  width: 868px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  background: #F6F6F6;
  border-left: 2px solid #D7D7D7;
  border-right: 2px solid #D7D7D7;
  border-radius: 5px 5px 0px 0px;
  padding-top: 8px;
  padding-left: 9px;
`;

const EditorTypeLabel = styled.label`
  width: 81px;
  height: 36px;
  color: #222222;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F6F6;
`;

const EditorTypeRadio = styled.input`
  &:checked + label{
    background-color: white;
    border: 2px solid #D7D7D7;
    border-bottom: none;
    border-radius: 5px 5px 0px 0px;
  }

  display: none;
`;

const EditorBox = ({docData, dispatch}) => {
  const [inputStatus, setInputStatus] = useState('editor');

  const editorTypes = [
    { name: 'editor', text: '편집기', component: <Editor docData={docData} dispatch={dispatch} /> },
    { name: 'preview', text: '미리보기', component: <Preview docData={docData} /> },
    {
      name: 'editorWithPreview',
      text: '동시보기',
      component: <EditorWithPreview docData={docData} dispatch={dispatch} />,
    },
  ];

  const handleBtn = (e) => {
    setInputStatus(e.target.value);
  };

  return (
    <TotalBox>
      <BoxHeader>
          {editorTypes.map((type) => (
          <div key={type.name}>
              <EditorTypeRadio type='radio' id={type.name} name='typeRadio' value={type.name} onClick={handleBtn} checked={inputStatus === type.name} />
              <EditorTypeLabel htmlFor={type.name}>{type.text}</EditorTypeLabel>
          </div>
          ))}
      </BoxHeader>

      {editorTypes.map((type) => (
          <div key={type.name}>{type.name === inputStatus ? type.component : <></>}</div>
      ))}
    </TotalBox>
  )
}

export default EditorBox;