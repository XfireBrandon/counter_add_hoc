const BackButton = ({resetButton}) => {

    const handleClick = () => {
        resetButton()
    }

    return (
        <>
        <h1>Congrats you made it to 10!!</h1>
        <button onClick={handleClick}>Start Over</button>
        </>
    )
}

export default BackButton