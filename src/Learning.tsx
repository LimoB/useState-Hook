import { useState } from 'react'
import './App.css'

interface Fruits {
  id: number;
  name: string;
  color: string;
}

function App() {
  const [fruits, setFruits] = useState<Fruits[]>([
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" }
  ]);

  const [fruitName, setFruitName] = useState<string>("");
  const [fruitColor, setFruitColor] = useState<string>("");

  const removeFruit = (id: number) => {
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  const addFruit = () => {
    if (fruitName && fruitColor) {
      setFruits([
        ...fruits,
        {
          id: Date.now(),
          name: fruitName,
          color: fruitColor
        }
      ]);
      // Clear inputs after adding
      setFruitName("");
      setFruitColor("");
    }
  };

  return (
    <>
      <div>
        <h2>Favorites</h2>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit.id} style={{ margin: 8 }}>
              <span style={{ color: fruit.color.toLowerCase() }}>
                {fruit.name} ({fruit.color})
              </span>
              <button
                style={{ marginLeft: 12 }}
                onClick={() => removeFruit(fruit.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          placeholder='Fruit Name'
          value={fruitName}
          onChange={e => setFruitName(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />

        <input
          type="text"
          placeholder='Fruit Color'
          value={fruitColor}
          onChange={e => setFruitColor(e.target.value)}
          style={{ marginRight: 8, padding: 6 }}
        />

        <button onClick={addFruit}>Add Fruit</button>
      </div>
    </>
  );
}

export default App;
