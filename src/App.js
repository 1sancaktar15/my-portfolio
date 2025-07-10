import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaDownload, FaMedium, FaGraduationCap, FaLaptopCode, FaCertificate, FaBriefcase, FaUser, FaBook } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e6f7ff] font-sans">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-darkgreen w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">EO</span>
            </div>
            <span className="text-xl font-bold text-darkgreen">Elif Özün</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-darkgreen transition flex items-center gap-1">
              <FaUser className="text-sm" /> About
            </a>
            <a href="#experience" className="text-gray-700 hover:text-darkgreen transition flex items-center gap-1">
              <FaBriefcase className="text-sm" /> Experience
            </a>
            <a href="#projects" className="text-gray-700 hover:text-darkgreen transition flex items-center gap-1">
              <FaLaptopCode className="text-sm" /> Projects
            </a>
            <a href="#education" className="text-gray-700 hover:text-darkgreen transition flex items-center gap-1">
              <FaGraduationCap className="text-sm" /> Education
            </a>
            <a href="#certificates" className="text-gray-700 hover:text-darkgreen transition flex items-center gap-1">
              <FaCertificate className="text-sm" /> Certificates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-16 md:py-24 bg-gradient-to-r from-darkgreen to-forest text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white/30 overflow-hidden">
            <img
              src="/foto.jpg"
              alt="Elif Özün"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">Elif Özün</h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-white/90">Computer Engineering Graduate</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg">
            <a href="mailto:elifozun15@gmail.com" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">
              <FaEnvelope /> elifozun15@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/elif-ozun-9b3259227/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/1sancaktar15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">
              <FaGithub /> GitHub
            </a>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FaMapMarkerAlt /> Kayseri, Turkey
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <FaPhone /> +90 531 612 23 88
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Me */}
          <section id="about" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaUser className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">About Me</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              Highly motivated and detail-oriented Computer Engineering graduate with hands-on experience in <span className="text-darkgreen font-medium">full-stack development</span>, <span className="text-darkgreen font-medium">data science</span>, and <span className="text-darkgreen font-medium">hardware-software integration</span>. Adept at building scalable <span className="text-darkgreen font-medium">API-driven applications</span>, developing <span className="text-darkgreen font-medium">end-to-end data pipelines</span>, and leveraging modern technologies such as <span className="text-darkgreen font-medium">FastAPI</span>, <span className="text-darkgreen font-medium">Kafka</span>, <span className="text-darkgreen font-medium">PySpark</span>, and <span className="text-darkgreen font-medium">Docker</span>. Eager to contribute technical expertise and a passion for innovation to a dynamic team.
            </p>
          </section>

         {/* Experience */}
          <section id="experience" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaBriefcase className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Experience</h2>
            </div>

            <div className="space-y-8">
              {/* T5 Systems */}
              <div className="flex items-start gap-4 border-l-4 border-darkgreen pl-4 py-2">
                <div className="min-w-[56px]">
                  <img
                    src="/company_images/t5.jpg"
                    alt="T5 Systems Logo"
                    className="w-14 h-14 object-contain rounded-lg shadow-md border border-[#e0e0e0] bg-white"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">T5 Systems | Full Stack Development Intern</h3>
                  <span className="text-gray-600 text-sm">Jul 2023 - Sep 2023</span>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Participated in the design and development of a Fitness Management System using <b>Angular</b> and <b>.NET</b></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Implemented <b>RESTful APIs</b>, real-time data visualization, CRUD operations, and optimized database queries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Managed version control and agile workflows using <b>GitHub</b></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* TUBITAK */}
              <div className="flex items-start gap-4 border-l-4 border-darkgreen pl-4 py-2">
                <div className="min-w-[56px]">
                  <img
                    src="/company_images/tübitak.png"
                    alt="TUBITAK Logo"
                    className="w-14 h-14 object-contain rounded-lg shadow-md border border-[#e0e0e0] bg-white"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">TUBITAK | Data Science Research Intern</h3>
                  <span className="text-gray-600 text-sm">Mar 2024 - Apr 2024</span>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Spearheaded <b>Python</b>-driven data analysis and visualization for scientific research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Developed automated data processing scripts and prepared datasets for <b>machine learning</b></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* OPTOMO */}
              <div className="flex items-start gap-4 border-l-4 border-darkgreen pl-4 py-2">
                <div className="min-w-[56px]">
                  <img
                    src="/company_images/optomo.jpg"
                    alt="OPTOMO Logo"
                    className="w-14 h-14 object-contain rounded-lg shadow-md border border-[#e0e0e0] bg-white"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">OPTOMO Medical Technologies | Electronics & Software Integration Intern</h3>
                  <span className="text-gray-600 text-sm">Jul 2024 - Aug 2024</span>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Developed <b>Arduino</b>-based environmental data collection systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-darkgreen mr-2">•</span>
                      <span>Integrated <b>C#</b> with Arduino and implemented real-time sensor data visualization using <b>.NET/WinForms</b></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaLaptopCode className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Projects</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* RoboFriends Project */}
              <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-xl p-5 shadow-md border border-green-100">
                <h3 className="font-bold text-lg text-darkgreen">RoboFriends (React App)</h3>
                <p className="text-gray-700 text-sm mt-2">Built an interactive React-based web app with real-time data rendering</p>
                <div className="flex gap-3 mt-4">
                  <a href="https://github.com/1sancaktar15/frontend-project-robofriends" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-darkgreen text-white py-2 rounded-lg hover:bg-forest transition">
                    GitHub
                  </a>
                  <a href="https://1sancaktar15.github.io/frontend-project-robofriends/" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-forest text-white py-2 rounded-lg hover:bg-darkgreen transition">
                    Live Demo
                  </a>
                </div>
              </div>
              
              {/* Big Data Project */}
              <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] rounded-xl p-5 shadow-md border border-green-100">
                <h3 className="font-bold text-lg text-darkgreen">Big Data Pipeline</h3>
                <p className="text-gray-700 text-sm mt-2">
                  Real-time data generation, streaming, processing, and analytics using FastAPI, Kafka, Airflow, PySpark, and Docker
                </p>
                <div className="mt-4">
                  <a href="https://github.com/1sancaktar15/bigdata-project" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-darkgreen text-white py-2 rounded-lg hover:bg-forest transition">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Blog */}
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaBook className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Technical Blog & Internship Diaries</h2>
            </div>
            
            <p className="text-gray-700 mb-5">
              I regularly share what I learn, problems I solve, and my internship experiences on my Medium account:
            </p>
            
            <div className="space-y-4">
              <a href="https://medium.com/@ozunelif0/list/t5-systems-staj-gunlugu-7ae1c0c53c33" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 hover:border-darkgreen transition">
                <h3 className="font-bold text-darkgreen">T5 Systems Internship Diary: API Development & Angular/.NET Workflows</h3>
                <p className="text-gray-600 text-sm mt-1">Detailed insights into full-stack development processes</p>
              </a>
              
              <a href="https://medium.com/@ozunelif0/list/optomo-staj-gunlgu-7161b33e2656" target="_blank" rel="noopener noreferrer" className="block p-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 hover:border-darkgreen transition">
                <h3 className="font-bold text-darkgreen">OPTOMO Internship Diary: Arduino & .NET Integration</h3>
                <p className="text-gray-600 text-sm mt-1">Exploring hardware-software integration challenges</p>
              </a>
            </div>
            
            <div className="mt-6">
              <a href="https://medium.com/@ozunelif0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-darkgreen to-forest text-white rounded-lg hover:opacity-90 transition">
                <FaMedium /> Visit My Medium for More Writings
              </a>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Resume Download */}
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaDownload className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Resume / CV</h2>
            </div>
            
            <div className="text-center">
              <a
                href="/cv-elif-ozun.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-darkgreen to-forest text-white rounded-lg hover:opacity-90 transition font-medium"
              >
                <FaDownload /> Download My CV (PDF)
              </a>
              <p className="text-gray-600 text-sm mt-3">Updated: June 2025</p>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaLaptopCode className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Technical Skills</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-darkgreen mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C#', 'JavaScript', 'C', 'Java'].map(skill => (
                    <span key={skill} className="bg-green-50 text-darkgreen px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-darkgreen mb-2">Data Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['Apache Kafka', 'Apache Airflow', 'PySpark', 'MongoDB', 'PostgreSQL', 'MinIO'].map(skill => (
                    <span key={skill} className="bg-green-50 text-darkgreen px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-darkgreen mb-2">Web & API</h3>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'RESTful API', 'React', 'Angular'].map(skill => (
                    <span key={skill} className="bg-green-50 text-darkgreen px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-darkgreen mb-2">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Git', 'Jupyter', 'Arduino', '.NET', 'WinForms'].map(skill => (
                    <span key={skill} className="bg-green-50 text-darkgreen px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certificates */}
          <section id="certificates" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaCertificate className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Certificates</h2>
            </div>
            <div className="space-y-4">
              {/* English Proficiency */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/english.webp"
                  alt="English Proficiency Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/certificate_english.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    English (Upper Intermediate and Advanced)
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    English Express Language School, 2025
                  </div>
                </div>
              </div>
              {/* Feature Engineering */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/miuul.jpg"
                  alt="Feature Engineering Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/feature_engineering.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    Feature Engineering
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    Data science and ML feature engineering certificate by Miuul Academy.
                  </div>
                </div>
              </div>
              {/* Learn Coding with C# */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/udemy.jpg"
                  alt="Learn Coding with C# Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/learn_coding_with_csharp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    Learn Coding with C# from Scratch
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    C# programming fundamentals certificate.
                  </div>
                </div>
              </div>
              {/* Python Programming for Data Science */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/miuul.jpg"
                  alt="Python Programming for Data Science Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/python_programming_for_data_science.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    Python Programming for Data Science
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    Python for data science certificate by Miuul Academy.
                  </div>
                </div>
              </div>
              {/* Git & GitHub */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/btk.png"
                  alt="Git & GitHub Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/versiyon_kontrolleri_git_github.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    Version Control (Git & GitHub)
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    Version Control Training with Git and GitHub.
                  </div>
                </div>
              </div>
              {/* Stage 2 Certificate */}
              <div className="flex items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-lg border border-gray-200 p-4 hover:border-darkgreen transition">
                <img
                  src="/sertifikalar/images/aspire.jpg"
                  alt="Stage 2 Certificate"
                  className="w-14 h-14 object-cover rounded shadow"
                />
                <div>
                  <a
                    href="/sertifikalar/elif_ozun_2023_2_stage_2_certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-darkgreen underline text-lg hover:text-forest transition"
                  >
                    Stage 2 Certificate
                  </a>
                  <div className="text-gray-700 text-sm mt-1">
                    Completion of stage 2 online leadership program by Harvard, Aspire Institute.
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Education */}
          <section id="education" className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-darkgreen p-2 rounded-lg">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-darkgreen">Education</h2>
            </div>
            
            <div className="space-y-5">
              <div className="border-l-4 border-darkgreen pl-4 py-1">
                <h3 className="font-bold text-lg">Canakkale Onsekiz Mart University</h3>
                <p className="text-gray-700">BSc in Computer Engineering</p>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>GPA: 2.65</span>
                  <span>Graduated: June 2025</span>
                </div>
              </div>
              
              <div className="border-l-4 border-darkgreen pl-4 py-1">
                <h3 className="font-bold text-lg">Yesilhisar Science High School</h3>
                <p className="text-gray-700">Kayseri, Turkey</p>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>GPA: 94.06</span>
                  <span>Graduated: June 2021</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-darkgreen to-forest text-white py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-beige" />
                <a href="mailto:elifozun15@gmail.com" className="hover:text-beige transition">elifozun15@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-beige" />
                <span>+90 531 612 23 88</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-beige" />
                <span>Kayseri, Turkey</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/elif-ozun-9b3259227/" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/1sancaktar15" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://medium.com/@ozunelif0" target="_blank" rel="noopener noreferrer" className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <FaMedium className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Elif Özün. All rights reserved.</p>
          <p className="mt-1">Designed and built with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;