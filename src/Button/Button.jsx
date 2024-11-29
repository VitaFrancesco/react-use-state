import style from './Button.module.css'

export default function Button({ language, callback, id }) {

    return (
        <button onClick={callback()}>{language}</button>
    )
}