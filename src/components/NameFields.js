const NameFields = ({ guestNum }) => {
  const onAnyInput = (e) => {
    const inputEl = e.target;
    const inputString = inputEl.value.trim();

    if (inputString !== '') {
      inputEl.classList.add('rsvpForm__inputText--active');
    } else {
      inputEl.classList.remove('rsvpForm__inputText--active')
    };
  };

  return (
    <div className="rsvpForm__split">
      <div className="rsvpForm__field">
        <input
          type="text"
          id={`firstName-${guestNum}`}
          name={`firstName-${guestNum}`}
          className="rsvpForm__inputText"
          onChange={onAnyInput}
          required
        />
        <label htmlFor={`firstName-${guestNum}`} className="rsvpForm__label">
          <span>First Name</span>
        </label>
      </div>

      <div className="rsvpForm__field">
        <input
          type="text"
          id={`lastName-${guestNum}`}
          name={`lastName-${guestNum}`}
          className="rsvpForm__inputText"
          onChange={onAnyInput}
          required
        />
        <label htmlFor={`lastName-${guestNum}`} className="rsvpForm__label">
          <span>Last Name</span>
        </label>
      </div>
    </div>
  );
};

NameFields.defaultProps = {
  guestNum: '0'
};

export default NameFields;