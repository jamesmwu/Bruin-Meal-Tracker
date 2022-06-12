import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import moment from "moment";

function CalculationScreen(Props) {
  //   console.log(Props);
  const meals = Props.route.params.numMeals;
  const mealPlan = Props.route.params.mealPlan;

  //Dates   //End of quarter is March 24, 2022 for Spring.
  const given = moment("2022-06-10", "YYYY-MM-DD");
  const current = moment().startOf("day");

  //Difference in number of weeks
  //Returns this way: given date - current date = weeks remaining
  var weeksBetween = moment.duration(given.diff(current)).asWeeks();
  console.log(`Weeks between: ${Math.round(weeksBetween)}`);

  //Remaining meals expected
  var mealsExpected;

  //Amount of meals you should have:
  if (mealPlan == 11) {
    mealsExpected = 11 * weeksBetween;
  } else if (mealPlan == 14) {
    mealsExpected = 14 * weeksBetween;
  } else {
    mealsExpected = 19 * weeksBetween;
  }

  //Difference in actual amount of meals and expected meals.
  //Positive number means you are over, negative means you are under.
  var difference = Math.round(meals - mealsExpected);
  var tooMany;

  //Text color flavor cuz why not
  var color;

  if (difference >= 0) {
    tooMany = "OVER";
    color = "#37ff00";
  } else {
    tooMany = "UNDER";
    difference *= -1;
    color = "red";
  }

  //Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#0f57f2",

      //AlignItems is horizontal alignment
      alignItems: "flex-start",
      //JustifyContent is vertical alignment
      justifyContent: "center",
      padding: 20,
    },

    horizontalContainer: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingLeft: 20,
      paddingTop: 50,
    },

    mealInfo: {
      color: "white",
      fontSize: 20,
      padding: 20,
    },

    mealNumber: {
      color: "white",
      fontSize: 20,
      paddingTop: 10,
      paddingLeft: 20,
    },

    overUnder: {
      color: color,
      fontSize: 30,
      paddingTop: 10,
      paddingLeft: 20,
      fontWeight: "bold",
    },

    button: {
      backgroundColor: "yellow",
      borderColor: "black",
      borderRadius: 5,
      borderWidth: 2,
      padding: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.mealInfo}>
        With {meals} meals left and a {mealPlan}P meal plan, you are
      </Text>
      <Text style={styles.mealNumber}>{difference} meals </Text>
      <Text style={styles.overUnder}>{tooMany} </Text>
      <Text style={styles.mealNumber}>
        The expected amount for your meal plan.
      </Text>

      <View style={styles.horizontalContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Return pressed");
            Props.navigation.navigate("HomeScreen", {});
          }}
        >
          <Text>Return</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CalculationScreen;
