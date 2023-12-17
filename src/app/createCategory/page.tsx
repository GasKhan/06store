'use client';

import classes from './page.module.css';
import { useState } from 'react';
import { db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';

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
      <h2 className={classes.categoryTitle}>Create a new category</h2>
      <form className={classes.categoryForm}>
        <div className={classes.categoryName}>
          <label className={classes.categoryLabel} htmlFor="categoryName">
            Choose category name
          </label>
          <input
            className={classes.categoryInput}
            id="categoryName"
            name="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <div className={classes.categoryAddCategory}>
          <button
            className={`${classes.categoryButton} ${classes.addButton}`}
            type="submit"
            onClick={addNewCategory}
          >
            Add new category
          </button>
        </div>

        {/* <label htmlFor="parentCategory">Choose parent category</label> */}
        {/* <select name="parentCategory" id="parentCategory"></select> */}
        <div className={classes.characteristics}>
          <label className={classes.categoryLabel} htmlFor="newCharacteristic">
            New characteristic
          </label>
          <input
            className={classes.categoryInput}
            name="newCharacteristic"
            id="newCharacteristic"
            value={characteristic}
            onChange={(e) => {
              setCharacteristic(e.target.value);
            }}
          />
          <button
            className={`${classes.categoryButton} ${classes.caracteristicButton}`}
            onClick={addNewCharacteristic}
          >
            Add
          </button>
          <div>
            <div>
              {characteristics.map((charact) => (
                <div key={charact}>{charact.toUpperCase()}</div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
