n.d(t, { A: () => d });
var a = n(855986),
    i = n(73153);
let r = {
    hide_icymi_tab: { description: "Hide ICYMI tab" },
    go_back_to_regular_input: { description: "Go back to regular input" },
    enable_native_markdown: { description: "Enable native markdown parser", defaultValue: !0 },
};
function l(e) {
    return r[e].defaultValue ?? !1;
}
let s = {};
class o extends a.Ay.DeviceSettingsStore {
    static displayName = "LabFeatureStore";
    static persistKey = "LabFeatureStore";
    getUserAgnosticState() {
        return { toggleStates: s };
    }
    initialize(e) {
        for (var t in r) s[t] = e?.toggleStates?.[t] ?? l(t);
    }
    get(e) {
        return s[e] ?? l(e);
    }
    set(e, t) {
        return ((s[e] = t), t);
    }
}
let d = new o(i.h, {
    LAB_FEATURE_TOGGLE: function (e) {
        let { labFeature: t, enabled: n } = e;
        s[t] = n;
    },
});
