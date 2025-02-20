n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    u = n(763296),
    s = n(131951),
    c = n(19780),
    d = n(914010),
    f = n(594174),
    g = n(626135),
    b = n(981631),
    Z = n(65154),
    v = n(388032),
    p = n(246245);
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
        n = (0, l.e7)([f.default], () => {
            var t;
            return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e;
        }),
        N = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: m = !1,
            localVideoDisabled: y = !1,
            localVideoAutoDisabled: h = !1
        } = (0, l.cj)(
            [s.Z],
            () =>
                n
                    ? {
                          muted: s.Z.isSelfMute(t),
                          deafened: s.Z.isSelfDeaf(t)
                      }
                    : {
                          muted: s.Z.isLocalMute(e, t),
                          localVideoDisabled: s.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(e, t)
                      },
            [n, t, e]
        ),
        j =
            s.Z.supports(Z.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: v.NW.string(v.t['4MMsWF']),
                          action: () => {
                              if (h) {
                                  o.Z.show({
                                      title: v.NW.string(v.t.m2Hyj4),
                                      body: v.NW.string(v.t.EhaK6O),
                                      confirmText: v.NW.string(v.t.ND1my8),
                                      cancelText: v.NW.string(v.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let n = y ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: y,
                          subtext: h
                              ? (0, i.jsxs)('div', {
                                    className: p.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: p.warningCircle
                                        }),
                                        v.NW.string(v.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        P = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: v.NW.string(v.t.LxhEuL),
                      action: () => {
                          let n = c.Z.getRTCConnection();
                          g.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !N
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: N
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: v.NW.string(v.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
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
                      label: v.NW.string(v.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: m
                  },
                  'self-deafen'
              ),
              j
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: v.NW.string(v.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: O
                  },
                  'self-mute'
              ),
              P,
              j
          ];
}
