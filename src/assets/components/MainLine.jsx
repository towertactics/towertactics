import texts from '../texts.json';

export default function MainLine(){
    return (
        <div>
            <section className="mainline">
                <header className="mainline-header"> 
                    {texts.mainline.title}
                    </header>
                    <h className="mainline-text">
                        {texts.mainline.body}
                    </h>
            </section>
        </div>
    )
};