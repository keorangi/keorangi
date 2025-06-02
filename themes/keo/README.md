# Keo - A Minimalist Hugo Theme

Keo is a minimalist Hugo theme designed with a strong focus on clean typography and a clutter-free reading experience. It leverages Tailwind CSS for styling and aims for bare-minimum, self-contained JavaScript.

## Features

*   **Minimalist Design**: Focus on content and readability.
*   **Typography Focused**: Uses Inter font with thoughtful font weights for visual hierarchy.
*   **Tailwind CSS**: Modern, utility-first CSS framework.
*   **Responsive**: Adapts to various screen sizes.
*   **Basic Archetypes**: Includes `default`, `post`, and `snip` archetypes to get you started.
*   **Hugo Pipes for CSS**: Processes Tailwind CSS via Hugo's asset pipeline.

## Installation

1.  **Add the theme to your Hugo site:**
    ```bash
    git submodule add https://github.com/yourusername/keo.git themes/keo # Replace with your repo URL
    ```
    Or, simply download/clone this repository into your site's `themes/` directory.

2.  **Configure your site's `hugo.toml` (or `config.toml`):
    ```toml
    theme = "keo"

    [build]
      writeStats = true # Required for Tailwind CSS processing

    [markup.goldmark.renderer]
      unsafe = true # Recommended for flexibility with Tailwind classes in Markdown
    ```

3.  **Install Node.js dependencies for Tailwind CSS:**
    Navigate to the theme directory and install dependencies:
    ```bash
    cd themes/keo
    npm install
    cd ../..
    ```

## Usage

### Building CSS

The theme uses Hugo Pipes to build the Tailwind CSS. When you run `hugo` or `hugo server`, the CSS will be automatically processed.

For development, you can also run a watcher for Tailwind CSS from within the `themes/keo` directory:
```bash
npm run watch:css
```

To build the minified CSS for production explicitly:
```bash
npm run build:css
```
This is typically handled by `hugo --minify` during the site build process if `static/css/style.css` is not already present.

### Creating Content

Use the provided archetypes:

*   **Post**: `hugo new content posts/my-first-post.md`
*   **Snip**: `hugo new content snips/my-quick-note.md`
*   **Default**: `hugo new content page/about.md`

### Customization

*   **Tailwind Configuration**: Modify `themes/keo/tailwind.config.js` to customize colors, fonts, spacing, etc.
*   **Custom CSS**: Add your own styles to `themes/keo/assets/css/main.css`.
*   **Layouts**: Override theme layouts by creating corresponding files in your site's `layouts/` directory.
*   **Site Configuration (`hugo.toml`)**:
    *   Add main menu items:
        ```toml
        [[menu.main]]
          identifier = "about"
          name = "About"
          url = "/about/"
          weight = 10
        
        [[menu.main]]
          identifier = "posts"
          name = "Posts"
          url = "/posts/"
          weight = 20
        ```
    *   Set site parameters like `copyright` in the `[params]` section.

## Contributing

Contributions, issues, and feature requests are welcome. Please create an issue or pull request on the [GitHub repository](https://github.com/yourusername/keo). (Replace with your repo URL)

## License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. (You'll need to add a LICENSE file).
