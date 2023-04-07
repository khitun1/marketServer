class apiError extends Error {
    constructor(status, msg) {
        super();
        this.status = status;
        this.msg = msg;
    }

    static badRequest(msg) {
        return new apiError(404, msg);
    }

    static forbidden(msg) {
        return new apiError(403, msg);
    }

    static internal(msg) {
        return new apiError(500, msg);
    }
}

module.exports = apiError;