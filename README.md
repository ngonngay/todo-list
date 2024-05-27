# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Installation

```bash
npm i
```

### Running the app

```bash
npm run dev
```
## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/components/**      | Contains all components that will be use in app                                               |
| **src/components/common/** | Contains component that will be import various app                                          |
| **src/components/News**  | contains main logic and styling for display Company News                                      |
| **src/components/ToDo**  | contains main logic and styling for display ToDo, which allow to edit, update and remove todos|
| **src/layouts/**         | The basic layout for pages in app                                                             |
| **src/router/**          | The definitions of routing in app                                                             |
| **src/store/**           | Contains logic for state management                                                           |
| **src/mocks/**           | The mocking data for display in pages                                                         |
| package.json             | File that contains npm dependencies as well as [build scripts]
