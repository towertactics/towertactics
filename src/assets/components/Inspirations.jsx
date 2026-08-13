import texts from '../texts.json';

export default function Inspirations(){
    return (
        <div>
            <section className="inspirations">
                <header className="inspirations-header"> 
                    {texts.inspirations.title}
                    </header>
                    <h className="inspirations-text">
                        {texts.inspirations.body}
                    </h>
            </section>
        </div>
    )
};