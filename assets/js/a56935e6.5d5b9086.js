"use strict";(self.webpackChunklogbook=self.webpackChunklogbook||[]).push([[334],{8921:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/02/24/what-is-my-plan","metadata":{"permalink":"/logbook/blog/2022/02/24/what-is-my-plan","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-24-what-is-my-plan.md","source":"@site/blog/2022-02-24-what-is-my-plan.md","title":"What is my plan?","description":"Often times you get asked about \\"What is your 5 year plan?\\" and I have NO idea about specifics.","date":"2022-02-24T00:00:00.000Z","formattedDate":"February 24, 2022","tags":[],"readingTime":1.6,"truncated":false,"authors":[],"nextItem":{"title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","permalink":"/logbook/blog/2022/02/23/building-viro"}},"content":"Often times you get asked about \\"What is your 5 year plan?\\" and I have NO idea about specifics.\\n\\nAs of right now, I know:\\n\\n## 1. I want to start my own business\\n\\nI know I can run a successful business. I am very detail oriented and I have a lot of experience \\"running\\" a team to create a product. I have made mistakes and have been overextended, but with one sole product and enough time, I know that I can create a product that will be successful.\\n\\n## 2. I might need to go back to school to get an MBA\\n\\nI don\'t know everything I need to know to start a good business. I can create a decent software product, but I don\'t know how to create a successful business from a software product.\\n\\n## 3. I don\'t have a good idea for a business that I want to commit to\\n\\nOne of the ideas I\'ve had before is a \\"social wellness\\" platform. It would be very similar to [NextStep GoodLife](https://nextstepgoodlife.com), but I don\'t really want to make another social media app. I\'ve thought about making a fitness tracking app, but that is a super saturated market and I don\'t want to be in it. I thought about \\"party tech\\" but there isn\'t a huge market for scalability - just frat bros and sorority girls in that market. That would include party planning apps, which is somewhat niche. I\'ve also thought about creating a javascript teaching platform, something in crypto, or something else entirely.\\n\\nEesha had an idea to see everything about her health records in one place by connecting portals together. I don\'t know how to monetize this.\\n\\nTLDR; Ideas list:\\n\\n- Create a social wellness platform\\n- Create a fitness tracking app\\n- Create a party planning app\\n- Create a teaching platform\\n- Create a something in crypto\\n- Create a health records app"},{"id":"/2022/02/23/building-viro","metadata":{"permalink":"/logbook/blog/2022/02/23/building-viro","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-23-building-viro.md","source":"@site/blog/2022-02-23-building-viro.md","title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","description":"I am assuming that you have your directories set up with viro, virocore and the starter-kit as follows:","date":"2022-02-23T00:00:00.000Z","formattedDate":"February 23, 2022","tags":[],"readingTime":1.505,"truncated":false,"authors":[],"prevItem":{"title":"What is my plan?","permalink":"/logbook/blog/2022/02/24/what-is-my-plan"},"nextItem":{"title":"Adding back GVR on iOS for Viro","permalink":"/logbook/blog/2022/02/22/gvr-ios"}},"content":"I am assuming that you have your directories set up with `viro`, `virocore` and the `starter-kit` as follows:\\n\\n![directories](/img/blog/2022-02-23-building-viro/directories.png)\\n\\n## 1. Build ViroCore\\n\\n### (iOS) Building the renderer to be used in react-viro platform\\n\\n### 1.1. Make sure you followed through steps 1 - 3 mentioned in the android section\\n\\n### 1.2. Execute the following commands to install pods from `Podfile`\\n\\n```bash\\n# in virocore/\\ncd ios\\npod install\\n```\\n\\n### 1.3. Open `ViroRenderer.xcworkspace` in Xcode. Build scheme `ViroKit` with Build Configuration set to `Release` and target set to `Generic iOS Device`.\\n\\n![directories](/img/blog/2022-02-23-building-viro/virocore.png)\\n\\n**Note:**\\n\\nIf you want the ability to run on Simulator, change target to any of the `iOS Simulator` targets instead of `Generic iOS Device`. If the Xcode build succeeded, you should see a bunch of new files copied over in `viro/ios/dist/` folder in the viro repo you cloned earlier.\\n\\n## 2. Build ViroReact\\n\\n### 2.1. Execute the following commands to install pods from `Podfile`\\n\\n```bash\\n# in viro/\\ncd ios\\npod install\\n```\\n\\n### 2.2. Open `ViroReact.xcworkspace` in Xcode. Build scheme `ViroReact` with Build Configuration set to `Release` and target set to `Generic iOS Device`.\\n\\n![directories](/img/blog/2022-02-23-building-viro/viroreact.png)\\n\\nThis should generate more files in the ios/dist/ folder.\\n\\n### 2.3. Install pods\\n\\nI don\'t know if this is required, but I\'m doing it anyways\\n\\n```bash\\n# in viro/\\ncd ios\\npod install\\n```\\n\\n### 2.4. Bundle the ViroReact project into a tarball\\n\\n```bash\\nyarn bundle\\n```\\n\\n## 3. Use in starter kit\\n\\n### 3.1. Clear the yarn cache of the tarball\\n\\n```bash\\n# I know, this cleans the entire cache. \\n# yarn cache clean @viro-community/react-viro doesn\'t properly clear the tarball from the cache.\\nyarn cache clean\\n```\\n\\n### 3.2. install dependencies\\n\\n```bash\\n# in starter-kit/\\nyarn install\\n\\nyarn add ../viro/viro-community-react-viro-<version>.tgz\\n\\ncd ios\\npod install\\n```\\n\\n### 3.3. Run the starter kit"},{"id":"/2022/02/22/gvr-ios","metadata":{"permalink":"/logbook/blog/2022/02/22/gvr-ios","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-22-gvr-ios.md","source":"@site/blog/2022-02-22-gvr-ios.md","title":"Adding back GVR on iOS for Viro","description":"VR was removed on iOS in the last few months, but it\'s still a huge part of the ecosystem. This is supported on Android, and we\'re working on adding it back to iOS. This entry records my progress and troubleshooting.","date":"2022-02-22T00:00:00.000Z","formattedDate":"February 22, 2022","tags":[],"readingTime":0.845,"truncated":false,"authors":[],"prevItem":{"title":"Building ViroCore --\x3e ViroReact --\x3e Use in starter kit","permalink":"/logbook/blog/2022/02/23/building-viro"},"nextItem":{"title":"Building @viro-community/react-viro package","permalink":"/logbook/blog/2022/02/13/building-viro"}},"content":"VR was removed on iOS in the last few months, but it\'s still a huge part of the ecosystem. This is supported on Android, and we\'re working on adding it back to iOS. This entry records my progress and troubleshooting.\\n\\n## PR\\n\\nThe pull request is [here](https://github.com/ViroCommunity/viro/pull/73). I had to filter .pngs, .strings, and .bin files out of the PR so I could even load the page. This PR is a bit of a mess and I think there is work which has already been done which is duplicated here. `static_lib/` has already been removed.\\n\\n## Looking around\\n\\nThere is some commented out code\\n\\n## Discussion with Ed\\n\\n### Todo\\n\\n1. Rebuild virocore\\n\\n[https://github.com/ViroCommunity/virocore#ios-building-the-renderer-to-be-used-in-react-viro-platform](building virocore to be used in react-viro).\\n\\n- [ ] Having trouble doing this. It seems that ios/dist does not get completely regenerated when ViroKit is rebuilt. I\'m not sure why!\\n\\n\\n2. uncomment references\\n\\n- [x] should be done!\\n\\n3. Distribute virocore with cocoa pods\\n\\nThis is the part to figure out.\\n\\n- https://cocoapods.org/\\n- https://guides.cocoapods.org/making/getting-setup-with-trunk.html"},{"id":"/2022/02/13/building-viro","metadata":{"permalink":"/logbook/blog/2022/02/13/building-viro","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-building-viro.md","source":"@site/blog/2022-02-13-building-viro.md","title":"Building @viro-community/react-viro package","description":"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":0.765,"truncated":false,"authors":[],"prevItem":{"title":"Adding back GVR on iOS for Viro","permalink":"/logbook/blog/2022/02/22/gvr-ios"},"nextItem":{"title":"Developing with ViroCommunity/viro Locally","permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally"}},"content":"The first major change I had to make was to add react native as a dev dependency. Android will not build correctly without it.\\n\\nAfter sifting around through the build.gradle, settings.gradle, and android/build.gradle files, I had a realization that there might be certain parts of the android project that are put into different places when the ./prepare_release.sh script is run.\\n\\nThe next AHA! moment was when I realized that I can install a dependency from a tarball. The package.json for the starter kit looks slightly different:\\n\\n```json\\n\\"dependencies\\": {\\n  \\"@viro-community/react-viro\\": \\"../viro/viro-community-react-viro-2.22.0.tgz\\",\\n  \\"fsevents\\": \\"^2.3.2\\",\\n  \\"react\\": \\"17.0.2\\",\\n  \\"react-native\\": \\"0.65.1\\"\\n}\\n```\\n\\ninstead of:\\n\\n```json\\n\\"dependencies\\": {\\n  \\"@viro-community/react-viro\\": \\"../viro\\",\\n  \\"fsevents\\": \\"^2.3.2\\",\\n  \\"react\\": \\"17.0.2\\",\\n  \\"react-native\\": \\"0.65.1\\"\\n},\\n```\\n\\nThis tarball puts everything into the right spot for a local installation, and then the starter-kit builds on android! I had to add the dist folder for the generated JS files so that `npm pack` would get everything needed."},{"id":"/2022/02/13/develop-with-viro-locally","metadata":{"permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-develop-with-viro-locally.md","source":"@site/blog/2022-02-13-develop-with-viro-locally.md","title":"Developing with ViroCommunity/viro Locally","description":"1. Set up ViroCommunity/viro","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":0.985,"truncated":false,"authors":[],"prevItem":{"title":"Building @viro-community/react-viro package","permalink":"/logbook/blog/2022/02/13/building-viro"},"nextItem":{"title":"RFC and RFT: Expo Starter Kit Instructions","permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions"}},"content":"## 1. Set up ViroCommunity/viro\\n\\n### 1.1. Clone ViroCommunity/viro repo\\n\\n```bash\\ngh repo clone ViroCommunity/viro\\n```\\n\\n### 1.2. Install dependencies\\n\\n```bash\\ncd viro\\nnpm install\\n```\\n\\n## 2. Set up the Starter Kit\\n\\n### 2.1. Clone the starter kit\\n\\n```bash\\ngh repo clone ViroCommunity/starter-kit\\n```\\n\\n### 2.2. Install dependencies\\n\\n```bash\\ncd starter-kit\\nnpm install\\n```\\n\\n## 3. (optional) Make changes viro\\n\\nMake changes to the `viro` folder to fix a bug, add something new, etc.\\n\\n## 4. Build viro\\n\\nEnsure that your typescript compiles by running the build command.\\n\\n```bash\\n# from viro/\\nnpm run build\\n```\\n\\n## 5. Run the \\"prepare_release.sh\\" script\\n\\nThis script will create a tarball of the files and binaries needed in the viro folder for the dependency to work correctly.\\n\\n```bash\\n# from viro/\\n./prepare_release.sh\\n```\\n\\nYou should have a tarball in the viro folder called `viro-community-react-viro-<package.json version>.tgz`.\\n\\n## 6. Install the tarball\\n\\n```bash\\ncd starter-kit\\nnpm install ../viro/viro-community-react-viro-<package.json version>.tgz\\n```\\n\\n## 7. Build the starter kit\\n\\n### iOS\\n\\nIf developing on ios, run `pod install` in the `ios` folder and then run the starter kit from xCode.\\n\\n### Android\\n\\nIf developing on android, run `npm run android` with a device connected."},{"id":"/2022/02/13/expo-starter-kit-instructions","metadata":{"permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-02-13-expo-starter-kit-instructions.md","source":"@site/blog/2022-02-13-expo-starter-kit-instructions.md","title":"RFC and RFT: Expo Starter Kit Instructions","description":"Hey everyone! I\'d like to start testing the expo plugin. I\'ve attached a tarball of the repo, and I\'d like our testers to follow these instructions and make sure that everything works correctly.","date":"2022-02-13T00:00:00.000Z","formattedDate":"February 13, 2022","tags":[],"readingTime":2.17,"truncated":false,"authors":[],"prevItem":{"title":"Developing with ViroCommunity/viro Locally","permalink":"/logbook/blog/2022/02/13/develop-with-viro-locally"},"nextItem":{"title":"Jest: Flush Promises and Timers with Snapshot Tests","permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers"}},"content":"Hey everyone! I\'d like to start testing the expo plugin. I\'ve attached a tarball of the repo, and I\'d like our testers to follow these instructions and make sure that everything works correctly.\\n\\nSpecifically, I\'d like to test the following:\\n\\n- iOS: M1 Mac\\n- iOS: Intel Mac\\n- Android\\n- Android with non-default configuration (https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)\\n\\n## Instructions\\n\\n### 1. Create a new expo project\\n\\n```bash\\nexpo init my-project\\n```\\n\\n### 2. Install downloaded tarball as a dependency to the project\\n\\nI would recommend keeping the tarball close to the project folder.\\n\\n#### 2.1. NPM\\n\\n```bash\\nnpm install --save ../path/to/viro-community-react-viro-2.22.0.tgz\\n```\\n\\n#### 2.2. Yarn\\n\\n```bash\\nyarn add ../path/to/viro-community-react-viro-2.22.0.tgz\\n```\\n\\n### 3. Add the plugin to app.json\\n\\n```json\\n\\"plugins\\": [ \\"@viro-community/react-viro\\" ]\\n```\\n\\nOR if testing [Android with non-default configuration](https://github.com/ViroCommunity/viro/pull/88#discussion_r805226852)\\n\\n```json\\n\\"plugins\\": [\\n  [\\n    \\"@viro-community/react-viro\\",\\n    {\\n      \\"androidXrMode\\": \\"GVR\\"\\n    }\\n  ]\\n],\\n```\\n\\n### 4. Generate the ios/android folders\\n\\n#### 4.1. iOS\\n\\n`expo run:ios` will generate the ios/ folder and will run `pod install` in the project.\\n\\n```bash\\nexpo run:ios -d <device id | device name>\\n```\\n\\n#### 4.2. Android\\n\\n```bash\\nexpo run:android\\n```\\n\\n### 5. Add changes which use the viro library\\n\\nReplace the contents of App.tsx with the following:\\n\\n```js\\nimport React, {useState} from \'react\';\\nimport {StyleSheet} from \'react-native\';\\nimport {\\n  ViroARScene,\\n  ViroText,\\n  ViroConstants,\\n  ViroARSceneNavigator,\\n} from \'@viro-community/react-viro\';\\n\\nconst HelloWorldSceneAR = () => {\\n  const [text, setText] = useState(\'Initializing AR...\');\\n\\n  function onInitialized(state, reason) {\\n    console.log(\'guncelleme\', state, reason);\\n    if (state === ViroConstants.TRACKING_NORMAL) {\\n      setText(\'Hello World!\');\\n    } else if (state === ViroConstants.TRACKING_NONE) {\\n      // Handle loss of tracking\\n    }\\n  }\\n\\n  return (\\n    <ViroARScene onTrackingUpdated={onInitialized}>\\n      <ViroText\\n        text={text}\\n        scale={[0.5, 0.5, 0.5]}\\n        position={[0, 0, -1]}\\n        style={styles.helloWorldTextStyle}\\n      />\\n    </ViroARScene>\\n  );\\n};\\n\\nexport default () => {\\n  return (\\n    <ViroARSceneNavigator\\n      autofocus={true}\\n      initialScene={{\\n        scene: HelloWorldSceneAR,\\n      }}\\n      style={styles.f1}\\n    />\\n  );\\n};\\n\\nvar styles = StyleSheet.create({\\n  f1: {flex: 1},\\n  helloWorldTextStyle: {\\n    fontFamily: \'Arial\',\\n    fontSize: 30,\\n    color: \'#ffffff\',\\n    textAlignVertical: \'center\',\\n    textAlign: \'center\',\\n  },\\n});\\n\\n```\\n\\n### 6. Build and run the project\\n\\n#### 6.1. iOS\\n\\nThe iOS instructions are different than the Android instructions because run:ios does not build and run on a physical device. If using a physical device, you might have to configure code signing. I was able to do this by choosing my personal team (not a paid developer account) and removing the push notifications capability. I did have to go into settings to trust the developer certificate, but you shouldn\'t have this problem if you have a paid developer account. This is found in `Settings --\x3e General --\x3e VPN & Device Management`.\\n\\n![Screenshot](/img//blog/expo.png)\\n\\n```bash\\nexpo run:ios -d <my device id | device name>\\n```\\n\\n#### 6.2. Android\\n\\n```bash\\nexpo run:android\\n```"},{"id":"/2022/01/24/jest-flush-snapshot-timers","metadata":{"permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-24-jest-flush-snapshot-timers.md","source":"@site/blog/2022-01-24-jest-flush-snapshot-timers.md","title":"Jest: Flush Promises and Timers with Snapshot Tests","description":"I got a warning error which looked like:","date":"2022-01-24T00:00:00.000Z","formattedDate":"January 24, 2022","tags":[],"readingTime":0.68,"truncated":false,"authors":[],"prevItem":{"title":"RFC and RFT: Expo Starter Kit Instructions","permalink":"/logbook/blog/2022/02/13/expo-starter-kit-instructions"},"nextItem":{"title":"Jest: Accurate Snapshots When Loading from UseEffect","permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},"content":"I got a warning error which looked like:\\n\\n```error\\nWarning: It looks like you\'re using the wrong act() around your test interactions.\\nBe sure to use the matching version of act() corresponding to your renderer:\\n\\n// for react-dom:\\nimport {act} from \'react-dom/test-utils\';\\n// ...\\nact(() => ...);\\n\\n// for react-test-renderer:\\nimport TestRenderer from \'react-test-renderer\';\\nconst {act} = TestRenderer;\\n// ...\\nact(() => ...);\\n```\\n\\nthat has also been documented [here](https://github.com/testing-library/react-hooks-testing-library/issues/516). I was able to fix this by adding a similar function `flushPromisesAndTimersForSnapshot()` and the error messages went away.\\n\\n```typescript\\nimport { act } from \'@testing-library/react\';\\nimport renderer from \'react-test-renderer\';\\n\\nexport function flushPromisesAndTimers() {\\n  return act(\\n    () =>\\n      new Promise((resolve) => {\\n        setTimeout(resolve, 500);\\n        jest.runAllTimers();\\n      })\\n  );\\n}\\n\\nexport function flushPromisesAndTimersForSnapshot() {\\n  return renderer.act(\\n    () =>\\n      new Promise((resolve) => {\\n        setTimeout(resolve, 500);\\n        jest.runAllTimers();\\n      })\\n  );\\n}\\n```"},{"id":"/2022/01/20/jest-fixing-bad-snapshots-when-loading-data","metadata":{"permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md","source":"@site/blog/2022-01-20-jest-fixing-bad-snapshots-when-loading-data.md","title":"Jest: Accurate Snapshots When Loading from UseEffect","description":"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding flushPromisesAndTimers() before waitFor() a testID detection. The component looked something like this:","date":"2022-01-20T00:00:00.000Z","formattedDate":"January 20, 2022","tags":[],"readingTime":1.07,"truncated":false,"authors":[],"prevItem":{"title":"Jest: Flush Promises and Timers with Snapshot Tests","permalink":"/logbook/blog/2022/01/24/jest-flush-snapshot-timers"},"nextItem":{"title":"Jest: String Matching (Use RegEx)","permalink":"/logbook/blog/2022/01/19/jest-using-regex-in-string-matching"}},"content":"I had a useEffect which fetched data, and I noticed that the snapshot showed the loading spinner when the data was being fetched. I was able to fix this by adding `flushPromisesAndTimers()` before `waitFor()` a testID detection. The component looked something like this:\\n\\n```tsx\\nexport default function Component(props: Props) {\\n  const [error, setError] = useState<null | Error>(null);\\n  const [data, setData] = useState(null);\\n  const [loading, setLoading] = useState(true);\\n\\n  useEffect(() => {\\n    const setup = async () => {\\n      setLoading(true);\\n      try {\\n        const newData = await fetch(\'path/to/data\');\\n        setData(newData);\\n      } catch (newError) {\\n        setError(newError as Error);\\n        handleError(newError as Error);\\n      } finally {\\n        setLoading(false);\\n      }\\n    };\\n\\n    setup();\\n  }, []);\\n\\n  if (loading || !data) {\\n    return (\\n      <View style={[styles.container, styles.loading]}>\\n        <Loading />\\n      </View>\\n    );\\n  }\\n\\n  return (\\n    <View style={styles.container} testID=\\"ComponentTestID\\">\\n      <Text>{data}</Text>\\n    </View>\\n  );\\n}\\n\\n```\\n\\nand the test looked like this:\\n\\n```typescript\\ntest(\'should render correctly\', async () => {\\n  const tree = create(\\n    <Component />\\n  );\\n\\n  await flushPromisesAndTimers();\\n\\n  await waitFor(() => {\\n    expect(tree.toJSON()).toMatchSnapshot();\\n  });\\n});\\n```\\n\\nMy flush promises and timers function is from [this issue](https://github.com/facebookexperimental/Recoil/pull/1463) and listed on the [recoil docs](https://recoiljs.org/docs/guides/testing/#testing-recoil-state-with-asyncronous-queries-inside-of-a-react-component) and looks like this:\\n\\n```typesript\\n/**\\n * flushes promises and timers\\n *\\n * @export\\n * @return {*}\\n */\\nexport function flushPromisesAndTimers() {\\n  return act(\\n    () =>\\n      new Promise((resolve) => {\\n        setTimeout(resolve, 500);\\n        jest.runAllTimers();\\n      })\\n  );\\n}\\n```"},{"id":"/2022/01/19/jest-using-regex-in-string-matching","metadata":{"permalink":"/logbook/blog/2022/01/19/jest-using-regex-in-string-matching","editUrl":"https://github.com/robertjcolley/logbook/edit/main/blog/2022-01-19-jest-using-regex-in-string-matching.md","source":"@site/blog/2022-01-19-jest-using-regex-in-string-matching.md","title":"Jest: String Matching (Use RegEx)","description":"While trying to use result.getByText() to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say \\"1 providers.\\" The component looked like:","date":"2022-01-19T00:00:00.000Z","formattedDate":"January 19, 2022","tags":[],"readingTime":0.605,"truncated":false,"authors":[],"prevItem":{"title":"Jest: Accurate Snapshots When Loading from UseEffect","permalink":"/logbook/blog/2022/01/20/jest-fixing-bad-snapshots-when-loading-data"}},"content":"While trying to use `result.getByText()` to find a component, I found that it was not working. My test case was a regression test to make sure that a component could not say \\"1 providers.\\" The component looked like:\\n\\n```tsx\\n <Typography\\n  variant=\\"caption\\"\\n  color=\\"textSecondary\\"\\n  data-testid=\\"approved-by-provider-count\\"\\n>\\n  {t(\'Approved by\')} {abbrNum(supporters.length, 1)}{\' \'}\\n  {supporters.length === 1 ? t(\'provider\') : t(\'providers\')}\\n</Typography>\\n```\\n\\nand the snapshot was:\\n\\n```html\\n<span\\n  class=\\"MuiTypography-root MuiTypography-caption MuiTypography-colorTextSecondary\\"\\n  data-testid=\\"approved-by-provider-count\\">\\n    Approved by\\n\\n    1\\n\\n    provider\\n</span>  \\n```\\n\\nI couldn\'t figure out the newlines and spaces in my expect statement. I tried to use a regex to match the string, and it worked correctly! `/s` matches any whitespace character, including newlines.\\n\\n```typescript\\nconst expected = /Approved by\\\\s*1\\\\s*provider/;\\nconst expected1 = /Approved by\\\\s*1\\\\s*providers/;\\nexpect(result.queryByText(expected1)).not.toBeInTheDocument();\\nexpect(result.getByText(expected)).toBeInTheDocument();\\n```"}]}')}}]);