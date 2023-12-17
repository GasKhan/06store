'use client';

import styles from './createCategory.module.css';
import { useState } from 'react';
import { db } from '../../firebase/config';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState<string>('');
  const [characteristic, setCharacteristic] = useState<string>('');
  const [characteristics, setCharacteristics] = useState<string[]>([]);

  const addNewCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (categoryName === '') return;

    try {
      await setDoc(doc(db, 'categories', categoryName), {
        name: categoryName,
        characteristics: characteristics,
      });
      setCharacteristics([]);
    } catch (e: any) {
      console.error(e.message);
    }
  };
  const addNewCharacteristic = (e: React.MouseEvent) => {
    e.preventDefault();
    setCharacteristics((prevCharacteristics) => [
      ...prevCharacteristics,
      characteristic,
    ]);
    setCharacteristic('');
  };

  return (
    <div>
      <h2>New category</h2>
      <div className={styles.wrapper}>
        <div>
          <div>LLLLLLLLLLLLLLLLLLL</div>
          {characteristics.map((charact) => (
            <div key={charact}>{charact.toUpperCase()}</div>
          ))}
        </div>
        <form>
          <label htmlFor="categoryName">Category name</label>
          <input
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          {/* <label htmlFor="parentCategory">Choose parent category</label> */}
          {/* <select name="parentCategory" id="parentCategory"></select> */}
          <div>
            <label htmlFor="newCharacteristic">New characteristic</label>
            <input
              name="newCharacteristic"
              id="newCharacteristic"
              value={characteristic}
              onChange={(e) => {
                setCharacteristic(e.target.value);
              }}
            />
            <button onClick={addNewCharacteristic}>Add</button>
          </div>
          <button type="submit" onClick={addNewCategory}>
            Add new category
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
