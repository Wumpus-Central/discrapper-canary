n.d(t, { default: () => v }), n(142703);
var r = n(627968),
    a = n(64700),
    o = n(340287),
    i = n(397927),
    l = n(830215),
    s = n(964486),
    c = n(883662),
    _ = n(628965),
    u = n(203982),
    d = n(115063),
    b = n(152056),
    m = n(780964),
    g = n(162396),
    p = n(12901),
    f = n(921854),
    x = n(840065),
    h = n(652215),
    y = n(985018),
    C = n(249316);
function S(e) {
    let { destinationPanel: t, originPanel: n } = e;
    (0, d.iY)({
        destinationPane: t,
        originPane: n,
        subsection: _.A.getSubsection(),
        source: _.A.getAnalyticsLocation(),
        locationStack: _.A.getAnalyticsLocations(),
    });
}
function v(e) {
    let { target: t, ...n } = e,
        i = b.A.useField("query"),
        d = a.useRef(null);
    (0, s.Ay)(() => {
        let e = _.A.getSection();
        null != e && (S({ destinationPanel: e, originPanel: null }), (d.current = e));
    });
    let y = a.useCallback((e) => {
            b.A.setState({ query: e });
        }, []),
        [C, v] = a.useState(!1);
    return (a.useEffect(() => {
        let e = () => {
            (0, o.flushSync)(() => {
                v(!0), (0, p.default)();
            }),
                setImmediate(() => {
                    l.A.logout("settings");
                });
        };
        return (
            u._.subscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e),
            () => {
                u._.unsubscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e);
            }
        );
    }, []),
    C)
        ? null
        : (0, r.jsx)(c.A, {
              partialRoot: f.D,
              emptyState: j,
              sidebarFooter: g.A,
              onPanelChange: (e) => {
                  let t = (0, x.getUserSettingsSectionsByWebUserSettings)().get(e);
                  null != t && (S({ destinationPanel: t, originPanel: d.current }), (d.current = t));
              },
              target: t,
              defaultTarget: m.X.ACCOUNT_PANEL,
              searchQuery: i,
              onSearchChange: y,
              ...n,
          });
}
function j() {
    return (0, r.jsxs)("div", {
        className: C.t,
        children: [
            (0, r.jsx)(i.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: y.intl.string(y.t.zihbmv),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: y.intl.string(y.t.XclvsB),
            }),
        ],
    });
}
