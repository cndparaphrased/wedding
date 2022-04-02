import { useState } from "react";
import NameFields from "./NameFields";
import plus from "../images/icons/plus-sign.svg";
import minus from "../images/icons/minus.svg";

const Counter = () => {
  const [guests, setGuests] = useState(Number(1));

  const handleDecrease = () => {
    if (guests > 1) {
      setGuests(Number(guests) - 1);
    }
  };

  const handleIncrease = () => {
    if (guests < 10) {
      setGuests(Number(guests) + 1);
    };
  };

  const handleCount = (e) => {
    const check = /^[1-9\b]+$/;

    if (e.target.value <= 10 && check.test(e.target.value)) {
      setGuests(e.target.value);
    } else {
      setGuests(Number(1));
    };
  };

  const kidCheck = (e) => {
    const age = e.target.parentNode.nextElementSibling;

    if (e.target.checked) {
      age.style.display = 'block';
      age.querySelector('.rsvpForm__kids--age').removeAttribute('disabled');
    } else {
      age.style.display = 'none';
      age.querySelector('.rsvpForm__kids--age').setAttribute('disabled', true);
    };
  };

  return(
    <>
      <div className="rsvpForm__split">
        <label htmlFor="numGuests">Number attending</label>
        <div className="rsvpForm__numBtns">
          <button type="button" className="numBtn" onClick={handleDecrease}>
            <img src={minus} className="numBtn__icon" alt="" aria-hidden="true" />
            <span className="srOnly">subtract guest</span>
          </button>
          <input
            type="text"
            id="numGuests"
            name="numGuests"
            className="numInput"
            maxLength={2}
            value={guests}
            onChange={handleCount}
            required />
          <button type="button" className="numBtn" onClick={handleIncrease}>
            <img src={plus} className="numBtn__icon" alt="" aria-hidden="true" />
            <span className="srOnly">add guest</span>
          </button>
        </div>
      </div>

      {Array.from({length: guests}).map((guest, index) => (
        <div key={index}>
          <NameFields guestNum={index} />
          
          {guests > 1 && index != 0 && (
            <div className={guests - 1 === index ? "rsvpForm__split--kidsLast" : "rsvpForm__split--kids"}>
              <div className="rsvpForm__kids">
                <div className="rsvpForm__field">
                  <label htmlFor={`kids-${index}`} className="rsvpForm__kids--check">Under 19?</label>
                  <input type="checkbox" id={`kids-${index}`} name={`kids-${index}`} onChange={kidCheck} />
                </div>

                <div className="rsvpForm__field kidsAge">
                  <label htmlFor={`age-${index}`}>Age</label>
                  <input type="text" id={`age-${index}`} name={`age-${index}`} className="rsvpForm__kids--age" maxLength={2} required disabled />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>

  );
};

export default Counter;