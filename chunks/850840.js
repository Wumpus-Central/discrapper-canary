let l;
n(653041);
var i,
    a = n(442837),
    r = n(570140);
function s(e, t, n) {
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
class c extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        l = null != e ? e : o;
    }
    getState() {
        return l;
    }
    get hasAcceptedStoreTerms() {
        return l.hasAcceptedStoreTerms;
    }
    hasAcceptedEULA(e) {
        return l.hasAcceptedEulaIds.includes(e);
    }
}
s(c, 'displayName', 'ApplicationStoreUserSettingsStore'),
    s(c, 'persistKey', 'ApplicationStoreUserSettingsStore'),
    s(c, 'migrations', [
        (e) =>
            null == e.hasAcceptedEulaIds
                ? {
                      ...e,
                      hasAcceptedEulaIds: []
                  }
                : e
    ]),
    (t.Z = new c(r.Z, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function () {
            l.hasAcceptedStoreTerms = !0;
        },
        APPLICATION_STORE_ACCEPT_EULA: function (e) {
            let { eulaId: t } = e;
            if (l.hasAcceptedEulaIds.includes(t)) return !1;
            l.hasAcceptedEulaIds.push(t);
        }
    }));
