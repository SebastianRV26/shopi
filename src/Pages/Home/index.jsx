// import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import NotFound from "../NotFound";

const CATEGORY_LIST = [
  "",
  "men-clothing",
  "jewelery",
  "electronics",
  "women-clothing",
];

const Home = () => {
  const { filteredItems, searchByTitle, setSearchByTitle, setCategory } =
    useContext(ShoppingCartContext);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      if (category.includes("women")) {
        setCategory(" women'");
      } else if (category.includes("men")) {
        setCategory(" men's");
      } else {
        setCategory(` ${category}`);
      }
    } else {
      setCategory("");
    }
  }, [category, setCategory]);

  const renderMessage = () => {
    if (category) {
      return CATEGORY_LIST.includes(category) ? <></> : <NotFound />;
    } else {
      return filteredItems.length === 0 ? (
        <p>{`We don't have anything :(`}</p>
      ) : (
        <></>
      );
    }
  };

  return (
    <>
      {CATEGORY_LIST.includes(category || "") && (
        <>
          <div className="flex items-center justify-center relative w-80 mb-2">
            <h1 className="font-medium text-xl">Products</h1>
          </div>

          <input
            type="text"
            placeholder="Search a product"
            className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            value={searchByTitle}
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
        </>
      )}

      <div className="grid gap-4 grid-cols-4  w-full max-w-screen-lg">
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      {renderMessage()}
      <ProductDetail />
    </>
  );
};

export default Home;
