n.d(t, {
    s: () => j,
}),
    n(228524),
    n(896048),
    n(667532);
var r = n(627968),
    i = n(64700),
    l = n(136722),
    s = n(311907),
    a = n(397927),
    c = n(47167),
    o = n(808728),
    d = n(576705),
    u = n(994500),
    f = n(287809),
    g = n(997509),
    b = n(875331),
    m = n(652215),
    p = n(985018);
let x = "NO_CHANNEL",
    h = l.kg(m.xBc.VIEW_CHANNEL, m.xBc.CREATE_INSTANT_INVITE);

function j(e) {
    let { label: t, description: n, guildId: l, widgetEnabled: m, widgetChannelId: j, enableLocalUpdate: O } = e,
        y = (0, s.bG)([o.Ay], () => o.Ay.getChannels(l)),
        v = i.useMemo(() => {
            let e = [...y[o.I6], ...y[o.vM]]
                .filter((e) => {
                    let { channel: t } = e;
                    return t.guild_id === l;
                })
                .filter((e) => {
                    let { channel: t } = e;
                    return t.id === j || d.A.can(h, t);
                })
                .map((e) => {
                    let { channel: t } = e;
                    return {
                        id: t.id,
                        value: t.id,
                        label: (0, c.m1)(t, f.default, u.A, !0),
                    };
                });
            return (
                e.unshift({
                    id: "no-instant-invite",
                    value: x,
                    label: p.intl.string(p.t.u197b7),
                }),
                e
            );
        }, [y, l, j]),
        A = i.useCallback(
            (e) => {
                O ? (0, b.E)(l, m, e !== x ? e : null) : g.A.updateEmbed(l, m, e !== x ? e : null);
            },
            [l, m, O],
        );
    return (0, r.jsx)(a.l6P, {
        label: t,
        description: n,
        options: v,
        value: null != j ? j : void 0,
        onSelectionChange: A,
        selectionMode: "single",
        fullWidth: !0,
    });
}
