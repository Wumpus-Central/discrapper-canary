(n.r(t),
    n.d(t, {
        enable: () => N,
        isNotSupported: () => S,
        trackToggleSelfDeaf: () => R,
        trackToggleSelfMute: () => C
    }));
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(570140),
    s = n(710845),
    l = n(592125),
    c = n(131951),
    u = n(944486),
    d = n(556296),
    f = n(451478),
    _ = n(626135),
    p = n(13140),
    h = n(554174),
    m = n(981631),
    g = n(761274),
    E = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let I = new s.Z('AudioActionCreators');
function T() {
    (0, a.ZDy)(async () => {
        let { default: e } = await n.e('74023').then(n.bind(n, 431583));
        return (t) => (0, r.jsx)(e, y({ source: 'Unsupported Browser' }, t));
    });
}
function S() {
    return (
        !c.Z.isSupported() &&
        ((0, a.h7j)((e) =>
            (0, r.jsx)(
                a.ConfirmModal,
                v(
                    y(
                        {
                            header: E.intl.string(E.t.ilMTy8),
                            confirmText: E.intl.string(E.t.BK8LKy),
                            cancelText: E.intl.string(E.t['ETE/oK']),
                            onConfirm: T,
                            confirmButtonColor: i.zx.Colors.BRAND
                        },
                        e
                    ),
                    {
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            children: E.intl.string(E.t.h66vlJ)
                        })
                    }
                )
            )
        ),
        !0)
    );
}
function A(e) {
    _.default.track(m.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function N() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return S()
        ? Promise.resolve(!1)
        : (_.default.track(m.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          c.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      (o.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          A(g.PQ.ACCEPTED));
                  },
                  (e) => {
                      switch (e) {
                          case m.ETv.NO_DEVICES_FOUND:
                              A(g.PQ.NO_DEVICES);
                              break;
                          case m.ETv.PERMISSION_DENIED:
                              A(g.PQ.DENIED);
                              break;
                          case m.ETv.PERMISSION_DISMISSED:
                              A(g.PQ.DISMISSED);
                              break;
                          default:
                              (A(g.PQ.ERROR), I.warn('unknown getUserMedia error: '.concat(e)));
                      }
                  }
              )
              .then(() => !0));
}
function C(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.ZP.getKeybindForAction(m.kg4.TOGGLE_MUTE, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? l.Z.getChannel(i) : null;
    _.default.track(m.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !c.Z.isSelfMute(),
        custom_keybind_assigned: null != r && r.id !== d.Ek.id,
        used_keybind: t,
        app_in_focus: f.Z.isAppFocused(),
        overlay_activated: null != (0, h.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
function R(e) {
    let { usedKeybind: t = !1, location: n } = e,
        r = d.ZP.getKeybindForAction(m.kg4.TOGGLE_DEAFEN, !1, !0),
        i = u.Z.getVoiceChannelId(),
        a = null != i ? l.Z.getChannel(i) : null;
    _.default.track(m.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !c.Z.isSelfDeaf(),
        keybind_assigned: null != r ? (0, p.BB)(r.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: f.Z.isAppFocused(),
        overlay_activated: null != (0, h.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
