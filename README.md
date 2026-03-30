1. Pre Installation Requirements -
  Before running the project, make sure you have:
  Node.js (v18 or later),
  npm (comes with Node.js),
  Git installed,
  VS Code Editor

2. Download the Project -
  git clone https://github.com/alekhyaatyam/Payhub-Portal.git,
  cd Payhub-Portal

3. Install Dependencies -
   npm install

4. Start the Development Server -
   npm run dev,
   Then open the site in your browser: 
   http://localhost:3000

5. Navigation Overview -
   Home → /,
   Privacy Policy → /privacy,
   Terms of Service → /terms,
   Contact → /contact, 
   These links appear in both the header and footer.

6. Button Overview -
   Contact Button: 
     Component: <ContactButton />,
     Appears on multiple pages,
     Redirects to the Contact page

7. Social Media Icons Overview -
   Located on the right side of the footer,
   Each icon is clickable and opens the official homepage:
   Google → https://www.google.com,
   Facebook → https://www.facebook.com,
   LinkedIn → https://www.linkedin.com

8. Project Structure Overview -
   /app → All pages (Home, Privacy, Terms, Contact),
   /components → Header, Footer, ContactButton, shared UI,
   globals.css → Unified design system + global styles

9. Mobile Responsiveness -
   Improved layout for small screens (≤480px):
   - Fixed header link spacing
   - Corrected footer alignment
   - Made images fully responsive
   - Removed horizontal overflow on mobile

   
     
