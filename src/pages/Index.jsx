import { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, GraduationCap, Code, Award, MapPin, Mail, Linkedin, Github } from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#F7F7F7] text-[#333333]'}`}>
      <header className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#FF6B6B]">Kristian Ruiz Kyvik</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-[#4ECDC4] transition-colors">
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-12">
        <section className="mb-20 text-center">
          <img src="https://media.licdn.com/dms/image/C4E03AQHKxMzPvZWbcw/profile-displayphoto-shrink_800_800/0/1516830788090?e=1687392000&v=beta&t=Xt-Yx4-4_9VKmhZZJGZXGxZZZZZZZZZZZZZZZZZZZZZ" alt="Kristian Ruiz Kyvik" className="mx-auto rounded-full w-48 h-48 object-cover mb-6" />
          <h2 className="text-4xl font-bold mb-4">Kristian Ruiz Kyvik</h2>
          <p className="text-xl mb-6">Senior Software Engineer | Full Stack Developer | Tech Enthusiast</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:kristian.ruizkyvik@example.com" className="text-[#FF6B6B] hover:text-[#4ECDC4]">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/kristianruizkyvik/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:text-[#4ECDC4]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/kristianruizkyvik" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:text-[#4ECDC4]">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2 text-[#FF6B6B]" /> Work Experience
          </h3>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">Senior Software Engineer</h4>
              <p className="text-[#4ECDC4] mb-2">Oda · Full-time</p>
              <p className="text-sm text-gray-600 mb-2">Jan 2022 - Present · 1 yr 4 mos</p>
              <p className="text-sm text-gray-600 mb-2"><MapPin className="inline-block mr-1" /> Oslo, Norway</p>
              <p>Working on improving the online grocery shopping experience for customers in Norway, Finland, and Germany.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">Software Engineer</h4>
              <p className="text-[#4ECDC4] mb-2">Oda · Full-time</p>
              <p className="text-sm text-gray-600 mb-2">Aug 2019 - Jan 2022 · 2 yrs 6 mos</p>
              <p className="text-sm text-gray-600 mb-2"><MapPin className="inline-block mr-1" /> Oslo, Norway</p>
              <p>Contributed to the development of Oda's e-commerce platform and internal tools.</p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-[#FF6B6B]" /> Education
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">University of Oslo</h4>
            <p className="text-[#4ECDC4] mb-2">Master's degree, Informatics: Programming and Networks</p>
            <p className="text-sm text-gray-600">2017 - 2019</p>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Code className="mr-2 text-[#FF6B6B]" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'GraphQL', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'].map((skill) => (
              <span key={skill} className="bg-[#4ECDC4] text-white px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-[#FF6B6B]" /> Certifications
          </h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-xl font-semibold mb-2">AWS Certified Developer - Associate</h4>
            <p className="text-[#4ECDC4] mb-2">Amazon Web Services (AWS)</p>
            <p className="text-sm text-gray-600">Issued Jun 2021 · Expires Jun 2024</p>
          </div>
        </section>

        {showEasterEgg && (
          <section className="mb-20 text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#FFD93D]">🎉 You found the Easter Egg! 🎉</h3>
            <p className="text-lg mb-4">Congratulations on discovering the Konami Code easter egg!</p>
            <p className="text-md">As a reward, here's a fun fact about Kristian:</p>
            <p className="text-lg font-semibold mt-2">He once coded for 24 hours straight to win a hackathon!</p>
          </section>
        )}
      </main>

      <footer className={`py-6 text-center ${isDarkMode ? 'bg-gray-800' : 'bg-[#FF6B6B] text-white'}`}>
        <p>&copy; 2023 Kristian Ruiz Kyvik. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
