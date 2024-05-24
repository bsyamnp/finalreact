import React, { useState, useEffect } from 'react';
import { getPortfolioItems, addPortfolioItem, updatePortfolioItem, deletePortfolioItem } from './api'; // Путь к вашему файлу api.js

function Home() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Загрузка портфолио при загрузке компонента
  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const items = await getPortfolioItems();
        setPortfolioItems(items);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchPortfolioItems();
  }, []);

  // Функция для добавления нового элемента в портфолио
  const handleAddItem = async (newItemData) => {
    try {
      const newItem = await addPortfolioItem(newItemData);
      setPortfolioItems([...portfolioItems, newItem]);
    } catch (error) {
      console.error('Error adding portfolio item:', error);
    }
  };

  // Функция для обновления элемента портфолио
  const handleUpdateItem = async (itemId, updatedItemData) => {
    try {
      await updatePortfolioItem(itemId, updatedItemData);
      const updatedItems = portfolioItems.map(item => (item.id === itemId ? { ...item, ...updatedItemData } : item));
      setPortfolioItems(updatedItems);
    } catch (error) {
      console.error('Error updating portfolio item:', error);
    }
  };

  // Функция для удаления элемента портфолио
  const handleDeleteItem = async (itemId) => {
    try {
      await deletePortfolioItem(itemId);
      const updatedItems = portfolioItems.filter(item => item.id !== itemId);
      setPortfolioItems(updatedItems);
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
    }
  };

  return (
    <div>
      {/* Ваш JSX для отображения портфолио */}
    </div>
  );
}

export default Home;
