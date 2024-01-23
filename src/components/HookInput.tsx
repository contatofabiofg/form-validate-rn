import {Controller} from 'react-hook-form';
import {Input, TextError, TextH2} from '../StyledComponents';

export function HookInput({control, label, reg, erro, ...props}) {
  return (
    <>
      <TextH2 style={{marginVertical: 5}}>{label}</TextH2>
      <Controller
        control={control}
        {...reg}
        render={({field}) => (
          <Input
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            {...props}
          />
        )}
      />
      <TextError>{erro}</TextError>
    </>
  );
}
