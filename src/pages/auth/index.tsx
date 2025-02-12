import { Alert, Button, Grid2, Input, TextField } from "@mui/material"
import { Typography } from "../../components/Typography"
import css from "./AuthPage.module.scss"
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { signInUserRequest, UserDataRequest } from "../../ducks/auth/user";

type FieldId = 'login' | 'password';

interface InputEvent extends HTMLInputElement {
  id: FieldId;
}

const initialRef: UserDataRequest = {login: "", password: ""}


export const AuthPage = () => {
  const dispatch = useDispatch()
  const loginDataRef = useRef(initialRef)

  const [helperText, setHelperText] =useState('')

  const handleChangeInput = (event: ChangeEvent<InputEvent>) => {
    if(helperText) { setHelperText('') }
    loginDataRef.current[event.currentTarget.id] = event.currentTarget.value;
  }

  const handleSignIn = () => {
    if(loginDataRef.current.login && loginDataRef.current.password){
      dispatch(signInUserRequest(loginDataRef.current))
    }else{
      setHelperText("Заполните все поля")
    }
  }

  return(
    <div className={css.window}>
      {helperText && <Alert severity="warning">{helperText}</Alert>}
      <Grid2 direction={"column"}  alignItems={"center"} container>
        <Grid2>
            <Typography variant="bodyText">Вход</Typography>
        </Grid2>
        <Grid2>
          <TextField
          id="login"
          label="Логин"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <TextField
          id="password"
          label="Пароль"
          maxRows={100}
          onChange={handleChangeInput}
        />
        </Grid2>
        <Grid2>
          <Button onClick={handleSignIn}>Войти</Button>
          <Button>От души <br/> зарегистрироваться</Button>
        </Grid2>
      </Grid2>
    </div>
  )
}