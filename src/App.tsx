import { Approach } from './components/Approach';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Work } from './components/Work';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#work" className="skip-link">Skip to work</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Highlights />
        <Work />
        <Approach />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
