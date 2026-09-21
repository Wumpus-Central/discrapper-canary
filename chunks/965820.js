(n.r(t), n.d(t, { default: () => eZ }));
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    u = n(834730),
    d = n(289873),
    c = n(689175),
    o = n(250527),
    f = n(868652),
    g = n(645619),
    m = n(71393),
    h = n(473953),
    E = n(636537),
    x = n(228366),
    p = n(652215);
async function A(e) {
    x.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await E.Bo.get({ url: p.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        x.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        x.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var _ = n(960960),
    C = n(202762),
    v = n(88592),
    I = n(363957),
    y = n(513446);
let b = 0;
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && x.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = I.A.getWidgetIdsToHydrate(e, t);
    if (0 === l.length) return;
    let r = b++;
    x.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await E.Bo.get({
            url: p.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        x.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        x.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, y.a)(t) });
    }
}
var D = n(716357),
    j = n(593673),
    G = n(313627),
    T = n(344351),
    w = n(795816),
    R = n(933958),
    L = n(44167),
    N = n(872188),
    P = n(868285),
    U = n(36525),
    k = n(871682),
    M = n(331322),
    O = n(821609),
    B = n(499373),
    W = n(866665),
    F = n(189213),
    H = n(939249),
    K = n(104510),
    z = n(661531),
    $ = n(245604),
    q = n(192308),
    V = n(775602),
    X = n(855823),
    Y = n(61567),
    J = n(375708),
    Q = n(517228);
