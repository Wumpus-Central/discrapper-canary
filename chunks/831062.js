"use strict";
n.d(t, { A: () => c }), n(321073);
var r = n(490138),
    i = n(562465),
    s = n(723702),
    a = n(290805),
    o = n(245903),
    l = n(652215);
let u = new Set(["darwin", "linux", "win32", "ios", "android"]),
    c = new (class {
        constructor() {
            (this._metrics = []),
                (this._intervalId = setInterval(() => {
                    this._flush();
                }, 12e4));
        }
        _getMetricWithDefaults(e, t) {
            let n,
                { name: i, tags: l } = e,
                c = { name: i, type: t, tags: (0, o.u)() };
            null != l &&
                l.forEach((e) => {
                    c.tags.push(e);
                });
            let d = (function () {
                if ((0, s.isWeb)()) return "web";
                {
                    let e = (0, s.getPlatformName)();
                    return u.has(e) ? e : null;
                }
            })();
            null != d && c.tags.push(`platform:${d}`);
            let _ = null != (n = a.y) && r.f.ALL.has(n) ? n : null;
            return null != _ && c.tags.push(`release_channel:${_}`), c;
        }
        increment(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this._getMetricWithDefaults(e, "count");
            this._metrics.push(n), (t || this._metrics.length >= 100) && this._flush();
        }
        distribution(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = { ...this._getMetricWithDefaults(e, "distribution"), value: t };
            this._metrics.push(r), (n || this._metrics.length >= 100) && this._flush();
        }
        _flush() {
            if (this._metrics.length > 0) {
                let e = [...this._metrics];
                i.Bo.post({
                    url: l.Rsh.METRICS_V2,
                    body: { metrics: e, client_info: { built_at: "1776967788958", build_number: "534149" } },
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
