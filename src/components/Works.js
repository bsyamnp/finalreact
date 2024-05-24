import React, { useState } from 'react';
import './Works.css';

function Works() {
  const [filter, setFilter] = useState('*');
  const [works, setWorks] = useState([
    { id: 1, category: 'web', title: 'Web', price: '$12.41', img: '/images/1.webp', url: 'https://github.com/bsyamnp/myprojectweb.git' },
    { id: 2, category: 'django', title: 'Funny Site', price: '$1.02', img: '/images/2.png', url: 'https://github.com/bsyamnp/django.git' },
    { id: 3, category: 'branding', title: 'Portfolio', price: '$3.69', img: '/images/3.webp', url: 'https://github.com/bsyamnp/portfolio.git' },
    { id: 4, category: 'design', title: 'Game', price: '$2.41', img: '/images/4.webp', url: 'https://github.com/bsyamnp/game.git' },
    { id: 5, category: 'photography', title: 'CRUD', price: '$4.99', img: '/images/5.jpg', url: 'https://github.com/bsyamnp/task8.git' },
    { id: 6, category: 'branding', title: 'Security', price: '$8.54', img: '/images/6.webp', url: 'https://github.com/bsyamnp/Master-of-security.git' },
  ]);

  const [newWork, setNewWork] = useState({ category: '', title: '', price: '', img: '', url: '' });

  const handleFilterClick = (category, e) => {
    e.preventDefault();
    setFilter(category);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWork(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddWork = () => {
    const id = works.length + 1;
    const newWorkWithId = { ...newWork, id };
    setWorks([...works, newWorkWithId]);
    setNewWork({ category: '', title: '', price: '', img: '', url: '' }); // Очистить форму после добавления
  };

  const filteredWorks = filter === '*' ? works : works.filter(work => work.category === filter);

  return (
    <div className="works-container">
      <div className="container">
        <h2>My Works</h2>
        <div className="row">
          <div className="col-md-12 text-center">
            <div id="filters" className="filters">
              <a href="#" className={filter === '*' ? 'active' : ''} onClick={(e) => handleFilterClick('*', e)}>All</a>
              <a href="#" className={filter === 'web' ? 'active' : ''} onClick={(e) => handleFilterClick('web', e)}>Web</a>
              <a href="#" className={filter === 'django' ? 'active' : ''} onClick={(e) => handleFilterClick('django', e)}>Django</a>
              <a href="#" className={filter === 'branding' ? 'active' : ''} onClick={(e) => handleFilterClick('branding', e)}>Branding</a>
              <a href="#" className={filter === 'design' ? 'active' : ''} onClick={(e) => handleFilterClick('design', e)}>Design</a>
              <a href="#" className={filter === 'photography' ? 'active' : ''} onClick={(e) => handleFilterClick('photography', e)}>Photography</a>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredWorks.map(work => (
            <div key={work.id} className={`col-sm-6 col-md-4 col-lg-4 mb-4`}>
              <div className="work-item">
                <div className="card">
                  <a href={work.url} className="item-wrap fancybox" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={work.img} alt={work.title} />
                    <div className="card-body">
                      <h5 className="card-title">{work.title}</h5>
                      <p className="card-text">{work.price}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Форма для добавления новой работы */}
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Work</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" className="form-control" value={newWork.category} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" className="form-control" value={newWork.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" className="form-control" value={newWork.price} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="img">Image URL:</label>
                <input type="text" id="img" name="img" className="form-control" value={newWork.img} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" className="form-control" value={newWork.url} onChange={handleChange} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setNewWork({ category: '', title: '', price: '', img: '', url: '' })}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddWork}>Add Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

