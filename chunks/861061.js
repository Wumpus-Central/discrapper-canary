i.d(e, {
    Jj: () => _,
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(768908),
    a = i(682262),
    o = i(644619),
    T = i(474069),
    A = i(531525),
    S = i(985018);
let E = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => [],
        usePredicate: () => !(0, r.dk)("RegisteredGamesPanel"),
    }),
    d = (0, l.t_)(s.X.REGISTERED_GAMES_PANEL, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        usePredicate: () => (0, r.dk)("RegisteredGamesPanel"),
        buildLayout: () => [T.i, o.G],
    }),
    _ = (0, l.i4)(s.X.REGISTERED_GAMES_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.AVDyEj),
        getLegacySearchKey: () => ((0, r.WJ)("RegisteredGamesPanel") ? void 0 : A.H.REGISTERED_GAMES),
        icon: n.GameControllerIcon,
        usePredicate: a.Pi,
        buildLayout: () => ((0, r.WJ)("RegisteredGamesPanel") ? [d] : [E]),
    });
