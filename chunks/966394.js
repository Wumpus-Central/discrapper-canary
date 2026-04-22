n.d(t, { s: () => E }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    r = n(311907),
    a = n(691885),
    o = n(47167),
    d = n(808728),
    c = n(576705),
    u = n(994500),
    m = n(287809),
    g = n(997509),
    h = n(875331),
    x = n(652215),
    _ = n(985018);
let p = "NO_CHANNEL",
    A = s.kg(x.xBc.VIEW_CHANNEL, x.xBc.CREATE_INSTANT_INVITE);
function E(e) {
    let { label: t, description: n, guildId: s, widgetEnabled: x, widgetChannelId: E, enableLocalUpdate: f } = e,
        j = (0, r.bG)([d.Ay], () => d.Ay.getChannels(s)),
        N = l.useMemo(() => {
            let e = [...j[d.I6], ...j[d.vM]]
                .filter((e) => {
                    let { channel: t } = e;
                    return t.guild_id === s;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === E || c.A.can(A, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return { id: t.id, value: t.id, label: (0, o.m1)(t, m.default, u.A, !0) };
                });
            return e.unshift({ id: "no-instant-invite", value: p, label: _.intl.string(_.t.u197b7) }), e;
        }, [j, s, E]),
        I = l.useCallback(
            (e) => {
                f ? (0, h.E)(s, x, e !== p ? e : null) : g.A.updateEmbed(s, x, e !== p ? e : null);
            },
            [s, x, f],
        );
    return (0, i.jsx)(a.l, {
        label: t,
        description: n,
        options: N,
        value: E ?? void 0,
        onSelectionChange: I,
        selectionMode: "single",
        fullWidth: !0,
    });
}
