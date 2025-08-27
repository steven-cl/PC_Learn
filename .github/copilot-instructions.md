# PC_Learn Frontend

PC_Learn is an educational React web application built with Vite + React 19.1.0, Tailwind CSS, and pnpm. It provides comprehensive educational content about computer architecture, PC components, and Arduino programming for students and enthusiasts.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap and Development Setup
- **Install Node.js 18 or superior** - The project requires Node.js version 18+
- **Install pnpm globally**: `npm install -g pnpm`
- **Install dependencies**: `pnpm install` -- takes ~15 seconds. NEVER CANCEL.
- **Run linting**: `pnpm lint` -- takes <1 second, very fast
- **Run linting with auto-fix**: `pnpm "lint --fix"` -- takes <2 seconds

### Build and Development Commands
- **Development server**: `pnpm dev` -- starts in ~528ms, runs on http://localhost:5173
- **Build for production**: `pnpm build` -- takes ~6.5 seconds. NEVER CANCEL. Set timeout to 30+ seconds.
- **Preview production build**: `pnpm preview` -- starts immediately, runs on http://localhost:4173

### **CRITICAL TIMING EXPECTATIONS**
- **NEVER CANCEL** any build or development commands
- Dependencies installation: Allow 30+ seconds (actual: ~15s)
- Production build: Allow 30+ seconds (actual: ~6.5s)  
- Development server startup: Allow 10+ seconds (actual: ~528ms)
- Linting: Allow 10+ seconds (actual: <1s)

## Validation

### Required User Scenarios - ALWAYS Test These After Changes
1. **Home Page Navigation**:
   - Start dev server with `pnpm dev`
   - Navigate to http://localhost:5173
   - Verify the main hero section displays "Domina la Arquitectura de Máquinas"
   - Check all navigation links work (Hardware de Computadoras, Arquitectura Basica, Arduino dropdown, Busco computadora)

2. **Educational Content Pages**:
   - Test PC Components page (`/pcComponents`) - should load comprehensive content about CPU, RAM, storage, GPU, motherboard, PSU, cooling, and PCI slots
   - Test Architecture Basics page (`/basicsArchitecture`) - should load Von Neumann vs Harvard, memory models, instruction cycle, and CPU components
   - Verify all content sections render properly with images and formatted text

3. **Navigation and Routing**:
   - Verify React Router navigation works between all pages
   - Test that the Arduino dropdown menu functions properly
   - Ensure footer links are functional

### Pre-commit Validation Requirements
- **ALWAYS run** `pnpm lint` before committing - CI will fail if linting errors exist
- **ALWAYS test** at least one complete user scenario after making changes
- **Build verification**: Run `pnpm build` to ensure production build succeeds
- **NEVER commit** without running the development server and manually testing key functionality

## Common Tasks Reference

### Frequently Run Commands Output
Save time by referencing these instead of running bash commands repeatedly:

#### Repository Root Structure
```
PC_Learn/
├── .git/
├── .gitignore
├── README.md
├── components.json          → shadcn/ui configuration
├── eslint.config.js        → ESLint configuration
├── index.html              → Main HTML template
├── package.json            → Dependencies and scripts
├── pnpm-lock.yaml         → Lockfile for reproducible builds
├── pnpm-workspace.yaml    → PNPM workspace config
├── postcss.config.cjs     → PostCSS configuration
├── public/                → Static assets (images, icons)
├── src/                   → Source code
├── tailwind.config.js     → Tailwind CSS configuration
├── tsconfig.*.json        → TypeScript configurations
└── vite.config.js         → Vite build tool configuration
```

