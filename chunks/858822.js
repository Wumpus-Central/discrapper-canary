n.d(e, { Z: () => f });
var r = n(200651);
n(192379);
var a = n(913527),
    u = n.n(a),
    l = n(442837),
    i = n(481060),
    o = n(87051),
    s = n(776568),
    c = n(777861),
    d = n(9156),
    N = n(621600),
    m = n(388032);
function f(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: a, muteConfig: f } = (0, l.cj)(
            [d.ZP],
            () => ({
                muted: null != n ? d.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? d.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        _ = (0, c.U)(f);
    return null == n
        ? null
        : a
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
                    let { value: a, label: l } = t;
                    return (0, r.jsx)(
                        i.sNh,
                        {
                            id: ''.concat(a),
                            label: l,
                            action: () =>
                                (function (t) {
                                    if (null == n) return;
                                    let r = t > 0 ? u()().add(t, 'second').toISOString() : null;
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
                                })(a)
                        },
                        a
                    );
                })
            });
}
