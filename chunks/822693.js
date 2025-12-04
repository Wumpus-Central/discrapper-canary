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
    m = n(434404),
    p = n(800223),
    f = n(981631),
    h = n(388032);
let b = "NO_CHANNEL",
    x = l.$e(f.Plq.VIEW_CHANNEL, f.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let {
            label: t,
            description: n,
            guildId: l,
            widgetEnabled: f,
            widgetChannelId: j,
            className: _,
            enableLocalUpdate: v,
        } = e,
        O = (0, a.e7)([c.ZP], () => c.ZP.getChannels(l)),
        C = i.useMemo(() => {
            let e = [...O[c.sH], ...O[c.Zb]]
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
                    value: b,
                    label: h.intl.string(h.t.u197b7),
                }),
                e
            );
        }, [O, l, j]),
        y = i.useCallback(
            (e) => {
                v ? (0, p.c)(l, f, e !== b ? e : null) : m.Z.updateEmbed(l, f, e !== b ? e : null);
            },
            [l, f, v],
        );
    return (0, r.jsx)(s.y6, {
        label: t,
        description: n,
        options: C,
        value: j,
        onChange: y,
        className: _,
    });
}
