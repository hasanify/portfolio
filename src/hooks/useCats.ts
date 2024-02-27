import cat_0 from "@/assets/images/cats/0.gif";
import cat_1 from "@/assets/images/cats/1.gif";
import cat_2 from "@/assets/images/cats/2.gif";
import cat_3 from "@/assets/images/cats/3.gif";
import cat_4 from "@/assets/images/cats/4.gif";
import cat_5 from "@/assets/images/cats/5.gif";
import cat_6 from "@/assets/images/cats/6.gif";
import cat_7 from "@/assets/images/cats/7.gif";

import { useEffect, useState } from "react";

const cats = [cat_0, cat_1, cat_2, cat_3, cat_4, cat_5, cat_6, cat_7];
const useCats = () => {
  const [cat, setCat] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cats.length);
    setCat(cats[randomIndex]);
  }, []);

  return {
    cat,
  };
};

export default useCats;
