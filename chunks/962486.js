n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(322665),
    s = n(17845),
    o = n(374939),
    c = n(283293),
    d = n(726115),
    u = n(294330),
    h = n(981631),
    m = n(874892);
let p = {
    page: h.ZY5.GUILD_DISCOVERY,
    object: h.qAy.CARD,
    section: h.jXE.DISCOVER_POPULAR
};
function g(e) {
    let { tab: t, guildIds: n, loading: h, onScroll: g, onGuildCardClick: f, onGuildCardSeen: _ } = e,
        E = (0, d.Mf)(t),
        I = (0, d.a$)(t),
        C = (0, d.QW)(t),
        v = (0, d.lg)(t),
        N = r.useMemo(() => {
            let e = h ? 30 : n.length,
                t = [];
            for (let a = 0; a < e; a++) {
                var r, l;
                t.push(
                    (0, i.jsx)(
                        u.Eo,
                        {
                            guildId: null !== (r = n[a]) && void 0 !== r ? r : null,
                            index: a,
                            onClick: (e) => f(e, a, v, p),
                            onView: (e) => _(e, v)
                        },
                        null !== (l = n[a]) && void 0 !== l ? l : a
                    )
                );
            }
            return t;
        }, [v, n, h, f, _]);
    return (0, i.jsxs)(c.Z, {
        onScroll: g,
        children: [
            (0, i.jsx)(s.Z, {
                title: E,
                description: I,
                children: (0, i.jsx)(a.Z, {})
            }),
            (0, i.jsxs)(o.Z, {
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: m.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: C
                    }),
                    (0, i.jsx)('div', {
                        className: m.content,
                        children: N
                    })
                ]
            })
        ]
    });
}
