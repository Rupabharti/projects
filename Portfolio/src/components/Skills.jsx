import React from 'react';
import CSS from '../assets/img/css.jpg';
import express from '../assets/img/express.png';
import Html from '../assets/img/html.png';
import java from '../assets/img/java.png';
import javaScript from '../assets/img/javascript.png';
import Reactjs from '../assets/img/react1.png';
import node from '../assets/img/node.png';
import mongodb from '../assets/img/mongodb.jpg';
import mysql from '../assets/img/mysql1.png';
import oops from '../assets/img/oops.png';
import dsa from '../assets/img/dsa.png';

function Skills() {
  const Skillitem = [
    { id: 1, text: "REACT", logo: Reactjs },
    { id: 2, text: "MongoDB", logo: mongodb },
    { id: 3, text: "Node.js", logo: node },
    { id: 4, text: "JavaScript", logo: javaScript },
    { id: 5, text: "CSS", logo: CSS },
    { id: 6, text: "Java", logo: java },
    { id: 7, text: "DSA", logo: dsa },
    { id: 8, text: "OOP", logo: oops },
    { id: 9, text: "HTML", logo: Html },
    { id: 10, text: "MySQL", logo: mysql },
    { id: 11, text: "Express.js", logo: express },
  ];

  return (
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-700 pb-3">Skills</h1>
        {/* Container for the skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-start">
          {Skillitem.map(({ id, text, logo }) => (
            <div
              className="flex flex-col items-center justify-start border-t-2 pt-6 md:pt-10"
              key={id}
            >
              {/* Image */}
              {logo ? (
                <img src={logo} alt={text} className="w-24 h-24 mb-2 md:w-36 md:h-36" />
              ) : (
                <div className="w-16 h-16 mb-2 bg-gray-200"></div>
              )}
              {/* Skill name */}
              <div className="text-lg font-medium">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
