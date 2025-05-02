n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    s = n(763296),
    u = n(131951),
    d = n(19780),
    c = n(914010),
    f = n(594174),
    b = n(626135),
    Z = n(981631),
    g = n(65154),
    O = n(388032),
    v = n(752420);
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.Yn.DEFAULT,
        n = (0, l.e7)([f.default], () => {
            var t;
            return (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        p = (0, l.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: j,
            deafened: m = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: y = !1
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
        P =
            u.Z.supports(g.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: O.intl.string(O.t['4MMsWF']),
                          action: () => {
                              if (y)
                                  return void o.Z.show({
                                      title: O.intl.string(O.t.m2Hyj4),
                                      body: O.intl.string(O.t.EhaK6O),
                                      confirmText: O.intl.string(O.t.ND1my8),
                                      cancelText: O.intl.string(O.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, Z.ZUi.MANUAL_ENABLED)
                                  });
                              let n = h ? Z.ZUi.MANUAL_ENABLED : Z.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: h,
                          subtext: y
                              ? (0, i.jsxs)('div', {
                                    className: v.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: v.warningCircle
                                        }),
                                        O.intl.string(O.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        x = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: O.intl.string(O.t.LxhEuL),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          b.default.track(Z.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !p
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
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
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'deafen',
                      label: O.intl.string(O.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: m
                  },
                  'self-deafen'
              ),
              P
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: O.intl.string(O.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: j
                  },
                  'self-mute'
              ),
              x,
              P
          ];
}
