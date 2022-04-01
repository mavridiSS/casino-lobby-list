import React, { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

interface OwnProps {
  text: string;
  active?: boolean;
}

type Props = OwnProps &
  React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export default function Button({ text, active = false, ...other }: Props) {
  return (
    <button className={clsx(styles.button, active && styles.active)} {...other}>
      {text}
    </button>
  );
}
