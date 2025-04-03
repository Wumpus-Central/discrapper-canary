n.d(t, { Z: () => g }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(322665),
    o = n(17845),
    s = n(374939),
    c = n(283293),
    u = n(726115),
    d = n(294330),
    p = n(981631),
    h = n(849781);
let f = {
    page: p.ZY5.GUILD_DISCOVERY,
    object: p.qAy.CARD,
    section: p.jXE.DISCOVER_POPULAR
};
function g(e) {
    let { tab: t, guildIds: n, loading: p, onScroll: g, onGuildCardClick: m, onGuildCardSeen: b } = e,
        _ = (0, u.Mf)(t),
        E = (0, u.a$)(t),
        O = (0, u.QW)(t),
        N = (0, u.lg)(t),
        y = i.useMemo(() => {
            let e = p ? 30 : n.length,
                t = [];
            for (let a = 0; a < e; a++) {
                var i, l;
                t.push(
                    (0, r.jsx)(
                        d.Eo,
                        {
                            guildId: null != (i = n[a]) ? i : null,
                            index: a,
                            onClick: (e) => m(e, a, N, f),
                            onView: (e) => b(e, N)
                        },
                        null != (l = n[a]) ? l : a
                    )
                );
            }
            return t;
        }, [N, n, p, m, b]);
    return (0, r.jsxs)(c.Z, {
        onScroll: g,
        children: [
            (0, r.jsx)(o.Z, {
                title: _,
                description: E,
                children: (0, r.jsx)(a.Z, {})
            }),
            (0, r.jsxs)(s.Z, {
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: h.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: O
                    }),
                    (0, r.jsx)('div', {
                        className: h.content,
                        children: y
                    })
                ]
            })
        ]
    });
}
