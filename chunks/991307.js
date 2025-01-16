n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    u = n(763296),
    d = n(131951),
    s = n(19780),
    c = n(914010),
    f = n(594174),
    Z = n(626135),
    g = n(981631),
    m = n(65154),
    v = n(388032),
    b = n(705197);
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT,
        n = (0, l.e7)([f.default], () => {
            var t;
            return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e;
        }),
        x = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: M,
            deafened: I = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: C = !1
        } = (0, l.cj)(
            [d.Z],
            () =>
                n
                    ? {
                          muted: d.Z.isSelfMute(t),
                          deafened: d.Z.isSelfDeaf(t)
                      }
                    : {
                          muted: d.Z.isLocalMute(e, t),
                          localVideoDisabled: d.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, t)
                      },
            [n, t, e]
        ),
        L =
            d.Z.supports(m.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.MenuCheckboxItem,
                      {
                          id: 'disable-video',
                          label: v.intl.string(v.t['4MMsWF']),
                          action: () => {
                              if (C) {
                                  o.Z.show({
                                      title: v.intl.string(v.t.m2Hyj4),
                                      body: v.intl.string(v.t.EhaK6O),
                                      confirmText: v.intl.string(v.t.ND1my8),
                                      cancelText: v.intl.string(v.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let n = h ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: h,
                          subtext: C
                              ? (0, i.jsxs)('div', {
                                    className: b.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.CircleWarningIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: b.warningCircle
                                        }),
                                        v.intl.string(v.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        A = n
            ? null
            : (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'soundboard-sound-mute',
                      label: v.intl.string(v.t.LxhEuL),
                      action: () => {
                          let n = s.Z.getRTCConnection();
                          Z.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !x
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: x
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: v.intl.string(v.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: M
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'deafen',
                      label: v.intl.string(v.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: I
                  },
                  'self-deafen'
              ),
              L
          ]
        : [
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: v.intl.string(v.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: M
                  },
                  'self-mute'
              ),
              A,
              L
          ];
}
