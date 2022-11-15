# Components

## Usage

Simple reusable components that are shared between modules should be kept in this directory.

Each component should have its own module which exports the component. Sub-components are also possible and can be defined in the parent component's module.

```
components
│   README.md
└───example-one
│   │   example-one.component.html
│   │   example-one.component.scss
│   │   example-one.component.spec.ts
│   │   example-one.component.ts
│   │   example-one.module.ts
│   │
│   └───example-sub.component
│       │   example-sub.component.html
│       │   example-sub.component.scss
│       │   example-sub.component.spec.ts
│       │   example-sub.component.ts
│
└───example-two
    │   example-two.component.html
    │   example-two.component.scss
    │   example-two.component.spec.ts
    │   example-two.component.ts
    │   example-two.module.ts
```

## Naming Conventions

File and directory names should be formatted as kebab case as shown in the file tree above.
