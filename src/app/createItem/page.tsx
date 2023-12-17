'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import CreateCategory from '../../components/createCategory/CreateCategory';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

type Category = {
  name: string;
  characteristics: string[];
};

function isCategory(category: any): category is Category {
  return category.name && category.characteristics;
}

// type GetKeysFromArray<T extends string[]> = { [k in T[number]]: '' };

// TODO Change color of not filled inputs red
const CreateItemPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [chosenCategory, setChosenCategory] = useState('');
  const [itemData, setItemData] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesCollection = await getDocs(collection(db, 'categories'));
      categoriesCollection.forEach((category) => {
        const newCategory = category.data();
        if (isCategory(newCategory))
          setCategories((prev) => [...prev, newCategory]);
      });
      console.log(categories);
    };

    try {
      getCategories();
    } catch (e: any) {
      console.log(e.message);
    }
  }, []);

  const handleChosenCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const newChosenCategory = categories.find(
      (category) => category.name === e.target.value
    );
    const newItem: Record<string, any> = { name: '' };
    newChosenCategory?.characteristics.forEach(
      (characteristic) => (newItem[characteristic] = '')
    );
    setItemData(newItem);
    setChosenCategory(e.target.value); // ???
  };

  const handleCreateItem = async (e: FormEvent) => {
    e.preventDefault();
    for (let dataField of Object.values(itemData!)) {
      if (dataField === '') return;
    }

    try {
      await setDoc(doc(db, chosenCategory, itemData?.name), itemData);
      setItemData({});
    } catch (e) {
      console.error(e);
    }
  };

  const inputs = [];
  if (itemData) {
    for (let key of Object.keys(itemData)) {
      inputs.push(
        <div key={key}>
          <input
            value={itemData[key]}
            placeholder={key}
            onChange={(e) => {
              setItemData((prev) => ({
                ...prev,
                [key]: e.target.value,
              }));
            }}
          />
        </div>
      );
    }
  }
  return (
    <div>
      <div>Create new Item</div>
      <div>
        <div>Choose category</div>
        <select onChange={handleChosenCategory}>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <div>
          <form onSubmit={handleCreateItem}>
            {inputs}
            <button type="submit">Create new item</button>
          </form>
        </div>
      </div>

      <CreateCategory />
    </div>
  );
};
export default CreateItemPage;
