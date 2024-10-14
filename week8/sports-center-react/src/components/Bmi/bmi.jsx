import { useState } from "react";
import "./bmi.css";

const BmiCalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [percentage, setPercentage] = useState(null);
    const [bmi, setBmi] = useState(null);
    const handleBmiCalculation = (heightValue, weightValue) => {
      if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
        setPercentage(null);
        return;
      }
  
      const bmiValue = weightValue / ((heightValue / 100) ** 2);
      let calculatedPercentage = null;
  
      if (bmiValue > 13.5 && bmiValue < 18.5) {
        calculatedPercentage = 7 + (bmiValue - 13.5) * 16 / 5;
      } else if (bmiValue > 25 && bmiValue < 30 || bmiValue >= 30 && bmiValue < 35 || bmiValue >= 35 && bmiValue < 40) {
        calculatedPercentage = 40 + (bmiValue - 24.5) * 16 / 5;
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        calculatedPercentage = 23 + (bmiValue - 18.5) * 16 / 7;
      }
      // Percentage sınırlandırma (minimum ve maksimum değerler arasında tutmak)
      if (calculatedPercentage > 6 && calculatedPercentage < 88) {
        setPercentage(calculatedPercentage);
      } else if (calculatedPercentage >= 88) {
        setPercentage(88); // Maksimum yüzde sınırı
      } else if (calculatedPercentage <= 6) {
        setPercentage(6); // Minimum yüzde sınırı
      }
      setBmi(bmiValue.toFixed(2));
    };
  
    const handleHeightChange = (e) => {
      const heightValue = e.target.value;
      setHeight(heightValue);
      handleBmiCalculation(heightValue, weight);
    };
  
    const handleWeightChange = (e) => {
      const weightValue = e.target.value;
      setWeight(weightValue);
      handleBmiCalculation(height, weightValue);
    };
  
    return (
      <section id="bmi" className="bmi container content">
        <div className="bmi-content">
          <h2>BMI Calculator</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            rerum recusandae sapiente exercitationem! Accusantium quia facilis
            dolorem aperiam beatae dignissimos.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni autem quae aliquid rerum culpa sed omnis nam alias sapiente.</p>
          <div className="calculator">
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Your Height"
              value={height}
              onChange={handleHeightChange} // Height değiştiğinde hesaplama yapma
            />
            <label htmlFor="height"> cm </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Your Weight"
              value={weight}
              onChange={handleWeightChange} // Weight değiştiğinde hesaplama yapma
            />
            <label htmlFor="weight"> kg </label>
          </div>
        </div>
        <div className="bmi-index">
          <h3>Your BMI: {bmi}</h3>
          <img src="photos/bmi-index.jpg" alt="BMI Index" className="bmi-img" />
          {percentage !== null && (
            <div className="arrow-up" style={{ left: `${percentage}%` }}></div>
          )}
        </div>
      </section>
    );
  };
  
  export default BmiCalculator;