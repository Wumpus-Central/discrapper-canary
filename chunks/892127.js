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
    let { widget: t, renderWidget: i, renderTitle: o, renderButtons: Z, resizeValidation: C, className: O, dragContainerClassName: I } = e,
        N = d.Z.getWidgetConfig(t.type),
        y = (0, r.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        x = (0, g.Z)(),
        b = (0, r.e7)([h.Z], () => h.Z.windowSize((0, E.ZY)(x))),
        T = (0, g.Z)(),
        R = l.useCallback((e, t, i, n, l) => {
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
        k = l.useCallback((e) => {
            (0, a.Os)(e);
        }, []),
        { id: z, pinned: A, zIndex: M, size: L, anchor: w } = t,
        D = (0, f.w_)(L, b),
        j = (0, f.KR)(w, b),
        { minSize: P, resizeX: U, resizeY: H, dragAnywhere: V } = N,
        W = A || !y,
        F = l.useMemo(
            () => ({
                minX: 0,
                minY: 0,
                maxX: b.width,
                maxY: b.height
            }),
            [b]
        ),
        B = l.useCallback(
            (e) =>
                i({
                    ...e,
                    widget: t,
                    dragging: null != e.dragOperation,
                    className: O
                }),
            [t, i, O]
        ),
        Y = l.useCallback(
            (e) =>
                null != o || null != Z
                    ? (0, n.jsxs)('div', {
                          className: _.extrasContainer,
                          children: [null == o ? void 0 : o(t), null == Z ? void 0 : Z(t, e)]
                      })
                    : null,
            [t, o, Z]
        ),
        G = (0, r.e7)([v.Z], () => v.Z.renderDebugMode),
        K = l.useMemo(() => {
            if (null != C)
                return (e) =>
                    C({
                        ...e,
                        widget: t
                    });
        }, [C, t]);
    return (0, n.jsx)(m.Z, {
        className: s()(
            {
                [_.debug]: G,
                [_.debugUnpinned]: G && !A,
                [_.debugPinned]: G && A
            },
            I
        ),
        id: z,
        size: D,
        anchor: j,
        container: F,
        minSize: P,
        hidden: !W,
        locked: y,
        resizeX: U,
        resizeY: H,
        style: { zIndex: M },
        dragAnywhere: V,
        active: !y,
        onUpdate: R,
        onClick: k,
        targetWindow: T,
        renderExtras: Y,
        resizeValidation: K,
        children: B
    });
});
