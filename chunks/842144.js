n.d(t, { A: () => _ });
var i = n(17928),
    a = n(873298),
    r = n(228366),
    s = n(761821);
let l = !1,
    o = {},
    d = {};
class c extends i.Ay.Store {
    static displayName = "FamilyCenterControlledSettingsStore";
    getSettings(e) {
        return o[e];
    }
    getControlledSettings(e) {
        return o[e];
    }
    hasSettingsForUser(e) {
        return null != o[e];
    }
    getConsents(e) {
        return d[e];
    }
    hasConsented(e, t) {
        if (null == e) return !1;
        let n = d[e];
        return null != n && null != n[t] && n[t].consented;
    }
    get isLoading() {
        return l;
    }
}
let _ = new c(r.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
        l = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (e) {
        let { userId: t, settings: n, consents: i } = e;
        null != n && (o[t] = (0, s.Gd)(n)), null != i && (d[t] = i), (l = !1);
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (e) {
        let { userId: t, consents: n } = e;
        d[t] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (e) {
        let { userId: t, settings: n } = e,
            i = (0, s.Gd)(n);
        o[t] = (0, s.RK)(a.nT, o[t], i);
    },
    LOGOUT: function () {
        (o = {}), (d = {}), (l = !1);
    },
});
