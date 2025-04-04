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
class _ {
    abort(e) {
        let { controller: t } = l(this.search(e), f);
        null != t && t.abort();
    }
    doesDataNeedValidation(e) {
        return !0 === l(this.search(e), f).isStale;
    }
    getOrCreate(e) {
        return null == l(this, d)[e] && (l(this, d)[e] = new _()), l(this, d)[e];
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
    loadingStart(e, t) {
        let n = this.search(e);
        (l(n, f).isLoading = !0), null != t && (l(n, f).controller = t), (l(n, f).error = void 0);
    }
    search(e) {
        if (null == e) return new _();
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
            null != e && ((l(e, f).isStale = !0), _.resetErrorState(e), r.push(...Object.values(l(e, d))), 'function' == typeof l(e, f).validateData && n.push(l(e, f).validateData));
        }
        (l(t, f).isStale = !0), _.resetErrorState(t), n.forEach((e) => e());
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
let p = new _(),
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
            _ = c(Array.isArray(e) ? e : [e], () => o(...u), u),
            h = p.getState(f),
            E = h.error,
            b = !0 === h.isLoading,
            y = (0, r.useRef)(u);
        (0, r.useEffect)(() => {
            y.current = u;
        }, [u]);
        let v = (0, r.useCallback)(() => {
                if (null == f || b) return !1;
                let e = !1;
                c === i.Wu ? _.length > 0 && (e = !0) : null != _ && (e = !0);
                let t = p.doesDataNeedValidation(f),
                    n = null != E;
                return t || (!e && !n);
            }, [_, E, f, b]),
            O = (0, r.useCallback)(() => {
                if (null == f || !v()) return;
                let e = new AbortController();
                p.loadingStart(f, n ? e : void 0),
                    a(e.signal, ...y.current)
                        .then((e) => (p.loadingDone(f, !0), e))
                        .catch((t) => {
                            if ((p.loadingDone(f), e.signal.aborted)) return;
                            let n = g(t);
                            (!(h.fetchFailCounter >= s) && n instanceof m && (n.status >= 500 || 429 === n.status)) || p.setError(f, n);
                        });
            }, [h.fetchFailCounter, f, v]);
        return (
            (0, r.useEffect)(
                () => (
                    O(),
                    p.subscribe(f, O),
                    () => {
                        p.abort(f), p.subscribe(f, void 0);
                    }
                ),
                [f, O]
            ),
            {
                data: _,
                error: E,
                isLoading: b || v()
            }
        );
    };
}
