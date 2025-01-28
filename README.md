A feature-rich task management application built with **Next.js**, **Mantine**, **Tailwind CSS**, and **Redux Toolkit**. It includes CRUD operations and basic JWT authentication using **local storage**.

const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
];

## Features

- **Task Management**: Create, read, update, and delete tasks effortlessly.
- **Authentication**: Secure login and signup using JWT-based authentication.
- **State Management**: Powered by Redux Toolkit for seamless state handling.
- **UI/UX**: Responsive and intuitive design using Mantine and Tailwind CSS.
- **Form**: React Hook Form used to capture form data and validations.
- **Local Storage**: Persistent authentication using local storage.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Mantine](https://mantine.dev/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Authentication**: JWT with local storage

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
