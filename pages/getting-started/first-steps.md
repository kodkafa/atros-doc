# First Steps Into Atros

Let's start by setting up your first Atros configuration. It has a flawless setup process:

### 🗂️ Requirements

- **JavaScript Runtime:** You need to have a JavaScript runtime installed in your system to parse steps. Atros is compatible with any runtime out there: NodeJS, Bun, or Deno
- **Cargo:** Atros is available only as a Cargo Crate at the moment. It'll later be available in other formats, but now you must have cargo available in your system
- **System:** You can run Atros in `MacOS` and Linux distributions based on `Debian`, `Arch` or `Fedora`

### 📥 Install Atros and Initialize

```sh
cargo install atros

atros init
```

The command `atros init` creates the `~/.config/atros/` folder, initializes the required type definitions, and most importantly, creates your first step in `steps/`.

## 👟 Basics of a Step File

### 📂 File Structure

To define a new step, create a file in `atros/steps/`. It's recommended to create your file in `01-step-name.ts` format, start by using a two-digit number to guarantee that Atros will run them in the order you intended to.

Folders and extentions other than `.ts` are not valid at the moment, they'll be passed or will cause errors.

### ✏️ Defining a Step

Let's define the simplest task we can to learn what a usual step file looks like. Then we'll break it down in more detail.

```typescript
// 01-initial-step.ts

import { AtrosStep, PredefinedParameters } from "../.atros";

const { apt_get, cask, yay } = PredefinedParameters;

const step: AtrosStep = {
  title: "Step Title",
  description: "The first task we defined (optional field)",
  tasks: [],
};

export default step;
```

#### 1. Import Requirements

Each step file starts similarly by importing 2 things:

- `AtrosStep`, the interface defined for our steps
- `PredefinedParameters`, a list of frequently encountered parameters. We'll later use them inside our install tasks to give parameters to package managers

Then we spread pre-defined parameters to use them easily later.

#### 2. Define an Empty Step

A step type has two required fields: `title` and `tasks`, also an optional field called `description`. After the definition, we export it with `default` keyword to point what will Atros parse in this file when running `atros run`. While we speak of running it, you can try to run `atros run` to see how beautifuly it succeeds!.

This is the simplest step that you can define without getting any error. However, nothing happens in your system after you run it, no installed packages, no executed command. Because we didn't define any task to run inside our step.

In the next chapter, we'll dive into tasks and execute our first command with Atros.
