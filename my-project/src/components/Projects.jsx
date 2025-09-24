import React from 'react';
import med from "../images/medium.png";
import curr from "../images/curr.png";
import todo from "../images/todo.png";
import exc from "../images/excc.png";
import chat from "../images/chat.png";
import mudra from "../images/mudrax.png"; // make sure you have this image
import chessImg from "../images/chess.png"; // make sure you have this image
import tttImg from "../images/xo.png"; // make sure you have this image

function Projects() {
   const projects = [
    {
    title: "Realtime Chess",
    description: "A real-time multiplayer Chess game with live WebSocket-based gameplay, context state management, and interactive UI built with React and Tailwind.",
    img: chessImg, // replace with your chess screenshot/image
    github: "https://github.com/nikhilachale/Chess",
    tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"]
},
{
    title: "XOXO Clash",
    description: "A real-time multiplayer Tic Tac Toe game built with React and WebSockets, supporting live moves and persistent game state.",
    img: tttImg, // replace with your Tic Tac Toe screenshot/image
    github: "https://github.com/nikhilachale/XOXO-Clash",
    tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"]
},
    {
        title: "MudraX",
        description: "A Solana-based Web3 DApp to generate HD wallets, request SOL airdrops, sign messages, and transfer tokens with both mnemonic and wallet adapter support.",
        img: mudra,
        github: "https://github.com/nikhilachale/MudraX",
        tags: ["React", "Tailwind", "TypeScript", "Solana", "Web3", "Wallet Adapter", "bip39"]
    },
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
        title: "Chat Application",
        description: "Developed a real-time chat application using WebSockets, enabling instant bidirectional communication.",
        img: chat,
        github: "https://github.com/nikhilachale/ChatApplication-",
        tags: ["React", "Tailwind", "TypeScript", "WebSockets"]
    },
    {
        title: "Currency Converter",
        description: "A real-time currency converter with exchange rate updates.",
        img: curr,
        github: "https://github.com/nikhilachale/Currency-converter",
        tags: ["React", "Tailwind", "TypeScript"]
    },
    {
        title: "Excalidraw Clone",
        description: "A collaborative whiteboard tool mimicking Excalidraw, built for real-time visual ideation and sketching.",
        img: exc, 
        github: "https://github.com/nikhilachale/Excalidraw",
        tags: ["React", "Tailwind", "TypeScript", "Canvas", "Realtime"]
    }
];

    return (
        <div className="w-full px-4 py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-lg p-4 shadow-md bg-gray-900">
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            className="w-full h-48 md:h-40 object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        />
                        <h3 className="text-xl text-neutral-200 font-semibold">{project.title}</h3>
                        <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded-md">{tag}</span>
                            ))}
                        </div>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4 block text-green-600 hover:underline">
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;