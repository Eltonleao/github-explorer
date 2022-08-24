import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "lorem",
    description: "lorem ispum dolor sit amet",
    link: "https://google.com"
}

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            
            <u>
                <RepositoryItem repository={repository}></RepositoryItem>
            </u>
        </section>
    )
}