export default function MovieDisplay({ movie }) {
    const loaded = () => {
        return (
            <>
                <div class="card">
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Genre}</h2>
                    <div class="container">
                        <img src={movie.Poster} alt={movie.Title} />
                        <h2>{movie.Year}</h2>
                    </div>
                </div>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie Found</h1>
    }
    return movie && movie.Title ? loaded() : loading();
}