i.d(e, {
    $: () => d,
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(490510),
    a = i(635603),
    o = i(531525),
    T = i(985018);
let A = (0, l.zZ)(s.X.KEYBINDS_CATEGORY, {
        buildLayout: () => [a.O],
    }),
    S = (0, l.t_)(s.X.KEYBINDS_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyKeybindsPanel"),
        useTitle: () => T.intl.string(T.t.T9DA2K),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    E = (0, l.t_)(s.X.KEYBINDS_PANEL, {
        usePredicate: () => (0, r.dk)("KeybindsPanel"),
        useTitle: () => T.intl.string(T.t.T9DA2K),
        buildLayout: () => [A],
    }),
    d = (0, l.i4)(s.X.KEYBINDS_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.T9DA2K),
        getLegacySearchKey: () => ((0, r.WJ)("KeybindsPanel") ? void 0 : o.H.KEYBINDS),
        icon: n.KeyboardIcon,
        buildLayout: () => ((0, r.WJ)("KeybindsPanel") ? [E] : [S]),
    });
