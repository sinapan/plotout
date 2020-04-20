# Plotout

A web app that make visualizing data extremely fast and easy.

The [GraphBuilder](https://www.jmp.com/en_ch/events/ondemand/mastering-jmp/basics-for-using-graph-builder.html) from [JMP](https://www.jmp.com/en_ca/home.html) is the inspiration for this project. This project aims to deliver on the following advantages over the [GraphBuilder](https://www.jmp.com/en_ch/events/ondemand/mastering-jmp/basics-for-using-graph-builder.html):

- It is an open-source project.
- It will run entirly in the browser so there will be nothing to install.
- It will support more data visualization types (ex. text visualization).
- It will support "big data".

You are excited and wanna knonw where to begin? Move to the next section.
[Please keep in mind that we just started and have not reached the Alpha version yet, so there is a ton of work that still needs to be done.]

## Getting started

### Framework

This project if based on the Svelte framework and uses [Sapper](https://github.com/sveltejs/sapper) for application management.

### Running the project

After cloning the projecct, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## Roadmap

Here is where we are headed:

- Adding support multiple javascript charting libraries (i.e. Plotly, Google charts, Charts.js and D3)
- Adding support for loading data to memory for visualizations so that the data would never leave the user's device.
- Adding support for multiple data sources (i.e. MongoDB, Google Sheets, BigQuery and Redshift)
- Adding a blog for everyone to share interesting visualization

## Bugs and feedback

Feel free to fork and make pull requests. We are still working out the contribution guidelines.
