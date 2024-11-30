import style from './Card.module.css'

export default function Card({ isOpen, content }) {

    return (
        <div className={content ? style.card : style.dNone}>
            <h2>{content ? content.title : ''}</h2>
            <p>{content ? content.description : ''}</p>
        </div>
    )
} 