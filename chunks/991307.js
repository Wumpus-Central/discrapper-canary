n.d(t, { Z: () => p });
var i = n(255367);
n(73800);
var l = n(442837),
    r = n(481060),
    a = n(668781),
    o = n(846027),
    s = n(763296),
    u = n(131951),
    d = n(19780),
    c = n(914010),
    g = n(594174),
    f = n(626135),
    b = n(981631),
    Z = n(65154),
    m = n(388032),
    v = n(752420);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
        n = (0, l.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        p = (0, l.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: h = !1,
            localVideoDisabled: j = !1,
            localVideoAutoDisabled: x = !1
        } = (0, l.cj)(
            [u.Z],
            () =>
                n
                    ? {
                          muted: u.Z.isSelfMute(t),
                          deafened: u.Z.isSelfDeaf(t)
                      }
                    : {
                          muted: u.Z.isLocalMute(e, t),
                          localVideoDisabled: u.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, t)
                      },
            [n, t, e]
        ),
        _ =
            u.Z.supports(Z.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: m.intl.string(m.t['4MMsWF']),
                          action: () => {
                              if (x)
                                  return void a.Z.show({
                                      title: m.intl.string(m.t.m2Hyj4),
                                      body: m.intl.string(m.t.EhaK6O),
                                      confirmText: m.intl.string(m.t.ND1my8),
                                      cancelText: m.intl.string(m.t.jEqEh4),
                                      onConfirm: () => o.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                              let n = j ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              o.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: j,
                          subtext: x
                              ? (0, i.jsxs)('div', {
                                    className: v.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: v.warningCircle
                                        }),
                                        m.intl.string(m.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        y = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: m.intl.string(m.t.LxhEuL),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          f.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !p
                          }),
                              o.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: p
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: m.intl.string(m.t.sWmtIy),
                      action: () =>
                          o.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: O
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'deafen',
                      label: m.intl.string(m.t.wjcRFR),
                      action: () =>
                          o.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: h
                  },
                  'self-deafen'
              ),
              _
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: m.intl.string(m.t.sWmtIy),
                      action: () => o.Z.toggleLocalMute(e, t),
                      checked: O
                  },
                  'self-mute'
              ),
              y,
              _
          ];
}
