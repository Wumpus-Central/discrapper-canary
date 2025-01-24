var n = i(200651),
    l = i(192379),
    o = i(120356),
    r = i.n(o),
    s = i(442837),
    a = i(765250),
    u = i(13245),
    d = i(355863),
    c = i(237997),
    h = i(451478),
    E = i(434529),
    p = i(145597),
    f = i(830917),
    S = i(353038),
    _ = i(306381),
    g = i(610394),
    m = i(561064),
    v = i(981631),
    I = i(152397);
e.Z = l.memo(function (t) {
    let { widget: e, renderWidget: i, renderTitle: o, renderButtons: Z, resizeValidation: O, className: C, dragContainerClassName: N } = t,
        y = d.Z.getWidgetConfig(e.type),
        T = (0, s.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        R = (0, m.Z)(),
        x = (0, s.e7)([h.Z], () => h.Z.windowSize((0, f.ZY)(R))),
        A = l.useCallback((t, e, i, n, l) => {
            let o = h.Z.windowSize((0, f.ZY)((0, m.i)())),
                r = (0, E.jL)(i, o),
                s = (0, E.Ox)(n, o);
            (0, a.Os)(e),
                (0, a.nv)({
                    widgetId: e,
                    anchor: r,
                    size: s
                });
            let c = t === S.B.MOVE,
                p = (0, E.PY)(i, o.width, o.height, l.width, l.height);
            u.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !c,
                was_dragged: c,
                widget_type: d.Z.getWidgetType(e),
                window_width: o.width,
                window_height: o.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        M = l.useCallback((t) => {
            (0, a.Os)(t);
        }, []),
        { id: D, pinned: L, zIndex: w, size: z, anchor: k } = e,
        b = (0, E.w_)(z, x),
        P = (0, E.KR)(k, x),
        { minSize: U, resizeX: j, resizeY: H, dragAnywhere: V } = y,
        W = L || !T,
        F = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: x.width,
                maxY: x.height
            }),
            [x]
        ),
        Y = l.useCallback(
            (t) =>
                i({
                    ...t,
                    widget: e,
                    dragging: null != t.dragOperation,
                    className: C
                }),
            [e, i, C]
        ),
        G = l.useCallback(
            (t) =>
                null != o || null != Z
                    ? (0, n.jsxs)('div', {
                          className: I.extrasContainer,
                          children: [null == o ? void 0 : o(e), null == Z ? void 0 : Z(e, t)]
                      })
                    : null,
            [e, o, Z]
        ),
        B = (0, s.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(_.G.WidgetAreas)),
        Q = l.useMemo(() => {
            if (null != O)
                return (t) =>
                    O({
                        ...t,
                        widget: e
                    });
        }, [O, e]);
    return (0, n.jsx)(S.Z, {
        className: r()(
            {
                [I.debug]: B,
                [I.debugUnpinned]: B && !L,
                [I.debugPinned]: B && L
            },
            N
        ),
        id: D,
        size: b,
        anchor: P,
        container: F,
        minSize: U,
        hidden: !W,
        locked: T,
        resizeX: j,
        resizeY: H,
        style: { zIndex: w },
        dragAnywhere: V,
        active: !T,
        onUpdate: A,
        onClick: M,
        targetWindow: R,
        renderExtras: G,
        resizeValidation: Q,
        children: Y
    });
});
