n.d(t, { Z: () => h });
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(365113),
    l = n(981631);
function c(e, t, n) {
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
let u = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null,
    },
    d = u,
    f = "LAST_VIEWED_PATH";
function p(e) {
    let { path: t } = e;
    return (d.lastViewedPath = t), !0;
}
function _(e) {
    let { path: t } = e;
    return (d.lastViewedNonVoicePath = t), !0;
}
class m extends (r = i.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
        d = null != e ? e : u;
    }
    get experimentalDefaultRoute() {
        let { friendsTab: e } = s.o.getConfig({ location: "default_route" });
        return e ? l.Z5c.ME_ACTIVITY : l.Z5c.ME;
    }
    get defaultRoute() {
        return this.experimentalDefaultRoute;
    }
    get lastNonVoiceRoute() {
        var e;
        return null != (e = d.lastViewedNonVoicePath) ? e : this.experimentalDefaultRoute;
    }
    get fallbackRoute() {
        return this.experimentalDefaultRoute;
    }
    getState() {
        return d;
    }
}
c(m, "displayName", "DefaultRouteStore"),
    c(m, "persistKey", "DefaultRouteStore"),
    c(m, "migrations", [
        () => {
            let e = a.K.get(f, null);
            return a.K.remove(f), { lastViewedPath: e };
        },
    ]);
let h = new m(o.Z, {
    SAVE_LAST_ROUTE: p,
    SAVE_LAST_NON_VOICE_ROUTE: _,
});
