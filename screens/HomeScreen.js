import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen(Props) {
  const [text, changeText] = useState(null);
  const [errorMessage, changeErrorMessage] = useState(null);

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.headerText,
          color: errorMessage ? "red" : "yellow",
        }}
      >
        Bruin Meal Tracker
      </Text>
      <TextInput
        style={styles.textField}
        value={text}
        onChangeText={changeText}
        onSubmitEditing={() => {
          if (isNaN(parseInt(`${text}`))) {
            console.log("you messed up");
            changeErrorMessage("Please enter a valid number.");
          } else {
            changeErrorMessage(null);
            Props.navigation.navigate("MealPlanScreen", {
              numMeals: parseInt(`${text}`),
            });
          }
        }}
        placeholder="Enter your current number of meals"
        placeholderTextColor={"black"}
      />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0f57f2",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontSize: 35,
    padding: 20,
    color: "yellow",
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: "#585858",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },

  textField: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
  },

  errorMessage: {
    color: "white",
    padding: 20,
  },
});

export default HomeScreen;
