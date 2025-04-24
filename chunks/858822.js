n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(913527),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(87051),
    c = n(776568),
    u = n(777861),
    d = n(9156),
    p = n(621600),
    h = n(388032);
function f(e, t) {
    let n = null == e ? void 0 : e.id,
        { muted: i, muteConfig: f } = (0, o.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        m = (0, u.U)(f);
    return null == n
        ? null
        : i
          ? (0, r.jsx)(a.sNh, {
                id: 'unmute-guild',
                label: h.intl.string(h.t.De0BTE),
                subtext: m,
                action: () => s.Z.updateGuildNotificationSettings(n, { muted: !1 }, p.ZB.Unmuted)
            })
          : (0, r.jsx)(a.sNh, {
                id: 'mute-guild',
                label: h.intl.string(h.t.vRzp7O),
                action: () => s.Z.updateGuildNotificationSettings(n, { muted: !0 }, p.ZB.Muted),
                children: (0, c.k)().map((e) => {
                    let { value: i, label: o } = e;
                    return (0, r.jsx)(
                        a.sNh,
                        {
                            id: ''.concat(i),
                            label: o,
                            action: () =>
                                (function (e) {
                                    if (null == n) return;
                                    let r = e > 0 ? l()().add(e, 'second').toISOString() : null;
                                    s.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: e,
                                                end_time: r
                                            }
                                        },
                                        p.ZB.Muted,
                                        t
                                    );
                                })(i)
                        },
                        i
                    );
                })
            });
}
