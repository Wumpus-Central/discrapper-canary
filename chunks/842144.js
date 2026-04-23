n.d(t, { A: () => d });
var i = n(17928),
    r = n(873298),
    a = n(228366),
    s = n(761821);
let _ = !1,
    l = {},
    o = {};
class E extends i.Ay.Store {
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
        return o[e];
    }
    hasConsented(e, t) {
        if (null == e) return !1;
        let n = o[e];
        return null != n && null != n[t] && n[t].consented;
    }
    get isLoading() {
        return _;
    }
}
let d = new E(a.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
        _ = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (e) {
        let { userId: t, settings: n, consents: i } = e;
        null != n && (l[t] = (0, s.Gd)(n)), null != i && (o[t] = i), (_ = !1);
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (e) {
        let { userId: t, consents: n } = e;
        o[t] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (e) {
        let { userId: t, settings: n } = e,
            i = (0, s.Gd)(n);
        l[t] = (0, s.RK)(r.nT, l[t], i);
    },
    LOGOUT: function () {
        (l = {}), (o = {}), (_ = !1);
    },
});
