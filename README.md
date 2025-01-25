# The Wild Oasis 🏡

A modern, responsive cabin rental management app designed to streamline the process of managing cabin bookings, user accounts, and settings. Built as part of a web development course, **The Wild Oasis** showcases advanced React concepts, Supabase integration, and a professional design system using Styled Components.

[🌐 Live Demo Coming Soon!]

---

## 📖 About This Project

**The Wild Oasis** is a full-featured web app built to manage a cabin rental service. This project includes key functionalities like:

- Adding, editing, and deleting cabins.
- Managing bookings and users.
- Integrating real-time data using Supabase as the backend.
- Creating reusable components with Styled Components for a polished design system.
- Handling form inputs and validation using React Hook Form.
- Dashboard for visualizing bookings, revenue, and other key metrics.

This project demonstrates the ability to work with **modern frontend technologies**, including React Query for remote state management and dynamic APIs.

---

## ✨ Features

- **Cabin Management**: Add, edit, and delete cabins with fields for name, capacity, price, and images.
- **Dynamic Bookings Table**: Filter and sort bookings with client-side and API-side logic.
- **Dashboard**: Visualize key metrics like bookings, revenue, and cabin availability.
- **Responsive Design**: Optimized layouts for all devices using Styled Components.
- **Interactive Forms**: Built with React Hook Form for easy validation and improved UX.
- **Supabase Integration**: Back-end database for user authentication, bookings, and cabins.
- **Real-Time State Management**: React Query ensures efficient data fetching and caching.

---

## 🔧 Technologies

The Wild Oasis was built with the following technologies:

- **React.js**: Component-based frontend library.
- **Supabase**: Backend as a Service (BaaS) for authentication and database management.
- **React Query**: Simplified remote state management for API data.
- **React Hook Form**: Minimal and performant form handling.
- **Styled Components**: Modular and reusable CSS-in-JS styling.

---

## 🎓 Concepts and Skills

This project reinforced the following concepts:

1. **Remote State Management**: Using React Query to fetch, cache, and update data from Supabase.
2. **Reusable Styled Components**: Designing scalable and maintainable CSS components.
3. **Form Validation**: Implementing form validation with minimal code using React Hook Form.
4. **Backend Integration**: Using Supabase for database queries and real-time updates.
5. **Client-Side Routing**: Creating dynamic routes with React Router.
6. **Responsive Layouts**: Building designs optimized for desktops, tablets, and mobile devices.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- Supabase account
- NPM or Yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/the-wild-oasis.git
   ```

2. Navigate to the project directory:

   ```bash
   cd the-wild-oasis
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure Supabase:

   - Create a new project in Supabase.
   - Set up tables for `cabins`, `users`, and `bookings`.
   - Add environment variables to `.env.local`:
     ```
     REACT_APP_SUPABASE_URL=<your_supabase_url>
     REACT_APP_SUPABASE_KEY=<your_supabase_key>
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open the app in your browser at `http://localhost:3000`.

---

## 📋 Project Structure

- **/components**: Reusable React components (e.g., Navbar, Sidebar, Toasts).
- **/pages**: Main app pages (e.g., Home, Cabins, Users, Bookings, Settings, Dashboard).
- **/services**: API integration with Supabase.
- **/styles**: Styled Components for consistent theming and layout.

---

## 🌟 Features in Detail

### Cabins Section

- Add a new cabin with details like name, capacity, price, and discount.
- Upload images to Supabase for dynamic rendering.

### Booking Management

- Filter bookings by date, user, or status.
- Pagination and sorting of booking data (client-side and API-side).

### Dashboard

- Visualize bookings, revenue, and other key metrics.
- Interactive charts and graphs for actionable insights.

### User Management

- Authenticate users with Supabase.
- Assign roles (admin/user) for role-based access control.

### Application Settings

- Dark mode toggle using CSS variables.
- Responsive adjustments for all screen sizes.

---

## 🚧 Future Enhancements

1. **Advanced Authentication**:
   - Add social login options (e.g., Google, Facebook).
2. **Improved Dashboard**:
   - Add charts and statistics for better analytics.
3. **Push Notifications**:
   - Notify admins about new bookings or changes.
4. **Offline Support**:
   - Cache data for offline access.

---

## 🙌 Acknowledgments

Special thanks to [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/) for his insightful course that inspired this project and provided a solid foundation in modern web development.

---

Feel free to explore the project and share your feedback. Contributions and suggestions are welcome! 🚀
