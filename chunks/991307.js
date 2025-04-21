n.d(t, { Z: () => v });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(668781),
    o = n(846027),
    s = n(763296),
    u = n(131951),
    c = n(19780),
    d = n(914010),
    g = n(594174),
    f = n(626135),
    b = n(981631),
    m = n(65154),
    O = n(388032),
    Z = n(752420);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT,
        n = (0, i.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        v = (0, i.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: E,
            deafened: y = !1,
            localVideoDisabled: P = !1,
            localVideoAutoDisabled: h = !1
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
            u.Z.supports(m.AN.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: O.intl.string(O.t['4MMsWF']),
                          action: () => {
                              if (h)
                                  return void a.Z.show({
                                      title: O.intl.string(O.t.m2Hyj4),
                                      body: O.intl.string(O.t.EhaK6O),
                                      confirmText: O.intl.string(O.t.ND1my8),
                                      cancelText: O.intl.string(O.t.jEqEh4),
                                      onConfirm: () => o.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                              let n = P ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              o.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: P,
                          subtext: h
                              ? (0, l.jsxs)('div', {
                                    className: Z.videoPaused,
                                    children: [
                                        (0, l.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: Z.warningCircle
                                        }),
                                        O.intl.string(O.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        j = n
            ? null
            : (0, l.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: O.intl.string(O.t.LxhEuL),
                      action: () => {
                          let n = c.Z.getRTCConnection();
                          f.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !v
                          }),
                              o.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: v
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: O.intl.string(O.t.sWmtIy),
                      action: () =>
                          o.Z.toggleSelfMute({
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
                      label: O.intl.string(O.t.wjcRFR),
                      action: () =>
                          o.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: y
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
                      label: O.intl.string(O.t.sWmtIy),
                      action: () => o.Z.toggleLocalMute(e, t),
                      checked: E
                  },
                  'self-mute'
              ),
              j,
              p
          ];
}
