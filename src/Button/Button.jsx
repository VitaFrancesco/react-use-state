import style from './Button.module.css'

export default function Button(language) {
    const { title, description } = language;
    return (
        <button>{title}</button>
    )
}