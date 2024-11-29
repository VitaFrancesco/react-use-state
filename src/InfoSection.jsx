import Button from './Button/Button'
import Card from './Card/Card'
import languages from './data/languages'
import style from './InfoSection.module.css'
import { useState } from 'react'

export default function InfoSection() {
    const { selectBut, setSelectbut } = useState(null);
    function writeCard() {
        const language = languages.find((el) => (el.id === selectBut));
        if (language) {
            return language;
        } else {
            return null
        }
    }

    return (
        <main>
            <section className='container'>
                <div className={style.menu}>
                    {
                        languages.map(element => {
                            return <Button key={element.id} id={element.id} language={element.title} callBack={setSelectbut(element.id)} />
                        })
                    }
                </div>
                <Card language={writeCard()} />
            </section>
        </main>
    )
};