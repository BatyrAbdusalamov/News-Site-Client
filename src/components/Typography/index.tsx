import React, { FC } from "react"
import css from "./Typography.module.scss"

type VariantTypography = 'buttonText' | 'headerText' | 'bodyText';

interface TypographyProps{
  variant: VariantTypography;
  children: string;
}
export const Typography: FC<TypographyProps> = ({ variant, children }) => {
  return(
    <span className={css?.[variant]}>{children}</span>
  ) 
}