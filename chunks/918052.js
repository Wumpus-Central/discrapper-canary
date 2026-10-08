n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
function a() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let s = a();
class l extends i.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        s = { ...a(), ...(e ?? {}) };
    }
    getState() {
        return s;
    }
}
let o = new l(r.h, {
    LOGOUT: function () {
        s = a();
    },
});
