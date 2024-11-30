import Button from './Button/Button'
import Card from './Card/Card'
import languages from './data/languages'
import style from './InfoSection.module.css'
import { useState } from 'react'

export default function InfoSection() {
    const [currentId, setCurrentId] = useState(null);

    function currentLanguage(id) {
        currentId === id ? setCurrentId(null) : setCurrentId(id);
    }

    return (
        <main>
            <section className='container'>
                <div className={style.menu}>
                    {
                        languages.map(element => {
                            return <Button key={element.id} id={element.id} title={element.title} callback={() => currentLanguage(element.id)} active={element.id === currentId ? true : false} />
                        })
                    }
                </div>
                <Card content={languages.find((el) => el.id === currentId)} />
            </section>
        </main>
    )
};