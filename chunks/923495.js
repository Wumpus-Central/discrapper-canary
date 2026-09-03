n.d(t, { A: () => A });
var i = n(17928),
    r = n(228366),
    a = n(423764);
class s {
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
class l {
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
class o {
    shouldCollectSignal;
    constructor(e) {
        this.shouldCollectSignal = e;
    }
}
class d {
    settings;
    ageVerification;
    appStore;
    constructor(e, t, n) {
        (this.settings = e), (this.ageVerification = t), (this.appStore = n);
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
    shouldCollectAppStoreSignal() {
        return this.appStore.shouldCollectSignal;
    }
    static fromConnectionOpen(e) {
        return new d(
            new s(e.teen_by_default_settings),
            new l(e.age_gated_features),
            new o(!0 === e.should_collect_app_store_signal),
        );
    }
}
let c = null,
    u = null;
function _(e) {
    if (null == e) return !1;
    u = (0, a.XF)(e) ?? (0, a.rE)();
}
class E extends i.Ay.Store {
    static displayName = "RegionalFeatureConfigStore";
    getRegionalFeatureConfig() {
        return c;
    }
    isFeatureAgeGated(e) {
        return c?.isFeatureAgeGated(e) ?? !1;
    }
    isSettingTeenByDefault(e) {
        return c?.isFeatureTeenByDefault(e) ?? !1;
    }
    hasAgeGatedFeatures() {
        return c?.hasAgeGatedFeatures() ?? !1;
    }
    hasTeenDefaults() {
        return c?.hasTeenDefaults() ?? !1;
    }
    shouldCollectAppStoreSignal() {
        return c?.shouldCollectAppStoreSignal() ?? !1;
    }
    getUserCountryCode() {
        return u;
    }
}
let A = new E(r.h, {
    CONNECTION_OPEN: function (e) {
        _(e.countryCode), (c = null != e.regionalFeatureConfig ? d.fromConnectionOpen(e.regionalFeatureConfig) : null);
    },
    SET_LOCATION_METADATA: function (e) {
        let { countryCode: t } = e;
        return _(t);
    },
});
