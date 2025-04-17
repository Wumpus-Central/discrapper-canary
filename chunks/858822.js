n.d(e, { Z: () => f });
var r = n(200651);
n(192379);
var l = n(913527),
    a = n.n(l),
    u = n(442837),
    i = n(481060),
    o = n(87051),
    s = n(776568),
    d = n(777861),
    c = n(9156),
    N = n(621600),
    m = n(388032);
function f(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: l, muteConfig: f } = (0, u.cj)(
            [c.ZP],
            () => ({
                muted: null != n ? c.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? c.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        _ = (0, d.U)(f);
    return null == n
        ? null
        : l
          ? (0, r.jsx)(i.sNh, {
                id: 'unmute-guild',
                label: m.NW.string(m.t.De0BTE),
                subtext: _,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, N.ZB.Unmuted)
            })
          : (0, r.jsx)(i.sNh, {
                id: 'mute-guild',
                label: m.NW.string(m.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, N.ZB.Muted),
                children: (0, s.k)().map((t) => {
                    let { value: l, label: u } = t;
                    return (0, r.jsx)(
                        i.sNh,
                        {
                            id: ''.concat(l),
                            label: u,
                            action: () =>
                                (function (t) {
                                    if (null == n) return;
                                    let r = t > 0 ? a()().add(t, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: t,
                                                end_time: r
                                            }
                                        },
                                        N.ZB.Muted,
                                        e
                                    );
                                })(l)
                        },
                        l
                    );
                })
            });
}
