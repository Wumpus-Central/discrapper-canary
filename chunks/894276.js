n.d(t, {
    IZ: () => _,
    Ng: () => h,
    Re: () => l,
    j_: () => p,
}),
    n(953529),
    n(539854),
    n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(668757),
    o = n(750179);
function s(e, t, n) {
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
let l = [],
    c = Symbol("unknown");
class u {
    getEnabledFeatureName() {
        let e = this.getCachedConfig();
        return void 0 === e || e.treatmentId <= 0 ? null : "".concat(this.id, ":").concat(e.treatmentId);
    }
    getCachedConfig() {
        return (
            this.cachedConfig === c &&
                ((0, a.X6)() ? (this.cachedConfig = (0, a.Md)().getConfig(this.id)) : (this.cachedConfig = void 0)),
            this.cachedConfig
        );
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
        var n;
        s(this, "id", void 0),
            s(this, "inner", void 0),
            s(this, "cachedConfig", void 0),
            s(this, "legacyExperiment", void 0),
            (this.id = e),
            (this.inner = null),
            (this.cachedConfig = c),
            l.push(this),
            (this.legacyExperiment = null != (n = null == t ? void 0 : t.legacyExperiment) && n);
    }
}
class d extends u {
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
        return (0, o.k)(t);
    }
    getEnabledFeatureName() {
        let e = this.getCachedBridgedStoreMode();
        return "typescript" === e ? null : "".concat(this.type, "Store[").concat(this.storeName, ",").concat(e, "]");
    }
    getLabel() {
        return "libdiscore '".concat(this.storeName, "' Migration");
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
                label: "Use typescript as the source of truth",
            },
            {
                treatmentId: 1,
                label: "Typescript <-> libdiscore Dual Read, Typescript is the source of truth",
            },
            {
                treatmentId: 2,
                label: "Use libdiscore as the source of truth",
            },
        ];
    }
    constructor(e, t, n, r) {
        super(e, r), s(this, "storeName", void 0), s(this, "type", void 0), (this.storeName = t), (this.type = n);
    }
}
class f extends u {
    getLabel() {
        return "libdiscore Telemetry";
    }
    getTreatments() {
        return [
            {
                treatmentId: 0,
                label: "Disabled",
            },
            {
                treatmentId: 1,
                label: "Enabled (1% sample rate)",
            },
            {
                treatmentId: 2,
                label: "Enabled (5% sample rate)",
            },
            {
                treatmentId: 3,
                label: "Enabled (100% sample rate)",
            },
        ];
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
        super(...e), s(this, "MAX_EMISSIONS_PER_APP_LAUNCH", 5), s(this, "emissionsCount", 0);
    }
}
let _ = new d("2025-05_libdiscore_notestore_v2", "NoteStore", "Kv", { legacyExperiment: !0 }),
    p = new d("2025-07_libdiscore_guildstore_v2", "GuildStore", "Kv", { legacyExperiment: !0 }),
    h = new d("2025-09-libdiscore-guildrolestore", "GuildRoleStore", "Kkv");
new f("2025-09-libdiscore-telemetry");