#### Source Code Structure (src/)
```
src/
├── App.css               → Global app styles
├── App.tsx              → Main app component with routing
├── Layout.jsx           → Layout wrapper component
├── assets/              → Internal app assets (images, icons)
├── components/          → Reusable components
│   └── ui/             → UI components (cards, tabs, etc.)
├── index.css           → Global CSS and Tailwind imports
├── layouts/            → Layout components
│   ├── FooterLayout.tsx
│   └── HeaderNavigation.tsx
├── lib/                → Utility functions and helpers
│   └── utils.ts
├── main.tsx            → React app entry point
├── pages/              → Page components
│   ├── ArduinoBasics.tsx
│   ├── ArduinoCoding.tsx
│   ├── ArduinoHardware.tsx
│   ├── BasicsArchitecture.tsx
│   ├── Home.tsx
│   ├── NotFound.jsx
│   ├── PcComponents.tsx
│   └── RecommendPc.tsx
├── styles.js           → Color definitions and theme constants
├── theme.css           → CSS custom properties and theming
└── types/              → TypeScript type definitions
    └── static.d.ts
```

#### Key Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",                    // Development server
    "build": "vite build",            // Production build
    "lint": "eslint .",               // Run linting
    "preview": "vite preview",        // Preview production build
    "lint --fix": "eslint . --fix"    // Fix linting issues
  }
}
```

### Path Aliases Configuration
The project uses these import aliases (configured in vite.config.js and tsconfig.json):
- `@/` → `src/`
- `@components/` → `src/components/`
- `@layouts/` → `src/layouts/`
- `@lib/` → `src/lib/`
- `@pages/` → `src/pages/`
- `@assets/` → `src/assets/`

### Technology Stack Details
- **Frontend Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 6.3.5 (very fast HMR and building)
- **Styling**: Tailwind CSS 4.1.8 with PostCSS
- **Package Manager**: pnpm 10.15.0 (faster than npm)
- **Icons**: FontAwesome and Heroicons
- **UI Components**: Radix UI primitives + custom components
- **Routing**: React Router DOM 7.6.2
- **Animations**: Framer Motion

### Build Output Analysis
Production builds generate:
- **Main bundle**: ~628 kB (minified), ~195 kB (gzipped)  
- **CSS**: ~43 kB (minified), ~8 kB (gzipped)
- **Assets**: Images and static files preserved in `dist/assets/`
- **Warning**: Large chunks due to code syntax highlighting libraries - this is expected for an educational platform

## Development Guidelines

### Component Architecture
- **Pages**: Located in `src/pages/`, each represents a route
- **Layouts**: Wrapper components in `src/layouts/` for consistent page structure  
- **UI Components**: Reusable components in `src/components/ui/`
- **Shared Logic**: Utilities and helpers in `src/lib/`

### Styling Approach
- **Tailwind CSS**: Primary styling framework with utility classes
- **CSS Custom Properties**: Defined in `src/theme.css` for consistent theming
- **Component-scoped CSS**: Use CSS modules or styled-components when needed
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

### State Management
- **Local State**: React useState for component-level state
- **Routing State**: React Router for navigation and URL state
- **No Global State Library**: Currently uses props and React context patterns

### Adding New Educational Content
1. Create new page component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `src/layouts/HeaderNavigation.tsx`
4. Follow existing content structure patterns from `PcComponents.tsx` or `BasicsArchitecture.tsx`
5. Use consistent styling and component patterns

### Code Quality Standards
- **ESLint**: Configured for React + TypeScript best practices
- **TypeScript**: Strict mode enabled with path mapping
- **Import Organization**: Use path aliases consistently
- **Component Patterns**: Functional components with hooks

## Troubleshooting

### Common Issues and Solutions
- **Build Fails**: Check for TypeScript errors and missing dependencies
- **Dev Server Won't Start**: Ensure port 5173 is available, check Node.js version
- **Styling Issues**: Verify Tailwind classes and check PostCSS configuration
- **Import Errors**: Use configured path aliases, check file extensions
- **Performance Issues**: Check bundle analyzer output, consider code splitting for large components

### Dependencies Not Installing
- Clear pnpm cache: `pnpm store prune`
- Remove node_modules and reinstall: `rm -rf node_modules && pnpm install`
- Check Node.js version compatibility (18+)

### Port Conflicts
- Development server (5173): Change port with `pnpm dev --port 3000`  
- Preview server (4173): Change port with `pnpm preview --port 4000`

Remember: This is an educational platform focused on computer architecture and Arduino. All content should be technically accurate, well-structured, and beginner-friendly while maintaining depth for learning purposes.