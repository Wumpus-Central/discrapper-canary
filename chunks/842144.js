n.d(t, { A: () => E });
var r,
    i = n(311907),
    a = n(873298),
    s = n(73153),
    o = n(761821);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = !1,
    u = {},
    d = {};
function f() {
    c = !0;
}
function p(e) {
    let { userId: t, settings: n, consents: r } = e;
    null != n && (u[t] = (0, o.Gd)(n)), null != r && (d[t] = r), (c = !1);
}
function _(e) {
    let { userId: t, consents: n } = e;
    d[t] = n;
}
function h(e) {
    let { userId: t, settings: n } = e,
        r = (0, o.Gd)(n);
    u[t] = (0, o.RK)(a.nT, u[t], r);
}
function m() {
    (u = {}), (d = {}), (c = !1);
}
class g extends (r = i.Ay.Store) {
    getSettings(e) {
        return u[e];
    }
    getControlledSettings(e) {
        return u[e];
    }
    hasSettingsForUser(e) {
        return null != u[e];
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
        return c;
    }
}
l(g, "displayName", "FamilyCenterControlledSettingsStore");
let E = new g(s.h, {
    FAMILY_CENTER_TEEN_SETTINGS_FETCH_START: f,
    FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS: p,
    FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS: _,
    FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS: h,
    LOGOUT: m,
});
