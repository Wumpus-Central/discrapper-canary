n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(37962);
let s = {};
class l extends i.Ay.Store {
    static displayName = "FeedbackOverrideStore";
    static persistKey = "feedbackOverrides";
    initialize() {}
    getFeedbackConfig(e) {
        return s[e];
    }
}
let o = new l(r.h, {
    FEEDBACK_OVERRIDE_SET: function (e) {
        let { feedbackType: t, cooldown: n, chance: i } = e;
        s[t] = { ...a.u[t], cooldown: n, chance: i };
    },
    FEEDBACK_OVERRIDE_CLEAR: function (e) {
        let { feedbackType: t } = e;
        delete s[t];
    },
});
