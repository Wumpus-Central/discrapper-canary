n.r(t),
    n.d(t, {
        enable: () => b,
        isNotSupported: () => y,
        trackToggleSelfDeaf: () => S,
        trackToggleSelfMute: () => T
    });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(710845),
    o = n(592125),
    l = n(131951),
    u = n(944486),
    c = n(556296),
    d = n(451478),
    f = n(626135),
    _ = n(13140),
    p = n(554174),
    h = n(981631),
    m = n(761274),
    g = n(388032);
let E = new s.Z('AudioActionCreators');
function v() {
    (0, r.ZDy)(async () => {
        let { default: e } = await n.e('74023').then(n.bind(n, 431583));
        return (t) =>
            (0, i.jsx)(e, {
                source: 'Unsupported Browser',
                ...t
            });
    });
}
function y() {
    return (
        !l.Z.isSupported() &&
        ((0, r.h7j)((e) =>
            (0, i.jsx)(r.ConfirmModal, {
                header: g.intl.string(g.t.ilMTy8),
                confirmText: g.intl.string(g.t.BK8LKy),
                cancelText: g.intl.string(g.t['ETE/oK']),
                onConfirm: v,
                confirmButtonColor: r.zxk.Colors.BRAND,
                ...e,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: g.intl.string(g.t.h66vlJ)
                })
            })
        ),
        !0)
    );
}
function I(e) {
    f.default.track(h.rMx.PERMISSIONS_ACKED, {
        type: 'audio',
        action: e
    });
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return y()
        ? Promise.resolve(!1)
        : (f.default.track(h.rMx.PERMISSIONS_REQUESTED, { type: 'audio' }),
          l.Z.getMediaEngine()
              .enable()
              .then(
                  () => {
                      a.Z.dispatch({
                          type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                          enabled: !0,
                          unmute: e
                      }),
                          I(m.PQ.ACCEPTED);
                  },
                  (e) => {
                      switch (e) {
                          case h.ETv.NO_DEVICES_FOUND:
                              I(m.PQ.NO_DEVICES);
                              break;
                          case h.ETv.PERMISSION_DENIED:
                              I(m.PQ.DENIED);
                              break;
                          case h.ETv.PERMISSION_DISMISSED:
                              I(m.PQ.DISMISSED);
                              break;
                          default:
                              I(m.PQ.ERROR), E.warn('unknown getUserMedia error: '.concat(e));
                      }
                  }
              )
              .then(() => !0));
}
function T(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = c.Z.getKeybindForAction(h.kg4.TOGGLE_MUTE, !1, !0),
        r = u.Z.getVoiceChannelId(),
        a = null != r ? o.Z.getChannel(r) : null;
    f.default.track(h.rMx.INPUT_MUTE_TOGGLED, {
        enabled: !l.Z.isSelfMute(),
        custom_keybind_assigned: null != i && i.id !== c.E.id,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, p.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
function S(e) {
    let { usedKeybind: t = !1, location: n } = e,
        i = c.Z.getKeybindForAction(h.kg4.TOGGLE_DEAFEN, !1, !0),
        r = u.Z.getVoiceChannelId(),
        a = null != r ? o.Z.getChannel(r) : null;
    f.default.track(h.rMx.SELF_DEAFEN_TOGGLED, {
        enabled: !l.Z.isSelfDeaf(),
        keybind_assigned: null != i ? (0, _.BB)(i.shortcut) : void 0,
        used_keybind: t,
        app_in_focus: d.Z.isFocused(),
        overlay_activated: null != (0, p.Z)(),
        voice_channel_type: null != a ? a.type : null,
        location: n
    });
}
