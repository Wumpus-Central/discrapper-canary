n.d(e, { d: () => c });
var i = n(657707),
    l = n(509613),
    s = n(906467),
    r = n(313789),
    u = n(287490);
let a = (0, l.x1)(r.n.EXPERIMENTS_PANE, {
        render: u.Z,
        buildLayout: () => [],
    }),
    o = (0, l.wf)(r.n.EXPERIMENTS_PANEL, {
        useTitle: () => "Experiments",
        buildLayout: () => [a],
    }),
    c = (0, l.m7)(r.n.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: i.uOV,
        usePredicate: () => s.Z.isDeveloper,
        buildLayout: () => [o],
    });
