import './OneHero.css';

export default function OneHero({data2}) {
    return (
        <div className='Heros-Cards'>
            {data2.map((hero , index) => (
                <div className='OneHeroCard' key={index}>
                    <img className='Heroimg' src={hero.image} alt="Hero image" />
                    <span className='Top-x'>{hero.top}</span>
                    <div className='Hero-imfo'>
                        <h2>{hero.name}</h2>
                        <p>{hero.specialization}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
