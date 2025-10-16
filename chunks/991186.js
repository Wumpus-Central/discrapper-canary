n.d(t, { Z: () => O }), n(388685);
var r = n(579092),
    i = n(704215),
    a = n(433517),
    o = n(660216),
    s = n(147913),
    l = n(266454),
    c = n(556296),
    u = n(13140),
    d = n(32300),
    f = n(981631);
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
function p(e) {
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
function m(e, t) {
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
let g = "overlayKeybindExperimentPreviousKeybindSettings",
    E = new r.Yd("OverlayKeybindExperimentManager");
class b {
    constructor() {
        _(this, "_settings", void 0),
            _(this, "setPreviousKeybind", (e) => {
                (this._settings.previousKeybind = e), a.K.set(g, this._settings);
            }),
            _(this, "getPreviousKeybind", () => this._settings.previousKeybind),
            _(this, "hasPreviousKeybind", () => null != this._settings.previousKeybind),
            _(this, "setIsNewOverlayUser", (e) => {
                (this._settings.isNewOverlayUser = e), a.K.set(g, this._settings);
            }),
            _(this, "getIsNewOverlayUser", () => this._settings.isNewOverlayUser),
            _(this, "hasIsNewOverlayUser", () => null != this._settings.isNewOverlayUser),
            (this._settings = a.K.get(g, {}));
    }
}
class y extends s.Z {
    constructor(...e) {
        super(...e),
            _(this, "_hasInitialized", !1),
            _(this, "_isProcessing", !1),
            _(this, "_storage", new b()),
            _(this, "initializeKeybind", () => {
                if (this._storage.hasPreviousKeybind()) return;
                let e = c.ZP.getOverlayKeybind();
                this._storage.setPreviousKeybind((0, u.BB)(e.shortcut));
            }),
            _(this, "dispatchSetKeybind", (e) => {
                if (null == e) return;
                let t = c.ZP.getOverlayKeybind();
                return o.Z.setKeybind(m(p({}, t), { shortcut: (0, u.Kd)(e) }));
            }),
            _(this, "restoreKeybind", async () => {
                let e = this._storage.getPreviousKeybind();
                null != e && (await this.dispatchSetKeybind(e));
            }),
            _(this, "processKeybindExperiment", async () => {
                this.initializeKeybind();
                let { keybindOverride: e } = (0, d.eV)("OverlayKeybindExperimentManager", !1);
                null == e ? await this.restoreKeybind() : await this.dispatchSetKeybind(e);
            }),
            _(this, "processExperiment", async () => {
                if (!__OVERLAY__ && !this._isProcessing) {
                    this._isProcessing = !0;
                    try {
                        await this.processKeybindExperiment();
                    } catch (e) {
                        E.error("Experiments processing failed", { error: e });
                    } finally {
                        this._isProcessing = !1;
                    }
                }
            }),
            _(this, "maybeInitExperiment", async () => {
                this._hasInitialized ||
                    ((this._hasInitialized = !0),
                    E.info("Experiments initializing..."),
                    await this.processExperiment(),
                    E.info("Experiments initialized"));
            }),
            _(
                this,
                "isNewOverlayUser",
                () => (
                    this._storage.hasIsNewOverlayUser() ||
                        this._storage.setIsNewOverlayUser(
                            !(0, l.zu)(i.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) &&
                                !(0, l.zu)(i.z.OVERLAY_OOP_WELCOME_NUX),
                        ),
                    this._storage.getIsNewOverlayUser()
                ),
            ),
            _(this, "handlePostConnectionOpen", async () => {
                __OVERLAY__ || this._isProcessing || (this.isNewOverlayUser() && (await this.maybeInitExperiment()));
            }),
            _(this, "handleExperimentsInit", async () => {
                __OVERLAY__ || this._isProcessing || (this.isNewOverlayUser() && (await this.maybeInitExperiment()));
            }),
            _(this, "handleExperimentOverrideBucket", async (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (this.isNewOverlayUser() &&
                        (E.info("Experiments processing...", { action: e }), await this.processExperiment()));
            }),
            _(this, "handleKeybindSet", (e) => {
                __OVERLAY__ ||
                    this._isProcessing ||
                    (e.keybind.action === f.kg4.TOGGLE_OVERLAY_INPUT_LOCK &&
                        this._storage.setPreviousKeybind((0, u.BB)(e.keybind.shortcut)));
            }),
            _(this, "handleOverlayReady", () => {
                !__OVERLAY__ &&
                    this.isNewOverlayUser() &&
                    d.ZU.trackExposure({ location: "OverlayKeybindExperimentManager" });
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
let O = new y();
