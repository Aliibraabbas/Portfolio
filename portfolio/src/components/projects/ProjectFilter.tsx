// components/projects/ProjectFilter.tsx
import { useState } from 'react';

const ProjectFilter = ({ onFilter }: any) => {
  const [category, setCategory] = useState('');
  const [technology, setTechnology] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(category, technology);
  };

  return (
    <form onSubmit={handleSubmit} className="project-filter">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choisir une catégorie</option>
        <option value="Web">Web</option>
        <option value="Mobile">Mobile</option>
        <option value="UI/UX">UI/UX</option>
      </select>
      <input 
        type="text" 
        value={technology} 
        onChange={(e) => setTechnology(e.target.value)} 
        placeholder="Technologie"
      />
      <button type="submit">Filtrer</button>
    </form>
  );
};

export default ProjectFilter;
