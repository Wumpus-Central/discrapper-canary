n.d(t, { Z: () => v });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    o = n(668781),
    c = n(846027),
    s = n(763296),
    a = n(131951),
    u = n(19780),
    d = n(914010),
    b = n(594174),
    f = n(626135),
    g = n(981631),
    j = n(65154),
    m = n(388032),
    p = n(752420);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j.Yn.DEFAULT,
        n = (0, r.e7)([b.default], () => {
            var t;
            return (null == (t = b.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        v = (0, r.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: Z = !1,
            localVideoDisabled: y = !1,
            localVideoAutoDisabled: h = !1,
        } = (0, r.cj)(
            [a.Z],
            () =>
                n
                    ? {
                          muted: a.Z.isSelfMute(t),
                          deafened: a.Z.isSelfDeaf(t),
                      }
                    : {
                          muted: a.Z.isLocalMute(e, t),
                          localVideoDisabled: a.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        x =
            a.Z.supports(j.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      l.S89,
                      {
                          id: "disable-video",
                          label: m.intl.string(m.t["4MMsWF"]),
                          action: () => {
                              if (h)
                                  return void o.Z.show({
                                      title: m.intl.string(m.t.m2Hyj4),
                                      body: m.intl.string(m.t.EhaK6O),
                                      confirmText: m.intl.string(m.t.ND1my8),
                                      cancelText: m.intl.string(m.t.jEqEh4),
                                      onConfirm: () => c.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED),
                                  });
                              let n = y ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                              c.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: y,
                          subtext: h
                              ? (0, i.jsxs)("div", {
                                    className: p.videoPaused,
                                    children: [
                                        (0, i.jsx)(l.Mgn, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: p.warningCircle,
                                        }),
                                        m.intl.string(m.t.m2Hyj4),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        S = n
            ? null
            : (0, i.jsx)(
                  l.S89,
                  {
                      id: "soundboard-sound-mute",
                      label: m.intl.string(m.t.LxhEuL),
                      action: () => {
                          let n = u.Z.getRTCConnection();
                          f.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !v,
                          }),
                              c.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: v,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, i.jsx)(
                  l.S89,
                  {
                      id: "mute",
                      label: m.intl.string(m.t.sWmtIy),
                      action: () =>
                          c.Z.toggleSelfMute({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: O,
                  },
                  "self-mute",
              ),
              (0, i.jsx)(
                  l.S89,
                  {
                      id: "deafen",
                      label: m.intl.string(m.t.wjcRFR),
                      action: () =>
                          c.Z.toggleSelfDeaf({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: Z,
                  },
                  "self-deafen",
              ),
              x,
          ]
        : [
              (0, i.jsx)(
                  l.S89,
                  {
                      id: "mute",
                      label: m.intl.string(m.t.sWmtIy),
                      action: () => c.Z.toggleLocalMute(e, t),
                      checked: O,
                  },
                  "self-mute",
              ),
              S,
              x,
          ];
}
