n.d(t, { A: () => c }), n(321073);
let i = {
    WEB_AND_IOS: new Set(["canary", "ptb", "stable"]),
    ANDROID: new Set(["betaRelease", "canaryRelease", "googleRelease"]),
    QUEST_VR: new Set(["questBetaRelease", "questCanaryRelease", "questProductionRelease"]),
    OTHER: new Set(["N/A", "adhoc", "development", "staging"]),
    ALL: new Set([
        "N/A",
        "adhoc",
        "betaRelease",
        "canary",
        "canaryRelease",
        "development",
        "googleRelease",
        "ptb",
        "questBetaRelease",
        "questCanaryRelease",
        "questProductionRelease",
        "stable",
        "staging",
    ]),
};
var r = n(636537),
    a = n(723702),
    s = n(290805);
let l = { design_id: n(689953).z.DESIGN_TABS_IA };
var o = n(652215);
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
                { name: r, tags: o } = e,
                c = { name: r, type: t, tags: Object.keys(l).map((e) => `${e}:${l[e]}`) };
            null != o &&
                o.forEach((e) => {
                    c.tags.push(e);
                });
            let u = (function () {
                if ((0, a.isWeb)()) return "web";
                {
                    let e = (0, a.getPlatformName)();
                    return d.has(e) ? e : null;
                }
            })();
            null != u && c.tags.push(`platform:${u}`);
            let _ = null != (n = s.y) && i.ALL.has(n) ? n : null;
            return null != _ && c.tags.push(`release_channel:${_}`), c;
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
                    url: o.Rsh.METRICS_V2,
                    body: { metrics: e, client_info: { built_at: "1788541978109", build_number: "607737" } },
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
