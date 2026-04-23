"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
function s() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let a = s();
class o extends r.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        a = { ...s(), ...(e ?? {}) };
    }
    getState() {
        return a;
    }
}
let l = new o(i.h, {
    LOGOUT: function () {
        a = s();
    },
});
