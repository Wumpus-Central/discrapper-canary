r.d(t, { default: () => S }), r(896048), r(142703);
var n = r(627968),
    l = r(64700),
    o = r(340287),
    a = r(397927),
    c = r(830215),
    i = r(964486),
    s = r(883662),
    u = r(628965),
    f = r(203982),
    b = r(115063),
    y = r(152056),
    d = r(780964),
    p = r(162396),
    g = r(12901),
    O = r(921854),
    j = r(840065),
    h = r(652215),
    m = r(985018),
    v = r(249316);
function x(e) {
    let { destinationPanel: t, originPanel: r } = e;
    (0, b.iY)({
        destinationPane: t,
        originPane: r,
        subsection: u.A.getSubsection(),
        source: u.A.getAnalyticsLocation(),
        locationStack: u.A.getAnalyticsLocations(),
    });
}
function S(e) {
    let { target: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o;
            }
            if (
                ((o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.getOwnPropertyNames(e);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            return o;
        })(e, ["target"]),
        a = y.A.useField("query"),
        b = l.useRef(null);
    (0, i.Ay)(() => {
        let e = u.A.getSection();
        null != e &&
            (x({
                destinationPanel: e,
                originPanel: null,
            }),
            (b.current = e));
    });
    let m = l.useCallback((e) => {
            y.A.setState({ query: e });
        }, []),
        [v, S] = l.useState(!1);
    return (l.useEffect(() => {
        let e = () => {
            (0, o.flushSync)(() => {
                S(!0), (0, g.default)();
            }),
                setImmediate(() => {
                    c.A.logout("settings");
                });
        };
        return (
            f._.subscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e),
            () => {
                f._.unsubscribe(h.jej.SETTINGS_TRIGGER_LOGOUT, e);
            }
        );
    }, []),
    v)
        ? null
        : (0, n.jsx)(
              s.A,
              (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                              }),
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = r[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })(
                  {
                      partialRoot: O.D,
                      emptyState: P,
                      sidebarFooter: p.A,
                      onPanelChange: (e) => {
                          let t = (0, j.getUserSettingsSectionsByWebUserSettings)().get(e);
                          null != t &&
                              (x({
                                  destinationPanel: t,
                                  originPanel: b.current,
                              }),
                              (b.current = t));
                      },
                      target: t,
                      defaultTarget: d.X.ACCOUNT_PANEL,
                      searchQuery: a,
                      onSearchChange: m,
                  },
                  r,
              ),
          );
}
function P() {
    return (0, n.jsxs)("div", {
        className: v.t,
        children: [
            (0, n.jsx)(a.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: m.intl.string(m.t.zihbmv),
            }),
            (0, n.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: m.intl.string(m.t.XclvsB),
            }),
        ],
    });
}
