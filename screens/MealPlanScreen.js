import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

function MealPlanScreen(Props) {
  // console.log(Props.route.params.numMeals);
  // console.log(Props);

  return (
    <View style={styles.container}>
      <Text style={styles.mealPlanText}>Select your meal plan:</Text>

      <View style={styles.horizontalContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("11P pressed");
            Props.navigation.navigate("CalculationScreen", {
              numMeals: Props.route.params.numMeals,
              mealPlan: 11,
            });
          }}
        >
          <Text>11P</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("14P pressed");
            Props.navigation.navigate("CalculationScreen", {
              numMeals: Props.route.params.numMeals,
              mealPlan: 14,
            });
          }}
        >
          <Text>14P</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("19P pressed");
            Props.navigation.navigate("CalculationScreen", {
              numMeals: Props.route.params.numMeals,
              mealPlan: 19,
            });
          }}
        >
          <Text>19P</Text>
        </TouchableOpacity>
      </View>
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

  mealPlanText: {
    color: "white",
    fontSize: 20,
  },

  horizontalContainer: {
    flexDirection: "row",
    width: 350,
    padding: 20,
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "yellow",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 20,
  },
});

export default MealPlanScreen;
