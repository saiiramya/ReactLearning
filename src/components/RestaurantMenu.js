import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestraurantMenu from "../utils/useRestraurantMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestraurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul style={{ listStyle: "none" }}>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <h4>{item.card.info.name}</h4>
            <h5>
              {" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </h5>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
