import React from "react";

function App() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen font-sans">
      {/* Header / Home */}
      <header className="bg-darkgreen text-offwhite py-12 shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Elif Özün</h1>
          <p className="text-xl mb-6 font-medium">Computer Engineering Graduate</p>
          <div className="flex flex-wrap justify-center gap-5 text-lg">
            <a href="mailto:elifozun15@gmail.com" className="underline hover:text-beige transition">elifozun15@gmail.com</a>
            <a href="https://www.linkedin.com/in/elif-ozun-9b3259227/" className="underline hover:text-beige transition">LinkedIn</a>
            <a href="https://github.com/1sancaktar15" className="underline hover:text-beige transition">GitHub</a>
            <span className="font-light">Kayseri, Turkey</span>
            <span className="font-light">+90 531 612 23 88</span>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-10 items-center py-10">
        {/* About Me */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">About Me</h2>
          <p className="text-gray-800 text-base leading-relaxed">
            Highly motivated and detail-oriented Computer Engineering graduate with hands-on experience in full-stack development, data science, and hardware-software integration. Adept at building scalable API-driven applications, developing end-to-end data pipelines, and leveraging modern technologies such as FastAPI, Kafka, PySpark, and Docker. Eager to contribute technical expertise and a passion for innovation to a dynamic team, while continuously expanding my knowledge in big data, cloud computing, and software engineering.
          </p>
        </section>

        {/* Projects */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Projects</h2>
          <div className="space-y-6">
            {/* RoboFriends Project */}
            <div className="bg-beige rounded-lg p-4 shadow-md flex flex-col gap-2">
              <h3 className="font-bold text-lg">RoboFriends (React App)</h3>
              <p>Built an interactive React-based web app with real-time data rendering.</p>
              <div className="flex gap-4 mt-1">
                <a href="https://github.com/1sancaktar15/frontend-project-robofriends"
                  className="underline text-darkgreen font-medium hover:text-forest transition"
                  target="_blank" rel="noopener noreferrer"
                >GitHub Repository</a>
                <a href="https://1sancaktar15.github.io/frontend-project-robofriends/"
                  className="underline text-darkgreen font-medium hover:text-forest transition"
                  target="_blank" rel="noopener noreferrer"
                >Live Demo</a>
              </div>
            </div>
            {/* Big Data Project */}
            <div className="bg-beige rounded-lg p-4 shadow-md flex flex-col gap-2">
              <h3 className="font-bold text-lg">Big Data Project</h3>
              <p>
                Real-time data generation, streaming, processing, and analytics using FastAPI, Kafka, Airflow, PySpark, and Docker. All components work together on Docker Compose for end-to-end big data pipeline and analytics.
              </p>
              <div className="flex gap-4 mt-1">
                <a href="https://github.com/1sancaktar15/bigdata-project"
                  className="underline text-darkgreen font-medium hover:text-forest transition"
                  target="_blank" rel="noopener noreferrer"
                >GitHub Repository</a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Experience</h2>
          <div className="space-y-6">
            {/* T5 Systems */}
            <div>
              <h3 className="font-bold">T5 Systems | Full Stack Development Intern</h3>
              <span className="italic text-sm">Jul 2023 - Sep 2023</span>
              <ul className="list-disc ml-6 text-gray-800 text-base">
                <li>Participated in the design and development of a Fitness Management System using Angular and .NET.</li>
                <li>Implemented RESTful APIs, real-time data visualization, CRUD operations, and optimized database queries.</li>
                <li>Managed version control and agile workflows using GitHub.</li>
              </ul>
            </div>
            {/* TUBITAK */}
            <div>
              <h3 className="font-bold">TUBITAK | Data Science Research Intern</h3>
              <span className="italic text-sm">Mar 2024 - Apr 2024</span>
              <ul className="list-disc ml-6 text-gray-800 text-base">
                <li>Spearheaded Python-driven data analysis and visualization for scientific research.</li>
                <li>Developed automated data processing scripts and prepared datasets for machine learning.</li>
              </ul>
            </div>
            {/* OPTOMO */}
            <div>
              <h3 className="font-bold">OPTOMO Medical Technologies | Electronics & Software Integration Intern</h3>
              <span className="italic text-sm">Jul 2024 - Aug 2024</span>
              <ul className="list-disc ml-6 text-gray-800 text-base">
                <li>Developed Arduino-based environmental data collection systems.</li>
                <li>Integrated C# with Arduino and implemented real-time sensor data visualization using .NET/WinForms.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Technical Blog & Internship Diaries</h2>
          <p className="text-gray-800 mb-4">
            I regularly share what I learn, problems I solve, and my internship experiences on my Medium account. You can read detailed technical articles and internship diaries below:
          </p>
          <ul className="list-disc ml-6 text-gray-800 text-base space-y-2">
            <li>
              <a
                href="https://medium.com/@ozunelif0/list/t5-systems-staj-gunlugu-7ae1c0c53c33"
                className="underline text-darkgreen font-medium hover:text-forest transition"
                target="_blank" rel="noopener noreferrer"
              >
                T5 Systems Internship Diary: API Development & Angular/.NET Workflows
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@ozunelif0/list/optomo-staj-gunlgu-7161b33e2656"
                className="underline text-darkgreen font-medium hover:text-forest transition"
                target="_blank" rel="noopener noreferrer"
              >
                OPTOMO Internship Diary: Arduino & .NET Integration
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="https://medium.com/@ozunelif0"
              className="inline-block px-4 py-2 bg-darkgreen text-offwhite rounded hover:bg-forest transition"
              target="_blank" rel="noopener noreferrer"
            >
              Visit My Medium for More Writings
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Skills</h2>
          <ul className="list-disc ml-6 text-gray-800 text-base">
            <li>Programming: Python, C#, JavaScript (React, Angular), C, Java</li>
            <li>Data Technologies: Apache Kafka, Apache Airflow, PySpark, MongoDB, PostgreSQL, MinIO</li>
            <li>Web API: FastAPI, RESTful API design</li>
            <li>Tools: Docker, Git, Jupyter Notebook</li>
            <li>Data Analysis: Pandas, Matplotlib</li>
            <li>Others: Arduino, .NET, WinForms</li>
          </ul>
        </section>

        {/* Certificates */}
        <section className="max-w-3xl mx-auto py-10 px-4">
          <h2 className="text-2xl font-semibold text-darkgreen mb-3">Certificates</h2>
          <div className="space-y-5">
            {/* English Proficiency */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar/images/english.webp"
                alt="English Proficiency Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/certificate_english.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  English (Upper Intermediate and Advanced)
                </a>
                <div className="text-charcoal text-sm mt-1">
                  English Express Language School, 2025
                </div>
              </div>
            </div>
            {/* Feature Engineering */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar//images/miuul.jpg"
                alt="Feature Engineering Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/feature_engineering.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  Feature Engineering
                </a>
                <div className="text-charcoal text-sm mt-1">
                  Data science and ML feature engineering certificate by Miuul Academy.
                </div>
              </div>
            </div>
            {/* Learn Coding with C# */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar//images/udemy.jpg"
                alt="Learn Coding with C# Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/learn_coding_with_csharp.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  Learn Coding with C# from Scratch
                </a>
                <div className="text-charcoal text-sm mt-1">
                  C# programming fundamentals certificate.
                </div>
              </div>
            </div>
            {/* Python Programming for Data Science */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar//images/miuul.jpg"
                alt="Python Programming for Data Science Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/python_programming_for_data_science.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  Python Programming for Data Science
                </a>
                <div className="text-charcoal text-sm mt-1">
                  Python for data science certificate by Miuul Academy.
                </div>
              </div>
            </div>
            {/* Git & GitHub */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar//images/btk.png"
                alt="Git & GitHub Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/versiyon_kontrolleri_git_github.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  Version Control (Git & GitHub)
                </a>
                <div className="text-charcoal text-sm mt-1">
                  Version Control Training with Git and GitHub.
                </div>
              </div>
            </div>
            {/* Stage 2 Certificate */}
            <div className="flex items-center gap-4 bg-beige rounded-lg p-4 shadow">
              <img
                src="/sertifikalar/images/aspire.jpg"
                alt="Stage 2 Certificate"
                className="w-16 h-16 object-cover rounded shadow"
              />
              <div>
                <a
                  href="/sertifikalar/elif_ozun_2023_2_stage_2_certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold underline text-darkgreen hover:text-forest transition"
                >
                  Stage 2 Certificate
                </a>
                <div className="text-charcoal text-sm mt-1">
                  Completion of stage 2 online leadership program by Harvard, Aspire Institute.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Education</h2>
          <ul className="list-disc ml-6 text-gray-800 text-base">
            <li>
              <b>Canakkale Onsekiz Mart University</b> – BSc in Computer Engineering<br />
              GPA: 2.65 | Graduated: June 2025
            </li>
            <li>
              <b>Yesilhisar Science High School</b> – Kayseri, Turkey<br />
              GPA: 94.06 | Graduated: June 2021
            </li>
          </ul>
        </section>

        {/* Resume/CV */}
        <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-darkgreen mb-3">Resume / CV</h2>
          <a
            href="/cv-elif-ozun.pdf"
            download
            className="inline-block px-4 py-2 bg-darkgreen text-offwhite rounded hover:bg-forest transition font-medium"
          >
            Download My CV (PDF)
          </a>
        </section>
      </main>

      {/* Contact */}
      <footer className="bg-darkgreen text-offwhite py-8 mt-12 text-center">
        <div>
          <p>Kayseri, Turkey | +90 531 612 23 88</p>
          <p>
            <a href="mailto:elifozun15@gmail.com" className="underline mr-4">elifozun15@gmail.com</a>
            <a href="https://www.linkedin.com/in/elif-ozun-9b3259227/" className="underline mr-4">LinkedIn</a>
            <a href="https://github.com/1sancaktar15" className="underline">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
