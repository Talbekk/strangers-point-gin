const Cookie = () => {
    return (
        <Snackbar open={isSubmitted} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Thank you for registering!</Alert>
        </Snackbar>
    )
}

export default Cookie;