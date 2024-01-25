import { FC } from 'react'

import s from './ContactForm.module.scss'
import { Input } from '../ui/Input/Input'
import { TextArea } from '../ui/TextArea/TextArea'

interface IProps
	extends React.DetailedHTMLProps<
		React.FormHTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	> {}

export const ContactForm: FC<IProps> = (props) => {
	
   const handleSubmit = () => {}
   
   return (
		<form onSubmit={handleSubmit} {...props} className={s.form}>
			<Input type='text' placeholder='Name' />
			<Input type='text' placeholder='E-mail' />
			<TextArea placeholder='Message' />
         <button className={s.subBtn} type='submit'>Send</button>
		</form>
	)
}
