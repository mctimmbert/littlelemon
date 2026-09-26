import { useState } from "react";
import Button from "./Button";

type Reservation = {
  date: string;
  guests: string;
  time: string;
  occasion: string;
  diet: string;
};

function Reservations() {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [diet, setDiet] = useState("");
  const [error, setError] = useState("");
  const [reservation, setReservation] = useState<Reservation | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!date || !guests || !time) {
      setError("Please select a date, party size, and time.");
      return;
    }

    if (guests === "7+") {
      setError("For parties of 7 or more, please contact the restaurant directly.");
      return;
    }

    setError("");

    const newReservation: Reservation = {
      date,
      guests,
      time,
      occasion,
      diet,
    };

    setReservation(newReservation);
  }

  return (
    <div className="container">
      <div className="reservations-wrapper">
        <h1>Reserve a Table</h1>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="res-pickers">
            <div className="form-field">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={today}
              />
            </div>
            <div className="form-field">
              <label htmlFor="guests">Party size:</label>

              <select
                id="guests"
                name="guests"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);

                  if (e.target.value === "7+") {
                    setError("For parties of 7 or more, please contact the restaurant directly.");
                  } else {
                    setError("");
                  }
                }}
                required>
                <option value="">Select party size</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7+">7+</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="time">Time:</label>

              <select
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required>
                <option value="">Select a time</option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="occasion">Is this a special occasion?</label>
            <input
              className="input-box"
              id="occasion"
              name="occasion"
              placeholder="What's the occasion?"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="diet">Dietary Restrictions:</label>
            <textarea
              id="diet"
              name="diet"
              placeholder="Please list any allergies or dietary restrictions"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
            />
          </div>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <Button type="submit">Submit</Button>
        </form>
        {reservation && (
          <div>
            <p className="form-success" role="status">
              Reservation confirmed!
            </p>
            <h2>Reservation Details</h2>
            <p>Date: {reservation.date}</p>
            <p>Guests: {reservation.guests}</p>
            <p>Time: {reservation.time}</p>
            <p>Occasion: {reservation.occasion}</p>
            <p>Dietary restrictions: {reservation.diet}</p>
            <p>We are looking forward to serving you!</p>
            <p>Please contact us to make any changes.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reservations;
