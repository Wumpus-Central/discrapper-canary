r.r(n),
    r.d(n, {
        enable: function () {
            return T;
        },
        isNotSupported: function () {
            return b;
        },
        trackToggleSelfDeaf: function () {
            return A;
        },
        trackToggleSelfMute: function () {
            return S;
        }
    });
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(570140),
    s = r(710845),
    l = r(592125),
    u = r(131951),
    c = r(944486),
    d = r(556296),
    f = r(451478),
    p = r(626135),
    h = r(13140),
    _ = r(554174),
    m = r(981631),
    g = r(761274),
    E = r(388032);
let v = new s.Z('AudioActionCreators');
function y() {
    (0, a.openModalLazy)(async () => {
        let { default: e } = await r.e('82935').then(r.bind(r, 431583));
        return (n) =>
            (0, i.jsx)(e, {
                source: 'Unsupported Browser',
                ...n
            });
    });
}
function b() {
    return (
        !u.Z.isSupported() &&
        ((0, a.openModal)((e) =>
            (0, i.jsx)(a.ConfirmModal, {
                header: E.intl.string(E.t.ilMTy8),
                confirmText: E.intl.string(E.t.BK8LKy),
                cancelText: E.intl.string(E.t['ETE/oK']),
                onConfirm: y,
                confirmButtonColor: a.Button.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: E.intl.string(E.t.h66vlJ)
                })
            })
        ),
        !0)
    );
}
function I(e) {
    p.default.track(m.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function T() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return b()
        ? Promise.resolve(!1)
        : (p.default.track(m.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          u.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      o.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          I(g.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case m.ETv.NO_DEVICES_FOUND:
                              I(g.PQ.NO_DEVICES);
                              break;
                          case m.ETv.PERMISSION_DENIED:
                              I(g.PQ.DENIED);
                              break;
                          case m.ETv.PERMISSION_DISMISSED:
                              I(g.PQ.DISMISSED);
                              break;
                          default:
                              I(g.PQ.ERROR), v.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function S(e) {
    let { usedKeybind: n = !1, location: r } = e,
        i = d.Z.getKeybindForAction(m.kg4.TOGGLE_MUTE, !1, !0),
        a = c.Z.getVoiceChannelId(),
        o = null != a ? l.Z.getChannel(a) : null;
    p.default.track(m.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !u.Z.isSelfMute(),
        custom_keybind_assigned: null != i && i.id !== d.E.id,
        used_keybind: n,
        app_in_focus: f.Z.isFocused(),
        overlay_activated: null != (0, _.Z)(),
        voice_channel_type: null != o ? o.type : null,
        location: r
    });
}
function A(e) {
    let { usedKeybind: n = !1, location: r } = e,
        i = d.Z.getKeybindForAction(m.kg4.TOGGLE_DEAFEN, !1, !0),
        a = c.Z.getVoiceChannelId(),
        o = null != a ? l.Z.getChannel(a) : null;
    p.default.track(m.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !u.Z.isSelfDeaf(),
        keybind_assigned: null != i ? (0, h.BB)(i.shortcut) : void 0,
        used_keybind: n,
        app_in_focus: f.Z.isFocused(),
        overlay_activated: null != (0, _.Z)(),
        voice_channel_type: null != o ? o.type : null,
        location: r
    });
}
