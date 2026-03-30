"use strict";
n.d(t, { default: () => N });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    l = n(397927),
    s = n(252452),
    o = n(139286),
    c = n(507553),
    u = n(324593),
    d = n(883662),
    _ = n(961350),
    h = n(287809),
    f = n(152056),
    m = n(780964),
    p = n(162396),
    v = n(960545),
    y = n(841329),
    b = n(12901),
    g = n(921854),
    x = n(985018),
    E = n(879797);
let S = new Set([m.X.PROFILE_PANEL, m.X.SUBSCRIPTIONS_PANEL, m.X.FAMILY_CENTER_PANEL, m.X.POGGERMODE_PANEL]),
    A = new Map([
        [m.X.CONNECTIONS_PANEL, a.ImpressionNames.USER_SETTINGS_CONNECTIONS],
        [m.X.SESSIONS_PANEL, a.ImpressionNames.USER_SETTINGS_SESSIONS],
    ]);
function N(e) {
    let { target: t, ...n } = e,
        l = f.A.useField("query"),
        x = i.useCallback(() => {
            f.A.setState({ query: "" }), u.A.terminate();
        }, []),
        [E, N] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == h.default.getCurrentUser() && (N(!0), (0, b.default)());
        };
        return (
            _.default.addChangeListener(e),
            () => {
                _.default.removeChangeListener(e), v.A.resetState(), c.A.resetState(), s.A.close();
            }
        );
    }, []),
    E)
        ? null
        : (0, r.jsx)(d.A, {
              partialRoot: g.D,
              searchBar: C,
              emptyState: I,
              sidebarFooter: p.A,
              onViewChange: (e) => {
                  S.has(e) || (0, y._)(e);
                  let t = A.get(e);
                  null != t &&
                      (0, o.x)({
                          type: a.ImpressionTypes.PANE,
                          name: t,
                          properties: { source: v.A.getField("source") },
                      }),
                      v.A.setState({ source: void 0 });
              },
              target: t,
              defaultTarget: m.X.ACCOUNT_PANEL,
              searchQuery: l,
              clearSearchQuery: x,
              ...n,
          });
}
function C() {
    let e = f.A.useField("query"),
        t = i.useCallback((e) => {
            f.A.setState({ query: e }), u.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            u.A.isSessionActive() || u.A.initialize();
        }, []),
        a = i.useCallback(() => {
            0 === f.A.getField("query").trim().length && u.A.terminate();
        }, []),
        s = i.useCallback(() => {
            f.A.setState({ query: "" }), u.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                f.A.resetState(), u.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: E.P,
            children: (0, r.jsx)(l.IWV, { size: "md", query: e, onFocus: n, onBlur: a, onChange: t, onClear: s }),
        })
    );
}
function I() {
    return (0, r.jsxs)("div", {
        className: E.t,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: x.intl.string(x.t.zihbmv),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: x.intl.string(x.t.XclvsB),
            }),
        ],
    });
}
