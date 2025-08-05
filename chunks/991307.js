n.d(t, { Z: () => h });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    s = n(763296),
    u = n(131951),
    d = n(19780),
    c = n(914010),
    g = n(594174),
    Z = n(626135),
    f = n(981631),
    b = n(65154),
    m = n(388032),
    O = n(752420);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.Yn.DEFAULT,
        n = (0, i.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        h = (0, i.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: E,
            deafened: j = !1,
            localVideoDisabled: v = !1,
            localVideoAutoDisabled: P = !1
        } = (0, i.cj)(
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
        p =
            u.Z.supports(b.AN.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: m.intl.string(m.t['4MMsWF']),
                          action: () => {
                              if (P)
                                  return void o.Z.show({
                                      title: m.intl.string(m.t.m2Hyj4),
                                      body: m.intl.string(m.t.EhaK6O),
                                      confirmText: m.intl.string(m.t.ND1my8),
                                      cancelText: m.intl.string(m.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, f.ZUi.MANUAL_ENABLED)
                                  });
                              let n = v ? f.ZUi.MANUAL_ENABLED : f.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: v,
                          subtext: P
                              ? (0, l.jsxs)('div', {
                                    className: O.videoPaused,
                                    children: [
                                        (0, l.jsx)(r.Mgn, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: O.warningCircle
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
            : (0, l.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: m.intl.string(m.t.LxhEuL),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          (Z.default.track(f.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !h
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t));
                      },
                      checked: h
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: m.intl.string(m.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: E
                  },
                  'self-mute'
              ),
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'deafen',
                      label: m.intl.string(m.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: j
                  },
                  'self-deafen'
              ),
              p
          ]
        : [
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: m.intl.string(m.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: E
                  },
                  'self-mute'
              ),
              y,
              p
          ];
}
