# Specifying System

Like we said in the previous section: You can define a system to anything in Atros; to tasks, packages, and parameters. Let's see examples for each of them in this section.

## 📝 Tasks With a System

You can define a system for a whole task to run it only in the specified system.

```typescript
[
  {
    type: "shell",
    cmd: "echo 'I use Arch btw'",
    system: "arch",
  },
];
```

Simple, isn't it? Let's look at another example of installing packages.

```typescript
[
  {
    type: "install",
    packages: ["neovim", "firefox"], // Cross-platform packages
  },
  {
    type: "install",
    packages: ["build-essentials"], // A debian package
    system: "debian",
  },
];
```

This looks great, right? No, it does not. Trust me.

## 📦 Packages With a System

Writing a whole new task to install a package in a different system is verbose and not up to ~Pollos~ Atros standards. Instead, you can define a system for packages too! Let's see the same example without the verbosity.

```typescript
[
  {
    type: "install",
    packages: [
      "neovim",
      "firefox",
      {
        system: "debian",
        list: ["build-essential"],
      },
    ],
  },
];
```

This is much simpler, especially when you're automating your real environment. But what about installing packages that require different parameters in different systems? Like, installing the Neovide package requires a `--cask` parameter. Again, defining a new task to install a package for each different system is not up to our standards.

## ⚙️ Parameters With a System

Let's see how we would define a system for a parameter. We'll use a verbose way here, and they will fix it to use a single task.

```typescript
[
  {
    type: "install",
    packages: ["neovim", "firefox"],
  },
  {
    type: "install",
    packages: ["neovide"],
    parameters: [
      {
        system: "mac",
        list: ["--cask"], // Use --cask parameter in MacOS
      },
    ],
    // This is the exact same way the pre-defined cask parameter is implemented
    // So, you could just use this to get the same result:
    // parameters: [cask]
  },
];
```

As the comment lines state, this is an already defined parameter. However, we'll continue using it to demonstrate. After you learn, you can use any parameter you want with a system.

Here we accomplish what we want: A system-specific task. But it took a whole new task to do it, where we could simply define a parameter inside the `packages` field of one single task. Let's see.

```typescript
[
  {
    type: "install",
    packages: [
      "neovim",
      "firefox",
      {
        list: ["neovide"],
        params: [
          {
            list: ["--cask"],
            system: "mac",
          },
        ],
      },
    ],
  },
];
```

Just like that!

## 🚀 You're More Than Ready

With knowing this too, you're more than ready to define your tasks and execute them with Atros. So let's try out!

If you encounter any problem, the community will kindly help. Don't hesitate to ask in Github.
