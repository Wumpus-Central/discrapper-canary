n.d(t, {
    A: () => d,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(653741);

function o(e, t, n) {
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
let l = null;

function c(e) {
    l = null != e.regionalFeatureConfig ? s.wN.fromConnectionOpen(e.regionalFeatureConfig) : null;
}
class u extends (r = i.Ay.Store) {
    getRegionalFeatureConfig() {
        return l;
    }
    isFeatureAgeGated(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureAgeGated(e)) && t;
    }
    isSettingTeenByDefault(e) {
        var t;
        return null != (t = null == l ? void 0 : l.isFeatureTeenByDefault(e)) && t;
    }
    hasAgeGatedFeatures() {
        var e;
        return null != (e = null == l ? void 0 : l.hasAgeGatedFeatures()) && e;
    }
    hasTeenDefaults() {
        var e;
        return null != (e = null == l ? void 0 : l.hasTeenDefaults()) && e;
    }
}
o(u, "displayName", "RegionalFeatureConfigStore");
let d = new u(a.h, {
    CONNECTION_OPEN: c,
});
