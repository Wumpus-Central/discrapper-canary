n.d(e, { g: () => S });
var i = n(951288),
    l = n(657707),
    r = n(509613),
    u = n(313789),
    s = n(526665),
    a = n(889029),
    o = n(726985),
    c = n(388032);
let E = (0, r.x1)(u.n.STREAMER_MODE_PANE, {
        buildLayout: () => [],
        render: () => (0, i.jsx)(a.Z, {}),
    }),
    d = (0, r.wf)(u.n.STREAMER_MODE_PANEL, {
        useTitle: () => c.intl.string(c.t.S5GfOW),
        buildLayout: () => [E],
    }),
    S = (0, r.m7)(u.n.STREAMER_MODE_SIDEBAR_ITEM, {
        icon: l.m3e,
        useTitle: () => c.intl.string(c.t.S5GfOW),
        getLegacySearchKey: () => o.s6.STREAMER_MODE,
        usePredicate: function () {
            return !(0, s.BK)("StreamerModeSidebarItem");
        },
        buildLayout: () => [d],
    });
