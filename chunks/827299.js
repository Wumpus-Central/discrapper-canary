n.d(t, { K: () => E }), n(47120), n(301563), n(653041), n(411104);
var r = n(192379),
    i = n(399606);
function o(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function a(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function s(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function l(e, t) {
    var n = s(e, t, 'get');
    return a(e, n);
}
function c(e, t, n) {
    o(e, t), t.set(e, n);
}
function u(e, t, n) {
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
var d = new WeakMap(),
    f = new WeakMap();
class p {
    doesDataNeedValidation(e) {
        return !0 === l(this.search(e), f).isStale;
    }
    getOrCreate(e) {
        return null == l(this, d)[e] && (l(this, d)[e] = new p()), l(this, d)[e];
    }
    getState(e) {
        var t;
        return l((t = this.search(e)), f);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        (l(n, f).isLoading = !1), t ? ((l(n, f).fetchFailCounter = 0), (l(n, f).isStale = !1)) : (l(n, f).fetchFailCounter += 1);
    }
    loadingStart(e) {
        let t = this.search(e);
        (l(t, f).isLoading = !0), (l(t, f).error = void 0);
    }
    search(e) {
        if (null == e) return new p();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    setError(e, t) {
        let n = this.search(e);
        (l(n, f).error = t), (l(n, f).isStale = !1);
    }
    subscribe(e, t) {
        l(this.search(e), f).validateData = t;
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        'function' == typeof l(t, f).validateData && n.push(l(t, f).validateData);
        let r = Object.values(l(t, d));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e && ((l(e, f).isStale = !0), p.resetErrorState(e), r.push(...Object.values(l(e, d))), 'function' == typeof l(e, f).validateData && n.push(l(e, f).validateData));
        }
        (l(t, f).isStale = !0), p.resetErrorState(t), n.forEach((e) => e());
    }
    static resetErrorState(e) {
        (l(e, f).error = void 0), (l(e, f).fetchFailCounter = 0);
    }
    constructor() {
        c(this, d, {
            writable: !0,
            value: {}
        }),
            c(this, f, {
                writable: !0,
                value: { fetchFailCounter: 0 }
            });
    }
}
let _ = new p(),
    h = 5;
class m extends Error {
    setStatus(e) {
        this.status = e;
    }
    constructor(...e) {
        super(...e), u(this, 'name', 'HTTPResponseError'), u(this, 'status', 0);
    }
}
function g(e) {
    if (e instanceof Error) return e;
    if ('object' == typeof e) {
        if ('body' in e && null != e.body && 'message' in e.body) {
            let t = new m(String(e.body.message));
            return t.setStatus(e.status), t;
        }
        let t = new m(
            Object.entries(e)
                .map((e, t) => ''.concat(e, ': [').concat(String(t), ']'))
                .join(',')
        );
        return t.setStatus(e.status), t;
    }
    return Error(String(e));
}
function E(e, t) {
    let { dangerousAbortOnCleanup: n = !1, get: o, load: a, maxNumFetchErrors: s = h, queryId: l, useStateHook: c } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), d = 0; d < t; d++) u[d] = arguments[d];
        let f = (0, r.useMemo)(() => l(...u), u),
            p = c(Array.isArray(e) ? e : [e], () => o(...u), u),
            h = _.getState(f),
            E = h.error,
            v = !0 === h.isLoading,
            b = (0, r.useRef)(u),
            y = (0, r.useCallback)(() => {
                if (null == f || !0 === v) return;
                let e = !1;
                c === i.Wu ? p.length > 0 && (e = !0) : null != p && (e = !0);
                let t = _.doesDataNeedValidation(f),
                    r = null != E;
                if ((e || r) && !t) return;
                _.loadingStart(f);
                let o = new AbortController();
                return (
                    a(o.signal, ...b.current)
                        .then((e) => (_.loadingDone(f, !0), e))
                        .catch((e) => {
                            if ((_.loadingDone(f), o.signal.aborted)) return;
                            let t = g(e);
                            (h.fetchFailCounter >= s || !(t instanceof m) || (!(t.status >= 500) && 429 !== t.status)) && _.setError(f, t);
                        }),
                    () => {
                        n && o.abort();
                    }
                );
            }, [p, h.fetchFailCounter, E, f, v]);
        return (
            (0, r.useEffect)(
                () => (
                    y(),
                    _.subscribe(f, y),
                    () => {
                        _.subscribe(f, void 0);
                    }
                ),
                [f, y]
            ),
            {
                data: p,
                error: E,
                isLoading: v
            }
        );
    };
}
