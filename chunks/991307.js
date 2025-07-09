n.d(t, { Z: () => y });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    l = n(668781),
    c = n(846027),
    a = n(763296),
    u = n(131951),
    s = n(19780),
    d = n(914010),
    f = n(594174),
    b = n(626135),
    g = n(981631),
    O = n(65154),
    p = n(388032),
    j = n(752420);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
        n = (0, i.e7)([f.default], () => {
            var t;
            return (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        y = (0, i.e7)([a.Z], () => a.Z.isLocalSoundboardMuted(e)),
        {
            muted: v,
            deafened: m = !1,
            localVideoDisabled: Z = !1,
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
        S =
            u.Z.supports(O.AN.DISABLE_VIDEO) && !n
                ? (0, r.jsx)(
                      o.S89,
                      {
                          id: 'disable-video',
                          label: p.intl.string(p.t['4MMsWF']),
                          action: () => {
                              if (h)
                                  return void l.Z.show({
                                      title: p.intl.string(p.t.m2Hyj4),
                                      body: p.intl.string(p.t.EhaK6O),
                                      confirmText: p.intl.string(p.t.ND1my8),
                                      cancelText: p.intl.string(p.t.jEqEh4),
                                      onConfirm: () => c.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED)
                                  });
                              let n = Z ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                              c.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: Z,
                          subtext: h
                              ? (0, r.jsxs)('div', {
                                    className: j.videoPaused,
                                    children: [
                                        (0, r.jsx)(o.P4T, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: j.warningCircle
                                        }),
                                        p.intl.string(p.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        P = n
            ? null
            : (0, r.jsx)(
                  o.S89,
                  {
                      id: 'soundboard-sound-mute',
                      label: p.intl.string(p.t.LxhEuL),
                      action: () => {
                          let n = s.Z.getRTCConnection();
                          (b.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !y
                          }),
                              c.Z.toggleLocalSoundboardMute(e, t));
                      },
                      checked: y
                  },
                  'soundboard-sound-mute'
              );
    return n
        ? [
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'mute',
                      label: p.intl.string(p.t.sWmtIy),
                      action: () =>
                          c.Z.toggleSelfMute({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: v
                  },
                  'self-mute'
              ),
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'deafen',
                      label: p.intl.string(p.t.wjcRFR),
                      action: () =>
                          c.Z.toggleSelfDeaf({
                              context: t,
                              location: 'User Context Menu'
                          }),
                      checked: m
                  },
                  'self-deafen'
              ),
              S
          ]
        : [
              (0, r.jsx)(
                  o.S89,
                  {
                      id: 'mute',
                      label: p.intl.string(p.t.sWmtIy),
                      action: () => c.Z.toggleLocalMute(e, t),
                      checked: v
                  },
                  'self-mute'
              ),
              P,
              S
          ];
}
