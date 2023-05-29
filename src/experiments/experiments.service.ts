import { Injectable } from "@nestjs/common";

@Injectable()
export class ExperimentService {
  private experiments = [
    {
      id: 1,
      key: 'button_color',
      options: [
        { value: '#FF0000', percentage: 33.3, id: 1 },
        { value: '#00FF00', percentage: 33.3, id: 2 },
        { value: '#0000FF', percentage: 33.3, id: 3 },
      ],
    },
    {
      id: 2,
      key: 'price',
      options: [
        { value: '10', percentage: 75, id: 1 },
        { value: '20', percentage: 10, id: 2 },
        { value: '50', percentage: 5, id: 3 },
        { value: '5', percentage: 10, id: 4 },
      ],
    },
  ];

  getExperimentsByDeviceToken(deviceToken: string, priceToken: string) {
    const buttonColorExperiment = this.experiments.find(
      (exp) => exp.key === 'button_color'
    );

    const priceExperiment = this.experiments.find((exp) => exp.key === 'price');

    if (!buttonColorExperiment || !priceExperiment) {
      return null;
    }

    const buttonColorOption = buttonColorExperiment.options.find(
      (opt) => opt.value === deviceToken
    );

    const priceOption = priceExperiment.options.find(
      (opt) => opt.value === priceToken
    );

    if (!buttonColorOption || !priceOption) {
      return null;
    }

    return {
      button_key: buttonColorExperiment.key,
      price_key: priceExperiment.key,
      options: {
        button_color: buttonColorOption,
        price: priceOption,
      },
    };
  }
}
