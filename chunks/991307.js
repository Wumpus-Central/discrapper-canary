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
    Z = n(626135),
    b = n(981631),
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
            deafened: N = !1,
            localVideoDisabled: m = !1,
            localVideoAutoDisabled: h = !1
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
        y =
            u.Z.supports(g.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: 'disable-video',
                          label: O.NW.string(O.t['4MMsWF']),
                          action: () => {
                              if (h)
                                  return void o.Z.show({
                                      title: O.NW.string(O.t.m2Hyj4),
                                      body: O.NW.string(O.t.EhaK6O),
                                      confirmText: O.NW.string(O.t.ND1my8),
                                      cancelText: O.NW.string(O.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
                                  });
                              let n = m ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: m,
                          subtext: h
                              ? (0, i.jsxs)('div', {
                                    className: v.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: v.warningCircle
                                        }),
                                        O.NW.string(O.t.m2Hyj4)
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
                      label: O.NW.string(O.t.LxhEuL),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          Z.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
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
                      label: O.NW.string(O.t.sWmtIy),
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
                      label: O.NW.string(O.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: N
                  },
                  'self-deafen'
              ),
              y
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: 'mute',
                      label: O.NW.string(O.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: j
                  },
                  'self-mute'
              ),
              P,
              y
          ];
}
