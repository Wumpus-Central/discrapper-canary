n.d(t, { Z: () => x });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(765250),
    c = n(13245),
    u = n(355863),
    d = n(451478),
    h = n(434529),
    p = n(830917),
    f = n(837268),
    m = n(353038),
    g = n(338949),
    y = n(430561),
    O = n(985149),
    v = n(561064),
    E = n(981631),
    b = n(156581);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = r.memo(function (e) {
    let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: x,
            resizeValidation: I,
            className: C,
            dragContainerClassName: j,
        } = e,
        N = (0, a.e7)([u.Z], () => u.Z.getWidgetConfig(t.type), [t.type]),
        Z = (0, y.xZ)(t.id, y.bc),
        w = (0, O.Z)(),
        T = (0, v.Z)(),
        P = (0, a.e7)([d.Z], () => d.Z.windowSize((0, p.ZY)(T))),
        A = r.useCallback((e, t, n, i, r) => {
            let l = d.Z.windowSize((0, p.ZY)((0, v.i)())),
                o = (0, h.jL)(n, l),
                a = (0, h.Ox)(i, l);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a,
                });
            let f = e === m.B.MOVE,
                g = (0, h.PY)(n, l.width, l.height, r.width, r.height);
            c.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !f,
                was_dragged: f,
                widget_type: u.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: g.left,
                widget_top: g.top,
            });
        }, []),
        k = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: D, pinned: R, zIndex: L, size: M, anchor: z, minSize: V } = t,
        U = r.useMemo(() => (0, h.w_)(M, P), [M, P]),
        W = (0, h.KR)(z, P),
        { resizeX: G, resizeY: F, dragAnywhere: B } = null != N ? N : {},
        H = R || !w,
        Y = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: P.width,
                maxY: P.height,
            }),
            [P],
        ),
        Q = r.useCallback(
            (e) =>
                n(
                    S(_({}, e), {
                        widget: t,
                        dragging: null != e.dragOperation,
                        className: C,
                    }),
                ),
            [t, n, C],
        ),
        K = r.useCallback(
            (e) =>
                null != l || null != x
                    ? (0, i.jsxs)("div", {
                          className: o()(b.extrasContainer, Z && b.fullFlex),
                          children: [null == l ? void 0 : l(t), null == x ? void 0 : x(t, e)],
                      })
                    : null,
            [t, l, Z, x],
        ),
        X = (0, a.e7)([g.Z], () => g.Z.hasRenderDebugMode(f.GO.WidgetAreas)),
        J = r.useMemo(() => {
            if (null != I) return (e) => I(S(_({}, e), { widget: t }));
        }, [I, t]);
    return (0, i.jsx)(m.Z, {
        className: o()(
            {
                [b.debug]: X,
                [b.debugUnpinned]: X && !R,
                [b.debugPinned]: X && R,
            },
            j,
        ),
        id: D,
        size: U,
        anchor: W,
        container: Y,
        minSize:
            null != V
                ? V
                : {
                      width: 0,
                      height: 0,
                  },
        hidden: !H,
        locked: w,
        resizeX: null != G && G,
        resizeY: null != F && F,
        style: { zIndex: L },
        dragAnywhere: null != B && B,
        active: !w,
        onUpdate: A,
        onClick: k,
        targetWindow: T,
        forceShowExtras: Z,
        renderExtras: K,
        resizeValidation: J,
        children: Q,
    });
});
