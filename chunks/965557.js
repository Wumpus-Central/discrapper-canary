n.d(e, { d: () => c });
var i = n(657707),
    l = n(509613),
    u = n(906467),
    r = n(313789),
    s = n(287490);
let o = (0, l.x1)(r.n.EXPERIMENTS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    a = (0, l.wf)(r.n.EXPERIMENTS_PANEL, {
        useTitle: () => "Experiments",
        buildLayout: () => [o],
    }),
    c = (0, l.m7)(r.n.EXPERIMENTS_SIDEBAR_ITEM, {
        icon: i.uOV,
        useTitle: () => "Experiments",
        usePredicate: () => u.Z.isDeveloper,
        buildLayout: () => [a],
    });
