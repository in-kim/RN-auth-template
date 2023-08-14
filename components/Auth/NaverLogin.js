import {View, Button} from "react-native";

import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

export default function NaverLogin(){
  const handleDeepLink = (event) =>{
    console.log('event', event);
  }
  const handleLogin = async () => {
    const loginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.EXPO_PUBLIC_NAVER_CLIENTID}&redirect_uri=http://localhost:8081`;
    const url = Linking.addEventListener('url', handleDeepLink);

    console.log('url', url)
    // const result = await WebBrowser.openBrowserAsync(url);

    // console.log('result', result);
  }



  return (
    <View>
      <Button title="Naver Login" onPress={handleLogin} />
    </View>
  )
}
