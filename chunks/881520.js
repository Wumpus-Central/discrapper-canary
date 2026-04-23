"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(37962);
let a = {};
class o extends r.Ay.Store {
    static displayName = "FeedbackOverrideStore";
    static persistKey = "feedbackOverrides";
    initialize() {}
    getFeedbackConfig(e) {
        return a[e];
    }
}
let l = new o(i.h, {
    FEEDBACK_OVERRIDE_SET: function (e) {
        let { feedbackType: t, cooldown: n, chance: r } = e;
        a[t] = { ...s.u[t], cooldown: n, chance: r };
    },
    FEEDBACK_OVERRIDE_CLEAR: function (e) {
        let { feedbackType: t } = e;
        delete a[t];
    },
});
