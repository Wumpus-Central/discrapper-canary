n.r(t),
    n.d(t, {
        enable: () => A,
        isNotSupported: () => T,
        trackToggleSelfDeaf: () => P,
        trackToggleSelfMute: () => N,
    });
var r = n(54381);
n(473749);
var i = n(755721),
    a = n(481060),
    o = n(570140),
    s = n(710845),
    l = n(592125),
    c = n(131951),
    u = n(944486),
    d = n(556296),
    f = n(451478),
    p = n(626135),
    _ = n(13140),
    m = n(554174),
    h = n(981631),
    g = n(761274),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = new s.Z("AudioActionCreators");
function I() {
    (0, a.ZDy)(async () => {
        let { default: e } = await Promise.all([n.e("32996"), n.e("74023")]).then(n.bind(n, 431583));
        return (t) => (0, r.jsx)(e, y({ source: "Unsupported Browser" }, t));
    });
}
function T() {
    return (
        !c.Z.isSupported() &&
        ((0, a.h7j)((e) =>
            (0, r.jsx)(
                a.VoidConfirmModal,
                v(
                    y(
                        {
                            header: E.intl.string(E.t.ilMTy0),
                            confirmText: E.intl.string(E.t["BK8LK+"]),
                            cancelText: E.intl.string(E.t["ETE/oC"]),
                            onConfirm: I,
                            confirmButtonColor: i.zx.Colors.BRAND,
                        },
                        e,
                    ),
                    {
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: E.intl.string(E.t.h66vlB),
                        }),
                    },
                ),
            ),
        ),
        !0)
    );
}
function C(e) {
    p.default.track(h.rMx.PERMISSIONS_ACKED, {
        type: "audio",
        action: e,
    });
}
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return T()
        ? Promise.resolve(!1)
        : (p.default.track(h.rMx.PERMISSIONS_REQUESTED, { type: "audio" }),
          c.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      o.Z.dispatch({
                          type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                          enabled: !0,
                          unmute: e,
                      }),
                          C(g.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case h.ETv.NO_DEVICES_FOUND:
                              C(g.PQ.NO_DEVICES);
                              break;
                          case h.ETv.PERMISSION_DENIED:
                              C(g.PQ.DENIED);
                              break;
                          case h.ETv.PERMISSION_DISMISSED:
                              C(g.PQ.DISMISSED);
                              break;
                          default:
                              C(g.PQ.ERROR), S.warn("unknown getUserMedia error: ".concat(e));
                      }
                  },
              )
              .then(() => !0));
}
function N(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.ZP.getKeybindForAction(h.kg4.TOGGLE_MUTE, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? l.Z.getChannel(i) : null;
    p.default.track(h.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !c.Z.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== d.Ek.id,
        used_keybind: t,
        app_in_focus: f.Z.isAppFocused(),
        overlay_activated: null != (0, m.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
function P(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.ZP.getKeybindForAction(h.kg4.TOGGLE_DEAFEN, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? l.Z.getChannel(i) : null;
    p.default.track(h.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !c.Z.isSelfDeaf(),
        keybind_assigned: null != r ? (0, _.BB)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: f.Z.isAppFocused(),
        overlay_activated: null != (0, m.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n,
    });
}
