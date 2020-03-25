import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // caso esteja no Android, colocar configure({ host: ip })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
