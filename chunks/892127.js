n.d(t, { Z: () => Z });
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
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
    x = n(561064),
    E = n(981631),
    C = n(152397);
let Z = r.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: o, renderButtons: Z, resizeValidation: S, className: I, dragContainerClassName: y } = e,
        b = c.Z.getWidgetConfig(t.type),
        w = (0, a.e7)([u.Z], () => u.Z.isLocked((0, p.QF)())),
        N = (0, x.Z)(),
        O = (0, a.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(N))),
        T = r.useCallback((e, t, n, i, r) => {
            let o = h.Z.windowSize((0, f.ZY)((0, x.i)())),
                l = (0, _.jL)(n, o),
                a = (0, _.Ox)(i, o);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: l,
                    size: a
                });
            let u = e === g.B.MOVE,
                p = (0, _.PY)(n, o.width, o.height, r.width, r.height);
            d.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !u,
                was_dragged: u,
                widget_type: c.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: r.width,
                widget_height: r.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        j = r.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: k, pinned: R, zIndex: A, size: L, anchor: P } = t,
        D = (0, _.w_)(L, O),
        M = (0, _.KR)(P, O),
        { minSize: z, resizeX: V, resizeY: W, dragAnywhere: F } = b,
        U = R || !w,
        H = r.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: O.width,
                maxY: O.height
            }),
            [O]
        ),
        B = r.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: I
                }),
            [t, n, I]
        ),
        G = r.useCallback(
            (e) =>
                null != o || null != Z
                    ? (0, i.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, o, Z]
        ),
        Y = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        X = r.useMemo(() => {
            if (null != S)
                return (e) =>
                    S({
                        ...e,
                        widget: t
                    });
        }, [S, t]);
    return (0, i.jsx)(g.Z, {
        className: l()(
            {
                [C.debug]: Y,
                [C.debugUnpinned]: Y && !R,
                [C.debugPinned]: Y && R
            },
            y
        ),
        id: k,
        size: D,
        anchor: M,
        container: H,
        minSize: z,
        hidden: !U,
        locked: w,
        resizeX: V,
        resizeY: W,
        style: { zIndex: A },
        dragAnywhere: F,
        active: !w,
        onUpdate: T,
        onClick: j,
        targetWindow: N,
        renderExtras: G,
        resizeValidation: X,
        children: B
    });
});
