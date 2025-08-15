n.d(t, { m: () => j }), n(388685), n(290780);
var r = n(951288),
    i = n(647438),
    l = n(149765),
    a = n(442837),
    s = n(481060),
    o = n(933557),
    c = n(984933),
    d = n(496675),
    u = n(699516),
    m = n(594174),
    g = n(434404),
    p = n(800223),
    h = n(981631),
    f = n(388032);
let b = "NO_CHANNEL",
    x = l.$e(h.Plq.VIEW_CHANNEL, h.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let { guildId: t, widgetEnabled: n, widgetChannelId: l, className: h, enableLocalUpdate: j } = e,
        v = (0, a.e7)([c.ZP], () => c.ZP.getChannels(t)),
        _ = i.useMemo(() => {
            let e = [...v[c.sH], ...v[c.Zb]]
                .filter((e) => {
                    let { channel: n } = e;
                    return n.guild_id === t;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === l || d.Z.can(x, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        value: t.id,
                        label: (0, o.F6)(t, m.default, u.Z, !0),
                    };
                });
            return (
                e.unshift({
                    value: b,
                    label: f.intl.string(f.t.u197b2),
                }),
                e
            );
        }, [v, t, l]),
        O = i.useCallback(
            (e) => {
                j ? (0, p.c)(t, n, e !== b ? e : null) : g.Z.updateEmbed(t, n, e !== b ? e : null);
            },
            [t, n, j],
        );
    return (0, r.jsx)(s.q4e, {
        options: _,
        value: l,
        onChange: O,
        className: h,
    });
}
