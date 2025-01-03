let c;
n(653041);
var i,
    l = n(442837),
    a = n(570140);
function r(e, t, n) {
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
let o = {
    hasAcceptedStoreTerms: !1,
    hasAcceptedEulaIds: []
};
class s extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        c = null != e ? e : o;
    }
    getState() {
        return c;
    }
    get hasAcceptedStoreTerms() {
        return c.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return c.hasAcceptedEulaIds.includes(e);
    }
}
r(s, 'displayName', 'ApplicationStoreUserSettingsStore'),
    r(s, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    r(s, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new s(a.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            c.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (c.hasAcceptedEulaIds.includes(t)) return !1;
            c.hasAcceptedEulaIds.push(t);
        }
    }));
