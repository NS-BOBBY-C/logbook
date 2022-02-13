# Building @viro-community/react-viro package

The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.

After sifting around through the build.gradle, settings.gradle, and android/build.gradle files, I had a realization that there might be certain parts of the android project that are put into different places when the ./prepare_release.sh script is run.

The next AHA! moment was when I realized that I can install a dependency from a tarball. The package.json for the starter kit looks slightly different:

```json
"dependencies": {
  "@viro-community/react-viro": "../viro/viro-community-react-viro-2.22.0.tgz",
  "fsevents": "^2.3.2",
  "react": "17.0.2",
  "react-native": "0.65.1"
}
```

instead of:

```json
"dependencies": {
  "@viro-community/react-viro": "../viro",
  "fsevents": "^2.3.2",
  "react": "17.0.2",
  "react-native": "0.65.1"
},
```

This tarball puts everything into the right spot for a local installation, and then the starter-kit builds on android! I had to add the dist folder for the generated JS files so that `npm pack` would get everything needed.
