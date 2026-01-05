## What I Changed & Why

- Implemented **lazy loading** with conditional rendering to improve initial load performance and overall UX.
- Added clear **loading and empty states** to provide feedback when data is fetching or no items are available.
- Optimized rendering for large lists using **pagination for table view** and **incremental loading for grid view**.
- **Fixed an issue on Home and Favorites pages where API requests were being triggered unnecessarily, improving performance.**
- Refactored shared logic into reusable **hooks and utilities** to improve readability and maintainability:
  - Data fetching, pagination, infinite scroll, pagination, item actions.
- Added a global **Error Boundary** and a dedicated **404 page** to improve reliability and navigation.
- Standardized styling using **BEM methodology** and **design tokens**, removed inline styles.
- Improved **folder structure**, separated Share-related components, and added **barrel files** for cleaner imports.
- Improved UI consistency with sticky navigation, and standardized **card appearance**.
- Strengthened **TypeScript safety** with enums and constants.
- Ensured **full responsive design** across all screen sizes.
- Replaced browser alerts with **Mantine notifications** for user actions (favorite, delete, share).

---

## Trade-offs & Assumptions

- User actions are simulated with notifications due to the absence of a backend.
- Focused on **code quality, type safety, and UX** rather than adding additional features.

---

## Next Steps

- Improve **filtering and tagging** experience.
- Enhance error handling and integrate a real backend.
- Adopt **SWR** and structured state management where needed.
