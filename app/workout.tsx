import { RusticBackground } from "@/components/RusticBackground";
import RusticButton from "@/components/RusticButton";
import { createWorkout } from "@/logic/intervals";
import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, View } from "react-native";

export default function Workout() {
  const router = useRouter();

  const [runMeters, setRunMeters] = useState("");
  const [walkMeters, setWalkMeters] = useState("");
  const [rounds, setRounds] = useState("");

  const handleStart = () => {
    //lägg in api call här?
    console.log("start workout");
    const config = {
      runMeters: Number(runMeters),
      walkMeters: Number(walkMeters),
      rounds: Number(rounds),
    };
    //skapar passet här?
    const workout = createWorkout(config);

    // router.push({
    //   pathname: "Workout",
    //   params: {
    //     runMeters: runMeters,
    //     walkMeters: walkMeters,
    //     rounds: rounds,
    //   },
    // });
  };

  return (
    <View>
      <>
        <RusticBackground>
          style=
          {/* {{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 600,
          }} */}
          <RusticButton
            onPress={handleStart}
            style={{ backgroundColor: "rgba(45, 74, 107, 0.6)", marginTop: 50 }} // matcha bakgrund om du vill
            children={undefined}
          ></RusticButton>
        </RusticBackground>
      </>
      <TextInput
        placeholder="Run meters"
        value={runMeters}
        onChangeText={setRunMeters}
      />

      <TextInput
        placeholder="Walk meters"
        value={walkMeters}
        onChangeText={setWalkMeters}
      />

      <TextInput placeholder="Rounds" value={rounds} onChangeText={setRounds} />

      <RusticButton onPress={handleStart}>Start Workout</RusticButton>
    </View>
  );
}
