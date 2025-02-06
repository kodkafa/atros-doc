# Define Tasks

We have two different types of tasks: `shell` and `install`. Both use a `type` field to define their type, and the other fields depend on the type of your task. Let's see how to define both of these kinds of tasks in action!

### 📟 Shell Task

Shell tasks are the most primal ones. They only require a `cmd` field, and when you run that task, Atros tries to execute the value of this field you provided using the `sh` command.

```typescript
{
  type: "shell",
  cmd: "echo 'Hey, welcome to Atros'",
}
```

This task will run `echo 'Hey, welcome to Atros'` on your system using `sh`

### 📥 Install Task

On the other hand, while still being simple to define, install tasks have more functionality than a simple task. It needs to find your system's default package manager and check if you have a special system or parameter definition for any package. We'll talk about all of these functionalities, but let's start easy. An install task has 3 fields: `type`, `packages`, and `parameters` (parameters are optional) With this in mind, we can define a simple task that installs Neovim.

```typescript
{
  type: "install",
  packages: ["neovim"],
  params: [], // optional
}
```

And done! Now running `atros run` will install Neovim in your system. You might ask though, why should I use an `install` task when I already have `shell`? The answer is out-of-the-box cross-platform support. As we mentioned above, an install task finds your system before it gets executed, so in MacOS, this task gets executed as `brew install neovim`, while in Debian the same task will become `apt install neovim`

#### Package Manager Parameters

Of course, this is not the only advantage of an install task. Giving a parameter to package managers gets much easier with install tasks, since they have a `params` field that supports system-specific parameters, we'll later talk about system specificity.

```typescript
{
  type: "install",
  packages: ["neovide"],
  // Remember the pre-defined parameters we imported earlier?
  // Changed neovim to neovide for demonstrating cask
  params: [cask]
}
```

##### All Pre-Defined Parameters

- apt_get
  - **System:** Debian Based
  - **What it Does:** Runs `apt-get` instead of `apt`
- cask
  - **System:** MacOS
  - **What it Does:** Adds --cask parameter
- yay
  - **System:** Arch Based
  - **What it Does:** Runs `yay` instead of `pacman`

### 💻 Specifying System

But how do these parameters work system-specific? Well, the truth is parameters are not the only thing you can define a system to. In Atros, you can specify a system for each task, package, and of course, parameter. Using this, we can change the outcome of our tasks for each system that you can install and use Atros.

We'll talk about this in-depth in the next chapter.
