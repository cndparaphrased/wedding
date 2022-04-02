const EmailField = () => {
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
    <div className="rsvpForm__field">
      <input
        type="email"
        id="email"
        name="email"
        className="rsvpForm__inputText"
        onChange={onAnyInput}
        required
      />
      <label htmlFor="email" className="rsvpForm__label">
        <span>Email</span>
      </label>
    </div>
  );
};

export default EmailField;