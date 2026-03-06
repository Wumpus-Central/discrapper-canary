"use strict";
n.d(t, { default: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    l = n(883662),
    s = n(961350),
    o = n(628965),
    u = n(287809),
    c = n(115063),
    d = n(152056),
    h = n(780964),
    f = n(162396),
    m = n(12901),
    g = n(921854),
    v = n(987281),
    p = n(840065),
    y = n(985018),
    x = n(365782);
function _(e) {
    let { target: t, ...n } = e,
        a = d.A.useField("query"),
        y = i.useRef(null);
    (0, v.V)();
    let x = i.useCallback((e) => {
            d.A.setState({ query: e });
        }, []),
        [_, j] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (j(!0), (0, m.default)());
        };
        return s.default.addChangeListener(e), () => s.default.removeChangeListener(e);
    }, []),
    _)
        ? null
        : (0, r.jsx)(l.A, {
              partialRoot: g.D,
              emptyState: b,
              sidebarFooter: f.A,
              onPanelChange: (e) => {
                  let t = (0, p.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t &&
                      (!(function (e) {
                          let { destinationPanel: t, originPanel: n } = e;
                          (0, c.iY)({
                              destinationPane: t,
                              originPane: n,
                              subsection: o.A.getSubsection(),
                              source: o.A.getAnalyticsLocation(),
                              locationStack: o.A.getAnalyticsLocations(),
                          });
                      })({ destinationPanel: t, originPanel: y.current }),
                      (y.current = t));
              },
              target: t,
              defaultTarget: h.X.ACCOUNT_PANEL,
              searchQuery: a,
              onSearchChange: x,
              ...n,
          });
}
function b() {
    return (0, r.jsxs)("div", {
        className: x.t,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: y.intl.string(y.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: y.intl.string(y.t.XclvsB),
            }),
        ],
    });
}
