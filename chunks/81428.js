"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    a = n(653741);
let s = null;
function o(e) {
    s = null != e.regionalFeatureConfig ? a.wN.fromConnectionOpen(e.regionalFeatureConfig) : null;
}
class l extends r.Ay.Store {
    static displayName = "RegionalFeatureConfigStore";
    getRegionalFeatureConfig() {
        return s;
    }
    isFeatureAgeGated(e) {
        return s?.isFeatureAgeGated(e) ?? !1;
    }
    isSettingTeenByDefault(e) {
        return s?.isFeatureTeenByDefault(e) ?? !1;
    }
    hasAgeGatedFeatures() {
        return s?.hasAgeGatedFeatures() ?? !1;
    }
    hasTeenDefaults() {
        return s?.hasTeenDefaults() ?? !1;
    }
}
let u = new l(i.h, { CONNECTION_OPEN: o });
