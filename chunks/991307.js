n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var l = n(442837),
    r = n(481060),
    o = n(668781),
    a = n(846027),
    u = n(763296),
    d = n(131951),
    s = n(19780),
    c = n(914010),
    f = n(594174),
    g = n(626135),
    Z = n(981631),
    b = n(65154),
    p = n(388032),
    v = n(944100);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b.Yn.DEFAULT,
        n = (0, l.e7)([f.default], () => {
            var t;
            return (null == (t = f.default.getCurrentUser()) ? void 0 : t.id) === e;
        }),
        m = (0, l.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
        {
            muted: O,
            deafened: h = !1,
            localVideoDisabled: j = !1,
            localVideoAutoDisabled: y = !1,
        } = (0, l.cj)(
            [d.Z],
            () =>
                n
                    ? {
                          muted: d.Z.isSelfMute(t),
                          deafened: d.Z.isSelfDeaf(t),
                      }
                    : {
                          muted: d.Z.isLocalMute(e, t),
                          localVideoDisabled: d.Z.isLocalVideoDisabled(e, t),
                          localVideoAutoDisabled: d.Z.isLocalVideoAutoDisabled(e, t),
                      },
            [n, t, e],
        ),
        P =
            d.Z.supports(b.AN.DISABLE_VIDEO) && !n
                ? (0, i.jsx)(
                      r.S89,
                      {
                          id: "disable-video",
                          label: p.intl.string(p.t["4MMsWF"]),
                          action: () => {
                              if (y)
                                  return void o.Z.show({
                                      title: p.intl.string(p.t.m2Hyj0),
                                      body: p.intl.string(p.t.EhaK6B),
                                      confirmText: p.intl.string(p.t.ND1my3),
                                      cancelText: p.intl.string(p.t.jEqEhy),
                                      onConfirm: () => a.Z.setDisableLocalVideo(e, Z.ZUi.MANUAL_ENABLED),
                                  });
                              let n = j ? Z.ZUi.MANUAL_ENABLED : Z.ZUi.DISABLED;
                              a.Z.setDisableLocalVideo(e, n, t);
                          },
                          checked: j,
                          subtext: y
                              ? (0, i.jsxs)("div", {
                                    className: v.videoPaused,
                                    children: [
                                        (0, i.jsx)(r.Mgn, {
                                            size: "custom",
                                            color: "currentColor",
                                            width: 12,
                                            className: v.warningCircle,
                                        }),
                                        p.intl.string(p.t.m2Hyj0),
                                    ],
                                })
                              : null,
                      },
                      "disable-video",
                  )
                : null,
        x = n
            ? null
            : (0, i.jsx)(
                  r.S89,
                  {
                      id: "soundboard-sound-mute",
                      label: p.intl.string(p.t.LxhEuG),
                      action: () => {
                          let n = s.Z.getRTCConnection();
                          g.default.track(Z.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
                              guild_id: c.Z.getGuildId(),
                              target_user_id: e,
                              media_session_id: null == n ? void 0 : n.getMediaSessionId(),
                              parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
                              mute_soundboard: !m,
                          }),
                              a.Z.toggleLocalSoundboardMute(e, t);
                      },
                      checked: m,
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
                          a.Z.toggleSelfMute({
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
                          a.Z.toggleSelfDeaf({
                              context: t,
                              location: "User Context Menu",
                          }),
                      checked: h,
                  },
                  "self-deafen",
              ),
              P,
          ]
        : [
              (0, i.jsx)(
                  r.S89,
                  {
                      id: "mute",
                      label: p.intl.string(p.t.sWmtI6),
                      action: () => a.Z.toggleLocalMute(e, t),
                      checked: O,
                  },
                  "self-mute",
              ),
              x,
              P,
          ];
}
