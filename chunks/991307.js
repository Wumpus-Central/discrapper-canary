t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    o = t(668781),
    d = t(846027),
    u = t(763296),
    a = t(131951),
    s = t(19780),
    c = t(914010),
    Z = t(594174),
    f = t(626135),
    g = t(981631),
    m = t(65154),
    v = t(388032),
    x = t(705197);
function M(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT,
        t = (0, l.e7)([Z.default], () => {
            var n;
            return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
        }),
        M = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: b,
            deafened: h = !1,
            localVideoDisabled: C = !1,
            localVideoAutoDisabled: I = !1
        } = (0, l.cj)(
            [a.Z],
            () =>
                t
                    ? {
                          muted: a.Z.isSelfMute(n),
                          deafened: a.Z.isSelfDeaf(n)
                      }
                    : {
                          muted: a.Z.isLocalMute(e, n),
                          localVideoDisabled: a.Z.isLocalVideoDisabled(e, n),
                          localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, n)
                      },
            [t, n, e]
        ),
        j =
            a.Z.supports(m.AN.DISABLE_VIDEO) && !t
                ? (0, i.jsx)(
                      r.MenuCheckboxItem,
                      {
                          id: 'disable-video',
                          label: v.intl.string(v.t['4MMsWF']),
                          action: () => {
                              if (I) {
                                  o.Z.show({
                                      title: v.intl.string(v.t.m2Hyj4),
                                      body: v.intl.string(v.t.EhaK6O),
                                      confirmText: v.intl.string(v.t.ND1my8),
                                      cancelText: v.intl.string(v.t.jEqEh4),
                                      onConfirm: () => d.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let t = C ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                              d.Z.setDisableLocalVideo(e, t, n);
                          },
                          checked: C,
                          subtext: I
                              ? (0, i.jsxs)('div', {
                                    className: x.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.CircleWarningIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: x.warningCircle
                                        }),
                                        v.intl.string(v.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        E = t
            ? null
            : (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'soundboard-sound-mute',
                      label: v.intl.string(v.t.LxhEuL),
                      action: () => {
                          let t = s.Z.getRTCConnection();
                          f.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                              parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                              mute_soundboard: !M
                          }),
                              d.Z.toggleLocalSoundboardMute(e, n);
                      },
                      checked: M
                  },
                  'soundboard-sound-mute'
              );
    return t
        ? [
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: v.intl.string(v.t.sWmtIy),
                      action: () =>
                          d.Z.toggleSelfMute({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: b
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'deafen',
                      label: v.intl.string(v.t.wjcRFR),
                      action: () =>
                          d.Z.toggleSelfDeaf({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: h
                  },
                  'self-deafen'
              ),
              j
          ]
        : [
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: v.intl.string(v.t.sWmtIy),
                      action: () => d.Z.toggleLocalMute(e, n),
                      checked: b
                  },
                  'self-mute'
              ),
              E,
              j
          ];
}
