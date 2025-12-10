n.d(e, { g: () => E });
var i = n(657707),
    l = n(509613),
    s = n(313789),
    u = n(526665),
    r = n(889029),
    a = n(290434),
    o = n(726985),
    c = n(388032);
let d = (0, l.x1)(s.n.STREAMER_MODE_PANE, {
        usePredicate: () => (0, u.BK)("StreamerModePane"),
        buildLayout: () => [a.R],
    }),
    S = (0, l.x1)(s.n.STREAMER_MODE_PANE, {
        usePredicate: () => !(0, u.BK)("StreamerModePane"),
        StronglyDiscouragedCustomComponent: r.Z,
        buildLayout: () => [],
    }),
    T = (0, l.wf)(s.n.STREAMER_MODE_PANEL, {
        useTitle: () => c.intl.string(c.t.S5GfOW),
        buildLayout: () => ((0, u.Ml)("StreamerModePanel") ? [d] : [S]),
    }),
    E = (0, l.m7)(s.n.STREAMER_MODE_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.S5GfOW),
        getLegacySearchKey: () => ((0, u.Ml)("StreamerModePanel") ? void 0 : o.s6.STREAMER_MODE),
        icon: i.m3e,
        buildLayout: () => [T],
    });
