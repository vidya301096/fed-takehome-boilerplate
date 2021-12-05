# designory. Front End Developer - Take Home Test Boilerplate - React Version

-   Submitted by: _Vidyasree Natarajan_

## Quick Start

Clone the repository,

```
git clone https://github.com/vidya301096/fed-takehome-boilerplate.git
```

Install dependencies in the root directory,

```
cd fed-takehome-boilerplate
yarn install
```

Run the project in the root directory,

```
yarn start
```

## Design decisions

### Atomic Structure of components

[Atomic Design](https://atomicdesign.bradfrost.com/) details all that goes into creating and maintaining robust design systems, allowing you to roll out higher quality, more consistent UIs faster than ever before. It introduces a methodology for thinking of our UIs as thoughtful hierarchies, discusses the qualities of effective pattern libraries, and showcases techniques to transform your team's design and development workflow.

Components are created following atoms, molecules, templates, pages, type of structure by having the following in mind,

1. Atoms form the basic elements. They cannot be broken down into separate components. In the given design, Button, Container, Footer, and Tile are considered as atoms.

-   Button has 2 variations - Button and Button as a link.
-   Container determines the max-width of the content of the page. It has 2 variations - Default and fluid. Default has the max-width of 1152px (can be configured in _styles/\_variables.scss_) and fluid spans for 100% width. The padding varies for different breakpoints.
-   Footer displays the phone number and copyrights.
-   Tile is a layout component with image, title, date and content. The image height is set to 140px (can be configured in _styles/\_variables.scss_). Tile expects a title. If image is not found, it displays a rectangular box with color patters as defined in [**Designory-Project.pdf**](Designory-Project.pdf).

2. Molecules consists of 1 or more atoms. Header and Hero components are considered as molecules.

-   Header consists of the logo and navigation links.
-   Hero consists of the page title and button component. It expects a title.

3. Template forms the whole layout of the given design. It is the whole page without the content. All the components are placed and styled as per the design document. Responsiveness has been added to all elements. Only 2 brekpoints are considered,

| Breakpoint      | Range    |
| --------------- | -------- |
| Smaller devices | <560px   |
| Larger devices  | >= 560px |

The breakpoint is defined in _styles/\_variables.scss_.

4. A Page adds the content to the template. Content for the homepage can be configured in _content/homepage.js_.

> _Note_ : Organisms are another form of the atomic structure of components which consists of more than one molecules. In the given design, organisms were not necessary.

### Naming conventions

BEM Naming conventions have been followed for classNames.

[BEM](https://en.bem.info/methodology/quick-start/) (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting.

### Typechecking with PropTypes

Proptypes are used for typechecking the props and warning the users if the content type is not as expected.

[PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

### Styles

-   `rem` values are used to make the sizing consistent among all the components in the whole page. 1rem is defined as 16px.
-   _normalize.css_ is removed and reset CSS is added to reset all the default styles in _styles/reset.scss_.
-   _styles/\_variables.scss_ is used to define the themes, breakpoints and image heights.
