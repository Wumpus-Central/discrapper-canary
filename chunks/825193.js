n.d(e, { w: () => S });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    r = n(526665),
    u = n(64914),
    a = n(546424),
    o = n(726985),
    c = n(388032);
let d = (0, l.wf)(s.n.ADVANCED_PANEL, {
        useTitle: () => c.intl.string(c.t["8/udY0"]),
        usePredicate: () => !(0, r.gN)("LegacyAdvancedPanel"),
        StronglyDiscouragedCustomComponent: u.ZP,
        buildLayout: () => [],
    }),
    g = (0, l.wf)(s.n.ADVANCED_PANEL, {
        useTitle: () => c.intl.string(c.t["8/udY0"]),
        usePredicate: () => (0, r.gN)("AdvancedPanel"),
        buildLayout: () => [a.U],
    }),
    S = (0, l.m7)(s.n.ADVANCED_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t["8/udY0"]),
        getLegacySearchKey: () => ((0, r.Gl)("AdvancedPanel") ? void 0 : o.s6.SETTINGS_ADVANCED),
        icon: i.xhG,
        buildLayout: () => ((0, r.Gl)("AdvancedPanel") ? [g] : [d]),
    });
