_.d(e, {
    OP: () => r,
    Q0: () => E,
    ix: () => o,
    jt: () => n,
    pq: () => a,
});
let a = 0,
    r = 1,
    n = 2;
function o(t) {
    if (t < 400 && t >= 100) return { code: r };
    if (t >= 400 && t < 500)
        switch (t) {
            case 401:
                return {
                    code: n,
                    message: "unauthenticated",
                };
            case 403:
                return {
                    code: n,
                    message: "permission_denied",
                };
            case 404:
                return {
                    code: n,
                    message: "not_found",
                };
            case 409:
                return {
                    code: n,
                    message: "already_exists",
                };
            case 413:
                return {
                    code: n,
                    message: "failed_precondition",
                };
            case 429:
                return {
                    code: n,
                    message: "resource_exhausted",
                };
            case 499:
                return {
                    code: n,
                    message: "cancelled",
                };
            default:
                return {
                    code: n,
                    message: "invalid_argument",
                };
        }
    if (t >= 500 && t < 600)
        switch (t) {
            case 501:
                return {
                    code: n,
                    message: "unimplemented",
                };
            case 503:
                return {
                    code: n,
                    message: "unavailable",
                };
            case 504:
                return {
                    code: n,
                    message: "deadline_exceeded",
                };
            default:
                return {
                    code: n,
                    message: "internal_error",
                };
        }
    return {
        code: n,
        message: "unknown_error",
    };
}
function E(t, e) {
    t.setAttribute("http.response.status_code", e);
    let _ = o(e);
    "unknown_error" !== _.message && t.setStatus(_);
}
