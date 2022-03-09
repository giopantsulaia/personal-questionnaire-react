import React from "react";
import { useState, useEffect } from "react";
export default function Applications() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=d9dffa06-f974-44bc-8deb-6bee052234c7"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (isSubscribed) {
          setData((prevSkills) => ({
            ...prevSkills,
            err,
          }));
        }
        return () => (isSubscribed = false);
      });
  }, []);
  console.log(data);
  return <div>Applications</div>;
}
