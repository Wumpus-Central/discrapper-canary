(n.r(t), n.d(t, { default: () => e1 }));
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(834730),
    s = n(289873),
    u = n(689175),
    d = n(250527),
    c = n(868652),
    o = n(645619),
    f = n(71393),
    g = n(473953),
    m = n(636537),
    h = n(228366),
    E = n(652215);
async function x(e) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await m.Bo.get({ url: E.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var p = n(960960),
    A = n(202762),
    _ = n(88592),
    C = n(363957),
    v = n(513446);
let I = 0;
async function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = C.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = I++;
    h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await m.Bo.get({
            url: E.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, v.a)(t) });
    }
}
var b = n(716357),
    S = n(593673),
    D = n(313627),
    j = n(344351),
    G = n(795816),
    T = n(933958),
    w = n(44167),
    R = n(872188),
    L = n(868285),
    N = n(36525),
    P = n(871682),
    U = n(331322),
    k = n(821609),
    M = n(499373),
    O = n(866665),
    B = n(189213),
    W = n(939249),
    F = n(245604),
    H = n(104510),
    z = n(661531),
    K = n(192308),
    $ = n(775602),
    q = n(855823),
    V = n(61567),
    X = n(375708),
    Y = n(517228);
function J(e) {
    let { widget: t, onClick: n } = e,
        r = (0, i.bG)([$.Ay], () => $.Ay.useReducedMotion),
        { catalog_image_static_url: s, catalog_image_animated_url: u } = t.assets,
        d = (r ? null : u) ?? s,
        c = t.boost_price;
    return (0, l.jsxs)(W.D, {
        className: Y.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: Y.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: Y.YI, src: d, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: Y.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: Y.Ti, children: (0, l.jsx)("div", { className: Y.dK }) }),
                            (0, l.jsxs)(U.B, {
                                className: Y.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(F.U, {}),
                                    (0, l.jsx)(a.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: X.intl.string(V.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(U.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(a.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(U.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(H._, { size: "sm", color: z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: X.intl.format(V.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(a.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: X.intl.string(V.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { guildId: t, insertionTarget: n, ...a } = e,
        s = (0, i.yK)(
            [p.A, _.A],
            () => {
                let e = _.A.getDraft(t)?.widgets ?? [],
                    n = p.A.getWidgets(t) ?? [];
                return (0, q.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            x(t);
        }, [t]),
        (0, l.jsx)(B.Modal, {
            title: X.intl.string(V.default.L8Xfoo),
            subtitle: X.intl.string(V.default["N8nJ+T"]),
            actions: [],
            ...a,
            children: (0, l.jsx)("div", {
                className: Y.Vg,
                children: s.map((e) =>
                    (0, l.jsx)(
                        J,
                        {
                            widget: e,
                            onClick: () => {
                                ((0, A.lr)(t, e.type, e.name, e.locked, n), a.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function Z(e, t) {
    let n = (n) => (0, l.jsx)(Q, { guildId: e, insertionTarget: t, ...n });
    (0, K.openModalLazy)(() => Promise.resolve(n), { modalKey: "guild-space-add-widget" });
}
var ee = n(992303);
function et(e) {
    let { guildId: t, isEditing: n, isRemovalPending: s } = e,
        u = (0, i.bG)([_.A], () => _.A.getSaveStatus(t), [t]),
        d = (0, i.bG)([_.A], () => _.A.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, i.bG)([_.A], () => _.A.getSaveErrorMessage(t), [t]),
        o = "saving" === u,
        f = o || s,
        g = c ?? X.intl.string(V.default.HmFYc5),
        m = r.useCallback(() => {
            f || (0, A.Fj)(t);
        }, [t, f]),
        h = r.useCallback(() => {
            (0, A.iX)(t);
        }, [t]);
    return (0, l.jsx)(L.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(P.F, {
                className: ee.K,
                children: (0, l.jsx)(N.A, {
                    submitting: o,
                    disabled: f,
                    onSave: m,
                    onReset: f ? void 0 : h,
                    message: (0, l.jsxs)(U.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(k.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: M.T,
                                text: X.intl.string(V.default.L8Xfoo),
                                disabled: f,
                                onClick: () => Z(t),
                            }),
                            "error" === u
                                ? (0, l.jsx)(O.m, {
                                      text: g,
                                      children: (0, l.jsx)(a.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: g,
                                      }),
                                  })
                                : (0, l.jsx)(a.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: X.intl.format(V.default.hpAg80, { panelCount: d }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var en = n(503698),
    el = n.n(en),
    er = n(425763),
    ei = n(754674),
    ea = n(294918);
function es(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: ea.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eu = n(686246);
let ed = "GUILD_SPACE_WIDGET",
    ec = "GUILD_SPACE_WIDGETS",
    eo = `${ed}_${ec}`;
var ef = n(225995),
    eg = n(333007);
let em = "canvas, iframe, video";
function eh(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, eu.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eo,
            item: e.getItem(),
        })),
        u = (0, ef.u)(),
        d = r.useRef(null),
        c = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e) return;
        let n = u.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [u, a, t]),
    r.useLayoutEffect(() => {
        let e = c.current,
            n = d.current,
            l = a ? s?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(em);
        return (
            r.querySelectorAll(em).forEach((e, t) => {
                let n = document.createElement("div"),
                    l = i.item(t),
                    r = l?.getBoundingClientRect(),
                    a = l?.parentElement?.getBoundingClientRect();
                ((n.className = e.className),
                    n.setAttribute("aria-hidden", "true"),
                    null != r &&
                        ((n.style.width = null != a && 0.5 > Math.abs(r.width - a.width) ? "100%" : `${r.width}px`),
                        (n.style.height = null != a && 0.5 > Math.abs(r.height - a.height) ? "100%" : `${r.height}px`)),
                    e.replaceWith(n));
            }),
            r.classList.remove(ea.cB, ea.Ni),
            r.removeAttribute("data-dnd-name"),
            r.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            r.setAttribute("aria-hidden", "true"),
            (r.inert = !0),
            e.replaceChildren(r),
            () => e.replaceChildren()
        );
    }, [a, t, s]),
    r.useLayoutEffect(() => {
        let e = d.current;
        if (!a || t || null == e || null == n) return;
        let l = i(n);
        if (null == l) return;
        function r() {
            e.style.width = `${l.clientWidth}px`;
        }
        r();
        let s = new ResizeObserver(r);
        return (s.observe(l), () => s.disconnect());
    }, [i, a, t, n]),
    !a || t || null == s)
        ? null
        : (0, eg.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: ea.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: ea.w4 }),
              }),
              document.body,
          );
}
var eE = n(651300);
function ex(e) {
    let { column: t, children: n, isPointerDragging: i, onElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, d] = (0, eE.H)({
            accept: eo,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && s(e.id, t, l);
            },
        }),
        c = r.useCallback(
            (e) => {
                ((u.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                d(u),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", { ref: c, className: ea.fi, children: n })
    );
}
function ep(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: s }, u] = (0, eE.H)({
            accept: eo,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                u(a),
                () => {
                    u(null);
                }
            ),
            [u],
        ),
        (0, l.jsx)("div", { ref: a, className: el()(ea.wr, { [ea.SX]: s }), "data-dnd-name": n })
    );
}
var eA = n(451395),
    e_ = n(42499),
    eC = n(539888);
function ev(e) {
    let {
            guildId: t,
            widget: n,
            column: a,
            positionNumber: s,
            columnWidgetCount: u,
            flatIndex: d,
            leftColumnCount: c,
            isKeyboardMode: o,
            onReorder: f,
            onDrop: g,
            onDragEnd: m,
            onSlotElement: h,
            isSaving: E,
            getDropLabel: x,
            onRemove: p,
            onCommitConfig: A,
            isSettling: _,
            onMotionEnd: v,
            isRemoving: I,
            isRemovalPending: y,
            onRemovalAnimationEnd: b,
        } = e,
        S = r.useRef(null),
        D = r.useRef(null),
        j = (0, i.bG)([C.A], () => (n.requires_hydration ? C.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        G = (0, e_.K)(t, n),
        { isDragging: T, dragSourcePosition: w } = (0, eA.gY)({
            dragRef: S,
            dropRef: D,
            index: d,
            listType: ec,
            itemType: ed,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => D.current },
            onDrop: (e) => g(e.id),
            onReorder: f,
            onEnd: (e, t) => m(e.id, t.didDrop()),
            canDrag: !E && !y,
        }),
        R = null == w ? null : w < c ? 0 : 1,
        L = null != R && R !== a,
        N = o && null != w && (L || w > d),
        P = o && null != w && !L && w < d,
        U = r.useCallback(
            (e) => {
                ((D.current = e), h(n.id, e));
            },
            [h, n.id],
        );
    return (0, l.jsx)("div", {
        ref: U,
        className: el()(ea.NI, { [ea.cB]: T, [ea.Ni]: _, [ea.kC]: I, [ea.ne]: N, [ea.O3]: P }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (I ? b(n.id) : _ && v(n.id));
        },
        "data-dnd-name": x(a, s, u),
        children: (0, l.jsx)(eC.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: j,
            lock: G,
            dragHandleRef: S,
            disabled: E,
            onRemove: () => p(n.id),
            onCommitConfig: A,
        }),
    });
}
var eI = n(55433);
function ey(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = X.intl.formatToPlainString(1 === t ? V.default.U0SqHk : V.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(U.B, {
        className: ea.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: X.intl.string(V.default["/OtM0k"]),
            }),
            (0, l.jsx)(k.$, {
                variant: "secondary",
                size: "sm",
                icon: M.T,
                text: X.intl.string(V.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eb = n(663341);
function eS(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = X.intl.formatToPlainString(1 === t ? V.default["h9P9H+"] : V.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(W.D, {
        className: el()(ea.kZ, { [ea.j2]: "before" === r, [ea.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: ea.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: ea.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eb.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function eD(e, t, n) {
    return X.intl.formatToPlainString(1 === e ? V.default.O9RvHQ : V.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function ej(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: a } = e,
        s = r.useMemo(() => (0, ei.Rl)(n), [n]),
        u = r.useMemo(
            () =>
                s.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eI.m[t];
                    }),
                ),
            [s],
        ),
        d = r.useMemo(() => [...u[0], ...u[1]], [u]),
        c = (0, eu.V)((e) =>
            e.isDragging() && e.getItemType() === eo
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        o = c.isDragging,
        f = c.isDragging ? c.widgetId : null,
        g = (0, er.VU)(),
        m = (0, i.bG)([$.Ay], () => $.Ay.useReducedMotion),
        h = (0, i.bG)([_.A], () => "saving" === _.A.getSaveStatus(t), [t]),
        E = o && !g,
        [x, p] = r.useState(null),
        C = x?.type === "removing" ? x.widgetId : null,
        v = null != C;
    r.useEffect(() => {
        m && x?.type === "settling" && p(null);
    }, [m, x]);
    let I = r.useCallback(
            (e, n, l) => {
                ((0, A.j0)(t, e, n, l), m || p({ type: "settling", widgetId: e }));
            },
            [t, m],
        ),
        {
            effectiveDestination: y,
            draggedLocation: b,
            getColumnElement: S,
            gridDropSurfaceRef: D,
            handleColumnHover: j,
            handleDragEnd: G,
            handleDrop: T,
            placeholderHeight: w,
            registerColumnElement: R,
            registerSlotElement: L,
            snapshotSlotRects: N,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    columns: a,
                    draftColumns: s,
                    draggedWidgetId: u,
                    isPointerDragging: d,
                    isKeyboardMode: c,
                    isSaving: o,
                    reduceMotion: f,
                    onMoveWidget: g,
                } = e,
                [m, h] = r.useState(null),
                E = r.useRef(null),
                x = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                _ = r.useRef([null, null]),
                C = r.useRef(new Map()),
                [v, I] = r.useState(null),
                { stopAutoScroll: y, updatePointerY: b } =
                    ((t = r.useRef(null)),
                    (n = r.useRef(null)),
                    (l = r.useCallback(() => {
                        (null != t.current && cancelAnimationFrame(t.current), (t.current = null), (n.current = null));
                    }, [])),
                    (i = r.useCallback(
                        (e) => {
                            ((n.current = e),
                                null == t.current &&
                                    (t.current = requestAnimationFrame(function e() {
                                        t.current = null;
                                        let l = n.current;
                                        if (null == l) return;
                                        let r = (function () {
                                                let e = A.current?.parentElement;
                                                for (; null != e;) {
                                                    let t = window.getComputedStyle(e).overflowY;
                                                    if ("auto" === t || "scroll" === t) return e;
                                                    e = e.parentElement;
                                                }
                                                return null;
                                            })(),
                                            i = r?.getBoundingClientRect(),
                                            a = i?.top ?? 0,
                                            s = i?.bottom ?? window.innerHeight,
                                            u = l - a < 96 ? -1 : +(s - l < 96);
                                        if (0 === u) return;
                                        let d = Math.ceil(24 * (1 - (u < 0 ? l - a : s - l) / 96));
                                        (null != r ? r.scrollBy({ top: u * d }) : window.scrollBy({ top: u * d }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [A],
                    )),
                    r.useEffect(() => l, [l]),
                    { stopAutoScroll: l, updatePointerY: i }),
                { clearSlotMotion: S, snapshotSlotRects: D } = (function (e) {
                    let { columns: t, pendingDestination: n, reduceMotion: l, slotElementsRef: i } = e,
                        a = r.useRef(new Map()),
                        s = r.useRef(new Map()),
                        u = r.useCallback(() => {
                            (s.current.forEach((e) => e.cancel()), s.current.clear());
                        }, []),
                        d = r.useCallback(() => {
                            (a.current.clear(), u());
                        }, [u]),
                        c = r.useCallback(
                            (e) => {
                                l ||
                                    (a.current.clear(),
                                    i.current.forEach((t, n) => {
                                        n !== e && a.current.set(n, t.getBoundingClientRect());
                                    }));
                            },
                            [l, i],
                        );
                    return (
                        r.useLayoutEffect(() => {
                            if (l) {
                                (a.current.clear(), u());
                                return;
                            }
                            let e = a.current;
                            0 !== e.size &&
                                (i.current.forEach((t, n) => {
                                    (s.current.get(n)?.cancel(), s.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let r = t.getBoundingClientRect(),
                                        i = l.left - r.left,
                                        a = l.top - r.top;
                                    if (1 > Math.abs(i) && 1 > Math.abs(a)) return;
                                    let u = t.animate(
                                        [{ transform: `translate(${i}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function d() {
                                        s.current.get(n) === u && s.current.delete(n);
                                    }
                                    (s.current.set(n, u), (u.onfinish = d), (u.oncancel = d));
                                }),
                                e.clear());
                        }, [u, t, n, l, i]),
                        r.useEffect(() => u, [u]),
                        { clearSlotMotion: d, snapshotSlotRects: c }
                    );
                })({ columns: a, pendingDestination: m, reduceMotion: f, slotElementsRef: C }),
                j = (() => {
                    if (null == u) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === u;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                G = d && m?.widgetId === u && (null == j || m.column !== j.column || m.index !== j.index) ? m : null,
                T = r.useCallback((e, t) => {
                    _.current[e] = t;
                }, []),
                w = r.useCallback((e) => _.current[e] ?? null, []),
                R = r.useCallback((e, t) => {
                    null == t ? C.current.delete(e) : C.current.set(e, t);
                }, []),
                L = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = _.current[0]?.getBoundingClientRect(),
                        r = _.current[1]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return 1 === t ? n > i + 32 : n < i - 32;
                }, []),
                N = r.useCallback(() => {
                    p.current = null;
                    let e = x.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), h(e));
                }, [D]),
                P = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        b(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !L(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((x.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == p.current && (p.current = requestAnimationFrame(N)));
                    },
                    [N, a, L, j?.column, o, b],
                ),
                U = r.useCallback(
                    (e, t, n) => {
                        let l =
                                a[t]?.filter((t) => {
                                    let { id: n } = t;
                                    return n !== e;
                                }) ?? [],
                            r = l.findIndex((e) => {
                                let { id: t } = e,
                                    l = C.current.get(t)?.getBoundingClientRect();
                                return null != l && n.y < l.top + l.height / 2;
                            });
                        P(e, t, -1 === r ? l.length : r, n);
                    },
                    [a, P],
                ),
                k = r.useCallback(
                    (e, t) => {
                        let n = 0,
                            l = 1 / 0;
                        (_.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                s = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                u = a * a + s * s;
                            u < l && ((n = r), (l = u));
                        }),
                            U(e, n, t));
                    },
                    [U],
                ),
                [, M] = (0, eE.H)({
                    accept: eo,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && k(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    M(A),
                    () => {
                        M(null);
                    }
                ),
                [M],
            );
            let O = r.useCallback((e) => {
                    let t = x.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                B = r.useCallback((e, t) => (0, ei.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                W = r.useCallback(() => {
                    (null != p.current && cancelAnimationFrame(p.current),
                        (p.current = null),
                        (x.current = null),
                        (E.current = null),
                        h(null),
                        I(null),
                        S(),
                        y());
                }, [S, y]),
                F = r.useCallback(() => d, [d]),
                H = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            g(e, n.column, B(e, n)),
                            W());
                    },
                    [W, j, O, B, c, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == u) return;
                    let e = C.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== v && I(t);
                }, [u, d, v]),
                r.useEffect(
                    () => () => {
                        null != p.current && cancelAnimationFrame(p.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: w,
                    gridDropSurfaceRef: A,
                    handleColumnHover: U,
                    handleDragEnd: H,
                    handleDrop: F,
                    placeholderHeight: v,
                    registerColumnElement: T,
                    registerSlotElement: R,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: u,
            draftColumns: s,
            draggedWidgetId: f,
            isPointerDragging: E,
            isKeyboardMode: g,
            isSaving: h,
            reduceMotion: m,
            onMoveWidget: I,
        }),
        P = r.useCallback((e) => {
            p((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        U = r.useCallback(
            (e) => {
                (p(null == e ? null : { type: "removing", widgetId: e }), a(null != e));
            },
            [a],
        ),
        k = r.useCallback(
            (e) => {
                C === e && (N(e), (0, A.GP)(t, e), U(null));
            },
            [t, C, U, N],
        ),
        M = r.useCallback(
            (e) => {
                if (!h && !v) {
                    if (m) {
                        (N(e), (0, A.GP)(t, e));
                        return;
                    }
                    U(e);
                }
            },
            [t, v, h, m, U, N],
        );
    (r.useLayoutEffect(() => {
        m && null != C && k(C);
    }, [k, m, C]),
        r.useEffect(() => () => a(!1), [a]));
    let O = r.useCallback(
            (e, n) => {
                let l = d[e],
                    r = d[n];
                null != l && null != r && (0, A.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, d],
        ),
        B = r.useCallback(
            (e, n) => {
                (0, A.j0)(t, e, n, s[n]?.length ?? 0);
            },
            [s, t],
        ),
        W = r.useCallback(
            (e, n) => {
                let l = (0, ei.O6)(s[e] ?? [], u[e] ?? [], n);
                Z(t, { column: e, index: l });
            },
            [u, s, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: D,
                className: ea.Z7,
                children: (0, l.jsx)("div", {
                    className: el()(ea.Vg, { [ea.nl]: E }),
                    children: u.map((e, n) =>
                        (0, l.jsxs)(
                            ex,
                            {
                                column: n,
                                isPointerDragging: E,
                                onElement: R,
                                onDragHover: j,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !o)
                                            return (0, l.jsx)(ey, { column: n, disabled: h || v, onInsert: W });
                                        let r =
                                            E && null != f
                                                ? e.filter((e) => {
                                                      let { id: t } = e;
                                                      return t !== f;
                                                  })
                                                : e;
                                        return (function (e, t, n) {
                                            let l = e.map((e) => ({ type: "widget", widget: e }));
                                            if (n?.column !== t) return l;
                                            let r = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === n.widgetId;
                                                }),
                                                i = -1 !== r && n.index > r ? n.index + 1 : n.index;
                                            return (l.splice(Math.min(i, l.length), 0, { type: "placeholder" }), l);
                                        })(e, n, y).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(es, { height: w }, "drag-placeholder");
                                            let { widget: a } = i,
                                                s = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                c =
                                                    -1 === s
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : s,
                                                f = d.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                E = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                p = !o && !h && !v;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: ea.O4,
                                                    children: [
                                                        p &&
                                                            (0, l.jsx)(eS, {
                                                                column: n,
                                                                index: E,
                                                                placement: "before",
                                                                onInsert: W,
                                                            }),
                                                        (0, l.jsx)(ev, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: c + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: f,
                                                            leftColumnCount: u[0].length,
                                                            isKeyboardMode: g,
                                                            isSaving: h,
                                                            getDropLabel: eD,
                                                            onReorder: O,
                                                            onDrop: T,
                                                            onDragEnd: G,
                                                            onSlotElement: L,
                                                            isSettling:
                                                                x?.type === "settling" &&
                                                                x.widgetId === a.id &&
                                                                !g &&
                                                                !m,
                                                            onMotionEnd: P,
                                                            isRemoving: C === a.id,
                                                            isRemovalPending: v,
                                                            onRemovalAnimationEnd: k,
                                                            onRemove: M,
                                                            onCommitConfig: (e) => (0, A.Vk)(t, a.id, e),
                                                        }),
                                                        p &&
                                                            E === e.length - 1 &&
                                                            (0, l.jsx)(eS, {
                                                                column: n,
                                                                index: e.length,
                                                                placement: "after",
                                                                onInsert: W,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    g &&
                                        o &&
                                        !h &&
                                        (0, l.jsx)(ep, {
                                            column: n,
                                            dndName: X.intl.string(1 === n ? V.default.fWef0G : V.default.KcdDyT),
                                            onDropAtEnd: B,
                                        }),
                                    E && (0, l.jsx)("div", { className: ea.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eh, { isKeyboardMode: g, targetColumn: y?.column ?? b?.column ?? null, getColumnElement: S }),
        ],
    });
}
var eG = n(529609),
    eT = n(191023),
    ew = n(408278),
    eR = n(241326),
    eL = n(297264),
    eN = n(22231),
    eP = n(654107),
    eU = n(548118),
    ek = n(837011),
    eM = n(649640),
    eO = n(2553),
    eB = n(405810),
    eW = n(498642),
    eF = n(486020),
    eH = n(488428),
    ez = n(776231),
    eK = n(968176),
    e$ = n(986898);
function eq(e) {
    let { guildId: t, header: n, canEdit: s, isEditing: u, isSaving: d } = e,
        c = (0, i.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, i.bG)([eW.A], () => eW.A.getOnlineCount(t), [t]),
        g = (0, i.bG)([eW.A], () => eW.A.getMemberCount(t), [t]),
        m = n.custom_banner,
        h = (0, i.bG)([ek.A], () => ek.A.getProfile(t), [t]),
        x = (0, eM.b2)().hex(),
        p = null == c ? null : eF.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        _ = (0, eP.Ay)(p, x),
        C = (0, eM.n6)(h?.brandColorPrimary ?? _),
        v = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof m
                      ? m
                      : void 0 === m && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eF.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = E.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, ez.kr)(1200 * (0, ez.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${eH.stringify(s)}`));
                          })(c.id, n.custom_banner_hash)
                        : eF.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, m, n.custom_banner_hash],
        ),
        I = "string" == typeof m || (void 0 === m && null != n.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: e$.wx,
              children: [
                  null != v
                      ? (0, l.jsx)("img", { className: e$.vK, src: v, alt: "" })
                      : (0, l.jsx)("div", { className: e$.vK, style: { background: C }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e$.f5, "aria-hidden": !0 }),
                  u
                      ? (0, l.jsxs)("div", {
                            className: e$.j0,
                            children: [
                                (0, l.jsx)(eB.A, {
                                    variant: "secondary",
                                    icon: eT.ImageIcon,
                                    size: "sm",
                                    text: X.intl.string(V.default["EN+0gW"]),
                                    onChange: (e) => (0, A.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eO.A)(0xa00000),
                                    disabled: d,
                                }),
                                I
                                    ? (0, l.jsx)(O.m, {
                                          text: X.intl.string(V.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(ew.K, {
                                              variant: "critical-secondary",
                                              size: "sm",
                                              icon: eR.TrashIcon,
                                              "aria-label": X.intl.string(V.default["CunK+J"]),
                                              onClick: () => (0, A.pC)(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e$.D_,
                      children: [
                          (0, l.jsx)(eU.Ay, {
                              className: e$.Kk,
                              guild: c,
                              size: eU.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e$.pq,
                              children: [
                                  (0, l.jsx)(eL.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e$.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: e$.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e$.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "text-xs/semibold",
                                                            color: "currentColor",
                                                            children: X.intl.format(V.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != g
                                              ? (0, l.jsxs)("div", {
                                                    className: e$.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e$.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "text-xs/semibold",
                                                            color: "currentColor",
                                                            children: X.intl.format(V.default["rp7bx+"], { count: g }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e$.dJ,
                                              children: [
                                                  (0, l.jsx)(H._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(a.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "currentColor",
                                                      children: X.intl.format(V.default.DwFqrb, {
                                                          count: c.premiumSubscriberCount,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
                  s &&
                      !u &&
                      (0, l.jsx)(k.$, {
                          icon: eN.PencilIcon,
                          text: X.intl.string(eK.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, A.Wd)(t),
                      }),
              ],
          });
}
var eV = n(554146),
    eX = n(942857),
    eY = n(131607),
    eJ = n(967198),
    eQ = n(725041),
    eZ = n(49999),
    e0 = n(312152);
function e1(e) {
    let t,
        { guildId: m } = e,
        h = r.useRef(null),
        [E, v] = r.useState(!1),
        [I, L, N] = (0, i.yK)([b.A], () => [b.A.getSpace(m), b.A.getFetchStatus(m), b.A.isInBackoff(m)], [m]);
    (r.useEffect(() => {
        let e = h.current !== m;
        ((h.current = m), (0, g.u_)(m, e));
    }, [L, m]),
        r.useEffect(() => {
            (0, d.L4)(m, !1, { respectBackoff: !0 });
        }, [m]),
        (t = (0, w.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = T.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === j.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, G._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let P = (0, i.bG)([f.A], () => f.A.getGuild(m), [m]),
        U = (0, D.mN)(P),
        k = (0, i.bG)([p.A], () => p.A.getFetchStatus(m), [m]);
    r.useEffect(() => {
        U && "idle" === k && x(m);
    }, [U, k, m]);
    let M = P?.guildSpaceSettings?.publish_status !== S.B.PUBLISHED,
        O = r.useCallback(() => (0, g.Wl)(m, { publish_status: S.B.PUBLISHED }), [m]),
        [B, W] = (0, i.yK)([_.A], () => [_.A.getDraft(m), _.A.getSaveStatus(m)], [m]),
        F = U && null != B;
    !(function (e, t) {
        let a = (0, K.useHasModalOpen)(eQ.J),
            s = (0, i.bG)([eJ.A], () => eJ.A.getGuildId()),
            u = (0, eX.A)(),
            [d, c] = (0, eY.kn)(t && s === e && !u ? [eV.M.GUILD_SPACE_NUX_MODAL] : [], eZ.m.GUILD_SPACE_NUX, !0),
            o = r.useRef(!1),
            f = d === eV.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, s]),
            r.useEffect(() => {
                !f ||
                    a ||
                    o.current ||
                    ((o.current = !0),
                    (0, K.openModalLazy)(
                        async () => {
                            let t = await Promise.resolve().then(n.bind(n, 725041));
                            return (n) =>
                                (0, l.jsx)(t.default, {
                                    guildId: e,
                                    markAsDismissed: c,
                                    transitionState: n.transitionState,
                                    onClose: n.onClose,
                                });
                        },
                        { modalKey: eQ.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, a, c, f]));
    })(m, U && !F && null != I);
    let H = F ? B.widgets : I?.widgets,
        z = r.useMemo(() => H?.some((e) => e.locked) ?? !1, [H]);
    r.useEffect(() => {
        U && z && ((0, c.AK)(m), (0, c.Xd)(m));
    }, [U, m, z]);
    let $ = (0, i.bG)(
        [o.A, p.A],
        () =>
            I?.widgets.some((e) => {
                let t = p.A.getWidget(m, e.type)?.powerup_sku_id;
                return e.locked && null != t && o.A.getStateForGuild(m)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [m, I],
    );
    (r.useEffect(() => {
        $ && (0, g.fi)(m);
    }, [m, $]),
        r.useEffect(() => {
            U || null == B || "saving" === W || (0, A.iX)(m);
        }, [U, B, W, m]));
    let q = r.useMemo(
            () =>
                (H ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [H],
        ),
        V = (0, i.yK)([C.A], () => C.A.getWidgetIdsToHydrate(m, q), [m, q]),
        Y = r.useRef(null);
    return (r.useEffect(() => {
        if (Y.current !== m && null != I) {
            ((Y.current = m), y(m, q, !0));
            return;
        }
        y(m, V);
    }, [m, I, q, V]),
    null == I || null == H)
        ? (0, l.jsx)("div", {
              className: e0.MY,
              children: (0, l.jsx)("div", {
                  className: e0.F,
                  children:
                      "error" !== L || N
                          ? (0, l.jsx)(s.y, { type: s.y.Type.SPINNING_CIRCLE, "aria-label": X.intl.string(X.t.ZTNur7) })
                          : (0, l.jsx)(a.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: X.intl.string(X.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: e0.MY,
              children: [
                  (0, l.jsx)(u.Ch, {
                      className: e0.XG,
                      children: (0, l.jsxs)("div", {
                          className: e0.Qs,
                          children: [
                              U && M ? (0, l.jsx)(R.A, { onPublish: O }) : null,
                              (0, l.jsx)(eq, {
                                  guildId: m,
                                  header: F ? B.header : I.header,
                                  isEditing: F,
                                  canEdit: U,
                                  isSaving: "saving" === W,
                              }),
                              F
                                  ? (0, l.jsx)(ej, { guildId: m, widgets: H, onRemovalPendingChange: v }, m)
                                  : (0, l.jsx)(eG.A, { canEdit: U, guildId: m, widgets: H }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(et, { guildId: m, isEditing: F, isRemovalPending: E }),
              ],
          });
}
