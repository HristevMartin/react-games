import GameCatalog from "./GameCatalog/GameCatalog";

const ErrorPage = ({
    children
}) => {
    return (
        <section id="catalog-page">
            <h1>Page not Found</h1>

            {children && <p className="no-articles">{children}</p>}
        </section>
    )
}

export default ErrorPage;