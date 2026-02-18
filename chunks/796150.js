"use strict";
n.d(t, { default: () => A });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(964486),
    l = n(883662),
    o = n(961350),
    c = n(628965),
    u = n(287809),
    d = n(115063),
    _ = n(152056),
    g = n(780964),
    m = n(162396),
    b = n(12901),
    f = n(921854),
    p = n(840065),
    h = n(985018),
    y = n(249316);
function x(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, d.iY)({
        destinationPane: t,
        originPane: n,
        subsection: c.A.getSubsection(),
        source: c.A.getAnalyticsLocation(),
        locationStack: c.A.getAnalyticsLocations(),
    });
}
function A(e) {
    let { target: t, ...n } = e,
        a = _.A.useField("query"),
        d = i.useRef(null);
    (0, s.Ay)(() => {
        let e = c.A.getSection();
        null != e && (x({ destinationPanel: e, originPanel: null }), (d.current = e));
    });
    let h = i.useCallback((e) => {
            _.A.setState({ query: e });
        }, []),
        [y, A] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (A(!0), (0, b.default)());
        };
        return o.default.addChangeListener(e), () => o.default.removeChangeListener(e);
    }, []),
    y)
        ? null
        : (0, r.jsx)(l.A, {
              partialRoot: f.D,
              emptyState: C,
              sidebarFooter: m.A,
              onPanelChange: (e) => {
                  let t = (0, p.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t && (x({ destinationPanel: t, originPanel: d.current }), (d.current = t));
              },
              target: t,
              defaultTarget: g.X.ACCOUNT_PANEL,
              searchQuery: a,
              onSearchChange: h,
              ...n,
          });
}
function C() {
    return (0, r.jsxs)("div", {
        className: y.t,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: h.intl.string(h.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: h.intl.string(h.t.XclvsB),
            }),
        ],
    });
}
