i.d(e, { Jj: () => c });
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(768908),
    u = i(682262),
    o = i(8086),
    d = i(644619),
    A = i(474069),
    T = i(531525),
    S = i(985018);
let E = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel"),
    }),
    g = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [A.i, d.G],
    }),
    c = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        getLegacySearchKey: () => ((0, r.WJ)("RegisteredGamesPanel") ? void 0 : T.H.REGISTERED_GAMES),
        icon: n.GameControllerIcon,
        usePredicate: u.Pi,
        useMenu: o.A,
        buildLayout: () => ((0, r.WJ)("RegisteredGamesPanel") ? [g] : [E]),
    });
