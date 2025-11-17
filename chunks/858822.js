n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(913527),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(87051),
    c = n(776568),
    d = n(777861),
    u = n(9156),
    p = n(621600),
    h = n(388032);
function f(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: i, muteConfig: f } = (0, a.cj)(
            [u.ZP],
            () => ({
                muted: null != n ? u.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? u.ZP.getMuteConfig(n) : void 0,
            }),
            [n],
        ),
        g = (0, d.U)(f);
    return null == n
        ? null
        : i
          ? (0, r.jsx)(s.sNh, {
                id: "unmute-guild",
                label: h.intl.string(h.t.De0BTC),
                subtext: g,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, p.ZB.Unmuted),
            })
          : (0, r.jsx)(s.sNh, {
                id: "mute-guild",
                label: h.intl.string(h.t.vRzp7P),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, p.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: i, label: a } = e;
                    return (0, r.jsx)(
                        s.sNh,
                        {
                            id: "".concat(i),
                            label: a,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let r = e > 0 ? l()().add(e, "second").toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: r,
                                            },
                                        },
                                        p.ZB.Muted,
                                        t,
                                    );
                                })(i),
                        },
                        i,
                    );
                }),
            });
}
