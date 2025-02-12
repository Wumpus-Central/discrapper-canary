a.d(e, {
    OP: () => n,
    Q0: () => i,
    ix: () => o,
    jt: () => _,
    pq: () => r
});
let r = 0,
    n = 1,
    _ = 2;
function o(t) {
    if (t < 400 && t >= 100) return { code: n };
    if (t >= 400 && t < 500)
        switch (t) {
            case 401:
                return {
                    code: _,
                    message: 'unauthenticated'
                };
            case 403:
                return {
                    code: _,
                    message: 'permission_denied'
                };
            case 404:
                return {
                    code: _,
                    message: 'not_found'
                };
            case 409:
                return {
                    code: _,
                    message: 'already_exists'
                };
            case 413:
                return {
                    code: _,
                    message: 'failed_precondition'
                };
            case 429:
                return {
                    code: _,
                    message: 'resource_exhausted'
                };
            case 499:
                return {
                    code: _,
                    message: 'cancelled'
                };
            default:
                return {
                    code: _,
                    message: 'invalid_argument'
                };
        }
    if (t >= 500 && t < 600)
        switch (t) {
            case 501:
                return {
                    code: _,
                    message: 'unimplemented'
                };
            case 503:
                return {
                    code: _,
                    message: 'unavailable'
                };
            case 504:
                return {
                    code: _,
                    message: 'deadline_exceeded'
                };
            default:
                return {
                    code: _,
                    message: 'internal_error'
                };
        }
    return {
        code: _,
        message: 'unknown_error'
    };
}
function i(t, e) {
    t.setAttribute('http.response.status_code', e);
    let a = o(e);
    'unknown_error' !== a.message && t.setStatus(a);
}
