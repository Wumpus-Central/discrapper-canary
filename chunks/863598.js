n.d(t, {
    h: () => v,
    y: () => y,
}),
    n(667532),
    n(228524);
var r = n(627968),
    i = n(64700),
    l = n(478437),
    s = n(311907),
    a = n(417048),
    c = n(843282),
    o = n(999903),
    d = n(47167),
    u = n(713654),
    f = n(734057),
    g = n(769765),
    b = n(994500),
    m = n(287809),
    p = n(997509),
    x = n(985018);
let h = "NO_CHANNEL";
function j(e) {
    return {
        value: e.id,
        label: (0, d.m1)(e, m.default, b.A),
        channel: e,
        category: f.A.getChannel(e.parent_id),
    };
}
function O(e) {
    let { option: t } = e,
        { label: n, channel: l, category: s } = t,
        c = i.useMemo(() => (0, u.gU)(l), [l]),
        o = (0, d.Ay)(l);
    return (0, r.jsx)(a.X, {
        title: n,
        icon: c,
        subtitle: null != s ? o : null,
    });
}
function y(e) {
    let { canManageGuild: t, guildId: n, afkChannelId: a, label: c } = e,
        d = (0, s.bG)([g.A], () => g.A.getCategories(n)),
        u = i.useMemo(() => {
            let e = (0, o.A)(d._categories, d)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.r.GUILD_VOICE;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return j(t);
                });
            return (
                e.unshift({
                    value: h,
                    label: x.intl.string(x.t.wGiHkK),
                }),
                e
            );
        }, [d]),
        f = i.useCallback((e) => {
            let t = e === h ? null : e;
            p.A.updateGuild({ afkChannelId: t });
        }, []);
    return (0, r.jsx)(A, {
        label: c,
        value: null != a ? a : h,
        options: u,
        canManageGuild: t,
        onChange: f,
    });
}
function v(e) {
    let { canManageGuild: t, guildId: n, systemChannelId: a, label: c, description: d, layout: u } = e,
        f = (0, s.bG)([g.A], () => g.A.getCategories(n)),
        b = i.useMemo(() => {
            let e = (0, o.A)(f._categories, f)
                .filter((e) => {
                    let { channel: t } = e;
                    return t.type === l.r.GUILD_TEXT;
                })
                .map((e) => {
                    let { channel: t } = e;
                    return j(t);
                });
            return (
                e.unshift({
                    value: h,
                    label: x.intl.string(x.t.ibUhoa),
                }),
                e
            );
        }, [f]),
        m = i.useCallback((e) => {
            let t = e === h ? null : e;
            p.A.updateGuild({ systemChannelId: t });
        }, []);
    return (0, r.jsx)(A, {
        label: c,
        description: d,
        layout: u,
        value: null != a ? a : h,
        options: b,
        canManageGuild: t,
        onChange: m,
    });
}
function A(e) {
    let { value: t, options: n, canManageGuild: l, onChange: s, label: a, description: o, layout: d } = e,
        u = i.useCallback((e) => {
            if (null != e) return (0, r.jsx)(O, { option: e });
        }, []),
        f = i.useCallback((e) => u(e[0]), [u]);
    return (0, r.jsx)(c.Te, {
        label: a,
        description: o,
        value: t,
        options: n,
        isDisabled: !l,
        onChange: s,
        renderOptionLabel: u,
        renderOptionValue: f,
        layout: d,
        "data-migration-pending": !0,
    });
}
