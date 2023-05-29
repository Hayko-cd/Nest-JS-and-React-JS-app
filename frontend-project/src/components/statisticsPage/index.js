import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExperimentData } from "store/experiments/selector";
import { experimentsData } from "store/experiments/actions";
import { ExperimentBlock, ExperimentButton, ExperimentTitle, FullWrapper } from "components/statisticsPage/styled";

export const StatisticsPage = () => {
  const dispatch = useDispatch();
  const selectExperiments = useSelector(selectExperimentData);

  function getRandomColor() {
    const colors = ["#FF0000", "#00FF00", "#0000FF"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const randomColor = getRandomColor();

  function getRandomNumber() {
    const numbers = ["5", "10", "20", "50"];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }

  const randomNumber = getRandomNumber();

  let sessionSavedColor = sessionStorage.getItem("randomColor");
  let sessionSavedNumber = sessionStorage.getItem("randomNumber");

  if (!sessionSavedColor && !sessionSavedNumber) {
    sessionStorage.setItem("randomColor", randomColor);
    sessionStorage.setItem("randomNumber", randomNumber);
  }

  useEffect(() => {
    dispatch(experimentsData(sessionSavedColor && sessionSavedNumber ? {
      sessionSavedColor,
      sessionSavedNumber
    } : { randomColor, randomNumber }));
  }, [dispatch]);

  return (
    <FullWrapper>
      <ExperimentTitle>Experiments</ExperimentTitle>
      <ExperimentBlock>
        <ExperimentTitle>Key: {selectExperiments.button_key}</ExperimentTitle>
        <ExperimentTitle>Key: {selectExperiments.price_key}</ExperimentTitle>
        <ExperimentButton color={selectExperiments?.options?.button_color?.value}>
          Value: {selectExperiments?.options?.price?.value}
          <br />
          Percentage: {selectExperiments?.options?.price?.percentage} %
        </ExperimentButton>
      </ExperimentBlock>
    </FullWrapper>
  );
};
