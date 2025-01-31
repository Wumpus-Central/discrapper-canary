i.d(e, { Z: () => Z });
var n = i(200651),
    l = i(192379),
    s = i(120356),
    o = i.n(s),
    r = i(442837),
    a = i(765250),
    d = i(13245),
    u = i(355863),
    c = i(237997),
    h = i(451478),
    E = i(434529),
    p = i(145597),
    S = i(830917),
    f = i(353038),
    g = i(306381),
    _ = i(610394),
    m = i(561064),
    v = i(981631),
    I = i(152397);
let Z = l.memo(function (t) {
    let { widget: e, renderWidget: i, renderTitle: s, renderButtons: Z, resizeValidation: O, className: C, dragContainerClassName: N } = t,
        y = u.Z.getWidgetConfig(e.type),
        T = (0, r.e7)([c.Z], () => c.Z.isLocked((0, p.QF)())),
        R = (0, m.Z)(),
        x = (0, r.e7)([h.Z], () => h.Z.windowSize((0, S.ZY)(R))),
        A = l.useCallback((t, e, i, n, l) => {
            let s = h.Z.windowSize((0, S.ZY)((0, m.i)())),
                o = (0, E.jL)(i, s),
                r = (0, E.Ox)(n, s);
            (0, a.Os)(e),
                (0, a.nv)({
                    widgetId: e,
                    anchor: o,
                    size: r
                });
            let c = t === f.B.MOVE,
                p = (0, E.PY)(i, s.width, s.height, l.width, l.height);
            d.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, {
                was_resized: !c,
                was_dragged: c,
                widget_type: u.Z.getWidgetType(e),
                window_width: s.width,
                window_height: s.height,
                widget_width: l.width,
                widget_height: l.height,
                widget_left: p.left,
                widget_top: p.top
            });
        }, []),
        D = l.useCallback((t) => {
            (0, a.Os)(t);
        }, []),
        { id: L, pinned: M, zIndex: w, size: z, anchor: k } = e,
        b = (0, E.w_)(z, x),
        P = (0, E.KR)(k, x),
        { minSize: U, resizeX: j, resizeY: V, dragAnywhere: H } = y,
        W = M || !T,
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
                null != s || null != Z
                    ? (0, n.jsxs)('div', {
                          className: I.extrasContainer,
                          children: [null == s ? void 0 : s(e), null == Z ? void 0 : Z(e, t)]
                      })
                    : null,
            [e, s, Z]
        ),
        B = (0, r.e7)([_.ZP], () => _.ZP.hasRenderDebugMode(g.G.WidgetAreas)),
        Q = l.useMemo(() => {
            if (null != O)
                return (t) =>
                    O({
                        ...t,
                        widget: e
                    });
        }, [O, e]);
    return (0, n.jsx)(f.Z, {
        className: o()(
            {
                [I.debug]: B,
                [I.debugUnpinned]: B && !M,
                [I.debugPinned]: B && M
            },
            N
        ),
        id: L,
        size: b,
        anchor: P,
        container: F,
        minSize: U,
        hidden: !W,
        locked: T,
        resizeX: j,
        resizeY: V,
        style: { zIndex: w },
        dragAnywhere: H,
        active: !T,
        onUpdate: A,
        onClick: D,
        targetWindow: R,
        renderExtras: G,
        resizeValidation: Q,
        children: Y
    });
});
