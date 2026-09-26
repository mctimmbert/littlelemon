import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reservations from "./Reservations";

describe("Reservations", () => {
  it("renders the reservation form", () => {
    render(<Reservations />);

    expect(screen.getByRole("heading", { name: "Reserve a Table" })).toBeInTheDocument();
  });
  it("marks required fields as required", () => {
    render(<Reservations />);

    expect(screen.getByLabelText("Date:")).toBeRequired();
    expect(screen.getByLabelText("Party size:")).toBeRequired();
    expect(screen.getByLabelText("Time:")).toBeRequired();
  });
  it("shows an error when the party size is 7 or more", () => {
    render(<Reservations />);

    const guestsSelect = screen.getByLabelText("Party size:");

    fireEvent.change(guestsSelect, { target: { value: "7+" } });

    expect(
      screen.getByText("For parties of 7 or more, please contact the restaurant directly."),
    ).toBeInTheDocument();
  });
  it("confirms a reservation when required fields are filled in", () => {
    render(<Reservations />);

    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: "2026-10-15" },
    });

    fireEvent.change(screen.getByLabelText("Party size:"), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText("Time:"), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText("Is this a special occasion?"), {
      target: { value: "Birthday" },
    });

    fireEvent.change(screen.getByLabelText("Dietary Restrictions:"), {
      target: { value: "Vegetarian" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText("Reservation confirmed!")).toBeInTheDocument();
    expect(screen.getByText("Date: 2026-10-15")).toBeInTheDocument();
    expect(screen.getByText("Guests: 2")).toBeInTheDocument();
    expect(screen.getByText("Time: 18:00")).toBeInTheDocument();
    expect(screen.getByText("Occasion: Birthday")).toBeInTheDocument();
    expect(screen.getByText("Dietary restrictions: Vegetarian")).toBeInTheDocument();
  });
  it("clears the 7+ error when a valid party size is selected", () => {
    render(<Reservations />);

    const guestsSelect = screen.getByLabelText("Party size:");

    fireEvent.change(guestsSelect, { target: { value: "7+" } });

    expect(
      screen.getByText("For parties of 7 or more, please contact the restaurant directly."),
    ).toBeInTheDocument();

    fireEvent.change(guestsSelect, { target: { value: "4" } });

    expect(
      screen.queryByText("For parties of 7 or more, please contact the restaurant directly."),
    ).not.toBeInTheDocument();
  });
  it("announces a successful reservation", () => {
    render(<Reservations />);

    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: "2026-10-15" },
    });

    fireEvent.change(screen.getByLabelText("Party size:"), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText("Time:"), {
      target: { value: "18:00" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByRole("status")).toHaveTextContent("Reservation confirmed!");
  });
  it("prevents selecting a date before today", () => {
    render(<Reservations />);

    const dateInput = screen.getByLabelText("Date:");

    const today = new Date().toISOString().split("T")[0];

    expect(dateInput).toHaveAttribute("min", today);
  });
  it("announces the party size error", () => {
    render(<Reservations />);

    fireEvent.change(screen.getByLabelText("Party size:"), {
      target: { value: "7+" },
    });

    expect(screen.getByRole("alert")).toHaveTextContent(
      "For parties of 7 or more, please contact the restaurant directly.",
    );
  });
  it("includes optional reservation details", () => {
    render(<Reservations />);

    fireEvent.change(screen.getByLabelText("Date:"), {
      target: { value: "2026-10-15" },
    });

    fireEvent.change(screen.getByLabelText("Party size:"), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText("Time:"), {
      target: { value: "18:00" },
    });

    fireEvent.change(screen.getByLabelText("Is this a special occasion?"), {
      target: { value: "Birthday" },
    });

    fireEvent.change(screen.getByLabelText("Dietary Restrictions:"), {
      target: { value: "Vegetarian" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(screen.getByText("Occasion: Birthday")).toBeInTheDocument();
    expect(screen.getByText("Dietary restrictions: Vegetarian")).toBeInTheDocument();
  });
});
