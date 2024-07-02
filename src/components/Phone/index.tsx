import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react'

type E164Number = string & { __tag: "E164Number" };

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState<E164Number | undefined>(undefined);

  return (
    <PhoneInput
    inputProps={{
      name: 'phone',
      required: true,
      autoFocus: true
    }}
      placeholder="Digite o numero de telefone"
      country='br'
      value={phoneNumber}
    />
  )
}

export default Phone