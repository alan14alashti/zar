# 📋 Task List App

A simple React task list application that fetches tasks from an API, displays them, and provides filtering and search functionality.

## 🚀 Features
- **Fetch Tasks:** Retrieves tasks from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos).
- **Task Display:** Lists tasks with their titles and completion statuses.
- **Filtering:** View tasks by status: All, Completed, or Pending.
- **Search:** Quickly find tasks by title.
- **Built with React and TypeScript:** Ensures type safety and reliability.

---

## 🛠️ Getting Started
### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** or **yarn**

### 📥 Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/alan14alashti/zar
   cd zar
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open the app:** [http://localhost:5173/](http://localhost:5173/)

---

## 💡 My Approach
- **Component Design:** Used modular and reusable components.
- **API Handling:** Integrated `fetch` for retrieving tasks from JSONPlaceholder.
- **State Management:** Managed search and filters using React hooks.
- **UI:** Styled with Ant Design for consistency.

### 📝 Assumptions
- Users want to search tasks by title only.
- Completed tasks are visually distinct.
- JSONPlaceholder provides consistent API responses.

### 🚀 Running Instructions
- Use `npm run dev` to start in development mode.
- Optionally, use `npm run build` to create a production build.

### 📈 Additional Features/Improvements
- **Debounced Search:** Reduces API calls during typing.
- **Responsive Design:** Mobile-friendly layout.
- **Task Sorting:** Sorts tasks alphabetically.

---

## 📌 Notes
- The app fetches tasks from `https://jsonplaceholder.typicode.com/todos`.
- You can search tasks by title and filter them by status.

## ✅ Enjoy exploring your tasks efficiently!

