var n = l(951178),
    s = l(811587),
    u = l(191850),
    r = l(792996);
let a = [
        [n.q7.BOT, u.default.UnoAgo],
        [n.q7.ACTIVITY, u.default["I88/iG"]],
        [n.q7.VOICE_CHANNEL, u.default.skjf5I],
        [n.q7.PROFILE_WIDGET, u.default.gXY1x1],
        [n.q7.AUTOMOD, u.default.Q9ruoM],
        [n.q7.OVERLAY, u.default.KR5R34],
    ],
    i = { screen_capture: u.default["8/7kE7"], connect_user_to_voice: u.default.uvDWXa },
    c = new Set([
        n.q7.APP_CHANNEL,
        ...a.map((e) => {
            let [t] = e;
            return t;
        }),
    ]);
function d(e) {
    let t = new Set(e.supported_surfaces ?? []);
    return (e.preview_supported_surfaces ?? []).filter((e) => c.has(e) && !t.has(e));
}
l.d(
    t,
    {},
    {
        Dy: function (e, t, l) {
            var s;
            let i,
                c = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                p = "adds_surfaces" === l ? d(e) : [],
                o = "adds_surfaces" === l ? (t?.newAppChannels ?? []) : [],
                f = "user" === e.install_scope,
                h = f ? n.q7.ACTIVITY : n.q7.APP_CHANNEL,
                _ = t?.previewAppChannels ?? [],
                A =
                    _.length > 0
                        ? _.map((e) => {
                              let t = f ? p.includes(h) : o.includes(e);
                              return {
                                  key: `channel:${e}`,
                                  icon: "app_channel",
                                  label: `#${e}`,
                                  isNew: t,
                                  creates: !f && ("first_publish" === l || t),
                              };
                          })
                        : c.includes(n.q7.APP_CHANNEL)
                          ? [
                                {
                                    key: "channel",
                                    icon: "app_channel",
                                    label: r.intl.string(u.default.xI4N6Q),
                                    isNew: p.includes(h),
                                    creates: !f && ("first_publish" === l || p.includes(h)),
                                },
                            ]
                          : [],
                b = ((s = A.length > 0 && f ? c.filter((e) => e !== n.q7.ACTIVITY) : c),
                (0 ===
                    (i = a.filter((e) => {
                        let [t] = e;
                        return s.includes(t);
                    })).length && s.includes(n.q7.APPLICATION_COMMANDS)
                    ? a.filter((e) => {
                          let [t] = e;
                          return t === n.q7.BOT;
                      })
                    : i
                ).map((e) => {
                    let [t, l] = e;
                    return { surface: t, label: r.intl.string(l) };
                })).map((e) => {
                    let { surface: t, label: l } = e;
                    return { key: `surface:${t}`, icon: t, label: l, isNew: p.includes(t), creates: !1 };
                });
            return [...A, ...b];
        },
        a1: function (e, t) {
            return null == t || !0 === t.safetyHold
                ? null
                : (0, s.lE)(t.publishState)
                  ? d(e).length > 0 || (t.newAppChannels ?? []).length > 0
                      ? "adds_surfaces"
                      : null
                  : "first_publish";
        },
        sP: i,
    },
);
