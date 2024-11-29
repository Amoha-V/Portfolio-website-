import React, { useState } from 'react';
import {
  Award, BookOpen, Code, GraduationCap,
  Cpu, FileText, Globe, Github,
  Linkedin, Mail, TerminalSquare, BarChart
} from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projectData = [
    {
      title: "Fertilizer Optimizer",
      description: "AI-powered tool providing tailored fertilizer recommendations to enhance crop yield and sustainability.",
      technologies: ["Python", "AI", "Machine Learning", "Flask", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "IoT Based Voice Controlled Home Automation",
      description: "Arduino-based system enabling voice-controlled home appliance management, increasing accessibility.",
      technologies: ["Arduino", "Bluetooth", "Voice Recognition", "IoT"],
    },
    {
      title: "Fall Detection System",
      description: "Video-based fall detection using YOLO object detection for non-intrusive real-time monitoring.",
      technologies: ["Python", "YOLO", "Computer Vision", "Machine Learning"],
    },
    {
      title: "Vehicle Rental Management System",
      description: "Full-stack web application with responsive UI, user authentication, and MySQL database integration.",
      technologies: ["Node.js", "Express.js", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Appearance – Chrome Extension for Light/Dark Mode Toggle",
      description: "Chrome extension to toggle between light/dark modes using JavaScript and JSON manifest.",
      technologies: ["JavaScript", "HTML", "CSS", "JSON"],
    },
    {
      title: "Slitherit – Arcade Game",
      description: "Classic arcade-style game with JavaScript-based mechanics, responsive design, and deployment as a web and mobile app.",
      technologies: ["JavaScript", "HTML", "CSS", "localStorage"],
    },
    {
      title: "Water Quality Index Prediction Research",
      description: "ML-based project integrating environmental engineering to predict water quality using Random Forest and data visualization tools.",
      technologies: ["Python", "Google Looker Studio", "Random Forest", "Data Visualization"],
    },
  ];

  const experienceData = [
    {
      role: "Software Development Intern",
      company: "Valeo India - Brain Division",
      duration: "Jun-Jul 2024",
      location: "Chennai",
      details: [
        "Developed APN GT Data Analysis Dashboard for Bird Eye Vision.",
        "Applied SOLID Principles for scalable, maintainable code.",
        "Created a pipeline for processing GT raw data with MTN constraints.",
      ],
      dateRange: "Jun 2024 - Jul 2024"
    },
    {
      role: "Java Development Intern",
      company: "Codsoft India",
      duration: "Jul-Aug 2024",
      location: "Chennai",
      dateRange: "Jul 2024 - Aug 2024"
    },
    {
      role: "Student Ambassador",
      company: "Shiv Nadar University",
      duration: "Aug 2024 - Present",
      location: "Chennai",
      dateRange: "Aug 2024 - Present"
    },
    {
      role: "Core Committee Member (Software Domain)",
      company: "Robotics Club, SNU Chennai",
      duration: "Aug 2024 - Present",
      location: "Chennai",
      dateRange: "Aug 2024 - Present",
      details: [
        "Conducted Arduino Uno workshops and hackathon events.",
      ],
    },
  ];

  const skillsData = {
    ProgrammingLanguages: ["Python", "C", "MySQL", "JavaScript"],
    AIML: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Ensemble Models",
    ],
    Platforms: ["VS Code", "Jupyter", "Git", "Neptune.ai"],
    WebDevelopment: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Bootstrap",
    ],
    DataVisualization: ["Matplotlib", "Dash", "Streamlit", "Google Looker Studio"],
    DeepLearning: [
      "CNN",
      "Stable Diffusion",
      "Large Language Models",
      "Langflow",
    ],
  };

  const certifications = [
    "Hackfest 3rd Edition, PSG iTech and SAP",
    "Top performer in Machine Learning Trainings (Internshala)",
    "Top 1% in Cyber Security and privacy(NPTEL 12-week course)",
    "Machine Learning Operations (Google Cloud Skills Boost)",
    "Neural Networks and Deep Learning (Deeplearning.ai)",
    "GUVI – SWAI.AI Learnathon- RAG Model",
    "Winner at Envithon’24, Shiv Nadar University",
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">
              
              Passionate about leveraging AI and web technologies to create impactful solutions.
              Sure, here's a shortened version of the description:

I am a promising computer science student at Shiv Nadar University, specializing in IoT . With a strong academic record (CGPA 9.35), I have gained valuable industry experience through internship at Valeo India.

My technical skills span programming languages, AI/ML, deep learning, and web development. I'm proficient in Python, C, MySQL, React, Node.js, and more.

Beyond academics, I'm actively involved in the university community as a student ambassador and core committee member of the Robotics Club. I also enjoy a range of hobbies, including fashion sketching, painting, reading, and badminton.

Overall, I'm a driven and versatile computer science student, eager to explore future opportunities in the tech industry.
            </p>
            <p className="mt-4 text-md text-gray-600">Languages: Tamil, English, German (A1), Hindi (Basic).</p>
          </div>
        );
      case 'projects':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.keys(skillsData).map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">{category.replace(/([A-Z])/g, ' $1')}</h3>
                  <ul className="list-disc pl-6 text-lg text-gray-600">
                    {skillsData[category].map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'experience':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 h-full border-l-2 border-gray-300"></div>
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-[-18px] top-0 w-8 h-8 rounded-full bg-indigo-600"></div>

                  {/* <div className="absolute left-[-18px] top-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex justify-center items-center">
                    <span className="text-sm">{exp.dateRange}</span>
                  </div> */}
                  <div className="ml-8 pl-8">
                    <h3 className="text-xl font-semibold text-indigo-600">{exp.role}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.dateRange}</p>
                    {exp.details && (
                      <ul className="list-disc ml-6 mt-2 text-gray-600">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'certifications':
        return (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center">Certifications</h2>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-wide">Amoha V</h1>
            <p className="text-xl mt-2 text-indigo-200">Computer Science | AI & IoT Enthusiast</p>
          </div>
          <nav className="flex space-x-8 text-lg font-semibold">
            <a onClick={() => setActiveSection('about')} className="cursor-pointer hover:text-indigo-200">About</a>
            <a onClick={() => setActiveSection('projects')} className="cursor-pointer hover:text-indigo-200">Projects</a>
            <a onClick={() => setActiveSection('skills')} className="cursor-pointer hover:text-indigo-200">Skills</a>
            <a onClick={() => setActiveSection('experience')} className="cursor-pointer hover:text-indigo-200">Experience</a>
            <a onClick={() => setActiveSection('certifications')} className="cursor-pointer hover:text-indigo-200">Certifications</a>
          </nav>
          <div className="flex space-x-6 text-2xl">
            <a href="mailto:v.amoha@gmail.com" className="hover:text-indigo-200">
              <Mail />
            </a>
            <a href="https://www.linkedin.com/in/amoha-vivekananthan-2ab4332b3/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200">
              <Linkedin />
            </a>
            <a href="https://github.com/Amoha-V" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200">
              <Github />
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-8">
        {renderSection()}
      </main>

      <footer className="bg-indigo-600 text-white p-6 text-center">
        <p>© 2024 Amoha V. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
