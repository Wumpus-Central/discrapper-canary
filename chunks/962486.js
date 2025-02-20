n.d(t, { Z: () => f }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(322665),
    a = n(17845),
    s = n(374939),
    c = n(283293),
    u = n(726115),
    d = n(294330),
    p = n(981631),
    h = n(578942);
let g = {
    page: p.ZY5.GUILD_DISCOVERY,
    object: p.qAy.CARD,
    section: p.jXE.DISCOVER_POPULAR
};
function f(e) {
    let { tab: t, guildIds: n, loading: p, onScroll: f, onGuildCardClick: m, onGuildCardSeen: b } = e,
        _ = (0, u.Mf)(t),
        E = (0, u.a$)(t),
        O = (0, u.QW)(t),
        N = (0, u.lg)(t),
        v = i.useMemo(() => {
            let e = p ? 30 : n.length,
                t = [];
            for (let o = 0; o < e; o++) {
                var i, l;
                t.push(
                    (0, r.jsx)(
                        d.Eo,
                        {
                            guildId: null !== (i = n[o]) && void 0 !== i ? i : null,
                            index: o,
                            onClick: (e) => m(e, o, N, g),
                            onView: (e) => b(e, N)
                        },
                        null !== (l = n[o]) && void 0 !== l ? l : o
                    )
                );
            }
            return t;
        }, [N, n, p, m, b]);
    return (0, r.jsxs)(c.Z, {
        onScroll: f,
        children: [
            (0, r.jsx)(a.Z, {
                title: _,
                description: E,
                children: (0, r.jsx)(o.Z, {})
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
                        children: v
                    })
                ]
            })
        ]
    });
}
