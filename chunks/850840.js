let i;
n.d(t, { Z: () => f }), n(653041);
var r,
    a = n(442837),
    s = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
function u() {
    i.hasAcceptedStoreTerms = !0;
}
function c(e) {
    let { eulaId: t } = e;
    if (i.hasAcceptedEulaIds.includes(t)) return !1;
    i.hasAcceptedEulaIds.push(t);
}
class d extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        i = null != e ? e : l;
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
o(d, 'displayName', 'ApplicationStoreUserSettingsStore'),
    o(d, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    o(d, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]);
let f = new d(s.Z, {
    APPLICATION_STORE_ACCEPT_STORE_TERMS: u,
    APPLICATION_STORE_ACCEPT_EULA: c
});
