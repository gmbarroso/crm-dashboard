# CRM Customer Dashboard

## Overview

This project is a Customer Relationship Management (CRM) dashboard built with React, Vite, and TypeScript. It demonstrates the ability to create frontend components, understand and implement API interactions, and build a responsive and interactive user interface.

## Features

- Display a list of customers
- Search functionality to filter customers by name
- Responsive design for various screen sizes
- Data fetching and caching with SWR
- Mock API for simulating server responses
- Unit tests for components and API functions

## Technologies Used

- React 18
- TypeScript 4.9
- Vite 4.3
- SWR 2.1 (for data fetching)
- CSS Modules (for styling)
- Jest 29 and React Testing Library 14 (for testing)

## Project Structure
```
src/
├── components/
│   ├── CustomerDashboard.tsx
│   ├── CustomerList.tsx
│   └── SearchBar.tsx
├── api/
│   └── mockApi.ts
├── types/
│   └── index.ts
├── styles/
│   ├── CustomerDashboard.module.css
│   ├── CustomerList.module.css
│   └── SearchBar.module.css
├── **tests**/
│   ├── CustomerDashboard.test.tsx
│   ├── CustomerList.test.tsx
│   ├── SearchBar.test.tsx
│   └── mockApi.test.ts
├── App.tsx
└── main.tsx
```


## Setup and Installation

1. Clone the repository:
git clone [https://github.com/gmbarroso/crm-dashboard.git](https://github.com/gmbarroso/crm-dashboard.git)

2. Install dependencies:
`npm install`

3. Start the development server:
`npm run dev`

4. Open your browser and visit `http://localhost:5173` to view the application.

## Running Tests

To run the unit tests:
`npm run test`

## Building for Production

To create a production build:
`npm run build`


The built files will be in the `dist` directory.

## Usage

1. Upon loading, the dashboard displays a list of customers fetched from the mock API.
2. Use the search bar at the top to filter customers by name. The search is performed as you type.
3. Each customer card displays the customer's name, email, company, status, and last contact date.
4. The list updates in real-time as you search, with loading states displayed during data fetching.

## API

The project uses a mock API (`src/api/mockApi.ts`) that simulates server responses. In a real-world scenario, this would be replaced with actual API calls.

- `fetchCustomers()`: Retrieves all customers
- `searchCustomers(query: string)`: Searches for customers whose names include the query string

## Component Details

- `CustomerDashboard`: The main component that orchestrates the dashboard functionality.
- `SearchBar`: Handles user input for searching customers.
- `CustomerList`: Renders the list of customers and manages loading/error states.

## Testing

The project includes unit tests for all components and the mock API. Tests are located in the `src/__tests__/` directory and can be run with `npm test`.

## Future Improvements

- Implement pagination for the customer list
- Add sorting functionality for the customer list
- Integrate with a real backend API
- Implement user authentication
- Add more detailed customer information and interactions
- Implement error boundaries for better error handling
- Add end-to-end tests using Cypress or Playwright

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/gmbarroso/crm-dashboard/issues) if you want to contribute.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## Contact

Guilherme Barroso - [@gmbarroso](https://www.linkedin.com/in/guilherme-melo-barroso-msc-48a99722/) - barroso.guilherme@gmail.com

Project Link: [https://github.com/gmbarroso/crm-dashboard](https://github.com/gmbarroso/crm-dashboard)

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [SWR Documentation](https://swr.vercel.app/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
