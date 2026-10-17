(n.r(t), n.d(t, { default: () => e7 }));
var l = n(477900),
    r = n(582128),
    i = n(17928),
    a = n(834730),
    s = n(289873),
    u = n(866665),
    c = n(408278),
    d = n(625903),
    o = n(332837),
    f = n(689175),
    g = n(250527),
    m = n(468689),
    h = n(742589),
    E = n(868652),
    p = n(645619),
    x = n(71393),
    C = n(473953),
    A = n(636537),
    _ = n(73153),
    v = n(652215);
async function I(e) {
    _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await A.Bo.get({ url: v.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        _.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var b = n(960960),
    y = n(202762),
    S = n(88592),
    D = n(363957),
    j = n(513446);
let G = 0;
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = D.A.getWidgetIdsToHydrate(e, t, n);
    if (0 === l.length) return;
    let r = G++;
    _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await A.Bo.get({
            url: v.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, j.a)(t) });
    }
}
var L = n(716357),
    w = n(593673),
    N = n(313627),
    R = n(344351),
    P = n(795816),
    k = n(933958),
    U = n(44167),
    M = n(872188),
    B = n(868285),
    O = n(36525),
    H = n(192308),
    W = n(871682),
    F = n(331322),
    z = n(821609),
    K = n(499373),
    q = n(189213),
    $ = n(939249),
    V = n(245604),
    X = n(104510),
    Y = n(661531),
    J = n(775602),
    Q = n(855823),
    Z = n(104129),
    ee = n(105292),
    et = n(517228);
