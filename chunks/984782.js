var l = t(951178),
    a = t(811587),
    u = t(258576),
    r = t(792996);
let i = [
        [l.q7.BOT, u.default.UnoAgo],
        [l.q7.ACTIVITY, u.default["I88/iG"]],
        [l.q7.VOICE_CHANNEL, u.default.skjf5I],
        [l.q7.PROFILE_WIDGET, u.default.gXY1x1],
        [l.q7.AUTOMOD, u.default.Q9ruoM],
        [l.q7.OVERLAY, u.default.KR5R34],
    ],
    s = { screen_capture: u.default["8/7kE7"], connect_user_to_voice: u.default.uvDWXa },
    c = new Set([
        l.q7.APP_CHANNEL,
        ...i.map((e) => {
            let [n] = e;
            return n;
        }),
    ]);
function p(e) {
    let n = new Set(e.supported_surfaces ?? []);
    return (e.preview_supported_surfaces ?? []).filter((e) => c.has(e) && !n.has(e));
}
t.d(
    n,
    {},
    {
        Dy: function (e, n, t) {
            var a;
            let s,
                c = [...new Set([...(e.preview_supported_surfaces ?? []), ...(e.supported_surfaces ?? [])])],
                f = "adds_surfaces" === t ? p(e) : [],
                o = "adds_surfaces" === t ? (n?.newAppChannels ?? []) : [],
                d = "user" === e.install_scope,
                h = d ? l.q7.ACTIVITY : l.q7.APP_CHANNEL,
                C = n?.previewAppChannels ?? [],
                v =
                    C.length > 0
                        ? C.map((e) => {
                              let n = d ? f.includes(h) : o.includes(e);
                              return {
                                  key: `channel:${e}`,
                                  icon: "app_channel",
                                  label: `#${e}`,
                                  isNew: n,
                                  creates: !d && ("first_publish" === t || n),
                              };
                          })
                        : c.includes(l.q7.APP_CHANNEL)
                          ? [
                                {
                                    key: "channel",
                                    icon: "app_channel",
                                    label: r.intl.string(u.default.xI4N6Q),
                                    isNew: f.includes(h),
                                    creates: !d && ("first_publish" === t || f.includes(h)),
                                },
                            ]
                          : [],
                w = ((a = v.length > 0 && d ? c.filter((e) => e !== l.q7.ACTIVITY) : c),
                (0 ===
                    (s = i.filter((e) => {
                        let [n] = e;
                        return a.includes(n);
                    })).length && a.includes(l.q7.APPLICATION_COMMANDS)
                    ? i.filter((e) => {
                          let [n] = e;
                          return n === l.q7.BOT;
                      })
                    : s
                ).map((e) => {
                    let [n, t] = e;
                    return { surface: n, label: r.intl.string(t) };
                })).map((e) => {
                    let { surface: n, label: t } = e;
                    return { key: `surface:${n}`, icon: n, label: t, isNew: f.includes(n), creates: !1 };
                });
            return [...v, ...w];
        },
        a1: function (e, n) {
            return null == n || !0 === n.safetyHold
                ? null
                : (0, a.l)(n.publishState)
                  ? p(e).length > 0 || (n.newAppChannels ?? []).length > 0
                      ? "adds_surfaces"
                      : null
                  : "first_publish";
        },
        sP: s,
    },
);
