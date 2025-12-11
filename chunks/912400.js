n.d(e, { h: () => I });
var i = n(657707),
    l = n(384275),
    s = n(509613),
    r = n(313789),
    u = n(526665),
    a = n(795594),
    o = n(134287),
    c = n(726985),
    d = n(388032);
let T = (0, s.k4)(r.n.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.Z],
        initialize: () => (
            l.Z.fetch(),
            () => {
                a.JJ.setState({ searchQuery: "" });
            }
        ),
    }),
    S = (0, s.wf)(r.n.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => !(0, u.gN)("LegacyAuthorizedAppsPanel"),
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: a.ZP,
        buildLayout: () => [],
    }),
    g = (0, s.wf)(r.n.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => (0, u.gN)("AuthorizedAppsPanel"),
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [T],
    }),
    I = (0, s.m7)(r.n.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => d.intl.string(d.t["f6kk+r"]),
        getLegacySearchKey: () => ((0, u.Gl)("AuthorizedAppsPanel") ? void 0 : c.s6.AUTHORIZED_APPS),
        icon: i.jje,
        buildLayout: () => ((0, u.Gl)("AuthorizedAppsPanel") ? [g] : [S]),
    });
