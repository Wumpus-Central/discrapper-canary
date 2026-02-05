"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(490138),
    i = n(562465),
    a = n(723702),
    s = n(290805),
    o = n(245903),
    l = n(652215);
let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
function c() {
    if ((0, a.isWeb)()) return "web";
    {
        let e = (0, a.getPlatformName)();
        return u.has(e) ? e : null;
    }
}
function d() {
    let e = s.y;
    return null != e && r.f.ALL.has(e) ? e : null;
}
let _ = 12e4,
    f = 100;
class p {
    constructor() {
        (this._metrics = []),
            (this._intervalId = setInterval(() => {
                this._flush();
            }, _));
    }
    _getMetricWithDefaults(e, t) {
        let { name: n, tags: r } = e,
            i = { name: n, type: t, tags: (0, o.u)() };
        null != r &&
            r.forEach((e) => {
                i.tags.push(e);
            });
        let a = c();
        null != a && i.tags.push(`platform:${a}`);
        let s = d();
        return null != s && i.tags.push(`release_channel:${s}`), i;
    }
    increment(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this._getMetricWithDefaults(e, "count");
        this._metrics.push(n), (t || this._metrics.length >= f) && this._flush();
    }
    distribution(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = { ...this._getMetricWithDefaults(e, "distribution"), value: t };
        this._metrics.push(r), (n || this._metrics.length >= f) && this._flush();
    }
    _flush() {
        if (this._metrics.length > 0) {
            let e = [...this._metrics];
            i.Bo.post({
                url: l.Rsh.METRICS_V2,
                body: { metrics: e, client_info: { built_at: "1770252554499", build_number: "493560" } },
                retries: 1,
                rejectWithError: !0,
            }).catch((t) => {
                this._metrics.length + e.length < f && (this._metrics = [...this._metrics, ...e]);
            });
        }
        this._metrics = [];
    }
    _metrics;
    _intervalId;
}
let h = new p();
