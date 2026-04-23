"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
function s() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let a = s();
class o extends i.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        a = { ...s(), ...(e ?? {}) };
    }
    getState() {
        return a;
    }
}
let l = new o(r.h, {
    LOGOUT: function () {
        a = s();
    },
});
