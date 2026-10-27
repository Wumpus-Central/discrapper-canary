n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
let a = { pinned: !1 },
    s = a;
class l extends i.Ay.PersistedStore {
    static displayName = "ConjurePinnedStore";
    static persistKey = "ConjurePinned";
    initialize(e) {
        s = e ?? a;
    }
    getState() {
        return s;
    }
    isPinned() {
        return s.pinned;
    }
}
let o = new l(r.h, {
    CONJURE_PAGES_PIN_SET: function (e) {
        let { pinned: t } = e;
        return t !== s.pinned && ((s = { pinned: t }), !0);
    },
});
