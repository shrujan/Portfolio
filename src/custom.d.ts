// This tells TypeScript that any import ending in .scss is a valid module.
// This is necessary for side-effect imports of stylesheets.
declare module '*.scss' {
    const content: any;
    export default content;
}

// This tells TypeScript that any import ending in .pdf is a valid module.
declare module '*.pdf' {
    const content: string;
    export default content;
}
