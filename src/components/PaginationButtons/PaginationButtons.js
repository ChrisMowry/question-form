
const PaginationButtons = (props) => {
    const { currentPage, totalPages, handleClick } = props;

    return (
        <div className='pageing-buttons'>
            <button onClick={() => handleClick(-1)}>Previous</button>
            <div>{ `Page ${ currentPage + 1 } of ${ totalPages }`}</div>
            <button onClick={() => handleClick(1)}>Next</button>
        </div>
    );
}

export default PaginationButtons;