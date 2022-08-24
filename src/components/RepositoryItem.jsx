export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name || "default"}</strong>
            <p>{props.repository.description}</p>

            <a target="_blank" href={props.repository.html_url}>Acessar Respositório</a>
        </li>
    )
}