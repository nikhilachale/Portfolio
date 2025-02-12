import React from 'react';
import med from "../images/medium.png";
import curr from "../images/curr.png";
import todo from "../images/todo.png";

function Projects() {
    const projects = [
        {
            title: "Medium Clone",
            description: "A Medium-like blogging platform with authentication and CRUD features.",
            img: med,
            github: "https://github.com/nikhilachale/Medium",
            tags: ["React", "Tailwind", "TypeScript", "Cloudflare", "PostgreSQL", "Prisma"]
        },
        {
            title: "TODO List",
            description: "A simple and efficient to-do list application.",
            img: todo,
            github: "https://github.com/nikhilachale/todolist",
            tags: ["React", "Tailwind", "TypeScript", "MongoDB"]
        },
        {
            title: "Currency Converter",
            description: "A real-time currency converter with exchange rate updates.",
            img: curr,
            github: "https://github.com/nikhilachale/Currency-converter",
            tags: ["React", "Tailwind", "TypeScript"]
        },
    ];

    return (
        <div className="w-screen h-screen mx-auto px-6 py-10">
            <h2 className="text-5xl pt-7 font-bold text-center mb-6">Projects</h2>
            <div className="grid pt-7 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 shadow-md bg-white">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-40 object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        />
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-md">{tag}</span>
                            ))}
                        </div>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 block text-blue-600 hover:underline">
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;