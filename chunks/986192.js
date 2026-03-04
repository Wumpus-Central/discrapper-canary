"use strict";
n.d(t, { U: () => m });
var r = n(64700),
    i = n(353640),
    s = n(158390),
    a = n(52133),
    o = n(417597);
class l extends Error {
    name = "HTTPResponseError";
    status = 0;
    setStatus(e) {
        this.status = e;
    }
}
function u(e) {
    if (e instanceof Error) return e;
    if ("object" == typeof e && null != e && "status" in e && "number" == typeof e.status) {
        if ("body" in e && null != e.body && "object" == typeof e.body && "message" in e.body) {
            let t = new l(String(e.body.message));
            return t.setStatus(e.status), t;
        }
        let t = new l(
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
}
function c(e) {
    let [t, n] = (0, r.useState)(e);
    return e === t || (0, a.v)(e, t) || n(e), t;
}
function d(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, a.v)(e, t) : Object.is(e, t);
}
function _(e) {
    return e instanceof l && (e.status >= 500 || 429 === e.status);
}
let f = 5;
function p() {
    return new s.A();
}
let h = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: new s.A() }));
function m(e, t) {
    let {
            getQueryId: n,
            get: s,
            load: a,
            getIsLoading: l,
            getError: m,
            retryConfig: { maxRetries: E = f, backoff: g = p, retryableErrors: A = _ } = {},
        } = t,
        I = new Map();
    function T(e) {
        if (null == e) return h;
        let t = I.get(e);
        return null == t && ((t = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: g() }))), I.set(e, t)), t;
    }
    async function S(e) {
        let { queryId: t, args: n, refetch: r = !1, useStoreState: i = T(t) } = e,
            o = i.getState().backoff,
            c = l?.(...n) ?? i.getState().isLoading;
        if (null != t && !c && (r || null == s(...n)))
            try {
                i.setState({ isLoading: !0 }), await a(...n), o.succeed(), i.setState({ error: null, isLoading: !1 });
            } catch (s) {
                let e = u(s);
                i.setState({ error: e, isLoading: !1 }),
                    A(e) &&
                        E > o.fails &&
                        (await new Promise((e, s) => {
                            o.fail(() => {
                                S({ queryId: t, args: n, useStoreState: i, refetch: r }).then(e, s);
                            });
                        }));
            }
    }
    function y() {
        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
        let u = c(i),
            _ = Array.isArray(e) ? e : [e],
            f = n(...u),
            p = T(f),
            h = (0, o.bG)(_, () => l?.(...u), [u]),
            E = p((e) => null == l && e.isLoading),
            g = h ?? E,
            A = (0, o.bG)(_, () => m?.(...u), [u]),
            I = p((e) => (null == m ? e.error : null)),
            y = A ?? I,
            v = (0, o.bG)(_, () => s(...u), [u], d);
        return (
            (0, r.useEffect)(() => {
                S({ queryId: f, args: u, useStoreState: p });
            }, [f, u, p]),
            {
                data: v,
                error: y,
                isLoading: g,
                refetch: (0, r.useCallback)(() => {
                    S({ queryId: f, args: u, useStoreState: p, refetch: !0 });
                }, [f, u, p]),
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
