n.d(t, {
    E3: () => E,
    Re: () => u,
    fg: () => h,
    iZ: () => g,
}),
    n(953529),
    n(539854),
    n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(668757),
    o = n(579092),
    s = n(750179);
function l(e, t, n) {
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
let c = new o.Yd("LibdiscoreExperiments"),
    u = [],
    d = Symbol("unknown");
class f {
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(e.treatmentId);
    }
    getCachedConfig() {
        if (this.cachedConfig === d)
            if ((0, a.X6)())
                try {
                    this.cachedConfig = (0, a.Md)().getConfig(this.id);
                } catch (e) {
                    (this.cachedConfig = void 0), c.error("Error getting experiment config", e);
                }
            else this.cachedConfig = void 0;
        return this.cachedConfig;
    }
    setExperiment(e) {
        this.inner = e;
    }
    getCurrentConfig() {
        return (i()(null != this.inner, "experiment must be set before calling getCurrentConfig"),
        "getCurrentConfig" in this.inner)
            ? this.inner.getCurrentConfig({ location: "default" })
            : this.inner.getConfig({ location: "default" });
    }
    constructor(e, t) {
        l(this, "id", void 0),
            l(this, "inner", void 0),
            l(this, "cachedConfig", void 0),
            (this.id = e),
            (this.inner = null),
            (this.cachedConfig = d),
            u.push(this);
    }
}
class p extends f {
    getLabel() {
        return this.label;
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }];
    }
    getCachedEnabled() {
        let e = this.getCachedConfig();
        return null != e && 1 === e.treatmentId;
    }
    constructor(e, t) {
        super(e), l(this, "label", void 0), (this.label = t);
    }
}
class _ extends f {
    getCachedBridgedStoreMode() {
        let e = this.getCachedConfig(),
            t = (() => {
                var t;
                switch (null != (t = null == e ? void 0 : e.treatmentId) ? t : -1) {
                    case 1:
                        return "typescript-libdiscore-dual-read";
                    case 2:
                        return "libdiscore";
                    default:
                        return "typescript";
                }
            })();
        return (0, s.k)(t);
    }
    getEnabledFeatureName() {
        let e = this.getCachedBridgedStoreMode();
        return "typescript" === e ? null : "".concat(this.type, "Store[").concat(this.storeName, ",").concat(e, "]");
    }
    getLabel() {
        return "libdiscore '".concat(this.storeName, "' Migration");
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }];
    }
    constructor(e, t, n, r) {
        super(e, r), l(this, "storeName", void 0), l(this, "type", void 0), (this.storeName = t), (this.type = n);
    }
}
class m extends f {
    getLabel() {
        return "libdiscore Telemetry";
    }
    getTreatments() {
        return [{ treatmentId: 0 }, { treatmentId: 1 }, { treatmentId: 2 }, { treatmentId: 3 }];
    }
    getMetricsSampleRate() {
        let e = this.getCachedConfig();
        switch (null == e ? void 0 : e.treatmentId) {
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
            0 !== e && (1 === e || (!(this.emissionsCount >= this.MAX_EMISSIONS_PER_APP_LAUNCH) && Math.random() < e))
        );
    }
    constructor(...e) {
        super(...e), l(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), l(this, "emissionsCount", 0);
    }
}
let h = new _("2025-09-libdiscore-rawguildemojistore", "RawGuildEmojiStore", "Kkv"),
    g = new _("2025-10-libdiscore-guildstickersstore", "GuildStickersStore", "Kkv");
new m("2025-09-libdiscore-telemetry");
let E = new p("2025-11-defer-load-late-lazy-cache", "Allow react to render before lazy cache is loaded");
