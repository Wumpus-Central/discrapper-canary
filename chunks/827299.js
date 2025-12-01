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
function p(e) {
    return e instanceof c && (e.status >= 500 || 429 === e.status);
}
let _ = 5;
function m() {
    return new a.Z();
}
let h = (0, i.U)(() => ({
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
            retryConfig: { maxRetries: g = _, backoff: E = m, retryableErrors: b = p } = {},
        } = t,
        y = new Map();
    function O(e) {
        if (null == e) return h;
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
    function S() {
        for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
        let u = d(i),
            p = Array.isArray(e) ? e : [e],
            _ = n(...u),
            m = O(_),
            h = (0, s.e7)(p, () => (null == l ? void 0 : l(...u)), [u]),
            g = m((e) => null == l && e.isLoading),
            E = null != h ? h : g,
            b = (0, s.e7)(p, () => (null == c ? void 0 : c(...u)), [u]),
            y = m((e) => (null == c ? e.error : null)),
            S = null != b ? b : y,
            I = (0, s.e7)(p, () => a(...u), [u], f);
        return (
            (0, r.useEffect)(() => {
                v({
                    queryId: _,
                    args: u,
                    useStoreState: m,
                });
            }, [_, u, m]),
            {
                data: I,
                error: S,
                isLoading: E,
                refetch: (0, r.useCallback)(() => {
                    v({
                        queryId: _,
                        args: u,
                        useStoreState: m,
                        refetch: !0,
                    });
                }, [_, u, m]),
            }
        );
    }
    return (
        (S.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t);
            O(i).getState().backoff.succeed(),
                await v({
                    queryId: i,
                    args: t,
                    refetch: !0,
                });
        }),
        S
    );
}
