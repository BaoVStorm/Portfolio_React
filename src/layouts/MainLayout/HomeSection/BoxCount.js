function BoxCount({ value, type, id }) {
    return (
        <div className="box-count">
            <p className="title-count">
                <span>Total</span>
                <span className="value-count" id={id}>
                    {value}
                </span>
                <span>{type}</span>
            </p>
        </div>
    );
}

export default BoxCount;
