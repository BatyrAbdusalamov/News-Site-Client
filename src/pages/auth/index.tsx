import { Grid2, Input, TextField } from "@mui/material"
import { Typography } from "../../components/Typography"
import css from "./AuthPage.module.scss"
import { useState } from "react"

export const AuthPage = () => {
  const [helperText, setHelperText] = useState(null)
  return(
    <div className={css.window}>
      <Grid2 direction={"column"}  alignItems={"center"} container>
        <Grid2>
            <Typography variant="bodyText">Войти</Typography>
        </Grid2>
        <Grid2>
          <TextField
          error={helperText? true:undefined}
          id="outlined-error-helper-text"
          label="Логин"
          helperText={helperText}
        />
        </Grid2>
        <Grid2>
          <TextField
          error={helperText? true:undefined}
          id="outlined-error-helper-text"
          label="Пароль"
          helperText={helperText}
        />
        </Grid2>
      </Grid2>
    </div>
  )
}