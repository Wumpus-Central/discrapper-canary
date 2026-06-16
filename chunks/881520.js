"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(37962);
let a = {};
class o extends i.Ay.Store {
    static displayName = "FeedbackOverrideStore";
    static persistKey = "feedbackOverrides";
    initialize() {}
    getFeedbackConfig(e) {
        return a[e];
    }
}
let l = new o(r.h, {
    FEEDBACK_OVERRIDE_SET: function (e) {
        let { feedbackType: t, cooldown: n, chance: i } = e;
        a[t] = { ...s.u[t], cooldown: n, chance: i };
    },
    FEEDBACK_OVERRIDE_CLEAR: function (e) {
        let { feedbackType: t } = e;
        delete a[t];
    },
});
