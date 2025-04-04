# Audi Website -Frontend Project

A dynamic, responsive landing page for Audi, showcasing car models, technology, and a configurator. Built with Node.js, Express, and a modern frontend using Tailwind CSS and JavaScript.

---
Demo link - https://audi-landing-page.tiiny.site

---
## 🚀 Features

- **Navigation:** Sticky navigation bar with smooth scrolling to sections.
- **Hero Section:** Eye-catching introduction with a call-to-action.
- **Models Section:** Dynamically fetches and displays car models from the backend API.
- **Technology Section:** Interactive charts for electric charging and quattro AWD performance using ECharts.
- **Audi Sport Section:** Animated performance counters triggered on scroll.
- **Configurator Section:** Interactive car customization with real-time price updates.
- **Testimonials Section:** Static customer reviews (extensible to dynamic).
- **Contact Section:** Form submission with backend integration.
- **Footer:** Dark mode toggle and basic footer content.

---

## 🛠 Technologies Used

- **Backend:** Node.js, Express
- **Frontend:** HTML, Tailwind CSS, JavaScript
- **Charts:** ECharts
- **Dependencies:** Express (^4.18.2)

---

## 📁 Project Structure

```
audi-website/
├── server.js          # Express server with API endpoints
├── index.html         # Main HTML file with frontend structure
├── styles.css         # Custom CSS styles
├── main.js            # JavaScript for dynamic interactions
├── charts.js          # JavaScript for charts
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v20.x or later recommended)
- npm (comes with Node.js)

### Installation

**Clone the Repository:**

```bash
git clone https://github.com/your-username/audi-website.git
cd audi-website
```

**Install Dependencies:**

```bash
npm install
```

**Run the Server:**

```bash
npm start
```

**Access the Website:**  
Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Running Locally

- The server runs on port `3000` by default. Modify the port variable in `server.js` if needed.
- Ensure an internet connection for external CDN resources (Tailwind CSS, ECharts, Remixicon).

---

## 🧪 Usage

- **Explore Models:** View dynamically loaded car models in the "Discover Our Models" section.
- **Interact with Technology:** Scroll to the "Innovative Technology" section to see charts.
- **Customize a Car:** Use the "Build Your Audi" section to select options and see price updates.
- **Submit Contact Form:** Fill out the form in the "Contact Us" section; submissions are logged to the server console.

---

## 🌱 Extending the Project

- **Add a Database:** Integrate MongoDB or another database to store contact submissions or model data.
- **Enhance Configurator:** Add more options (wheels, interior) and update the car image dynamically.
- **Dynamic Testimonials:** Fetch testimonials from an API endpoint.
- **Deployment:** Deploy to a service like Heroku or Vercel for public access.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/new-feature
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## 🙏 Acknowledgments

- Images and icons sourced from [Readdy.ai](https://readdy.ai).
- Built with inspiration from modern automotive websites.

---

## 📘 How to Use

**Create the File:** In your `audi-website` folder, create a file named `README.md`.

**Copy and Paste:** Copy the entire code block above (including the markdown and markers) into `README.md`.

**Save and Commit:** Add it to your Git repository:

```bash
git add README.md
git commit -m "Add README.md"
git push origin main
```

**Verify on GitHub:** After pushing, visit your repository on GitHub to see the rendered `README`.

---

> ✅ This single-block format is ready to be used as a complete `README.md` file! Replace `your-username` with your actual GitHub username when setting up the repository.
