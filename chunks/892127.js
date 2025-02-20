n.d(t, { Z: () => I });
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(765250),
    c = n(13245),
    u = n(355863),
    d = n(237997),
    p = n(451478),
    f = n(434529),
    h = n(145597),
    g = n(830917),
    _ = n(353038),
    m = n(306381),
    v = n(610394),
    O = n(561064),
    b = n(981631),
    y = n(536755);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function x(e, t) {
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
    let { widget: t, renderWidget: n, renderTitle: o, renderButtons: I, resizeValidation: S, className: C, dragContainerClassName: j } = e,
        w = u.Z.getWidgetConfig(t.type),
        Z = (0, a.e7)([d.Z], () => d.Z.isLocked((0, h.QF)())),
        N = (0, O.Z)(),
        P = (0, a.e7)([p.Z], () => p.Z.windowSize((0, g.ZY)(N))),
        T = r.useCallback((e, t, n, i, r) => {
            let o = p.Z.windowSize((0, g.ZY)((0, O.i)())),
                l = (0, f.jL)(n, o),
                a = (0, f.Ox)(i, o);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: l,
                    size: a
                });
            let d = e === _.B.MOVE,
                h = (0, f.PY)(n, o.width, o.height, r.width, r.height);
            c.Z.track(b.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: u.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: h.left,
                widget_top: h.top
            });
        }, []),
        k = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: A, pinned: D, zIndex: R, size: L, anchor: W } = t,
        M = (0, f.w_)(L, P),
        z = (0, f.KR)(W, P),
        { minSize: V, resizeX: U, resizeY: F, dragAnywhere: B } = null != w ? w : {},
        G = D || !Z,
        H = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: P.width,
                maxY: P.height
            }),
            [P]
        ),
        Y = r.useCallback(
            (e) =>
                n(
                    x(E({}, e), {
                        widget: t,
                        dragging: null != e.dragOperation,
                        className: C
                    })
                ),
            [t, n, C]
        ),
        Q = r.useCallback(
            (e) =>
                null != o || null != I
                    ? (0, i.jsxs)('div', {
                          className: y.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == I ? void 0 : I(t, e)]
                      })
                    : null,
            [t, o, I]
        ),
        K = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        X = r.useMemo(() => {
            if (null != S) return (e) => S(x(E({}, e), { widget: t }));
        }, [S, t]);
    return (0, i.jsx)(_.Z, {
        className: l()(
            {
                [y.debug]: K,
                [y.debugUnpinned]: K && !D,
                [y.debugPinned]: K && D
            },
            j
        ),
        id: A,
        size: M,
        anchor: z,
        container: H,
        minSize:
            null != V
                ? V
                : {
                      width: 0,
                      height: 0
                  },
        hidden: !G,
        locked: Z,
        resizeX: null != U && U,
        resizeY: null != F && F,
        style: { zIndex: R },
        dragAnywhere: null != B && B,
        active: !Z,
        onUpdate: T,
        onClick: k,
        targetWindow: N,
        renderExtras: Q,
        resizeValidation: X,
        children: Y
    });
});
