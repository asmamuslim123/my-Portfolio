
import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A simple countdown timer app built with React and TypeScript.",
        img: "/images/project-01.png",
        tags: ["React", "TypeScript", "CSS", "Node"],
    },
    {
        id: 1,
        title: "Simple Calculator",
        desc: "A simple calculator app built with HTML, CSS and TypeScript.",
        img: "/images/project-02.png",
        tags: ["HTML", "TypeScript", "CSS", "Node"],
        },
    {
        id: 2,
        title: "Todo List",
        desc: "A typescript based app for managing and organizing your tasks efficiently.",
        img: "/images/project-03.png",
        tags: ["React", "TypeScript", "CSS", "Node"],
    },
    {
        id: 3,
        title: "Static Interactive Resume",
        desc: "A Typescript-based static resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/images/project-04.png",
        tags: ["HTML", "Typescript", "CSS", "Node"],
    },
        {
            id: 4,
            title: "Currency Converter Project",
            desc: "A simple currency converter app built with HTML CSS and TypeScript real-time rates.",
            img: "/images/project-05.png",
            tags: ["React", "TypeScript", "CSS", "Node"],
        },
    {
        id: 5,
        title: "ID Card UI using Next.js ",
        desc: "A creating a stunning ID Card UI using Next.js & TailwindCSS! app built with React and TypeScript.",
        img: "/images/project-06.png",
        tags: ["React", "TypeScript", "CSS", "Node"],
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}
export default Projects
