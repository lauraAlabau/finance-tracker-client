# Finance Tracker Client

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ffinance-tracker-cli.vercel.app)](https://finance-tracker-cli.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-96.4%25-blue)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-1.6%25-yellow)](#)

## Description

Finance Tracker Client is a web application for managing and tracking personal finances. Developed using React, TypeScript, and Vite, it offers an intuitive interface and robust features to efficiently manage your finances.

## Features

- Add and categorize transactions
- View balances and statistics
- Edit and delete transactions
- User authentication
- Responsive and user-friendly interface

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/lauraAlabau/finance-tracker-client.git
    cd finance-tracker-client
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Environment variables
Create a .env file in the root with the following content:
    ```bash
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    VITE_BACKEND_URL=http://localhost:4000
    ```
    
4. Start the application:
    ```bash
    yarn dev
    ```

## Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn lint`: Runs ESLint to analyze the code.
- `yarn preview`: Previews the production build.

## Configuration

Make sure to configure the necessary configuration files:
- `tsconfig.json` – TypeScript configuration
- `vite.config.ts` – Vite bundler setup
- `tailwind.config.js` – Tailwind CSS setup
- `.env` – Environment variables for auth and backend

## Project Structure
```bash
finance-tracker-client/
├── public/                 
├── src/
│   ├── assets/             # Static assets
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level components
│   ├── contexts/           # Custom Context
│   ├── utils/              # Utility functions
│   ├── App.tsx             # App shell
│   └── main.tsx            # Entry point
├── .eslintrc.cjs           # ESLint config
├── tailwind.config.js      # Tailwind CSS config
├── vite.config.ts          # Vite config
└── package.json            # Project metadata and scripts
```

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)
- [React Table](https://tanstack.com/table/latest)
- [date-fns](https://date-fns.org/)
- [ESLint](https://eslint.org/)

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

Laura Alabau - [LinkedIn](https://www.linkedin.com/in/lauraalabau/) 
