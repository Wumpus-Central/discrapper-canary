n.d(e, { h: () => _ });
var i = n(657707),
    l = n(384275),
    s = n(509613),
    u = n(313789),
    r = n(526665),
    a = n(795594),
    o = n(134287),
    T = n(726985),
    S = n(388032);
let c = (0, s.k4)(u.n.AUTHORIZED_APPS_CATEGORY, {
        buildLayout: () => [o.Z],
        initialize: () => (
            l.Z.fetch(),
            () => {
                a.JJ.setState({ searchQuery: "" });
            }
        ),
    }),
    E = (0, s.wf)(u.n.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => !(0, r.gN)("LegacyAuthorizedAppsPanel"),
        useTitle: () => S.intl.string(S.t["f6kk+r"]),
        hideInStreamerMode: !0,
        StronglyDiscouragedCustomComponent: a.ZP,
        buildLayout: () => [],
    }),
    d = (0, s.wf)(u.n.AUTHORIZED_APPS_PANEL, {
        usePredicate: () => (0, r.gN)("AuthorizedAppsPanel"),
        useTitle: () => S.intl.string(S.t["f6kk+r"]),
        hideInStreamerMode: !0,
        buildLayout: () => [c],
    }),
    _ = (0, s.m7)(u.n.AUTHORIZED_APPS_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t["f6kk+r"]),
        getLegacySearchKey: () => ((0, r.Gl)("AuthorizedAppsPanel") ? void 0 : T.s6.AUTHORIZED_APPS),
        icon: i.AppsIcon,
        buildLayout: () => ((0, r.Gl)("AuthorizedAppsPanel") ? [d] : [E]),
    });
