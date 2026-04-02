import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// motion/react renders as plain DOM elements in tests
vi.mock('motion/react', async () => {
  const actual = await vi.importActual<typeof import('react')>('react');
  const forward =
    (tag: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ children, ...rest }: any) => {
      // Strip motion-only props that would cause React warnings
      const { initial, animate, exit, whileInView, whileHover, transition, viewport, ...domProps } = rest;
      void initial; void animate; void exit; void whileInView; void whileHover; void transition; void viewport;
      return actual.createElement(tag, domProps, children);
    };

  return {
    motion: new Proxy({} as Record<string, ReturnType<typeof forward>>, {
      get: (_, tag: string) => forward(tag),
    }),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useReducedMotion: () => false,
  };
});

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the brand logo', () => {
    expect(screen.getAllByText('ERWIN.').length).toBeGreaterThan(0);
  });

  it('renders all nav links', () => {
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders the hero heading', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    expect(screen.getByLabelText(/name/i, { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i, { selector: 'input' })).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i, { selector: 'textarea' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });
});

describe('App — mobile menu', () => {
  it('toggles mobile menu open and closed', async () => {
    render(<App />);
    const user = userEvent.setup();

    const toggleBtn = screen.getByRole('button', { name: /open menu/i });
    expect(toggleBtn).toBeInTheDocument();

    await user.click(toggleBtn);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});

describe('App — contact form submission', () => {
  it('shows confirmation message after form is submitted', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i, { selector: 'input' }), 'Test User');
    await user.type(screen.getByLabelText(/email/i, { selector: 'input' }), 'test@example.com');
    await user.type(screen.getByLabelText(/message/i, { selector: 'textarea' }), 'Hello there!');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByText(/message received/i)).toBeInTheDocument();
    expect(screen.getByText(/i'll get back to you soon/i)).toBeInTheDocument();
  });

  it('hides the form after successful submission', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i, { selector: 'input' }), 'Test User');
    await user.type(screen.getByLabelText(/email/i, { selector: 'input' }), 'test@example.com');
    await user.type(screen.getByLabelText(/message/i, { selector: 'textarea' }), 'Hello!');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.queryByRole('button', { name: /send message/i })).not.toBeInTheDocument();
  });
});
