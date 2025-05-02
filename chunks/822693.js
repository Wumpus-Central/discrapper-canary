n.d(t, { m: () => j }), n(388685), n(290780);
var r = n(200651),
    i = n(192379),
    l = n(149765),
    s = n(442837),
    a = n(481060),
    o = n(933557),
    c = n(984933),
    u = n(496675),
    d = n(699516),
    m = n(594174),
    g = n(434404),
    p = n(800223),
    f = n(981631),
    h = n(388032);
let x = 'NO_CHANNEL',
    b = l.$e(f.Plq.VIEW_CHANNEL, f.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let { guildId: t, widgetEnabled: n, widgetChannelId: l, className: f, enableLocalUpdate: j } = e,
        _ = (0, s.e7)([c.ZP], () => c.ZP.getChannels(t)),
        v = i.useMemo(() => {
            let e = [..._[c.sH], ..._[c.Zb]]
                .filter((e) => {
                    let { channel: n } = e;
                    return n.guild_id === t;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === l || u.Z.can(b, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, o.F6)(t, m.default, d.Z, !0)
                    };
                });
            return (
                e.unshift({
                    value: x,
                    label: h.intl.string(h.t.u197b2)
                }),
                e
            );
        }, [_, t, l]),
        O = i.useCallback(
            (e) => {
                j ? (0, p.c)(t, n, e !== x ? e : null) : g.Z.updateEmbed(t, n, e !== x ? e : null);
            },
            [t, n, j]
        );
    return (0, r.jsx)(a.q4e, {
        options: v,
        value: l,
        onChange: O,
        className: f
    });
}
