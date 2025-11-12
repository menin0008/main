// [App.jsx의 완벽한 최종 코드입니다]

import React from 'react';
import './App.css'; 

import Galaxy from './components/Galaxy';

function App() {
  return (
    <>
      <Galaxy />

      <div className="content">
        <h1>프로젝트 성공!</h1>
        <p>Galaxy 배경이 보입니다.</p>
      </div>
    </>
  );
}

export default App;