n.d(t, { Z: () => a });
var i = n(657707),
    l = n(509613),
    s = n(906467),
    o = n(287490);
let r = (0, l.x1)("ExperimentsPane", {
        useTitle: () => "Experiments",
        getLayout: () => [],
        render: o.Z,
    }),
    a = (0, l.wf)("Experiments", {
        icon: i.uOV,
        useTitle: () => "Experiments",
        usePredicate: () => s.Z.isDeveloper,
        getLayout: () => [r],
    });
