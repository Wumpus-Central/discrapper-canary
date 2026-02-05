"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153);
function a() {
    return { usageByApplicationId: {}, shelfOrder: [] };
}
let s = a();
function o() {
    s = a();
}
class l extends r.Ay.PersistedStore {
    static displayName = "ActivityShelfStore";
    static persistKey = "ActivityShelfStore";
    initialize(e) {
        s = { ...a(), ...(e ?? {}) };
    }
    getState() {
        return s;
    }
}
let u = new l(i.h, { LOGOUT: o });
