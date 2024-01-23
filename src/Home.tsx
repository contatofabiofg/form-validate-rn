import {HookInput} from './components/HookInput';
import {useForm, useFieldArray} from 'react-hook-form';
import {BotaoFull, Container, TextH1} from './StyledComponents';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {FlatList, Text} from 'react-native';
import {useEffect} from 'react';

export function Home() {
  const createUsuarioSchema = z.object({
    nome: z.string().min(1, {message: 'Nome obrigatório'}),
    endereco: z.string().min(1, {message: 'Endereço obrigatório'}),
    telefone: z.coerce
      .number()
      .refine(value => value.toString().length === 11, {
        message: 'O número de telefone deve ter 11 dígitos.',
      }),
    emails: z
      .array(
        z.object({
          email: z
            .string()
            .email({message: 'Você não deve deixar seu e-mail vazio.'}),
        }),
      )
      .min(1, {message: 'Email obrigatório'}),
  });

  const {control, handleSubmit, register, formState} =
    useForm<IFormularioCriarUsuario>({
      resolver: zodResolver(createUsuarioSchema),
    });

  const {fields, append, remove} = useFieldArray<IFormularioCriarUsuario>({
    control,
    name: 'emails',
  });

  function criarUsuario(data: any) {
    console.log(data);
  }

  function adicionarEmail() {
    append({
      email: '',
    });
  }

  useEffect(() => {
    adicionarEmail();
  }, []);

  type IFormularioCriarUsuario = z.infer<typeof createUsuarioSchema>;

  return (
    <Container>
      <TextH1>Form-validate</TextH1>

      <HookInput
        control={control}
        reg={{...register('nome')}}
        label="Nome"
        placeholder="Nome"
        erro={formState.errors.nome?.message}
      />
      <HookInput
        control={control}
        reg={{...register('endereco')}}
        label="Endereço"
        placeholder="Endereço"
        erro={formState.errors.endereco?.message}
      />
      <HookInput
        control={control}
        reg={{...register('telefone')}}
        label="Telefone (com DDD)"
        placeholder="xx-xxxxx-xxxx"
        erro={formState.errors.telefone?.message}
      />
      <FlatList
        data={fields}
        renderItem={({item, index}) => (
          <HookInput
            control={control}
            key={item.id}
            reg={{...register(`emails.${index}.email`)}}
            label="Email"
            placeholder="email@email.com"
            erro={
              formState.errors.emails && formState.errors.emails[index]
                ? formState.errors.emails[index]?.email.message
                : undefined
            }
          />
        )}></FlatList>
      <BotaoFull onPress={adicionarEmail}>
        <Text style={{color: 'white'}}>adicionar Email</Text>
      </BotaoFull>
      <BotaoFull onPress={handleSubmit(criarUsuario)}>
        <Text style={{color: 'white'}}>Salvar</Text>
      </BotaoFull>
    </Container>
  );
}
