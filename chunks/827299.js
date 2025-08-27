n.d(t, { K: () => T }), n(388685), n(35282), n(539854), n(415506);
var r = n(647438),
    i = n(916140),
    a = n.n(i),
    o = n(902704),
    s = n(399606);
function l(e, t) {
    if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object");
}
function c(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function u(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
function d(e, t) {
    var n = u(e, t, "get");
    return c(e, n);
}
function f(e, t, n) {
    l(e, t), t.set(e, n);
}
function _(e, t, n) {
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
function p(e, t) {
    if (t === s.Wu) {
        if (Array.isArray(e) && e.length > 0) return !0;
    } else if (null != e) return !0;
    return !1;
}
var h = new WeakMap(),
    m = new WeakMap(),
    g = new WeakMap();
class E {
    maybeAbort(e) {
        let { controller: t } = d(this.search(e), g);
        null != t && t.abort();
    }
    doesDataNeedValidation(e) {
        return !0 === d(this.search(e), g).isStale;
    }
    getOrCreate(e) {
        return null == d(this, h)[e] && (d(this, h)[e] = new E()), d(this, h)[e];
    }
    getState(e) {
        var t;
        return d((t = this.search(e)), g);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        t
            ? ((d(n, g).fetchFailCounter = 0), (d(n, g).fetchState = 3))
            : ((d(n, g).fetchFailCounter += 1), (d(n, g).fetchState = 2)),
            (d(n, g).controller = void 0),
            this.notifyListeners(e);
    }
    loadingStart(e, t) {
        let n = this.search(e);
        (d(n, g).fetchState = 1),
            (d(n, g).isStale = !1),
            null != t && (d(n, g).controller = t),
            (d(n, g).error = void 0),
            this.notifyListeners(e);
    }
    notifyListeners(e) {
        d(this.search(e), m).forEach((e) => {
            e();
        });
    }
    search(e) {
        if (null == e) return new E();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    setError(e, t) {
        let n = this.search(e);
        (d(n, g).error = t), (d(n, g).isStale = !1);
    }
    shouldLoad(e, t, n) {
        if (null == e) return !1;
        let r = this.getState(e);
        if (1 === r.fetchState || (!0 === r.hasRetryScheduled && null != r.nextRetryAt && r.nextRetryAt > Date.now()))
            return !1;
        let i = p(n, t);
        return this.doesDataNeedValidation(e) || (!i && 3 !== r.fetchState);
    }
    scheduleRetry(e, t) {
        var n;
        let r = this.getState(e),
            i = (null != (n = r.retryAttempt) ? n : 0) + 1,
            o = null != t ? t.backoffMs(i) : 2 ** i * 1000;
        (r.nextRetryAt = Date.now() + o),
            (r.hasRetryScheduled = !0),
            (r.retryAttempt = i),
            a()(() => {
                let t = this.getState(e);
                t.hasRetryScheduled &&
                    ((t.hasRetryScheduled = !1), (t.isStale = !0), null != e && this.notifyListeners(e));
            }, o);
    }
    shouldRetry(e, t, n) {
        var r, i;
        if (null == e || !1 === n) return !1;
        let a = this.getState(e),
            o = null != (r = null == n ? void 0 : n.maxRetries) ? r : y;
        return (
            !(a.fetchFailCounter >= o - 1) &&
            !!(
                null != (i = null == n ? void 0 : n.retryableErrors)
                    ? i
                    : (e) => e instanceof O && (e.status >= 500 || 429 === e.status)
            )(t)
        );
    }
    subscribe(e, t) {
        let n = this.search(e);
        return (
            d(n, m).add(t),
            () => {
                d(n, m).delete(t);
            }
        );
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        n.push(...Array.from(d(t, m)));
        let r = Object.values(d(t, h));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e &&
                ((d(e, g).isStale = !0),
                E.resetErrorState(e),
                r.push(...Object.values(d(e, h))),
                n.push(...Array.from(d(e, m))));
        }
        (d(t, g).isStale = !0),
            E.resetErrorState(t),
            n.forEach((e) => {
                e();
            });
    }
    static resetErrorState(e) {
        (d(e, g).error = void 0),
            (d(e, g).fetchFailCounter = 0),
            (d(e, g).fetchState = 0),
            (d(e, g).hasRetryScheduled = !1),
            (d(e, g).nextRetryAt = void 0),
            (d(e, g).retryAttempt = 0);
    }
    constructor() {
        f(this, h, {
            writable: !0,
            value: Object.create(null),
        }),
            f(this, m, {
                writable: !0,
                value: new Set(),
            }),
            f(this, g, {
                writable: !0,
                value: {
                    fetchFailCounter: 0,
                    fetchState: 0,
                },
            });
    }
}
let b = new E(),
    y = 5;
class O extends Error {
    setStatus(e) {
        this.status = e;
    }
    constructor(...e) {
        super(...e), _(this, "name", "HTTPResponseError"), _(this, "status", 0);
    }
}
function v(e) {
    if (e instanceof Error) return e;
    if ("object" == typeof e) {
        if ("body" in e && null != e.body && "message" in e.body) {
            let t = new O(String(e.body.message));
            return t.setStatus(e.status), t;
        }
        let t = new O(
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
function I(e) {
    let t = (0, r.useRef)(e);
    return (0, o.E)(t.current, e) || (t.current = e), t.current;
}
function T(e, t) {
    let { dangerousAbortOnCleanup: n = !1, get: i, load: a, queryId: o, retryConfig: s, useStateHook: l } = t;
    return function () {
        for (var t = arguments.length, c = Array(t), u = 0; u < t; u++) c[u] = arguments[u];
        let d = I(c),
            f = (0, r.useMemo)(() => o(...d), d),
            _ = l(Array.isArray(e) ? e : [e], () => i(...d), d),
            h = b.getState(f).error,
            [m, g] = (0, r.useState)(0),
            [E, y] = (0, r.useState)(() => {
                let e = b.getState(f);
                return 0 === e.fetchState ? !p(_, l) : 1 === e.fetchState;
            }),
            O = (0, r.useCallback)(async () => {
                if (null == f || !b.shouldLoad(f, l, _)) return;
                let e = new AbortController();
                b.loadingStart(f, n ? e : void 0);
                let t = !1;
                try {
                    await a(e.signal, ...d), (t = !0);
                } catch (n) {
                    if (e.signal.aborted) return;
                    let t = v(n);
                    if (!1 !== s && b.shouldRetry(f, t, s)) return void b.scheduleRetry(f, s);
                    b.setError(f, t);
                } finally {
                    b.loadingDone(f, t);
                }
            }, [d, _, f]);
        return (
            (0, r.useEffect)(() => {
                if (null != f)
                    return b.subscribe(f, () => {
                        let e = b.getState(f);
                        y(1 === e.fetchState), !0 === e.isStale && g((e) => e + 1);
                    });
            }, [f]),
            (0, r.useEffect)(() => {
                O();
            }, [m, O]),
            (0, r.useEffect)(
                () => () => {
                    b.maybeAbort(f);
                },
                [f],
            ),
            {
                data: _,
                error: h,
                isLoading: E,
            }
        );
    };
}
