i.d(e, { Jj: () => g });
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(768908),
    u = i(682262),
    o = i(644619),
    d = i(474069),
    T = i(531525),
    A = i(985018);
let S = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel"),
    }),
    E = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [d.i, o.G],
    }),
    g = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.AVDyEj),
        getLegacySearchKey: () => ((0, r.WJ)("RegisteredGamesPanel") ? void 0 : T.H.REGISTERED_GAMES),
        icon: n.GameControllerIcon,
        usePredicate: u.Pi,
        buildLayout: () => ((0, r.WJ)("RegisteredGamesPanel") ? [E] : [S]),
    });
