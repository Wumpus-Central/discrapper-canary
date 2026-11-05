n.r(s);
var i = n(477900),
    l = n(582128),
    o = n(503698),
    t = n.n(o),
    a = n(613412),
    c = n(855986),
    r = n(811893),
    d = n(789645),
    p = n(306471),
    u = n(939249),
    j = n(761929),
    x = n(139286),
    h = n(58736),
    A = n(853757),
    T = n(574172),
    m = n(147925),
    b = n(538064),
    f = n(265059),
    N = n(867041),
    O = n(207315),
    v = n(231643),
    D = n(652215),
    E = n(792996),
    y = n(256459),
    P = n(730441);
function I(e) {
    let { resizableNode: s, onResize: n, onResizeEnd: l } = e,
        o = (0, j.A)({
            minDimension: 460,
            resizableDomNodeRef: s,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: j.R.HORIZONTAL_LEFT,
        });
    return (0, i.jsx)("div", { onMouseDown: o, className: y.Di });
}
function k() {
    (0, T.ho)(
        D.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, i.jsx)(A.A, {
                windowKey: D.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, i.jsx)(R, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function L(e) {
    let { isPopout: s = !1 } = e,
        n = (0, O.x)(),
        {
            TabBar: o,
            renderSelectedTab: t,
            selectedTabId: u,
            setSelectedTabId: j,
        } = (0, v.A)(
            {
                tabs: n,
                initialSelectedTabId: f.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, b.Jt)({ lastOpenTabId: e });
                },
            },
            [n],
        ),
        A = (0, c.bG)([f.A], () => f.A.lastOpenTabId);
    return (
        l.useEffect(() => {
            null != A && j(A);
        }, [A, j]),
        (0, x.A)({
            type: a.ImpressionTypes.PANE,
            name: a.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: u },
        }),
        (0, i.jsxs)(N.xG, {
            children: [
                (0, i.jsxs)(h.Ay, {
                    className: P.jr,
                    toolbar: s
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.Ay.Icon, { icon: r.t, tooltip: "Pop Out", onClick: k }),
                                  (0, i.jsx)(h.Ay.Icon, {
                                      icon: d.P,
                                      tooltip: E.intl.string(E.t.cpT0Cq),
                                      onClick: b.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, i.jsx)(h.Ay.Icon, { icon: p.V, tooltip: "DevTools" }),
                        (0, i.jsx)(h.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, i.jsx)(o, {}),
                t(),
                (0, i.jsx)(N.jY, { className: y.n7 }),
            ],
        })
    );
}
function w() {
    let e = l.useRef(null),
        s = (0, c.bG)([f.A], () => f.A.sidebarWidth),
        [n, o] = l.useState(null),
        t = l.useCallback((e) => (0, b.Jt)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === n && null !== s && o(s);
    }, [s, n]),
    null === n)
        ? null
        : (0, i.jsxs)("div", {
              ref: e,
              className: y.kL,
              style: { minWidth: 460, width: n },
              "data-app-right-panel": !0,
              children: [
                  (0, i.jsx)(I, { resizableNode: e, onResize: o, onResizeEnd: t }),
                  (0, i.jsx)("div", { className: y.wp, children: (0, i.jsx)(L, {}) }),
              ],
          });
}
function C() {
    return (0, c.bG)([f.A], () => f.A.displayTools)
        ? (0, i.jsx)("div", {
              className: t()(y.kL, y.PQ),
              children: (0, i.jsx)("div", { className: y.wp, children: (0, i.jsx)(L, {}) }),
          })
        : (0, i.jsx)("div", {
              className: y.kL,
              children: (0, i.jsx)(u.D, {
                  onClick: b.pf,
                  children: (0, i.jsxs)(h.Ay, {
                      className: t()(P.jr, y.J$),
                      toolbar: (0, i.jsx)(m.A, { direction: m.A.Directions.UP }),
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
          ? (0, i.jsx)("div", { className: y.jC, children: (0, i.jsx)(L, { isPopout: !0 }) })
          : (0, i.jsx)(w, {});
}
n.d(s, {}, { default: R, openDevToolsPopout: k });
