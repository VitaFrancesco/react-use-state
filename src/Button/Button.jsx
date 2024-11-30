import style from './Button.module.css'

export default function Button({ title, callback, active }) {
    return (
        <button onClick={callback} className={active ? style.active : ''}>{title}</button>
    )
}