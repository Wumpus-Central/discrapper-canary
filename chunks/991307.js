n.d(t, { Z: () => v });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    a = n(668781),
    o = n(846027),
    s = n(763296),
    u = n(131951),
    d = n(19780),
    c = n(914010),
    g = n(594174),
    f = n(626135),
    b = n(981631),
    Z = n(65154),
    p = n(388032),
    m = n(663213);
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
        n = (0, l.e7)([g.default], () => {
            var t;
            return (null == (t = g.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        v = (0, l.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: h = !1,
            localVideoDisabled: _ = !1,
            localVideoAutoDisabled: j = !1,
        } = (0, l.cj)(
            [u.Z],
            () =>
                n
                    ? {
                          muted: u.Z.isSelfMute(t),
                          deafened: u.Z.isSelfDeaf(t),
                      }
                    : {
                          muted: u.Z.isLocalMute(e, t),
                          localVideoDisabled: u.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        x =
            u.Z.supports(Z.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: "disable-video",
                          label: p.intl.string(p.t["4MMsWF"]),
                          action: () => {
                              if (j)
                                  return void a.Z.show({
                                      title: p.intl.string(p.t.m2Hyj0),
                                      body: p.intl.string(p.t.EhaK6B),
                                      confirmText: p.intl.string(p.t.ND1my3),
                                      cancelText: p.intl.string(p.t.jEqEhy),
                                      onConfirm: () => o.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED),
                                  });
                              let n = _ ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
                              o.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: _,
                          subtext: j
                              ? (0, i.jsxs)("div", {
                                    className: m.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.Mgn, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: m.warningCircle,
                                        }),
                                        p.intl.string(p.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        I = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: "soundboard-sound-mute",
                      label: p.intl.string(p.t.LxhEuG),
                      action: () => {
                          let n = d.Z.getRTCConnection();
                          f.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !v,
                          }),
                              o.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: v,
                  },
                  "soundboard-sound-mute",
              );
    return n
        ? [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: "mute",
                      label: p.intl.string(p.t.sWmtI6),
                      action: () =>
                          o.Z.toggleSelfMute({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: O,
                  },
                  "self-mute",
              ),
              (0, i.jsx)(
                  r.S89,
                  {
                      id: "deafen",
                      label: p.intl.string(p.t.wjcRFX),
                      action: () =>
                          o.Z.toggleSelfDeaf({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              x,
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: "mute",
                      label: p.intl.string(p.t.sWmtI6),
                      action: () => o.Z.toggleLocalMute(e, t),
                      checked: O,
                  },
                  "self-mute",
              ),
              I,
              x,
          ];
}
