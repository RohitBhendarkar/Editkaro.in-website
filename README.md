# EditKaro.in - Video Editing Portfolio Website<br>

A modern, responsive portfolio website for video editing services.

## Features

- Responsive design for all devices
- Portfolio showcase with filtering and grid/list views
- Video modal for project previews
- Contact form with Google Sheets integration
- Email subscription system
- Testimonial slider
- Smooth scrolling and animations
- Modern UI with gradient effects

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla)
- Google Apps Script
- Font Awesome Icons
- Google Fonts (Poppins)

## Deployment Instructions

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/editkaro.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be available at `https://yourusername.github.io/editkaro`

### Google Apps Script Setup

1. Create a new Google Sheet
2. Create two sheets:
   - Main sheet for contact form submissions
   - 'Subscribers' sheet for email subscriptions
3. Add headers to the 'Subscribers' sheet:
   - Column A: Timestamp
   - Column B: Email
4. Open Google Apps Script editor
5. Copy the contents of `Code.gs` to the editor
6. Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheet ID
7. Deploy as a web app:
   - Click "Deploy" > "New deployment"
   - Choose "Web app"
   - Set permissions to "Anyone"
   - Copy the deployment URL
8. Update the URL in `app.js`:
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your deployment URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - rohitlbhendarkar@gmail.com
Project Link: https://github.com/RohitBhendarkar/Editkaro.in-website 
