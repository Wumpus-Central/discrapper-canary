e.d(n, { Z: () => m });
var i = e(200651);
e(192379);
var l = e(442837),
    a = e(481060),
    o = e(668781),
    d = e(846027),
    r = e(763296),
    s = e(131951),
    u = e(19780),
    c = e(914010),
    g = e(594174),
    Z = e(626135),
    f = e(981631),
    v = e(65154),
    b = e(388032),
    h = e(139698);
function m(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.Yn.DEFAULT,
        e = (0, l.e7)([g.default], () => {
            var n;
            return (null === (n = g.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === t;
        }),
        m = (0, l.e7)([r.Z], () => r.Z.isLocalSoundboardMuted(t)),
        {
            muted: x,
            deafened: p = !1,
            localVideoDisabled: I = !1,
            localVideoAutoDisabled: A = !1
        } = (0, l.cj)(
            [s.Z],
            () =>
                e
                    ? {
                          muted: s.Z.isSelfMute(n),
                          deafened: s.Z.isSelfDeaf(n)
                      }
                    : {
                          muted: s.Z.isLocalMute(t, n),
                          localVideoDisabled: s.Z.isLocalVideoDisabled(t, n),
                          localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(t, n)
                      },
            [e, n, t]
        ),
        C =
            s.Z.supports(v.AN.DISABLE_VIDEO) && !e
                ? (0, i.jsx)(
                      a.S89,
                      {
                          id: 'disable-video',
                          label: b.intl.string(b.t['4MMsWF']),
                          action: () => {
                              if (A) {
                                  o.Z.show({
                                      title: b.intl.string(b.t.m2Hyj4),
                                      body: b.intl.string(b.t.EhaK6O),
                                      confirmText: b.intl.string(b.t.ND1my8),
                                      cancelText: b.intl.string(b.t.jEqEh4),
                                      onConfirm: () => d.Z.setDisableLocalVideo(t, f.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let e = I ? f.ZUi.MANUAL_ENABLED : f.ZUi.DISABLED;
                              d.Z.setDisableLocalVideo(t, e, n);
                          },
                          checked: I,
                          subtext: A
                              ? (0, i.jsxs)('div', {
                                    className: h.videoPaused,
                                    children: [
                                        (0, i.jsx)(a.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: h.warningCircle
                                        }),
                                        b.intl.string(b.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        L = e
            ? null
            : (0, i.jsx)(
                  a.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: b.intl.string(b.t.LxhEuL),
                      action: () => {
                          let e = u.Z.getRTCConnection();
                          Z.default.track(f.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: t,
                              media_session_id: null == e ? void 0 : e.getMediaSessionId(),
                              parent_media_session_id: null == e ? void 0 : e.parentMediaSessionId,
                              mute_soundboard: !m
                          }),
                              d.Z.toggleLocalSoundboardMute(t, n);
                      },
                      checked: m
                  },
                  'soundboard-sound-mute'
              );
    return e
        ? [
              (0, i.jsx)(
                  a.S89,
                  {
                      id: 'mute',
                      label: b.intl.string(b.t.sWmtIy),
                      action: () =>
                          d.Z.toggleSelfMute({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: x
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  a.S89,
                  {
                      id: 'deafen',
                      label: b.intl.string(b.t.wjcRFR),
                      action: () =>
                          d.Z.toggleSelfDeaf({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: p
                  },
                  'self-deafen'
              ),
              C
          ]
        : [
              (0, i.jsx)(
                  a.S89,
                  {
                      id: 'mute',
                      label: b.intl.string(b.t.sWmtIy),
                      action: () => d.Z.toggleLocalMute(t, n),
                      checked: x
                  },
                  'self-mute'
              ),
              L,
              C
          ];
}
