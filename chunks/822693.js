n.d(t, { m: () => j }), n(47120), n(733860);
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
    g = n(434404),
    p = n(800223),
    h = n(981631),
    f = n(388032);
let b = 'NO_CHANNEL',
    x = s.$e(h.Plq.VIEW_CHANNEL, h.Plq.CREATE_INSTANT_INVITE);
function j(e) {
    let { guildId: t, widgetEnabled: n, widgetChannelId: s, className: h, enableLocalUpdate: j } = e,
        N = (0, a.e7)([c.ZP], () => c.ZP.getChannels(t)),
        _ = i.useMemo(() => {
            let e = [...N[c.sH], ...N[c.Zb]]
                .filter((e) => {
                    let { channel: n } = e;
                    return n.guild_id === t;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === s || d.Z.can(x, t);
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
                    value: b,
                    label: f.NW.string(f.t.u197b2)
                }),
                e
            );
        }, [N, t, s]),
        v = i.useCallback(
            (e) => {
                j ? (0, p.c)(t, n, e !== b ? e : null) : g.Z.updateEmbed(t, n, e !== b ? e : null);
            },
            [t, n, j]
        );
    return (0, r.jsx)(l.q4e, {
        options: _,
        value: s,
        onChange: v,
        className: h
    });
}
