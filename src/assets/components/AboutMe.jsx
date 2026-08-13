import texts from '../texts.json';

export default function Aboutme(){
    return (
        <div>
            <section className="aboutme">
                <header className="aboutme-header"> 
                    {texts.aboutme.title}
                    </header>
                    <p className="aboutme-text">
                        {texts.aboutme.body}
                    </p>
            </section>
        </div>
    )
};