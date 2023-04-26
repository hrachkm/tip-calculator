import React from "react";

export const CalculatorContext = React.createContext();

export function CalculatorProvider(props) {
  const [bill, setBill] = React.useState("");
  const [person, setPerson] = React.useState("");
  const [tipPercent, setTipPercent] = React.useState(0);
  const [tip, setTip] = React.useState(0.00);
  const [total, setTotal] = React.useState(0.00);
  const [isCustom, setIsCustom ] = React.useState(false);
  const [billTouched, setBillTouched] = React.useState(false);
  const [peopleTouched, setPeopleTouched] = React.useState(false);

  function calculateTip() {
    setTip(bill * tipPercent);
  }

  function calculateTotalTips(){
    setTotal(tip*person);
  }

  function cleanStates(){
    setBill("");
    setPerson("");
    setTipPercent(0);
    setTip(0.00);
    setTotal(0.00)
    setIsCustom(false);
    setBillTouched(false);
    setPeopleTouched(false);
  }

  React.useEffect(() => {
    if(bill > 0 && person > 0 && tipPercent > 0){
      calculateTip();
    }
  }, [bill, person, tipPercent]);

  React.useEffect(() => {
    calculateTotalTips()
  }, [tip]);

  return (
    <CalculatorContext.Provider
      value={{
        bill,
        person,
        tipPercent,
        tip,
        total,
        isCustom,
        billTouched,
        peopleTouched,
        setBill,
        setPerson,
        setTipPercent,
        setTip,
        setIsCustom,
        setTotal,
        cleanStates,
        setBillTouched,
        setPeopleTouched
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
}
