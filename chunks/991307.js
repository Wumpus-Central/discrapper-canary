t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    o = t(668781),
    a = t(846027),
    u = t(763296),
    d = t(131951),
    s = t(19780),
    c = t(914010),
    Z = t(594174),
    f = t(626135),
    m = t(981631),
    g = t(65154),
    x = t(388032),
    v = t(705197);
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.Yn.DEFAULT,
        t = (0, l.e7)([Z.default], () => {
            var n;
            return (null === (n = Z.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e;
        }),
        h = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: M,
            deafened: b = !1,
            localVideoDisabled: I = !1,
            localVideoAutoDisabled: C = !1
        } = (0, l.cj)(
            [d.Z],
            () =>
                t
                    ? {
                          muted: d.Z.isSelfMute(n),
                          deafened: d.Z.isSelfDeaf(n)
                      }
                    : {
                          muted: d.Z.isLocalMute(e, n),
                          localVideoDisabled: d.Z.isLocalVideoDisabled(e, n),
                          localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, n)
                      },
            [t, n, e]
        ),
        j =
            d.Z.supports(g.AN.DISABLE_VIDEO) && !t
                ? (0, i.jsx)(
                      r.MenuCheckboxItem,
                      {
                          id: 'disable-video',
                          label: x.intl.string(x.t['4MMsWF']),
                          action: () => {
                              if (C) {
                                  o.Z.show({
                                      title: x.intl.string(x.t.m2Hyj4),
                                      body: x.intl.string(x.t.EhaK6O),
                                      confirmText: x.intl.string(x.t.ND1my8),
                                      cancelText: x.intl.string(x.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, m.ZUi.MANUAL_ENABLED)
                                  });
                                  return;
                              }
                              let t = I ? m.ZUi.MANUAL_ENABLED : m.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, t, n);
                          },
                          checked: I,
                          subtext: C
                              ? (0, i.jsxs)('div', {
                                    className: v.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.CircleWarningIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            className: v.warningCircle
                                        }),
                                        x.intl.string(x.t.m2Hyj4)
                                    ]
                                })
                              : null
                      },
                      'disable-video'
                  )
                : null,
        p = t
            ? null
            : (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'soundboard-sound-mute',
                      label: x.intl.string(x.t.LxhEuL),
                      action: () => {
                          let t = s.Z.getRTCConnection();
                          f.default.track(m.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == t ? void 0 : t.getMediaSessionId(),
                              parent_media_session_id: null == t ? void 0 : t.parentMediaSessionId,
                              mute_soundboard: !h
                          }),
                              a.Z.toggleLocalSoundboardMute(e, n);
                      },
                      checked: h
                  },
                  'soundboard-sound-mute'
              );
    return t
        ? [
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'mute',
                      label: x.intl.string(x.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: M
                  },
                  'self-mute'
              ),
              (0, i.jsx)(
                  r.MenuCheckboxItem,
                  {
                      id: 'deafen',
                      label: x.intl.string(x.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: n,
                              location: 'User Context Menu'
                          }),
                      checked: b
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
                      label: x.intl.string(x.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, n),
                      checked: M
                  },
                  'self-mute'
              ),
              p,
              j
          ];
}
