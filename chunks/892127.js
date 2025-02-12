n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(765250),
    d = n(13245),
    c = n(355863),
    u = n(237997),
    h = n(451478),
    _ = n(434529),
    p = n(145597),
    f = n(830917),
    g = n(353038),
    m = n(306381),
    v = n(610394),
    E = n(561064),
    I = n(981631),
    x = n(261734);
let C = r.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: l, renderButtons: C, resizeValidation: S, className: Z, dragContainerClassName: y } = e,
        b = c.Z.getWidgetConfig(t.type),
        O = (0, a.e7)([u.Z], () => u.Z.isLocked((0, p.QF)())),
        N = (0, E.Z)(),
        T = (0, a.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(N))),
        w = r.useCallback((e, t, n, i, r) => {
            let l = h.Z.windowSize((0, f.ZY)((0, E.i)())),
                o = (0, _.jL)(n, l),
                a = (0, _.Ox)(i, l);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a
                });
            let u = e === g.B.MOVE,
                p = (0, _.PY)(n, l.width, l.height, r.width, r.height);
            d.Z.track(I.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !u,
                was_dragged: u,
                widget_type: c.Z.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        k = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: A, pinned: j, zIndex: R, size: L, anchor: D } = t,
        P = (0, _.w_)(L, T),
        M = (0, _.KR)(D, T),
        { minSize: z, resizeX: V, resizeY: W, dragAnywhere: U } = null != b ? b : {},
        F = j || !O,
        B = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: T.width,
                maxY: T.height
            }),
            [T]
        ),
        G = r.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: Z
                }),
            [t, n, Z]
        ),
        H = r.useCallback(
            (e) =>
                null != l || null != C
                    ? (0, i.jsxs)('div', {
                          className: x.extrasContainer,
                          children: [null == l ? void 0 : l(t), null == C ? void 0 : C(t, e)]
                      })
                    : null,
            [t, l, C]
        ),
        Y = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        Q = r.useMemo(() => {
            if (null != S)
                return (e) =>
                    S({
                        ...e,
                        widget: t
                    });
        }, [S, t]);
    return (0, i.jsx)(g.Z, {
        className: o()(
            {
                [x.debug]: Y,
                [x.debugUnpinned]: Y && !j,
                [x.debugPinned]: Y && j
            },
            y
        ),
        id: A,
        size: P,
        anchor: M,
        container: B,
        minSize:
            null != z
                ? z
                : {
                      width: 0,
                      height: 0
                  },
        hidden: !F,
        locked: O,
        resizeX: null != V && V,
        resizeY: null != W && W,
        style: { zIndex: R },
        dragAnywhere: null != U && U,
        active: !O,
        onUpdate: w,
        onClick: k,
        targetWindow: N,
        renderExtras: H,
        resizeValidation: Q,
        children: G
    });
});
