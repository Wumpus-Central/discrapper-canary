"use strict";
n.d(t, { A: () => u });
var r = n(499979),
    i = n(451988),
    a = n(929921),
    s = n(652215);
let o = 1e3;
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class u {
    _statInterval;
    _isSender;
    _streamEnd;
    _targetResolution = 0;
    _targetFPS = 0;
    _streamSettingsChanged = !1;
    _lastLayout;
    _lastLayoutChanged = 0;
    _layoutChanges = 0;
    _layoutBuckets;
    _automaticQualityChanges = 0;
    constructor(e, t) {
        (this._isSender = t), (this._statInterval = new i.IX()), (this._lastLayout = e), (this._layoutBuckets = {});
    }
    start() {
        let { resolution: e, fps: t } = a.A.getState();
        (this._targetResolution = e),
            (this._targetFPS = t),
            this._statInterval.start(o, this._sampleStats),
            (this._lastLayoutChanged = (0, r.tB)());
    }
    stop() {
        this._statInterval.stop(),
            (this._streamEnd = (0, r.tB)()),
            this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3);
    }
    autoQualityChange() {
        this._automaticQualityChanges += 1;
    }
    layoutChange(e) {
        if (e === this._lastLayout || null != this._streamEnd) return;
        let t = (0, r.tB)();
        this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3),
            this._layoutChanges++,
            (this._lastLayout = e),
            (this._lastLayoutChanged = t);
    }
    _incrementLayout = (e, t) => {
        null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), (this._layoutBuckets[e] += t);
    };
    getLayout() {
        return this._lastLayout;
    }
    getStats() {
        let e = {
            num_layout_changes: this._layoutChanges,
            duration_layout_fullscreen: l(this._layoutBuckets[s.SO9.FULL_SCREEN]),
            duration_layout_theatre: l(this._layoutBuckets[s.SO9.THEATRE]),
            duration_layout_pip: l(this._layoutBuckets[s.SO9.PIP]),
            duration_layout_popout: l(this._layoutBuckets[s.SO9.POPOUT]),
            duration_layout_portrait: l(this._layoutBuckets[s.SO9.PORTRAIT]),
            duration_layout_landscape: l(this._layoutBuckets[s.SO9.LANDSCAPE]),
            duration_layout_minimized: l(this._layoutBuckets[s.SO9.MINIMIZED]),
        };
        return this._isSender
            ? {
                  ...e,
                  target_fps: this._targetFPS,
                  target_resolution_height: this._targetResolution,
                  stream_settings_changed: this._streamSettingsChanged,
                  num_auto_quality_changes: this._automaticQualityChanges,
              }
            : e;
    }
    _sampleStats = () => {
        let { resolution: e, fps: t } = a.A.getState();
        this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS;
    };
}
