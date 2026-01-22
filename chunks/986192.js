n.d(t, { U: () => g }), n(896048), n(65821);
var r = n(64700),
    i = n(353640),
    a = n(158390),
    s = n(52133),
    o = n(417597);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class c extends Error {
    setStatus(e) {
        this.status = e;
    }
    constructor(...e) {
        super(...e), l(this, "name", "HTTPResponseError"), l(this, "status", 0);
    }
}
function u(e) {
    if (e instanceof Error) return e;
    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
            let t = new c(String(e.body.message));
            return t.setStatus(e.status), t;
        }
        let t = new c(
            Object.entries(e)
                .map((e) => {
                    let [t, n] = e;
                    return "".concat(t, ": [").concat(String(n), "]");
                })
                .join(","),
        );
        return t.setStatus(e.status), t;
    }
    return Error(String(e));
}
function d(e) {
    let [t, n] = (0, r.useState)(e);
    return e === t || (0, s.v)(e, t) || n(e), t;
}
function f(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, s.v)(e, t) : Object.is(e, t);
}
function p(e) {
    return e instanceof c && (e.status >= 500 || 429 === e.status);
}
let _ = 5;
function h() {
    return new a.A();
}
let m = (0, i.v)(() => ({
    isLoading: !1,
    error: null,
    backoff: new a.A(),
}));
function g(e, t) {
    let {
            getQueryId: n,
            get: a,
            load: s,
            getIsLoading: l,
            getError: c,
            retryConfig: { maxRetries: g = _, backoff: E = h, retryableErrors: b = p } = {},
        } = t,
        y = new Map();
    function O(e) {
        if (null == e) return m;
        let t = y.get(e);
        return (
            null == t &&
                ((t = (0, i.v)(() => ({
                    isLoading: !1,
                    error: null,
                    backoff: E(),
                }))),
                y.set(e, t)),
            t
        );
    }
    async function A(e) {
        var t;
        let { queryId: n, args: r, refetch: i = !1, useStoreState: o = O(n) } = e,
            c = o.getState().backoff,
            d = null != (t = null == l ? void 0 : l(...r)) ? t : o.getState().isLoading;
        if (null != n && !d && (i || null == a(...r)))
            try {
                o.setState({ isLoading: !0 }),
                    await s(...r),
                    c.succeed(),
                    o.setState({
                        error: null,
                        isLoading: !1,
                    });
            } catch (t) {
                let e = u(t);
                o.setState({
                    error: e,
                    isLoading: !1,
                }),
                    b(e) &&
                        g > c.fails &&
                        (await new Promise((e, t) => {
                            c.fail(() => {
                                A({
                                    queryId: n,
                                    args: r,
                                    useStoreState: o,
                                    refetch: i,
                                }).then(e, t);
                            });
                        }));
            }
    }
    function v() {
        for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        let u = d(i),
            p = Array.isArray(e) ? e : [e],
            _ = n(...u),
            h = O(_),
            m = (0, o.bG)(p, () => (null == l ? void 0 : l(...u)), [u]),
            g = h((e) => null == l && e.isLoading),
            E = null != m ? m : g,
            b = (0, o.bG)(p, () => (null == c ? void 0 : c(...u)), [u]),
            y = h((e) => (null == c ? e.error : null)),
            v = null != b ? b : y,
            S = (0, o.bG)(p, () => a(...u), [u], f);
        return (
            (0, r.useEffect)(() => {
                A({
                    queryId: _,
                    args: u,
                    useStoreState: h,
                });
            }, [_, u, h]),
            {
                data: S,
                error: v,
                isLoading: E,
                refetch: (0, r.useCallback)(() => {
                    A({
                        queryId: _,
                        args: u,
                        useStoreState: h,
                        refetch: !0,
                    });
                }, [_, u, h]),
            }
        );
    }
    return (
        (v.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t);
            O(i).getState().backoff.succeed(),
                await A({
                    queryId: i,
                    args: t,
                    refetch: !0,
                });
        }),
        v
    );
}
