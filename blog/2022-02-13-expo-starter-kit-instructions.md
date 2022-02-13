# RFC and RFT: Expo Starter Kit Instructions

Hey everyone! I'd like to start testing the expo plugin. I've attached a tarball of the repo, and I'd like our testers to follow these instructions and make sure that everything works correctly.

Specifically, I'd like to test the following:

- iOS: M1 Mac
- iOS: Intel Mac
- Android
- Android with non-default configuration (https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)

## Instructions

### 1. Create a new expo project

```bash
expo init my-project
```

### 2. Install downloaded tarball as a dependency to the project

I would recommend keeping the tarball close to the project folder.

```bash
npm install --save ../path/to/viro-community-react-viro-2.22.0.tgz
```

### 3. Add the plugin to app.json

```json
"plugins": [ "@viro-community/react-viro" ]
```

OR if testing Android with non-default configuration

```json
"plugins": [
  [
    "@viro-community/react-viro",
    {
      "androidXrMode": "GVR"
    }
  ]
],
```

### 4. Generate the ios/android folders

#### 4.1. iOS

```bash
expo prebuild --clean -p ios --no-install
cd ios && pod install
```

#### 4.2. Android

```bash
expo prebuild --clean -p android --no-install
```

### 5. Build the project

#### 5.1. iOS

The iOS instructions are different than the Android instructions because run:ios does not build and run on a physical device.

```bash
cd ios
xed .
# use xcode to build the project to a device
```

#### 5.2. Android

```bash
expo run:android
```
