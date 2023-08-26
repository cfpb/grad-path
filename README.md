# Your Financial Path to Graduation

This is a standalone front end for Your Financial Path to Graduation,
a tool created by the Consumer Financial Protection Bureau
to help students considering a college program forecast their costs
and how they will pay for them.
The CFPB hosts
[the original tool](https://www.consumerfinance.gov/paying-for-college/your-financial-path-to-graduation/), but is providing this code for organizations that may want to
stand up their own version of the tool with their own branding or modified content.

_(screenshot to be added)_

The front end is a static, single-page application
that connects to APIs hosted by the CFPB
that provide the back-end data for various features.
It requires Node 16 to build its CSS, JavaScript, and Nunjucks templates.


## ℹ️ Current status

This front end can currently be run in a local development environment
against your own local consumerfinance.gov environment running concurrently,
provided that consumerfinance.gov environment has
the data needed to power this tool in its database.
It also requires the CORS updates proposed in
[cfpb/consumerfinance.gov#7859](https://github.com/cfpb/consumerfinance.gov/pull/7859).
Once that is merged and deployed to the consumerfinance.gov production environment,
having a locally running version will not be necessary.


## Dependencies

- [Node.js](https://nodejs.org/) v16
  - We recommend using a tool like [nvm](https://github.com/nvm-sh/nvm)
    or [fnm](https://github.com/Schniz/fnm)
    to install and manage different versions of Node.
- **Temporary** (see note above): A local development environment of
  [consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov)
  with the data necessary to power the APIs in its database.


## Installation

1. `npm install` to install the necessary dependencies
1. `npm run dev` to build the application and launch a server at http://localhost:3000


## Configuration

_(simple branding configuration mechanism to be added and documented here)_


## Usage

To rebuild the app assets after making any code changes, run `npm run build`.


## Linting, formatting, and testing

`npm test` will run both linting/formatting and unit tests.

### Linting and formatting

`npm run lint` will lint and format the styles and scripts.

### JavaScript unit tests

`npm run jest` will run the JavaScript unit tests and calculate coverage.

### Cypress integration tests

`npm run cypress` will run the suite of integration tests using Cypress.
These can take a while!


## Next development priorities

In rough order of importance:

- [x] Header and footer need a basic design with a simple configuration mechanism so that they can be customized without altering source files.
  - [ ] OpenGraph properties also need some sensible defaults and configurability.
    - Mostly done, just need a default image
- [x] Icons have temporary placeholder text; need to be replaced with their actual SVG code.
- [ ] CostsGroup issues:
  - [x] Need to delay init of CostsGroup
  - [ ] They are currently not closable once opened
  - [ ] Consider simplifying to a `details` element implementation
- [ ] Use JS to bypass intro if user is returning via personal URL.
- [ ] Eliminate requests for Avenir Next (coming from cf-typography).
- [ ] Provide a simple Docker container for easy deployment.
- [ ] Eliminate feedback forms, or are they useful as placebo "questions for reflection"?
- [ ] Optimize hero image and serve different sizes to different viewports.
- [ ] The specific `npm run scripts`, `styles`, and `templates` commands don't put their results in the correct folder.
- [ ] `npm run watch` doesn't watch enough files to be useful.


## Getting help

Use the [issue tracker](https://github.com/cfpb/grad-path/issues)
to follow the development conversation.
If you find a bug not listed in the issue tracker,
please [file a bug report](https://github.com/cfpb/grad-path/issues/new).


## Getting involved

We welcome your feedback and contributions.
See the [contribution guidelines](CONTRIBUTING.md) for more details.

---

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)

---

## Credits and references

This project uses the [CFPB Design System](https://cfpb.github.io/design-system/)
as the basis of its user interface and layout components.
