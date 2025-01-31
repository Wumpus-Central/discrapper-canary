n.d(e, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    d = n(668781),
    r = n(846027),
    o = n(763296),
    s = n(131951),
    u = n(19780),
    c = n(914010),
    g = n(594174),
    Z = n(626135),
    f = n(981631),
    v = n(65154),
    b = n(388032),
    h = n(705197);
function m(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.Yn.DEFAULT,
        n = (0, l.e7)([g.default], () => {
            var e;
            return (null === (e = g.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t;
        }),
        m = (0, l.e7)([o.Z], () => o.Z.isLocalSoundboardMuted(t)),
        {
            muted: x,
            deafened: I = !1,
            localVideoDisabled: U = !1,
            localVideoAutoDisabled: _ = !1
        } = (0, l.cj)(
            [s.Z],
            () =>
                n
                    ? {
                          muted: s.Z.isSelfMute(e),
                          deafened: s.Z.isSelfDeaf(e)
                      }
                    : {
                          muted: s.Z.isLocalMute(t, e),
                          localVideoDisabled: s.Z.isLocalVideoDisabled(t, e),
                          localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(t, e)
                      },
            [n, e, t]
        ),
        p =
            s.Z.supports(v.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      a.S89,
                      {
                          id: 'disable-video',
                          label: b.intl.string(b.t['4MMsWF']),
                          action: () => {
                              if (_) {
                                  d.Z.show({
                                      title: b.intl.string(b.t.m2Hyj4),
                                      body: b.intl.string(b.t.EhaK6O),
                                      confirmText: b.intl.string(b.t.ND1my8),
                                      cancelText: b.intl.string(b.t.jEqEh4),
                                      onConfirm: () => r.Z.setDisableLocalVideo(t, f.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let n = U ? f.ZUi.MANUAL_ENABLED : f.ZUi.DISABLED;
                              r.Z.setDisableLocalVideo(t, n, e);
                          },
                          checked: U,
                          subtext: _
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
        A = n
            ? null
            : (0, i.jsx)(
                  a.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: b.intl.string(b.t.LxhEuL),
                      action: () => {
                          let n = u.Z.getRTCConnection();
                          Z.default.track(f.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: t,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !m
                          }),
                              r.Z.toggleLocalSoundboardMute(t, e);
                      },
                      checked: m
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, i.jsx)(
                  a.S89,
                  {
                      id: 'mute',
                      label: b.intl.string(b.t.sWmtIy),
                      action: () =>
                          r.Z.toggleSelfMute({
                              context: e,
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
                          r.Z.toggleSelfDeaf({
                              context: e,
                              location: 'User Context Menu'
                          }),
                      checked: I
                  },
                  'self-deafen'
              ),
              p
          ]
        : [
              (0, i.jsx)(
                  a.S89,
                  {
                      id: 'mute',
                      label: b.intl.string(b.t.sWmtIy),
                      action: () => r.Z.toggleLocalMute(t, e),
                      checked: x
                  },
                  'self-mute'
              ),
              A,
              p
          ];
}
