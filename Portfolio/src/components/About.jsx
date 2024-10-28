import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-36"
    >
      <div>
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-700 pb-3">About</h1>

        {/* Introduction */}
        <p className="text-sm text-gray-700 mb-6">
          Hello, I'm <span className="font-semibold text-blue-500">Rupa Bharti</span>, a dedicated web developer with a strong interest in the MERN stack. With my background in IT, I aim to build clean, user-friendly web applications that provide a great experience and make a lasting impact.
        </p>

        {/* Education */}
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Education & Training</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-8">
          <li>Master of Computer Applications (MCA), Pondicherry University, 2024, Puducherry</li>
          <li>Bachelor of Computer Applications (BCA), Magadh University, 2020, Patna</li>
        </ul>

        {/* Skills */}
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Skills & Expertise</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-8 space-y-2">
          <li><strong>Languages:</strong> Java, HTML, CSS, JavaScript, MySQL</li>
          <li><strong>Tools/Framework/Library:</strong> Tailwind, React.js, Express.js</li>
          <li><strong>Core Subjects:</strong> OOPs, DSA,opreting sysytem</li>
        </ul>

        {/* Profiles */}
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Profiles</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-8">
          <li>
            <a href="https://www.naukri.com/code360/profile/1db9e331-c925-4559-a640-034a227235ff" className=" hover:underline" target="_blank" rel="noopener noreferrer">
              CodingNinjas
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/user/rupabhaw9yz/" className="hover:underline" target="_blank" rel="noopener noreferrer">
              GeeksForGeeks
            </a>
          </li>
        </ul>

        {/* Achievements */}
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Achievements & Awards</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 mb-8 space-y-2">
          <li>Certificate in web development with HTML, CSS, JavaScript from Data Flair.</li>
          <li>Awarded for Excellence in Poetry Writing, College of Commerce Art and Science.</li>
          <li>Awarded for Mathematics competition, School level.</li>
        </ul>

        {/* Mission Statement */}
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Mission Statement</h2>
        <p className="text-sm text-gray-700">
          My mission is to continuously develop my skills and creativity as a web developer, focusing on building user-friendly and impactful web applications. I aim to contribute to innovative projects that improve user experiences and make a positive difference in the digital world. As a fresher, I am committed to learning and growing in the field, always seeking new challenges and opportunities to expand my knowledge and contribute to the tech community.
        </p>
      </div>
    </div>
  );
}

export default About;
