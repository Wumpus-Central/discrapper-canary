n.d(t, { h: () => N, y: () => j }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(478437),
    r = n(311907),
    a = n(417048),
    o = n(843282),
    d = n(999903),
    c = n(47167),
    u = n(713654),
    m = n(734057),
    g = n(769765),
    h = n(994500),
    x = n(287809),
    _ = n(997509),
    p = n(985018);
let A = "NO_CHANNEL";
function E(e) {
    return { value: e.id, label: (0, c.m1)(e, x.default, h.A), channel: e, category: m.A.getChannel(e.parent_id) };
}
function f(e) {
    let { option: t } = e,
        { label: n, channel: s, category: r } = t,
        o = l.useMemo(() => (0, u.gU)(s), [s]),
        d = (0, c.Ay)(s);
    return (0, i.jsx)(a.X, { title: n, icon: o, subtitle: null != r ? d : null });
}
function j(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a, label: o } = e,
        c = (0, r.bG)([g.A], () => g.A.getCategories(n)),
        u = l.useMemo(() => {
            let e = (0, d.A)(c._categories, c)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.r.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return E(t);
                });
            return e.unshift({ value: A, label: p.intl.string(p.t.wGiHkK) }), e;
        }, [c]),
        m = l.useCallback((e) => {
            let t = e === A ? null : e;
            _.A.updateGuild({ afkChannelId: t });
        }, []);
    return (0, i.jsx)(I, { label: o, value: a ?? A, options: u, canManageGuild: t, onChange: m });
}
function N(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a, label: o, description: c, layout: u } = e,
        m = (0, r.bG)([g.A], () => g.A.getCategories(n)),
        h = l.useMemo(() => {
            let e = (0, d.A)(m._categories, m)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === s.r.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return E(t);
                });
            return e.unshift({ value: A, label: p.intl.string(p.t.ibUhoa) }), e;
        }, [m]),
        x = l.useCallback((e) => {
            let t = e === A ? null : e;
            _.A.updateGuild({ systemChannelId: t });
        }, []);
    return (0, i.jsx)(I, {
        label: o,
        description: c,
        layout: u,
        value: a ?? A,
        options: h,
        canManageGuild: t,
        onChange: x,
    });
}
function I(e) {
    let { value: t, options: n, canManageGuild: s, onChange: r, label: a, description: d, layout: c } = e,
        u = l.useCallback((e) => {
            if (null != e) return (0, i.jsx)(f, { option: e });
        }, []),
        m = l.useCallback((e) => u(e[0]), [u]);
    return (0, i.jsx)(o.Te, {
        label: a,
        description: d,
        value: t,
        options: n,
        isDisabled: !s,
        onChange: r,
        renderOptionLabel: u,
        renderOptionValue: m,
        layout: c,
        "data-migration-pending": !0,
    });
}
