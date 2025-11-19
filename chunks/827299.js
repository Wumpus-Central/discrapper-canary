n.d(t, { K: () => g }), n(388685), n(415506);
var r = n(473749),
    i = n(663042),
    a = n(261470),
    o = n(902704),
    s = n(399606);
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
    return e === t || (0, o.E)(e, t) || n(e), t;
}
function f(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, o.E)(e, t) : Object.is(e, t);
}
function _(e) {
    return e instanceof c && (e.status >= 500 || 429 === e.status);
}
let p = 5;
function h() {
    return new a.Z();
}
let m = (0, i.U)(() => ({
    isLoading: !1,
    error: null,
    backoff: new a.Z(),
}));
function g(e, t) {
    let {
            getQueryId: n,
            get: a,
            load: o,
            getIsLoading: l,
            getError: c,
            retryConfig: { maxRetries: g = p, backoff: E = h, retryableErrors: b = _ } = {},
        } = t,
        y = new Map();
    function O(e) {
        if (null == e) return m;
        let t = y.get(e);
        return (
            null == t &&
                ((t = (0, i.U)(() => ({
                    isLoading: !1,
                    error: null,
                    backoff: E(),
                }))),
                y.set(e, t)),
            t
        );
    }
    async function v(e) {
        var t;
        let { queryId: n, args: r, refetch: i = !1, useStoreState: s = O(n) } = e,
            c = s.getState().backoff,
            d = null != (t = null == l ? void 0 : l(...r)) ? t : s.getState().isLoading;
        if (null != n && !d && (i || null == a(...r)))
            try {
                s.setState({ isLoading: !0 }),
                    await o(...r),
                    c.succeed(),
                    s.setState({
                        error: null,
                        isLoading: !1,
                    });
            } catch (t) {
                let e = u(t);
                s.setState({
                    error: e,
                    isLoading: !1,
                }),
                    b(e) &&
                        g > c.fails &&
                        (await new Promise((e, t) => {
                            c.fail(() => {
                                v({
                                    queryId: n,
                                    args: r,
                                    useStoreState: s,
                                    refetch: i,
                                }).then(e, t);
                            });
                        }));
            }
    }
    function I() {
        for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
        let u = d(i),
            _ = Array.isArray(e) ? e : [e],
            p = n(...u),
            h = O(p),
            m = (0, s.e7)(_, () => (null == l ? void 0 : l(...u)), [u]),
            g = h((e) => null == l && e.isLoading),
            E = null != m ? m : g,
            b = (0, s.e7)(_, () => (null == c ? void 0 : c(...u)), [u]),
            y = h((e) => (null == c ? e.error : null)),
            I = null != b ? b : y,
            T = (0, s.e7)(_, () => a(...u), [u], f);
        return (
            (0, r.useEffect)(() => {
                v({
                    queryId: p,
                    args: u,
                    useStoreState: h,
                });
            }, [p, u, h]),
            {
                data: T,
                error: I,
                isLoading: E,
                refetch: (0, r.useCallback)(() => {
                    v({
                        queryId: p,
                        args: u,
                        useStoreState: h,
                        refetch: !0,
                    });
                }, [p, u, h]),
            }
        );
    }
    return (
        (I.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t);
            O(i).getState().backoff.succeed(),
                await v({
                    queryId: i,
                    args: t,
                    refetch: !0,
                });
        }),
        I
    );
}
