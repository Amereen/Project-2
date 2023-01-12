import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { Collection } from "./CollectionContext";

const BagList = () => {
  const [luxuryBags, setLuxuryBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setMyCollection } = useContext(Collection);
  useEffect(() => {
    fetch("http://localhost:8000/bags")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((data) => {
        console.log(data);

        setLuxuryBags(data);
        setLoading(false);
      });
  }, []);
}
const addItem = (id, name, price, description, image) => {
  const item = {
    id,
    name,
    price,
    description,
    image,
  }


  setMyCollection((prvCollection) => {
    for (const myItem of prvCollection) {
      if (myItem.id === item.id) {
        return prvCollection;
      }
    }

    return [...prvCollection, item];
  });
};
if (loading) return <div>Loading...</div>;










  }