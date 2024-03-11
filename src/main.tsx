import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';

interface Expirience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  expirience: Expirience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://placehold.co/400x400?text=BM',
  name: 'Mirosław',
  lastName: 'Malik',
  position: 'Developer wona be',
  expirience: [
    { year: 2024, description: 'Lorem ipsum' },
    { year: 2020, description: 'dolor sit amet' },
    { year: 2018, description: 'consectetur adipisicing elit' },
  ],
  education: ['lorem ipsum', 'dolor sit amet', 'consectetur adipisicing elit'],
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main className="cv-main">
      <header className="cv-header">
        <h1>
          CV {cvData.name} {cvData.lastName}
        </h1>
      </header>
      <aside className="cv-personal">
        <h2>Personal data</h2>
        <img
          className="cv-photo"
          src={cvData.photo}
          alt={`${cvData.name} ${cvData.lastName} profile photo`}
        />
        <p>
          {cvData.name} {cvData.lastName}
        </p>
        <small>{cvData.position}</small>
      </aside>
      <section className="cv-details">
        <h2>Expirience</h2>
        <ul>
          {cvData.expirience.map((expirience) => (
            <li key={expirience.year}>
              <strong>{expirience.year}</strong> - {expirience.description}
            </li>
          ))}
        </ul>

        <h2>Education</h2>
        <ul>
          {cvData.education.map((education, index) => (
            <li key={index}>{education}</li>
          ))}
        </ul>
      </section>
    </main>
  </React.StrictMode>
);
