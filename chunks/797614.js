n.d(t, { Z: () => b }), n(388685), n(539854);
var r = n(404097),
    i = n(544891),
    o = n(358085),
    a = n(747268),
    s = n(20186),
    l = n(981631);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = new Set(['darwin', 'linux', 'win32', 'ios', 'android']);
function p() {
    if ((0, o.isWeb)()) return 'web';
    {
        let e = (0, o.getPlatformName)();
        return _.has(e) ? e : null;
    }
}
function h() {
    let e = a.Z;
    return null != e && r.e.ALL.has(e) ? e : null;
}
let m = 120000,
    g = 100;
class E {
    _getMetricWithDefaults(e, t) {
        let { name: n, tags: r } = e,
            i = {
                name: n,
                type: t,
                tags: (0, s.d)()
            };
        null != r &&
            r.forEach((e) => {
                i.tags.push(e);
            });
        let o = p();
        null != o && i.tags.push('platform:'.concat(o));
        let a = h();
        return null != a && i.tags.push('release_channel:'.concat(a)), i;
    }
    increment(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this._getMetricWithDefaults(e, 'count');
        this._metrics.push(n), (t || this._metrics.length >= g) && this._flush();
    }
    distribution(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = f(u({}, this._getMetricWithDefaults(e, 'distribution')), { value: t });
        this._metrics.push(r), (n || this._metrics.length >= g) && this._flush();
    }
    _flush() {
        if (this._metrics.length > 0) {
            let e = [...this._metrics];
            i.tn
                .post({
                    url: l.ANM.METRICS_V2,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: '1744914238651',
                            build_number: '391185'
                        }
                    },
                    retries: 1,
                    rejectWithError: !0
                })
                .catch((t) => {
                    this._metrics.length + e.length < g && (this._metrics = [...this._metrics, ...e]);
                });
        }
        this._metrics = [];
    }
    constructor() {
        c(this, '_metrics', void 0),
            c(this, '_intervalId', void 0),
            (this._metrics = []),
            (this._intervalId = setInterval(() => {
                this._flush();
            }, m));
    }
}
let b = new E();
