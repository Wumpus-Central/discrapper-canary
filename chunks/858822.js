n.d(e, { Z: () => N });
var l = n(200651);
n(192379);
var i = n(913527),
    r = n.n(i),
    a = n(442837),
    u = n(481060),
    o = n(87051),
    s = n(776568),
    d = n(777861),
    c = n(9156),
    m = n(621600),
    f = n(388032);
function N(t, e) {
    let n = null == t ? void 0 : t.id,
        { muted: i, muteConfig: N } = (0, a.cj)(
            [c.ZP],
            () => ({
                muted: null != n ? c.ZP.isMuted(n) : void 0,
                muteConfig: null != n ? c.ZP.getMuteConfig(n) : void 0
            }),
            [n]
        ),
        _ = (0, d.U)(N);
    return null == n
        ? null
        : i
          ? (0, l.jsx)(u.sNh, {
                id: 'unmute-guild',
                label: f.intl.string(f.t.De0BTE),
                subtext: _,
                action: () => o.Z.updateGuildNotificationSettings(n, { muted: !1 }, m.ZB.Unmuted)
            })
          : (0, l.jsx)(u.sNh, {
                id: 'mute-guild',
                label: f.intl.string(f.t.vRzp7O),
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
