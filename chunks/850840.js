let i;
var a,
    o = r(653041);
var s = r(442837),
    l = r(570140);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
function d() {
    i.hasAcceptedStoreTerms = !0;
}
function f(e) {
    let { eulaId: n } = e;
    if (i.hasAcceptedEulaIds.includes(n)) return !1;
    i.hasAcceptedEulaIds.push(n);
}
class p extends (a = s.ZP.PersistedStore) {
    initialize(e) {
        i = null != e ? e : c;
    }
    getState() {
        return i;
    }
    get hasAcceptedStoreTerms() {
        return i.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return i.hasAcceptedEulaIds.includes(e);
    }
}
u(p, 'displayName', 'ApplicationStoreUserSettingsStore'),
    u(p, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    u(p, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (n.Z = new p(l.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: d,
        APPLICATION_STORE_ACCEPT_EULA: f
    }));
