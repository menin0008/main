import React from 'react';
import './App.css';

import Galaxy from './components/Galaxy';

function App() {
  return (
    <>
      {/* Galaxy 컴포넌트를 배경으로 배치합니다. */}
      <div className="galaxy-background">
        <Galaxy />
      </div>

      {/* Header 컴포넌트 추가 */}
      <Header />

      {/* 메인 컨텐츠 */}
      <div className="content">
        <div className="main-text">
          안녕하세요, Product designer
          <br />
          김혜민 입니다.
        </div>
      </div>
    </>
  );
}

export default App;