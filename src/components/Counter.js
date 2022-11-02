const Counter = ({countPlus}) => {
    const handleClick = () => {
        countPlus()
    }


    return (
        <>
        <button onClick={handleClick}>Plus 1</button>
        </>
    )
}

export default Counter