function en(e) {
    let { widget: t, onClick: n } = e,
        r = (0, i.bG)([J.Ay], () => J.Ay.useReducedMotion),
        { catalog_image_static_url: s, catalog_image_animated_url: u } = t.assets,
        c = (r ? null : u) ?? s,
        d = t.boost_price;
    return (0, l.jsxs)($.D, {
        className: et.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: et.b3,
                children: [
                    null != c && (0, l.jsx)("img", { className: et.YI, src: c, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: et.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: et.Ti, children: (0, l.jsx)("div", { className: et.dK }) }),
                            (0, l.jsxs)(F.B, {
                                className: et.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(V.U, {}),
                                    (0, l.jsx)(a.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-default",
                                        children: ee.intl.string(Z.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(F.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(a.E, { variant: "text-sm/semibold", color: "text-default", children: t.name }),
                    null != d && d > 0
                        ? (0, l.jsxs)(F.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(X._, { size: "sm", color: Y.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(a.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ee.intl.format(Z.default["8wD0Un"], { boostPrice: d }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(a.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ee.intl.string(Z.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function el(e) {
    let { guildId: t, insertionTarget: n, onAddWidget: a, ...s } = e,
        u = (0, i.yK)(
            [b.A, S.A],
            () => {
                let e = S.A.getDraft(t)?.widgets ?? [],
                    n = b.A.getWidgets(t) ?? [];
                return (0, Q.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            I(t);
        }, [t]),
        (0, l.jsx)(q.a, {
            title: ee.intl.string(Z.default.L8Xfoo),
            subtitle: ee.intl.string(Z.default["N8nJ+T"]),
            actions: [],
            ...s,
            children: (0, l.jsx)("div", {
                className: et.Vg,
                children: u.map((e) =>
                    (0, l.jsx)(
                        en,
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
function er(e, t, n) {
    let r = (r) => (0, l.jsx)(el, { guildId: e, insertionTarget: n, onAddWidget: t, ...r });
    (0, H.openModalLazy)(() => Promise.resolve(r), { modalKey: "guild-space-add-widget" });
}
let ei = r.createContext(null);
function ea(e) {
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
    return (0, l.jsx)(ei.Provider, { value: s, children: t });
}
function es() {
    let e = r.useContext(ei);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var eu = n(992303);
function ec(e) {
    let { guildId: t, isEditing: s, isPublished: c, isRemovalPending: d } = e,
        { addWidget: o } = es(),
        {
            saveStatus: f,
            panelCount: g,
            saveErrorMessage: m,
            hasChanges: h,
        } = (0, i.cf)(
            [S.A],
            () => ({
                saveStatus: S.A.getSaveStatus(t),
                panelCount: S.A.getDraft(t)?.widgets.length ?? 0,
                saveErrorMessage: S.A.getSaveErrorMessage(t),
                hasChanges: S.A.hasChanges(t),
            }),
            [t],
        ),
        E = "saving" === f,
        p = E || d,
        x = p || !h,
        C = m ?? ee.intl.string(Z.default.HmFYc5),
        A = r.useCallback(() => {
            if (!x) {
                if (!c)
                    return void (0, H.openModalLazy)(async () => {
                        let { default: e } = await n.e("642138").then(n.bind(n, 921633));
                        return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                    });
                (0, y.Fj)(t);
            }
        }, [t, c, x]),
        _ = r.useCallback(() => {
            (0, y.iX)(t);
        }, [t]);
    return (0, l.jsx)(B.F, {
        component: "div",
        children:
            s &&
            (0, l.jsx)(W.F, {
                className: eu.K,
                children: (0, l.jsx)(O.A, {
                    submitting: E,
                    disabled: x,
                    onSave: A,
                    onReset: p ? void 0 : _,
                    message: (0, l.jsxs)(F.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(z.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: K.T,
                                text: ee.intl.string(Z.default.L8Xfoo),
                                disabled: p,
                                onClick: () => er(t, o),
                            }),
                            "error" === f
                                ? (0, l.jsx)(u.m, {
                                      text: C,
                                      children: (0, l.jsx)(a.E, {
                                          variant: "text-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                                  })
                                : (0, l.jsx)(a.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      children: ee.intl.format(Z.default.hpAg80, { panelCount: g }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ed = n(503698),
    eo = n.n(ed),
    ef = n(425763),
    eg = n(754674),
    em = n(294918);
function eh(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: em.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eE = n(675816);
let ep = "GUILD_SPACE_WIDGET",
    ex = "GUILD_SPACE_WIDGETS",
    eC = `${ep}_${ex}`;
var eA = n(204581),
    e_ = n(333007);
let ev = "canvas, iframe, video";
function eI(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, eE.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eC,
            item: e.getItem(),
        })),
        u = (0, eA.u)(),
        c = r.useRef(null),
        d = r.useRef(null);
    return (r.useLayoutEffect(() => {
        let e = c.current;
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
        let e = d.current,
            n = c.current,
            l = a ? s?.itemPreviewProps?.getSourceElement?.() : null;
        if (!a || t || null == e || null == n || null == l) return;
        let r = l.cloneNode(!0);
        n.style.width = `${l.getBoundingClientRect().width}px`;
        let i = l.querySelectorAll(ev);
        return (
            r.querySelectorAll(ev).forEach((e, t) => {
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
        let e = c.current;
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
        : (0, e_.createPortal)(
              (0, l.jsx)("div", {
                  ref: c,
                  className: em.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: d, className: em.w4 }),
              }),
              document.body,
          );
}
var eb = n(949152);
function ey(e) {
    let { column: t, children: n, isPointerDragging: i, registerColumnElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, c] = (0, eb.H)({
            accept: eC,
            canDrop: () => i,
            hover: (e, n) => {
                if (!i) return;
                let l = n.getClientOffset();
                null != l && s(e.id, t, l);
            },
        }),
        d = r.useCallback(
            (e) => {
                ((u.current = e), a(t, e));
            },
            [t, a],
        );
    return (
        r.useLayoutEffect(
            () => (
                c(u),
                () => {
                    c(null);
                }
            ),
            [c],
        ),
        (0, l.jsx)("div", { ref: d, className: em.fi, children: n })
    );
}
function eS(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: s }, u] = (0, eb.H)({
            accept: eC,
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
        (0, l.jsx)("div", { ref: a, className: eo()(em.wr, { [em.SX]: s }), "data-dnd-name": n })
    );
}
var eD = n(451395),
    ej = n(42499),
    eG = n(539888);
function eT(e) {
    let {
            guildId: t,
            widget: n,
            column: a,
            positionNumber: s,
            columnWidgetCount: u,
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
            onCommitConfig: C,
            isSettling: A,
            onMotionEnd: _,
            isEntrancePreparing: v,
            isEntering: I,
            onEntranceAnimationEnd: b,
            isRemoving: y,
            isRemovalPending: S,
            onRemovalAnimationEnd: j,
        } = e,
        G = r.useRef(null),
        T = r.useRef(null),
        L = (0, i.bG)([D.A], () => (n.requires_hydration ? D.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        w = (0, ej.K)(t, n),
        { isDragging: N, dragSourcePosition: R } = (0, eD.gY)({
            dragRef: G,
            dropRef: T,
            index: c,
            listType: ex,
            itemType: ep,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => T.current },
            onDrop: (e) => g(e.id),
            onReorder: f,
            onEnd: (e, t) => m(e.id, t.didDrop()),
            canDrag: !E && !S,
        }),
        P = null == R ? null : R < d ? 0 : 1,
        k = null != P && P !== a,
        U = o && null != R && (k || R > c),
        M = o && null != R && !k && R < c,
        B = r.useCallback(
            (e) => {
                ((T.current = e), h(n.id, e));
            },
            [h, n.id],
        );
    return (0, l.jsxs)("div", {
        ref: B,
        className: eo()(em.NI, { [em.cB]: N, [em.Ni]: A, [em.fJ]: v, [em.Hu]: I, [em.kC]: y, [em.ne]: U, [em.O3]: M }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (y ? j(n.id) : A ? _(n.id) : I && b(n.id));
        },
        "data-dnd-name": p(a, s, u),
        children: [
            I &&
                (0, l.jsx)("div", {
                    className: em.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: em.te }),
                }),
            (0, l.jsx)(eG.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: L,
                lock: w,
                dragHandleRef: G,
                disabled: E,
                onRemove: () => x(n.id),
                onCommitConfig: C,
            }),
        ],
    });
}
function eL(e, t, n, l) {
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
var ew = n(987476);
function eN(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = ee.intl.formatToPlainString(1 === t ? Z.default.U0SqHk : Z.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(F.B, {
        className: em.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(a.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: ee.intl.string(Z.default["/OtM0k"]),
            }),
            (0, l.jsx)(z.$, {
                variant: "secondary",
                size: "sm",
                icon: K.T,
                text: ee.intl.string(Z.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eR = n(663341);
function eP(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = ee.intl.formatToPlainString(1 === t ? Z.default["h9P9H+"] : Z.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)($.D, {
        className: eo()(em.kZ, { [em.j2]: "before" === r, [em.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: em.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: em.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eR.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function ek(e, t, n) {
    return ee.intl.formatToPlainString(1 === e ? Z.default.O9RvHQ : Z.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eU(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: a, scrollerRef: s } = e,
        u = r.useMemo(() => (0, eg.Rl)(n), [n]),
        c = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != ew.m[t];
                    }),
                ),
            [u],
        ),
        d = r.useMemo(() => [...c[0], ...c[1]], [c]),
        o = (0, eE.V)((e) =>
            e.isDragging() && e.getItemType() === eC
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        f = o.isDragging,
        g = o.isDragging ? o.widgetId : null,
        m = (0, ef.VU)(),
        h = (0, i.bG)([J.Ay], () => J.Ay.useReducedMotion),
        E = (0, i.bG)([S.A], () => "saving" === S.A.getSaveStatus(t), [t]),
        p = f && !m,
        [x, C] = r.useState(null),
        A = x?.type === "removing" ? x.widgetId : null,
        _ = null != A;
    r.useLayoutEffect(() => {
        h && x?.type === "settling" && C(null);
    }, [h, x]);
    let v = r.useCallback(
            (e, n, l) => {
                ((0, y.j0)(t, e, n, l), h || C({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: I,
            draggedLocation: b,
            getColumnElement: D,
            getSlotElement: j,
            gridDropSurfaceRef: G,
            handleColumnHover: T,
            handleDragEnd: L,
            canAcceptPointerDrop: w,
            placeholderHeight: N,
            registerColumnElement: R,
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
                C = r.useRef(null),
                A = r.useRef([null, null]),
                _ = r.useRef(new Map()),
                [v, I] = r.useState(null),
                { stopAutoScroll: b, updatePointerY: y } =
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
                                        let c = Math.ceil(24 * (1 - (u < 0 ? l - a : s - l) / 96));
                                        (null != r ? r.scrollBy({ top: u * c }) : window.scrollBy({ top: u * c }),
                                            (t.current = requestAnimationFrame(e)));
                                    })));
                        },
                        [C],
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
                        c = r.useCallback(() => {
                            (a.current.clear(), u());
                        }, [u]),
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
                                    function c() {
                                        s.current.get(n) === u && s.current.delete(n);
                                    }
                                    (s.current.set(n, u), (u.onfinish = c), (u.oncancel = c));
                                }),
                                e.clear());
                        }, [u, t, n, l, i]),
                        r.useEffect(() => u, [u]),
                        { clearSlotMotion: c, snapshotSlotRects: d }
                    );
                })({ columns: a, pendingDestination: m, reduceMotion: f, slotElementsRef: _ }),
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
                G = c && m?.widgetId === u && (null == j || m.column !== j.column || m.index !== j.index) ? m : null,
                T = r.useCallback((e, t) => {
                    A.current[e] = t;
                }, []),
                L = r.useCallback((e) => A.current[e] ?? null, []),
                w = r.useCallback((e, t) => {
                    null == t ? _.current.delete(e) : _.current.set(e, t);
                }, []),
                N = r.useCallback((e) => _.current.get(e) ?? null, []),
                R = r.useCallback((e, t, n) => {
                    if (e === t) return !0;
                    let l = A.current[0]?.getBoundingClientRect(),
                        r = A.current[1]?.getBoundingClientRect();
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
                        y(l.y);
                        let r = E.current?.column ?? j?.column;
                        if (null == r || !R(r, t, l.x)) return;
                        let i =
                            a[t]?.filter((t) => {
                                let { id: n } = t;
                                return n !== e;
                            }).length ?? 0;
                        ((p.current = { widgetId: e, column: t, index: Math.max(0, Math.min(n, i)) }),
                            null == x.current && (x.current = requestAnimationFrame(P)));
                    },
                    [P, a, R, j?.column, o, y],
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
                        (A.current.forEach((e, r) => {
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
                [, B] = (0, eb.H)({
                    accept: eC,
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
                H = r.useCallback((e, t) => (0, eg.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                W = r.useCallback(() => {
                    (null != x.current && cancelAnimationFrame(x.current),
                        (x.current = null),
                        (p.current = null),
                        (E.current = null),
                        h(null),
                        I(null),
                        S(),
                        b());
                }, [S, b]),
                F = r.useCallback(() => c, [c]),
                z = r.useCallback(
                    (e, t) => {
                        let n = O(e);
                        (t &&
                            !d &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            g(e, n.column, H(e, n)),
                            W());
                    },
                    [W, j, O, H, d, g],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!c || null == u) return;
                    let e = _.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== v && I(t);
                }, [u, c, v]),
                r.useEffect(
                    () => () => {
                        null != x.current && cancelAnimationFrame(x.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: L,
                    getSlotElement: N,
                    gridDropSurfaceRef: C,
                    handleColumnHover: U,
                    handleDragEnd: z,
                    canAcceptPointerDrop: F,
                    placeholderHeight: v,
                    registerColumnElement: T,
                    registerSlotElement: w,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: c,
            draftColumns: u,
            draggedWidgetId: g,
            isPointerDragging: p,
            isKeyboardMode: m,
            isSaving: E,
            reduceMotion: h,
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
                    snapshotSlotRects: c,
                    getSlotElement: d,
                } = e,
                { registerAddWidgetHandler: o } = es(),
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
                            (m.current = (0, y.lr)(t, e.type, e.name, e.locked, n)),
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
                    ((m.current = null), s)
                        ? eL(l, u, !0, () => void 0)
                        : (g((e) => new Map(e).set(t.id, "preparing")),
                          eL(l, u, !1, () => {
                              l.isConnected &&
                                  g((e) => ("preparing" !== e.get(t.id) ? e : new Map(e).set(t.id, "playing")));
                          }));
                }, [d, h, s, u, n]),
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
            isRemovalPending: _,
            reduceMotion: h,
            scrollerRef: s,
            snapshotSlotRects: k,
            getSlotElement: j,
        }),
        H = r.useCallback((e) => {
            C((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        W = r.useCallback(
            (e) => {
                (C(null == e ? null : { type: "removing", widgetId: e }), a(null != e));
            },
            [a],
        ),
        F = r.useCallback(
            (e) => {
                A === e && (k(e), (0, y.GP)(t, e), W(null));
            },
            [t, A, W, k],
        ),
        z = r.useCallback(
            (e) => {
                if (!E && !_) {
                    if ((U(e), h)) {
                        (k(e), (0, y.GP)(t, e));
                        return;
                    }
                    W(e);
                }
            },
            [U, t, _, E, h, W, k],
        );
    (r.useLayoutEffect(() => {
        h && null != A && F(A);
    }, [F, h, A]),
        r.useEffect(() => () => a(!1), [a]));
    let K = r.useCallback(
            (e, n) => {
                let l = d[e],
                    r = d[n];
                null != l && null != r && (0, y.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, d],
        ),
        q = r.useCallback(
            (e, n) => {
                (0, y.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        $ = r.useCallback(
            (e, n) => {
                let l = (0, eg.O6)(u[e] ?? [], c[e] ?? [], n);
                er(t, M, { column: e, index: l });
            },
            [c, u, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: G,
                className: em.Z7,
                children: (0, l.jsx)("div", {
                    className: eo()(em.Vg, { [em.nl]: p }),
                    children: c.map((e, n) =>
                        (0, l.jsxs)(
                            ey,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: R,
                                onDragHover: T,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !f)
                                            return (0, l.jsx)(eN, { column: n, disabled: E || _, onInsert: $ });
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
                                        })(e, n, I).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(eh, { height: N }, "drag-placeholder");
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
                                                o = d.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                g = e.findIndex((e) => {
                                                    let { id: t } = e;
                                                    return t === a.id;
                                                }),
                                                h = !f && !E && !_;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: em.O4,
                                                    children: [
                                                        h &&
                                                            (0, l.jsx)(eP, {
                                                                column: n,
                                                                index: g,
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
                                                            leftColumnCount: c[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: ek,
                                                            onReorder: K,
                                                            onDrop: w,
                                                            onDragEnd: L,
                                                            registerSlotElement: P,
                                                            isSettling:
                                                                x?.type === "settling" && x.widgetId === a.id && !m,
                                                            onMotionEnd: H,
                                                            isEntrancePreparing: B(a.id),
                                                            isEntering: O(a.id),
                                                            onEntranceAnimationEnd: U,
                                                            isRemoving: A === a.id,
                                                            isRemovalPending: _,
                                                            onRemovalAnimationEnd: F,
                                                            onRemove: z,
                                                            onCommitConfig: (e) => (0, y.Vk)(t, a.id, e),
                                                        }),
                                                        h &&
                                                            g === e.length - 1 &&
                                                            (0, l.jsx)(eP, {
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
                                    m &&
                                        f &&
                                        !E &&
                                        (0, l.jsx)(eS, {
                                            column: n,
                                            dndName: ee.intl.string(1 === n ? Z.default.fWef0G : Z.default.KcdDyT),
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
            (0, l.jsx)(eI, { isKeyboardMode: m, targetColumn: I?.column ?? b?.column ?? null, getColumnElement: D }),
        ],
    });
}
var eM = n(529609),
    eB = n(191023),
    eO = n(241326),
    eH = n(297264),
    eW = n(22231),
    eF = n(654107),
    ez = n(548118),
    eK = n(837011),
    eq = n(649640),
    e$ = n(2553),
    eV = n(405810),
    eX = n(498642),
    eY = n(486020),
    eJ = n(488428),
    eQ = n(776231),
    eZ = n(986898);
function e0(e) {
    let { guildId: t, header: n, canEdit: s, isEditing: d, isSaving: o } = e,
        f = (0, i.bG)([x.A], () => x.A.getGuild(t), [t]),
        g = (0, i.bG)([eX.A], () => eX.A.getOnlineCount(t), [t]),
        m = (0, i.bG)([eX.A], () => eX.A.getMemberCount(t), [t]),
        h = n.custom_banner,
        E = (0, i.bG)([eK.A], () => eK.A.getProfile(t), [t]),
        p = (0, eq.b2)().hex(),
        C = null == f ? null : eY.Ay.getGuildIconURL({ id: f.id, icon: f.icon, size: 64 }),
        A = (0, eF.Ay)(C, p),
        _ = (0, eq.n6)(E?.brandColorPrimary ?? A),
        I = r.useMemo(
            () =>
                null == f
                    ? null
                    : "string" == typeof h
                      ? h
                      : void 0 === h && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eY.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = v.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, eQ.kr)(1200 * (0, eQ.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${eJ.stringify(s)}`));
                          })(f.id, n.custom_banner_hash)
                        : eY.Ay.getGuildBannerURL({ id: f.id, banner: f.banner }),
            [f, h, n.custom_banner_hash],
        ),
        b = "string" == typeof h || (void 0 === h && null != n.custom_banner_hash);
    return null == f
        ? null
        : (0, l.jsxs)("div", {
              className: eZ.wx,
              children: [
                  null != I
                      ? (0, l.jsx)("img", { className: eZ.vK, src: I, alt: "" })
                      : (0, l.jsx)("div", { className: eZ.vK, style: { background: _ }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: eZ.f5, "aria-hidden": !0 }),
                  d
                      ? (0, l.jsxs)("div", {
                            className: eZ.j0,
                            children: [
                                (0, l.jsx)(eV.A, {
                                    variant: "overlay-secondary",
                                    icon: eB.ImageIcon,
                                    size: "sm",
                                    text: ee.intl.string(Z.default["EN+0gW"]),
                                    onChange: (e) => (0, y.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, e$.A)(0xa00000),
                                    disabled: o,
                                }),
                                b
                                    ? (0, l.jsx)(u.m, {
                                          text: ee.intl.string(Z.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(c.K, {
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              icon: eO.TrashIcon,
                                              "aria-label": ee.intl.string(Z.default["CunK+J"]),
                                              onClick: () => (0, y.pC)(t, null),
                                              disabled: o,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: eZ.D_,
                      children: [
                          (0, l.jsx)(ez.Ay, {
                              className: eZ.Kk,
                              guild: f,
                              size: ez.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: eZ.pq,
                              children: [
                                  (0, l.jsx)(eH.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: f.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: eZ.M1,
                                      children: [
                                          null != g
                                              ? (0, l.jsxs)("div", {
                                                    className: eZ.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eZ.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "text-xs/semibold",
                                                            color: "currentColor",
                                                            children: ee.intl.format(Z.default.G08ClG, { count: g }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != m
                                              ? (0, l.jsxs)("div", {
                                                    className: eZ.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: eZ.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(a.E, {
                                                            variant: "text-xs/semibold",
                                                            color: "currentColor",
                                                            children: ee.intl.format(Z.default["rp7bx+"], { count: m }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: eZ.dJ,
                                              children: [
                                                  (0, l.jsx)(X._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(a.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "currentColor",
                                                      children: ee.intl.format(Z.default.DwFqrb, {
                                                          count: f.premiumSubscriberCount,
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
                      !d &&
                      (0, l.jsx)(z.$, {
                          icon: eW.PencilIcon,
                          text: ee.intl.string(Z.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, y.Wd)(t),
                      }),
              ],
          });
}
var e1 = n(554146),
    e2 = n(942857),
    e6 = n(131607),
    e3 = n(967198),
    e9 = n(725041),
    e8 = n(49999),
    e5 = n(312152);
function e7(e) {
    let t,
        { guildId: A } = e,
        _ = r.useRef(null),
        j = r.useRef(null),
        [G, B] = r.useState(!1),
        [O, W, F] = (0, i.yK)([L.A], () => [L.A.getSpace(A), L.A.getFetchStatus(A), L.A.isInBackoff(A)], [A]);
    (r.useEffect(() => {
        let e = _.current !== A;
        ((_.current = A), ("idle" === W || e) && (0, C.u)(A, { shouldRefetch: e }));
    }, [W, A]),
        r.useEffect(() => {
            (0, g.L4)(A, !1, { respectBackoff: !0 });
        }, [A]),
        (t = (0, U.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = k.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === R.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, P._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let z = (0, i.bG)([x.A], () => x.A.getGuild(A), [A]),
        K = (0, N.mN)(z),
        q = (0, i.bG)([b.A], () => b.A.getFetchStatus(A), [A]);
    r.useEffect(() => {
        K && "idle" === q && I(A);
    }, [K, q, A]);
    let $ = z?.guildSpaceSettings?.publish_status === w.B.PUBLISHED,
        V = r.useCallback(() => (0, C.W)(A, { publish_status: w.B.PUBLISHED }), [A]),
        [X, Y] = (0, i.yK)([S.A], () => [S.A.getDraft(A), S.A.getSaveStatus(A)], [A]),
        J = K && null != X;
    !(function (e, t) {
        let a = (0, H.useHasModalOpen)(e9.J),
            s = (0, i.bG)([e3.A], () => e3.A.getGuildId()),
            u = (0, e2.A)(),
            [c, d] = (0, e6.kn)(t && s === e && !u ? [e1.M.GUILD_SPACE_NUX_MODAL] : [], {
                groupName: e8.m.GUILD_SPACE_NUX,
                bypassAutoDismiss: !0,
            }),
            o = r.useRef(!1),
            f = c === e1.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, s]),
            r.useEffect(() => {
                !f ||
                    a ||
                    o.current ||
                    ((o.current = !0),
                    (0, H.openModalLazy)(
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
                        { modalKey: e9.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, a, d, f]));
    })(A, K && !J && null != O);
    let Q = J ? X.widgets : O?.widgets,
        Z = r.useMemo(() => Q?.some((e) => e.locked) ?? !1, [Q]);
    r.useEffect(() => {
        K && Z && ((0, E.AK)(A), (0, E.Xd)(A));
    }, [K, A, Z]);
    let et = (0, i.bG)(
        [p.A, b.A],
        () =>
            O?.widgets.some((e) => {
                let t = b.A.getWidget(A, e.type)?.powerup_sku_id;
                return e.locked && null != t && p.A.getStateForGuild(A)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [A, O],
    );
    (r.useEffect(() => {
        et && (0, C.u)(A, { shouldRefetch: !0 });
    }, [A, et]),
        r.useEffect(() => {
            K || null == X || "saving" === Y || (0, y.iX)(A);
        }, [K, X, Y, A]));
    let en = r.useMemo(
            () =>
                (Q ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [Q],
        ),
        el = (0, i.yK)([D.A], () => D.A.getWidgetIdsToHydrate(A, en), [A, en]),
        er = r.useRef(null);
    r.useEffect(() => {
        if (er.current !== A && null != O) {
            ((er.current = A), T(A, en, !0));
            return;
        }
        T(A, el);
    }, [A, O, en, el]);
    let ei = r.useCallback(() => {
        m.A.open(A, v.BEX.ENGAGEMENT, void 0, v.nd0.ENGAGEMENT_GUILD_SPACE);
    }, [A]);
    return null == O || null == Q
        ? (0, l.jsx)("div", {
              className: e5.MY,
              children: (0, l.jsx)("div", {
                  className: e5.F,
                  children:
                      "error" !== W || F
                          ? (0, l.jsx)(s.y, {
                                type: s.y.Type.SPINNING_CIRCLE,
                                "aria-label": ee.intl.string(ee.t.ZTNur7),
                            })
                          : (0, l.jsx)(a.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ee.intl.string(ee.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(ea, {
              children: (0, l.jsxs)("div", {
                  className: e5.MY,
                  children: [
                      (0, l.jsxs)(h.A, {
                          toolbar:
                              K &&
                              (0, l.jsx)(u.m, {
                                  text: ee.intl.string(ee.t.OBskVU),
                                  children: (0, l.jsx)(c.K, {
                                      type: "button",
                                      variant: "icon-only",
                                      icon: d.SettingsIcon,
                                      "aria-label": ee.intl.string(ee.t["3D5yo/"]),
                                      size: "md",
                                      onClick: ei,
                                  }),
                              }),
                          children: [
                              (0, l.jsx)(h.A.Icon, { icon: o.HomeIcon, "aria-hidden": !0 }),
                              (0, l.jsx)(h.A.Title, { children: ee.intl.string(ee.t["04IVMq"]) }),
                          ],
                      }),
                      (0, l.jsx)(f.Ch, {
                          ref: j,
                          className: e5.XG,
                          children: (0, l.jsxs)("div", {
                              className: e5.Qs,
                              children: [
                                  K && !$ ? (0, l.jsx)(M.A, { onPublish: V }) : null,
                                  (0, l.jsx)(e0, {
                                      guildId: A,
                                      header: J ? X.header : O.header,
                                      isEditing: J,
                                      canEdit: K,
                                      isSaving: "saving" === Y,
                                  }),
                                  J
                                      ? (0, l.jsx)(
                                            eU,
                                            { guildId: A, widgets: Q, onRemovalPendingChange: B, scrollerRef: j },
                                            A,
                                        )
                                      : (0, l.jsx)(eM.A, { canEdit: K, guildId: A, widgets: Q }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(ec, { guildId: A, isEditing: J, isPublished: $, isRemovalPending: G }),
                  ],
              }),
          });
}
