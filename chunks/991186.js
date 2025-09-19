n.d(t, { Z: () => m }), n(388685);
var r = n(433517),
    i = n(660216),
    a = n(147913),
    o = n(556296),
    s = n(13140),
    l = n(32300),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = "overlayKeybindExperimentPreviousKeybindSettings";
class h extends a.Z {
    constructor(...e) {
        super(...e),
            u(this, "storeKeybind", (e) => {
                null != e && r.K.set(p, { keybind: e });
            }),
            u(this, "dispatchSetKeybind", (e) => {
                if (null == e) return;
                let t = o.ZP.getOverlayKeybind();
                return i.Z.setKeybind(_(d({}, t), { shortcut: (0, s.Kd)(e) }));
            }),
            u(this, "applyKeybind", async (e) => {
                if (null == e) return;
                this.terminate(!0);
                let t = o.ZP.getOverlayKeybind();
                this.storeKeybind((0, s.BB)(t.shortcut)), await this.dispatchSetKeybind(e), this.initialize();
            }),
            u(this, "restoreKeybind", async (e) => {
                null != e && (this.terminate(!0), await this.dispatchSetKeybind(e), r.K.remove(p), this.initialize());
            }),
            u(this, "handleOverlayReady", async () => {
                if (__OVERLAY__) return;
                let { keybindOverride: e } = (0, l.eV)("OverlayKeybindExperimentManager"),
                    t = r.K.get(p);
                null == t ? await this.applyKeybind(e) : null == e && (await this.restoreKeybind(t.keybind));
            }),
            u(this, "handleKeybindSet", (e) => {
                __OVERLAY__ ||
                    (null != r.K.get(p) &&
                        e.keybind.action === c.kg4.TOGGLE_OVERLAY_INPUT_LOCK &&
                        this.storeKeybind((0, s.BB)(e.keybind.shortcut)));
            }),
            u(this, "actions", {
                OVERLAY_READY: this.handleOverlayReady,
                KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
            });
    }
}
let m = new h();
