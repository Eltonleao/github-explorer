import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: "lorem",
    description: "lorem ispum dolor sit amet",
    link: "https://google.com"
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);
 
    return (
        <section className="repository-list">
            <h1>Lista de respositórios</h1>
            
            <u>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}></RepositoryItem>
                })}
            </u>
        </section>
    )
}