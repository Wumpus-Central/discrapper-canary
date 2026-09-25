(n.r(t), n.d(t, { default: () => e3 }));
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(834730),
    u = n(289873),
    s = n(689175),
    c = n(250527),
    d = n(868652),
    o = n(645619),
    f = n(71393),
    g = n(473953),
    m = n(636537),
    h = n(228366),
    E = n(652215);
async function p(e) {
    h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await m.Bo.get({ url: E.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        h.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var x = n(960960),
    A = n(202762),
    C = n(88592),
    _ = n(363957),
    v = n(513446);
let y = 0;
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = _.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = y++;
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
    k = n(331322),
    U = n(821609),
    M = n(499373),
    B = n(866665),
    O = n(189213),
    W = n(939249),
    H = n(245604),
    F = n(104510),
    q = n(661531),
    z = n(192308),
    K = n(775602),
    $ = n(855823),
    V = n(61567),
    X = n(375708),
    Y = n(517228);
function J(e) {
    let { widget: t, onClick: n } = e,
        r = (0, i.bG)([K.Ay], () => K.Ay.useReducedMotion),
        { catalog_image_static_url: u, catalog_image_animated_url: s } = t.assets,
        c = (r ? null : s) ?? u,
        d = t.boost_price;
    return (0, l.jsxs)(W.D, {
        className: Y.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: Y.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: Y.YI, src: c, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: Y.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: Y.Ti, children: (0, l.jsx)("div", { className: Y.dK }) }),
                            (0, l.jsxs)(k.B, {
                                className: Y.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(H.U, {}),
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
            (0, l.jsxs)(k.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(a.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != d && d > 0
                        ? (0, l.jsxs)(k.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(F._, { size: "sm", color: q.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: X.intl.format(V.default["8wD0Un"], { boostPrice: d }),
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
    let { guildId: t, insertionTarget: n, onAddWidget: a, ...u } = e,
        s = (0, i.yK)(
            [x.A, C.A],
            () => {
                let e = C.A.getDraft(t)?.widgets ?? [],
                    n = x.A.getWidgets(t) ?? [];
                return (0, $.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            p(t);
        }, [t]),
        (0, l.jsx)(O.a, {
            title: X.intl.string(V.default.L8Xfoo),
            subtitle: X.intl.string(V.default["N8nJ+T"]),
            actions: [],
            ...u,
            children: (0, l.jsx)("div", {
                className: Y.Vg,
                children: s.map((e) =>
                    (0, l.jsx)(
                        J,
                        {
                            widget: e,
                            onClick: () => {
                                (a(e, n), u.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function Z(e, t, n) {
    let r = (r) => (0, l.jsx)(Q, { guildId: e, insertionTarget: n, onAddWidget: t, ...r });
    (0, z.openModalLazy)(() => Promise.resolve(r), { modalKey: "guild-space-add-widget" });
}
let ee = r.createContext(null);
function et(e) {
    let { children: t } = e,
        n = r.useRef(null),
        i = r.useCallback((e, t) => {
            n.current?.(e, t);
        }, []),
        a = r.useCallback(
            (e) => (
                (n.current = e),
                () => {
                    n.current === e && (n.current = null);
                }
            ),
            [],
        ),
        u = r.useMemo(() => ({ addWidget: i, registerAddWidgetHandler: a }), [i, a]);
    return (0, l.jsx)(ee.Provider, { value: u, children: t });
}
function en() {
    let e = r.useContext(ee);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var el = n(992303);
function er(e) {
    let { guildId: t, isEditing: n, isRemovalPending: u } = e,
        { addWidget: s } = en(),
        c = (0, i.bG)([C.A], () => C.A.getSaveStatus(t), [t]),
        d = (0, i.bG)([C.A], () => C.A.getDraft(t)?.widgets.length ?? 0, [t]),
        o = (0, i.bG)([C.A], () => C.A.getSaveErrorMessage(t), [t]),
        f = "saving" === c,
        g = f || u,
        m = o ?? X.intl.string(V.default.HmFYc5),
        h = r.useCallback(() => {
            g || (0, A.Fj)(t);
        }, [t, g]),
        E = r.useCallback(() => {
            (0, A.iX)(t);
        }, [t]);
    return (0, l.jsx)(L.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(P.F, {
                className: el.K,
                children: (0, l.jsx)(N.A, {
                    submitting: f,
                    disabled: g,
                    onSave: h,
                    onReset: g ? void 0 : E,
                    message: (0, l.jsxs)(k.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(U.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: M.T,
                                text: X.intl.string(V.default.L8Xfoo),
                                disabled: g,
                                onClick: () => Z(t, s),
                            }),
                            "error" === c
                                ? (0, l.jsx)(B.m, {
                                      text: m,
                                      children: (0, l.jsx)(a.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: m,
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
var ei = n(503698),
    ea = n.n(ei),
    eu = n(425763),
    es = n(754674),
    ec = n(294918);
function ed(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: ec.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eo = n(686246);
let ef = "GUILD_SPACE_WIDGET",
    eg = "GUILD_SPACE_WIDGETS",
    em = `${ef}_${eg}`;
var eh = n(225995),
    eE = n(333007);
let ep = "canvas, iframe, video";
function ex(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: u } = (0, eo.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === em,
            item: e.getItem(),
        })),
        s = (0, eh.u)(),
        c = r.useRef(null),
        d = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = c.current;
        if (!a || t || null == e) return;
        let n = s.getMonitor();
        function l() {
            let t = n.getSourceClientOffset();
            if (null == t) {
                e.style.visibility = "hidden";
                return;
            }
            ((e.style.transform = `translate3d(${t.x}px, ${t.y}px, 0)`), (e.style.visibility = "visible"));
        }
        return (l(), n.subscribeToOffsetChange(l));
    }, [s, a, t]),
    r.useLayoutEffect(() => {
        let e = d.current,
            n = c.current,
            l = a ? u?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(ep);
        return (
            r.querySelectorAll(ep).forEach((e, t) => {
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
            r.classList.remove(ec.cB, ec.Ni),
            r.removeAttribute("data-dnd-name"),
            r.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")),
            r.setAttribute("aria-hidden", "true"),
            (r.inert = !0),
            e.replaceChildren(r),
            () => e.replaceChildren()
        );
    }, [a, t, u]),
    r.useLayoutEffect(() => {
        let e = c.current;
        if (!a || t || null == e || null == n) return;
        let l = i(n);
        if (null == l) return;
        function r() {
            e.style.width = `${l.clientWidth}px`;
        }
        r();
        let u = new ResizeObserver(r);
        return (u.observe(l), () => u.disconnect());
    }, [i, a, t, n]),
    !a || t || null == u)
        ? null
        : (0, eE.createPortal)(
              (0, l.jsx)("div", {
                  ref: c,
                  className: ec.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: d, className: ec.w4 }),
              }),
              document.body,
          );
}
var eA = n(651300);
function eC(e) {
    let { column: t, children: n, isPointerDragging: i, registerColumnElement: a, onDragHover: u } = e,
        s = r.useRef(null),
        [, c] = (0, eA.H)({
            accept: em,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && u(e.id, t, l);
            },
        }),
        d = r.useCallback(
            (e) => {
                ((s.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                c(s),
                () => {
                    c(null);
                }
            ),
            [c],
        ),
        (0, l.jsx)("div", { ref: d, className: ec.fi, children: n })
    );
}
function e_(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: u }, s] = (0, eA.H)({
            accept: em,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                s(a),
                () => {
                    s(null);
                }
            ),
            [s],
        ),
        (0, l.jsx)("div", { ref: a, className: ea()(ec.wr, { [ec.SX]: u }), "data-dnd-name": n })
    );
}
var ev = n(451395),
    ey = n(42499),
    eI = n(539888);
function eb(e) {
    let {
            guildId: t,
            widget: n,
            column: a,
            positionNumber: u,
            columnWidgetCount: s,
            flatIndex: c,
            leftColumnCount: d,
            isKeyboardMode: o,
            onReorder: f,
            onDrop: g,
            onDragEnd: m,
            registerSlotElement: h,
            isSaving: E,
            getDropLabel: p,
            onRemove: x,
            onCommitConfig: A,
            isSettling: C,
            onMotionEnd: v,
            isEntrancePreparing: y,
            isEntering: I,
            onEntranceAnimationEnd: b,
            isRemoving: S,
            isRemovalPending: D,
            onRemovalAnimationEnd: j,
        } = e,
        G = r.useRef(null),
        T = r.useRef(null),
        w = (0, i.bG)([_.A], () => (n.requires_hydration ? _.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        R = (0, ey.K)(t, n),
        { isDragging: L, dragSourcePosition: N } = (0, ev.gY)({
            dragRef: G,
            dropRef: T,
            index: c,
            listType: eg,
            itemType: ef,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => T.current },
            onDrop: (e) => g(e.id),
            onReorder: f,
            onEnd: (e, t) => m(e.id, t.didDrop()),
            canDrag: !E && !D,
        }),
        P = null == N ? null : N < d ? 0 : 1,
        k = null != P && P !== a,
        U = o && null != N && (k || N > c),
        M = o && null != N && !k && N < c,
        B = r.useCallback(
            (e) => {
                ((T.current = e), h(n.id, e));
            },
            [h, n.id],
        );
    return (0, l.jsxs)("div", {
        ref: B,
        className: ea()(ec.NI, { [ec.cB]: L, [ec.Ni]: C, [ec.fJ]: y, [ec.Hu]: I, [ec.kC]: S, [ec.ne]: U, [ec.O3]: M }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (S ? j(n.id) : C ? v(n.id) : I && b(n.id));
        },
        "data-dnd-name": p(a, u, s),
        children: [
            I &&
                (0, l.jsx)("div", {
                    className: ec.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: ec.te }),
                }),
            (0, l.jsx)(eI.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: w,
                lock: R,
                dragHandleRef: G,
                disabled: E,
                onRemove: () => x(n.id),
                onCommitConfig: A,
            }),
        ],
    });
}
function eS(e, t, n, l) {
    let r = t.current?.getScrollerNode();
    if (null == r) return void l();
    let i = e.getBoundingClientRect(),
        a = r.getBoundingClientRect(),
        u = Math.max(
            0,
            Math.min(i.top - a.top + r.scrollTop - (r.clientHeight - i.height) / 2, r.scrollHeight - r.clientHeight),
        );
    if (n || 1 > Math.abs(r.scrollTop - u)) {
        ((r.scrollTop = u), l());
        return;
    }
    (r.addEventListener("scrollend", l, { once: !0 }), r.scrollTo({ top: u, behavior: "smooth" }));
}
var eD = n(55433);
function ej(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = X.intl.formatToPlainString(1 === t ? V.default.U0SqHk : V.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(k.B, {
        className: ec.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: X.intl.string(V.default["/OtM0k"]),
            }),
            (0, l.jsx)(U.$, {
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
var eG = n(663341);
function eT(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = X.intl.formatToPlainString(1 === t ? V.default["h9P9H+"] : V.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(W.D, {
        className: ea()(ec.kZ, { [ec.j2]: "before" === r, [ec.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: ec.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: ec.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eG.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function ew(e, t, n) {
    return X.intl.formatToPlainString(1 === e ? V.default.O9RvHQ : V.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eR(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: a, scrollerRef: u } = e,
        s = r.useMemo(() => (0, es.Rl)(n), [n]),
        c = r.useMemo(
            () =>
                s.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eD.m[t];
                    }),
                ),
            [s],
        ),
        d = r.useMemo(() => [...c[0], ...c[1]], [c]),
        o = (0, eo.V)((e) =>
            e.isDragging() && e.getItemType() === em
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        f = o.isDragging,
        g = o.isDragging ? o.widgetId : null,
        m = (0, eu.VU)(),
        h = (0, i.bG)([K.Ay], () => K.Ay.useReducedMotion),
        E = (0, i.bG)([C.A], () => "saving" === C.A.getSaveStatus(t), [t]),
        p = f && !m,
        [x, _] = r.useState(null),
        v = x?.type === "removing" ? x.widgetId : null,
        y = null != v;
    r.useLayoutEffect(() => {
        h && x?.type === "settling" && _(null);
    }, [h, x]);
    let I = r.useCallback(
            (e, n, l) => {
                ((0, A.j0)(t, e, n, l), h || _({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: b,
            draggedLocation: S,
            getColumnElement: D,
            getSlotElement: j,
            gridDropSurfaceRef: G,
            handleColumnHover: T,
            handleDragEnd: w,
            canAcceptPointerDrop: R,
            placeholderHeight: L,
            registerColumnElement: N,
            registerSlotElement: P,
            snapshotSlotRects: k,
        } = (function (e) {
            let t,
                n,
                l,
                i,
                {
                    columns: a,
                    draftColumns: u,
                    draggedWidgetId: s,
                    isPointerDragging: c,
                    isKeyboardMode: d,
                    isSaving: o,
                    reduceMotion: f,
                    onMoveWidget: g,
                } = e,
                [m, h] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                x = r.useRef(null),
                A = r.useRef(null),
                C = r.useRef([null, null]),
                _ = r.useRef(new Map()),
                [v, y] = r.useState(null),
                { stopAutoScroll: I, updatePointerY: b } =
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
                                            u = i?.bottom ?? window.innerHeight,
                                            s = l - a < 96 ? -1 : +(u - l < 96);
                                        if (0 === s) return;
                                        let c = Math.ceil(24 * (1 - (s < 0 ? l - a : u - l) / 96));
                                        (null != r ? r.scrollBy({ top: s * c }) : window.scrollBy({ top: s * c }),
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
                        u = r.useRef(new Map()),
                        s = r.useCallback(() => {
                            (u.current.forEach((e) => e.cancel()), u.current.clear());
                        }, []),
                        c = r.useCallback(() => {
                            (a.current.clear(), s());
                        }, [s]),
                        d = r.useCallback(
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
                                (a.current.clear(), s());
                                return;
                            }
                            let e = a.current;
                            0 !== e.size &&
                                (i.current.forEach((t, n) => {
                                    (u.current.get(n)?.cancel(), u.current.delete(n));
                                    let l = e.get(n);
                                    if (null == l) return;
                                    let r = t.getBoundingClientRect(),
                                        i = l.left - r.left,
                                        a = l.top - r.top;
                                    if (1 > Math.abs(i) && 1 > Math.abs(a)) return;
                                    let s = t.animate(
                                        [{ transform: `translate(${i}px, ${a}px)` }, { transform: "translate(0, 0)" }],
                                        { duration: 140, easing: "cubic-bezier(0.2, 0, 0, 1)" },
                                    );
                                    function c() {
                                        u.current.get(n) === s && u.current.delete(n);
                                    }
                                    (u.current.set(n, s), (s.onfinish = c), (s.oncancel = c));
                                }),
                                e.clear());
                        }, [s, t, n, l, i]),
                        r.useEffect(() => s, [s]),
                        { clearSlotMotion: c, snapshotSlotRects: d }
                    );
                })({ columns: a, pendingDestination: m, reduceMotion: f, slotElementsRef: _ }),
                j = (() => {
                    if (null == s) return null;
                    for (let [e, t] of a.entries()) {
                        let n = t.findIndex((e) => {
                            let { id: t } = e;
                            return t === s;
                        });
                        if (-1 !== n) return { column: e, index: n };
                    }
                    return null;
                })(),
                G = c && m?.widgetId === s && (null == j || m.column !== j.column || m.index !== j.index) ? m : null,
                T = r.useCallback((e, t) => {
                    C.current[e] = t;
                }, []),
                w = r.useCallback((e) => C.current[e] ?? null, []),
                R = r.useCallback((e, t) => {
                    null == t ? _.current.delete(e) : _.current.set(e, t);
                }, []),
                L = r.useCallback((e) => _.current.get(e) ?? null, []),
                N = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = C.current[0]?.getBoundingClientRect(),
                        r = C.current[1]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return 1 === t ? n > i + 32 : n < i - 32;
                }, []),
                P = r.useCallback(() => {
                    x.current = null;
                    let e = p.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), h(e));
                }, [D]),
                k = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        b(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !N(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == x.current && (x.current = requestAnimationFrame(P)));
                    },
                    [P, a, N, j?.column, o, b],
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
                                    l = _.current.get(t)?.getBoundingClientRect();
                                return null != l && n.y < l.top + l.height / 2;
                            });
                        k(e, t, -1 === r ? l.length : r, n);
                    },
                    [a, k],
                ),
                M = r.useCallback(
                    (e, t) => {
                        let n = 0,
                            l = 1 / 0;
                        (C.current.forEach((e, r) => {
                            if (null == e) return;
                            let i = e.getBoundingClientRect(),
                                a = t.x < i.left ? i.left - t.x : Math.max(0, t.x - i.right),
                                u = t.y < i.top ? i.top - t.y : Math.max(0, t.y - i.bottom),
                                s = a * a + u * u;
                            s < l && ((n = r), (l = s));
                        }),
                            U(e, n, t));
                    },
                    [U],
                ),
                [, B] = (0, eA.H)({
                    accept: em,
                    canDrop: () => c,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!c || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && M(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    B(A),
                    () => {
                        B(null);
                    }
                ),
                [B],
            );
            let O = r.useCallback((e) => {
                    let t = p.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                W = r.useCallback((e, t) => (0, es.O6)(u[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, u]),
                H = r.useCallback(() => {
                    (null != x.current && cancelAnimationFrame(x.current),
                        (x.current = null),
                        (p.current = null),
                        (E.current = null),
                        h(null),
                        y(null),
                        S(),
                        I());
                }, [S, I]),
                F = r.useCallback(() => c, [c]),
                q = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !d &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            g(e, n.column, W(e, n)),
                            H());
                    },
                    [H, j, O, W, d, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!c || null == s) return;
                    let e = _.current.get(s);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== v && y(t);
                }, [s, c, v]),
                r.useEffect(
                    () => () => {
                        null != x.current && cancelAnimationFrame(x.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: w,
                    getSlotElement: L,
                    gridDropSurfaceRef: A,
                    handleColumnHover: U,
                    handleDragEnd: q,
                    canAcceptPointerDrop: F,
                    placeholderHeight: v,
                    registerColumnElement: T,
                    registerSlotElement: R,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: c,
            draftColumns: s,
            draggedWidgetId: g,
            isPointerDragging: p,
            isKeyboardMode: m,
            isSaving: E,
            reduceMotion: h,
            onMoveWidget: I,
        }),
        {
            clearWidgetEntrance: U,
            handleAddWidget: M,
            isEntrancePreparing: B,
            isEntering: O,
        } = (function (e) {
            let {
                    guildId: t,
                    widgets: n,
                    isSaving: l,
                    isDraggingWidget: i,
                    isRemovalPending: a,
                    reduceMotion: u,
                    scrollerRef: s,
                    snapshotSlotRects: c,
                    getSlotElement: d,
                } = e,
                { registerAddWidgetHandler: o } = en(),
                [f, g] = r.useState(() => new Map()),
                m = r.useRef(null),
                [h, E] = r.useState(0),
                p = r.useCallback((e) => {
                    g((t) => {
                        if (!t.has(e)) return t;
                        let n = new Map(t);
                        return (n.delete(e), n);
                    });
                }, []),
                x = r.useCallback(
                    (e, n) => {
                        l ||
                            i ||
                            a ||
                            ((m.current = null),
                            c(),
                            (m.current = (0, A.lr)(t, e.type, e.name, e.locked, n)),
                            E((e) => e + 1));
                    },
                    [t, i, a, l, c],
                );
            return (
                r.useLayoutEffect(() => o(x), [x, o]),
                r.useLayoutEffect(() => {
                    let e = m.current;
                    if (null == e) return;
                    let t = n.find((t) => {
                            let { id: n } = t;
                            return n === e;
                        }),
                        l = null == t ? null : d(t.id);
                    if (null == t || null == l) {
                        m.current = null;
                        return;
                    }
                    ((m.current = null), u)
                        ? eS(l, s, !0, () => void 0)
                        : (g((e) => new Map(e).set(t.id, "preparing")),
                          eS(l, s, !1, () => {
                              l.isConnected &&
                                  g((e) => ("preparing" !== e.get(t.id) ? e : new Map(e).set(t.id, "playing")));
                          }));
                }, [d, h, u, s, n]),
                {
                    clearWidgetEntrance: p,
                    handleAddWidget: x,
                    isEntrancePreparing: (e) => "preparing" === f.get(e),
                    isEntering: (e) => "playing" === f.get(e),
                }
            );
        })({
            guildId: t,
            widgets: n,
            isSaving: E,
            isDraggingWidget: f,
            isRemovalPending: y,
            reduceMotion: h,
            scrollerRef: u,
            snapshotSlotRects: k,
            getSlotElement: j,
        }),
        W = r.useCallback((e) => {
            _((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        H = r.useCallback(
            (e) => {
                (_(null == e ? null : { type: "removing", widgetId: e }), a(null != e));
            },
            [a],
        ),
        F = r.useCallback(
            (e) => {
                v === e && (k(e), (0, A.GP)(t, e), H(null));
            },
            [t, v, H, k],
        ),
        q = r.useCallback(
            (e) => {
                if (!E && !y) {
                    if ((U(e), h)) {
                        (k(e), (0, A.GP)(t, e));
                        return;
                    }
                    H(e);
                }
            },
            [U, t, y, E, h, H, k],
        );
    (r.useLayoutEffect(() => {
        h && null != v && F(v);
    }, [F, h, v]),
        r.useEffect(() => () => a(!1), [a]));
    let z = r.useCallback(
            (e, n) => {
                let l = d[e],
                    r = d[n];
                null != l && null != r && (0, A.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, d],
        ),
        $ = r.useCallback(
            (e, n) => {
                (0, A.j0)(t, e, n, s[n]?.length ?? 0);
            },
            [s, t],
        ),
        Y = r.useCallback(
            (e, n) => {
                let l = (0, es.O6)(s[e] ?? [], c[e] ?? [], n);
                Z(t, M, { column: e, index: l });
            },
            [c, s, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: G,
                className: ec.Z7,
                children: (0, l.jsx)("div", {
                    className: ea()(ec.Vg, { [ec.nl]: p }),
                    children: c.map((e, n) =>
                        (0, l.jsxs)(
                            eC,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: N,
                                onDragHover: T,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !f)
                                            return (0, l.jsx)(ej, { column: n, disabled: E || y, onInsert: Y });
                                        let r =
                                            p && null != g
                                                ? e.filter((e) => {
                                                      let { id: t } = e;
                                                      return t !== g;
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
                                        })(e, n, b).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(ed, { height: L }, "drag-placeholder");
                                            let { widget: a } = i,
                                                u = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                s =
                                                    -1 === u
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : u,
                                                o = d.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                g = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                h = !f && !E && !y;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: ec.O4,
                                                    children: [
                                                        h &&
                                                            (0, l.jsx)(eT, {
                                                                column: n,
                                                                index: g,
                                                                placement: "before",
                                                                onInsert: Y,
                                                            }),
                                                        (0, l.jsx)(eb, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: s + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: c[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: ew,
                                                            onReorder: z,
                                                            onDrop: R,
                                                            onDragEnd: w,
                                                            registerSlotElement: P,
                                                            isSettling:
                                                                x?.type === "settling" && x.widgetId === a.id && !m,
                                                            onMotionEnd: W,
                                                            isEntrancePreparing: B(a.id),
                                                            isEntering: O(a.id),
                                                            onEntranceAnimationEnd: U,
                                                            isRemoving: v === a.id,
                                                            isRemovalPending: y,
                                                            onRemovalAnimationEnd: F,
                                                            onRemove: q,
                                                            onCommitConfig: (e) => (0, A.Vk)(t, a.id, e),
                                                        }),
                                                        h &&
                                                            g === e.length - 1 &&
                                                            (0, l.jsx)(eT, {
                                                                column: n,
                                                                index: e.length,
                                                                placement: "after",
                                                                onInsert: Y,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    m &&
                                        f &&
                                        !E &&
                                        (0, l.jsx)(e_, {
                                            column: n,
                                            dndName: X.intl.string(1 === n ? V.default.fWef0G : V.default.KcdDyT),
                                            onDropAtEnd: $,
                                        }),
                                    p && (0, l.jsx)("div", { className: ec.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(ex, { isKeyboardMode: m, targetColumn: b?.column ?? S?.column ?? null, getColumnElement: D }),
        ],
    });
}
var eL = n(529609),
    eN = n(191023),
    eP = n(408278),
    ek = n(241326),
    eU = n(297264),
    eM = n(22231),
    eB = n(654107),
    eO = n(548118),
    eW = n(837011),
    eH = n(649640),
    eF = n(2553),
    eq = n(405810),
    ez = n(498642),
    eK = n(486020),
    e$ = n(488428),
    eV = n(776231),
    eX = n(968176),
    eY = n(986898);
function eJ(e) {
    let { guildId: t, header: n, canEdit: u, isEditing: s, isSaving: c } = e,
        d = (0, i.bG)([f.A], () => f.A.getGuild(t), [t]),
        o = (0, i.bG)([ez.A], () => ez.A.getOnlineCount(t), [t]),
        g = (0, i.bG)([ez.A], () => ez.A.getMemberCount(t), [t]),
        m = n.custom_banner,
        h = (0, i.bG)([eW.A], () => eW.A.getProfile(t), [t]),
        p = (0, eH.b2)().hex(),
        x = null == d ? null : eK.Ay.getGuildIconURL({ id: d.id, icon: d.icon, size: 64 }),
        C = (0, eB.Ay)(x, p),
        _ = (0, eH.n6)(h?.brandColorPrimary ?? C),
        v = r.useMemo(
            () =>
                null == d
                    ? null
                    : "string" == typeof m
                      ? m
                      : void 0 === m && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eK.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = E.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  u = { size: (0, eV.kr)(1200 * (0, eV.mZ)()) };
                              return ("jpg" === n && (u.quality = "lossless"), (a += `?${e$.stringify(u)}`));
                          })(d.id, n.custom_banner_hash)
                        : eK.Ay.getGuildBannerURL({ id: d.id, banner: d.banner }),
            [d, m, n.custom_banner_hash],
        ),
        y = "string" == typeof m || (void 0 === m && null != n.custom_banner_hash);
    return null == d
        ? null
        : (0, l.jsxs)("div", {
              className: eY.wx,
              children: [
                  null != v
                      ? (0, l.jsx)("img", { className: eY.vK, src: v, alt: "" })
                      : (0, l.jsx)("div", { className: eY.vK, style: { background: _ }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eY.f5, "aria-hidden": !0 }),
                  s
                      ? (0, l.jsxs)("div", {
                            className: eY.j0,
                            children: [
                                (0, l.jsx)(eq.A, {
                                    variant: "secondary",
                                    icon: eN.ImageIcon,
                                    size: "sm",
                                    text: X.intl.string(V.default["EN+0gW"]),
                                    onChange: (e) => (0, A.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eF.A)(0xa00000),
                                    disabled: c,
                                }),
                                y
                                    ? (0, l.jsx)(B.m, {
                                          text: X.intl.string(V.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eP.K, {
                                              variant: "critical-secondary",
                                              size: "sm",
                                              icon: ek.TrashIcon,
                                              "aria-label": X.intl.string(V.default["CunK+J"]),
                                              onClick: () => (0, A.pC)(t, null),
                                              disabled: c,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eY.D_,
                      children: [
                          (0, l.jsx)(eO.Ay, {
                              className: eY.Kk,
                              guild: d,
                              size: eO.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eY.pq,
                              children: [
                                  (0, l.jsx)(eU.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: d.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eY.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.RS, "aria-hidden": !0 }),
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
                                                    className: eY.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eY.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "text-xs/semibold",
                                                            color: "currentColor",
                                                            children: X.intl.format(V.default["rp7bx+"], { count: g }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eY.dJ,
                                              children: [
                                                  (0, l.jsx)(F._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(a.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "currentColor",
                                                      children: X.intl.format(V.default.DwFqrb, {
                                                          count: d.premiumSubscriberCount,
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
                  u &&
                      !s &&
                      (0, l.jsx)(U.$, {
                          icon: eM.PencilIcon,
                          text: X.intl.string(eX.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, A.Wd)(t),
                      }),
              ],
          });
}
var eQ = n(554146),
    eZ = n(942857),
    e0 = n(131607),
    e1 = n(967198),
    e2 = n(725041),
    e6 = n(49999),
    e8 = n(312152);
function e3(e) {
    let t,
        { guildId: m } = e,
        h = r.useRef(null),
        E = r.useRef(null),
        [v, y] = r.useState(!1),
        [L, N, P] = (0, i.yK)([b.A], () => [b.A.getSpace(m), b.A.getFetchStatus(m), b.A.isInBackoff(m)], [m]);
    (r.useEffect(() => {
        let e = h.current !== m;
        ((h.current = m), ("idle" === N || e) && (0, g.u)(m, { shouldRefetch: e }));
    }, [N, m]),
        r.useEffect(() => {
            (0, c.L4)(m, !1, { respectBackoff: !0 });
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
    let k = (0, i.bG)([f.A], () => f.A.getGuild(m), [m]),
        U = (0, D.mN)(k),
        M = (0, i.bG)([x.A], () => x.A.getFetchStatus(m), [m]);
    r.useEffect(() => {
        U && "idle" === M && p(m);
    }, [U, M, m]);
    let B = k?.guildSpaceSettings?.publish_status !== S.B.PUBLISHED,
        O = r.useCallback(() => (0, g.W)(m, { publish_status: S.B.PUBLISHED }), [m]),
        [W, H] = (0, i.yK)([C.A], () => [C.A.getDraft(m), C.A.getSaveStatus(m)], [m]),
        F = U && null != W;
    !(function (e, t) {
        let a = (0, z.useHasModalOpen)(e2.J),
            u = (0, i.bG)([e1.A], () => e1.A.getGuildId()),
            s = (0, eZ.A)(),
            [c, d] = (0, e0.kn)(t && u === e && !s ? [eQ.M.GUILD_SPACE_NUX_MODAL] : [], e6.m.GUILD_SPACE_NUX, !0),
            o = r.useRef(!1),
            f = c === eQ.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, u]),
            r.useEffect(() => {
                !f ||
                    a ||
                    o.current ||
                    ((o.current = !0),
                    (0, z.openModalLazy)(
                        async () => {
                            let t = await Promise.resolve().then(n.bind(n, 725041));
                            return (n) =>
                                (0, l.jsx)(t.default, {
                                    guildId: e,
                                    markAsDismissed: d,
                                    transitionState: n.transitionState,
                                    onClose: n.onClose,
                                });
                        },
                        { modalKey: e2.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, a, d, f]));
    })(m, U && !F && null != L);
    let q = F ? W.widgets : L?.widgets,
        K = r.useMemo(() => q?.some((e) => e.locked) ?? !1, [q]);
    r.useEffect(() => {
        U && K && ((0, d.AK)(m), (0, d.Xd)(m));
    }, [U, m, K]);
    let $ = (0, i.bG)(
        [o.A, x.A],
        () =>
            L?.widgets.some((e) => {
                let t = x.A.getWidget(m, e.type)?.powerup_sku_id;
                return e.locked && null != t && o.A.getStateForGuild(m)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [m, L],
    );
    (r.useEffect(() => {
        $ && (0, g.u)(m, { shouldRefetch: !0 });
    }, [m, $]),
        r.useEffect(() => {
            U || null == W || "saving" === H || (0, A.iX)(m);
        }, [U, W, H, m]));
    let V = r.useMemo(
            () =>
                (q ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [q],
        ),
        Y = (0, i.yK)([_.A], () => _.A.getWidgetIdsToHydrate(m, V), [m, V]),
        J = r.useRef(null);
    return (r.useEffect(() => {
        if (J.current !== m && null != L) {
            ((J.current = m), I(m, V, !0));
            return;
        }
        I(m, Y);
    }, [m, L, V, Y]),
    null == L || null == q)
        ? (0, l.jsx)("div", {
              className: e8.MY,
              children: (0, l.jsx)("div", {
                  className: e8.F,
                  children:
                      "error" !== N || P
                          ? (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": X.intl.string(X.t.ZTNur7) })
                          : (0, l.jsx)(a.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: X.intl.string(X.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(et, {
              children: (0, l.jsxs)("div", {
                  className: e8.MY,
                  children: [
                      (0, l.jsx)(s.Ch, {
                          ref: E,
                          className: e8.XG,
                          children: (0, l.jsxs)("div", {
                              className: e8.Qs,
                              children: [
                                  U && B ? (0, l.jsx)(R.A, { onPublish: O }) : null,
                                  (0, l.jsx)(eJ, {
                                      guildId: m,
                                      header: F ? W.header : L.header,
                                      isEditing: F,
                                      canEdit: U,
                                      isSaving: "saving" === H,
                                  }),
                                  F
                                      ? (0, l.jsx)(
                                            eR,
                                            { guildId: m, widgets: q, onRemovalPendingChange: y, scrollerRef: E },
                                            m,
                                        )
                                      : (0, l.jsx)(eL.A, { canEdit: U, guildId: m, widgets: q }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(er, { guildId: m, isEditing: F, isRemovalPending: v }),
                  ],
              }),
          });
}
