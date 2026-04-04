n.d(t, { T: () => A });
var i = n(934551),
    s = n(824552),
    l = n(419954),
    a = n(780964),
    r = n(367170),
    o = n(604575),
    d = n(463990),
    c = n(512706),
    u = n(735194),
    m = n(985018);
let g = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_MAIN_TAB, {
        getTitle: () => m.intl.string(m.t["/7xJCF"]),
        buildLayout: () => [o.e, u.q, d.N, c.Y],
    }),
    _ = (0, l.dT)(a.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB, {
        initialize: () => {
            s.A.fetch();
        },
        getTitle: () => m.intl.string(m.t.YpCiMt),
        buildLayout: () => [r.j],
    }),
    x = (0, l.t_)(a.X.CONTENT_AND_SOCIAL_PANEL, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        buildLayout: () => [g, _],
    }),
    A = (0, l.i4)(a.X.CONTENT_AND_SOCIAL_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["+o1pDZ"]),
        icon: i.ShieldUserIcon,
        buildLayout: () => [x],
    });
