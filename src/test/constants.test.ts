import { describe, it, expect } from 'vitest';
import { PROJECTS, SKILLS, EXPERIENCE } from '../constants';

describe('PROJECTS', () => {
  it('is a non-empty array', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('each project has required fields', () => {
    for (const project of PROJECTS) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(Array.isArray(project.tech)).toBe(true);
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.link).toBeTruthy();
      expect(project.github).toBeTruthy();
      expect(project.image).toBeTruthy();
    }
  });
});

describe('SKILLS', () => {
  it('is a non-empty array', () => {
    expect(SKILLS.length).toBeGreaterThan(0);
  });

  it('each skill has a name, icon, and valid category', () => {
    const validCategories = new Set(['Frontend', 'Backend', 'Tools']);
    for (const skill of SKILLS) {
      expect(skill.name).toBeTruthy();
      expect(skill.icon).toBeTruthy();
      expect(validCategories.has(skill.category)).toBe(true);
    }
  });

  it('has skills in every category', () => {
    const categories = SKILLS.map((s) => s.category);
    expect(categories).toContain('Frontend');
    expect(categories).toContain('Backend');
    expect(categories).toContain('Tools');
  });
});

describe('EXPERIENCE', () => {
  it('is a non-empty array', () => {
    expect(EXPERIENCE.length).toBeGreaterThan(0);
  });

  it('each entry has required fields', () => {
    const validTypes = new Set(['Full-time', 'Freelance', 'Contract']);
    for (const exp of EXPERIENCE) {
      expect(exp.role).toBeTruthy();
      expect(exp.company).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(validTypes.has(exp.type)).toBe(true);
      expect(Array.isArray(exp.highlights)).toBe(true);
      expect(exp.highlights.length).toBeGreaterThan(0);
    }
  });
});
