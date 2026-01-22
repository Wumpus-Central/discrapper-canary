n.d(t, { A: () => p });
var r = n(499979),
    i = n(451988),
    a = n(929921),
    s = n(652215);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = 1000;
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class p {
    start() {
        let { resolution: e, fps: t } = a.A.getState();
        (this._targetResolution = e),
            (this._targetFPS = t),
            this._statInterval.start(d, this._sampleStats),
            (this._lastLayoutChanged = (0, r.tB)());
    }
    stop() {
        this._statInterval.stop(),
            (this._streamEnd = (0, r.tB)()),
            this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1000);
    }
    autoQualityChange() {
        this._automaticQualityChanges += 1;
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let t = (0, r.tB)();
        this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1000),
            this._layoutChanges++,
            (this._lastLayout = e),
            (this._lastLayoutChanged = t);
    }
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: f(this._layoutBuckets[s.SO9.FULL_SCREEN]),
            duration_layout_theatre: f(this._layoutBuckets[s.SO9.THEATRE]),
            duration_layout_pip: f(this._layoutBuckets[s.SO9.PIP]),
            duration_layout_popout: f(this._layoutBuckets[s.SO9.POPOUT]),
            duration_layout_portrait: f(this._layoutBuckets[s.SO9.PORTRAIT]),
            duration_layout_landscape: f(this._layoutBuckets[s.SO9.LANDSCAPE]),
            duration_layout_minimized: f(this._layoutBuckets[s.SO9.MINIMIZED]),
        };
        return this._isSender
            ? u(l({}, e), {
                  target_fps: this._targetFPS,
                  target_resolution_height: this._targetResolution,
                  stream_settings_changed: this._streamSettingsChanged,
                  num_auto_quality_changes: this._automaticQualityChanges,
              })
            : e;
    }
    constructor(e, t) {
        o(this, "_statInterval", void 0),
            o(this, "_isSender", void 0),
            o(this, "_streamEnd", void 0),
            o(this, "_targetResolution", 0),
            o(this, "_targetFPS", 0),
            o(this, "_streamSettingsChanged", !1),
            o(this, "_lastLayout", void 0),
            o(this, "_lastLayoutChanged", 0),
            o(this, "_layoutChanges", 0),
            o(this, "_layoutBuckets", void 0),
            o(this, "_automaticQualityChanges", 0),
            o(this, "_incrementLayout", (e, t) => {
                null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), (this._layoutBuckets[e] += t);
            }),
            o(this, "_sampleStats", () => {
                let { resolution: e, fps: t } = a.A.getState();
                this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS;
            }),
            (this._isSender = t),
            (this._statInterval = new i.IX()),
            (this._lastLayout = e),
            (this._layoutBuckets = {});
    }
}
