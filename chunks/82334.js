n.d(t, { Z: () => a });
var i = n(657707),
    l = n(509613),
    o = n(906467),
    r = n(287490);
let s = (0, l.x1)("ExperimentsPane", {
        useTitle: () => "Experiments",
        getLayout: () => [],
        render: r.Z,
    }),
    a = (0, l.wf)("Experiments", {
        icon: i.uOV,
        useTitle: () => "Experiments",
        usePredicate: () => o.Z.isDeveloper,
        getLayout: () => [s],
    });
