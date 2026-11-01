n.d(t, { A: () => j });
var i = n(17928),
    r = n(941426),
    a = n(73153),
    s = n(736056),
    l = n(9302),
    o = n(211753),
    d = n(206885),
    c = n(682763),
    u = n(77729),
    _ = n(626584),
    E = n(384077),
    A = n(869146),
    h = n(19575),
    f = n(181435),
    I = n(48345),
    p = n(661886),
    T = n(96175),
    m = n(237984),
    g = n(567249),
    S = n(392164);
let N = new r.Vy("OverlayV3NativeModuleUtils");
async function C() {
    let e;
    if (null == g.A.getWindow(S.f)) return;
    N.warn("Waiting for previous overlay popout to be destroyed.");
    let t = new Promise((e) => {
        setTimeout(() => {
            e();
        }, 5e3);
    });
    function n() {
        null == g.A.getWindow(S.f) && e?.();
    }
    let i = new Promise((t) => {
        ((e = t), g.A.addChangeListener(n));
    });
    try {
        await Promise.race([t, i]);
    } finally {
        g.A.removeChangeListener(n);
    }
    null != g.A.getWindow(S.f) && N.error("Previous overlay popout was not destroyed after 5 seconds!");
}
let O = new _.A("OverlayV3NativeModule");
function R(e, t, n) {
    ((0, c._r)(e, "renderer_window_focus_changed", {
        windowHandle: t,
        popoutInitializationStages: p.A.getPopoutInitializationStages(),
    }),
        (0, c.cS)(e, null != t ? (0, T.Oy)(t) : null, n));
}
function L(e) {
    ((0, c._r)(e, "renderer_window_focus_lost", { popoutInitializationStages: p.A.getPopoutInitializationStages() }),
        (0, c.C7)(e));
}
function y(e) {
    ((0, c._r)(e, "successfully_shown", { popoutInitializationStages: p.A.getPopoutInitializationStages() }),
        (0, c.oW)(e));
}
function D(e) {
    ((0, c._r)(null, "window_handle_initialized", {
        real_initialized: e,
        popoutInitializationStages: p.A.getPopoutInitializationStages(),
    }),
        (0, c.i0)(e));
}
class v {
    static instance = null;
    module = null;
    modulePromise = null;
    isCrashedDisabled = !1;
    lastAssociatedPID = null;
    trackedGamePids = new Set();
    static getInstance() {
        return (null == this.instance && (this.instance = new v()), this.instance);
    }
    async initialize() {
        return await this.prepareOverlayModule();
    }
    getOverlayModule() {
        if (null == this.module) throw Error("Overlay module not loaded");
        return this.module;
    }
    destroy() {
        ((this.module = null),
            (this.lastAssociatedPID = null),
            (this.trackedGamePids = new Set()),
            O.info("OverlayV3 Native Module destroyed"));
    }
    getLastAssociatedPID() {
        return this.lastAssociatedPID;
    }
    prepareOverlayModule() {
        return (
            null != this.modulePromise || (this.modulePromise = this.loadOutOfProcessOverlayModule()),
            this.modulePromise
        );
    }
    async loadOutOfProcessOverlayModule() {
        if (!d.O) return void O.error("Attempted to load overlay on an unsupported platform.");
        O.info("Loading Out of Process Overlay Module");
        try {
            var e;
            await h.Ay.ensureModule("discord_desktop_overlay");
            let t = h.Ay.requireModule("discord_desktop_overlay");
            (t.init(),
                t.setHostWindowCallbacks(
                    (e) => this.createOutOfProcessOverlayHostWindow(e),
                    () => this.destroyOutOfProcessOverlayHostWindow(),
                    (e) => this.refreshOutOfProcessOverlayHostWindow(e),
                ),
                (this.module = t),
                (0, c._r)(null, "module_loaded"),
                (0, l.setOutOfProcessSupport)(!0),
                (e = this.module),
                e.setFocusCallback?.(R),
                e.setFocusLostCallback?.(L),
                e.setSuccessfullyShownCallback?.(y),
                e.setOnWindowHandleInitializedCallback?.(D),
                (0, c._r)(null, "native_module_callbacks_setup"),
                O.verbose("Native module callbacks setup"),
                (0, c.Mi)(),
                O.info("OverlayV3 Module Loaded"));
        } catch (e) {
            throw (
                O.error("failed loading overlay module", e),
                (0, l.setOutOfProcessSupport)(!1),
                (0, c.wK)(e),
                (this.module = null),
                (this.modulePromise = null),
                e
            );
        }
    }
    async createOutOfProcessOverlayHostWindow(e) {
        (O.verbose(`Creating OOP Host Window for pid ${e}`), (0, c.wX)(e));
        let t = null;
        try {
            ((0, c._r)(e, "host_window_mounting_started", {
                popoutInitializationStages: p.A.getPopoutInitializationStages(),
            }),
                await C(),
                (t = await this.openOverlayPopout()),
                await (0, c.hJ)(e),
                (0, c._r)(e, "host_window_created", {
                    hasWindow: null != t,
                    popoutInitializationStages: p.A.getPopoutInitializationStages(),
                }));
        } catch (t) {
            (O.error("Error creating OOP host window:", t),
                (0, c._r)(e, "host_window_mounting_failed", { error: t }, f.QJ.Error));
        }
        if (!(0, E.ZT)("overlay_v3_native_module"))
            try {
                u.A?.window?.setBackgroundThrottling(!1);
            } catch (t) {
                (O.error("Error setting background throttling:", t),
                    (0, c._r)(e, "background_throttling_setting_failed", { error: t }, f.QJ.Error));
            }
        let n = null;
        try {
            ((n = await this.getNativeWindowHandleWithRetry()),
                I.A.resetWindowState(),
                (0, c._r)(e, "native_window_handle_retrieved", {
                    handle: n,
                    hasWindow: null != n,
                    popoutInitializationStages: p.A.getPopoutInitializationStages(),
                }),
                await (0, c.pi)(e, n),
                this.module?.setOnWindowHandleInitializedCallback == null && (await (0, c.i0)(!0)));
        } catch (t) {
            (O.error("Error getting native window handle:", t),
                (0, c.lo)(e, t, n),
                (0, c._r)(
                    e,
                    "native_window_handle_retrieval_failed",
                    {
                        error: t,
                        handle: n,
                        hasWindow: null != n,
                        popoutInitializationStages: p.A.getPopoutInitializationStages(),
                    },
                    f.QJ.Error,
                ));
        }
        return (
            null == n
                ? (0, c.mD)(e, Error("Native window handle not found"), { crashType: "native", isCrashedDisabled: !0 })
                : (this.lastAssociatedPID = e),
            n ?? ""
        );
    }
    destroyOutOfProcessOverlayHostWindow() {
        (O.verbose("Destroying OOP host window"), (0, c._r)(this.lastAssociatedPID, "host_window_destroyed"));
        try {
            (u.A?.window?.close(S.f), u.A?.window?.setBackgroundThrottling(!0), I.A.resetWindowState(!1));
        } catch (e) {
            O.error("Error closing overlay window:", e);
        }
        ((0, c.bF)(this.lastAssociatedPID), (this.lastAssociatedPID = null));
    }
    refreshOutOfProcessOverlayHostWindow(e) {
        (O.verbose(`Refreshing OOP host window for pid ${e}`),
            (0, c._r)(e, "host_window_refreshing_started", {
                popoutInitializationStages: p.A.getPopoutInitializationStages(),
            }),
            (0, c.ot)(e, this.lastAssociatedPID),
            (this.lastAssociatedPID = e));
    }
    async openOverlayPopout() {
        return (await (0, m.o)(), await this.getWindowWithRetry());
    }
    async getWithRetry(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        for (let i = 0; i < n; i++) {
            let r = i + 1 >= n;
            try {
                let t = await e();
                if (null != t) return t;
            } catch (n) {
                if (r) throw n;
                let e = Math.pow(2, i + 1) * t;
                await new Promise((t) => setTimeout(t, e));
            }
        }
        return null;
    }
    async getWindowWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            () => {
                let e = A.A.getWindow(S.f);
                if (null == e) throw Error("Overlay popout window not found");
                return Promise.resolve(e);
            },
            e,
            t,
        );
    }
    async getNativeWindowHandleWithRetry() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        return await this.getWithRetry(
            async () => {
                let e = await u.A?.window?.getNativeHandle(S.f);
                return null != e ? (0, T.Oy)(e) : null;
            },
            e,
            t,
        );
    }
    getNativeBreadcrumbs(e, t) {
        this.module?.getBreadcrumbs?.(e, t);
    }
    getDebuggingState(e) {
        this.module?.getDebuggingState?.(e);
    }
    setDetailedLogging(e) {
        this.module?.setDetailedLogging?.(e);
    }
    version() {
        return this.module?.version ?? 0;
    }
    onNativePopoutShowInactiveSuccess() {
        this.module?.onPopoutShowInactive?.();
    }
    setRenderingWindowHandle(e, t) {
        (this.module?.setRenderingWindowHandle?.(e), O.verbose(`Setting rendering window handle for pid ${t}: ${e}`));
    }
    setInteractionEnabled(e) {
        this.module?.setInteractionEnabled?.(e);
    }
    setLimitedInteraction(e) {
        (this.module?.setLimitedInteraction?.(e), h.Ay.setFocusable(S.f, !e));
    }
    setCaptureZoneCallback(e) {
        this.module?.setCaptureZoneCallback?.(e);
    }
    setCaptureZones(e) {
        this.module?.setCaptureZones?.(e);
    }
    readyToShow(e) {
        this.module?.readyToShow?.(e);
    }
    trackGame(e) {
        null != this.module && (this.module.trackGame(e), this.trackedGamePids.add(e), (0, c.wb)(e));
    }
    untrackGame(e) {
        if (null == this.module) return;
        (this.module.untrackGame(e), this.trackedGamePids.delete(e));
        let t = this.trackedGamePids.values().next().value;
        (this.lastAssociatedPID === e && null != t
            ? (this.lastAssociatedPID = t)
            : this.lastAssociatedPID === e && null == t && (this.lastAssociatedPID = null),
            (0, c.Lt)(e));
    }
}
n(672396);
let b = new r.Vy("OverlayV3NativeModuleStore"),
    P = !1,
    M = !1,
    U = null,
    w = !1,
    G = null,
    x = null,
    k = (() => {
        async function e() {
            (B(), (U = v.getInstance()));
            try {
                (await U.initialize(), (P = !0));
            } catch (e) {
                ((0, c._r)(null, "module_initialization_failed", { error: e }),
                    (P = !1),
                    (0, c.mD)(-1, e, { crashType: "native" }));
            } finally {
                H.emitChange();
            }
        }
        return () => (null == x && (x = e()), x);
    })();
