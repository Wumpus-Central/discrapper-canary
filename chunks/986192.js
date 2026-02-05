"use strict";
n.d(t, { U: () => m });
var r = n(64700),
    i = n(353640),
    a = n(158390),
    s = n(52133),
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
    return e === t || (0, s.v)(e, t) || n(e), t;
}
function d(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, s.v)(e, t) : Object.is(e, t);
}
function _(e) {
    return e instanceof l && (e.status >= 500 || 429 === e.status);
}
let f = 5;
function p() {
    return new a.A();
}
let h = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: new a.A() }));
function m(e, t) {
    let {
            getQueryId: n,
            get: a,
            load: s,
            getIsLoading: l,
            getError: m,
            retryConfig: { maxRetries: g = f, backoff: E = p, retryableErrors: A = _ } = {},
        } = t,
        I = new Map();
    function T(e) {
        if (null == e) return h;
        let t = I.get(e);
        return null == t && ((t = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: E() }))), I.set(e, t)), t;
    }
    async function y(e) {
        let { queryId: t, args: n, refetch: r = !1, useStoreState: i = T(t) } = e,
            o = i.getState().backoff,
            c = l?.(...n) ?? i.getState().isLoading;
        if (null != t && !c && (r || null == a(...n)))
            try {
                i.setState({ isLoading: !0 }), await s(...n), o.succeed(), i.setState({ error: null, isLoading: !1 });
            } catch (a) {
                let e = u(a);
                i.setState({ error: e, isLoading: !1 }),
                    A(e) &&
                        g > o.fails &&
                        (await new Promise((e, a) => {
                            o.fail(() => {
                                y({ queryId: t, args: n, useStoreState: i, refetch: r }).then(e, a);
                            });
                        }));
            }
    }
    function S() {
        for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
        let u = c(i),
            _ = Array.isArray(e) ? e : [e],
            f = n(...u),
            p = T(f),
            h = (0, o.bG)(_, () => l?.(...u), [u]),
            g = p((e) => null == l && e.isLoading),
            E = h ?? g,
            A = (0, o.bG)(_, () => m?.(...u), [u]),
            I = p((e) => (null == m ? e.error : null)),
            S = A ?? I,
            v = (0, o.bG)(_, () => a(...u), [u], d);
        return (
            (0, r.useEffect)(() => {
                y({ queryId: f, args: u, useStoreState: p });
            }, [f, u, p]),
            {
                data: v,
                error: S,
                isLoading: E,
                refetch: (0, r.useCallback)(() => {
                    y({ queryId: f, args: u, useStoreState: p, refetch: !0 });
                }, [f, u, p]),
            }
        );
    }
    return (
        (S.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t);
            T(i).getState().backoff.succeed(), await y({ queryId: i, args: t, refetch: !0 });
        }),
        S
    );
}
