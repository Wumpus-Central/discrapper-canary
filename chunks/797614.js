n.d(t, { Z: () => m }), n(47120), n(653041);
var i = n(404097),
    r = n(544891),
    a = n(358085),
    s = n(747268),
    o = n(20186),
    l = n(981631);
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
let c = new Set(['darwin', 'linux', 'win32', 'ios', 'android']);
function d() {
    if ((0, a.isWeb)()) return 'web';
    {
        let e = (0, a.getPlatformName)();
        return c.has(e) ? e : null;
    }
}
function f() {
    let e = s.Z;
    return null != e && i.e.ALL.has(e) ? e : null;
}
let _ = 120000,
    p = 100;
class h {
    _getMetricWithDefaults(e, t) {
        let { name: n, tags: i } = e,
            r = {
                name: n,
                type: t,
                tags: (0, o.d)()
            };
        null != i &&
            i.forEach((e) => {
                r.tags.push(e);
            });
        let a = d();
        null != a && r.tags.push('platform:'.concat(a));
        let s = f();
        return null != s && r.tags.push('release_channel:'.concat(s)), r;
    }
    increment(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this._getMetricWithDefaults(e, 'count');
        this._metrics.push(n), (t || this._metrics.length >= p) && this._flush();
    }
    distribution(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = {
                ...this._getMetricWithDefaults(e, 'distribution'),
                value: t
            };
        this._metrics.push(i), (n || this._metrics.length >= p) && this._flush();
    }
    _flush() {
        if (this._metrics.length > 0) {
            let e = [...this._metrics];
            r.tn
                .post({
                    url: l.ANM.METRICS_V2,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: '1739568579333',
                            build_number: '368978'
                        }
                    },
                    retries: 1,
                    rejectWithError: !0
                })
                .catch((t) => {
                    this._metrics.length + e.length < p && (this._metrics = [...this._metrics, ...e]);
                });
        }
        this._metrics = [];
    }
    constructor() {
        u(this, '_metrics', void 0),
            u(this, '_intervalId', void 0),
            (this._metrics = []),
            (this._intervalId = setInterval(() => {
                this._flush();
            }, _));
    }
}
let m = new h();
