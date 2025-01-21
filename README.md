
## Project Structure

- `src/app/`: This directory contains the main application files, including the layout, pages, and global styles.
- `src/components/`: This directory contains reusable React components used throughout the application.
- `src/assets/`: This directory contains static assets such as icons and images.
- `src/lib/`: This directory contains utility functions and helper modules.

## UI and Animations

The landing page utilizes the following libraries and techniques for creating a visually appealing and engaging user interface:

- **Tailwind CSS**: The project uses Tailwind CSS for styling, which provides a utility-first approach to building custom designs. Tailwind CSS classes are used throughout the codebase to style the components.
- **Framer Motion**: This library is used for creating smooth animations and transitions. It is used in various sections of the landing page, such as the hero section and the product showcase.
- **Radix UI**: The project leverages Radix UI components for building accessible and customizable UI elements. For example, the accordion component is used in the FAQs section.
- **Lucide React**: This library provides a set of open-source icons used throughout the landing page.

## Customization

To customize the landing page, you can modify the components in the `src/components/` directory. Each section of the landing page is represented by a separate component, making it easy to update the content, styles, and functionality.

### Styling

The project uses Tailwind CSS for styling, which allows for easy customization of colors, typography, and other design elements. You can modify the Tailwind configuration file (`tailwind.config.js`) to change the default styles or add new utility classes.

### Animations

The animations and transitions are implemented using Framer Motion. You can modify the animation properties and keyframes in the respective components to change the animation behavior.

### UI Components

The UI components used in the landing page are from Radix UI and Lucide React. You can customize these components by modifying their props or styling them using Tailwind CSS classes.

## Dependencies

This project uses the following major dependencies:

- [Next.js](https://nextjs.org/): A React framework for building server-rendered and static websites.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [Radix UI](https://www.radix-ui.com/): A low-level UI component library for building accessible design systems.
- [Lucide React](https://lucide.dev/): A set of open-source icons.
- [Framer Motion](https://www.framer.com/motion/): A production-ready motion library for React.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request against the main repository.

## License

This project is licensed under the [MIT License](LICENSE).