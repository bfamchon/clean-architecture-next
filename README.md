# Clean NextJS Template

## Development environment setup

### VOLTA

[Volta](volta.sh) is used to manage node versions. Just follow the guide to install Volta and your first NodeJS version.

This project pin a specific version of NodeJS that you can see in [package.json](./package.json) under `volta` entry.

It's used to share the same node version across the team.

### PNPM

In order to manage dependencies, I suggest [PNPM](pnpm.io) which is a really efficient package manager.

You just need to verify that you have access to it in CLI by typing `pnpm`.

Use `volta install pnpm` if you don't.

### VSCODE

Just use it, I suggest some good extensions in this project ✌️

## Project setup

`pnpm install` to install all dependencies and setup git hooks.

`pnpm dev` to launch project in development mode.

`pnpm test` to launch tests.

These are principals commands to verify that everything is well setup.
Other commands are listed in `package.json`.

## Project Tooling

## Husky

Git hooks are used to launch command on git actions (push, commit...).

Here, we used [Husky](https://github.com/typicode/husky) and you can find concerned git hooks in the `.husky` directory.

### Commit lint

In order to share the same commit conventions, we use `commitlint` which validate our commit messages, using git hooks, and following [Conventional Commits rules](https://www.conventionalcommits.org)

### Circular dependencies

The problem with circular dependencies is rather like the chicken and egg problem.

If you depend on me setting something up, and I depend on you setting something up, how do we start?

The corollary of this is how do we end - if I have a reference to your resource and you have a reference to mine, I can never clean up because that would break you, and you cannot clean up because that would break me.

To avoid circular dependencies in our project, we use [madge](https://github.com/pahen/madge).
Madge is run on pre-push hook.

## Prettier and Linter

Prettier and ESLint are used to keep the same good coding rules.

The git hook (`hook:pre-commit`) will pretty changed file, and a VSCode rule will activate "formatOnSave" based on Prettier config.

## Project sources structure

```js
📦src
 ┣ 📂app // NextJS files and routing
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┗ 📂modules // Where we will mostly write our code
 ┃ ┣ 📂app // Our application setup and entrypoint
 ┃ ┃ ┣ 📂react
 ┃ ┃ ┃ ┣ 📜AppWrapper.tsx
 ┃ ┃ ┃ ┣ 📜DependenciesProvider.tsx
 ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┗ 📜main.ts
 ┃ ┣ 📂components // React components shared between our domain
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┗ 📜Form.tsx
 ┃ ┃ ┣ 📂ui
 ┃ ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┃ ┣ 📜buttonVariants.ts
 ┃ ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┃ ┣ 📜select.tsx
 ┃ ┃ ┃ ┗ 📜tooltip.tsx
 ┃ ┃ ┗ 📜LinkAsButton.tsx
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📜id-provider.ts
 ┃ ┃ ┣ 📜stub.id-provider.ts
 ┃ ┃ ┗ 📜system.id-provider.ts
 ┃ ┣ 📂shared // Shared utility code
 ┃ ┃ ┣ 📜errors.utils.ts
 ┃ ┃ ┣ 📜invariant.ts
 ┃ ┃ ┗ 📜utils.ts
 ┃ ┣ 📂sinister // Code concerning our domain Sinister
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📂entity // Our domain entities and how to create them
 ┃ ┃ ┃ ┃ ┣ 📜company.factory.ts
 ┃ ┃ ┃ ┃ ┗ 📜sinister.domain-model.ts
 ┃ ┃ ┃ ┣ 📂form // our form business logic
 ┃ ┃ ┃ ┃ ┣ 📜insuranceContract.form.test.ts
 ┃ ┃ ┃ ┃ ┣ 📜insuranceContract.form.ts
 ┃ ┃ ┃ ┃ ┗ 📜submitter.form.ts
 ┃ ┃ ┃ ┣ 📂infrastructure
 ┃ ┃ ┃ ┃ ┣ 📂interfaces
 ┃ ┃ ┃ ┃ ┃ ┗ 📜companies.gateway.ts
 ┃ ┃ ┃ ┃ ┣ 📜fake-companies.gateway.ts
 ┃ ┃ ┃ ┃ ┗ 📜stub-companies.gateway.ts
 ┃ ┃ ┃ ┣ 📂selectors // Redux selectors
 ┃ ┃ ┃ ┃ ┣ 📜companies.selector.ts
 ┃ ┃ ┃ ┃ ┣ 📜form.selector.ts
 ┃ ┃ ┃ ┃ ┗ 📜step.selector.ts
 ┃ ┃ ┃ ┣ 📂store // Redux slices and listeners
 ┃ ┃ ┃ ┃ ┣ 📜fetcher.listener.ts
 ┃ ┃ ┃ ┃ ┣ 📜sinister-form-step.listener.ts
 ┃ ┃ ┃ ┃ ┗ 📜sinister.slice.ts
 ┃ ┃ ┃ ┗ 📂use-cases
 ┃ ┃ ┃ ┃ ┣ 📜fetch-companies.use-case.test.ts
 ┃ ┃ ┃ ┃ ┣ 📜fetch-companies.use-case.ts
 ┃ ┃ ┃ ┃ ┗ 📜set-insurance-contract-form.use-case.ts
 ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂steps
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Step.tsx
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┗ 📜SinisterDeclaration.tsx
 ┃ ┃ ┃ ┗ 📂sections
 ┃ ┃ ┃ ┃ ┣ 📂insurance-contract
 ┃ ┃ ┃ ┃ ┃ ┣ 📜InsuranceContractSection.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜use-insurance-contract.hook.ts // Hooks are used as presenters to give data to our sections components
 ┃ ┃ ┃ ┃ ┗ 📂submitter
 ┃ ┃ ┃ ┃ ┃ ┣ 📜SubmitterSection.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜use-submitter.hook.ts
 ┃ ┣ 📂store // Global Redux store
 ┃ ┃ ┣ 📜create-app-thunk.ts
 ┃ ┃ ┣ 📜dependencies.ts
 ┃ ┃ ┣ 📜root-reducer.ts
 ┃ ┃ ┣ 📜store.ts
 ┃ ┃ ┣ 📜types.ts
 ┃ ┃ ┗ 📜use-app-dispatch.ts
 ┃ ┗ 📂testing // Testing setup
 ┃ ┃ ┗ 📜tests-environment.ts
```
