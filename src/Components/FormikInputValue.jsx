import { Formik, useField } from "formik";
import react from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledTextInput from "./StyledTextInput";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize:15,
    marginBottom:20,
    marginTop:-5
  },
  form: {
    margin: 12,
  },
});
const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
      error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};
export default FormikInputValue;
