import React, { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

function useRestraurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };
  return resInfo;
}

export default useRestraurantMenu;
