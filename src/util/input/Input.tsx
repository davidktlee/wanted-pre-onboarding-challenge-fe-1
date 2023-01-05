import * as S from './InputStyle'

interface PropsType {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  type: string
  name?: string
  value?: string
  placeholder?: string
  required?: boolean
  width?: string
  height?: string
  radius?: string
  checked?: boolean
}

const Input = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  required,
  width,
  height,
  radius,
  checked,
}: PropsType) => {
  return (
    <S.Input
      required={required}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      radius={radius}
      checked={checked}
    />
  )
}
export default Input
