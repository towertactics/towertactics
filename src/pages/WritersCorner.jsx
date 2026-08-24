import texts from '../assets/texts.json';

export default function WritersCorner(){
    return (
        <div>
            <section className="writerscorner">
                <header className="writerscorner-header"> 
                    {texts.aboutme.title}
                    </header>
                    <p className="writerscorner-text">
                        {texts.aboutme.body}
                    </p>
            </section>
        </div>
    )
};