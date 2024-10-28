import React from 'react';

const Project = () => {
  const projects = [
    {
      name: "StudyNotion",
      description: "An e-learning platform where users can access various courses, track progress, and interact with instructors instructor can  perform CURD opretion.",
      tech: "MongoDB, Express, React, Node.js",
      liveDemo: "https://studynotion.com",
      repo: "https://github.com/yourusername/studynotion",
    },
    {
      name: "BiblioByte",
      description: "A digital library platform allowing users to borrow and read books online, with book reviews and recommendations.",
      tech: "MongoDB, Express, React, Node.js",
      liveDemo: "https://bibliobyte.com",
      repo: "https://github.com/yourusername/bibliobyte",
    },
    {
        name: "Portfolio",
        description: "my Portfolio.",
        tech: "MongoDB, Express, React, Node.js",
        liveDemo: "https://bibliobyte.com",
        repo: "https://github.com/yourusername/bibliobyte",
      },
  ];

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24"> 
    <section id="projects">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-700 pb-5">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Technologies: {project.tech}</p>
            <div className="flex space-x-4">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Live Demo
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Project;
