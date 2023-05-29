import { StatisticsPage } from "components";
import { v4 as uuid } from 'uuid';
import { useEffect } from "react";

export const Home = () => {
  const uniqueId = uuid();

  useEffect(() => {
    if(sessionStorage.getItem("uniqueId")) {
      return;
    } else {
      sessionStorage.setItem("uniqueId", uniqueId)
    }
  }, [])

  return (
    <StatisticsPage />
  )
}