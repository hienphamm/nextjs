import React from "react";
import { TextInput } from "evergreen-ui";

type Props = {};

function Input({}: Props) {
  return (
    <TextInput
      size={"large"}
      name="text-input-name"
      placeholder="Type to search..."
    />
  );
}

export default Input;
