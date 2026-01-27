n.d(e, {
    A: () => c,
});
var i,
    l,
    r = n(311907),
    a = n(873298),
    o = n(73153),
    u = n(761821);
let s = !1,
    d = {},
    E = {};
class _ extends (l = r.Ay.Store) {
    getSettings(t) {
        return d[t];
    }
    getControlledSettings(t) {
        return d[t];
    }
    hasSettingsForUser(t) {
        return null != d[t];
    }
    getConsents(t) {
        return E[t];
    }
    hasConsented(t, e) {
        if (null == t) return !1;
        let n = E[t];
        return null != n && null != n[e] && n[e].consented;
    }
    get isLoading() {
        return s;
    }
}
(i = "displayName") in _
    ? Object.defineProperty(_, i, {
          value: "FamilyCenterControlledSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[i] = "FamilyCenterControlledSettingsStore");
let c = new _(o.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: function () {
        s = !0;
    },
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: function (t) {
        let { userId: e, settings: n, consents: i } = t;
        null != n && (d[e] = (0, u.Gd)(n)), null != i && (E[e] = i), (s = !1);
    },
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: function (t) {
        let { userId: e, consents: n } = t;
        E[e] = n;
    },
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: function (t) {
        let { userId: e, settings: n } = t,
            i = (0, u.Gd)(n);
        d[e] = (0, u.RK)(a.nT, d[e], i);
    },
    LOGOUT: function () {
        (d = {}), (E = {}), (s = !1);
    },
});
