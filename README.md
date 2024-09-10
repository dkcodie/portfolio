Portfolio Application

Overview

This is a personal portfolio application showcasing my skills and projects as a Full Stack Java Developer. 
The application is built using HTML, CSS, JavaScript, and deployed on GitHub Pages. 
It includes various sections such as an introduction, skills, projects, and contact information.

Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling and layout.
- **JavaScript**: For interactive features.
- **GitHub**: For version control and hosting.
- **Git**: For managing changes and commits.
- **IntelliJ IDEA**: As the Integrated Development Environment (IDE) used for coding.
- **EmailJS**: Service used for handling email sending functionality directly from the client-side without requiring a server.
- **Mailtrap**: Used for testing email functionality during development to ensure proper email sending without using actual email addresses.

Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styles for the portfolio
├── js/
│   └── main.js         # JavaScript file for interactive features
├── images/             # Folder containing images used in the portfolio
│   └── [image files]   # Add images here
├── README.md           # This README file

```

Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone git@github.com:dkcody/portfolio.git
   ```

2. **Navigate to Project Directory**

   ```bash
   cd portfolio
   ```

3. **Install Dependencies**

   This project doesn’t require any additional dependencies to be installed.

4. **Configure EmailJS**

   - Create an account on [EmailJS](https://www.emailjs.com/).
   - Obtain your service ID, template ID, and user ID from the EmailJS dashboard.
   - Update the JavaScript file (`js/main.js`) with your EmailJS credentials.

5. **Run the Project Locally**

   You can open `index.html` directly in a web browser to view the application locally.

Deployment

1. **Add Files to Git**

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**

   ```bash
   git push -u origin master
   ```

3. **Set Up GitHub Pages**

   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Under **Source**, select the branch (`master`) and save.

Features

- **Contact Me Button**: Opens the user's email client to send an email using EmailJS.
- **Social Media Links**: Links to LinkedIn, GitHub, and Instagram profiles.
- **Responsive Design**: The portfolio adapts to different screen sizes.

Contact

For any inquiries, please reach out via email: [dkcodie@yahoo.com](mailto:dkcodie@gmail.com)

---

Feel free to adjust any sections or add additional information specific to your project.
