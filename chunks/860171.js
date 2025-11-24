n.d(e, { g: () => I });
var i = n(54381),
    l = n(657707),
    r = n(509613),
    u = n(313789),
    s = n(526665),
    a = n(889029),
    o = n(290434),
    c = n(726985),
    E = n(388032);
let d = (0, r.x1)(u.n.STREAMER_MODE_PANE, {
        buildLayout: () => [o.Z],
        usePredicate: () => (0, s.BK)("StreamerModePane"),
    }),
    S = (0, r.x1)(u.n.STREAMER_MODE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
        usePredicate: () => !(0, s.BK)("StreamerModePane"),
    }),
    T = (0, r.wf)(u.n.STREAMER_MODE_PANEL, {
        useTitle: () => E.intl.string(E.t.S5GfOW),
        buildLayout: () => ((0, s.Ml)("StreamerModePanel") ? [d] : [S]),
    }),
    I = (0, r.m7)(u.n.STREAMER_MODE_SIDEBAR_ITEM, {
        icon: l.m3e,
        useTitle: () => E.intl.string(E.t.S5GfOW),
        getLegacySearchKey: () => ((0, s.Ml)("StreamerModePanel") ? void 0 : c.s6.STREAMER_MODE),
        buildLayout: () => [T],
    });
