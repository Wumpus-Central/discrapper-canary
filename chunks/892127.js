n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(765250),
    d = n(13245),
    u = n(355863),
    c = n(237997),
    h = n(451478),
    _ = n(434529),
    p = n(145597),
    f = n(830917),
    g = n(353038),
    m = n(306381),
    v = n(610394),
    E = n(561064),
    I = n(981631),
    x = n(377335);
let C = l.memo(function (e) {
    let { widget: t, renderWidget: n, renderTitle: r, renderButtons: C, resizeValidation: S, className: Z, dragContainerClassName: y } = e,
        O = u.Z.getWidgetConfig(t.type),
        b = (0, a.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        N = (0, E.Z)(),
        T = (0, a.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(N))),
        w = l.useCallback((e, t, n, i, l) => {
            let r = h.Z.windowSize((0, f.ZY)((0, E.i)())),
                o = (0, _.jL)(n, r),
                a = (0, _.Ox)(i, r);
            (0, s.Os)(t),
                (0, s.nv)({
                    widgetId: t,
                    anchor: o,
                    size: a
                });
            let c = e === g.B.MOVE,
                p = (0, _.PY)(n, r.width, r.height, l.width, l.height);
            d.Z.track(I.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !c,
                was_dragged: c,
                widget_type: u.Z.getWidgetType(t),
                window_width: r.width,
                window_height: r.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        A = l.useCallback((e) => {
            (0, s.Os)(e);
        }, []),
        { id: k, pinned: j, zIndex: R, size: L, anchor: D } = t,
        P = (0, _.w_)(L, T),
        M = (0, _.KR)(D, T),
        { minSize: z, resizeX: V, resizeY: W, dragAnywhere: U } = null != O ? O : {},
        F = j || !b,
        G = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: T.width,
                maxY: T.height
            }),
            [T]
        ),
        B = l.useCallback(
            (e) =>
                n({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: Z
                }),
            [t, n, Z]
        ),
        H = l.useCallback(
            (e) =>
                null != r || null != C
                    ? (0, i.jsxs)('div', {
                          className: x.extrasContainer,
                          children: [null == r ? void 0 : r(t), null == C ? void 0 : C(t, e)]
                      })
                    : null,
            [t, r, C]
        ),
        Y = (0, a.e7)([v.ZP], () => v.ZP.hasRenderDebugMode(m.G.WidgetAreas)),
        Q = l.useMemo(() => {
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
        id: k,
        size: P,
        anchor: M,
        container: G,
        minSize:
            null != z
                ? z
                : {
                      width: 0,
                      height: 0
                  },
        hidden: !F,
        locked: b,
        resizeX: null != V && V,
        resizeY: null != W && W,
        style: { zIndex: R },
        dragAnywhere: null != U && U,
        active: !b,
        onUpdate: w,
        onClick: A,
        targetWindow: N,
        renderExtras: H,
        resizeValidation: Q,
        children: B
    });
});
