"use strict";
n.d(t, { pX: () => T, FH: () => I, P4: () => E, pd: () => A, ML: () => d, hw: () => p }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(306173),
    s = n(626584),
    l = n(157016);
let o = new s.A("libdiscoreExperiments"),
    d = [],
    c = Symbol("unknown");
class u {
    id;
    inner = null;
    cachedConfig = c;
    constructor(e, t) {
        (this.id = e), d.push(this);
    }
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : `${this.id}:${e.treatmentId}`;
    }
    getCachedConfig() {
        return (
            this.cachedConfig === c &&
                ((0, a.xd)() ? (this.cachedConfig = (0, a.Ih)().getConfig(this.id)) : (this.cachedConfig = void 0)),
            this.cachedConfig
        );
    }
    setExperiment(e) {
        this.inner = e;
    }
    getCurrentConfig() {
        return (r()(null != this.inner, "experiment must be set before calling getCurrentConfig"),
        "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({ location: "default" })
            : this.inner.getConfig({ location: "default" });
    }
}
class _ extends u {
    label;
    defaultValue;
    constructor(e, t, n = !1) {
        super(e), (this.label = t), (this.defaultValue = n);
    }
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }];
    }
    getCachedEnabled() {
        let e = this.getCachedConfig();
        return null == e || -1 === e.treatmentId ? this.defaultValue : 1 === e.treatmentId;
    }
}
let E = new (class extends u {
        storeName;
        constructor(e, t, n) {
            super(e, n), (this.storeName = t);
        }
        getCachedBridgedStoreMode() {
            var e;
            let t = this.getCachedConfig();
            return "typescript" ===
                (e = (() => {
                    switch (t?.treatmentId ?? -1) {
                        case 1:
                            return "typescript-libdiscore-dual-read";
                        case 2:
                            return "libdiscore";
                        default:
                            return "typescript";
                    }
                })()) || (0, l.O)()
                ? e
                : "typescript";
        }
        getEnabledFeatureName() {
            let e = this.getCachedBridgedStoreMode();
            return "typescript" === e ? null : `BridgedStore[${this.storeName},${e}]`;
        }
        getLabel() {
            return `libdiscore '${this.storeName}' Migration`;
        }
        getTreatments() {
            return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
        }
    })("2026-01-libdiscore-batch-store-refactor", "batch-store-refactor"),
    A = new (class extends u {
        MAX_EMISSIONS_PER_APP_LAUNCH = 5;
        emissionsCount = 0;
        getLabel() {
            return "libdiscore Telemetry";
        }
        getTreatments() {
            return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
        }
        getMetricsSampleRate() {
            let e = this.getCachedConfig();
            switch (e?.treatmentId) {
                case 1:
                    return 0.01;
                case 2:
                    return 0.05;
                case 3:
                    return 1;
                default:
                    return 0;
            }
        }
        didEmit() {
            this.emissionsCount++;
        }
        shouldCollectMetrics() {
            let e = this.getMetricsSampleRate();
            return (
                0 !== e &&
                (1 === e || (!(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < e))
            );
        }
    })("2025-09-libdiscore-telemetry");
class h extends u {
    label;
    treatmentCount;
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return Array.from({ length: this.treatmentCount }, (e, t) => ({ treatmentId: t }));
    }
    constructor(e, t, n) {
        super(e), (this.label = t), (this.treatmentCount = n);
    }
}
let I = new h("2026-01-android-rmle", "Android Pull Mode Rendering", 4);
new h("2026-02-android-fresco-cache", "Android Fresco Cache", 3),
    new _("2026-02-android-chat-mosaic-shared-pool", "Android Chat Mosaic Shared Pool"),
    new _("2026-03-mobile-hermes-occupancy-target", "Android Hermes Occupancy Target"),
    new _("2026-06-ios-ota-streaming", "iOS OTA Streaming Download");
let f = !1;
function p() {
    return f;
}
function T() {
    (0, a.xd)() &&
        (o.info("Clearing libdiscore experiment cache and disabling sync"), (f = !0), (0, a.Ih)().clearCache());
}
