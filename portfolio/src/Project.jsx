import React from 'react';
import github from './assets/github.webp'
 import calculator from './assets/calculator.png'
import stopwatch from './assets/stopwatch.png'
import eidi from './assets/eidi.jpeg'
import Card from './Card';
import crud from './assets/crud.jpeg'
import Palindrome from './assets/palindrome.jpg'
import todo from './assets/todo.png'
import cricket from './assets/cricket.png'
import ecomarce from './assets/e-commarce.jpeg'
function Project() {
    
    const projects = [
        {
          title: ' GITHUB',
          description: 'Description for Project 1.',
          imageUrl: github,

          link: 'https://uzaimaalibarioffical.github.io/github/'
         ,
        },
        {
          title: 'STOPWATCH',
          description: 'Description for Project 2.',
          imageUrl: stopwatch,
          link: 'https://uzaimaalibarioffical.github.io/stopwatch/',
        },
        {
          title: 'SEND - EIDI',
          description: 'Description for Project 3.',
          imageUrl: eidi,
          link: 'https://uzaimaalibarioffical.github.io/send-eidi/',
        },
        {
          title: ' CALCULATOR',
          description: 'Description for Project 4.',
          imageUrl: calculator,
          link:  'https://uzaimaalibarioffical.github.io/new-calculater/',
        },
        {
          title: 'CRUD-APPLICATION',
          description: 'Description for Project 5.',
          imageUrl: crud,
          link: 'https://uzaimaalibarioffical.github.io/CRUD-APPLICATION-js/',
        },
        {
          title: 'PALINDROME',
          description: 'Description for Project 5.',
          imageUrl: Palindrome,
          link: 'https://uzaimaalibarioffical.github.io/palindrome/'
         ,
        },
        {
          title: 'TODOES LIST',
          description: 'Description for Project 2.',
          imageUrl: todo,
          link: 'https://uzaimaalibarioffical.github.io/TODOES/',
        },
        {
          title: 'CRICKET GAME',
          description: 'Description for Project 2.',
          imageUrl: cricket,
          link: "https://uzaimaalibarioffical.github.io/cricket-game/",
        },
        {
          title: 'E-COMMARCE',
          description: 'Description for Project 2.',
          imageUrl: ecomarce,
          link: 'https://tiny-taffy-764d09.netlify.app/',
        },
      ];
    
    
  return (
   
      <div className="container project">
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Card
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
     )
}

export default Project;
