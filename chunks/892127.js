n.d(t, { Z: () => I });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(765250),
    c = n(13245),
    u = n(355863),
    d = n(237997),
    p = n(451478),
    h = n(434529),
    f = n(145597),
    m = n(830917),
    g = n(837268),
    y = n(353038),
    O = n(610394),
    v = n(430561),
    b = n(561064),
    E = n(981631),
    _ = n(377409);
function x(e) {
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
let I = r.memo(function (e) {
    let {
            widget: t,
            renderWidget: n,
            renderTitle: l,
            renderButtons: I,
            resizeValidation: C,
            className: j,
            dragContainerClassName: w,
        } = e,
        N = (0, a.e7)([u.Z], () => u.Z.getWidgetConfig(t.type), [t.type]),
        Z = (0, v.xZ)(t.id, v.bc),
        T = (0, a.e7)([d.default], () => d.default.isLocked((0, f.getPID)())),
        P = (0, b.Z)(),
        A = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(P))),
        D = r.useCallback((e, t, n, i, r) => {
            let l = p.Z.windowSize((0, m.ZY)((0, b.i)())),
                o = (0, h.jL)(n, l),
                a = (0, h.Ox)(i, l);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a,
                });
            let d = e === y.B.MOVE,
                f = (0, h.PY)(n, l.width, l.height, r.width, r.height);
            c.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: u.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: f.left,
                widget_top: f.top,
            });
        }, []),
        k = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: R, pinned: L, zIndex: M, size: z, anchor: V, minSize: U } = t,
        W = r.useMemo(() => (0, h.w_)(z, A), [z, A]),
        G = (0, h.KR)(V, A),
        { resizeX: B, resizeY: H, dragAnywhere: F } = null != N ? N : {},
        Y = L || !T,
        Q = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: A.width,
                maxY: A.height,
            }),
            [A],
        ),
        K = r.useCallback(
            (e) =>
                n(
                    S(x({}, e), {
                        widget: t,
                        dragging: null != e.dragOperation,
                        className: j,
                    }),
                ),
            [t, n, j],
        ),
        X = r.useCallback(
            (e) =>
                null != l || null != I
                    ? (0, i.jsxs)("div", {
                          className: o()(_.extrasContainer, Z && _.fullFlex),
                          children: [null == l ? void 0 : l(t), null == I ? void 0 : I(t, e)],
                      })
                    : null,
            [t, l, Z, I],
        ),
        q = (0, a.e7)([O.ZP], () => O.ZP.hasRenderDebugMode(g.GO.WidgetAreas)),
        J = r.useMemo(() => {
            if (null != C) return (e) => C(S(x({}, e), { widget: t }));
        }, [C, t]);
    return (0, i.jsx)(y.Z, {
        className: o()(
            {
                [_.debug]: q,
                [_.debugUnpinned]: q && !L,
                [_.debugPinned]: q && L,
            },
            w,
        ),
        id: R,
        size: W,
        anchor: G,
        container: Q,
        minSize:
            null != U
                ? U
                : {
                      width: 0,
                      height: 0,
                  },
        hidden: !Y,
        locked: T,
        resizeX: null != B && B,
        resizeY: null != H && H,
        style: { zIndex: M },
        dragAnywhere: null != F && F,
        active: !T,
        onUpdate: D,
        onClick: k,
        targetWindow: P,
        forceShowExtras: Z,
        renderExtras: X,
        resizeValidation: J,
        children: K,
    });
});
