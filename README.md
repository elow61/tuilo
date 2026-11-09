# Tuilo

**Tuilo** is a small web tool to build app icons for Odoo in a few clicks: pick a pictogram, choose two colors, check the result in context, and export it.

## Features

- **Search** among the duotone icons of the [Phosphor](https://phosphoricons.com) set
- **Colors**: pick a primary and a secondary color, or start from one of the suggested duos
- **Preview** the icon on its tile, at several sizes (96, 48 and 32 px)
- **In context**: see your icon among other apps on a home screen, in dark or light mode
- **Export** the result as **SVG** or **PNG**

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev)
- [Vitest](https://vitest.dev) and [Testing Library](https://testing-library.com) for the tests
- [Iconify](https://iconify.design) JSON package of the Phosphor icons

## Contributing

Contributions are welcome! Feel free to open an issue to report a bug or suggest an idea, or a pull request.

Before submitting a pull request, please make sure the tests and the linter pass:

```bash
npm run test:run
npm run lint
```

## Credits

- Icons by [Phosphor Icons](https://phosphoricons.com), licensed under the [MIT License](https://github.com/phosphor-icons/core/blob/main/LICENSE).

## Disclaimer

Tuilo is an independent project and is not affiliated with or endorsed by Odoo S.A. "Odoo" is a trademark of Odoo S.A.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
