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
function c(e) {
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
}
function d(e) {
    let [t, n] = (0, r.useState)(e);
    return e === t || (0, a.v)(e, t) || n(e), t;
}
function _(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? (0, a.v)(e, t) : Object.is(e, t);
}
function f(e) {
    return e instanceof u && (e.status >= 500 || 429 === e.status);
}
let p = 5;
function h() {
    return new s.A();
}
let m = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: new s.A() }));
function E(e, t) {
    let {
            getQueryId: n,
            get: s,
            load: a,
            getIsLoading: u,
            getError: E,
            retryConfig: { maxRetries: g = p, backoff: A = h, retryableErrors: I = f } = {},
        } = t,
        T = new Map();
    function S(e) {
        if (null == e) return m;
        let t = T.get(e);
        return null == t && ((t = (0, i.v)(() => ({ isLoading: !1, error: null, backoff: A() }))), T.set(e, t)), t;
    }
    async function y(e) {
        let { queryId: t, args: n, refetch: r = !1, useStoreState: i = S(t) } = e,
            o = i.getState().backoff,
            d = u?.(...n) ?? i.getState().isLoading;
        if (null != t && !d) {
            if (!r) {
                let e = s(...n);
                if (e === l || null != e) return;
            }
            try {
                i.setState({ isLoading: !0 }), await a(...n), o.succeed(), i.setState({ error: null, isLoading: !1 });
            } catch (s) {
                let e = c(s);
                i.setState({ error: e, isLoading: !1 }),
                    I(e) &&
                        g > o.fails &&
                        (await new Promise((e, s) => {
                            o.fail(() => {
                                y({ queryId: t, args: n, useStoreState: i, refetch: r }).then(e, s);
                            });
                        }));
            }
        }
    }
    function v() {
        for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
        let c = d(i),
            f = Array.isArray(e) ? e : [e],
            p = n(...c),
            h = S(p),
            m = (0, o.bG)(f, () => u?.(...c), [c]),
            g = h((e) => null == u && e.isLoading),
            A = m ?? g,
            I = (0, o.bG)(f, () => E?.(...c), [c]),
            T = h((e) => (null == E ? e.error : null)),
            v = I ?? T,
            N = (0, o.bG)(f, () => s(...c), [c], _);
        return (
            (0, r.useEffect)(() => {
                y({ queryId: p, args: c, useStoreState: h });
            }, [p, c, h]),
            {
                data: N === l ? null : N,
                error: v,
                isLoading: A,
                refetch: (0, r.useCallback)(() => {
                    y({ queryId: p, args: c, useStoreState: h, refetch: !0 });
                }, [p, c, h]),
            }
        );
    }
    return (
        (v.refetch = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let i = n(...t),
                s = S(i);
            s.getState().backoff.succeed(), await y({ queryId: i, args: t, useStoreState: s, refetch: !0 });
        }),
        (v.fetchMany = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e);
                    return y({ queryId: t, args: e, useStoreState: S(t) });
                }),
            );
        }),
        (v.refetchMany = async function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            await Promise.all(
                t.map((e) => {
                    let t = n(...e),
                        r = S(t);
                    return r.getState().backoff.succeed(), y({ queryId: t, args: e, useStoreState: r, refetch: !0 });
                }),
            );
        }),
        v
    );
}
