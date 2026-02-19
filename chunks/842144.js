"use strict";
n.d(t, { A: () => m });
var r = n(311907),
    i = n(873298),
    s = n(73153),
    a = n(761821);
let o = !1,
    l = {},
    u = {};
function c() {
    o = !0;
}
function d(e) {
    let { userId: t, settings: n, consents: r } = e;
    null != n && (l[t] = (0, a.Gd)(n)), null != r && (u[t] = r), (o = !1);
}
function _(e) {
    let { userId: t, consents: n } = e;
    u[t] = n;
}
function f(e) {
    let { userId: t, settings: n } = e,
        r = (0, a.Gd)(n);
    l[t] = (0, a.RK)(i.nT, l[t], r);
}
function p() {
    (l = {}), (u = {}), (o = !1);
}
class h extends r.Ay.Store {
    static displayName = "FamilyCenterControlledSettingsStore";
    getSettings(e) {
        return l[e];
    }
    getControlledSettings(e) {
        return l[e];
    }
    hasSettingsForUser(e) {
        return null != l[e];
    }
    getConsents(e) {
        return u[e];
    }
    hasConsented(e, t) {
        if (null == e) return !1;
        let n = u[e];
        return null != n && null != n[t] && n[t].consented;
    }
    get isLoading() {
        return o;
    }
}
let m = new h(s.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: c,
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: d,
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: _,
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: f,
    LOGOUT: p,
});
