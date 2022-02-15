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

#### 2.1. NPM

```bash
npm install --save ../path/to/viro-community-react-viro-2.22.0.tgz
```

#### 2.2. Yarn

```bash
yarn add ../path/to/viro-community-react-viro-2.22.0.tgz
```

### 3. Add the plugin to app.json

```json
"plugins": [ "@viro-community/react-viro" ]
```

OR if testing [Android with non-default configuration](https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)

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

`expo run:ios` will generate the ios/ folder and will run `pod install` in the project.

```bash
expo run:ios
```

#### 4.2. Android

```bash
expo run:android
```

### 5. Add changes which use the viro library

Replace the contents of App.tsx with the following:

```js
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

```

### 6. Build and run the project

#### 6.1. iOS

The iOS instructions are different than the Android instructions because run:ios does not build and run on a physical device. If using a physical device, you might have to configure code signing. I was able to do this by choosing my personal team (not a paid developer account) and removing the push notifications capability. I did have to go into settings to trust the developer certificate, but you shouldn't have this problem if you have a paid developer account. This is found in `Settings --> General --> VPN & Device Management`.

![Screenshot](/img//blog/expo.png)

```bash
expo run:ios -d <my device id | device name>
```

#### 6.2. Android

```bash
expo run:android
```
