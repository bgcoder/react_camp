import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-logo">
        <span><img src={logo} className="App-logo" alt="logo" /></span>
      </div>
      <div className="header-banner">
        <h1>CampCrew</h1>
      </div>
      <div className="header-menu">
        <span>Menu</span>
      </div>
      <div className="left-ads">
        <span>left ad</span>
      </div>
      <div className="content">
        <article>
          <p>
          Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. 
          Well, of course I'm being childish! There's no point being grown-up if you can't be childish 
          sometimes. You're a clumsy, ham fisted idiot! Are you listening to me? Hello-o-o-o. You're 
          standing on my scarf. It may be irrational of me, but human beings are my favorite species. 
          Have a jelly baby. You may be a doctor. But I'm the Doctor. The definite article, you might say. 
          Come on! I might've been saying something important. I was saying something important!
          </p>
          <p>
          Have a jelly baby. Are you listening to me? I might've been saying something important. I was 
          saying something important! Would you like a jelly baby? Well, of course I'm being childish! 
          There's no point being grown-up if you can't be childish sometimes. Come on! You may be a doctor. 
          But I'm the Doctor. The definite article, you might say. Well, my Doctorate is purely honorary and 
          Harry is only qualified to work on sailors. Hello-o-o-o. You're standing on my scarf. It may be 
          irrational of me, but human beings are my favorite species.
          </p>
          <p>
          Well, of course I'm being childish! There's no point being grown-up if you can't be childish 
          sometimes. Come on! Would you like a jelly baby? You may be a doctor. But I'm the Doctor. The 
          definite article, you might say. What?! Come out. And don't touch anything! You're a clumsy, 
          ham fisted idiot! You're standing on my scarf. Have a jelly baby. I might've been saying something 
          important. I was saying something important! Hello-o-o-o. Well, my Doctorate is purely honorary and 
          Harry is only qualified to work on sailors.
          </p>
        </article>
      </div>
      <div className="right-ads">
        <span>right ads</span>
      </div>
      <div className="footer">
        <span>legal mumbo jumbo</span>
      </div>
    </div>
  );
}

export default App;
