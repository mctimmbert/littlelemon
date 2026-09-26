# Little Lemon Restaurant Reservation App

A responsive restaurant reservation application built with React and TypeScript as part of the Meta Front-End Developer Capstone Project.

## Features

- Responsive reservation form
- Date selection with past dates disabled
- Party-size selection for 1 to 6 guests
- Custom messaging for parties of 7 or more
- Reservation time selection based on API availability
- API-based reservation submission
- Optional special-occasion and dietary-restriction fields
- Reservation confirmation with submitted details
- Form validation and meaningful error messages
- Keyboard-accessible form controls
- Accessible error and success announcements

## Technologies

- React
- TypeScript
- Vite
- CSS
- Vitest
- React Testing Library

## Accessibility

The application uses semantic HTML elements, associated form labels, required form controls, visible keyboard focus states, and ARIA live-region roles for dynamic error and success messages.

## Testing

The reservation form includes unit tests covering:

- Form rendering
- Required fields
- Party-size validation
- Successful reservations
- Error clearing
- Reservation confirmation
- Date restrictions
- Accessible error announcements
- Optional reservation details

Run the tests with:

```bash
npm test
```

## Running Locally

Clone the repository and install the dependencies:

```bash
git clone https://github.com/mctimmbert/littlelemon.git
cd littlelemon
npm install
```

Start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
