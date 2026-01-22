n.r(t),
    n.d(t, {
        default: () => I,
        openDevToolsPopout: () => O,
    }),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(110259),
    o = n(311907),
    c = n(397927),
    d = n(761929),
    u = n(139286),
    m = n(58736),
    p = n(923917),
    h = n(574172),
    f = n(147925),
    x = n(538064),
    b = n(265059),
    g = n(867041),
    v = n(641616),
    j = n(231643),
    y = n(652215),
    _ = n(985018),
    A = n(346858),
    C = n(661251);

function S(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: l } = e,
        i = (0, d.A)({
            minDimension: b.q,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: d.R.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", {
        onMouseDown: i,
        className: A.Di,
    });
}

function O() {
    (0, h.open)(
        y.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(p.A, {
                windowKey: y.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(I, {
                    mobile: !1,
                    isPopout: !0,
                }),
            }),
        {
            width: 800,
            height: 600,
        },
    );
}

function E(e) {
    var t;
    let { isPopout: n = !1 } = e,
        l = (0, v.x)(),
        {
            TabBar: i,
            renderSelectedTab: r,
            selectedTabId: o,
        } = (0, j.Ay)(
            {
                tabs: l,
                initialSelectedTabId: null != (t = b.A.lastOpenTabId) ? t : void 0,
                onChangeTab: (e) => {
                    (0, x.Jt)({
                        lastOpenTabId: e,
                    });
                },
            },
            [l],
        );
    return (
        (0, u.A)({
            type: s.ImpressionTypes.PANE,
            name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: {
                panel: o,
            },
        }),
        (0, a.jsxs)(g.xG, {
            children: [
                (0, a.jsxs)(m.Ay, {
                    className: C.jr,
                    toolbar: n
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.Ay.Icon, {
                                      icon: c.tfB,
                                      tooltip: "Pop Out",
                                      onClick: O,
                                  }),
                                  (0, a.jsx)(m.Ay.Icon, {
                                      icon: c.PGe,
                                      tooltip: _.intl.string(_.t.cpT0Cq),
                                      onClick: x.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, a.jsx)(m.Ay.Icon, {
                            icon: c.VaJ,
                            tooltip: "DevTools",
                        }),
                        (0, a.jsx)(m.Ay.Title, {
                            children: "DevTools",
                        }),
                    ],
                }),
                (0, a.jsx)(i, {}),
                r(),
                (0, a.jsx)(g.jY, {
                    className: A.n7,
                }),
            ],
        })
    );
}

function N() {
    let e = l.useRef(null),
        t = (0, o.bG)([b.A], () => b.A.sidebarWidth),
        [n, i] = l.useState(null),
        r = l.useCallback(
            (e) =>
                (0, x.Jt)({
                    sidebarWidth: e,
                }),
            [],
        );
    return (l.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: A.kL,
              style: {
                  minWidth: b.q,
                  width: n,
              },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(S, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: r,
                  }),
                  (0, a.jsx)("div", {
                      className: A.wp,
                      children: (0, a.jsx)(E, {}),
                  }),
              ],
          });
}

function T() {
    return (0, o.bG)([b.A], () => b.A.displayTools)
        ? (0, a.jsx)("div", {
              className: r()(A.kL, A.PQ),
              children: (0, a.jsx)("div", {
                  className: A.wp,
                  children: (0, a.jsx)(E, {}),
              }),
          })
        : (0, a.jsx)("div", {
              className: A.kL,
              children: (0, a.jsx)(c.DUT, {
                  onClick: x.pf,
                  children: (0, a.jsxs)(m.Ay, {
                      className: r()(C.jr, A.J$),
                      toolbar: (0, a.jsx)(f.A, {
                          direction: f.A.Directions.UP,
                      }),
                      children: [
                          (0, a.jsx)(m.Ay.Icon, {
                              icon: c.VaJ,
                              tooltip: "DevTools",
                          }),
                          (0, a.jsx)(m.Ay.Title, {
                              children: "DevTools",
                          }),
                      ],
                  }),
              }),
          });
}

function I(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(T, {})
        : n
          ? (0, a.jsx)("div", {
                className: A.jC,
                children: (0, a.jsx)(E, {
                    isPopout: !0,
                }),
            })
          : (0, a.jsx)(N, {});
}
