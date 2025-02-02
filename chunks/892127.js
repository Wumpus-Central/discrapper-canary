n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(765250),
    d = n(13245),
    c = n(355863),
    u = n(237997),
    h = n(451478),
    _ = n(434529),
    p = n(145597),
    g = n(830917),
    f = n(353038),
    m = n(306381),
    v = n(610394),
    x = n(561064),
    E = n(981631),
    Z = n(152397);
let C = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: r, renderButtons: C, resizeValidation: I, className: S, dragContainerClassName: b } = e,
        y = c.Z.getWidgetConfig(t.type),
        N = (0, a.e7)([u.Z], () => u.Z.isLocked((0, p.QF)())),
        w = (0, x.Z)(),
        T = (0, a.e7)([h.Z], () => h.Z.windowSize((0, g.ZY)(w))),
        O = l.useCallback((e, t, n, i, l) => {
            let r = h.Z.windowSize((0, g.ZY)((0, x.i)())),
                o = (0, _.jL)(n, r),
                a = (0, _.Ox)(i, r);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a
                });
            let u = e === f.B.MOVE,
                p = (0, _.PY)(n, r.width, r.height, l.width, l.height);
            d.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !u,
                was_dragged: u,
                widget_type: c.Z.getWidgetType(t),
                window_width: r.width,
                window_height: r.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        j = l.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: k, pinned: R, zIndex: A, size: L, anchor: M } = t,
        P = (0, _.w_)(L, T),
        D = (0, _.KR)(M, T),
        { minSize: z, resizeX: V, resizeY: W, dragAnywhere: F } = y,
        U = R || !N,
        G = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: T.width,
                maxY: T.height
            }),
            [T]
        ),
        H = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: S
                }),
            [t, n, S]
        ),
        B = l.useCallback(
            (e) =>
                null != r || null != C
                    ? (0, i.jsxs)('div', {
                          className: Z.extrasContainer,
                          children: [null == r ? void 0 : r(t), null == C ? void 0 : C(t, e)]
                      })
                    : null,
            [t, r, C]
        ),
        Y = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        K = l.useMemo(() => {
            if (null != I)
                return (e) =>
                    I({
                        ...e,
                        widget: t
                    });
        }, [I, t]);
    return (0, i.jsx)(f.Z, {
        className: o()(
            {
                [Z.debug]: Y,
                [Z.debugUnpinned]: Y && !R,
                [Z.debugPinned]: Y && R
            },
            b
        ),
        id: k,
        size: P,
        anchor: D,
        container: G,
        minSize: z,
        hidden: !U,
        locked: N,
        resizeX: V,
        resizeY: W,
        style: { zIndex: A },
        dragAnywhere: F,
        active: !N,
        onUpdate: O,
        onClick: j,
        targetWindow: w,
        renderExtras: B,
        resizeValidation: K,
        children: H
    });
});
