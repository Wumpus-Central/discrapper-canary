n.d(e, { d: () => d });
var i = n(657707),
    l = n(509613),
    s = n(906467),
    u = n(313789),
    r = n(526665),
    a = n(287490),
    o = n(430404);
let c = (0, l.k4)(u.n.EXPERIMENTS_CATEGORY, { buildLayout: () => [o.z] }),
    T = (0, l.wf)(u.n.EXPERIMENTS_PANEL, {
        usePredicate: () => !(0, r.gN)("LegacyExperimentsPanel"),
        useTitle: () => "Experiments",
        StronglyDiscouragedCustomComponent: a.Z,
        buildLayout: () => [],
    }),
    S = (0, l.wf)(u.n.EXPERIMENTS_PANEL, {
        usePredicate: () => (0, r.gN)("ExperimentsPanel"),
        useTitle: () => "Experiments",
        buildLayout: () => [c],
    }),
    d = (0, l.m7)(u.n.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: i.uOV,
        usePredicate: () => s.Z.isDeveloper,
        buildLayout: () => ((0, r.Gl)("ExperimentsPanel") ? [S] : [T]),
    });
