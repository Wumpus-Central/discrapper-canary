n.d(t, { Z: () => h }), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(322665),
    s = n(17845),
    o = n(374939),
    c = n(283293),
    u = n(726115),
    d = n(294330),
    p = n(981631),
    f = n(663448);
let m = {
    page: p.ZY5.GUILD_DISCOVERY,
    object: p.qAy.CARD,
    section: p.jXE.DISCOVER_POPULAR,
};
function h(e) {
    let { tab: t, guildIds: n, loading: p, onScroll: h, onGuildCardClick: g, onGuildCardSeen: _ } = e,
        b = (0, u.Mf)(t),
        E = (0, u.a$)(t),
        O = (0, u.QW)(t),
        I = (0, u.lg)(t),
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
                            onClick: (e) => g(e, a, I, m),
                            onView: (e) => _(e, I),
                        },
                        null != (l = n[a]) ? l : a,
                    ),
                );
            }
            return t;
        }, [I, n, p, g, _]);
    return (0, r.jsxs)(c.Z, {
        onScroll: h,
        children: [
            (0, r.jsx)(s.Z, {
                title: b,
                description: E,
                children: (0, r.jsx)(a.Z, {}),
            }),
            (0, r.jsxs)(o.Z, {
                children: [
                    (0, r.jsx)(l.Heading, {
                        className: f.sectionTitle,
                        variant: "heading-lg/semibold",
                        color: "header-primary",
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
