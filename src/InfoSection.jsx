import Button from './Button/Button'
import languages from './data/languages'

export default function InfoSection() {
    return (
        <main>
            <div className="menu">
                {
                    languages.map(element => {
                        <Button key={element.id} language={element} />
                    })
                }
            </div>
        </main>
    )
};