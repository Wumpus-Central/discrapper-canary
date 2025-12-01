n.d(e, { d: () => c });
var i = n(657707),
    r = n(509613),
    l = n(906467),
    u = n(313789),
    s = n(287490);
let a = (0, r.x1)(u.n.EXPERIMENTS_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    o = (0, r.wf)(u.n.EXPERIMENTS_PANEL, {
        useTitle: () => "Experiments",
        buildLayout: () => [a],
    }),
    c = (0, r.m7)(u.n.EXPERIMENTS_SIDEBAR_ITEM, {
        icon: i.uOV,
        useTitle: () => "Experiments",
        usePredicate: () => l.Z.isDeveloper,
        buildLayout: () => [o],
    });
