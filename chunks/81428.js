"use strict";
n.d(t, { A: () => d });
var r = n(311907),
    i = n(73153),
    s = n(518977),
    a = n(653741);
let o = null,
    l = null;
function u(e) {
    if (null == e) return !1;
    l = (0, s.XF)(e) ?? (0, s.rE)();
}
class c extends r.Ay.Store {
    static displayName = "RegionalFeatureConfigStore";
    getRegionalFeatureConfig() {
        return o;
    }
    isFeatureAgeGated(e) {
        return o?.isFeatureAgeGated(e) ?? !1;
    }
    isSettingTeenByDefault(e) {
        return o?.isFeatureTeenByDefault(e) ?? !1;
    }
    hasAgeGatedFeatures() {
        return o?.hasAgeGatedFeatures() ?? !1;
    }
    hasTeenDefaults() {
        return o?.hasTeenDefaults() ?? !1;
    }
    getUserCountryCode() {
        return l;
    }
}
let d = new c(i.h, {
    CONNECTION_OPEN: function (e) {
        u(e.countryCode),
            (o = null != e.regionalFeatureConfig ? a.wN.fromConnectionOpen(e.regionalFeatureConfig) : null);
    },
    SET_LOCATION_METADATA: function (e) {
        let { countryCode: t } = e;
        return u(t);
    },
});
