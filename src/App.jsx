import { useState } from "react";
import divider from "./img/divider-desktop.svg";
import mobile from "./img/divider-mobile.svg";
import dice from "./img/icon-dice.svg";
import { useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [fetchToggle, setFetchToggle] = useState(false);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        let response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data?.slip);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdvice();
  }, [fetchToggle]);

  const handleDiceClick = () => {
    setFetchToggle((prev) => !prev);
  };

  return (
    <div className="bg-DarkBlue min-h-screen flex justify-center items-center">
      <div className="sm:w-1/3 w-4/5 bg-DarkGrayishBlue rounded-lg text-center p-4 sm:p-8">
        <h1 className="text-NeonGreen text-xs font-bold">Advice #{advice.id}</h1>
        <p className="quote font-extrabold text-LightCyan my-6">
          {advice.advice}
        </p>

        <div className="my-4 flex justify-center">
          <img className="hidden sm:block" src={divider} alt="" />
          <img className="block sm:hidden" src={mobile} alt="" />
        </div>

        <div id="dice" className="flex justify-center -mb-10 sm:-mb-14 mt-8">
          <button
            onClick={handleDiceClick}
            className="bg-NeonGreen border-none p-4 rounded-full hover:cursor-pointer hover:shadow-neon-green"
          >
            <img src={dice} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
