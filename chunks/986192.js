"use strict";
n.d(t, { U: () => E, V: () => l });
var r = n(64700),
    i = n(353640),
    s = n(158390),
    a = n(52133),
    o = n(417597);
let l = Symbol("NO_DATA");
class u extends Error {
    name = "HTTPResponseError";
    status = 0;
    setStatus(e) {
        this.status = e;
    }
}
function d(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, a.v)(e, t) : Object.is(e, t);
}
function c(e) {
    return e instanceof u && (e.status >= 500 || 429 === e.status);
}
function _() {
    return new s.A();
}
let f = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: new s.A() }));
function E(e, t) {
    let {
            getQueryId: n,
            get: s,
            load: E,
            getIsLoading: h,
            getError: p,
            retryConfig: { maxRetries: m = 5, backoff: g = _, retryableErrors: A = c } = {},
        } = t,
        I = new Map();
    function T(e) {
        if (null == e) return f;
        let t = I.get(e);
        return null == t && ((t = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: g() }))), I.set(e, t)), t;
    }
    async function S(e) {
        let { queryId: t, args: n, refetch: r = !1, useStoreState: i = T(t) } = e,
            a = i.getState().backoff,
            o = h?.(...n) ?? i.getState().isLoading;
        if (null != t && !o) {
            if (!r) {
                let e = s(...n);
                if (e === l || null != e) return;
            }
            try {
                i.setState({ isLoading: !0 }), await E(...n), a.succeed(), i.setState({ error: null, isLoading: !1 });
            } catch (s) {
                let e = (function (e) {
                    if (e instanceof Error) return e;
                    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
                        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
                            let t = new u(String(e.body.message));
                            return t.setStatus(e.status), t;
                        }
                        let t = new u(
                            Object.entries(e)
                                .map((e) => {
                                    let [t, n] = e;
                                    return `${t}: [${String(n)}]`;
                                })
                                .join(","),
                        );
                        return t.setStatus(e.status), t;
                    }
                    return Error(String(e));
                })(s);
                i.setState({ error: e, isLoading: !1 }),
                    A(e) &&
                        m > a.fails &&
                        (await new Promise((e, s) => {
                            a.fail(() => {
                                S({ queryId: t, args: n, useStoreState: i, refetch: r }).then(e, s);
                            });
                        }));
            }
        }
    }
    function y() {
        for (var t = arguments.length, i = Array(t), u = 0; u < t; u++) i[u] = arguments[u];
        let c = (function (e) {
                let [t, n] = (0, r.useState)(e);
                return e === t || (0, a.v)(e, t) || n(e), t;
            })(i),
            _ = Array.isArray(e) ? e : [e],
            f = n(...c),
            E = T(f),
            m = (0, o.bG)(_, () => h?.(...c), [c]),
            g = E((e) => null == h && e.isLoading),
            A = (0, o.bG)(_, () => p?.(...c), [c]),
            I = E((e) => (null == p ? e.error : null)),
            y = (0, o.bG)(_, () => s(...c), [c], d);
        return (
            (0, r.useEffect)(() => {
                S({ queryId: f, args: c, useStoreState: E });
            }, [f, c, E]),
            {
                data: y === l ? null : y,
                error: A ?? I,
                isLoading: m ?? g,
                refetch: (0, r.useCallback)(() => {
                    S({ queryId: f, args: c, useStoreState: E, refetch: !0 });
                }, [f, c, E]),
            }
        );
    }
    return (
        (y.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t),
                s = T(i);
            s.getState().backoff.succeed(), await S({ queryId: i, args: t, useStoreState: s, refetch: !0 });
        }),
        (y.fetchMany = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e);
                    return S({ queryId: t, args: e, useStoreState: T(t) });
                }),
            );
        }),
        (y.refetchMany = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e),
                        r = T(t);
                    return r.getState().backoff.succeed(), S({ queryId: t, args: e, useStoreState: r, refetch: !0 });
                }),
            );
        }),
        y
    );
}
