a.d(e, {
    OP: () => n,
    Q0: () => i,
    ix: () => _,
    jt: () => o,
    pq: () => r
});
let r = 0,
    n = 1,
    o = 2;
function _(t) {
    if (t < 400 && t >= 100) return { code: n };
    if (t >= 400 && t < 500)
        switch (t) {
            case 401:
                return {
                    code: o,
                    message: 'unauthenticated'
                };
            case 403:
                return {
                    code: o,
                    message: 'permission_denied'
                };
            case 404:
                return {
                    code: o,
                    message: 'not_found'
                };
            case 409:
                return {
                    code: o,
                    message: 'already_exists'
                };
            case 413:
                return {
                    code: o,
                    message: 'failed_precondition'
                };
            case 429:
                return {
                    code: o,
                    message: 'resource_exhausted'
                };
            case 499:
                return {
                    code: o,
                    message: 'cancelled'
                };
            default:
                return {
                    code: o,
                    message: 'invalid_argument'
                };
        }
    if (t >= 500 && t < 600)
        switch (t) {
            case 501:
                return {
                    code: o,
                    message: 'unimplemented'
                };
            case 503:
                return {
                    code: o,
                    message: 'unavailable'
                };
            case 504:
                return {
                    code: o,
                    message: 'deadline_exceeded'
                };
            default:
                return {
                    code: o,
                    message: 'internal_error'
                };
        }
    return {
        code: o,
        message: 'unknown_error'
    };
}
function i(t, e) {
    t.setAttribute('http.response.status_code', e);
    let a = _(e);
    'unknown_error' !== a.message && t.setStatus(a);
}
