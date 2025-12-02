n.d(e, { d: () => c });
var i = n(657707),
    r = n(509613),
    l = n(906467),
    s = n(313789),
    u = n(287490);
let a = (0, r.x1)(s.n.EXPERIMENTS_PANE, {
        buildLayout: () => [],
        render: u.Z,
    }),
    o = (0, r.wf)(s.n.EXPERIMENTS_PANEL, {
        useTitle: () => "Experiments",
        buildLayout: () => [a],
    }),
    c = (0, r.m7)(s.n.EXPERIMENTS_SIDEBAR_ITEM, {
        icon: i.uOV,
        useTitle: () => "Experiments",
        usePredicate: () => l.Z.isDeveloper,
        buildLayout: () => [o],
    });
