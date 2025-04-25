n.d(t, { Z: () => y });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(668781),
    a = n(846027),
    u = n(763296),
    c = n(131951),
    s = n(19780),
    d = n(914010),
    f = n(594174),
    g = n(626135),
    b = n(981631),
    O = n(65154),
    E = n(388032),
    _ = n(752420);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
        n = (0, r.e7)([f.default], () => {
            var t;
            return (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        y = (0, r.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: v,
            deafened: h = !1,
            localVideoDisabled: Z = !1,
            localVideoAutoDisabled: p = !1
        } = (0, r.cj)(
            [c.Z],
            () =>
                n
                    ? {
                          muted: c.Z.isSelfMute(t),
                          deafened: c.Z.isSelfDeaf(t)
                      }
                    : {
                          muted: c.Z.isLocalMute(e, t),
                          localVideoDisabled: c.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: c.Z.isLocalVideoAutoDisabled(e, t)
                      },
            [n, t, e]
        ),
        m =
            c.Z.supports(O.AN.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      i.S89,
                      {
                          id: 'disable-video',
                          label: E.intl.string(E.t['4MMsWF']),
                          action: () => {
                              if (p)
                                  return void o.Z.show({
                                      title: E.intl.string(E.t.m2Hyj4),
                                      body: E.intl.string(E.t.EhaK6O),
                                      confirmText: E.intl.string(E.t.ND1my8),
                                      cancelText: E.intl.string(E.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                              let n = Z ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: Z,
                          subtext: p
                              ? (0, l.jsxs)('div', {
                                    className: _.videoPaused,
                                    children: [
                                        (0, l.jsx)(i.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: _.warningCircle
                                        }),
                                        E.intl.string(E.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        S = n
            ? null
            : (0, l.jsx)(
                  i.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: E.intl.string(E.t.LxhEuL),
                      action: () => {
                          let n = s.Z.getRTCConnection();
                          g.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !y
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: y
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, l.jsx)(
                  i.S89,
                  {
                      id: 'mute',
                      label: E.intl.string(E.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: v
                  },
                  'self-mute'
              ),
              (0, l.jsx)(
                  i.S89,
                  {
                      id: 'deafen',
                      label: E.intl.string(E.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: h
                  },
                  'self-deafen'
              ),
              m
          ]
        : [
              (0, l.jsx)(
                  i.S89,
                  {
                      id: 'mute',
                      label: E.intl.string(E.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: v
                  },
                  'self-mute'
              ),
              S,
              m
          ];
}
