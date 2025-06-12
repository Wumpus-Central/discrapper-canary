n.d(t, { K: () => E }), n(388685), n(35282), n(539854), n(415506);
var r = n(73800),
    i = n(399606);
function a(e, t) {
    if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
}
function o(e, t) {
    return t.get ? t.get.call(e) : t.value;
}
function s(e, t, n) {
    if (!t.has(e)) throw TypeError('attempted to ' + n + ' private field on non-instance');
    return t.get(e);
}
function l(e, t) {
    var n = s(e, t, 'get');
    return o(e, n);
}
function c(e, t, n) {
    a(e, t), t.set(e, n);
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
    _ = new WeakMap();
class f {
    abort(e) {
        let { controller: t } = l(this.search(e), _);
        null != t && t.abort();
    }
    doesDataNeedValidation(e) {
        return !0 === l(this.search(e), _).isStale;
    }
    getOrCreate(e) {
        return null == l(this, d)[e] && (l(this, d)[e] = new f()), l(this, d)[e];
    }
    getState(e) {
        var t;
        return l((t = this.search(e)), _);
    }
    loadingDone(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.search(e);
        t ? ((l(n, _).fetchFailCounter = 0), (l(n, _).isStale = !1), (l(n, _).fetchState = 3)) : ((l(n, _).fetchFailCounter += 1), (l(n, _).fetchState = 2));
    }
    loadingStart(e, t) {
        let n = this.search(e);
        (l(n, _).fetchState = 1), null != t && (l(n, _).controller = t), (l(n, _).error = void 0);
    }
    search(e) {
        if (null == e) return new f();
        let t = this;
        for (let n of e) t = t.getOrCreate(n);
        return t;
    }
    setError(e, t) {
        let n = this.search(e);
        (l(n, _).error = t), (l(n, _).isStale = !1);
    }
    subscribe(e, t) {
        l(this.search(e), _).validateData = t;
    }
    validate(e) {
        let t = this.search(e),
            n = [];
        'function' == typeof l(t, _).validateData && n.push(l(t, _).validateData);
        let r = Object.values(l(t, d));
        for (; r.length > 0; ) {
            let e = r.pop();
            null != e && ((l(e, _).isStale = !0), f.resetErrorState(e), r.push(...Object.values(l(e, d))), 'function' == typeof l(e, _).validateData && n.push(l(e, _).validateData));
        }
        (l(t, _).isStale = !0), f.resetErrorState(t), n.forEach((e) => e());
    }
    static resetErrorState(e) {
        (l(e, _).error = void 0), (l(e, _).fetchFailCounter = 0), (l(e, _).fetchState = 0);
    }
    constructor() {
        c(this, d, {
            writable: !0,
            value: {}
        }),
            c(this, _, {
                writable: !0,
                value: {
                    fetchFailCounter: 0,
                    fetchState: 0
                }
            });
    }
}
let p = new f(),
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
    let { dangerousAbortOnCleanup: n = !1, get: a, load: o, maxNumFetchErrors: s = h, queryId: l, useStateHook: c } = t;
    return function () {
        for (var t = arguments.length, u = Array(t), d = 0; d < t; d++) u[d] = arguments[d];
        let _ = (0, r.useMemo)(() => l(...u), u),
            f = c(Array.isArray(e) ? e : [e], () => a(...u), u),
            h = p.getState(_),
            E = h.error,
            b = (0, r.useRef)(u);
        (0, r.useEffect)(() => {
            b.current = u;
        }, [u]);
        let y = (0, r.useCallback)(() => {
                if (null == _ || 1 === h.fetchState) return !1;
                let e = !1;
                c === i.Wu ? f.length > 0 && (e = !0) : null != f && (e = !0);
                let t = p.doesDataNeedValidation(_),
                    n = null != E;
                return t || (!e && !n);
            }, [f, h.fetchState, E, _]),
            O = (0, r.useCallback)(() => {
                if (null == _ || !y()) return;
                let e = new AbortController();
                p.loadingStart(_, n ? e : void 0),
                    o(e.signal, ...b.current)
                        .then((e) => (p.loadingDone(_, !0), e))
                        .catch((t) => {
                            if ((p.loadingDone(_), e.signal.aborted)) return;
                            let n = g(t);
                            (!(h.fetchFailCounter >= s) && n instanceof m && (n.status >= 500 || 429 === n.status)) || p.setError(_, n);
                        });
            }, [h.fetchFailCounter, _, y]);
        return (
            (0, r.useEffect)(
                () => (
                    O(),
                    p.subscribe(_, O),
                    () => {
                        p.abort(_), p.subscribe(_, void 0);
                    }
                ),
                [_, O]
            ),
            {
                data: f,
                error: E,
                isLoading: 0 === h.fetchState ? y() : 1 === h.fetchState
            }
        );
    };
}
