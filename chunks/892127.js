n.d(t, { Z: () => Z });
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
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
    C = n(261734);
let Z = o.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: r, renderButtons: Z, resizeValidation: I, className: S, dragContainerClassName: b } = e,
        y = c.Z.getWidgetConfig(t.type),
        w = (0, a.e7)([u.Z], () => u.Z.isLocked((0, p.QF)())),
        O = (0, x.Z)(),
        N = (0, a.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(O))),
        T = o.useCallback((e, t, n, i, o) => {
            let r = h.Z.windowSize((0, f.ZY)((0, x.i)())),
                l = (0, _.jL)(n, r),
                a = (0, _.Ox)(i, r);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: l,
                    size: a
                });
            let u = e === g.B.MOVE,
                p = (0, _.PY)(n, r.width, r.height, o.width, o.height);
            d.Z.track(E.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !u,
                was_dragged: u,
                widget_type: c.Z.getWidgetType(t),
                window_width: r.width,
                window_height: r.height,
                widget_width: o.width,
                widget_height: o.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        j = o.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: k, pinned: R, zIndex: A, size: L, anchor: P } = t,
        D = (0, _.w_)(L, N),
        M = (0, _.KR)(P, N),
        { minSize: z, resizeX: V, resizeY: W, dragAnywhere: F } = null != y ? y : {},
        U = R || !w,
        H = o.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: N.width,
                maxY: N.height
            }),
            [N]
        ),
        B = o.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: S
                }),
            [t, n, S]
        ),
        G = o.useCallback(
            (e) =>
                null != r || null != Z
                    ? (0, i.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == r ? void 0 : r(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, r, Z]
        ),
        Y = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        K = o.useMemo(() => {
            if (null != I)
                return (e) =>
                    I({
                        ...e,
                        widget: t
                    });
        }, [I, t]);
    return (0, i.jsx)(g.Z, {
        className: l()(
            {
                [C.debug]: Y,
                [C.debugUnpinned]: Y && !R,
                [C.debugPinned]: Y && R
            },
            b
        ),
        id: k,
        size: D,
        anchor: M,
        container: H,
        minSize:
            null != z
                ? z
                : {
                      width: 0,
                      height: 0
                  },
        hidden: !U,
        locked: w,
        resizeX: null != V && V,
        resizeY: null != W && W,
        style: { zIndex: A },
        dragAnywhere: null != F && F,
        active: !w,
        onUpdate: T,
        onClick: j,
        targetWindow: O,
        renderExtras: G,
        resizeValidation: K,
        children: B
    });
});
