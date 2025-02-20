n.d(t, { m: () => x }), n(47120), n(733860);
var r = n(200651),
    i = n(192379),
    s = n(149765),
    a = n(442837),
    l = n(481060),
    o = n(933557),
    c = n(984933),
    d = n(496675),
    u = n(699516),
    m = n(594174),
    p = n(434404),
    g = n(981631),
    h = n(388032);
let f = 'NO_CHANNEL',
    b = s.$e(g.Plq.VIEW_CHANNEL, g.Plq.CREATE_INSTANT_INVITE);
function x(e) {
    let { guildId: t, widgetEnabled: n, widgetChannelId: s, className: g } = e,
        x = (0, a.e7)([c.ZP], () => c.ZP.getChannels(t)),
        j = i.useMemo(() => {
            let e = [...x[c.sH], ...x[c.Zb]]
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
                    value: f,
                    label: h.NW.string(h.t.u197b2)
                }),
                e
            );
        }, [x, t, s]),
        N = i.useCallback(
            (e) => {
                p.Z.updateEmbed(t, n, e !== f ? e : null);
            },
            [t, n]
        );
    return (0, r.jsx)(l.q4e, {
        options: j,
        value: s,
        onChange: N,
        className: g
    });
}
