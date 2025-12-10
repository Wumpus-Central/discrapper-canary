n.d(e, { d: () => c });
var i = n(657707),
    l = n(509613),
    s = n(906467),
    u = n(313789),
    r = n(287490);
let a = (0, l.x1)(u.n.EXPERIMENTS_PANE, {
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    o = (0, l.wf)(u.n.EXPERIMENTS_PANEL, {
        useTitle: () => "Experiments",
        buildLayout: () => [a],
    }),
    c = (0, l.m7)(u.n.EXPERIMENTS_SIDEBAR_ITEM, {
        useTitle: () => "Experiments",
        icon: i.uOV,
        usePredicate: () => s.Z.isDeveloper,
        buildLayout: () => [o],
    });
