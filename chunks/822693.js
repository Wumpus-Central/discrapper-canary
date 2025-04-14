n.d(t, { m: () => j }), n(388685), n(290780);
var r = n(200651),
    i = n(192379),
    s = n(149765),
    l = n(442837),
    a = n(481060),
    o = n(933557),
    c = n(984933),
    d = n(496675),
    u = n(699516),
    m = n(594174),
    g = n(434404),
    p = n(800223),
    h = n(981631),
    f = n(388032);
let x = 'NO_CHANNEL',
    b = s.$e(h.Plq.VIEW_CHANNEL, h.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let { guildId: t, widgetEnabled: n, widgetChannelId: s, className: h, enableLocalUpdate: j } = e,
        N = (0, l.e7)([c.ZP], () => c.ZP.getChannels(t)),
        _ = i.useMemo(() => {
            let e = [...N[c.sH], ...N[c.Zb]]
                .filter((e) => {
                    let { channel: n } = e;
                    return n.guild_id === t;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === s || d.Z.can(b, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, o.F6)(t, m.default, u.Z, !0)
                    };
                });
            return (
                e.unshift({
                    value: x,
                    label: f.NW.string(f.t.u197b2)
                }),
                e
            );
        }, [N, t, s]),
        v = i.useCallback(
            (e) => {
                j ? (0, p.c)(t, n, e !== x ? e : null) : g.Z.updateEmbed(t, n, e !== x ? e : null);
            },
            [t, n, j]
        );
    return (0, r.jsx)(a.q4e, {
        options: _,
        value: s,
        onChange: v,
        className: h
    });
}
