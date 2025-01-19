var n = i(200651),
    l = i(192379),
    o = i(120356),
    s = i.n(o),
    r = i(442837),
    a = i(765250),
    u = i(13245),
    d = i(355863),
    c = i(237997),
    h = i(451478),
    f = i(434529),
    p = i(145597),
    E = i(830917),
    m = i(353038),
    v = i(306381),
    g = i(610394),
    S = i(561064),
    _ = i(981631),
    C = i(152397);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: i, renderTitle: o, renderButtons: Z, resizeValidation: O, className: I, dragContainerClassName: N } = e,
        y = d.Z.getWidgetConfig(t.type),
        x = (0, r.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        b = (0, S.Z)(),
        T = (0, r.e7)([h.Z], () => h.Z.windowSize((0, E.ZY)(b))),
        R = l.useCallback((e, t, i, n, l) => {
            let o = h.Z.windowSize((0, E.ZY)((0, S.i)())),
                s = (0, f.jL)(i, o),
                r = (0, f.Ox)(n, o);
            (0, a.Os)(t),
                (0, a.nv)({
                    widgetId: t,
                    anchor: s,
                    size: r
                });
            let c = e === m.B.MOVE,
                p = (0, f.PY)(i, o.width, o.height, l.width, l.height);
            u.Z.track(_.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !c,
                was_dragged: c,
                widget_type: d.Z.getWidgetType(t),
                window_width: o.width,
                window_height: o.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        k = l.useCallback((e) => {
            (0, a.Os)(e);
        }, []),
        { id: A, pinned: z, zIndex: M, size: L, anchor: w } = t,
        D = (0, f.w_)(L, T),
        j = (0, f.KR)(w, T),
        { minSize: P, resizeX: U, resizeY: H, dragAnywhere: V } = y,
        W = z || !x,
        F = l.useMemo(
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
                i({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: I
                }),
            [t, i, I]
        ),
        Y = l.useCallback(
            (e) =>
                null != o || null != Z
                    ? (0, n.jsxs)('div', {
                          className: C.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, o, Z]
        ),
        G = (0, r.e7)([g.ZP], () => g.ZP.hasRenderDebugMode(v.G.WidgetAreas)),
        K = l.useMemo(() => {
            if (null != O)
                return (e) =>
                    O({
                        ...e,
                        widget: t
                    });
        }, [O, t]);
    return (0, n.jsx)(m.Z, {
        className: s()(
            {
                [C.debug]: G,
                [C.debugUnpinned]: G && !z,
                [C.debugPinned]: G && z
            },
            N
        ),
        id: A,
        size: D,
        anchor: j,
        container: F,
        minSize: P,
        hidden: !W,
        locked: x,
        resizeX: U,
        resizeY: H,
        style: { zIndex: M },
        dragAnywhere: V,
        active: !x,
        onUpdate: R,
        onClick: k,
        targetWindow: b,
        renderExtras: Y,
        resizeValidation: K,
        children: B
    });
});
