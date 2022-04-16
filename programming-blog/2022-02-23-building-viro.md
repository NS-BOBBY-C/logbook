
# Building ViroCore --> ViroReact --> Use in starter kit

I am assuming that you have your directories set up with `viro`, `virocore` and the `starter-kit` as follows:

![directories](/img/blog/2022-02-23-building-viro/directories.png)

## 1. Build ViroCore

### (iOS) Building the renderer to be used in react-viro platform

### 1.1. Make sure you followed through steps 1 - 3 mentioned in the android section

### 1.2. Execute the following commands to install pods from `Podfile`

```bash
# in virocore/
cd ios
pod install
```

### 1.3. Open `ViroRenderer.xcworkspace` in Xcode. Build scheme `ViroKit` with Build Configuration set to `Release` and target set to `Generic iOS Device`.

![directories](/img/blog/2022-02-23-building-viro/virocore.png)

**Note:**

If you want the ability to run on Simulator, change target to any of the `iOS Simulator` targets instead of `Generic iOS Device`. If the Xcode build succeeded, you should see a bunch of new files copied over in `viro/ios/dist/` folder in the viro repo you cloned earlier.

## 2. Build ViroReact

### 2.1. Execute the following commands to install pods from `Podfile`

```bash
# in viro/
cd ios
pod install
```

### 2.2. Open `ViroReact.xcworkspace` in Xcode. Build scheme `ViroReact` with Build Configuration set to `Release` and target set to `Generic iOS Device`.

![directories](/img/blog/2022-02-23-building-viro/viroreact.png)

This should generate more files in the ios/dist/ folder.

### 2.3. Install pods

I don't know if this is required, but I'm doing it anyways

```bash
# in viro/
cd ios
pod install
```

### 2.4. Bundle the ViroReact project into a tarball

```bash
yarn bundle
```

## 3. Use in starter kit

### 3.1. Clear the yarn cache of the tarball

```bash
# I know, this cleans the entire cache. 
# yarn cache clean @viro-community/react-viro doesn't properly clear the tarball from the cache.
yarn cache clean
```

### 3.2. install dependencies

```bash
# in starter-kit/
yarn install

yarn add ../viro/viro-community-react-viro-<version>.tgz

cd ios
pod install
```

### 3.3. Run the starter kit