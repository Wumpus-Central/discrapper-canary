a.r(t), a.d(t, { default: () => O, openDevToolsPopout: () => I });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(110259),
    o = a(17928),
    d = a(811893),
    c = a(789645),
    u = a(306471),
    m = a(939249),
    h = a(761929),
    p = a(139286),
    x = a(58736),
    g = a(979186),
    v = a(574172),
    b = a(147925),
    _ = a(538064),
    f = a(265059),
    j = a(867041),
    y = a(550708),
    C = a(231643),
    E = a(652215),
    S = a(985018),
    N = a(503539),
    A = a(505206);
function k(e) {
    let { resizableNode: t, onResize: a, onResizeEnd: l } = e,
        i = (0, h.A)({
            minDimension: f.q,
            resizableDomNodeRef: t,
            onElementResize: a,
            onElementResizeEnd: l,
            orientation: h.R.HORIZONTAL_LEFT,
        });
    return (0, n.jsx)("div", { onMouseDown: i, className: N.Di });
}
function I() {
    (0, v.open)(
        E.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, n.jsx)(g.A, {
                windowKey: E.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, n.jsx)(O, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function T(e) {
    let { isPopout: t = !1 } = e,
        a = (0, y.x)(),
        {
            TabBar: l,
            renderSelectedTab: i,
            selectedTabId: s,
        } = (0, C.Ay)(
            {
                tabs: a,
                initialSelectedTabId: f.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, _.Jt)({ lastOpenTabId: e });
                },
            },
            [a],
        );
    return (
        (0, p.A)({
            type: r.ImpressionTypes.PANE,
            name: r.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: s },
        }),
        (0, n.jsxs)(j.xG, {
            children: [
                (0, n.jsxs)(x.Ay, {
                    className: A.jr,
                    toolbar: t
                        ? null
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.Ay.Icon, { icon: d.t, tooltip: "Pop Out", onClick: I }),
                                  (0, n.jsx)(x.Ay.Icon, {
                                      icon: c.P,
                                      tooltip: S.intl.string(S.t.cpT0Cq),
                                      onClick: _.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, n.jsx)(x.Ay.Icon, { icon: u.V, tooltip: "DevTools" }),
                        (0, n.jsx)(x.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, n.jsx)(l, {}),
                i(),
                (0, n.jsx)(j.jY, { className: N.n7 }),
            ],
        })
    );
}
function D() {
    let e = l.useRef(null),
        t = (0, o.bG)([f.A], () => f.A.sidebarWidth),
        [a, i] = l.useState(null),
        s = l.useCallback((e) => (0, _.Jt)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === a && null !== t && i(t);
    }, [t, a]),
    null === a)
        ? null
        : (0, n.jsxs)("div", {
              ref: e,
              className: N.kL,
              style: { minWidth: f.q, width: a },
              "data-app-right-panel": !0,
              children: [
                  (0, n.jsx)(k, { resizableNode: e, onResize: i, onResizeEnd: s }),
                  (0, n.jsx)("div", { className: N.wp, children: (0, n.jsx)(T, {}) }),
              ],
          });
}
function w() {
    return (0, o.bG)([f.A], () => f.A.displayTools)
        ? (0, n.jsx)("div", {
              className: s()(N.kL, N.PQ),
              children: (0, n.jsx)("div", { className: N.wp, children: (0, n.jsx)(T, {}) }),
          })
        : (0, n.jsx)("div", {
              className: N.kL,
              children: (0, n.jsx)(m.D, {
                  onClick: _.pf,
                  children: (0, n.jsxs)(x.Ay, {
                      className: s()(A.jr, N.J$),
                      toolbar: (0, n.jsx)(b.A, { direction: b.A.Directions.UP }),
                      children: [
                          (0, n.jsx)(x.Ay.Icon, { icon: u.V, tooltip: "DevTools" }),
                          (0, n.jsx)(x.Ay.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function O(e) {
    let { mobile: t, isPopout: a = !1 } = e;
    return t
        ? (0, n.jsx)(w, {})
        : a
          ? (0, n.jsx)("div", { className: N.jC, children: (0, n.jsx)(T, { isPopout: !0 }) })
          : (0, n.jsx)(D, {});
}
