n.d(t, { A: () => E }), n(321073);
var i = n(490138),
    r = n(636537),
    a = n(723702),
    s = n(290805),
    _ = n(245903),
    l = n(652215);
let o = new Set(["darwin", "linux", "win32", "ios", "android"]),
    E = new (class {
        constructor() {
            (this._metrics = []),
                (this._intervalId = setInterval(() => {
                    this._flush();
                }, 12e4));
        }
        _getMetricWithDefaults(e, t) {
            let n,
                { name: r, tags: l } = e,
                E = { name: r, type: t, tags: (0, _.u)() };
            null != l &&
                l.forEach((e) => {
                    E.tags.push(e);
                });
            let d = (function () {
                if ((0, a.isWeb)()) return "web";
                {
                    let e = (0, a.getPlatformName)();
                    return o.has(e) ? e : null;
                }
            })();
            null != d && E.tags.push(`platform:${d}`);
            let c = null != (n = s.y) && i.f.ALL.has(n) ? n : null;
            return null != c && E.tags.push(`release_channel:${c}`), E;
        }
        increment(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this._getMetricWithDefaults(e, "count");
            this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush();
        }
        distribution(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = { ...this._getMetricWithDefaults(e, "distribution"), value: t };
            this._metrics.push(i), (n || this._metrics.length >= 100) && this._flush();
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                r.Bo.post({
                    url: l.Rsh.METRICS_V2,
                    body: { metrics: e, client_info: { built_at: "1776968096744", build_number: "534155" } },
                    retries: 1,
                    rejectWithError: !0,
                }).catch((t) => {
                    this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e]);
                });
            }
            this._metrics = [];
        }
        _metrics;
        _intervalId;
    })();
