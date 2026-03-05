"use strict";
n.d(t, { default: () => S });
var r = n(627968),
    a = n(64700),
    i = n(397927),
    l = n(964486),
    s = n(883662),
    o = n(961350),
    u = n(628965),
    c = n(287809),
    d = n(115063),
    h = n(152056),
    g = n(780964),
    f = n(162396),
    m = n(12901),
    y = n(921854),
    p = n(987281),
    v = n(840065),
    x = n(985018),
    b = n(249316);
function A(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, d.iY)({
        destinationPane: t,
        originPane: n,
        subsection: u.A.getSubsection(),
        source: u.A.getAnalyticsLocation(),
        locationStack: u.A.getAnalyticsLocations(),
    });
}
function S(e) {
    let { target: t, ...n } = e,
        i = h.A.useField("query"),
        d = a.useRef(null);
    (0, p.V)(),
        (0, l.Ay)(() => {
            let e = u.A.getSection();
            null != e && (A({ destinationPanel: e, originPanel: null }), (d.current = e));
        });
    let x = a.useCallback((e) => {
            h.A.setState({ query: e });
        }, []),
        [b, S] = a.useState(!1);
    return (a.useLayoutEffect(() => {
        let e = () => {
            null == c.default.getCurrentUser() && (S(!0), (0, m.default)());
        };
        return o.default.addChangeListener(e), () => o.default.removeChangeListener(e);
    }, []),
    b)
        ? null
        : (0, r.jsx)(s.A, {
              partialRoot: y.D,
              emptyState: _,
              sidebarFooter: f.A,
              onPanelChange: (e) => {
                  let t = (0, v.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t && (A({ destinationPanel: t, originPanel: d.current }), (d.current = t));
              },
              target: t,
              defaultTarget: g.X.ACCOUNT_PANEL,
              searchQuery: i,
              onSearchChange: x,
              ...n,
          });
}
function _() {
    return (0, r.jsxs)("div", {
        className: b.t,
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
