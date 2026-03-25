"use strict";
n.d(t, { A: () => f });
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
function c(e) {
    u(e.countryCode), (o = null != e.regionalFeatureConfig ? a.wN.fromConnectionOpen(e.regionalFeatureConfig) : null);
}
function d(e) {
    let { countryCode: t } = e;
    return u(t);
}
class _ extends r.Ay.Store {
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
let f = new _(i.h, { CONNECTION_OPEN: c, SET_LOCATION_METADATA: d });
