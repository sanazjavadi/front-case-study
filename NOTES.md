## What I Changed & Why

- Implemented **lazy loading** with conditional rendering to improve initial load performance and overall UX.
- Added clear **loading and empty states** to provide feedback when data is fetching or no items are available.
- Optimized rendering for large lists using **pagination for table view** and **incremental loading for grid view**.
- **Fixed an issue on Home and Favorites pages where API requests were being triggered unnecessarily, improving performance.**
- Refactored shared logic into reusable **hooks and utilities** to improve readability and maintainability:
  - Data fetching, pagination, infinite scroll, item actions.
- Added a global **Error Boundary** and a dedicated **404 page** to improve reliability and navigation.
- Standardized styling using **BEM methodology** and **design tokens**, removed inline styles.
- Refined the folder structure by separating shared components and introducing barrel files to enable cleaner, more maintainable imports.
- Improved UI consistency with sticky, responsive sidebar navigation, and standardized card appearance.
- Strengthened **TypeScript safety** with enums and constants.
- Ensured **full responsive design** across all screen sizes.
- Replaced browser alerts with Mantine notifications for user actions (favorite, delete, share) to improve the UX.

---

## Trade-offs & Assumptions

- User actions are simulated with notifications due to the absence of a backend.
- **Pagination & infinite scroll are handled on the frontend** because the API returns all items at once.  
  If the API supported paginated requests, `useFetchItems` could handle fetching items per page, and both Grid and Table components wouldn’t need to manage page state on front end.

---

## Next Steps

- Extend filtering and tagging by adding filters based on file or folder scope, as well as file types.
- Integrate a real backend and strengthen error handling.
- Introduce Axios as the HTTP client, leveraging its middleware and interceptor capabilities to centralize concerns such as authentication, request and response logging, global error handling, retries, and request normalization.
- Once real API endpoints are available, adopt a data-fetching solution such as React Query or SWR to benefit from built-in caching, revalidation, background updates, and optimistic updates for a more responsive and resilient user experience, together with structured state management where appropriate.
- Configure TSLint, ESLint, and Prettier to enforce a consistent code style and proactively catch potential issues.
