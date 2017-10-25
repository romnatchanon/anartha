import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './component/cover.js';
import './component/fullpage.js';
import './component/fullpage.css';

const App = () => (
<div id="fullpage">
<section id="section1" class="section">
  <Cover/>
</section>
  <section id="section2" class="section">
  <div class="container">
    <div class="col-md-6 text-center">
      <p>Section 2</p>
    </div>
    <div class="col-md-6 text-center">
        <p>with 2 columns in it.</p>
        
    </div>
  </div>
</section>
<section id="section3" class="section">
  <div class="container">
    <div class="col-md-12 text-center">
      <p>Section 3</p>
    </div>
  </div>
</section>
</div>

)

export default App;
