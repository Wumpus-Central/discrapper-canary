i.d(t, { A: () => C });
var n = i(477900),
    l = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(686246),
    d = i(651300),
    u = i(17928),
    c = i(451395),
    o = i(202762),
    f = i(88592),
    E = i(363957),
    _ = i(754674),
    g = i(317574),
    I = i(992622),
    h = i(983283),
    S = i(375708),
    m = i(84899);
let A = "GUILD_SPACE_WIDGET",
    D = "GUILD_SPACE_WIDGETS",
    p = `${A}_${D}`;
function v(e) {
    let {
            guildId: t,
            widget: i,
            column: a,
            positionNumber: s,
            columnWidgetCount: d,
            flatIndex: f,
            leftColumnCount: I,
            onReorder: p,
            title: v,
            isSaving: T,
        } = e,
        C = l.useRef(null),
        y = l.useRef(null),
        x = (0, u.bG)([E.A], () => (i.requires_hydration ? E.A.getHydration(t, i.id) : void 0), [
            t,
            i.id,
            i.requires_hydration,
        ]),
        { isDragging: G, dragSourcePosition: R } = (0, c.gY)({
            dragRef: C,
            dropRef: y,
            index: f,
            listType: D,
            itemType: A,
            itemId: i.id,
            onReorder: p,
            canDrag: !T,
        }),
        U = null == R ? null : R < I ? _.FT : _.yM,
        L = null != U && U !== a;
    return (0, n.jsx)("div", {
        ref: y,
        className: r()(m.NI, { [m.cB]: G, [m.ne]: null != R && (L || R > f), [m.O3]: null != R && !L && R < f }),
        "data-dnd-name": S.intl.formatToPlainString(a === _.yM ? h.default.O9RvHQ : h.default["+cSvS8"], {
            positionNumber: s,
            positionCount: d,
        }),
        children: (0, n.jsx)(g.P, {
            widget: i,
            guildSpaceMode: "edit",
            title: v,
            hydration: x,
            dragHandleRef: C,
            disabled: T,
            onRemove: () => (0, o.GP)(t, i.id),
            onCommitConfig: (e) => (0, o.Vk)(t, i.id, e),
        }),
    });
}
function T(e) {
    let { column: t, onDropAtEnd: i } = e,
        a = l.useRef(null),
        [{ isOver: s }, u] = (0, d.H)({
            accept: p,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        l.useLayoutEffect(
            () => (
                u(a),
                () => {
                    u(null);
                }
            ),
            [u],
        ),
        (0, n.jsx)("div", {
            ref: a,
            className: r()(m.wr, { [m.SX]: s }),
            "data-dnd-name": S.intl.string(t === _.yM ? h.default.fWef0G : h.default.KcdDyT),
        })
    );
}
function C(e) {
    let { guildId: t, widgets: i, widgetTitles: a } = e,
        r = l.useMemo(() => (0, _.Rl)(i), [i]),
        d = l.useMemo(
            () =>
                r.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != I.m[t];
                    }),
                ),
            [r],
        ),
        c = l.useMemo(() => [...d[_.FT], ...d[_.yM]], [d]),
        E = (0, s.V)((e) => e.isDragging() && e.getItemType() === p),
        g = (0, u.bG)([f.A], () => "saving" === f.A.getSaveStatus(t), [t]),
        h = l.useCallback(
            (e, i) => {
                let n = c[e],
                    l = c[i];
                null != n && null != l && (0, o.j0)(t, n.id, l.position.column, l.position.order);
            },
            [t, c],
        ),
        S = l.useCallback(
            (e, i) => {
                (0, o.j0)(t, e, i, r[i]?.length ?? 0);
            },
            [t, r],
        );
    return (0, n.jsx)("div", {
        className: m.Vg,
        children: d.map((e, i) =>
            (0, n.jsxs)(
                "div",
                {
                    className: m.fi,
                    children: [
                        e.map((l, r) =>
                            (0, n.jsx)(
                                v,
                                {
                                    guildId: t,
                                    widget: l,
                                    column: i,
                                    positionNumber: r + 1,
                                    columnWidgetCount: e.length,
                                    flatIndex: i === _.yM ? d[_.FT].length + r : r,
                                    leftColumnCount: d[_.FT].length,
                                    onReorder: h,
                                    title: a?.[l.type],
                                    isSaving: g,
                                },
                                l.id,
                            ),
                        ),
                        E && !g && (0, n.jsx)(T, { column: i, onDropAtEnd: S }),
                    ],
                },
                i,
            ),
        ),
    });
}
