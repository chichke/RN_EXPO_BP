**Step 1 : get the code** <br/>
git clone or use the **"Use this template button"**

**Step 2 : change your app name** <br/>
Please change your app name updating `app.json`.

**Step 3 : setup your Firebasee config** <br/>
Please change your firebase configuration in `./firebase/config.json`.
``` 
const firebaseConfig = {
    apiKey: 'TODO',
    authDomain: 'TODO',
    projectId: 'TODO',
    storageBucket: 'TODO',
    messagingSenderId: 'TODO',
    appId: 'TODO',
    measurementId: 'TODO',
};
```

+ For firebase config take the web configuration of [this guide](https://support.google.com/firebase/answer/7015592?hl=en)

+ If you don't have expo cli installed follow [this guide](https://docs.expo.io/get-started/installation/)

**Step 4 : start your new project** <br/>
```
yarn
yarn start
```
