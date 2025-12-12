n.d(t, { Z: () => h }), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(322665),
    s = n(17845),
    o = n(374939),
    c = n(283293),
    u = n(726115),
    d = n(294330),
    p = n(981631),
    f = n(423337);
let g = {
    page: p.ZY5.GUILD_DISCOVERY,
    object: p.qAy.CARD,
    section: p.jXE.DISCOVER_POPULAR,
};
function h(e) {
    let { tab: t, guildIds: n, loading: p, onScroll: h, onGuildCardClick: m, onGuildCardSeen: b } = e,
        E = (0, u.Mf)(t),
        _ = (0, u.a$)(t),
        O = (0, u.QW)(t),
        v = (0, u.lg)(t),
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
                            onClick: (e) => m(e, a, v, g),
                            onView: (e) => b(e, v),
                        },
                        null != (l = n[a]) ? l : a,
                    ),
                );
            }
            return t;
        }, [v, n, p, m, b]);
    return (0, r.jsxs)(c.Z, {
        onScroll: h,
        children: [
            (0, r.jsx)(s.Z, {
                title: E,
                description: _,
                children: (0, r.jsx)(a.Z, {}),
            }),
            (0, r.jsxs)(o.Z, {
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: f.sectionTitle,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: O,
                    }),
                    (0, r.jsx)("div", {
                        className: f.content,
                        children: y,
                    }),
                ],
            }),
        ],
    });
}
