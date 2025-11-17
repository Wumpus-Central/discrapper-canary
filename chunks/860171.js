n.d(e, { g: () => T });
var i = n(54381),
    l = n(657707),
    u = n(509613),
    r = n(313789),
    s = n(526665),
    a = n(889029),
    o = n(726985),
    c = n(388032);
let E = (0, u.x1)(r.n.STREAMER_MODE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
    }),
    S = (0, u.wf)(r.n.STREAMER_MODE_PANEL, {
        useTitle: () => c.intl.string(c.t.S5GfOW),
        buildLayout: () => [E],
    }),
    T = (0, u.m7)(r.n.STREAMER_MODE_SIDEBAR_ITEM, {
        icon: l.m3e,
        useTitle: () => c.intl.string(c.t.S5GfOW),
        getLegacySearchKey: () => o.s6.STREAMER_MODE,
        usePredicate: function () {
            return !(0, s.BK)("StreamerModeSidebarItem");
        },
        buildLayout: () => [S],
    });
