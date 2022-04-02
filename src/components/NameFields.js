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
          id="firstName"
          name="firstName"
          className="rsvpForm__inputText"
          onChange={onAnyInput}
          required
        />
        <label htmlFor="firstName" className="rsvpForm__label">
          <span>First Name</span>
        </label>
      </div>

      <div className="rsvpForm__field">
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="rsvpForm__inputText"
          onChange={onAnyInput}
          required
        />
        <label htmlFor="lastName" className="rsvpForm__label">
          <span>Last Name</span>
        </label>
      </div>
    </div>
  );
};

export default NameFields;