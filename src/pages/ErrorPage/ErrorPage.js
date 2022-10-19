
const ErrorPage = (props) => {

    return(
        <>
            <div>Error Page</div>
            <h2>{`Error: ${props.error}`}</h2>
        </>
    );
}

export default ErrorPage;