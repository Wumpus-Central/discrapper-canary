(n.r(s), n.d(s, { default: () => R, openDevToolsPopout: () => I }));
var i = n(477900),
    l = n(582128),
    o = n(503698),
    t = n.n(o),
    a = n(562708),
    c = n(17928),
    r = n(811893),
    d = n(789645),
    p = n(306471),
    j = n(939249),
    u = n(761929),
    x = n(139286),
    h = n(58736),
    T = n(979186),
    m = n(574172),
    A = n(147925),
    b = n(538064),
    N = n(265059),
    v = n(867041),
    D = n(320594),
    O = n(231643),
    f = n(652215),
    y = n(105292),
    E = n(256459),
    P = n(730441);
function k(e) {
    let { resizableNode: s, onResize: n, onResizeEnd: l } = e,
        o = (0, u.A)({
            minDimension: N.q,
            resizableDomNodeRef: s,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: u.R.HORIZONTAL_LEFT,
        });
    return (0, i.jsx)("div", { onMouseDown: o, className: E.Di });
}
function I() {
    (0, m.open)(
        f.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, i.jsx)(T.A, {
                windowKey: f.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, i.jsx)(R, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function L(e) {
    let { isPopout: s = !1 } = e,
        n = (0, D.x)(),
        {
            TabBar: l,
            renderSelectedTab: o,
            selectedTabId: t,
        } = (0, O.A)(
            {
                tabs: n,
                initialSelectedTabId: N.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, b.Jt)({ lastOpenTabId: e });
                },
            },
            [n],
        );
    return (
        (0, x.A)({
            type: a.ImpressionTypes.PANE,
            name: a.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: t },
        }),
        (0, i.jsxs)(v.xG, {
            children: [
                (0, i.jsxs)(h.Ay, {
                    className: P.jr,
                    toolbar: s
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.Ay.Icon, { icon: r.t, tooltip: "Pop Out", onClick: I }),
                                  (0, i.jsx)(h.Ay.Icon, {
                                      icon: d.P,
                                      tooltip: y.intl.string(y.t.cpT0Cq),
                                      onClick: b.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, i.jsx)(h.Ay.Icon, { icon: p.V, tooltip: "DevTools" }),
                        (0, i.jsx)(h.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, i.jsx)(l, {}),
                o(),
                (0, i.jsx)(v.jY, { className: E.n7 }),
            ],
        })
    );
}
function w() {
    let e = l.useRef(null),
        s = (0, c.bG)([N.A], () => N.A.sidebarWidth),
        [n, o] = l.useState(null),
        t = l.useCallback((e) => (0, b.Jt)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === n && null !== s && o(s);
    }, [s, n]),
    null === n)
        ? null
        : (0, i.jsxs)("div", {
              ref: e,
              className: E.kL,
              style: { minWidth: N.q, width: n },
              "data-app-right-panel": !0,
              children: [
                  (0, i.jsx)(k, { resizableNode: e, onResize: o, onResizeEnd: t }),
                  (0, i.jsx)("div", { className: E.wp, children: (0, i.jsx)(L, {}) }),
              ],
          });
}
function C() {
    return (0, c.bG)([N.A], () => N.A.displayTools)
        ? (0, i.jsx)("div", {
              className: t()(E.kL, E.PQ),
              children: (0, i.jsx)("div", { className: E.wp, children: (0, i.jsx)(L, {}) }),
          })
        : (0, i.jsx)("div", {
              className: E.kL,
              children: (0, i.jsx)(j.D, {
                  onClick: b.pf,
                  children: (0, i.jsxs)(h.Ay, {
                      className: t()(P.jr, E.J$),
                      toolbar: (0, i.jsx)(A.A, { direction: A.A.Directions.UP }),
                      children: [
                          (0, i.jsx)(h.Ay.Icon, { icon: p.V, tooltip: "DevTools" }),
                          (0, i.jsx)(h.Ay.Title, { children: "DevTools" }),
                      ],
                  }),
              }),
          });
}
function R(e) {
    let { mobile: s, isPopout: n = !1 } = e;
    return s
        ? (0, i.jsx)(C, {})
        : n
          ? (0, i.jsx)("div", { className: E.jC, children: (0, i.jsx)(L, { isPopout: !0 }) })
          : (0, i.jsx)(w, {});
}
