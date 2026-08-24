import texts from '../texts.json';

export default function MainLine(){
    return (
        <div>
            <section className="home">
                <header className="home-header"> 
                    {texts.home.title}
                    </header>
                    <header className='home-subheader'>
                        {texts.home.subtitle}
                    </header>
                    <h className="home-text">
                        {texts.home.body}
                    </h>
            </section>
        </div>
    )
};