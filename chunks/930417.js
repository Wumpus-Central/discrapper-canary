(n.r(t), n.d(t, { default: () => e8 }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(855986),
    a = n(834730),
    s = n(289873),
    u = n(866665),
    d = n(408278),
    c = n(625903),
    o = n(332837),
    g = n(516521),
    f = n(250527),
    h = n(727419),
    m = n(742589),
    E = n(533993),
    p = n(645619),
    A = n(71393),
    C = n(473953),
    x = n(620632),
    _ = n(73153),
    v = n(652215);
async function b(e) {
    _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await x.Bo.get({ url: v.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var S = n(960960),
    I = n(202762),
    y = n(88592),
    D = n(363957),
    j = n(513446);
let w = 0;
async function G(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = D.A.getWidgetIdsToHydrate(e, t, n);
    if (0 === l.length) return;
    let r = w++;
    _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await x.Bo.get({
            url: v.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, j.a)(t) });
    }
}
var T = n(716357),
    R = n(593673),
    N = n(49303),
    L = n(313627),
    P = n(344351),
    k = n(795816),
    U = n(933958),
    M = n(44167),
    B = n(872188),
    O = n(628274),
    W = n(36525),
    H = n(192308),
    F = n(871682),
    z = n(331322),
    K = n(821609),
    q = n(499373),
    $ = n(189213),
    V = n(939249),
    X = n(245604),
    Y = n(104510),
    J = n(646514),
    Q = n(775602),
    Z = n(855823),
    ee = n(135294),
    et = n(792996),
    en = n(517228);
function el(e) {
    let { widget: t, onClick: n } = e,
        r = (0, i.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        { catalog_image_static_url: s, catalog_image_animated_url: u } = t.assets,
        d = (r ? null : u) ?? s,
        c = t.boost_price;
    return (0, l.jsxs)(V.D, {
        className: en.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: en.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: en.YI, src: d, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: en.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: en.Ti, children: (0, l.jsx)("div", { className: en.dK }) }),
                            (0, l.jsxs)(z.B, {
                                className: en.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(X.U, {}),
                                    (0, l.jsx)(a.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: et.intl.string(ee.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(z.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(a.E, { variant: "body-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(z.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(Y._, { size: "sm", color: J.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(a.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: et.intl.format(ee.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(a.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: et.intl.string(ee.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { guildId: t, insertionTarget: n, onAddWidget: a, ...s } = e,
        u = (0, i.yK)(
            [S.A, y.A],
            () => {
                let e = y.A.getDraft(t)?.widgets ?? [],
                    n = S.A.getWidgets(t) ?? [];
                return (0, Z.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            b(t);
        }, [t]),
        (0, l.jsx)($.a, {
            title: et.intl.string(ee.default.L8Xfoo),
            subtitle: et.intl.string(ee.default["N8nJ+T"]),
            actions: [],
            ...s,
            children: (0, l.jsx)("div", {
                className: en.Vg,
                children: u.map((e) =>
                    (0, l.jsx)(
                        el,
                        {
                            widget: e,
                            onClick: () => {
                                (a(e, n), s.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function ei(e, t, n) {
    let r = (r) => (0, l.jsx)(er, { guildId: e, insertionTarget: n, onAddWidget: t, ...r });
    (0, H.mM)(() => Promise.resolve(r), { modalKey: "guild-space-add-widget" });
}
let ea = r.createContext(null);
function es(e) {
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
        s = r.useMemo(() => ({ addWidget: i, registerAddWidgetHandler: a }), [i, a]);
    return (0, l.jsx)(ea.Provider, { value: s, children: t });
}
function eu() {
    let e = r.useContext(ea);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var ed = n(992303);
function ec(e) {
    let { guildId: t, isEditing: s, isPublished: d, isRemovalPending: c } = e,
        { addWidget: o } = eu(),
        {
            saveStatus: g,
            panelCount: f,
            saveErrorMessage: h,
            hasChanges: m,
        } = (0, i.cf)(
            [y.A],
            () => ({
                saveStatus: y.A.getSaveStatus(t),
                panelCount: y.A.getDraft(t)?.widgets.length ?? 0,
                saveErrorMessage: y.A.getSaveErrorMessage(t),
                hasChanges: y.A.hasChanges(t),
            }),
            [t],
        ),
        E = "saving" === g,
        p = E || c,
        A = p || !m,
        C = h ?? et.intl.string(ee.default.HmFYc5),
        x = r.useCallback(() => {
            if (!A) {
                if (!d)
                    return void (0, H.mM)(async () => {
                        let { default: e } = await n.e(642138).then(n.bind(n, 921633));
                        return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                    });
                (0, I.Fj)(t);
            }
        }, [t, d, A]),
        _ = r.useCallback(() => {
            (0, I.iX)(t);
        }, [t]);
    return (0, l.jsx)(O.F, {
        component: "div",
        children:
            s &&
            (0, l.jsx)(F.F, {
                className: ed.K,
                children: (0, l.jsx)(W.A, {
                    submitting: E,
                    disabled: A,
                    onSave: x,
                    onReset: p ? void 0 : _,
                    message: (0, l.jsxs)(z.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(K.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: q.T,
                                text: et.intl.string(ee.default.L8Xfoo),
                                disabled: p,
                                onClick: () => ei(t, o),
                            }),
                            "error" === g
                                ? (0, l.jsx)(u.m, {
                                      text: C,
                                      children: (0, l.jsx)(a.E, {
                                          variant: "body-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                                  })
                                : (0, l.jsx)(a.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      children: et.intl.format(ee.default.hpAg80, { panelCount: f }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eo = n(503698),
    eg = n.n(eo),
    ef = n(425763),
    eh = n(754674),
    em = n(294918);
function eE(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: em.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var ep = n(675816);
let eA = "GUILD_SPACE_WIDGET",
    eC = "GUILD_SPACE_WIDGETS",
    ex = `${eA}_${eC}`;
var e_ = n(204581),
    ev = n(333007);
let eb = "canvas, iframe, video";
function eS(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, ep.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === ex,
            item: e.getItem(),
        })),
        u = (0, e_.u)(),
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
        let i = l.querySelectorAll(eb);
        return (
            r.querySelectorAll(eb).forEach((e, t) => {
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
            r.classList.remove(em.cB, em.Ni),
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
        : (0, ev.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: em.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: em.w4 }),
              }),
              document.body,
          );
}
var eI = n(840508);
function ey(e) {
    let { column: t, children: n, isPointerDragging: i, registerColumnElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, d] = (0, eI.H)({
            accept: ex,
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
        (0, l.jsx)("div", { ref: c, className: em.fi, children: n })
    );
}
function eD(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: s }, u] = (0, eI.H)({
            accept: ex,
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
        (0, l.jsx)("div", { ref: a, className: eg()(em.wr, { [em.SX]: s }), "data-dnd-name": n })
    );
}
var ej = n(451395),
    ew = n(42499),
    eG = n(904109);
function eT(e) {
    let {
            guildId: t,
            widget: n,
            column: a,
            positionNumber: s,
            columnWidgetCount: u,
            flatIndex: d,
            leftColumnCount: c,
            isKeyboardMode: o,
            onReorder: g,
            onDrop: f,
            onDragEnd: h,
            registerSlotElement: m,
            isSaving: E,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: C,
            isSettling: x,
            onMotionEnd: _,
            isEntrancePreparing: v,
            isEntering: b,
            onEntranceAnimationEnd: S,
            isRemoving: I,
            isRemovalPending: y,
            onRemovalAnimationEnd: j,
        } = e,
        w = r.useRef(null),
        G = r.useRef(null),
        T = (0, i.bG)([D.A], () => (n.requires_hydration ? D.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        R = (0, ew.K)(t, n),
        { isDragging: N, dragSourcePosition: L } = (0, ej.gY)({
            dragRef: w,
            dropRef: G,
            index: d,
            listType: eC,
            itemType: eA,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => G.current },
            onDrop: (e) => f(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !E && !y,
        }),
        P = null == L ? null : L < c ? 0 : 1,
        k = null != P && P !== a,
        U = o && null != L && (k || L > d),
        M = o && null != L && !k && L < d,
        B = r.useCallback(
            (e) => {
                ((G.current = e), m(n.id, e));
            },
            [m, n.id],
        );
    return (0, l.jsxs)("div", {
        ref: B,
        className: eg()(em.NI, { [em.cB]: N, [em.Ni]: x, [em.fJ]: v, [em.Hu]: b, [em.kC]: I, [em.ne]: U, [em.O3]: M }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (I ? j(n.id) : x ? _(n.id) : b && S(n.id));
        },
        "data-dnd-name": p(a, s, u),
        children: [
            b &&
                (0, l.jsx)("div", {
                    className: em.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: em.te }),
                }),
            (0, l.jsx)(eG.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: T,
                lock: R,
                dragHandleRef: w,
                disabled: E,
                onRemove: () => A(n.id),
                onCommitConfig: C,
            }),
        ],
    });
}
function eR(e, t, n, l) {
    let r = t.current?.getScrollerNode();
    if (null == r) return void l();
    let i = e.getBoundingClientRect(),
        a = r.getBoundingClientRect(),
        s = Math.max(
            0,
            Math.min(i.top - a.top + r.scrollTop - (r.clientHeight - i.height) / 2, r.scrollHeight - r.clientHeight),
        );
    if (n || 1 > Math.abs(r.scrollTop - s)) {
        ((r.scrollTop = s), l());
        return;
    }
    (r.addEventListener("scrollend", l, { once: !0 }), r.scrollTo({ top: s, behavior: "smooth" }));
}
var eN = n(274661);
function eL(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = et.intl.formatToPlainString(1 === t ? ee.default.U0SqHk : ee.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(z.B, {
        className: em.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(a.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: et.intl.string(ee.default["/OtM0k"]),
            }),
            (0, l.jsx)(K.$, {
                variant: "secondary",
                size: "sm",
                icon: q.T,
                text: et.intl.string(ee.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eP = n(663341);
function ek(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = et.intl.formatToPlainString(1 === t ? ee.default["h9P9H+"] : ee.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(V.D, {
        className: eg()(em.kZ, { [em.j2]: "before" === r, [em.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: em.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: em.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eP.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function eU(e, t, n) {
    return et.intl.formatToPlainString(1 === e ? ee.default.O9RvHQ : ee.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eM(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: a, scrollerRef: s } = e,
        u = r.useMemo(() => (0, eh.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eN.m[t];
                    }),
                ),
            [u],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, ep.V)((e) =>
            e.isDragging() && e.getItemType() === ex
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        g = o.isDragging,
        f = o.isDragging ? o.widgetId : null,
        h = (0, ef.VU)(),
        m = (0, i.bG)([Q.Ay], () => Q.Ay.useReducedMotion),
        E = (0, i.bG)([y.A], () => "saving" === y.A.getSaveStatus(t), [t]),
        p = g && !h,
        [A, C] = r.useState(null),
        x = A?.type === "removing" ? A.widgetId : null,
        _ = null != x;
    r.useLayoutEffect(() => {
        m && A?.type === "settling" && C(null);
    }, [m, A]);
    let v = r.useCallback(
            (e, n, l) => {
                ((0, I.j0)(t, e, n, l), m || C({ type: "settling", widgetId: e }));
            },
            [t, m],
        ),
        {
            effectiveDestination: b,
            draggedLocation: S,
            getColumnElement: D,
            getSlotElement: j,
            gridDropSurfaceRef: w,
            handleColumnHover: G,
            handleDragEnd: T,
            canAcceptPointerDrop: R,
            placeholderHeight: N,
            registerColumnElement: L,
            registerSlotElement: P,
            snapshotSlotRects: k,
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
                    reduceMotion: g,
                    onMoveWidget: f,
                } = e,
                [h, m] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                C = r.useRef(null),
                x = r.useRef([null, null]),
                _ = r.useRef(new Map()),
                [v, b] = r.useState(null),
                { stopAutoScroll: S, updatePointerY: I } =
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
                                                let e = C.current?.parentElement;
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
                        [C],
                    )),
                    r.useEffect(() => l, [l]),
                    { stopAutoScroll: l, updatePointerY: i }),
                { clearSlotMotion: y, snapshotSlotRects: D } = (function (e) {
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
                })({ columns: a, pendingDestination: h, reduceMotion: g, slotElementsRef: _ }),
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
                w = d && h?.widgetId === u && (null == j || h.column !== j.column || h.index !== j.index) ? h : null,
                G = r.useCallback((e, t) => {
                    x.current[e] = t;
                }, []),
                T = r.useCallback((e) => x.current[e] ?? null, []),
                R = r.useCallback((e, t) => {
                    null == t ? _.current.delete(e) : _.current.set(e, t);
                }, []),
                N = r.useCallback((e) => _.current.get(e) ?? null, []),
                L = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = x.current[0]?.getBoundingClientRect(),
                        r = x.current[1]?.getBoundingClientRect();
                    if (null == l || null == r || !(l.right <= r.left)) return !0;
                    let i = (l.right + r.left) / 2;
                    return 1 === t ? n > i + 32 : n < i - 32;
                }, []),
                P = r.useCallback(() => {
                    A.current = null;
                    let e = p.current;
                    if (null == e) return;
                    let t = E.current;
                    (t?.widgetId !== e.widgetId || t.column !== e.column || t.index !== e.index) &&
                        (D(e.widgetId), (E.current = e), m(e));
                }, [D]),
                k = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        I(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !L(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == A.current && (A.current = requestAnimationFrame(P)));
                    },
                    [P, a, L, j?.column, o, I],
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
                        (x.current.forEach((e, r) => {
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
                [, B] = (0, eI.H)({
                    accept: ex,
                    canDrop: () => d,
                    drop: () => ({}),
                    hover: (e, t) => {
                        if (!d || !t.isOver({ shallow: !0 })) return;
                        let n = t.getClientOffset();
                        null != n && M(e.id, n);
                    },
                });
            r.useLayoutEffect(
                () => (
                    B(C),
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
                W = r.useCallback((e, t) => (0, eh.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                H = r.useCallback(() => {
                    (null != A.current && cancelAnimationFrame(A.current),
                        (A.current = null),
                        (p.current = null),
                        (E.current = null),
                        m(null),
                        b(null),
                        y(),
                        S());
                }, [y, S]),
                F = r.useCallback(() => d, [d]),
                z = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            f(e, n.column, W(e, n)),
                            H());
                    },
                    [H, j, O, W, c, f],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == u) return;
                    let e = _.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== v && b(t);
                }, [u, d, v]),
                r.useEffect(
                    () => () => {
                        null != A.current && cancelAnimationFrame(A.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: w,
                    draggedLocation: j,
                    getColumnElement: T,
                    getSlotElement: N,
                    gridDropSurfaceRef: C,
                    handleColumnHover: U,
                    handleDragEnd: z,
                    canAcceptPointerDrop: F,
                    placeholderHeight: v,
                    registerColumnElement: G,
                    registerSlotElement: R,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: d,
            draftColumns: u,
            draggedWidgetId: f,
            isPointerDragging: p,
            isKeyboardMode: h,
            isSaving: E,
            reduceMotion: m,
            onMoveWidget: v,
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
                    reduceMotion: s,
                    scrollerRef: u,
                    snapshotSlotRects: d,
                    getSlotElement: c,
                } = e,
                { registerAddWidgetHandler: o } = eu(),
                [g, f] = r.useState(() => new Map()),
                h = r.useRef(null),
                [m, E] = r.useState(0),
                p = r.useCallback((e) => {
                    f((t) => {
                        if (!t.has(e)) return t;
                        let n = new Map(t);
                        return (n.delete(e), n);
                    });
                }, []),
                A = r.useCallback(
                    (e, n) => {
                        l ||
                            i ||
                            a ||
                            ((h.current = null),
                            d(),
                            (h.current = (0, I.lr)(t, e.type, e.name, e.locked, n)),
                            E((e) => e + 1));
                    },
                    [t, i, a, l, d],
                );
            return (
                r.useLayoutEffect(() => o(A), [A, o]),
                r.useLayoutEffect(() => {
                    let e = h.current;
                    if (null == e) return;
                    let t = n.find((t) => {
                            let { id: n } = t;
                            return n === e;
                        }),
                        l = null == t ? null : c(t.id);
                    if (null == t || null == l) {
                        h.current = null;
                        return;
                    }
                    ((h.current = null), s)
                        ? eR(l, u, !0, () => void 0)
                        : (f((e) => new Map(e).set(t.id, "preparing")),
                          eR(l, u, !1, () => {
                              l.isConnected &&
                                  f((e) => ("preparing" !== e.get(t.id) ? e : new Map(e).set(t.id, "playing")));
                          }));
                }, [c, m, s, u, n]),
                {
                    clearWidgetEntrance: p,
                    handleAddWidget: A,
                    isEntrancePreparing: (e) => "preparing" === g.get(e),
                    isEntering: (e) => "playing" === g.get(e),
                }
            );
        })({
            guildId: t,
            widgets: n,
            isSaving: E,
            isDraggingWidget: g,
            isRemovalPending: _,
            reduceMotion: m,
            scrollerRef: s,
            snapshotSlotRects: k,
            getSlotElement: j,
        }),
        W = r.useCallback((e) => {
            C((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        H = r.useCallback(
            (e) => {
                (C(null == e ? null : { type: "removing", widgetId: e }), a(null != e));
            },
            [a],
        ),
        F = r.useCallback(
            (e) => {
                x === e && (k(e), (0, I.GP)(t, e), H(null));
            },
            [t, x, H, k],
        ),
        z = r.useCallback(
            (e) => {
                if (!E && !_) {
                    if ((U(e), m)) {
                        (k(e), (0, I.GP)(t, e));
                        return;
                    }
                    H(e);
                }
            },
            [U, t, _, E, m, H, k],
        );
    (r.useLayoutEffect(() => {
        m && null != x && F(x);
    }, [F, m, x]),
        r.useEffect(() => () => a(!1), [a]));
    let K = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && (0, I.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        q = r.useCallback(
            (e, n) => {
                (0, I.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        $ = r.useCallback(
            (e, n) => {
                let l = (0, eh.O6)(u[e] ?? [], d[e] ?? [], n);
                ei(t, M, { column: e, index: l });
            },
            [d, u, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: w,
                className: em.Z7,
                children: (0, l.jsx)("div", {
                    className: eg()(em.Vg, { [em.nl]: p }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            ey,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: L,
                                onDragHover: G,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !g)
                                            return (0, l.jsx)(eL, { column: n, disabled: E || _, onInsert: $ });
                                        let r =
                                            p && null != f
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
                                        })(e, n, b).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(eE, { height: N }, "drag-placeholder");
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
                                                f = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                m = !g && !E && !_;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: em.O4,
                                                    children: [
                                                        m &&
                                                            (0, l.jsx)(ek, {
                                                                column: n,
                                                                index: f,
                                                                placement: "before",
                                                                onInsert: $,
                                                            }),
                                                        (0, l.jsx)(eT, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: h,
                                                            isSaving: E,
                                                            getDropLabel: eU,
                                                            onReorder: K,
                                                            onDrop: R,
                                                            onDragEnd: T,
                                                            registerSlotElement: P,
                                                            isSettling:
                                                                A?.type === "settling" && A.widgetId === a.id && !h,
                                                            onMotionEnd: W,
                                                            isEntrancePreparing: B(a.id),
                                                            isEntering: O(a.id),
                                                            onEntranceAnimationEnd: U,
                                                            isRemoving: x === a.id,
                                                            isRemovalPending: _,
                                                            onRemovalAnimationEnd: F,
                                                            onRemove: z,
                                                            onCommitConfig: (e) => (0, I.Vk)(t, a.id, e),
                                                        }),
                                                        m &&
                                                            f === e.length - 1 &&
                                                            (0, l.jsx)(ek, {
                                                                column: n,
                                                                index: e.length,
                                                                placement: "after",
                                                                onInsert: $,
                                                            }),
                                                    ],
                                                },
                                                a.id,
                                            );
                                        });
                                    })(e, n),
                                    h &&
                                        g &&
                                        !E &&
                                        (0, l.jsx)(eD, {
                                            column: n,
                                            dndName: et.intl.string(1 === n ? ee.default.fWef0G : ee.default.KcdDyT),
                                            onDropAtEnd: q,
                                        }),
                                    p && (0, l.jsx)("div", { className: em.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(eS, { isKeyboardMode: h, targetColumn: b?.column ?? S?.column ?? null, getColumnElement: D }),
        ],
    });
}
var eB = n(529609),
    eO = n(191023),
    eW = n(241326),
    eH = n(534514),
    eF = n(22231),
    ez = n(654107),
    eK = n(682163),
    eq = n(837011),
    e$ = n(649640),
    eV = n(2553),
    eX = n(405810),
    eY = n(498642),
    eJ = n(486020),
    eQ = n(488428),
    eZ = n(776231),
    e0 = n(986898);
function e1(e) {
    let { guildId: t, header: n, canEdit: s, isEditing: c, isSaving: o } = e,
        g = (0, i.bG)([A.A], () => A.A.getGuild(t), [t]),
        f = (0, i.bG)([eY.A], () => eY.A.getOnlineCount(t), [t]),
        h = (0, i.bG)([eY.A], () => eY.A.getMemberCount(t), [t]),
        m = n.custom_banner,
        E = (0, i.bG)([eq.A], () => eq.A.getProfile(t), [t]),
        p = (0, e$.b2)().hex(),
        C = null == g ? null : eJ.Ay.getGuildIconURL({ id: g.id, icon: g.icon, size: 64 }),
        x = (0, ez.Ay)(C, p),
        _ = (0, e$.n6)(E?.brandColorPrimary ?? x),
        b = r.useMemo(
            () =>
                null == g
                    ? null
                    : "string" == typeof m
                      ? m
                      : void 0 === m && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eJ.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = v.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, eZ.kr)(1200 * (0, eZ.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${eQ.As(s)}`));
                          })(g.id, n.custom_banner_hash)
                        : eJ.Ay.getGuildBannerURL({ id: g.id, banner: g.banner }),
            [g, m, n.custom_banner_hash],
        ),
        S = "string" == typeof m || (void 0 === m && null != n.custom_banner_hash);
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e0.wx,
              children: [
                  null != b
                      ? (0, l.jsx)("img", { className: e0.vK, src: b, alt: "" })
                      : (0, l.jsx)("div", { className: e0.vK, style: { background: _ }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e0.f5, "aria-hidden": !0 }),
                  c
                      ? (0, l.jsxs)("div", {
                            className: e0.j0,
                            children: [
                                (0, l.jsx)(eX.A, {
                                    variant: "overlay-secondary",
                                    icon: eO.ImageIcon,
                                    size: "sm",
                                    text: et.intl.string(ee.default["EN+0gW"]),
                                    onChange: (e) => (0, I.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eV.A)(0xa00000),
                                    disabled: o,
                                }),
                                S
                                    ? (0, l.jsx)(u.m, {
                                          text: et.intl.string(ee.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(d.K, {
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              icon: eW.TrashIcon,
                                              "aria-label": et.intl.string(ee.default["CunK+J"]),
                                              onClick: () => (0, I.pC)(t, null),
                                              disabled: o,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e0.D_,
                      children: [
                          (0, l.jsx)(eK.Ay, {
                              className: e0.Kk,
                              guild: g,
                              size: eK.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e0.pq,
                              children: [
                                  (0, l.jsx)(eH.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: g.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e0.M1,
                                      children: [
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e0.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e0.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: et.intl.format(ee.default.G08ClG, { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != h
                                              ? (0, l.jsxs)("div", {
                                                    className: e0.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e0.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: et.intl.format(ee.default["rp7bx+"], {
                                                                count: h,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e0.dJ,
                                              children: [
                                                  (0, l.jsx)(Y._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(a.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "currentColor",
                                                      children: et.intl.format(ee.default.DwFqrb, {
                                                          count: g.premiumSubscriberCount,
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
                      !c &&
                      (0, l.jsx)(K.$, {
                          icon: eF.PencilIcon,
                          text: et.intl.string(ee.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, I.Wd)(t),
                      }),
              ],
          });
}
var e2 = n(554146),
    e3 = n(942857),
    e9 = n(263775),
    e6 = n(967198),
    e5 = n(725041),
    e4 = n(49999),
    e7 = n(312152);
function e8(e) {
    let t,
        { guildId: x } = e,
        _ = r.useRef(null),
        j = r.useRef(null),
        [w, O] = r.useState(!1),
        [W, F, z] = (0, i.yK)([T.A], () => [T.A.getSpace(x), T.A.getFetchStatus(x), T.A.isInBackoff(x)], [x]),
        K = (0, i.bG)([S.A], () => S.A.getFetchStatus(x), [x]),
        q = (0, i.bG)([A.A], () => A.A.getGuild(x), [x]),
        $ = (0, L.mN)(q),
        V = r.useRef(!0);
    (r.useEffect(
        () => (
            (V.current = !0),
            () => {
                V.current = !1;
            }
        ),
        [],
    ),
        r.useEffect(() => {
            let e = _.current !== x;
            ((_.current = x),
                !(async function () {
                    let t = [];
                    (("idle" === F || e) && t.push((0, C.u)(x, { shouldRefetch: e })),
                        $ && "idle" === K && t.push(b(x)),
                        await Promise.all(t),
                        e &&
                            V.current &&
                            _.current === x &&
                            $ &&
                            "success" === T.A.getFetchStatus(x) &&
                            T.A.isSpaceMissing(x) &&
                            (0, I.Wd)(x));
                })());
        }, [$, K, F, x]),
        r.useEffect(() => {
            (0, f.L4)(x, !1, { respectBackoff: !0 });
        }, [x]),
        (t = (0, M.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = U.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === P.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, k._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let X = q?.guildSpaceSettings?.publish_status === R.B.PUBLISHED,
        Y = r.useCallback(() => (0, C.W)(x, { publish_status: R.B.PUBLISHED }), [x]),
        [J, Q] = (0, i.yK)([y.A], () => [y.A.getDraft(x), y.A.getSaveStatus(x)], [x]),
        Z = $ && null != J;
    !(function (e, t) {
        let a = (0, H.Ry)(e5.J),
            s = (0, i.bG)([e6.A], () => e6.A.getGuildId()),
            u = (0, e3.A)(),
            [d, c] = (0, e9.kn)(t && s === e && !u ? [e2.M.GUILD_SPACE_NUX_MODAL] : [], {
                groupName: e4.m.GUILD_SPACE_NUX,
                bypassAutoDismiss: !0,
            }),
            o = r.useRef(!1),
            g = d === e2.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, s]),
            r.useEffect(() => {
                !g ||
                    a ||
                    o.current ||
                    ((o.current = !0),
                    (0, H.mM)(
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
                        { modalKey: e5.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, a, c, g]));
    })(x, $ && null != W);
    let ee = Z ? J.widgets : W?.widgets,
        en = r.useMemo(() => ee?.some((e) => e.locked) ?? !1, [ee]);
    r.useEffect(() => {
        $ && en && ((0, E.AK)(x), (0, E.Xd)(x));
    }, [$, x, en]);
    let el = (0, i.bG)(
        [p.A, S.A],
        () =>
            W?.widgets.some((e) => {
                let t = S.A.getWidget(x, e.type)?.powerup_sku_id;
                return e.locked && null != t && p.A.getStateForGuild(x)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [x, W],
    );
    (r.useEffect(() => {
        el && (0, C.u)(x, { shouldRefetch: !0 });
    }, [x, el]),
        r.useEffect(() => {
            $ || null == J || "saving" === Q || (0, I.iX)(x, N.pb.PERMISSION_LOST);
        }, [$, J, Q, x]));
    let er = r.useMemo(
            () =>
                (ee ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [ee],
        ),
        ei = (0, i.yK)([D.A], () => D.A.getWidgetIdsToHydrate(x, er), [x, er]),
        ea = r.useRef(null);
    r.useEffect(() => {
        if (ea.current !== x && null != W) {
            ((ea.current = x), G(x, er, !0));
            return;
        }
        G(x, ei);
    }, [x, W, er, ei]);
    let eu = r.useCallback(() => {
        h.A.open(x, v.BEX.ENGAGEMENT, void 0, v.nd0.ENGAGEMENT_GUILD_SPACE);
    }, [x]);
    return null == W || null == ee
        ? (0, l.jsx)("div", {
              className: e7.MY,
              children: (0, l.jsx)("div", {
                  className: e7.F,
                  children:
                      "error" !== F || z
                          ? (0, l.jsx)(s.y, {
                                type: s.y.Type.SPINNING_CIRCLE,
                                "aria-label": et.intl.string(et.t.ZTNur7),
                            })
                          : (0, l.jsx)(a.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: et.intl.string(et.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(es, {
              children: (0, l.jsxs)("div", {
                  className: e7.MY,
                  children: [
                      (0, l.jsxs)(m.A, {
                          toolbar:
                              $ &&
                              (0, l.jsx)(u.m, {
                                  text: et.intl.string(et.t.OBskVU),
                                  children: (0, l.jsx)(d.K, {
                                      type: "button",
                                      variant: "icon-only",
                                      icon: c.SettingsIcon,
                                      "aria-label": et.intl.string(et.t["3D5yo/"]),
                                      size: "md",
                                      onClick: eu,
                                  }),
                              }),
                          children: [
                              (0, l.jsx)(m.A.Icon, { icon: o.HomeIcon, "aria-hidden": !0 }),
                              (0, l.jsx)(m.A.Title, { children: et.intl.string(et.t["04IVMq"]) }),
                          ],
                      }),
                      (0, l.jsx)(g.Ch, {
                          ref: j,
                          className: e7.XG,
                          children: (0, l.jsxs)("div", {
                              className: e7.Qs,
                              children: [
                                  $ && !X ? (0, l.jsx)(B.A, { onPublish: Y }) : null,
                                  (0, l.jsx)(e1, {
                                      guildId: x,
                                      header: Z ? J.header : W.header,
                                      isEditing: Z,
                                      canEdit: $,
                                      isSaving: "saving" === Q,
                                  }),
                                  Z
                                      ? (0, l.jsx)(
                                            eM,
                                            { guildId: x, widgets: ee, onRemovalPendingChange: O, scrollerRef: j },
                                            x,
                                        )
                                      : (0, l.jsx)(eB.A, { canEdit: $, guildId: x, widgets: ee }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(ec, { guildId: x, isEditing: Z, isPublished: X, isRemovalPending: w }),
                  ],
              }),
          });
}
