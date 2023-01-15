import { Link } from "react-router-dom";

export default function CodeCard ({
    key, codeId, name, stack
}) {
    return (
        <Link to={`/code/`}>
            <li class="CodeCard">
                <div class="code_name"><h3>{name}</h3></div>
            </li>
        </Link>
    )
}