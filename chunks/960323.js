n.d(e, { K: () => d });
var i = n(657707),
    l = n(509613),
    u = n(131951),
    r = n(313789),
    s = n(604224),
    o = n(726985),
    a = n(388032);
let c = (0, l.x1)(r.n.VOICE_AND_VIDEO_PANE, {
        buildLayout: () => [],
        render: s.Z,
    }),
    E = (0, l.wf)(r.n.VOICE_AND_VIDEO_PANEL, {
        useTitle: () => a.intl.string(a.t.B1fFpf),
        buildLayout: () => [c],
    }),
    d = (0, l.m7)(r.n.VOICE_AND_VIDEO_SIDEBAR_ITEM, {
        icon: i.S6n,
        useTitle: () => a.intl.string(a.t.B1fFpf),
        usePredicate: () => u.Z.isSupported(),
        legacySearchKey: o.s6.VOICE_AND_VIDEO,
        buildLayout: () => [E],
    });
