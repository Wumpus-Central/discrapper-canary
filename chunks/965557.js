n.d(e, { d: () => c });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(287490),
    a = n(430404);
let o = (0, l.k4)(s.n.EXPERIMENTS_CATEGORY, { buildLayout: () => [a.z] }),
    T = (0, l.wf)(s.n.EXPERIMENTS_PANEL, {
        usePredicate: () => !(0, u.gN)("LegacyExperimentsPanel"),
        useTitle: () => "Experiments",
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    S = (0, l.wf)(s.n.EXPERIMENTS_PANEL, {
        usePredicate: () => (0, u.gN)("ExperimentsPanel"),
        useTitle: () => "Experiments",
        buildLayout: () => [o],
    }),
    c = (0, l.m7)(s.n.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: i.uOV,
        buildLayout: () => ((0, u.Gl)("ExperimentsPanel") ? [S] : [T]),
    });
