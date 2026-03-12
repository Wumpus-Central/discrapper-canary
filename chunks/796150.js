"use strict";
n.d(t, { default: () => v });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(324593),
    l = n(883662),
    o = n(961350),
    c = n(628965),
    u = n(287809),
    d = n(115063),
    m = n(152056),
    f = n(780964),
    g = n(162396),
    h = n(12901),
    y = n(921854),
    p = n(987281),
    _ = n(840065),
    x = n(985018),
    b = n(365782);
function v(e) {
    let { target: t, ...n } = e,
        a = m.A.useField("query"),
        x = i.useRef(null);
    (0, p.V)();
    let b = i.useCallback(() => {
            m.A.setState({ query: "" }), s.A.terminate();
        }, []),
        [v, S] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == u.default.getCurrentUser() && (S(!0), (0, h.default)());
        };
        return o.default.addChangeListener(e), () => o.default.removeChangeListener(e);
    }, []),
    v)
        ? null
        : (0, r.jsx)(l.A, {
              partialRoot: y.D,
              searchBar: A,
              emptyState: j,
              sidebarFooter: g.A,
              onPanelChange: (e) => {
                  let t = (0, _.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t &&
                      (!(function (e) {
                          let { destinationPanel: t, originPanel: n } = e;
                          (0, d.iY)({
                              destinationPane: t,
                              originPane: n,
                              subsection: c.A.getSubsection(),
                              source: c.A.getAnalyticsLocation(),
                              locationStack: c.A.getAnalyticsLocations(),
                          });
                      })({ destinationPanel: t, originPanel: x.current }),
                      (x.current = t));
              },
              target: t,
              defaultTarget: f.X.ACCOUNT_PANEL,
              searchQuery: a,
              clearSearchQuery: b,
              ...n,
          });
}
function A() {
    let e = m.A.useField("query"),
        t = i.useCallback((e) => {
            m.A.setState({ query: e }), s.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            s.A.isSessionActive() || s.A.initialize();
        }, []),
        l = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && s.A.terminate();
        }, []),
        o = i.useCallback(() => {
            m.A.setState({ query: "" }), s.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                s.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: b.P,
            children: (0, r.jsx)(a.IWV, { size: "md", query: e, onFocus: n, onBlur: l, onChange: t, onClear: o }),
        })
    );
}
function j() {
    return (0, r.jsxs)("div", {
        className: b.t,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x.intl.string(x.t.XclvsB),
            }),
        ],
    });
}
