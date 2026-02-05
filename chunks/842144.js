n.d(e, { A: () => E });
var i = n(311907),
    r = n(873298),
    l = n(73153),
    a = n(761821);
let s = !1,
    o = {},
    d = {};
class u extends i.Ay.Store {
    static displayName = "FamilyCenterControlledSettingsStore";
    getSettings(t) {
        return o[t];
    }
    getControlledSettings(t) {
        return o[t];
    }
    hasSettingsForUser(t) {
        return null != o[t];
    }
    getConsents(t) {
        return d[t];
    }
    hasConsented(t, e) {
        if (null == t) return !1;
        let n = d[t];
        return null != n && null != n[e] && n[e].consented;
    }
    get isLoading() {
        return s;
    }
}
let E = new u(l.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
        s = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (t) {
        let { userId: e, settings: n, consents: i } = t;
        null != n && (o[e] = (0, a.Gd)(n)), null != i && (d[e] = i), (s = !1);
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (t) {
        let { userId: e, consents: n } = t;
        d[e] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (t) {
        let { userId: e, settings: n } = t,
            i = (0, a.Gd)(n);
        o[e] = (0, a.RK)(r.nT, o[e], i);
    },
    LOGOUT: function () {
        (o = {}), (d = {}), (s = !1);
    },
});
