import axios from "axios";
import { API } from "configs/api";

export const ExperimentService = {
  experiments: (data) => axios.get(`${API.experiments}`, {
    headers: {
      "device-token": data.sessionSavedColor ? data.sessionSavedColor : data.randomColor,
      "price-token": data.sessionSavedNumber ? data.sessionSavedNumber : data.randomNumber,
    }
  })
};