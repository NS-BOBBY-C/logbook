# Developing with ViroCommunity/viro Locally

## 1. Set up ViroCommunity/viro

### 1.1. Clone ViroCommunity/viro repo

```bash
gh repo clone ViroCommunity/viro
```

### 1.2. Install dependencies

```bash
cd viro
npm install
```

## 2. Set up the Starter Kit

### 2.1. Clone the starter kit

```bash
gh repo clone ViroCommunity/starter-kit
```

### 2.2. Install dependencies

```bash
cd starter-kit
npm install
```

## 3. (optional) Make changes viro

Make changes to the `viro` folder to fix a bug, add something new, etc.

## 4. Build viro

Ensure that your typescript compiles by running the build command.

```bash
# from viro/
npm run build
```

## 5. Run the "prepare_release.sh" script

This script will create a tarball of the files and binaries needed in the viro folder for the dependency to work correctly.

```bash
# from viro/
./prepare_release.sh
```

You should have a tarball in the viro folder called `viro-community-react-viro-<package.json version>.tgz`.

## 6. Install the tarball

```bash
cd starter-kit
npm install ../viro/viro-community-react-viro-<package.json version>.tgz
```

## 7. Build the starter kit

### iOS

If developing on ios, run `pod install` in the `ios` folder and then run the starter kit from xCode.

### Android

If developing on android, run `npm run android` with a device connected.
