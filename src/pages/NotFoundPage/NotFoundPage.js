import css from './NotFoundPage.module.css'

const NotFoundPage = () => {

    return (
        <div className={css.NotFound}>
            <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLKRalXyKADQvHBFs5mwGkaOebkP2jN6D-A&usqp=CAU"}
                alt={'notFound'} className={css.NotImg}/>
        </div>
    )
}

export {
    NotFoundPage
}