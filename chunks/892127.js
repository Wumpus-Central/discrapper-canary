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
    v = i(610394),
    g = i(561064),
    S = i(981631),
    _ = i(152397);
t.Z = l.memo(function (e) {
    let { widget: t, renderWidget: i, renderTitle: o, renderButtons: C, resizeValidation: Z, className: O, dragContainerClassName: I } = e,
        N = d.Z.getWidgetConfig(t.type),
        y = (0, r.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        x = (0, g.Z)(),
        b = (0, r.e7)([h.Z], () => h.Z.windowSize((0, E.ZY)(x))),
        T = l.useCallback((e, t, i, n, l) => {
            let o = h.Z.windowSize((0, E.ZY)((0, g.i)())),
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
            u.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, {
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
        R = l.useCallback((e) => {
            (0, a.Os)(e);
        }, []),
        { id: k, pinned: z, zIndex: A, size: M, anchor: L } = t,
        w = (0, f.w_)(M, b),
        D = (0, f.KR)(L, b),
        { minSize: j, resizeX: P, resizeY: U, dragAnywhere: H } = N,
        V = z || !y,
        W = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: b.width,
                maxY: b.height
            }),
            [b]
        ),
        F = l.useCallback(
            (e) =>
                i({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: O
                }),
            [t, i, O]
        ),
        B = l.useCallback(
            (e) =>
                null != o || null != C
                    ? (0, n.jsxs)('div', {
                          className: _.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == C ? void 0 : C(t, e)]
                      })
                    : null,
            [t, o, C]
        ),
        Y = (0, r.e7)([v.ZP], () => v.ZP.renderDebugMode),
        G = l.useMemo(() => {
            if (null != Z)
                return (e) =>
                    Z({
                        ...e,
                        widget: t
                    });
        }, [Z, t]);
    return (0, n.jsx)(m.Z, {
        className: s()(
            {
                [_.debug]: Y,
                [_.debugUnpinned]: Y && !z,
                [_.debugPinned]: Y && z
            },
            I
        ),
        id: k,
        size: w,
        anchor: D,
        container: W,
        minSize: j,
        hidden: !V,
        locked: y,
        resizeX: P,
        resizeY: U,
        style: { zIndex: A },
        dragAnywhere: H,
        active: !y,
        onUpdate: T,
        onClick: R,
        targetWindow: x,
        renderExtras: B,
        resizeValidation: G,
        children: F
    });
});
