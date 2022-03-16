import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import COLORS from "../consts/color";
import STYLES from "../styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import InputText from "../components/InputText";
const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secureEntry, setSecureEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const loginUser = () => {
    setLoading(true);
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        setLoading(false);

        console.log(response);
      })
      .catch((error) => {
        setLoading(false);

        console.log(error);
      });
  };

  const strongRegex = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );

  useEffect(() => {
    if (!strongRegex.test(email)) {
      if (email.length > 1) {
        setEmailError("Email is required");
      }
    } else {
      setEmailError("");
    }
    if (password) {
      if (password.length < 6) {
        setPasswordError("Password should be 6 characters");
      } else {
        setPasswordError("");
      }
    }
  }, [email, password]);

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView>
        <View>
          <Image
            style={styles.logo}
            source={require("../assests/Images/logo.png")}
          />
        </View>

        <View style={styles.container}>
          <View style={STYLES.inputContainer}>
            <InputText
              placeholder="Email"
              style={STYLES.input}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <Text style={styles.validation}>{emailError}</Text>
          <View style={STYLES.inputContainer}>
            <InputText
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry={secureEntry}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
              {secureEntry ? (
                <Ionicons name="eye" size={28} color={COLORS.primary} />
              ) : (
                <Ionicons name="eye-off" size={28} color={COLORS.primary} />
              )}
            </TouchableOpacity>

            {/* {passwordError.length > 0 && <Text>{passwordError}</Text>} */}
          </View>
          <Text style={styles.validation}>{passwordError}</Text>

          <View style={STYLES.btnPrimary}>
            {!loading ? (
              <Button onPress={loginUser} title="Sign In" color="#787978" />
            ) : (
              <ActivityIndicator />
            )}
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={STYLES.btnSecondary}>
              <Image
                style={STYLES.btnImage}
                source={require("../assests/google.png")}
              />
              <Text style={styles.social}>Sign in Google </Text>
            </View>
            <View style={{ width: 10 }}></View>

            <View style={STYLES.btnSecondary}>
              <Image
                style={STYLES.btnImage}
                source={require("../assests/facebook.png")}
              />
              <Text style={styles.social}>Sign in facebook</Text>
            </View>
          </View>
          <View style={styles.newAccount}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.btnText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgot}>
            <TouchableOpacity>
              <Text style={styles.btnText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 400,
  },
  container: {
    paddingHorizontal: 20,
  },
  validation: {
    color: "red",
  },
  social: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.primary,
  },
  newAccount: {
    height: 50,
    borderWidth: 1,
    borderColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 15,
    flex: 1,
    flexDirection: "row",
  },
  forgot: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  btnText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "600",
  },
});
export default SignInScreen;
