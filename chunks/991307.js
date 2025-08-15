n.d(t, { Z: () => j });
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(668781),
    a = n(846027),
    u = n(763296),
    c = n(131951),
    s = n(19780),
    d = n(914010),
    f = n(594174),
    b = n(626135),
    g = n(981631),
    O = n(65154),
    Z = n(388032),
    y = n(663213);
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT,
        n = (0, r.e7)([f.default], () => {
            var t;
            return (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        j = (0, r.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: v,
            deafened: E = !1,
            localVideoDisabled: m = !1,
            localVideoAutoDisabled: p = !1,
        } = (0, r.cj)(
            [c.Z],
            () =>
                n
                    ? {
                          muted: c.Z.isSelfMute(t),
                          deafened: c.Z.isSelfDeaf(t),
                      }
                    : {
                          muted: c.Z.isLocalMute(e, t),
                          localVideoDisabled: c.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: c.Z.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        S =
            c.Z.supports(O.AN.DISABLE_VIDEO) && !n
                ? (0, l.jsx)(
                      i.S89,
                      {
                          id: "disable-video",
                          label: Z.intl.string(Z.t["4MMsWF"]),
                          action: () => {
                              if (p)
                                  return void o.Z.show({
                                      title: Z.intl.string(Z.t.m2Hyj4),
                                      body: Z.intl.string(Z.t.EhaK6O),
                                      confirmText: Z.intl.string(Z.t.ND1my8),
                                      cancelText: Z.intl.string(Z.t.jEqEh4),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED),
                                  });
                              let n = m ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: m,
                          subtext: p
                              ? (0, l.jsxs)("div", {
                                    className: y.videoPaused,
                                    children: [
                                        (0, l.jsx)(i.Mgn, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: y.warningCircle,
                                        }),
                                        Z.intl.string(Z.t.m2Hyj4),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        _ = n
            ? null
            : (0, l.jsx)(
                  i.S89,
                  {
                      id: "soundboard-sound-mute",
                      label: Z.intl.string(Z.t.LxhEuL),
                      action: () => {
                          let n = s.Z.getRTCConnection();
                          b.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: d.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !j,
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: j,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, l.jsx)(
                  i.S89,
                  {
                      id: "mute",
                      label: Z.intl.string(Z.t.sWmtIy),
                      action: () =>
                          a.Z.toggleSelfMute({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: v,
                  },
                  "self-mute",
              ),
              (0, l.jsx)(
                  i.S89,
                  {
                      id: "deafen",
                      label: Z.intl.string(Z.t.wjcRFR),
                      action: () =>
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: E,
                  },
                  "self-deafen",
              ),
              S,
          ]
        : [
              (0, l.jsx)(
                  i.S89,
                  {
                      id: "mute",
                      label: Z.intl.string(Z.t.sWmtIy),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: v,
                  },
                  "self-mute",
              ),
              _,
              S,
          ];
}
