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
Once the CFPB updates its infrastructure to allow cross-origin requests to the data API,
having a locally running version will not be necessary.


## Dependencies

- [Node.js](https://nodejs.org/) v18 or [Docker](https://www.docker.com/)
  - We recommend using a tool like [nvm](https://github.com/nvm-sh/nvm)
    or [fnm](https://github.com/Schniz/fnm)
    to install and manage different versions of Node.
- **Temporary** (see note above): A local development environment of
  [consumerfinance.gov](https://github.com/cfpb/consumerfinance.gov)
  with the data necessary to power the APIs in its database.


## Quick start with Docker

If you have Docker installed, you can run the application locally with these steps:

1. `docker build -t grad-path .` to build the container
1. `docker run -p 3000:3000 --name grad-path grad-path` to run the container
1. Visit http://localhost:3000 in your browser to view it

Reminder: At this time, it will not function correctly unless you also
have consumerfinance.gov running with the correct data at http://localhost:8000.

To stop the container, run `docker stop grad-path`.

## Quick start with Node

If you have Node 18 installed, you can run the application locally with these steps:

1. `npm install` to install the necessary dependencies
1. `npm run dev` to build the application and launch a server
1. Visit http://localhost:3000 in your browser to view it

Reminder: At this time, it will not function correctly unless you also
have consumerfinance.gov running with the correct data at http://localhost:8000.


## Configuration, customization, and development workflow

Doing any customization of the base application
will require the Node setup as described above.

To rebuild the app assets after making any code changes, run `npm run build`
in order to see those changes reflected in your running Node application.

To see your changes in the Docker container, you will need to:
1. Stop the container if it's running: `docker stop grad-path`
1. Remove the old container: `docker rm grad-path`
1. Rebuild it: `docker build -t grad-path .`
1. Run it again: `docker run -p 3000:3000 --name grad-path grad-path`

As this is a bit of a hassle, we recommend you use the basic Node workflow
for local development and only build Docker images for production deployment.

### Branding and content configuration

_(simple branding configuration mechanism to be added and documented here)_


### Linting, formatting, and testing

`npm test` will run both linting/formatting and unit tests.

#### Linting and formatting

`npm run lint` will lint and format the styles and scripts.

#### JavaScript unit tests

`npm run jest` will run the JavaScript unit tests and calculate coverage.

#### Cypress integration tests

`npm run cypress` will run the suite of integration tests using Cypress.
These can take a while!


## Next development priorities

In rough order of importance:

- [x] Header and footer need a basic design with a simple configuration mechanism so that they can be customized without altering source files.
  - [x] OpenGraph properties also need some sensible defaults and configurability.
- [x] Icons have temporary placeholder text; need to be replaced with their actual SVG code.
- [ ] CostsGroup issues:
  - [x] Need to delay init of CostsGroup
  - [ ] They are currently not closable once opened
  - [ ] Consider simplifying to a `details` element implementation
- [x] Use JS to bypass intro if user is returning via personal URL.
- [x] Eliminate requests for Avenir Next (coming from cf-typography).
- [x] Provide a simple Docker container for easy deployment.
- [ ] Accessibility testing and remediation
- [ ] Document config/customization options
- [ ] Eliminate feedback forms, or are they useful as placebo "questions for reflection"?
- [ ] Optimize hero image and serve different sizes to different viewports.
- [ ] Add favicon/apple-touch-icon (or delete references)
- [ ] The specific `npm run scripts`, `styles`, and `templates` commands don't put their results in the correct folder.
- [ ] `npm run watch` doesn't watch enough files to be useful.
- [x] Audit npm packages and remove unneeded ones


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
