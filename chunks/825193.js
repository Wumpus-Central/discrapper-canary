n.d(e, { w: () => E });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(64914),
    a = n(546424),
    o = n(726985),
    T = n(388032);
let S = (0, l.wf)(s.n.ADVANCED_PANEL, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        usePredicate: () => !(0, u.gN)("LegacyAdvancedPanel"),
        StronglyDiscouragedCustomComponent: r.ZP,
        buildLayout: () => [],
    }),
    c = (0, l.wf)(s.n.ADVANCED_PANEL, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        usePredicate: () => (0, u.gN)("AdvancedPanel"),
        buildLayout: () => [a.U],
    }),
    E = (0, l.m7)(s.n.ADVANCED_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["8/udY0"]),
        getLegacySearchKey: () => ((0, u.Gl)("AdvancedPanel") ? void 0 : o.s6.SETTINGS_ADVANCED),
        icon: i.xhG,
        buildLayout: () => ((0, u.Gl)("AdvancedPanel") ? [c] : [S]),
    });
