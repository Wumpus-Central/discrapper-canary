t.d(n, { A: () => d });
var a = t(855986),
    i = t(73153);
let l = {
    hide_icymi_tab: { description: "Hide ICYMI tab" },
    go_back_to_regular_input: { description: "Go back to regular input" },
    enable_native_markdown: { description: "Enable native markdown parser", defaultValue: !0 },
};
function r(e) {
    return l[e].defaultValue ?? !1;
}
let o = {};
class u extends a.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: o };
    }
    initialize(e) {
        for (var n in l) o[n] = e?.toggleStates?.[n] ?? r(n);
    }
    get(e) {
        return o[e] ?? r(e);
    }
    set(e, n) {
        return ((o[e] = n), n);
    }
}
let d = new u(i.h, {
    LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: n, enabled: t } = e;
        o[n] = t;
    },
});
