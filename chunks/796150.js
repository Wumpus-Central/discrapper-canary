"use strict";
n.d(t, { default: () => j });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(252452),
    l = n(955838),
    o = n(324593),
    c = n(883662),
    u = n(961350),
    d = n(287809),
    m = n(152056),
    f = n(780964),
    h = n(162396),
    g = n(960545),
    p = n(841329),
    y = n(12901),
    _ = n(921854),
    x = n(987281),
    b = n(985018),
    v = n(249316);
let A = new Set([f.X.PROFILE_PANEL, f.X.SUBSCRIPTIONS_PANEL, f.X.FAMILY_CENTER_PANEL, f.X.POGGERMODE_PANEL]);
function j(e) {
    let { target: t, ...n } = e,
        a = m.A.useField("query");
    (0, x.V)();
    let b = i.useCallback(() => {
            m.A.setState({ query: "" }), o.A.terminate();
        }, []),
        [v, j] = i.useState(!1);
    return (i.useLayoutEffect(() => {
        let e = () => {
            null == d.default.getCurrentUser() && (j(!0), (0, y.default)());
        };
        return (
            u.default.addChangeListener(e),
            () => {
                u.default.removeChangeListener(e), g.A.resetState(), l.default.resetState(), s.A.close();
            }
        );
    }, []),
    v)
        ? null
        : (0, r.jsx)(c.A, {
              partialRoot: _.D,
              searchBar: N,
              emptyState: S,
              sidebarFooter: h.A,
              onViewChange: (e) => {
                  A.has(e) || (0, p._)(e);
              },
              target: t,
              defaultTarget: f.X.ACCOUNT_PANEL,
              searchQuery: a,
              clearSearchQuery: b,
              ...n,
          });
}
function N() {
    let e = m.A.useField("query"),
        t = i.useCallback((e) => {
            m.A.setState({ query: e }), o.A.maybeTrackQueryEntered();
        }, []),
        n = i.useCallback(() => {
            o.A.isSessionActive() || o.A.initialize();
        }, []),
        s = i.useCallback(() => {
            0 === m.A.getField("query").trim().length && o.A.terminate();
        }, []),
        l = i.useCallback(() => {
            m.A.setState({ query: "" }), o.A.terminate();
        }, []);
    return (
        i.useEffect(
            () => () => {
                o.A.terminate();
            },
            [],
        ),
        (0, r.jsx)("div", {
            className: v.P,
            children: (0, r.jsx)(a.IWV, { size: "md", query: e, onFocus: n, onBlur: s, onChange: t, onClear: l }),
        })
    );
}
function S() {
    return (0, r.jsxs)("div", {
        className: v.t,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: b.intl.string(b.t.zihbmv),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: b.intl.string(b.t.XclvsB),
            }),
        ],
    });
}
