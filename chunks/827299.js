n.d(t, { K: () => E }), n(47120), n(653041), n(411104);
var i = n(192379),
    r = n(399606);
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function s(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function o(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function l(e, t) {
    var n = o(e, t, 'get');
    return s(e, n);
}
function u(e, t, n) {
    a(e, t), t.set(e, n);
}
function c(e, t, n) {
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
    loadingStart(e) {
        let t = this.search(e);
        (l(t, f).isLoading = !0), (l(t, f).error = void 0);
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
        let i = Object.values(l(t, d));
        for (; i.length > 0; ) {
            let e = i.pop();
            null != e && ((l(e, f).isStale = !0), _.resetErrorState(e), i.push(...Object.values(l(e, d))), 'function' == typeof l(e, f).validateData && n.push(l(e, f).validateData));
        }
        (l(t, f).isStale = !0), _.resetErrorState(t), n.forEach((e) => e());
    }
    static resetErrorState(e) {
        (l(e, f).error = void 0), (l(e, f).fetchFailCounter = 0);
    }
    constructor() {
        u(this, d, {
            writable: !0,
            value: {}
        }),
            u(this, f, {
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
        super(...e), c(this, 'name', 'HTTPResponseError'), c(this, 'status', 0);
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
    let { dangerousAbortOnCleanup: n = !1, get: a, load: s, maxNumFetchErrors: o = h, queryId: l, useStateHook: u } = t;
    return function () {
        for (var t = arguments.length, c = Array(t), d = 0; d < t; d++) c[d] = arguments[d];
        let f = (0, i.useMemo)(() => l(...c), c),
            _ = u(Array.isArray(e) ? e : [e], () => a(...c), c),
            h = p.getState(f),
            E = h.error,
            v = !0 === h.isLoading,
            y = (0, i.useRef)(c),
            I = (0, i.useCallback)(() => {
                if (null == f || !0 === v) return;
                let e = !1;
                u === r.Wu ? _.length > 0 && (e = !0) : null != _ && (e = !0);
                let t = p.doesDataNeedValidation(f),
                    i = null != E;
                if ((e || i) && !t) return;
                p.loadingStart(f);
                let a = new AbortController();
                return (
                    s(a.signal, ...y.current)
                        .then((e) => (p.loadingDone(f, !0), e))
                        .catch((e) => {
                            if ((p.loadingDone(f), a.signal.aborted)) return;
                            let t = g(e);
                            (h.fetchFailCounter >= o || !(t instanceof m) || (!(t.status >= 500) && 429 !== t.status)) && p.setError(f, t);
                        }),
                    () => {
                        n && a.abort();
                    }
                );
            }, [_, h.fetchFailCounter, E, f, v]);
        return (
            (0, i.useEffect)(
                () => (
                    I(),
                    p.subscribe(f, I),
                    () => {
                        p.subscribe(f, void 0);
                    }
                ),
                [f, I]
            ),
            {
                data: _,
                error: E,
                isLoading: v
            }
        );
    };
}
