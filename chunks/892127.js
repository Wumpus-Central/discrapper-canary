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
    h = n(434529),
    f = n(145597),
    m = n(830917),
    g = n(353038),
    y = n(306381),
    O = n(610394),
    v = n(561064),
    b = n(981631),
    _ = n(816530);
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
    let { widget: t, renderWidget: n, renderTitle: o, renderButtons: I, resizeValidation: j, className: C, dragContainerClassName: S } = e,
        N = u.Z.getWidgetConfig(t.type),
        Z = (0, a.e7)([d.default], () => d.default.isLocked((0, f.getPID)())),
        w = (0, v.Z)(),
        P = (0, a.e7)([p.Z], () => p.Z.windowSize((0, m.ZY)(w))),
        T = r.useCallback((e, t, n, i, r) => {
            let o = p.Z.windowSize((0, m.ZY)((0, v.i)())),
                l = (0, h.jL)(n, o),
                a = (0, h.Ox)(i, o);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: l,
                    size: a
                });
            let d = e === g.B.MOVE,
                f = (0, h.PY)(n, o.width, o.height, r.width, r.height);
            c.Z.track(b.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !d,
                was_dragged: d,
                widget_type: u.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: f.left,
                widget_top: f.top
            });
        }, []),
        k = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: D, pinned: A, zIndex: L, size: R, anchor: W } = t,
        M = (0, h.w_)(R, P),
        V = (0, h.KR)(W, P),
        { minSize: z, resizeX: U, resizeY: G, dragAnywhere: F } = null != N ? N : {},
        B = A || !Z,
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
                          className: _.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == I ? void 0 : I(t, e)]
                      })
                    : null,
            [t, o, I]
        ),
        K = (0, a.e7)([O.ZP], () => O.ZP.hasRenderDebugMode(y.G.WidgetAreas)),
        X = r.useMemo(() => {
            if (null != j) return (e) => j(x(E({}, e), { widget: t }));
        }, [j, t]);
    return (0, i.jsx)(g.Z, {
        className: l()(
            {
                [_.debug]: K,
                [_.debugUnpinned]: K && !A,
                [_.debugPinned]: K && A
            },
            S
        ),
        id: D,
        size: M,
        anchor: V,
        container: H,
        minSize:
            null != z
                ? z
                : {
                      width: 0,
                      height: 0
                  },
        hidden: !B,
        locked: Z,
        resizeX: null != U && U,
        resizeY: null != G && G,
        style: { zIndex: L },
        dragAnywhere: null != F && F,
        active: !Z,
        onUpdate: T,
        onClick: k,
        targetWindow: w,
        renderExtras: Q,
        resizeValidation: X,
        children: Y
    });
});
