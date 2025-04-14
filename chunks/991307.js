n.d(t, { Z: () => v });
var i = n(200651);
n(192379);
var l = n(442837),
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
    Z = n(65154),
    N = n(388032),
    m = n(752420);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
        n = (0, l.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        v = (0, l.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: p,
            deafened: O = !1,
            localVideoDisabled: h = !1,
            localVideoAutoDisabled: j = !1
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
        x =
            u.Z.supports(Z.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: N.NW.string(N.t['4MMsWF']),
                          action: () => {
                              if (j)
                                  return void a.Z.show({
                                      title: N.NW.string(N.t.m2Hyj4),
                                      body: N.NW.string(N.t.EhaK6O),
                                      confirmText: N.NW.string(N.t.ND1my8),
                                      cancelText: N.NW.string(N.t.jEqEh4),
                                      onConfirm: () => o.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                              let n = h ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              o.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: h,
                          subtext: j
                              ? (0, i.jsxs)('div', {
                                    className: m.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: m.warningCircle
                                        }),
                                        N.NW.string(N.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        _ = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: N.NW.string(N.t.LxhEuL),
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
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: N.NW.string(N.t.sWmtIy),
                      action: () =>
                          o.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: p
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'deafen',
                      label: N.NW.string(N.t.wjcRFR),
                      action: () =>
                          o.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: O
                  },
                  'self-deafen'
              ),
              x
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: N.NW.string(N.t.sWmtIy),
                      action: () => o.Z.toggleLocalMute(e, t),
                      checked: p
                  },
                  'self-mute'
              ),
              _,
              x
          ];
}
