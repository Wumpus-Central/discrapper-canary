var i,
    a = r(47120);
var s = r(653041);
var o = r(404097),
    l = r(544891),
    u = r(358085),
    c = r(747268),
    d = r(20186),
    f = r(981631);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let h = new Set(['darwin', 'linux', 'win32', 'ios', 'android']);
function p() {
    if ((0, u.isWeb)()) return 'web';
    {
        let e = (0, u.getPlatformName)();
        return h.has(e) ? e : null;
    }
}
function m() {
    let e = c.Z;
    return null != e && o.e.ALL.has(e) ? e : null;
}
!(function (e) {
    (e.COUNT = 'count'), (e.DISTRIBUTION = 'distribution');
})(i || (i = {}));
let g = 120000,
    E = 100;
class v {
    _getMetricWithDefaults(e, n) {
        let { name: r, tags: i } = e,
            a = {
                name: r,
                type: n,
                tags: (0, d.d)()
            };
        null != i &&
            i.forEach((e) => {
                a.tags.push(e);
            });
        let s = p();
        null != s && a.tags.push('platform:'.concat(s));
        let o = m();
        return null != o && a.tags.push('release_channel:'.concat(o)), a;
    }
    increment(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = this._getMetricWithDefaults(e, 'count');
        this._metrics.push(r), (n || this._metrics.length >= E) && this._flush();
    }
    distribution(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = {
                ...this._getMetricWithDefaults(e, 'distribution'),
                value: n
            };
        this._metrics.push(i), (r || this._metrics.length >= E) && this._flush();
    }
    _flush() {
        if (this._metrics.length > 0) {
            let e = [...this._metrics];
            l.tn
                .post({
                    url: f.ANM.METRICS_V2,
                    body: {
                        metrics: e,
                        client_info: {
                            built_at: '1736147330295',
                            build_number: '356617'
                        }
                    },
                    retries: 1,
                    rejectWithError: !0
                })
                .catch((n) => {
                    this._metrics.length + e.length < E && (this._metrics = [...this._metrics, ...e]);
                });
        }
        this._metrics = [];
    }
    constructor() {
        _(this, '_metrics', void 0),
            _(this, '_intervalId', void 0),
            (this._metrics = []),
            (this._intervalId = setInterval(() => {
                this._flush();
            }, g));
    }
}
n.Z = new v();
