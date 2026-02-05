n.r(t), n.d(t, { default: () => k, openDevToolsPopout: () => y });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(110259),
    o = n(311907),
    d = n(397927),
    c = n(761929),
    u = n(139286),
    m = n(58736),
    h = n(923917),
    x = n(574172),
    p = n(147925),
    g = n(538064),
    _ = n(265059),
    f = n(867041),
    v = n(641616),
    b = n(231643),
    j = n(652215),
    A = n(985018),
    C = n(346858),
    S = n(661251);
function T(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: s } = e,
        i = (0, c.A)({
            minDimension: _.q,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: s,
            orientation: c.R.HORIZONTAL_LEFT,
        });
    return (0, a.jsx)("div", { onMouseDown: i, className: C.Di });
}
function y() {
    (0, x.open)(
        j.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, a.jsx)(h.A, {
                windowKey: j.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, a.jsx)(k, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function N(e) {
    let { isPopout: t = !1 } = e,
        n = (0, v.x)(),
        {
            TabBar: s,
            renderSelectedTab: i,
            selectedTabId: l,
        } = (0, b.Ay)(
            {
                tabs: n,
                initialSelectedTabId: _.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, g.Jt)({ lastOpenTabId: e });
                },
            },
            [n],
        );
    return (
        (0, u.A)({
            type: r.ImpressionTypes.PANE,
            name: r.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: l },
        }),
        (0, a.jsxs)(f.xG, {
            children: [
                (0, a.jsxs)(m.Ay, {
                    className: S.jr,
                    toolbar: t
                        ? null
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m.Ay.Icon, { icon: d.tfB, tooltip: "Pop Out", onClick: y }),
                                  (0, a.jsx)(m.Ay.Icon, {
                                      icon: d.PGe,
                                      tooltip: A.intl.string(A.t.cpT0Cq),
                                      onClick: g.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, a.jsx)(m.Ay.Icon, { icon: d.VaJ, tooltip: "DevTools" }),
                        (0, a.jsx)(m.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, a.jsx)(s, {}),
                i(),
                (0, a.jsx)(f.jY, { className: C.n7 }),
            ],
        })
    );
}
function E() {
    let e = s.useRef(null),
        t = (0, o.bG)([_.A], () => _.A.sidebarWidth),
        [n, i] = s.useState(null),
        l = s.useCallback((e) => (0, g.Jt)({ sidebarWidth: e }), []);
    return (s.useEffect(() => {
        null === n && null !== t && i(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, a.jsxs)("div", {
              ref: e,
              className: C.kL,
              style: { minWidth: _.q, width: n },
              "data-app-right-panel": !0,
              children: [
                  (0, a.jsx)(T, { resizableNode: e, onResize: i, onResizeEnd: l }),
                  (0, a.jsx)("div", { className: C.wp, children: (0, a.jsx)(N, {}) }),
              ],
          });
}
function I() {
    return (0, o.bG)([_.A], () => _.A.displayTools)
        ? (0, a.jsx)("div", {
              className: l()(C.kL, C.PQ),
              children: (0, a.jsx)("div", { className: C.wp, children: (0, a.jsx)(N, {}) }),
          })
        : (0, a.jsx)("div", {
              className: C.kL,
              children: (0, a.jsx)(d.DUT, {
                  onClick: g.pf,
                  children: (0, a.jsxs)(m.Ay, {
                      className: l()(S.jr, C.J$),
                      toolbar: (0, a.jsx)(p.A, { direction: p.A.Directions.UP }),
                      children: [
                          (0, a.jsx)(m.Ay.Icon, { icon: d.VaJ, tooltip: "DevTools" }),
                          (0, a.jsx)(m.Ay.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function k(e) {
    let { mobile: t, isPopout: n = !1 } = e;
    return t
        ? (0, a.jsx)(I, {})
        : n
          ? (0, a.jsx)("div", { className: C.jC, children: (0, a.jsx)(N, { isPopout: !0 }) })
          : (0, a.jsx)(E, {});
}
