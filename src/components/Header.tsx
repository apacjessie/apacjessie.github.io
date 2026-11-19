import type { Theme } from '../hooks/useTheme';
import { profile } from '../data/content';

type Props = { theme: Theme; onToggleTheme: () => void };

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="header container">
      <a href="#top" className="logo" aria-label={`${profile.name}, back to top`}>
        jessie<span className="logo__dot">.</span>apac
      </a>
      <nav aria-label="Main" className="nav">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
        <a href={profile.resume} className="pill pill--outline" target="_blank" rel="noreferrer">
          Resume
        </a>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
      </nav>
    </header>
  );
}
