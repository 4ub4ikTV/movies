import {useSelector} from "react-redux";


import css from './GenreBadge.module.css'

const GenreBadge = ({children}) => {

    const {genres} = useSelector(state => state.genre);

    const badges = [];
    badges.length = 1;

    for (let id of children) {
        const find = genres.find(value => value.id === id);
        badges.push(find?.name);
    }

    return (

        <div className={css.BadgesWrapper}>
            {badges.map((badge, index) => <div key={index} className={css.badge}>{badge}</div>)}
        </div>

    )
}

export {
    GenreBadge
};