import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import React from 'react';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
};

const renderSelectField = ({
  children,
  label,
  input,
  meta: { touched, invalid, error
  }, ...custom
}) => {
  return (
    <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">Age</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: 'age-native-simple'
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )
};

export default renderSelectField;
