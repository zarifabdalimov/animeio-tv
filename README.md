# Anime.io TV 📺

A modern TV application for discovering and browsing anime, built with cutting-edge React Native technologies.

## 🎯 Project Overview

This is an experimental TV app for watching anime, currently featuring anime discovery and detail screens. The project serves as a playground for exploring the latest React Native TV capabilities with modern tooling.

**Current Status:** 🚧 Early Development
- ✅ Anime discovery/browsing interface
- ✅ Anime detail screens
- ⏳ Video player (planned)

## 🛠️ Tech Stack

This project showcases modern React Native development with:

### Core Technologies
- **[Expo SDK 54](https://expo.dev)** - Latest Expo version for universal app development
- **[React 19](https://react.dev)** - Latest React with new features
- **[React Native TV fork](https://github.com/react-native-tvos/react-native-tvos)** - TV platform support (Apple TV & Android TV)
- **[Expo Router 6](https://docs.expo.dev/router/introduction)** - File-based routing for React Native

### Styling
- **[Uniwind](https://docs.uniwind.dev/)** (Beta) - The fastest Tailwind bindings for React Native
- **[Tailwind CSS v4](https://tailwindcss.com)** - Latest Tailwind with native CSS support
- **Global CSS** - Modern styling with CSS variables and custom themes

### Backend & Data
- **[Firebase/Firestore](https://firebase.google.com)** - Cloud database for anime data
- **[TanStack Query v5](https://tanstack.com/query)** - Powerful data fetching and caching

### UI & Utilities
- **[Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)** - Optimized image component
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Smooth animations
- **[@legendapp/list](https://legendapp.com/open-source/list/)** - High-performance lists
- **[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Utility for conditional classes

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)
- Xcode (for Apple TV development)
- Android Studio (for Android TV development)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd animeio-tv

# Install dependencies
pnpm install
```

### Development

**For TV Development:**

```bash
# Start the development server (TV mode enabled by default)
pnpm start

# Run on Apple TV
pnpm ios

# Run on Android TV
pnpm android

# Run on web
pnpm web
```

**For Mobile Development:**

```bash
# Prebuild for mobile platforms (no TV modifications)
pnpm prebuild

# Then run ios/android commands
```

> **Note:** The environment variable `EXPO_TV=1` is set by default in the scripts to enable TV-specific configurations via the `@react-native-tvos/config-tv` plugin.

### Building for Production

```bash
# Clean prebuild for TV
pnpm prebuild:tv

# Build with EAS
npx eas-cli build
```

## 📁 Project Structure

```
src/
├── app/                    # Expo Router pages
│   ├── index.tsx          # Home/Discovery screen
│   ├── anime/             # Anime detail pages
│   └── _layout.tsx        # Root layout
├── modules/
│   ├── anime/             # Anime-related components and logic
│   ├── discovery/         # Discovery/browse features
│   └── components/        # Shared UI components
├── libs/
│   ├── firebase/          # Firebase configuration
│   └── firestore/         # Firestore utilities
├── constants/             # App constants and configs
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎨 Styling with Uniwind

This project uses [Uniwind](https://docs.uniwind.dev/), a beta Tailwind CSS implementation for React Native that offers:

- **Near-native performance** - Faster than NativeWind
- **Tailwind v4 support** - Latest Tailwind features
- **Global CSS** - Standard CSS with custom properties
- **Full TypeScript support** - Complete type safety

Example usage:
```tsx
import { View, Text } from 'uniwind';

export default function Component() {
  return (
    <View className="flex-1 bg-slate-900 p-4">
      <Text className="text-2xl font-bold text-white">
        Hello Uniwind!
      </Text>
    </View>
  );
}
```

## 🔥 Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Add your configuration files:
   - iOS: `ios/animeiotv/GoogleService-Info.plist`
   - Android: `android/app/google-services.json`
3. Configure Firestore with your anime data structure

## 📺 TV-Specific Features

### File Extensions
The Metro bundler is configured to resolve TV-specific files:
- `*.tv.tsx` - Shared TV code (both Apple TV and Android TV)
- `*.ios.tv.tsx` - Apple TV specific
- `*.android.tv.tsx` - Android TV specific

### Focus Management
The app uses React Native TV APIs for handling remote control navigation and focus management on TV interfaces.

## 🚢 Deployment

### Web Deployment
```bash
pnpm deploy
```

### EAS Build
```bash
npx eas-cli build --platform ios
npx eas-cli build --platform android
```

## 🔮 Roadmap

- [ ] Video player integration
- [ ] Episode list and tracking
- [ ] Search functionality
- [ ] Favorites/watchlist
- [ ] Multiple anime sources
- [ ] User authentication
- [ ] Viewing history

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Uniwind Documentation](https://docs.uniwind.dev/)
- [React Native TV](https://github.com/react-native-tvos/react-native-tvos)
- [TanStack Query](https://tanstack.com/query)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)

## 📄 License

This project is for experimental and educational purposes.

---

Built with ❤️ using the latest React Native technologies
