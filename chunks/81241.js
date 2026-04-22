"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(616093);
let a = {};
class o extends r.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: a };
    }
    initialize(e) {
        for (var t in s.A) a[t] = e?.toggleStates?.[t] ?? !1;
    }
    get(e) {
        return a[e] ?? !1;
    }
    set(e, t) {
        return (a[e] = t), t;
    }
}
let l = new o(i.h, {
    LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: t, enabled: n } = e;
        a[t] = n;
    },
});
