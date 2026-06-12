a.r(t), a.d(t, { default: () => O, openDevToolsPopout: () => I });
var n = a(627968),
    l = a(64700),
    s = a(503698),
    i = a.n(s),
    r = a(562708),
    o = a(17928),
    d = a(811893),
    c = a(789645),
    u = a(306471),
    m = a(939249),
    h = a(761929),
    x = a(139286),
    p = a(58736),
    g = a(979186),
    v = a(574172),
    j = a(147925),
    b = a(538064),
    f = a(265059),
    y = a(867041),
    _ = a(985224),
    E = a(231643),
    C = a(652215),
    S = a(375708),
    N = a(503539),
    A = a(505206);
function k(e) {
    let { resizableNode: t, onResize: a, onResizeEnd: l } = e,
        s = (0, h.A)({
            minDimension: f.q,
            resizableDomNodeRef: t,
            onElementResize: a,
            onElementResizeEnd: l,
            orientation: h.R.HORIZONTAL_LEFT,
        });
    return (0, n.jsx)("div", { onMouseDown: s, className: N.Di });
}
function I() {
    (0, v.open)(
        C.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, n.jsx)(g.A, {
                windowKey: C.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, n.jsx)(O, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function D(e) {
    let { isPopout: t = !1 } = e,
        a = (0, _.x)(),
        {
            TabBar: l,
            renderSelectedTab: s,
            selectedTabId: i,
        } = (0, E.Ay)(
            {
                tabs: a,
                initialSelectedTabId: f.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, b.Jt)({ lastOpenTabId: e });
                },
            },
            [a],
        );
    return (
        (0, x.A)({
            type: r.ImpressionTypes.PANE,
            name: r.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i },
        }),
        (0, n.jsxs)(y.xG, {
            children: [
                (0, n.jsxs)(p.Ay, {
                    className: A.jr,
                    toolbar: t
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(p.Ay.Icon, { icon: d.t, tooltip: "Pop Out", onClick: I }),
                                  (0, n.jsx)(p.Ay.Icon, {
                                      icon: c.P,
                                      tooltip: S.intl.string(S.t.cpT0Cq),
                                      onClick: b.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, n.jsx)(p.Ay.Icon, { icon: u.V, tooltip: "DevTools" }),
                        (0, n.jsx)(p.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, n.jsx)(l, {}),
                s(),
                (0, n.jsx)(y.jY, { className: N.n7 }),
            ],
        })
    );
}
function T() {
    let e = l.useRef(null),
        t = (0, o.bG)([f.A], () => f.A.sidebarWidth),
        [a, s] = l.useState(null),
        i = l.useCallback((e) => (0, b.Jt)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === a && null !== t && s(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)("div", {
              ref: e,
              className: N.kL,
              style: { minWidth: f.q, width: a },
              "data-app-right-panel": !0,
              children: [
                  (0, n.jsx)(k, { resizableNode: e, onResize: s, onResizeEnd: i }),
                  (0, n.jsx)("div", { className: N.wp, children: (0, n.jsx)(D, {}) }),
              ],
          });
}
function R() {
    return (0, o.bG)([f.A], () => f.A.displayTools)
        ? (0, n.jsx)("div", {
              className: i()(N.kL, N.PQ),
              children: (0, n.jsx)("div", { className: N.wp, children: (0, n.jsx)(D, {}) }),
          })
        : (0, n.jsx)("div", {
              className: N.kL,
              children: (0, n.jsx)(m.D, {
                  onClick: b.pf,
                  children: (0, n.jsxs)(p.Ay, {
                      className: i()(A.jr, N.J$),
                      toolbar: (0, n.jsx)(j.A, { direction: j.A.Directions.UP }),
                      children: [
                          (0, n.jsx)(p.Ay.Icon, { icon: u.V, tooltip: "DevTools" }),
                          (0, n.jsx)(p.Ay.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function O(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(R, {})
        : a
          ? (0, n.jsx)("div", { className: N.jC, children: (0, n.jsx)(D, { isPopout: !0 }) })
          : (0, n.jsx)(T, {});
}
