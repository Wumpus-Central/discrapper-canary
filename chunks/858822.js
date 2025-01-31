n.d(e, { Z: () => f });
var l = n(200651);
n(192379);
var i = n(913527),
    r = n.n(i),
    a = n(442837),
    u = n(481060),
    o = n(87051),
    s = n(776568),
    c = n(777861),
    d = n(9156),
    m = n(621600),
    N = n(388032);
function f(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: i, muteConfig: f } = (0, a.cj)(
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
        : i
          ? (0, l.jsx)(u.sNh, {
                id: 'unmute-guild',
                label: N.intl.string(N.t.De0BTE),
                subtext: _,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, m.ZB.Unmuted)
            })
          : (0, l.jsx)(u.sNh, {
                id: 'mute-guild',
                label: N.intl.string(N.t.vRzp7O),
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !0 }, m.ZB.Muted),
                children: (0, s.k)().map((t) => {
                    let { value: i, label: a } = t;
                    return (0, l.jsx)(
                        u.sNh,
                        {
                            id: ''.concat(i),
                            label: a,
                            action: () =>
                                (function (t) {
                                    if (null == n) return;
                                    let l = t > 0 ? r()().add(t, 'second').toISOString() : null;
                                    o.Z.updateGuildNotificationSettings(
                                        n,
                                        {
                                            muted: !0,
                                            mute_config: {
                                                selected_time_window: t,
                                                end_time: l
                                            }
                                        },
                                        m.ZB.Muted,
                                        e
                                    );
                                })(i)
                        },
                        i
                    );
                })
            });
}
