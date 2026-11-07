(n.r(t), n.d(t, { default: () => tl }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(613412),
    a = n(855986),
    s = n(554146),
    u = n(834730),
    d = n(289873),
    c = n(866665),
    o = n(408278),
    g = n(625903),
    f = n(332837),
    m = n(516521),
    h = n(139286),
    E = n(826673),
    p = n(250527),
    A = n(727419),
    C = n(742589),
    x = n(533993),
    _ = n(645619),
    I = n(71393),
    b = n(473953),
    v = n(620632),
    S = n(73153),
    y = n(652215);
async function D(e) {
    S.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await v.Bo.get({ url: y.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        S.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        S.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var j = n(960960),
    G = n(202762),
    w = n(88592),
    R = n(363957),
    T = n(513446);
let N = 0;
async function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && S.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = R.A.getWidgetIdsToHydrate(e, t, n);
    if (0 === l.length) return;
    let r = N++;
    S.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await v.Bo.get({
            url: y.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        S.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        S.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, T.a)(t) });
    }
}
var P = n(716357),
    k = n(593673),
    U = n(49303),
    M = n(313627),
    B = n(344351),
    H = n(795816),
    O = n(933958),
    W = n(44167),
    F = n(872188),
    z = n(628274),
    K = n(36525),
    q = n(192308),
    $ = n(871682),
    V = n(331322),
    X = n(821609),
    Y = n(499373),
    J = n(189213),
    Q = n(939249),
    Z = n(245604),
    ee = n(104510),
    et = n(646514),
    en = n(775602),
    el = n(855823),
    er = n(135294),
    ei = n(792996),
    ea = n(517228);
function es(e) {
    let { widget: t, onClick: n } = e,
        r = (0, a.bG)([en.Ay], () => en.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: s } = t.assets,
        d = (r ? null : s) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(Q.D, {
        className: ea.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: ea.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: ea.YI, src: d, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: ea.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: ea.Ti, children: (0, l.jsx)("div", { className: ea.dK }) }),
                            (0, l.jsxs)(V.B, {
                                className: ea.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(Z.CirclePlusIcon, {}),
                                    (0, l.jsx)(u.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: ei.intl.string(er.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(V.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(u.E, { variant: "body-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(V.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(ee.BoostGemIcon, {
                                      size: "sm",
                                      color: et.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                  }),
                                  (0, l.jsx)(u.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: ei.intl.format(er.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(u.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: ei.intl.string(er.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let { guildId: t, insertionTarget: n, onAddWidget: i, ...s } = e,
        u = (0, a.yK)(
            [j.A, w.A],
            () => {
                let e = w.A.getDraft(t)?.widgets ?? [],
                    n = j.A.getWidgets(t) ?? [];
                return (0, el.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            D(t);
        }, [t]),
        (0, l.jsx)(J.a, {
            title: ei.intl.string(er.default.L8Xfoo),
            subtitle: ei.intl.string(er.default["N8nJ+T"]),
            actions: [],
            ...s,
            children: (0, l.jsx)("div", {
                className: ea.Vg,
                children: u.map((e) =>
                    (0, l.jsx)(
                        es,
                        {
                            widget: e,
                            onClick: () => {
                                (i(e, n), s.onClose());
                            },
                        },
                        e.type,
                    ),
                ),
            }),
        })
    );
}
function ed(e, t, n) {
    let r = (r) => (0, l.jsx)(eu, { guildId: e, insertionTarget: n, onAddWidget: t, ...r });
    (0, q.mM)(() => Promise.resolve(r), { modalKey: "guild-space-add-widget" });
}
let ec = r.createContext(null);
function eo(e) {
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
    return (0, l.jsx)(ec.Provider, { value: s, children: t });
}
function eg() {
    let e = r.useContext(ec);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var ef = n(992303);
function em(e) {
    let { guildId: t, isEditing: i, isPublished: s, isRemovalPending: d } = e,
        { addWidget: o } = eg(),
        {
            saveStatus: g,
            panelCount: f,
            saveErrorMessage: m,
            hasChanges: h,
        } = (0, a.cf)(
            [w.A],
            () => ({
                saveStatus: w.A.getSaveStatus(t),
                panelCount: w.A.getDraft(t)?.widgets.length ?? 0,
                saveErrorMessage: w.A.getSaveErrorMessage(t),
                hasChanges: w.A.hasChanges(t),
            }),
            [t],
        ),
        E = "saving" === g,
        p = E || d,
        A = p || !h,
        C = m ?? ei.intl.string(er.default.HmFYc5),
        x = r.useCallback(() => {
            if (!A) {
                if (!s)
                    return void (0, q.mM)(async () => {
                        let { default: e } = await n.e(642138).then(n.bind(n, 921633));
                        return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                    });
                (0, G.Fj)(t);
            }
        }, [t, s, A]),
        _ = r.useCallback(() => {
            (0, G.iX)(t);
        }, [t]);
    return (0, l.jsx)(z.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)($.F, {
                className: ef.K,
                children: (0, l.jsx)(K.A, {
                    submitting: E,
                    disabled: A,
                    onSave: x,
                    onReset: p ? void 0 : _,
                    message: (0, l.jsxs)(V.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)(X.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: Y.PlusMediumIcon,
                                text: ei.intl.string(er.default.L8Xfoo),
                                disabled: p,
                                onClick: () => ed(t, o),
                            }),
                            "error" === g
                                ? (0, l.jsx)(c.m, {
                                      text: C,
                                      children: (0, l.jsx)(u.E, {
                                          variant: "body-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                                  })
                                : (0, l.jsx)(u.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      children: ei.intl.format(er.default.hpAg80, { panelCount: f }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var eh = n(503698),
    eE = n.n(eh),
    ep = n(425763),
    eA = n(754674),
    eC = n(294918);
function ex(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: eC.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var e_ = n(675816);
let eI = "GUILD_SPACE_WIDGET",
    eb = "GUILD_SPACE_WIDGETS",
    ev = `${eI}_${eb}`;
var eS = n(204581),
    ey = n(333007);
let eD = "canvas, iframe, video";
function ej(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, e_.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === ev,
            item: e.getItem(),
        })),
        u = (0, eS.u)(),
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
        let i = l.querySelectorAll(eD);
        return (
            r.querySelectorAll(eD).forEach((e, t) => {
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
            r.classList.remove(eC.cB, eC.Ni),
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
        : (0, ey.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: eC.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: eC.w4 }),
              }),
              document.body,
          );
}
var eG = n(840508);
function ew(e) {
    let { column: t, children: n, isPointerDragging: i, registerColumnElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, d] = (0, eG.H)({
            accept: ev,
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
        (0, l.jsx)("div", { ref: c, className: eC.fi, children: n })
    );
}
function eR(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: s }, u] = (0, eG.H)({
            accept: ev,
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
        (0, l.jsx)("div", { ref: a, className: eE()(eC.wr, { [eC.SX]: s }), "data-dnd-name": n })
    );
}
var eT = n(451395),
    eN = n(42499),
    eL = n(904109);
function eP(e) {
    let {
            guildId: t,
            widget: n,
            column: i,
            positionNumber: s,
            columnWidgetCount: u,
            flatIndex: d,
            leftColumnCount: c,
            isKeyboardMode: o,
            onReorder: g,
            onDrop: f,
            onDragEnd: m,
            registerSlotElement: h,
            isSaving: E,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: C,
            isSettling: x,
            onMotionEnd: _,
            isEntrancePreparing: I,
            isEntering: b,
            onEntranceAnimationEnd: v,
            isRemoving: S,
            isRemovalPending: y,
            onRemovalAnimationEnd: D,
        } = e,
        j = r.useRef(null),
        G = r.useRef(null),
        w = (0, a.bG)([R.A], () => (n.requires_hydration ? R.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        T = (0, eN.K)(t, n),
        { isDragging: N, dragSourcePosition: L } = (0, eT.gY)({
            dragRef: j,
            dropRef: G,
            index: d,
            listType: eb,
            itemType: eI,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => G.current },
            onDrop: (e) => f(e.id),
            onReorder: g,
            onEnd: (e, t) => m(e.id, t.didDrop()),
            canDrag: !E && !y,
        }),
        P = null == L ? null : L < c ? 0 : 1,
        k = null != P && P !== i,
        U = o && null != L && (k || L > d),
        M = o && null != L && !k && L < d,
        B = r.useCallback(
            (e) => {
                ((G.current = e), h(n.id, e));
            },
            [h, n.id],
        );
    return (0, l.jsxs)("div", {
        ref: B,
        className: eE()(eC.NI, { [eC.cB]: N, [eC.Ni]: x, [eC.fJ]: I, [eC.Hu]: b, [eC.kC]: S, [eC.ne]: U, [eC.O3]: M }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (S ? D(n.id) : x ? _(n.id) : b && v(n.id));
        },
        "data-dnd-name": p(i, s, u),
        children: [
            b &&
                (0, l.jsx)("div", {
                    className: eC.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: eC.te }),
                }),
            (0, l.jsx)(eL.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: w,
                lock: T,
                dragHandleRef: j,
                disabled: E,
                onRemove: () => A(n.id),
                onCommitConfig: C,
            }),
        ],
    });
}
function ek(e, t, n, l) {
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
var eU = n(220744);
function eM(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = ei.intl.formatToPlainString(1 === t ? er.default.U0SqHk : er.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(V.B, {
        className: eC.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(u.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: ei.intl.string(er.default["/OtM0k"]),
            }),
            (0, l.jsx)(X.$, {
                variant: "secondary",
                size: "sm",
                icon: Y.PlusMediumIcon,
                text: ei.intl.string(er.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eB = n(663341);
function eH(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = ei.intl.formatToPlainString(1 === t ? er.default["h9P9H+"] : er.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(Q.D, {
        className: eE()(eC.kZ, { [eC.j2]: "before" === r, [eC.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: eC.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: eC.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eB.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function eO(e, t, n) {
    return ei.intl.formatToPlainString(1 === e ? er.default.O9RvHQ : er.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eW(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: i, scrollerRef: s } = e,
        u = r.useMemo(() => (0, eA.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eU.m[t];
                    }),
                ),
            [u],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, e_.V)((e) =>
            e.isDragging() && e.getItemType() === ev
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        g = o.isDragging,
        f = o.isDragging ? o.widgetId : null,
        m = (0, ep.VU)(),
        h = (0, a.bG)([en.Ay], () => en.Ay.useReducedMotion),
        E = (0, a.bG)([w.A], () => "saving" === w.A.getSaveStatus(t), [t]),
        p = g && !m,
        [A, C] = r.useState(null),
        x = A?.type === "removing" ? A.widgetId : null,
        _ = null != x;
    r.useLayoutEffect(() => {
        h && A?.type === "settling" && C(null);
    }, [h, A]);
    let I = r.useCallback(
            (e, n, l) => {
                ((0, G.j0)(t, e, n, l), h || C({ type: "settling", widgetId: e }));
            },
            [t, h],
        ),
        {
            effectiveDestination: b,
            draggedLocation: v,
            getColumnElement: S,
            getSlotElement: y,
            gridDropSurfaceRef: D,
            handleColumnHover: j,
            handleDragEnd: R,
            canAcceptPointerDrop: T,
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
                [m, h] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                C = r.useRef(null),
                x = r.useRef([null, null]),
                _ = r.useRef(new Map()),
                [I, b] = r.useState(null),
                { stopAutoScroll: v, updatePointerY: S } =
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
                })({ columns: a, pendingDestination: m, reduceMotion: g, slotElementsRef: _ }),
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
                w = r.useCallback((e, t) => {
                    x.current[e] = t;
                }, []),
                R = r.useCallback((e) => x.current[e] ?? null, []),
                T = r.useCallback((e, t) => {
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
                        (D(e.widgetId), (E.current = e), h(e));
                }, [D]),
                k = r.useCallback(
                    (e, t, n, l) => {
                        if (o) return;
                        S(l.y);
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
                    [P, a, L, j?.column, o, S],
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
                [, B] = (0, eG.H)({
                    accept: ev,
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
            let H = r.useCallback((e) => {
                    let t = p.current;
                    if (t?.widgetId === e) return t;
                    let n = E.current;
                    return n?.widgetId === e ? n : null;
                }, []),
                O = r.useCallback((e, t) => (0, eA.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                W = r.useCallback(() => {
                    (null != A.current && cancelAnimationFrame(A.current),
                        (A.current = null),
                        (p.current = null),
                        (E.current = null),
                        h(null),
                        b(null),
                        y(),
                        v());
                }, [y, v]),
                F = r.useCallback(() => d, [d]),
                z = r.useCallback(
                    (e, t) => {
                        let n = H(e);
                        (t &&
                            !c &&
                            null != n &&
                            (null == j || n.column !== j.column || n.index !== j.index) &&
                            f(e, n.column, O(e, n)),
                            W());
                    },
                    [W, j, H, O, c, f],
                );
            return (
                r.useLayoutEffect(() => {
                    if (!d || null == u) return;
                    let e = _.current.get(u);
                    if (null == e) return;
                    let t = e.getBoundingClientRect().height;
                    t > 0 && t !== I && b(t);
                }, [u, d, I]),
                r.useEffect(
                    () => () => {
                        null != A.current && cancelAnimationFrame(A.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: G,
                    draggedLocation: j,
                    getColumnElement: R,
                    getSlotElement: N,
                    gridDropSurfaceRef: C,
                    handleColumnHover: U,
                    handleDragEnd: z,
                    canAcceptPointerDrop: F,
                    placeholderHeight: I,
                    registerColumnElement: w,
                    registerSlotElement: T,
                    snapshotSlotRects: D,
                }
            );
        })({
            columns: d,
            draftColumns: u,
            draggedWidgetId: f,
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
            isEntering: H,
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
                { registerAddWidgetHandler: o } = eg(),
                [g, f] = r.useState(() => new Map()),
                m = r.useRef(null),
                [h, E] = r.useState(0),
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
                            ((m.current = null),
                            d(),
                            (m.current = (0, G.lr)(t, e.type, e.name, e.locked, n)),
                            E((e) => e + 1));
                    },
                    [t, i, a, l, d],
                );
            return (
                r.useLayoutEffect(() => o(A), [A, o]),
                r.useLayoutEffect(() => {
                    let e = m.current;
                    if (null == e) return;
                    let t = n.find((t) => {
                            let { id: n } = t;
                            return n === e;
                        }),
                        l = null == t ? null : c(t.id);
                    if (null == t || null == l) {
                        m.current = null;
                        return;
                    }
                    ((m.current = null), s)
                        ? ek(l, u, !0, () => void 0)
                        : (f((e) => new Map(e).set(t.id, "preparing")),
                          ek(l, u, !1, () => {
                              l.isConnected &&
                                  f((e) => ("preparing" !== e.get(t.id) ? e : new Map(e).set(t.id, "playing")));
                          }));
                }, [c, h, s, u, n]),
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
            reduceMotion: h,
            scrollerRef: s,
            snapshotSlotRects: k,
            getSlotElement: y,
        }),
        O = r.useCallback((e) => {
            C((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        W = r.useCallback(
            (e) => {
                (C(null == e ? null : { type: "removing", widgetId: e }), i(null != e));
            },
            [i],
        ),
        F = r.useCallback(
            (e) => {
                x === e && (k(e), (0, G.GP)(t, e), W(null));
            },
            [t, x, W, k],
        ),
        z = r.useCallback(
            (e) => {
                if (!E && !_) {
                    if ((U(e), h)) {
                        (k(e), (0, G.GP)(t, e));
                        return;
                    }
                    W(e);
                }
            },
            [U, t, _, E, h, W, k],
        );
    (r.useLayoutEffect(() => {
        h && null != x && F(x);
    }, [F, h, x]),
        r.useEffect(() => () => i(!1), [i]));
    let K = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && (0, G.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        q = r.useCallback(
            (e, n) => {
                (0, G.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        $ = r.useCallback(
            (e, n) => {
                let l = (0, eA.O6)(u[e] ?? [], d[e] ?? [], n);
                ed(t, M, { column: e, index: l });
            },
            [d, u, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: D,
                className: eC.Z7,
                children: (0, l.jsx)("div", {
                    className: eE()(eC.Vg, { [eC.nl]: p }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            ew,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: L,
                                onDragHover: j,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !g)
                                            return (0, l.jsx)(eM, { column: n, disabled: E || _, onInsert: $ });
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
                                                return (0, l.jsx)(ex, { height: N }, "drag-placeholder");
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
                                                h = !g && !E && !_;
                                            return (0, l.jsxs)(
                                                "div",
                                                {
                                                    className: eC.O4,
                                                    children: [
                                                        h &&
                                                            (0, l.jsx)(eH, {
                                                                column: n,
                                                                index: f,
                                                                placement: "before",
                                                                onInsert: $,
                                                            }),
                                                        (0, l.jsx)(eP, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: m,
                                                            isSaving: E,
                                                            getDropLabel: eO,
                                                            onReorder: K,
                                                            onDrop: T,
                                                            onDragEnd: R,
                                                            registerSlotElement: P,
                                                            isSettling:
                                                                A?.type === "settling" && A.widgetId === a.id && !m,
                                                            onMotionEnd: O,
                                                            isEntrancePreparing: B(a.id),
                                                            isEntering: H(a.id),
                                                            onEntranceAnimationEnd: U,
                                                            isRemoving: x === a.id,
                                                            isRemovalPending: _,
                                                            onRemovalAnimationEnd: F,
                                                            onRemove: z,
                                                            onCommitConfig: (e) => (0, G.Vk)(t, a.id, e),
                                                        }),
                                                        h &&
                                                            f === e.length - 1 &&
                                                            (0, l.jsx)(eH, {
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
                                        g &&
                                        !E &&
                                        (0, l.jsx)(eR, {
                                            column: n,
                                            dndName: ei.intl.string(1 === n ? er.default.fWef0G : er.default.KcdDyT),
                                            onDropAtEnd: q,
                                        }),
                                    p && (0, l.jsx)("div", { className: eC.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(ej, { isKeyboardMode: m, targetColumn: b?.column ?? v?.column ?? null, getColumnElement: S }),
        ],
    });
}
var eF = n(529609),
    ez = n(191023),
    eK = n(241326),
    eq = n(534514),
    e$ = n(22231),
    eV = n(654107),
    eX = n(682163),
    eY = n(837011),
    eJ = n(649640),
    eQ = n(2553),
    eZ = n(405810),
    e0 = n(498642),
    e1 = n(486020),
    e2 = n(488428),
    e3 = n(776231),
    e6 = n(986898);
function e9(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: s, isSaving: d } = e,
        g = (0, a.bG)([I.A], () => I.A.getGuild(t), [t]),
        f = (0, a.bG)([e0.A], () => e0.A.getOnlineCount(t), [t]),
        m = (0, a.bG)([e0.A], () => e0.A.getMemberCount(t), [t]),
        h = n.custom_banner,
        E = (0, a.bG)([eY.A], () => eY.A.getProfile(t), [t]),
        p = (0, eJ.b2)().hex(),
        A = null == g ? null : e1.Ay.getGuildIconURL({ id: g.id, icon: g.icon, size: 64 }),
        C = (0, eV.Ay)(A, p),
        x = (0, eJ.n6)(E?.brandColorPrimary ?? C),
        _ = r.useMemo(
            () =>
                null == g
                    ? null
                    : "string" == typeof h
                      ? h
                      : void 0 === h && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = e1.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = y.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, e3.kr)(1200 * (0, e3.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${e2.As(s)}`));
                          })(g.id, n.custom_banner_hash)
                        : e1.Ay.getGuildBannerURL({ id: g.id, banner: g.banner }),
            [g, h, n.custom_banner_hash],
        ),
        b = "string" == typeof h || (void 0 === h && null != n.custom_banner_hash);
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e6.wx,
              children: [
                  null != _
                      ? (0, l.jsx)("img", { className: e6.vK, src: _, alt: "" })
                      : (0, l.jsx)("div", { className: e6.vK, style: { background: x }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e6.f5, "aria-hidden": !0 }),
                  s
                      ? (0, l.jsxs)("div", {
                            className: e6.j0,
                            children: [
                                (0, l.jsx)(eZ.A, {
                                    variant: "overlay-secondary",
                                    icon: ez.ImageIcon,
                                    size: "sm",
                                    text: ei.intl.string(er.default["EN+0gW"]),
                                    onChange: (e) => (0, G.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eQ.A)(0xa00000),
                                    disabled: d,
                                }),
                                b
                                    ? (0, l.jsx)(c.m, {
                                          text: ei.intl.string(er.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(o.K, {
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              icon: eK.TrashIcon,
                                              "aria-label": ei.intl.string(er.default["CunK+J"]),
                                              onClick: () => (0, G.pC)(t, null),
                                              disabled: d,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e6.D_,
                      children: [
                          (0, l.jsx)(eX.Ay, {
                              className: e6.Kk,
                              guild: g,
                              size: eX.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e6.pq,
                              children: [
                                  (0, l.jsx)(eq.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: g.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e6.M1,
                                      children: [
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e6.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e6.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: ei.intl.format(er.default.G08ClG, { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != m
                                              ? (0, l.jsxs)("div", {
                                                    className: e6.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e6.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(u.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: ei.intl.format(er.default["rp7bx+"], {
                                                                count: m,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e6.dJ,
                                              children: [
                                                  (0, l.jsx)(ee.BoostGemIcon, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(u.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "currentColor",
                                                      children: ei.intl.format(er.default.DwFqrb, {
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
                  i &&
                      !s &&
                      (0, l.jsx)(X.$, {
                          icon: e$.PencilIcon,
                          text: ei.intl.string(er.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, G.Wd)(t),
                      }),
              ],
          });
}
var e5 = n(942857),
    e4 = n(263775),
    e7 = n(967198),
    e8 = n(725041),
    te = n(49999),
    tt = n(412728),
    tn = n(312152);
function tl(e) {
    let t,
        { guildId: v } = e,
        S = r.useRef(null),
        T = r.useRef(null),
        [N, z] = r.useState(!1),
        [K, $, V] = (0, a.yK)([P.A], () => [P.A.getSpace(v), P.A.getFetchStatus(v), P.A.isInBackoff(v)], [v]),
        X = (0, a.bG)([j.A], () => j.A.getFetchStatus(v), [v]),
        Y = (0, a.bG)([I.A], () => I.A.getGuild(v), [v]),
        J = (0, M.mN)(Y),
        Q = r.useRef(!0);
    (r.useEffect(
        () => (
            (Q.current = !0),
            () => {
                Q.current = !1;
            }
        ),
        [],
    ),
        r.useEffect(() => {
            let e = S.current !== v;
            ((S.current = v),
                !(async function () {
                    let t = [];
                    (("idle" === $ || e) && t.push((0, b.u)(v, { shouldRefetch: e })),
                        J && "idle" === X && t.push(D(v)),
                        await Promise.all(t),
                        e &&
                            Q.current &&
                            S.current === v &&
                            J &&
                            "success" === P.A.getFetchStatus(v) &&
                            P.A.isSpaceMissing(v) &&
                            (0, G.Wd)(v));
                })());
        }, [J, X, $, v]),
        r.useEffect(() => {
            (0, p.L4)(v, !1, { respectBackoff: !0 });
        }, [v]),
        r.useEffect(() => {
            (0, E.Dr)(s.M.GUILD_SPACE_CHANNEL_ROW_HIGHLIGHT, { dismissAction: te.i.TAKE_ACTION });
        }, []),
        (t = (0, W.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = O.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === B.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, H._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let Z = null != K;
    (0, h.A)(
        { type: tt.z.PAGE, name: i.ImpressionNames.SERVER_HUB, properties: { guild_id: v } },
        { disableTrack: !Z },
        [Z],
    );
    let ee = Y?.guildSpaceSettings?.publish_status === k.B.PUBLISHED,
        et = r.useCallback(() => (0, b.W)(v, { publish_status: k.B.PUBLISHED }), [v]),
        [en, el] = (0, a.yK)([w.A], () => [w.A.getDraft(v), w.A.getSaveStatus(v)], [v]),
        er = J && null != en;
    !(function (e, t) {
        let i = (0, q.Ry)(e8.J),
            u = (0, a.bG)([e7.A], () => e7.A.getGuildId()),
            d = (0, e5.A)(),
            [c, o] = (0, e4.kn)(t && u === e && !d ? [s.M.GUILD_SPACE_NUX_MODAL] : [], {
                groupName: te.m.GUILD_SPACE_NUX,
                bypassAutoDismiss: !0,
            }),
            g = r.useRef(!1),
            f = c === s.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            g.current = !1;
        }, [e, u]),
            r.useEffect(() => {
                !f ||
                    i ||
                    g.current ||
                    ((g.current = !0),
                    (0, q.mM)(
                        async () => {
                            let t = await Promise.resolve().then(n.bind(n, 725041));
                            return (n) =>
                                (0, l.jsx)(t.default, {
                                    guildId: e,
                                    markAsDismissed: o,
                                    transitionState: n.transitionState,
                                    onClose: n.onClose,
                                });
                        },
                        { modalKey: e8.J },
                    ).catch(() => {
                        g.current = !1;
                    }));
            }, [e, i, o, f]));
    })(v, J && null != K);
    let ea = er ? en.widgets : K?.widgets,
        es = r.useMemo(() => ea?.some((e) => e.locked) ?? !1, [ea]);
    r.useEffect(() => {
        J && es && ((0, x.AK)(v), (0, x.Xd)(v));
    }, [J, v, es]);
    let eu = (0, a.bG)(
        [_.A, j.A],
        () =>
            K?.widgets.some((e) => {
                let t = j.A.getWidget(v, e.type)?.powerup_sku_id;
                return e.locked && null != t && _.A.getStateForGuild(v)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [v, K],
    );
    (r.useEffect(() => {
        eu && (0, b.u)(v, { shouldRefetch: !0 });
    }, [v, eu]),
        r.useEffect(() => {
            J || null == en || "saving" === el || (0, G.iX)(v, U.pb.PERMISSION_LOST);
        }, [J, en, el, v]));
    let ed = r.useMemo(
            () =>
                (ea ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [ea],
        ),
        ec = (0, a.yK)([R.A], () => R.A.getWidgetIdsToHydrate(v, ed), [v, ed]),
        eg = r.useRef(null);
    r.useEffect(() => {
        if (eg.current !== v && null != K) {
            ((eg.current = v), L(v, ed, !0));
            return;
        }
        L(v, ec);
    }, [v, K, ed, ec]);
    let ef = r.useCallback(() => {
        A.A.open(v, y.BEX.ENGAGEMENT, void 0, y.nd0.ENGAGEMENT_GUILD_SPACE);
    }, [v]);
    return null == K || null == ea
        ? (0, l.jsx)("div", {
              className: tn.MY,
              children: (0, l.jsx)("div", {
                  className: tn.F,
                  children:
                      "error" !== $ || V
                          ? (0, l.jsx)(d.y, {
                                type: d.y.Type.SPINNING_CIRCLE,
                                "aria-label": ei.intl.string(ei.t.ZTNur7),
                            })
                          : (0, l.jsx)(u.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: ei.intl.string(ei.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(eo, {
              children: (0, l.jsxs)("div", {
                  className: tn.MY,
                  children: [
                      (0, l.jsxs)(C.A, {
                          toolbar:
                              J &&
                              (0, l.jsx)(c.m, {
                                  text: ei.intl.string(ei.t.OBskVU),
                                  children: (0, l.jsx)(o.K, {
                                      type: "button",
                                      variant: "icon-only",
                                      icon: g.SettingsIcon,
                                      "aria-label": ei.intl.string(ei.t["3D5yo/"]),
                                      size: "md",
                                      onClick: ef,
                                  }),
                              }),
                          children: [
                              (0, l.jsx)(C.A.Icon, { icon: f.HomeIcon, "aria-hidden": !0 }),
                              (0, l.jsx)(C.A.Title, { children: ei.intl.string(ei.t["04IVMq"]) }),
                          ],
                      }),
                      (0, l.jsx)(m.Ch, {
                          ref: T,
                          className: tn.XG,
                          children: (0, l.jsxs)("div", {
                              className: tn.Qs,
                              children: [
                                  J && !ee ? (0, l.jsx)(F.A, { onPublish: et }) : null,
                                  (0, l.jsx)(e9, {
                                      guildId: v,
                                      header: er ? en.header : K.header,
                                      isEditing: er,
                                      canEdit: J,
                                      isSaving: "saving" === el,
                                  }),
                                  er
                                      ? (0, l.jsx)(
                                            eW,
                                            { guildId: v, widgets: ea, onRemovalPendingChange: z, scrollerRef: T },
                                            v,
                                        )
                                      : (0, l.jsx)(eF.A, { canEdit: J, guildId: v, widgets: ea }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(em, { guildId: v, isEditing: er, isPublished: ee, isRemovalPending: N }),
                  ],
              }),
          });
}
