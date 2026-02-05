"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    a = n(37962);
let s = {};
function o(e) {
    let { feedbackType: t, cooldown: n, chance: r } = e;
    s[t] = { ...a.u[t], cooldown: n, chance: r };
}
function l(e) {
    let { feedbackType: t } = e;
    delete s[t];
}
class u extends r.Ay.Store {
    static displayName = "FeedbackOverrideStore";
    static persistKey = "feedbackOverrides";
    initialize() {}
    getFeedbackConfig(e) {
        return s[e];
    }
}
let c = new u(i.h, { FEEDBACK_OVERRIDE_SET: o, FEEDBACK_OVERRIDE_CLEAR: l });
