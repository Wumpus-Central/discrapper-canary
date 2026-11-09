n.r(s);
var i = n(477900),
    l = n(582128),
    o = n(503698),
    t = n.n(o),
    a = n(613412),
    c = n(855986),
    d = n(811893),
    r = n(789645),
    p = n(306471),
    u = n(939249),
    j = n(761929),
    x = n(139286),
    h = n(58736),
    A = n(853757),
    T = n(574172),
    m = n(147925),
    f = n(538064),
    b = n(265059),
    I = n(867041),
    N = n(171404),
    O = n(231643),
    v = n(652215),
    D = n(792996),
    E = n(256459),
    y = n(730441);
function L(e) {
    let { resizableNode: s, onResize: n, onResizeEnd: l } = e,
        o = (0, j.A)({
            minDimension: 460,
            resizableDomNodeRef: s,
            onElementResize: n,
            onElementResizeEnd: l,
            orientation: j.R.HORIZONTAL_LEFT,
        });
    return (0, i.jsx)("div", { onMouseDown: o, className: E.Di });
}
function P() {
    (0, T.ho)(
        v.MLl.DEVTOOLS_POPOUT,
        () =>
            (0, i.jsx)(A.A, {
                windowKey: v.MLl.DEVTOOLS_POPOUT,
                title: "DevTools",
                withTitleBar: !0,
                children: (0, i.jsx)(R, { mobile: !1, isPopout: !0 }),
            }),
        { width: 800, height: 600 },
    );
}
function k(e) {
    let { isPopout: s = !1 } = e,
        n = (0, N.x)(),
        {
            TabBar: o,
            renderSelectedTab: t,
            selectedTabId: u,
            setSelectedTabId: j,
        } = (0, O.A)(
            {
                tabs: n,
                initialSelectedTabId: b.A.lastOpenTabId ?? void 0,
                onChangeTab: (e) => {
                    (0, f.Jt)({ lastOpenTabId: e });
                },
            },
            [n],
        ),
        A = (0, c.bG)([b.A], () => b.A.lastOpenTabId);
    return (
        l.useEffect(() => {
            null != A && j(A);
        }, [A, j]),
        (0, x.A)({
            type: a.ImpressionTypes.PANE,
            name: a.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: u },
        }),
        (0, i.jsxs)(I.xG, {
            children: [
                (0, i.jsxs)(h.Ay, {
                    className: y.jr,
                    toolbar: s
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(h.Ay.Icon, { icon: d.WindowLaunchIcon, tooltip: "Pop Out", onClick: P }),
                                  (0, i.jsx)(h.Ay.Icon, {
                                      icon: r.XSmallIcon,
                                      tooltip: D.intl.string(D.t.cpT0Cq),
                                      onClick: f.pf,
                                  }),
                              ],
                          }),
                    children: [
                        (0, i.jsx)(h.Ay.Icon, { icon: p.StaffBadgeIcon, tooltip: "DevTools" }),
                        (0, i.jsx)(h.Ay.Title, { children: "DevTools" }),
                    ],
                }),
                (0, i.jsx)(o, {}),
                t(),
                (0, i.jsx)(I.jY, { className: E.n7 }),
            ],
        })
    );
}
function w() {
    let e = l.useRef(null),
        s = (0, c.bG)([b.A], () => b.A.sidebarWidth),
        [n, o] = l.useState(null),
        t = l.useCallback((e) => (0, f.Jt)({ sidebarWidth: e }), []);
    return (l.useEffect(() => {
        null === n && null !== s && o(s);
    }, [s, n]),
    null === n)
        ? null
        : (0, i.jsxs)("div", {
              ref: e,
              className: E.kL,
              style: { minWidth: 460, width: n },
              "data-app-right-panel": !0,
              children: [
                  (0, i.jsx)(L, { resizableNode: e, onResize: o, onResizeEnd: t }),
                  (0, i.jsx)("div", { className: E.wp, children: (0, i.jsx)(k, {}) }),
              ],
          });
}
function C() {
    return (0, c.bG)([b.A], () => b.A.displayTools)
        ? (0, i.jsx)("div", {
              className: t()(E.kL, E.PQ),
              children: (0, i.jsx)("div", { className: E.wp, children: (0, i.jsx)(k, {}) }),
          })
        : (0, i.jsx)("div", {
              className: E.kL,
              children: (0, i.jsx)(u.D, {
                  onClick: f.pf,
                  children: (0, i.jsxs)(h.Ay, {
                      className: t()(y.jr, E.J$),
                      toolbar: (0, i.jsx)(m.A, { direction: m.A.Directions.UP }),
                      children: [
                          (0, i.jsx)(h.Ay.Icon, { icon: p.StaffBadgeIcon, tooltip: "DevTools" }),
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
          ? (0, i.jsx)("div", { className: E.jC, children: (0, i.jsx)(k, { isPopout: !0 }) })
          : (0, i.jsx)(w, {});
}
n.d(s, {}, { default: R, openDevToolsPopout: P });
