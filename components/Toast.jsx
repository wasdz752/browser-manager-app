function Toast( { message, open }) {
    if (open) {
        return (
            <div className="toast-container text-bold text-white">
                <div className="toast-message">
                    {message}
                </div>
            </div>
        )
    }
}

export default Toast;