function Z(e) {
    let { widget: t, onClick: n } = e,
        r = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: a } = t.assets,
        d = (r ? null : a) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(H.D, {
        className: Q.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: Q.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: Q.YI, src: d, alt: "" }),
                    t.locked &&
                        (0, l.jsx)("div", {
                            className: Q.AA,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(K._, { size: "sm", color: z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                        }),
                    (0, l.jsxs)("div", {
                        className: Q.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: Q.Ti, children: (0, l.jsx)("div", { className: Q.dK }) }),
                            (0, l.jsxs)(M.B, {
                                className: Q.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)($.U, {}),
                                    (0, l.jsx)(u.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: J.intl.string(Y.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(M.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(u.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(M.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(K._, { size: "sm", color: z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: J.intl.format(Y.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: J.intl.string(Y.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { guildId: t, insertionTarget: n, ...i } = e,
        a = (0, s.yK)(
            [_.A, v.A],
            () => {
                let e = v.A.getDraft(t)?.widgets ?? [],
                    n = _.A.getWidgets(t) ?? [];
                return (0, X.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            A(t);
        }, [t]),
        (0, l.jsx)(F.Modal, {
            title: J.intl.string(Y.default.L8Xfoo),
            subtitle: J.intl.string(Y.default["N8nJ+T"]),
            actions: [],
            ...i,
            children: (0, l.jsx)("div", {
                className: Q.Vg,
                children: a.map((e) =>
                    (0, l.jsx)(
                        Z,
                        {
                            widget: e,
                            onClick: () => {
                                ((0, C.lr)(t, e.type, e.name, e.locked, n), i.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function et(e, t) {
    let n = (n) => (0, l.jsx)(ee, { guildId: e, insertionTarget: t, ...n });
    (0, q.openModalLazy)(() => Promise.resolve(n), { modalKey: "guild-space-add-widget" });
}
var en = n(992303);
function el(e) {
    let { guildId: t, isEditing: n, isRemovalPending: i } = e,
        a = (0, s.bG)([v.A], () => v.A.getSaveStatus(t), [t]),
        d = (0, s.bG)([v.A], () => v.A.getDraft(t)?.widgets.length ?? 0, [t]),
        c = (0, s.bG)([v.A], () => v.A.getSaveErrorMessage(t), [t]),
        o = "saving" === a,
        f = o || i,
        g = c ?? J.intl.string(Y.default.HmFYc5),
        m = r.useCallback(() => {
            f || (0, C.Fj)(t);
        }, [t, f]),
        h = r.useCallback(() => {
            (0, C.iX)(t);
        }, [t]);
    return (0, l.jsx)(P.F, {
        component: "div",
        children:
            n &&
            (0, l.jsx)(k.F, {
                className: en.K,
                children: (0, l.jsx)(U.A, {
                    submitting: o,
                    disabled: f,
                    onSave: m,
                    onReset: f ? void 0 : h,
                    message: (0, l.jsxs)(M.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(O.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: B.T,
                                text: J.intl.string(Y.default.L8Xfoo),
                                disabled: f,
                                onClick: () => et(t),
                            }),
                            "error" === a
                                ? (0, l.jsx)(W.m, {
                                      text: g,
                                      children: (0, l.jsx)(u.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: g,
                                      }),
                                  })
                                : (0, l.jsx)(u.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: J.intl.format(Y.default.hpAg80, { panelCount: d }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var er = n(425763),
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
        s = r.useRef(null),
        [{ isOver: u }, d] = (0, eE.H)({
            accept: eo,
            drop: (e) => i(e.id, t),
            collect: (e) => ({ isOver: e.isOver({ shallow: !0 }) && e.canDrop() }),
        });
    return (
        r.useLayoutEffect(
            () => (
                d(s),
                () => {
                    d(null);
                }
            ),
            [d],
        ),
        (0, l.jsx)("div", { ref: s, className: a()(ea.wr, { [ea.SX]: u }), "data-dnd-name": n })
    );
}
var eA = n(451395),
    e_ = n(42499),
    eC = n(539888);
function ev(e) {
    let {
            guildId: t,
            widget: n,
            column: i,
            positionNumber: u,
            columnWidgetCount: d,
            flatIndex: c,
            leftColumnCount: o,
            isKeyboardMode: f,
            onReorder: g,
            onDrop: m,
            onDragEnd: h,
            onSlotElement: E,
            isSaving: x,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: _,
            isSettling: C,
            onMotionEnd: v,
            isRemoving: y,
            isRemovalPending: b,
            onRemovalAnimationEnd: S,
        } = e,
        D = r.useRef(null),
        j = r.useRef(null),
        G = (0, s.bG)([I.A], () => (n.requires_hydration ? I.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        T = (0, e_.K)(t, n),
        { isDragging: w, dragSourcePosition: R } = (0, eA.gY)({
            dragRef: D,
            dropRef: j,
            index: c,
            listType: ec,
            itemType: ed,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => j.current },
            onDrop: (e) => m(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !x && !b,
        }),
        L = null == R ? null : R < o ? 0 : 1,
        N = null != L && L !== i,
        P = f && null != R && (N || R > c),
        U = f && null != R && !N && R < c,
        k = r.useCallback(
            (e) => {
                ((j.current = e), E(n.id, e));
            },
            [E, n.id],
        );
    return (0, l.jsx)("div", {
        ref: k,
        className: a()(ea.NI, { [ea.cB]: w, [ea.Ni]: C, [ea.kC]: y, [ea.ne]: P, [ea.O3]: U }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (y ? S(n.id) : C && v(n.id));
        },
        "data-dnd-name": p(i, u, d),
        children: (0, l.jsx)(eC.P, {
            guildId: t,
            widget: n,
            guildSpaceMode: "edit",
            hydration: G,
            lock: T,
            dragHandleRef: D,
            disabled: x,
            onRemove: () => A(n.id),
            onCommitConfig: _,
        }),
    });
}
var eI = n(865830);
function ey(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = J.intl.formatToPlainString(1 === t ? Y.default.U0SqHk : Y.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(M.B, {
        className: ea.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(u.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: J.intl.string(Y.default["/OtM0k"]),
            }),
            (0, l.jsx)(O.$, {
                variant: "secondary",
                size: "sm",
                icon: B.T,
                text: J.intl.string(Y.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eb = n(408278);
function eS(e) {
    let { column: t, index: n, disabled: r, placement: i, onInsert: s } = e,
        u = J.intl.formatToPlainString(1 === t ? Y.default["h9P9H+"] : Y.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)("div", {
        className: a()(ea.kZ, { [ea.j2]: "before" === i, [ea.AO]: "after" === i }),
        children: [
            (0, l.jsx)("div", { className: ea.CF, "aria-hidden": !0 }),
            (0, l.jsx)("div", {
                className: ea.QN,
                children: (0, l.jsx)(W.m, {
                    text: u,
                    ariaHidden: !0,
                    children: (0, l.jsx)(eb.K, {
                        icon: B.T,
                        "aria-label": u,
                        size: "sm",
                        disabled: r,
                        onClick: () => s(t, n),
                    }),
                }),
            }),
        ],
    });
}
function eD(e, t, n) {
    return J.intl.formatToPlainString(1 === e ? Y.default.O9RvHQ : Y.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function ej(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: i } = e,
        u = r.useMemo(() => (0, ei.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eI.m[t];
                    }),
                ),
            [u],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, eu.V)((e) =>
            e.isDragging() && e.getItemType() === eo
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        f = o.isDragging,
        g = o.isDragging ? o.widgetId : null,
        m = (0, er.VU)(),
        h = (0, s.bG)([V.Ay], () => V.Ay.useReducedMotion),
        E = (0, s.bG)([v.A], () => "saving" === v.A.getSaveStatus(t), [t]),
        x = f && !m,
        [p, A] = r.useState(null),
        _ = p?.type === "removing" ? p.widgetId : null,
        I = null != _;
    r.useEffect(() => {
        h && p?.type === "settling" && A(null);
    }, [h, p]);
    let y = r.useCallback(
            (e, n, l) => {
                ((0, C.j0)(t, e, n, l), h || A({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: b,
            draggedLocation: S,
            getColumnElement: D,
            gridDropSurfaceRef: j,
            handleColumnHover: G,
            handleDragEnd: T,
            handleDrop: w,
            placeholderHeight: R,
            registerColumnElement: L,
            registerSlotElement: N,
            snapshotSlotRects: P,
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
            columns: d,
            draftColumns: u,
            draggedWidgetId: g,
            isPointerDragging: x,
            isKeyboardMode: m,
            isSaving: E,
            reduceMotion: h,
            onMoveWidget: y,
        }),
        U = r.useCallback((e) => {
            A((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        k = r.useCallback(
            (e) => {
                (A(null == e ? null : { type: "removing", widgetId: e }), i(null != e));
            },
            [i],
        ),
        M = r.useCallback(
            (e) => {
                _ === e && (P(e), (0, C.GP)(t, e), k(null));
            },
            [t, _, k, P],
        ),
        O = r.useCallback(
            (e) => {
                if (!E && !I) {
                    if (h) {
                        (P(e), (0, C.GP)(t, e));
                        return;
                    }
                    k(e);
                }
            },
            [t, I, E, h, k, P],
        );
    (r.useLayoutEffect(() => {
        h && null != _ && M(_);
    }, [M, h, _]),
        r.useEffect(() => () => i(!1), [i]));
    let B = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && (0, C.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        W = r.useCallback(
            (e, n) => {
                (0, C.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        F = r.useCallback(
            (e, n) => {
                let l = (0, ei.O6)(u[e] ?? [], d[e] ?? [], n);
                et(t, { column: e, index: l });
            },
            [d, u, t],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: j,
                className: ea.Z7,
                children: (0, l.jsx)("div", {
                    className: a()(ea.Vg, { [ea.nl]: x }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            ex,
                            {
                                column: n,
                                isPointerDragging: x,
                                onElement: L,
                                onDragHover: G,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !f)
                                            return (0, l.jsx)(ey, { column: n, disabled: E || I, onInsert: F });
                                        let r =
                                            x && null != g
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
                                                return (0, l.jsx)(es, { height: R }, "drag-placeholder");
                                            let { widget: a } = i,
                                                s = r.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                u =
                                                    -1 === s
                                                        ? e.findIndex((e) => {
                                                              let { id: t } = e;
                                                              return t === a.id;
                                                          })
                                                        : s,
                                                o = c.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                g = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                x = !f && !E && !I;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: ea.O4,
                                                    children: [
                                                        x &&
                                                            (0, l.jsx)(eS, {
                                                                column: n,
                                                                index: g,
                                                                disabled: E,
                                                                placement: "before",
                                                                onInsert: F,
                                                            }),
                                                        (0, l.jsx)(ev, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: eD,
                                                            onReorder: B,
                                                            onDrop: w,
                                                            onDragEnd: T,
                                                            onSlotElement: N,
                                                            isSettling:
                                                                p?.type === "settling" &&
                                                                p.widgetId === a.id &&
                                                                !m &&
                                                                !h,
                                                            onMotionEnd: U,
                                                            isRemoving: _ === a.id,
                                                            isRemovalPending: I,
                                                            onRemovalAnimationEnd: M,
                                                            onRemove: O,
                                                            onCommitConfig: (e) => (0, C.Vk)(t, a.id, e),
                                                        }),
                                                        x &&
                                                            g === e.length - 1 &&
                                                            (0, l.jsx)(eS, {
                                                                column: n,
                                                                index: e.length,
                                                                disabled: E,
                                                                placement: "after",
                                                                onInsert: F,
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
                                        (0, l.jsx)(ep, {
                                            column: n,
                                            dndName: J.intl.string(1 === n ? Y.default.fWef0G : Y.default.KcdDyT),
                                            onDropAtEnd: W,
                                        }),
                                    x && (0, l.jsx)("div", { className: ea.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eh, { isKeyboardMode: m, targetColumn: b?.column ?? S?.column ?? null, getColumnElement: D }),
        ],
    });
}
var eG = n(529609),
    eT = n(241326),
    ew = n(297264),
    eR = n(22231),
    eL = n(654107),
    eN = n(548118),
    eP = n(837011),
    eU = n(649640),
    ek = n(2553),
    eM = n(405810),
    eO = n(498642),
    eB = n(486020),
    eW = n(488428),
    eF = n(776231),
    eH = n(968176),
    eK = n(986898);
function ez(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: a, isSaving: d } = e,
        c = (0, s.bG)([m.A], () => m.A.getGuild(t), [t]),
        o = (0, s.bG)([eO.A], () => eO.A.getOnlineCount(t), [t]),
        f = (0, s.bG)([eO.A], () => eO.A.getMemberCount(t), [t]),
        g = n.custom_banner,
        h = (0, s.bG)([eP.A], () => eP.A.getProfile(t), [t]),
        E = (0, eU.b2)().hex(),
        x = null == c ? null : eB.Ay.getGuildIconURL({ id: c.id, icon: c.icon, size: 64 }),
        A = (0, eL.Ay)(x, E),
        _ = (0, eU.n6)(h?.brandColorPrimary ?? A),
        v = r.useMemo(
            () =>
                null == c
                    ? null
                    : "string" == typeof g
                      ? g
                      : void 0 === g && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eB.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = p.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, eF.kr)(1200 * (0, eF.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${eW.stringify(s)}`));
                          })(c.id, n.custom_banner_hash)
                        : eB.Ay.getGuildBannerURL({ id: c.id, banner: c.banner }),
            [c, g, n.custom_banner_hash],
        ),
        I = "string" == typeof g || (void 0 === g && null != n.custom_banner_hash);
    return null == c
        ? null
        : (0, l.jsxs)("div", {
              className: eK.wx,
              children: [
                  null != v
                      ? (0, l.jsx)("img", { className: eK.vK, src: v, alt: "" })
                      : (0, l.jsx)("div", { className: eK.vK, style: { background: _ }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eK.f5, "aria-hidden": !0 }),
                  a
                      ? (0, l.jsxs)("div", {
                            className: eK.j0,
                            children: [
                                (0, l.jsx)(eM.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: J.intl.string(Y.default["EN+0gW"]),
                                    onChange: (e) => (0, C.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, ek.A)(0xa00000),
                                    disabled: d,
                                }),
                                I
                                    ? (0, l.jsx)(W.m, {
                                          text: J.intl.string(Y.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(eb.K, {
                                              variant: "critical-secondary",
                                              icon: eT.TrashIcon,
                                              "aria-label": J.intl.string(Y.default["CunK+J"]),
                                              onClick: () => (0, C.pC)(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eK.D_,
                      children: [
                          (0, l.jsx)(eN.Ay, {
                              className: eK.Kk,
                              guild: c,
                              size: eN.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eK.pq,
                              children: [
                                  (0, l.jsx)(ew.D, {
                                      variant: "heading-xl/bold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: c.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eK.M1,
                                      children: [
                                          null != o
                                              ? (0, l.jsxs)("div", {
                                                    className: eK.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eK.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: J.intl.format(Y.default.G08ClG, { count: o }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: eK.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eK.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "text-sm/medium",
                                                            color: "currentColor",
                                                            children: J.intl.format(Y.default["rp7bx+"], { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eK.dJ,
                                              children: [
                                                  (0, l.jsx)(K._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(u.E, {
                                                      variant: "text-sm/medium",
                                                      color: "currentColor",
                                                      children: J.intl.format(Y.default.DwFqrb, {
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
                  i &&
                      !a &&
                      (0, l.jsx)(O.$, {
                          icon: eR.PencilIcon,
                          text: J.intl.string(eH.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, C.Wd)(t),
                      }),
              ],
          });
}
var e$ = n(554146),
    eq = n(942857),
    eV = n(131607),
    eX = n(967198),
    eY = n(725041),
    eJ = n(49999),
    eQ = n(312152);
function eZ(e) {
    let t,
        { guildId: i } = e,
        E = r.useRef(null),
        [x, p] = r.useState(!1),
        [y, b, P] = (0, s.yK)([D.A], () => [D.A.getSpace(i), D.A.getFetchStatus(i), D.A.isInBackoff(i)], [i]);
    (r.useEffect(() => {
        let e = E.current !== i;
        ((E.current = i), (0, h.u_)(i, e));
    }, [b, i]),
        r.useEffect(() => {
            (0, o.L4)(i, !1, { respectBackoff: !0 });
        }, [i]),
        (t = (0, L.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = R.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === T.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, w._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let U = (0, s.bG)([m.A], () => m.A.getGuild(i), [i]),
        k = (0, G.mN)(U),
        M = (0, s.bG)([_.A], () => _.A.getFetchStatus(i), [i]);
    r.useEffect(() => {
        k && "idle" === M && A(i);
    }, [k, M, i]);
    let O = U?.guildSpaceSettings?.publish_status !== j.B.PUBLISHED,
        B = r.useCallback(() => (0, h.Wl)(i, { publish_status: j.B.PUBLISHED }), [i]),
        [W, F] = (0, s.yK)([v.A], () => [v.A.getDraft(i), v.A.getSaveStatus(i)], [i]),
        H = k && null != W;
    !(function (e, t) {
        let i = (0, q.useHasModalOpen)(eY.J),
            a = (0, s.bG)([eX.A], () => eX.A.getGuildId()),
            u = (0, eq.A)(),
            [d, c] = (0, eV.kn)(t && a === e && !u ? [e$.M.GUILD_SPACE_NUX_MODAL] : [], eJ.m.GUILD_SPACE_NUX, !0),
            o = r.useRef(!1),
            f = d === e$.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, a]),
            r.useEffect(() => {
                !f ||
                    i ||
                    o.current ||
                    ((o.current = !0),
                    (0, q.openModalLazy)(
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
                        { modalKey: eY.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, i, c, f]));
    })(i, k && !H && null != y);
    let K = H ? W.widgets : y?.widgets,
        z = r.useMemo(() => K?.some((e) => e.locked) ?? !1, [K]);
    r.useEffect(() => {
        k && z && ((0, f.AK)(i), (0, f.Xd)(i));
    }, [k, i, z]);
    let $ = (0, s.bG)(
        [g.A, _.A],
        () =>
            y?.widgets.some((e) => {
                let t = _.A.getWidget(i, e.type)?.powerup_sku_id;
                return e.locked && null != t && g.A.getStateForGuild(i)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [i, y],
    );
    (r.useEffect(() => {
        $ && (0, h.fi)(i);
    }, [i, $]),
        r.useEffect(() => {
            k || null == W || "saving" === F || (0, C.iX)(i);
        }, [k, W, F, i]));
    let V = r.useMemo(
            () =>
                (K ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [K],
        ),
        X = (0, s.yK)([I.A], () => I.A.getWidgetIdsToHydrate(i, V), [i, V]),
        Y = r.useRef(null);
    return (r.useEffect(() => {
        if (Y.current !== i && null != y) {
            ((Y.current = i), S(i, V, !0));
            return;
        }
        S(i, X);
    }, [i, y, V, X]),
    null == y || null == K)
        ? (0, l.jsx)("div", {
              className: eQ.MY,
              children: (0, l.jsx)("div", {
                  className: eQ.F,
                  children:
                      "error" !== b || P
                          ? (0, l.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE, "aria-label": J.intl.string(J.t.ZTNur7) })
                          : (0, l.jsx)(u.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: J.intl.string(J.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsxs)("div", {
              className: eQ.MY,
              children: [
                  (0, l.jsx)(c.Gt, {
                      className: eQ.XG,
                      children: (0, l.jsxs)("div", {
                          className: a()(eQ.Qs, { [eQ.Dy]: H }),
                          children: [
                              k && O ? (0, l.jsx)(N.A, { onPublish: B }) : null,
                              (0, l.jsx)(ez, {
                                  guildId: i,
                                  header: H ? W.header : y.header,
                                  isEditing: H,
                                  canEdit: k,
                                  isSaving: "saving" === F,
                              }),
                              H
                                  ? (0, l.jsx)(ej, { guildId: i, widgets: K, onRemovalPendingChange: p }, i)
                                  : (0, l.jsx)(eG.A, { canEdit: k, guildId: i, widgets: K }),
                          ],
                      }),
                  }),
                  (0, l.jsx)(el, { guildId: i, isEditing: H, isRemovalPending: x }),
              ],
          });
}
