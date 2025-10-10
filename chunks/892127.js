n.d(t, { Z: () => I });
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(765250),
    u = n(13245),
    c = n(355863),
    d = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    m = n(830917),
    g = n(837268),
    y = n(353038),
    O = n(610394),
    v = n(430561),
    E = n(561064),
    S = n(981631),
    b = n(377409);
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
function j(e, t) {
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
            className: Z,
            dragContainerClassName: N,
        } = e,
        w = (0, a.e7)([c.Z], () => c.Z.getWidgetConfig(t.type), [t.type]),
        T = (0, v.xZ)(t.id, v.bc),
        _ = (0, a.e7)([d.default], () => d.default.isLocked((0, f.getPID)())),
        P = (0, E.Z)(),
        D = (0, a.e7)([h.Z], () => h.Z.windowSize((0, m.ZY)(P))),
        A = r.useCallback((e, t, n, i, r) => {
            let l = h.Z.windowSize((0, m.ZY)((0, E.i)())),
                o = (0, p.jL)(n, l),
                a = (0, p.Ox)(i, l);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a,
                });
            let d = e === y.B.MOVE,
                f = (0, p.PY)(n, l.width, l.height, r.width, r.height);
            u.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: c.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: f.left,
                widget_top: f.top,
            });
        }, []),
        R = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: k, pinned: L, zIndex: M, size: V, anchor: z, minSize: U } = t,
        W = r.useMemo(() => (0, p.w_)(V, D), [V, D]),
        G = (0, p.KR)(z, D),
        { resizeX: F, resizeY: H, dragAnywhere: B } = null != w ? w : {},
        Y = L || !_,
        Q = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: D.width,
                maxY: D.height,
            }),
            [D],
        ),
        K = r.useCallback(
            (e) =>
                n(
                    j(x({}, e), {
                        widget: t,
                        dragging: null != e.dragOperation,
                        className: Z,
                    }),
                ),
            [t, n, Z],
        ),
        X = r.useCallback(
            (e) =>
                null != l || null != I
                    ? (0, i.jsxs)("div", {
                          className: o()(b.extrasContainer, T && b.fullFlex),
                          children: [null == l ? void 0 : l(t), null == I ? void 0 : I(t, e)],
                      })
                    : null,
            [t, l, T, I],
        ),
        J = (0, a.e7)([O.ZP], () => O.ZP.hasRenderDebugMode(g.GO.WidgetAreas)),
        q = r.useMemo(() => {
            if (null != C) return (e) => C(j(x({}, e), { widget: t }));
        }, [C, t]);
    return (0, i.jsx)(y.Z, {
        className: o()(
            {
                [b.debug]: J,
                [b.debugUnpinned]: J && !L,
                [b.debugPinned]: J && L,
            },
            N,
        ),
        id: k,
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
        locked: _,
        resizeX: null != F && F,
        resizeY: null != H && H,
        style: { zIndex: M },
        dragAnywhere: null != B && B,
        active: !_,
        onUpdate: A,
        onClick: R,
        targetWindow: P,
        forceShowExtras: T,
        renderExtras: X,
        resizeValidation: q,
        children: K,
    });
});
