"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(873298),
    s = n(228366),
    a = n(761821);
let o = !1,
    l = {},
    u = {};
class c extends i.Ay.Store {
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
let d = new c(s.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
        o = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (e) {
        let { userId: t, settings: n, consents: i } = e;
        null != n && (l[t] = (0, a.Gd)(n)), null != i && (u[t] = i), (o = !1);
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (e) {
        let { userId: t, consents: n } = e;
        u[t] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (e) {
        let { userId: t, settings: n } = e,
            i = (0, a.Gd)(n);
        l[t] = (0, a.RK)(r.nT, l[t], i);
    },
    LOGOUT: function () {
        (l = {}), (u = {}), (o = !1);
    },
});
