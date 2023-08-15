import { Formik, useField } from "formik";
import react from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledTextInput from "../components/StyledTextInput";
import FormikInputValue from "../components/FormikInputValue";
import { loginValidationScheme } from "../validationSchemas/Login";

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});
const LogInPage = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={loginValidationScheme}
    >
      {({ handleSubmit, errors }) => (
        <View style={styles.form}>
          <FormikInputValue name="email" placeholder="Email" />
          {/* {errors.email && <Text>{errors.email}</Text>} */}
          <FormikInputValue secureTextEntry name="password" placeholder="Contraseña" />
          {/* {errors.password && <Text>{errors.password}</Text>} */}
          <Button title="Iniciar sesión" onPress={handleSubmit} />
        </View>
      )}
    </Formik>//buscar react hooks form 
  );
};
export default LogInPage;

// import React, { useState } from "react";
// import { View, TextInput, Button, StyleSheet } from "react-native";
// import StyledTextInput from "../components/StyledTextInput";

// const LogInPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = () => {
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   const styles = StyleSheet.create({
//     form: {
//       margin: 12,
//     },
//   });
//   return (
//     <View style={styles.form}>
//       <StyledTextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <StyledTextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default LogInPage;
