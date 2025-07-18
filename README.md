# Portfolio
code for divyanshugoyal03.github.io
A modern, responsive portfolio website built with Next.js using v0 by Vercel. This project showcases my projects, skills, and experience with a professionally designed interface.

## Features

- **Responsive Design** - Works seamlessly across all devices
- **Modern UI/UX** - Clean and professional interface
- **Fast Performance** - Optimized with Next.js features
- **SEO Optimized** - Meta tags and structured data
- **Static Export** - Deployable to GitHub Pages
- **Interactive Components** - Smooth animations and transitions

## Technologies Used

- **v0 by Vercel** - AI-powered UI generation tool
- **Next.js 14** - React framework for production
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library (optional)
- **Shadcn/ui** - Modern UI component library

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/divyanshugoyal03/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
> Note: This project was generated using v0 by Vercel, so all necessary dependencies and configurations are already included.

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files. You can start editing the page by modifying files in the `src/` directory.

## Building for Production

### Standard Build
```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Static Export for GitHub Pages

For GitHub Pages deployment, you need to export the site as static files:

1. **Configure Next.js for static export**
   
   Add this to your `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and export static files**
   ```bash
   npm run build
   ```

3. **The static files will be generated in the `out` folder**

## GitHub Pages Deployment

### Create a Separate Repository for GitHub Pages

For GitHub Pages deployment, create a separate repository with the specific naming convention:

1. **Create a new repository**
   - Repository name: `divyanshugoyal03.github.io` (replace `divyanshugoyal03` with your GitHub username)
   - Make it public
   - Don't initialize with README (we'll add our own content)

2. **Build your portfolio for static export**
   ```bash
   npm run build
   ```

3. **Navigate to the `out` folder**
   ```bash
   cd out
   ```

4. **Initialize git and add content**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

5. **Connect to your GitHub Pages repository**
   ```bash
   git remote add origin https://github.com/divyanshugoyal03/divyanshugoyal03.github.io.git
   git branch -M main
   git push -u origin main
   ```

6. **Access your live website**
   Your portfolio will be available at: `https://divyanshugoyal03.github.io`

### Updating Your GitHub Pages Site

When you make changes to your portfolio:

1. **Build the updated version**
   ```bash
   npm run build
   ```

2. **Copy new content to your GitHub Pages repo**
   ```bash
   # Navigate to your GitHub Pages repository
   cd ../divyanshugoyal03.github.io
   
   # Remove old content (keep .git folder)
   rm -rf * .[^.]*
   git checkout HEAD -- .gitignore  # restore .gitignore if it exists
   
   # Copy new content from out folder
   cp -r ../portfolio/out/* .
   cp -r ../portfolio/out/.[^.]* . 2>/dev/null || true
   
   # Commit and push changes
   git add .
   git commit -m "Update portfolio website"
   git push origin main
   ```

### Alternative: Automated Deployment Script

Create a deployment script `deploy.sh` in your portfolio project:

```bash
#!/bin/bash

# Build the project
npm run build

# Navigate to GitHub Pages repository
cd ../divyanshugoyal03.github.io

# Remove old content
rm -rf * .[^.]*
git checkout HEAD -- .gitignore 2>/dev/null || true

# Copy new content
cp -r ../portfolio/out/* .
cp -r ../portfolio/out/.[^.]* . 2>/dev/null || true

# Deploy
git add .
git commit -m "Deploy portfolio - $(date)"
git push origin main

echo "Portfolio deployed successfully!"
```

Make it executable and run:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Repository Structure
You'll have two repositories:
- `portfolio` - Your development repository with Next.js source code
- `divyanshugoyal03.github.io` - Your GitHub Pages repository with static files only

### Important Notes
- GitHub Pages serves from the root of the `divyanshugoyal03.github.io` repository
- The site will be available at `https://divyanshugoyal03.github.io`
- Changes may take a few minutes to reflect on the live site
- Make sure your `next.config.js` has the correct configuration for static export

## Customization

### Colors and Themes
Edit `tailwind.config.js` to customize the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      }
    }
  }
}
```

### Content
Update the following files to customize your portfolio:
- `src/data/projects.js` - Your project information
- `src/data/skills.js` - Your skills and technologies
- `src/data/about.js` - About section content

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages (if using gh-pages)

# Static Export
npm run export       # Generate static files in 'out' folder
```

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Contact form (if using a service like Formspree)
NEXT_PUBLIC_CONTACT_FORM_ID=your-form-id

# Analytics (if using Google Analytics)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [v0 by Vercel](https://v0.dev) - AI-powered UI generation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Pages](https://pages.github.com)

---

**Live Demo:** [https://divyanshugoyal03.github.io](https://divyanshugoyal03.github.io)

**Contact:** [divyanshugoyal03@gmail.com](mailto:divyanshugoyal03@gmail.com)
