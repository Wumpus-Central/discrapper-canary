"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(518977);
class a {
    teenByDefault;
    constructor(e) {
        this.teenByDefault = e;
    }
    isFeatureTeenByDefault(e) {
        return (this.teenByDefault & e) != 0;
    }
    hasTeenDefaults() {
        return (this.teenByDefault ?? 0) !== 0;
    }
}
class o {
    gatedFeatures;
    constructor(e) {
        this.gatedFeatures = e;
    }
    isFeatureAgeGated(e) {
        return (this.gatedFeatures & e) != 0;
    }
    hasAgeGatedFeatures() {
        return (this.gatedFeatures ?? 0) !== 0;
    }
}
class l {
    settings;
    ageVerification;
    constructor(e, t) {
        (this.settings = e), (this.ageVerification = t);
    }
    isFeatureAgeGated(e) {
        return this.ageVerification.isFeatureAgeGated(e);
    }
    isFeatureTeenByDefault(e) {
        return this.settings.isFeatureTeenByDefault(e);
    }
    hasAgeGatedFeatures() {
        return this.ageVerification.hasAgeGatedFeatures();
    }
    hasTeenDefaults() {
        return this.settings.hasTeenDefaults();
    }
    static fromConnectionOpen(e) {
        return new l(new a(e.teen_by_default_settings), new o(e.age_gated_features));
    }
}
let d = null,
    _ = null;
function u(e) {
    if (null == e) return !1;
    _ = (0, s.XF)(e) ?? (0, s.rE)();
}
class c extends i.Ay.Store {
    static displayName = "RegionalFeatureConfigStore";
    getRegionalFeatureConfig() {
        return d;
    }
    isFeatureAgeGated(e) {
        return d?.isFeatureAgeGated(e) ?? !1;
    }
    isSettingTeenByDefault(e) {
        return d?.isFeatureTeenByDefault(e) ?? !1;
    }
    hasAgeGatedFeatures() {
        return d?.hasAgeGatedFeatures() ?? !1;
    }
    hasTeenDefaults() {
        return d?.hasTeenDefaults() ?? !1;
    }
    getUserCountryCode() {
        return _;
    }
}
let E = new c(r.h, {
    CONNECTION_OPEN: function (e) {
        u(e.countryCode), (d = null != e.regionalFeatureConfig ? l.fromConnectionOpen(e.regionalFeatureConfig) : null);
    },
    SET_LOCATION_METADATA: function (e) {
        let { countryCode: t } = e;
        return u(t);
    },
});
