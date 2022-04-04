import { useForm } from "@formcarry/react";
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

  const { state, submit } = useForm({
    id: 'ujfksTdVDXe'
  });

  const clickedSubmit = (e) => {
    const subBtn = document.querySelector('.rsvpForm__submit');

    if (e.target === subBtn && state.submitting || state.submitted) {
      subBtn.setAttribute('disabled', 'true');
    }
  };

  if (state.submitted) {
    return <div className="dropdown">
      <div>
        <h4 className="dropdown__heading dropdown__heading--center">
          <img src={require('../images/icons/heart.png')} className="dropdown__icon" alt="" aria-hidden="true" />
          <span>Thanks for getting back to us!</span>
        </h4>
        <p className="dropdown__paragraph--line">If you have questions or anything changes, just let us know: <a href="mailto:cindyandjarek@gmail.com" className="dropdown__link">cindyandjarek@gmail.com</a>!</p>
      </div>
    </div>
  }

  return (
    <div className="dropdown">
      <h4 className="dropdown__heading">
        <img src={rsvpIcon} className="dropdown__icon" alt="" aria-hidden="true" />
        <span>Can you make it?</span>
      </h4>

      <form className="rsvpForm" onSubmit={submit} onClick={clickedSubmit}>
        {/* ACCEPTS */}
        <div>
          <div className="rsvpForm__split">
            <label htmlFor="accepts">Yes: ready to<span className="rsvpForm__hideMobile"> eat, drink, and</span> party!</label>
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
            <label htmlFor="declines">No: <span className="rsvpForm__hideMobile"> will be</span> celebrating from afar.</label>
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
    </div>
  );
};

export default Rsvp;