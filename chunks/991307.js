n.d(t, { Z: () => h });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    s = n(763296),
    u = n(131951),
    d = n(19780),
    c = n(914010),
    g = n(594174),
    f = n(626135),
    Z = n(981631),
    b = n(65154),
    O = n(388032),
    m = n(752420);
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.Yn.DEFAULT,
        n = (0, i.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        h = (0, i.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: j,
            deafened: v = !1,
            localVideoDisabled: E = !1,
            localVideoAutoDisabled: p = !1
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
        P =
            u.Z.supports(b.AN.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: O.intl.string(O.t['4MMsWF']),
                          action: () => {
                              if (p)
                                  return void o.Z.show({
                                      title: O.intl.string(O.t.m2Hyj4),
                                      body: O.intl.string(O.t.EhaK6O),
                                      confirmText: O.intl.string(O.t.ND1my8),
                                      cancelText: O.intl.string(O.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, Z.ZUi.MANUAL_ENABLED)
                                  });
                              let n = E ? Z.ZUi.MANUAL_ENABLED : Z.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: E,
                          subtext: p
                              ? (0, l.jsxs)('div', {
                                    className: m.videoPaused,
                                    children: [
                                        (0, l.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: m.warningCircle
                                        }),
                                        O.intl.string(O.t.m2Hyj4)
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
                      label: O.intl.string(O.t.LxhEuL),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          f.default.track(Z.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !h
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
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
                      label: O.intl.string(O.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: j
                  },
                  'self-mute'
              ),
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'deafen',
                      label: O.intl.string(O.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: v
                  },
                  'self-deafen'
              ),
              P
          ]
        : [
              (0, l.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: O.intl.string(O.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: j
                  },
                  'self-mute'
              ),
              y,
              P
          ];
}
