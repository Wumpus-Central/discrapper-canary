n.d(t, {
    FM: () => A,
    Wx: () => I,
    ZP: () => R,
    Zh: () => T,
    jt: () => S,
    xj: () => y,
}),
    n(388685);
var r = n(663042),
    i = n(579092),
    a = n(704215),
    o = n(433517),
    s = n(660216),
    l = n(147913),
    c = n(266454),
    u = n(556296),
    d = n(13140),
    f = n(32300),
    _ = n(981631);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "overlayKeybindExperimentPreviousKeybindSettings",
    b = new i.Yd("OverlayKeybindExperimentManager"),
    y = (0, r.U)(() => o.K.get(E, {}));
function O() {
    return y.getState();
}
function v(e) {
    y.setState((t) => h({}, t, e), !0), o.K.set(E, y.getState());
}
let I = () => {
        v({ isNewOverlayUser: void 0 });
    },
    T = () => {
        v({ isUsingDefaultOverlayKeybind: void 0 });
    },
    S = (e) => {
        v({ overrideIsNewOverlayUser: e });
    };
function A(e) {
    v({ overrideIsUsingDefaultOverlayKeybind: e });
}
function C() {
    let e = u.ZP.getKeybindForAction(_.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    if (null == e) return !0;
    let t = (0, u.vN)();
    return (0, d.m3)(e.shortcut, t.shortcut);
}
class N extends l.Z {
    constructor(...e) {
        super(...e),
            p(this, "_hasInitialized", !1),
            p(this, "_isProcessing", !1),
            p(this, "initializeKeybind", () => {
                if (null != O().previousKeybind) return;
                let e = u.ZP.getOverlayKeybind();
                v({ previousKeybind: (0, d.BB)(e.shortcut) });
            }),
            p(this, "dispatchSetKeybind", (e) => {
                if (null == e) return;
                let t = u.ZP.getOverlayKeybind();
                return s.Z.setKeybind(g(h({}, t), { shortcut: (0, d.Kd)(e) }));
            }),
            p(this, "restoreKeybind", async () => {
                let e = O().previousKeybind;
                null != e && (await this.dispatchSetKeybind(e));
            }),
            p(this, "processKeybindExperiment", async () => {
                this.initializeKeybind();
                let { keybindOverride: e } = (0, f.eV)("OverlayKeybindExperimentManager", !1),
                    t = this.isEligibleForExperiment();
                O().keybindTreatment !== e &&
                    (null == e
                        ? (await this.restoreKeybind(), v({ keybindTreatment: void 0 }))
                        : t && (await this.dispatchSetKeybind(e), v({ keybindTreatment: e })));
            }),
            p(this, "processExperiment", async () => {
                if (!__OVERLAY__ && !this._isProcessing) {
                    this._isProcessing = !0;
                    try {
                        await this.processKeybindExperiment();
                    } catch (e) {
                        b.error("Experiments processing failed", { error: e });
                    } finally {
                        this._isProcessing = !1;
                    }
                }
            }),
            p(this, "maybeInitExperiment", async () => {
                this._hasInitialized ||
                    ((this._hasInitialized = !0),
                    b.info("Experiments initializing..."),
                    await this.processExperiment(),
                    b.info("Experiments initialized"));
            }),
            p(this, "isNewOverlayUser", () =>
                (null == O().isNewOverlayUser &&
                    v({
                        isNewOverlayUser:
                            !(0, c.zu)(a.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) &&
                            !(0, c.zu)(a.z.OVERLAY_OOP_WELCOME_NUX),
                    }),
                null != O().overrideIsNewOverlayUser)
                    ? O().overrideIsNewOverlayUser
                    : O().isNewOverlayUser,
            ),
            p(this, "isUsingDefaultOverlayKeybind", () =>
                (null == O().isUsingDefaultOverlayKeybind && v({ isUsingDefaultOverlayKeybind: C() }),
                null != O().overrideIsUsingDefaultOverlayKeybind)
                    ? O().overrideIsUsingDefaultOverlayKeybind
                    : O().isUsingDefaultOverlayKeybind,
            ),
            p(this, "isEligibleForExperiment", () => {
                let e = this.isNewOverlayUser(),
                    t = this.isUsingDefaultOverlayKeybind();
                return e && t;
            }),
            p(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            p(this, "handleExperimentsInit", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            p(this, "handleExperimentOverrideBucket", async (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (b.info("Experiments processing...", { action: e }), await this.processExperiment());
            }),
            p(this, "handleKeybindSet", (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (e.keybind.action === _.kg4.TOGGLE_OVERLAY_INPUT_LOCK &&
                        v({ previousKeybind: (0, d.BB)(e.keybind.shortcut) }));
            }),
            p(this, "handleOverlayReady", () => {
                !__OVERLAY__ &&
                    this.isEligibleForExperiment() &&
                    f.ZU.trackExposure({ location: "OverlayKeybindExperimentManager" });
            }),
            p(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
                EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
                KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
                OVERLAY_READY: this.handleOverlayReady,
            });
    }
}
let R = new N();
