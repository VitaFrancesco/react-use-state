import style from './Card.module.css'

export default function Card({ language }) {
    if (language) {
        return (
            <div className={style.card}>
                <h2>{language.title}</h2>
                <p>{language.description}</p>
            </div>
        )
    } else {
        console.log('ciao')
    }
}