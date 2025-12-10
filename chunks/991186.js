n.d(t, {
    FM: () => C,
    Wx: () => S,
    ZP: () => P,
    Zh: () => I,
    jt: () => T,
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
    p = n(981631);
function _(e, t, n) {
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
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
            : h(Object(t)).forEach(function (n) {
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
    y.setState((t) => m({}, t, e), !0), o.K.set(E, y.getState());
}
let S = () => {
        v({ isNewOverlayUser: void 0 });
    },
    I = () => {
        v({ isUsingDefaultOverlayKeybind: void 0 });
    },
    T = (e) => {
        v({ overrideIsNewOverlayUser: e });
    };
function C(e) {
    v({ overrideIsUsingDefaultOverlayKeybind: e });
}
function A() {
    let e = u.ZP.getKeybindForAction(p.kg4.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    if (null == e) return !0;
    let t = (0, u.vN)();
    return (0, d.m3)(e.shortcut, t.shortcut);
}
class N extends l.Z {
    constructor(...e) {
        super(...e),
            _(this, "_hasInitialized", !1),
            _(this, "_isProcessing", !1),
            _(this, "initializeKeybind", () => {
                if (null != O().previousKeybind) return;
                let e = u.ZP.getOverlayKeybind();
                v({ previousKeybind: (0, d.BB)(e.shortcut) });
            }),
            _(this, "dispatchSetKeybind", (e) => {
                if (null == e) return;
                let t = u.ZP.getOverlayKeybind();
                return s.Z.setKeybind(g(m({}, t), { shortcut: (0, d.Kd)(e) }));
            }),
            _(this, "restoreKeybind", async () => {
                let e = O().previousKeybind;
                null != e && (await this.dispatchSetKeybind(e));
            }),
            _(this, "processKeybindExperiment", async () => {
                this.initializeKeybind();
                let { keybindOverride: e } = (0, f.eV)("OverlayKeybindExperimentManager", !1),
                    t = this.isEligibleForExperiment();
                O().keybindTreatment !== e &&
                    (null == e
                        ? (await this.restoreKeybind(), v({ keybindTreatment: void 0 }))
                        : t && (await this.dispatchSetKeybind(e), v({ keybindTreatment: e })));
            }),
            _(this, "processExperiment", async () => {
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
            _(this, "maybeInitExperiment", async () => {
                this._hasInitialized ||
                    ((this._hasInitialized = !0),
                    b.info("Experiments initializing..."),
                    await this.processExperiment(),
                    b.info("Experiments initialized"));
            }),
            _(this, "isNewOverlayUser", () =>
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
            _(this, "isUsingDefaultOverlayKeybind", () =>
                (null == O().isUsingDefaultOverlayKeybind && v({ isUsingDefaultOverlayKeybind: A() }),
                null != O().overrideIsUsingDefaultOverlayKeybind)
                    ? O().overrideIsUsingDefaultOverlayKeybind
                    : O().isUsingDefaultOverlayKeybind,
            ),
            _(this, "isEligibleForExperiment", () => {
                let e = this.isNewOverlayUser(),
                    t = this.isUsingDefaultOverlayKeybind();
                return e && t;
            }),
            _(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            _(this, "handleExperimentsInit", async () => {
                __OVERLAY__ || this._isProcessing || (await this.maybeInitExperiment());
            }),
            _(this, "handleExperimentOverrideBucket", async (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (b.info("Experiments processing...", { action: e }), await this.processExperiment());
            }),
            _(this, "handleKeybindSet", (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (e.keybind.action === p.kg4.TOGGLE_OVERLAY_INPUT_LOCK &&
                        v({ previousKeybind: (0, d.BB)(e.keybind.shortcut) }));
            }),
            _(this, "handleOverlayReady", () => {
                !__OVERLAY__ &&
                    this.isEligibleForExperiment() &&
                    f.ZU.trackExposure({ location: "OverlayKeybindExperimentManager" });
            }),
            _(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
                EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
                KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
                OVERLAY_READY: this.handleOverlayReady,
            });
    }
}
let P = new N();
