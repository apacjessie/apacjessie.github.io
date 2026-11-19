import { useEffect, useRef, useState } from 'react';
import type { Theme } from '../hooks/useTheme';
import { profile } from '../data/content';

type Props = { theme: Theme; onToggleTheme: () => void };

const links = [
  { href: '#work', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

// Must match the @media breakpoint for the mobile menu in global.css.
const DESKTOP_QUERY = '(min-width: 761px)';

export function Header({ theme, onToggleTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: Escape closes it, and growing to desktop width resets it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header container">
      <a href="#top" className="logo" aria-label={`${profile.name}, back to top`} onClick={closeMenu}>
        jessie<span className="logo__dot">.</span>apac
      </a>
      <nav id="main-nav" aria-label="Main" className={menuOpen ? 'nav nav--open' : 'nav'}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href={profile.resume} className="pill pill--outline" target="_blank" rel="noreferrer" onClick={closeMenu}>
          Resume
        </a>
      </nav>
      <div className="header__actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
        </button>
        <button
          ref={menuButtonRef}
          type="button"
          className={menuOpen ? 'menu-toggle menu-toggle--open' : 'menu-toggle'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="menu-toggle__bar" aria-hidden="true" />
          <span className="menu-toggle__bar" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
