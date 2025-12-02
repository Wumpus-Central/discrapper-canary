n.d(e, { g: () => T });
var i = n(54381),
    l = n(657707),
    s = n(509613),
    r = n(313789),
    u = n(526665),
    a = n(889029),
    o = n(290434),
    c = n(726985),
    d = n(388032);
let E = (0, s.x1)(r.n.STREAMER_MODE_PANE, {
        buildLayout: () => [o.Z],
        usePredicate: () => (0, u.BK)("StreamerModePane"),
    }),
    S = (0, s.x1)(r.n.STREAMER_MODE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
        usePredicate: () => !(0, u.BK)("StreamerModePane"),
    }),
    I = (0, s.wf)(r.n.STREAMER_MODE_PANEL, {
        useTitle: () => d.intl.string(d.t.S5GfOW),
        buildLayout: () => ((0, u.Ml)("StreamerModePanel") ? [E] : [S]),
    }),
    T = (0, s.m7)(r.n.STREAMER_MODE_SIDEBAR_ITEM, {
        icon: l.m3e,
        useTitle: () => d.intl.string(d.t.S5GfOW),
        getLegacySearchKey: () => ((0, u.Ml)("StreamerModePanel") ? void 0 : c.s6.STREAMER_MODE),
        buildLayout: () => [I],
    });
