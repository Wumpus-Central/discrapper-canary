function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e, t) {
    if ('string' == typeof e)
        return {
            message: e,
            code: t
        };
    if (null != e.body)
        if (null != e.body.message && !Array.isArray(e.body.message) && (null == e.body.code || !Array.isArray(e.body.code)))
            return {
                message: e.body.message,
                code: e.body.code,
                retryAfter: e.body.retry_after,
                status: e.status
            };
        else {
            let t = e.body,
                n = null != t ? Object.values(t)[0] : null;
            return {
                message: null != n ? n[0] : void 0,
                fields: t,
                status: e.status
            };
        }
    return {};
}
n.d(t, { H: () => a }), n(415506);
class a {
    getFieldMessage(e) {
        return null != this.fields[e] ? this.fields[e][0] : null;
    }
    constructor(e, t, n = 'An unexpected error occurred.') {
        r(this, 'message', void 0), r(this, 'code', void 0), r(this, 'retryAfter', void 0), r(this, 'fields', void 0), r(this, 'error', void 0), r(this, 'status', void 0);
        let { message: a, code: o, retryAfter: s, fields: l, status: c } = i(e, t);
        (this.message = a || n), (this.retryAfter = s), (this.code = o || -1), (this.fields = l || {}), (this.status = c), (this.error = Error(a));
    }
}
