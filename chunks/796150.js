n.d(t, { default: () => C });
var r = n(627968),
    a = n(64700),
    i = n(397927),
    o = n(964486),
    l = n(883662),
    s = n(961350),
    c = n(628965),
    _ = n(287809),
    u = n(115063),
    d = n(152056),
    g = n(780964),
    b = n(162396),
    m = n(12901),
    f = n(921854),
    p = n(840065),
    x = n(985018),
    h = n(249316);
function y(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, u.iY)({
        destinationPane: t,
        originPane: n,
        subsection: c.A.getSubsection(),
        source: c.A.getAnalyticsLocation(),
        locationStack: c.A.getAnalyticsLocations(),
    });
}
function C(e) {
    let { target: t, ...n } = e,
        i = d.A.useField("query"),
        u = a.useRef(null);
    (0, o.Ay)(() => {
        let e = c.A.getSection();
        null != e && (y({ destinationPanel: e, originPanel: null }), (u.current = e));
    });
    let x = a.useCallback((e) => {
            d.A.setState({ query: e });
        }, []),
        [h, C] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == _.default.getCurrentUser() && (C(!0), (0, m.default)());
        };
        return s.default.addChangeListener(e), () => s.default.removeChangeListener(e);
    }, []),
    h)
        ? null
        : (0, r.jsx)(l.A, {
              partialRoot: f.D,
              emptyState: A,
              sidebarFooter: b.A,
              onPanelChange: (e) => {
                  let t = (0, p.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t && (y({ destinationPanel: t, originPanel: u.current }), (u.current = t));
              },
              target: t,
              defaultTarget: g.X.ACCOUNT_PANEL,
              searchQuery: i,
              onSearchChange: x,
              ...n,
          });
}
function A() {
    return (0, r.jsxs)("div", {
        className: h.t,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.zihbmv),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x.intl.string(x.t.XclvsB),
            }),
        ],
    });
}
