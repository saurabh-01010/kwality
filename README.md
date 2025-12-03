# Kwality Restaurant CP - Heritage Website

A premium, responsive single-page React application for Kwality Restaurant, Connaught Place.

## Tech Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Playfair Display (Headings), Inter (Body)

## Project Structure
- `App.tsx`: Main layout orchestrator.
- `components/`: Contains functional sections (Hero, About, Menu, Gallery, Contact).
- `data.ts`: Contains static data for Menu items and Gallery images.
- `index.html`: Contains Tailwind CDN and Google Fonts links.

## How to Update

### 1. Update Content
To change text, prices, or menu items, navigate to `data.ts`.
- **Menu**: Edit the `menuData` array.
- **Gallery**: Edit the `galleryItems` array.

### 2. Replace Images
The app currently uses `picsum.photos` for placeholders. To use real images:
1. Create an `assets` folder in `public/`.
2. Add your images (refer to `assets_manifest.txt` for recommended file names).
3. Update the `src` paths in `data.ts` and `components/Hero.tsx`.

### 3. Colors & Theme
Theme colors are defined in the `tailwind.config` script inside `index.html`.
- `maroon`: #6B0F1A
- `gold`: #CFAF6E
- `charcoal`: #111111

## Deployment

### Vercel / Netlify
1. Initialize a git repository.
2. Push the code to GitHub/GitLab.
3. Import the project into Vercel/Netlify.
4. Ensure the build command is set to your bundler's build command (e.g., `npm run build` or `vite build`).
5. Set the output directory (e.g., `dist` or `build`).

## Running Locally
1. `npm install`
2. `npm start`
