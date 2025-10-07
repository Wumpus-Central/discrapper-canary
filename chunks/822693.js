n.d(t, { m: () => j }), n(953529), n(388685), n(290780);
var r = n(951288),
    i = n(647438),
    l = n(149765),
    s = n(442837),
    a = n(481060),
    o = n(933557),
    c = n(984933),
    d = n(496675),
    u = n(699516),
    g = n(594174),
    m = n(434404),
    p = n(800223),
    f = n(981631),
    h = n(388032);
let x = "NO_CHANNEL",
    b = l.$e(f.Plq.VIEW_CHANNEL, f.Plq.CREATE_INSTANT_INVITE);
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
        C = (0, s.e7)([c.ZP], () => c.ZP.getChannels(l)),
        O = i.useMemo(() => {
            let e = [...C[c.sH], ...C[c.Zb]]
                .filter((e) => {
                    let { channel: t } = e;
                    return t.guild_id === l;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === j || d.Z.can(b, t);
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
                    value: x,
                    label: h.intl.string(h.t.u197b2),
                }),
                e
            );
        }, [C, l, j]),
        y = i.useCallback(
            (e) => {
                v ? (0, p.c)(l, f, e !== x ? e : null) : m.Z.updateEmbed(l, f, e !== x ? e : null);
            },
            [l, f, v],
        );
    return (0, r.jsx)(a.q4e, {
        label: t,
        description: n,
        options: O,
        value: j,
        onChange: y,
        className: _,
    });
}
