import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  Button, 
  Keyboard, 
  ToastAndroid
} from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

// username: "xagustin93",
// password: "123456"
export function LoginForm() {
  const { login, auth } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue) => {
      const { username, password } = formValue

      if(username !== user.username || password !== user.password){
        return ToastAndroid.show('El usuario o contraseña son incorrectos', ToastAndroid.SHORT);
      }
  
      login(userDetails);
    } 
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title="Entrar"
        onPress={formik.handleSubmit}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  )
}

function initialValues(){
  return {
    username: "xagustin93",
    password: "123456"
  }
}

function validationSchema(){
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria")
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 20
  }
})