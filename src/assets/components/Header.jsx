import texts from '../texts.json';

export default function Header(){
    return (
        <div>
            <section className="header">
                <header className="header-header"> 
                    {texts.header.title}
                    </header>
                    <h className="header-text">
                        {texts.header.body}
                    </h>
            </section>
        </div>
    )
};