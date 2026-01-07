import { Link } from 'react-router-dom';

function Lien(props
) {

    return (
        <li className="list-none">
            <Link to={props.to} className="px-5 pt-1 hover:bg-mypink active:bg-mypink pb-2.5 hover:mb-7 active:pb-5 transition-all duration-300 text-myblack font-semibold text-clamp-legend line-clamp-legend">
            {props.title}
            </Link>
        </li>

    )
}

export default Lien;