function F(e) {
    __OVERLAY__ || !d.O || (M !== e && ((M = e), e && (0, l.setOutOfProcessSupport)(!0)));
}
function B() {
    !__OVERLAY__ && d.O && ((G = null), (w = !1), b.verbose("Maybe Enable Overlay"), F(o.x.oopEnabled));
}
class V extends i.Ay.Store {
    static displayName = "Overlay-v3-Native-Module-Store";
    initialize() {
        this.waitFor(s.A);
    }
    get isModuleLoading() {
        return null != x;
    }
    get isOverlayEnabled() {
        return M;
    }
    get isSupported() {
        return d.O;
    }
    get isModuleLoaded() {
        return P;
    }
    get isCrashedDisabled() {
        return w;
    }
    get errorMessage() {
        return G;
    }
    getNativeModule() {
        return U;
    }
}
let H = new V(
        a.h,
        __OVERLAY__ || !d.O
            ? {}
            : {
                  CONNECTION_OPEN: function () {
                      return (k(), !1);
                  },
                  EXPERIMENT_OVERRIDE_BUCKET: B,
                  OVERLAY_SET_ENABLED: function (e) {
                      let { oopEnabled: t } = e;
                      ((G = null), F(t));
                  },
                  OVERLAY_V3_LOAD_NATIVE_MODULE: function () {
                      return ((G = null), k(), !1);
                  },
                  OVERLAY_CRASHED: function (e) {
                      let { isCrashedDisabled: t, error: n } = e;
                      return (!0 === t && (w = !0), null != n && (G = n instanceof Error ? n.message : String(n)), !0);
                  },
              },
    ),
    j = H;
