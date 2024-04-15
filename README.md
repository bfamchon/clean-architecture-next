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
