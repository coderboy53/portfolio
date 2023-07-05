# A revamp of my portfolio website

Why? I had to move ahead with learning. And the old one was a bit rashly put together using bootcamps and googling and stackoverflow. This one I want to build from scratch properly, with proper documentation and workflow so that it doesn't appear to be an alien mess later on.

## The techs?

I'll be using the same tech stack of React, but this time with the sole focus of building with React, rather than converting from HTML+CSS to react, which eliminates the twisted, complicated code which is a result of "how to convert this to this?" googling.
Also this project will be also me trying out Material UI for styling react rather than basic css for the first time.

## The design?

I'll be experimenting with it, but mostly add a little technical, straighforward, minimalist-ish design and get rid of the old pretty design. I'll also make it for both light and dark mode. (Can't get rid of dark mode)

## You wanna try it locally?

First install the modules used

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install react-router-dom
```

Just clone the repo and run

```bash
npm run dev
```

Note: since we have used vitejs to create this react app, we are using the above, dont use ```npm start``` from create-react-app!

This website has been deployed to vercel under my custom domain.

## Workflow

- [ ] Create the about me page
  - [ ] create a grid to store the contents as detached boxes
    - [ ] my image
    - [ ] my name
    - [ ] introduction
