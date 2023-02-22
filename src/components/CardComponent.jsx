const CardComponent = (props) => {
    return (
        <article>
            <figure>
                <img src={props.imageUrl} alt="" />
            </figure>
            <div className="info mt-5">
                <h3 className="title text-xl font-bold">

                    {props.title.length > 40 ? `${props.title.slice(0, 40)}...` : props.title.slice(0, 60)}
                </h3>
                <div className="meta">
                    Posted by {props.userIdReceived === 1 ? 'Ram' : ''}
                    {props.userIdReceived === 2 ? 'Shyam' : ''}
                    {props.userIdReceived === 3 ? 'Hari' : ''}
                    {props.userIdReceived === 4 ? 'Geeta' : ''}
                </div>
                <p className="text text-slate-500 my-5">
                    {props.text}
                </p>
                <a href={props.link}>
                    <button className="bg-white shadow px-5 py-2 rounded">{props.btnText}</button>
                </a>
            </div>
        </article>
    )
}

export default CardComponent;