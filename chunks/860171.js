n.d(e, { g: () => I });
var i = n(54381),
    r = n(657707),
    l = n(509613),
    u = n(313789),
    s = n(526665),
    a = n(889029),
    o = n(290434),
    c = n(726985),
    d = n(388032);
let E = (0, l.x1)(u.n.STREAMER_MODE_PANE, {
        buildLayout: () => [o.Z],
        usePredicate: () => (0, s.BK)("StreamerModePane"),
    }),
    S = (0, l.x1)(u.n.STREAMER_MODE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
        usePredicate: () => !(0, s.BK)("StreamerModePane"),
    }),
    T = (0, l.wf)(u.n.STREAMER_MODE_PANEL, {
        useTitle: () => d.intl.string(d.t.S5GfOW),
        buildLayout: () => ((0, s.Ml)("StreamerModePanel") ? [E] : [S]),
    }),
    I = (0, l.m7)(u.n.STREAMER_MODE_SIDEBAR_ITEM, {
        icon: r.m3e,
        useTitle: () => d.intl.string(d.t.S5GfOW),
        getLegacySearchKey: () => ((0, s.Ml)("StreamerModePanel") ? void 0 : c.s6.STREAMER_MODE),
        buildLayout: () => [T],
    });
