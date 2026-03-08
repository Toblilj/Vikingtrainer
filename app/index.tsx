//här renderas UI för min startskärm.

import { RusticBackground } from "@/components/RusticBackground";
import { useNavigation, useRouter } from "expo-router";
import { Text, View } from "react-native";
import RusticButton from "../components/RusticButton";

let backgroundColor;
let themeTextstyle;
let colorScheme = themeTextstyle;
let style;
const navigation = useNavigation<any>;

export default function Index() {
  const router = useRouter();
  const handleStart = () => {
    router.push("/workout");
  };
  return (
    <>
      <RusticBackground>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 600,
          }}
        >
          <Text style={{ color: "green", fontSize: 24 }}>Viking trainer!</Text>
          <Text style={{ color: "green", fontSize: 24 }}>
            {" "}
            Choose your workout below!
          </Text>

          <RusticButton
            onPress={handleStart}
            style={{ backgroundColor: "rgba(45, 74, 107, 0.6)", marginTop: 50 }} // matcha bakgrund om du vill
          >
            Start Workout
          </RusticButton>
        </View>
      </RusticBackground>
    </>
  );
}

//startskärm-läggs här
export function HeaderView() {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* <Text style={{styles.text,themeTextstyle}}>Color scheme:{colorScheme}</Text> */}

      <Text style={{ color: "#010006ff", fontSize: 30, fontWeight: "bold" }}>
        Viking Trainer!
      </Text>
      <Text style={{ color: "#010006ff", fontSize: 30, fontWeight: "bold" }}>
        Choose your workout down below!
      </Text>
    </View>
  );
}

// knappar för navigation läggs här
// export  function IntervalButton(){
// return (
// <View style= {{
//   padding:20,
//   backgroundColor:'#ebeaf0ff',

//         justifyContent: "center",
//         alignItems: "center",
//   }}>

// <Text>Interval Runing</Text>
//   </View>
// );
// };

interface RusticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

//import { RusticBackground } from './components/RusticBackground';
// import { RusticButton } from './components/RusticButton';

// /src/app/components/RusticBackground.tsx

// button
// /src/app/components/RusticButton.tsx

/*
  return (
    <View >
      <RusticBackground style={{flex:1}}>
      <HeaderView />
      <IntervalButton />
      </RusticBackground>
    </View>
  )*/
