n.d(t, { Z: () => j });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(668781),
    s = n(846027),
    a = n(763296),
    d = n(131951),
    c = n(19780),
    u = n(914010),
    g = n(594174),
    f = n(626135),
    m = n(981631),
    Z = n(65154),
    b = n(388032),
    h = n(752420);
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
        n = (0, i.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        j = (0, i.e7)([a.Z], () => a.Z.isLocalSoundboardMuted(e)),
        {
            muted: p,
            deafened: v = !1,
            localVideoDisabled: O = !1,
            localVideoAutoDisabled: x = !1
        } = (0, i.cj)(
            [d.Z],
            () =>
                n
                    ? {
                          muted: d.Z.isSelfMute(t),
                          deafened: d.Z.isSelfDeaf(t)
                      }
                    : {
                          muted: d.Z.isLocalMute(e, t),
                          localVideoDisabled: d.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, t)
                      },
            [n, t, e]
        ),
        N =
            d.Z.supports(Z.AN.DISABLE_VIDEO) && !n
                ? (0, r.jsx)(
                      o.S89,
                      {
                          id: 'disable-video',
                          label: b.NW.string(b.t['4MMsWF']),
                          action: () => {
                              if (x)
                                  return void l.Z.show({
                                      title: b.NW.string(b.t.m2Hyj4),
                                      body: b.NW.string(b.t.EhaK6O),
                                      confirmText: b.NW.string(b.t.ND1my8),
                                      cancelText: b.NW.string(b.t.jEqEh4),
                                      onConfirm: () => s.Z.setDisableLocalVideo(e, m.ZUi.MANUAL_ENABLED)
                                  });
                              let n = O ? m.ZUi.MANUAL_ENABLED : m.ZUi.DISABLED;
                              s.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: O,
                          subtext: x
                              ? (0, r.jsxs)('div', {
                                    className: h.videoPaused,
                                    children: [
                                        (0, r.jsx)(o.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: h.warningCircle
                                        }),
                                        b.NW.string(b.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        y = n
            ? null
            : (0, r.jsx)(
                  o.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: b.NW.string(b.t.LxhEuL),
                      action: () => {
                          let n = c.Z.getRTCConnection();
                          f.default.track(m.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: u.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !j
                          }),
                              s.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: j
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'mute',
                      label: b.NW.string(b.t.sWmtIy),
                      action: () =>
                          s.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: p
                  },
                  'self-mute'
              ),
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'deafen',
                      label: b.NW.string(b.t.wjcRFR),
                      action: () =>
                          s.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: v
                  },
                  'self-deafen'
              ),
              N
          ]
        : [
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'mute',
                      label: b.NW.string(b.t.sWmtIy),
                      action: () => s.Z.toggleLocalMute(e, t),
                      checked: p
                  },
                  'self-mute'
              ),
              y,
              N
          ];
}
