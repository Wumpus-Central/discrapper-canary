n.d(t, { m: () => j }), n(953529), n(388685), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(149765),
    a = n(442837),
    s = n(199849),
    o = n(933557),
    c = n(984933),
    d = n(496675),
    u = n(699516),
    g = n(594174),
    f = n(434404),
    m = n(800223),
    b = n(981631),
    p = n(388032);
let h = "NO_CHANNEL",
    x = l.$e(b.Plq.VIEW_CHANNEL, b.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let {
            label: t,
            description: n,
            guildId: l,
            widgetEnabled: b,
            widgetChannelId: j,
            className: v,
            enableLocalUpdate: O,
        } = e,
        C = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)),
        y = i.useMemo(() => {
            let e = [...C[c.sH], ...C[c.Zb]]
                .filter((e) => {
                    let { channel: t } = e;
                    return t.guild_id === l;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === j || d.Z.can(x, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, o.F6)(t, g.default, u.Z, !0),
                    };
                });
            return (
                e.unshift({
                    value: h,
                    label: p.intl.string(p.t.u197b7),
                }),
                e
            );
        }, [C, l, j]),
        N = i.useCallback(
            (e) => {
                O ? (0, m.c)(l, b, e !== h ? e : null) : f.Z.updateEmbed(l, b, e !== h ? e : null);
            },
            [l, b, O],
        );
    return (0, r.jsx)(s.y6, {
        label: t,
        description: n,
        options: y,
        value: j,
        onChange: N,
        className: v,
    });
}
