n.d(t, { T: () => h });
var i = n(179866),
    s = n(824552),
    l = n(419954),
    a = n(780964),
    r = n(367170),
    o = n(604575),
    d = n(463990),
    u = n(512706),
    c = n(735194),
    g = n(985018);
let m = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => g.intl.string(g.t["/7xJCF"]),
        buildLayout: () => [o.e, c.q, d.N, u.Y],
    }),
    _ = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            s.A.fetch();
        },
        getTitle: () => g.intl.string(g.t.YpCiMt),
        buildLayout: () => [r.j],
    }),
    A = (0, l.t_)(a.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        buildLayout: () => [m, _],
    }),
    h = (0, l.i4)(a.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => g.intl.string(g.t["+o1pDZ"]),
        icon: i.i,
        buildLayout: () => [A],
    });
