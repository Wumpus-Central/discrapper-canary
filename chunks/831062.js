n.d(t, { A: () => c }), n(321073);
var i = n(490138),
    a = n(636537),
    r = n(723702),
    s = n(290805),
    l = n(245903),
    o = n(652215);
let d = new Set(["darwin", "linux", "win32", "ios", "android"]),
    c = new (class {
        constructor() {
            (this._metrics = []),
                (this._intervalId = setInterval(() => {
                    this._flush();
                }, 12e4));
        }
        _getMetricWithDefaults(e, t) {
            let n,
                { name: a, tags: o } = e,
                c = { name: a, type: t, tags: (0, l.u)() };
            null != o &&
                o.forEach((e) => {
                    c.tags.push(e);
                });
            let _ = (function () {
                if ((0, r.isWeb)()) return "web";
                {
                    let e = (0, r.getPlatformName)();
                    return d.has(e) ? e : null;
                }
            })();
            null != _ && c.tags.push(`platform:${_}`);
            let E = null != (n = s.y) && i.f.ALL.has(n) ? n : null;
            return null != E && c.tags.push(`release_channel:${E}`), c;
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
                a.Bo.post({
                    url: o.Rsh.METRICS_V2,
                    body: { metrics: e, client_info: { built_at: "1777585379241", build_number: "537800" } },
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
