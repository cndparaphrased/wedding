import Counter from "./Counter";
import NameFields from "./NameFields";
import EmailField from "./EmailField";
import checkmark from "../images/icons/check.png";
import rsvpIcon from "../images/icons/rsvp.png";

const Rsvp = () => {
  const onRsvpChange = (e) => {
    const submitBtn = document.querySelector('.rsvpForm__submit');
    const declineBox = document.querySelector('#rsvpDeclined');
    const acceptBox = document.querySelector('#rsvpAccepted');

    submitBtn.removeAttribute('disabled');

    if (e.target.value === 'declines') {
      declineBox.style.display = 'block';
      declineBox.removeAttribute('disabled');
      acceptBox.style.display = 'none';
      acceptBox.setAttribute('disabled', 'true');
    } else if (e.target.value === 'accepts') {
      declineBox.style.display = 'none';
      declineBox.setAttribute('disabled', 'true');
      acceptBox.style.display = 'block';
      acceptBox.removeAttribute('disabled');
    };
  };

  const onAnyInput = (e) => {
    const inputEl = e.target;
    const inputString = inputEl.value.trim();

    if (inputString !== '') {
      inputEl.classList.add('rsvpForm__inputText--active');
    } else {
      inputEl.classList.remove('rsvpForm__inputText--active')
    };
  };

  const kidCheck = (e) => {
    const age = e.target.parentNode.nextElementSibling;

    if (e.target.checked) {
      age.style.display = 'block';
    } else {
      age.style.display = 'none';
    };
  };

  return (
    <div className="dropdown">
      <h4 className="dropdown__heading">
        <img src={rsvpIcon} className="dropdown__icon" alt="" aria-hidden="true" />
        <span>Can you make it?</span>
      </h4>

      <form className="rsvpForm">
        {/* ACCEPTS */}
        <div>
          <div className="rsvpForm__split">
            <label htmlFor="accepts">Yes: ready to eat, drink, and party!</label>
            <input type="radio" id="accepts" name="rsvp" value="accepts" onChange={onRsvpChange} />
          </div>

          <fieldset id="rsvpAccepted" className="rsvpForm__container">
            <Counter />

            <EmailField />

            <div className="rsvpForm__field--top rsvpForm__field--topMargin">
              <textarea 
                id="message" 
                name="message" 
                className="rsvpForm__inputText rsvpForm__textarea" 
                onChange={onAnyInput}>
              </textarea>
              <label htmlFor="message" className="rsvpForm__label">
                <span>Any dietary considerations or allergies?</span>
              </label>
            </div>
          </fieldset>
        </div>

        {/* DECLINES */}
        <div>
          <div className="rsvpForm__split">
            <label htmlFor="declines">No: will be celebrating from afar.</label>
            <input type="radio" id="declines" name="rsvp" value="declines" onChange={onRsvpChange} />
          </div>

          <fieldset id="rsvpDeclined" className="rsvpForm__container">
            <NameFields />

            <EmailField />
          </fieldset>
        </div>

        <button type="submit" className="rsvpForm__submit" disabled>
          <img src={checkmark} alt="" aria-hidden="true" />
          Submit
        </button>
      </form>

      {/* <div className="dropdown__box">
        <h4 className="dropdown__heading">
          <img src={busIcon} className="dropdown__icon" alt="" aria-hidden="true" />
          <span>Thank you for responding!</span>
          <span>We're sorry you can't make it! Please let us know if your schedule opens up!</span>
        </h4>

        <p className="dropdown__paragraph">If you have any questions or concerns, just contact us! cindyandjarek@gmail.com</p>
      </div> */}
    </div>
  );
};

export default Rsvp;