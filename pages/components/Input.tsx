import React from "react";
import { TextInput } from "evergreen-ui";

type Props = {};

function Input({}: Props) {
  return (
    <TextInput name="text-input-name" placeholder="Text input placeholder..." />
  );
}

export default Input;
