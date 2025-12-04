---
title: Integrate Custom Dark Mode Toggle Component
description: Replace the standard mode toggle with a custom animated switch component provided by the user.
steps:
  - step: Create DarkModeToggle Component
    description: >
      Create `components/ui/dark-mode-toggle.tsx` with the provided code.
      Adapt it to use `next-themes` for actual functionality (sync state with theme).
      Ensure it handles hydration correctly (mounted check).
    file: components/ui/dark-mode-toggle.tsx
    commands: []
  - step: Update Header to use DarkModeToggle
    description: >
      Modify `components/ui/header-3.tsx` to import and use `DarkModeToggle` instead of `ModeToggle`.
      Replace both desktop and mobile menu instances.
    file: components/ui/header-3.tsx
    commands: []
  - step: Verify Integration
    description: Ensure the toggle works as expected (switches theme and animates).
    file: ""
    commands: []
---
