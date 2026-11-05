(n.r(t), n.d(t, { default: () => tn }), n(321073));
var l = n(477900),
    r = n(582128),
    i = n(613412),
    a = n(855986),
    s = n(834730),
    u = n(289873),
    d = n(866665),
    c = n(408278),
    o = n(625903),
    g = n(332837),
    f = n(516521),
    h = n(139286),
    m = n(250527),
    E = n(727419),
    p = n(742589),
    A = n(533993),
    C = n(645619),
    x = n(71393),
    _ = n(473953),
    b = n(620632),
    v = n(73153),
    S = n(652215);
async function I(e) {
    v.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_START", guildId: e });
    try {
        let { body: t } = await b.Bo.get({ url: S.Rsh.GUILD_SPACE_WIDGETS_CATALOG(e), rejectWithError: !0 });
        v.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_SUCCESS", guildId: e, widgets: t.widgets });
    } catch {
        v.h.dispatch({ type: "GUILD_SPACE_CATALOG_FETCH_FAILURE", guildId: e });
    }
}
var y = n(960960),
    D = n(202762),
    j = n(88592),
    w = n(363957),
    G = n(513446);
let R = 0;
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    n && v.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let l = w.A.getWidgetIdsToHydrate(e, t, n);
    if (0 === l.length) return;
    let r = R++;
    v.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: r, widgetIds: l });
    try {
        let { body: t } = await b.Bo.get({
            url: S.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: l },
            rejectWithError: !0,
        });
        v.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: r, widgets: t.widgets });
    } catch (t) {
        v.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: r, retryable: (0, G.a)(t) });
    }
}
var N = n(716357),
    L = n(593673),
    P = n(49303),
    k = n(313627),
    U = n(344351),
    M = n(795816),
    B = n(933958),
    O = n(44167),
    W = n(872188),
    H = n(628274),
    F = n(36525),
    z = n(192308),
    K = n(871682),
    q = n(331322),
    $ = n(821609),
    V = n(499373),
    X = n(189213),
    Y = n(939249),
    J = n(245604),
    Q = n(104510),
    Z = n(646514),
    ee = n(775602),
    et = n(855823),
    en = n(135294),
    el = n(792996),
    er = n(517228);
function ei(e) {
    let { widget: t, onClick: n } = e,
        r = (0, a.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        { catalog_image_static_url: i, catalog_image_animated_url: u } = t.assets,
        d = (r ? null : u) ?? i,
        c = t.boost_price;
    return (0, l.jsxs)(Y.D, {
        className: er.HL,
        onClick: n,
        children: [
            (0, l.jsxs)("div", {
                className: er.b3,
                children: [
                    null != d && (0, l.jsx)("img", { className: er.YI, src: d, alt: "" }),
                    (0, l.jsxs)("div", {
                        className: er.Nt,
                        "aria-hidden": !0,
                        children: [
                            (0, l.jsx)("div", { className: er.Ti, children: (0, l.jsx)("div", { className: er.dK }) }),
                            (0, l.jsxs)(q.B, {
                                className: er.Cq,
                                align: "center",
                                justify: "center",
                                gap: 4,
                                children: [
                                    (0, l.jsx)(J.U, {}),
                                    (0, l.jsx)(s.E, {
                                        variant: "body-sm/semibold",
                                        color: "text-default",
                                        children: el.intl.string(en.default.IuT87w),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsxs)(q.B, {
                gap: 4,
                children: [
                    (0, l.jsx)(s.E, { variant: "body-sm/semibold", color: "text-default", children: t.name }),
                    null != c && c > 0
                        ? (0, l.jsxs)(q.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              children: [
                                  (0, l.jsx)(Q._, { size: "sm", color: Z.A.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                                  (0, l.jsx)(s.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: el.intl.format(en.default["8wD0Un"], { boostPrice: c }),
                                  }),
                              ],
                          })
                        : (0, l.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              lineClamp: 1,
                              children: el.intl.string(en.default.Lx0P8k),
                          }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { guildId: t, insertionTarget: n, onAddWidget: i, ...s } = e,
        u = (0, a.yK)(
            [y.A, j.A],
            () => {
                let e = j.A.getDraft(t)?.widgets ?? [],
                    n = y.A.getWidgets(t) ?? [];
                return (0, et.aU)(n, e);
            },
            [t],
        );
    return (
        r.useEffect(() => {
            I(t);
        }, [t]),
        (0, l.jsx)(X.a, {
            title: el.intl.string(en.default.L8Xfoo),
            subtitle: el.intl.string(en.default["N8nJ+T"]),
            actions: [],
            ...s,
            children: (0, l.jsx)("div", {
                className: er.Vg,
                children: u.map((e) =>
                    (0, l.jsx)(
                        ei,
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
function es(e, t, n) {
    let r = (r) => (0, l.jsx)(ea, { guildId: e, insertionTarget: n, onAddWidget: t, ...r });
    (0, z.mM)(() => Promise.resolve(r), { modalKey: "guild-space-add-widget" });
}
let eu = r.createContext(null);
function ed(e) {
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
    return (0, l.jsx)(eu.Provider, { value: s, children: t });
}
function ec() {
    let e = r.useContext(eu);
    if (null == e) throw Error("GuildSpaceEditorAddWidgetProvider is required");
    return e;
}
var eo = n(992303);
function eg(e) {
    let { guildId: t, isEditing: i, isPublished: u, isRemovalPending: c } = e,
        { addWidget: o } = ec(),
        {
            saveStatus: g,
            panelCount: f,
            saveErrorMessage: h,
            hasChanges: m,
        } = (0, a.cf)(
            [j.A],
            () => ({
                saveStatus: j.A.getSaveStatus(t),
                panelCount: j.A.getDraft(t)?.widgets.length ?? 0,
                saveErrorMessage: j.A.getSaveErrorMessage(t),
                hasChanges: j.A.hasChanges(t),
            }),
            [t],
        ),
        E = "saving" === g,
        p = E || c,
        A = p || !m,
        C = h ?? el.intl.string(en.default.HmFYc5),
        x = r.useCallback(() => {
            if (!A) {
                if (!u)
                    return void (0, z.mM)(async () => {
                        let { default: e } = await n.e(642138).then(n.bind(n, 921633));
                        return (n) => (0, l.jsx)(e, { ...n, guildId: t });
                    });
                (0, D.Fj)(t);
            }
        }, [t, u, A]),
        _ = r.useCallback(() => {
            (0, D.iX)(t);
        }, [t]);
    return (0, l.jsx)(H.F, {
        component: "div",
        children:
            i &&
            (0, l.jsx)(K.F, {
                className: eo.K,
                children: (0, l.jsx)(F.A, {
                    submitting: E,
                    disabled: A,
                    onSave: x,
                    onReset: p ? void 0 : _,
                    message: (0, l.jsxs)(q.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 12,
                        children: [
                            (0, l.jsx)($.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: V.T,
                                text: el.intl.string(en.default.L8Xfoo),
                                disabled: p,
                                onClick: () => es(t, o),
                            }),
                            "error" === g
                                ? (0, l.jsx)(d.m, {
                                      text: C,
                                      children: (0, l.jsx)(s.E, {
                                          variant: "body-sm/medium",
                                          color: "text-feedback-critical",
                                          role: "alert",
                                          lineClamp: 1,
                                          children: C,
                                      }),
                                  })
                                : (0, l.jsx)(s.E, {
                                      variant: "body-sm/medium",
                                      color: "text-subtle",
                                      children: el.intl.format(en.default.hpAg80, { panelCount: f }),
                                  }),
                        ],
                    }),
                }),
            }),
    });
}
var ef = n(503698),
    eh = n.n(ef),
    em = n(425763),
    eE = n(754674),
    ep = n(294918);
function eA(e) {
    let { height: t } = e;
    return (0, l.jsx)("div", { className: ep.qf, style: null == t ? void 0 : { height: t }, "aria-hidden": !0 });
}
var eC = n(675816);
let ex = "GUILD_SPACE_WIDGET",
    e_ = "GUILD_SPACE_WIDGETS",
    eb = `${ex}_${e_}`;
var ev = n(204581),
    eS = n(333007);
let eI = "canvas, iframe, video";
function ey(e) {
    let { isKeyboardMode: t, targetColumn: n, getColumnElement: i } = e,
        { isDragging: a, item: s } = (0, eC.V)((e) => ({
            isDragging: e.isDragging() && e.getItemType() === eb,
            item: e.getItem(),
        })),
        u = (0, ev.u)(),
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
        let i = l.querySelectorAll(eI);
        return (
            r.querySelectorAll(eI).forEach((e, t) => {
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
            r.classList.remove(ep.cB, ep.Ni),
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
        : (0, eS.createPortal)(
              (0, l.jsx)("div", {
                  ref: d,
                  className: ep.dk,
                  "aria-hidden": !0,
                  children: (0, l.jsx)("div", { ref: c, className: ep.w4 }),
              }),
              document.body,
          );
}
var eD = n(840508);
function ej(e) {
    let { column: t, children: n, isPointerDragging: i, registerColumnElement: a, onDragHover: s } = e,
        u = r.useRef(null),
        [, d] = (0, eD.H)({
            accept: eb,
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
        (0, l.jsx)("div", { ref: c, className: ep.fi, children: n })
    );
}
function ew(e) {
    let { column: t, dndName: n, onDropAtEnd: i } = e,
        a = r.useRef(null),
        [{ isOver: s }, u] = (0, eD.H)({
            accept: eb,
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
        (0, l.jsx)("div", { ref: a, className: eh()(ep.wr, { [ep.SX]: s }), "data-dnd-name": n })
    );
}
var eG = n(451395),
    eR = n(42499),
    eT = n(904109);
function eN(e) {
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
            onDragEnd: h,
            registerSlotElement: m,
            isSaving: E,
            getDropLabel: p,
            onRemove: A,
            onCommitConfig: C,
            isSettling: x,
            onMotionEnd: _,
            isEntrancePreparing: b,
            isEntering: v,
            onEntranceAnimationEnd: S,
            isRemoving: I,
            isRemovalPending: y,
            onRemovalAnimationEnd: D,
        } = e,
        j = r.useRef(null),
        G = r.useRef(null),
        R = (0, a.bG)([w.A], () => (n.requires_hydration ? w.A.getHydration(t, n.id) : void 0), [
            t,
            n.id,
            n.requires_hydration,
        ]),
        T = (0, eR.K)(t, n),
        { isDragging: N, dragSourcePosition: L } = (0, eG.gY)({
            dragRef: j,
            dropRef: G,
            index: d,
            listType: e_,
            itemType: ex,
            itemId: n.id,
            itemPreviewProps: { getSourceElement: () => G.current },
            onDrop: (e) => f(e.id),
            onReorder: g,
            onEnd: (e, t) => h(e.id, t.didDrop()),
            canDrag: !E && !y,
        }),
        P = null == L ? null : L < c ? 0 : 1,
        k = null != P && P !== i,
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
        className: eh()(ep.NI, { [ep.cB]: N, [ep.Ni]: x, [ep.fJ]: b, [ep.Hu]: v, [ep.kC]: I, [ep.ne]: U, [ep.O3]: M }),
        onAnimationEnd: (e) => {
            e.target === e.currentTarget && (I ? D(n.id) : x ? _(n.id) : v && S(n.id));
        },
        "data-dnd-name": p(i, s, u),
        children: [
            v &&
                (0, l.jsx)("div", {
                    className: ep.q2,
                    "aria-hidden": !0,
                    children: (0, l.jsx)("div", { className: ep.te }),
                }),
            (0, l.jsx)(eT.P, {
                guildId: t,
                widget: n,
                guildSpaceMode: "edit",
                hydration: R,
                lock: T,
                dragHandleRef: j,
                disabled: E,
                onRemove: () => A(n.id),
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
var eP = n(220744);
function ek(e) {
    let { column: t, disabled: n, onInsert: r } = e,
        i = el.intl.formatToPlainString(1 === t ? en.default.U0SqHk : en.default["9Ctu9P"], { positionNumber: 1 });
    return (0, l.jsxs)(q.B, {
        className: ep.Y$,
        align: "center",
        justify: "center",
        gap: 12,
        children: [
            (0, l.jsx)(s.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: el.intl.string(en.default["/OtM0k"]),
            }),
            (0, l.jsx)($.$, {
                variant: "secondary",
                size: "sm",
                icon: V.T,
                text: el.intl.string(en.default.L8Xfoo),
                "aria-label": i,
                disabled: n,
                onClick: () => r(t, 0),
            }),
        ],
    });
}
var eU = n(663341);
function eM(e) {
    let { column: t, index: n, placement: r, onInsert: i } = e,
        a = el.intl.formatToPlainString(1 === t ? en.default["h9P9H+"] : en.default.xboFyi, { positionNumber: n + 1 });
    return (0, l.jsxs)(Y.D, {
        className: eh()(ep.kZ, { [ep.j2]: "before" === r, [ep.AO]: "after" === r }),
        onClick: () => i(t, n),
        "aria-label": a,
        children: [
            (0, l.jsx)("span", { className: ep.CF, "aria-hidden": !0 }),
            (0, l.jsx)("span", {
                className: ep.QN,
                "aria-hidden": !0,
                children: (0, l.jsx)(eU.PlusLargeIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
function eB(e, t, n) {
    return el.intl.formatToPlainString(1 === e ? en.default.O9RvHQ : en.default["+cSvS8"], {
        positionNumber: t,
        positionCount: n,
    });
}
function eO(e) {
    let { guildId: t, widgets: n, onRemovalPendingChange: i, scrollerRef: s } = e,
        u = r.useMemo(() => (0, eE.Rl)(n), [n]),
        d = r.useMemo(
            () =>
                u.map((e) =>
                    e.filter((e) => {
                        let { type: t } = e;
                        return null != eP.m[t];
                    }),
                ),
            [u],
        ),
        c = r.useMemo(() => [...d[0], ...d[1]], [d]),
        o = (0, eC.V)((e) =>
            e.isDragging() && e.getItemType() === eb
                ? { isDragging: !0, widgetId: e.getItem().id }
                : { isDragging: !1 },
        ),
        g = o.isDragging,
        f = o.isDragging ? o.widgetId : null,
        h = (0, em.VU)(),
        m = (0, a.bG)([ee.Ay], () => ee.Ay.useReducedMotion),
        E = (0, a.bG)([j.A], () => "saving" === j.A.getSaveStatus(t), [t]),
        p = g && !h,
        [A, C] = r.useState(null),
        x = A?.type === "removing" ? A.widgetId : null,
        _ = null != x;
    r.useLayoutEffect(() => {
        m && A?.type === "settling" && C(null);
    }, [m, A]);
    let b = r.useCallback(
            (e, n, l) => {
                ((0, D.j0)(t, e, n, l), m || C({ type: "settling", widgetId: e }));
            },
            [t, m],
        ),
        {
            effectiveDestination: v,
            draggedLocation: S,
            getColumnElement: I,
            getSlotElement: y,
            gridDropSurfaceRef: w,
            handleColumnHover: G,
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
                [h, m] = r.useState(null),
                E = r.useRef(null),
                p = r.useRef(null),
                A = r.useRef(null),
                C = r.useRef(null),
                x = r.useRef([null, null]),
                _ = r.useRef(new Map()),
                [b, v] = r.useState(null),
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
                [, B] = (0, eD.H)({
                    accept: eb,
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
                W = r.useCallback((e, t) => (0, eE.O6)(s[t.column] ?? [], a[t.column] ?? [], t.index, e), [a, s]),
                H = r.useCallback(() => {
                    (null != A.current && cancelAnimationFrame(A.current),
                        (A.current = null),
                        (p.current = null),
                        (E.current = null),
                        m(null),
                        v(null),
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
                    t > 0 && t !== b && v(t);
                }, [u, d, b]),
                r.useEffect(
                    () => () => {
                        null != A.current && cancelAnimationFrame(A.current);
                    },
                    [],
                ),
                {
                    effectiveDestination: w,
                    draggedLocation: j,
                    getColumnElement: R,
                    getSlotElement: N,
                    gridDropSurfaceRef: C,
                    handleColumnHover: U,
                    handleDragEnd: z,
                    canAcceptPointerDrop: F,
                    placeholderHeight: b,
                    registerColumnElement: G,
                    registerSlotElement: T,
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
            onMoveWidget: b,
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
                { registerAddWidgetHandler: o } = ec(),
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
                            (h.current = (0, D.lr)(t, e.type, e.name, e.locked, n)),
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
                        ? eL(l, u, !0, () => void 0)
                        : (f((e) => new Map(e).set(t.id, "preparing")),
                          eL(l, u, !1, () => {
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
            getSlotElement: y,
        }),
        W = r.useCallback((e) => {
            C((t) => (t?.type === "settling" && t.widgetId === e ? null : t));
        }, []),
        H = r.useCallback(
            (e) => {
                (C(null == e ? null : { type: "removing", widgetId: e }), i(null != e));
            },
            [i],
        ),
        F = r.useCallback(
            (e) => {
                x === e && (k(e), (0, D.GP)(t, e), H(null));
            },
            [t, x, H, k],
        ),
        z = r.useCallback(
            (e) => {
                if (!E && !_) {
                    if ((U(e), m)) {
                        (k(e), (0, D.GP)(t, e));
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
        r.useEffect(() => () => i(!1), [i]));
    let K = r.useCallback(
            (e, n) => {
                let l = c[e],
                    r = c[n];
                null != l && null != r && (0, D.j0)(t, l.id, r.position.column, r.position.order);
            },
            [t, c],
        ),
        q = r.useCallback(
            (e, n) => {
                (0, D.j0)(t, e, n, u[n]?.length ?? 0);
            },
            [u, t],
        ),
        $ = r.useCallback(
            (e, n) => {
                let l = (0, eE.O6)(u[e] ?? [], d[e] ?? [], n);
                es(t, M, { column: e, index: l });
            },
            [d, u, t, M],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: w,
                className: ep.Z7,
                children: (0, l.jsx)("div", {
                    className: eh()(ep.Vg, { [ep.nl]: p }),
                    children: d.map((e, n) =>
                        (0, l.jsxs)(
                            ej,
                            {
                                column: n,
                                isPointerDragging: p,
                                registerColumnElement: L,
                                onDragHover: G,
                                children: [
                                    (function (e, n) {
                                        if (0 === e.length && !g)
                                            return (0, l.jsx)(ek, { column: n, disabled: E || _, onInsert: $ });
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
                                        })(e, n, v).map((i) => {
                                            if ("placeholder" === i.type)
                                                return (0, l.jsx)(eA, { height: N }, "drag-placeholder");
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
                                                    className: ep.O4,
                                                    children: [
                                                        m &&
                                                            (0, l.jsx)(eM, {
                                                                column: n,
                                                                index: f,
                                                                placement: "before",
                                                                onInsert: $,
                                                            }),
                                                        (0, l.jsx)(eN, {
                                                            guildId: t,
                                                            widget: a,
                                                            column: n,
                                                            positionNumber: u + 1,
                                                            columnWidgetCount: r.length,
                                                            flatIndex: o,
                                                            leftColumnCount: d[0].length,
                                                            isKeyboardMode: h,
                                                            isSaving: E,
                                                            getDropLabel: eB,
                                                            onReorder: K,
                                                            onDrop: T,
                                                            onDragEnd: R,
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
                                                            onCommitConfig: (e) => (0, D.Vk)(t, a.id, e),
                                                        }),
                                                        m &&
                                                            f === e.length - 1 &&
                                                            (0, l.jsx)(eM, {
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
                                        (0, l.jsx)(ew, {
                                            column: n,
                                            dndName: el.intl.string(1 === n ? en.default.fWef0G : en.default.KcdDyT),
                                            onDropAtEnd: q,
                                        }),
                                    p && (0, l.jsx)("div", { className: ep.XP, "aria-hidden": !0 }),
                                ],
                            },
                            n,
                        ),
                    ),
                }),
            }),
            (0, l.jsx)(ey, { isKeyboardMode: h, targetColumn: v?.column ?? S?.column ?? null, getColumnElement: I }),
        ],
    });
}
var eW = n(529609),
    eH = n(191023),
    eF = n(241326),
    ez = n(534514),
    eK = n(22231),
    eq = n(654107),
    e$ = n(682163),
    eV = n(837011),
    eX = n(649640),
    eY = n(2553),
    eJ = n(405810),
    eQ = n(498642),
    eZ = n(486020),
    e0 = n(488428),
    e1 = n(776231),
    e2 = n(986898);
function e3(e) {
    let { guildId: t, header: n, canEdit: i, isEditing: u, isSaving: o } = e,
        g = (0, a.bG)([x.A], () => x.A.getGuild(t), [t]),
        f = (0, a.bG)([eQ.A], () => eQ.A.getOnlineCount(t), [t]),
        h = (0, a.bG)([eQ.A], () => eQ.A.getMemberCount(t), [t]),
        m = n.custom_banner,
        E = (0, a.bG)([eV.A], () => eV.A.getProfile(t), [t]),
        p = (0, eX.b2)().hex(),
        A = null == g ? null : eZ.Ay.getGuildIconURL({ id: g.id, icon: g.icon, size: 64 }),
        C = (0, eq.Ay)(A, p),
        _ = (0, eX.n6)(E?.brandColorPrimary ?? C),
        b = r.useMemo(
            () =>
                null == g
                    ? null
                    : "string" == typeof m
                      ? m
                      : void 0 === m && null != n.custom_banner_hash
                        ? (function (e, t) {
                              let n = eZ.QB ? "webp" : "jpg",
                                  { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                  i = S.Rsh.GUILD_SPACE_BANNER(e, t, n),
                                  a = null != l ? `https://${l}${i}` : location.protocol + r + i,
                                  s = { size: (0, e1.kr)(1200 * (0, e1.mZ)()) };
                              return ("jpg" === n && (s.quality = "lossless"), (a += `?${e0.As(s)}`));
                          })(g.id, n.custom_banner_hash)
                        : eZ.Ay.getGuildBannerURL({ id: g.id, banner: g.banner }),
            [g, m, n.custom_banner_hash],
        ),
        v = "string" == typeof m || (void 0 === m && null != n.custom_banner_hash);
    return null == g
        ? null
        : (0, l.jsxs)("div", {
              className: e2.wx,
              children: [
                  null != b
                      ? (0, l.jsx)("img", { className: e2.vK, src: b, alt: "" })
                      : (0, l.jsx)("div", { className: e2.vK, style: { background: _ }, "aria-hidden": !0 }),
                  (0, l.jsx)("div", { className: e2.f5, "aria-hidden": !0 }),
                  u
                      ? (0, l.jsxs)("div", {
                            className: e2.j0,
                            children: [
                                (0, l.jsx)(eJ.A, {
                                    variant: "overlay-secondary",
                                    icon: eH.ImageIcon,
                                    size: "sm",
                                    text: el.intl.string(en.default["EN+0gW"]),
                                    onChange: (e) => (0, D.pC)(t, e),
                                    maxFileSizeBytes: 0xa00000,
                                    onFileSizeError: () => (0, eY.A)(0xa00000),
                                    disabled: o,
                                }),
                                v
                                    ? (0, l.jsx)(d.m, {
                                          text: el.intl.string(en.default["CunK+J"]),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(c.K, {
                                              variant: "overlay-secondary",
                                              size: "sm",
                                              icon: eF.TrashIcon,
                                              "aria-label": el.intl.string(en.default["CunK+J"]),
                                              onClick: () => (0, D.pC)(t, null),
                                              disabled: o,
                                          }),
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  (0, l.jsxs)("div", {
                      className: e2.D_,
                      children: [
                          (0, l.jsx)(e$.Ay, {
                              className: e2.Kk,
                              guild: g,
                              size: e$.Ay.Sizes.LARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsxs)("div", {
                              className: e2.pq,
                              children: [
                                  (0, l.jsx)(ez.D, {
                                      variant: "heading-lg/semibold",
                                      color: "currentColor",
                                      lineClamp: 1,
                                      children: g.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: e2.M1,
                                      children: [
                                          null != f
                                              ? (0, l.jsxs)("div", {
                                                    className: e2.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e2.RS, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: el.intl.format(en.default.G08ClG, { count: f }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          null != h
                                              ? (0, l.jsxs)("div", {
                                                    className: e2.dJ,
                                                    children: [
                                                        (0, l.jsx)("span", { className: e2.kq, "aria-hidden": !0 }),
                                                        (0, l.jsx)(s.E, {
                                                            variant: "body-xs/semibold",
                                                            color: "currentColor",
                                                            children: el.intl.format(en.default["rp7bx+"], {
                                                                count: h,
                                                            }),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                          (0, l.jsxs)("div", {
                                              className: e2.dJ,
                                              children: [
                                                  (0, l.jsx)(Q._, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      "aria-hidden": !0,
                                                  }),
                                                  (0, l.jsx)(s.E, {
                                                      variant: "body-xs/semibold",
                                                      color: "currentColor",
                                                      children: el.intl.format(en.default.DwFqrb, {
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
                      !u &&
                      (0, l.jsx)($.$, {
                          icon: eK.PencilIcon,
                          text: el.intl.string(en.default.KcOpCm),
                          size: "sm",
                          onClick: () => (0, D.Wd)(t),
                      }),
              ],
          });
}
var e9 = n(554146),
    e6 = n(942857),
    e5 = n(263775),
    e4 = n(967198),
    e7 = n(725041),
    e8 = n(49999),
    te = n(412728),
    tt = n(312152);
function tn(e) {
    let t,
        { guildId: b } = e,
        v = r.useRef(null),
        G = r.useRef(null),
        [R, H] = r.useState(!1),
        [F, K, q] = (0, a.yK)([N.A], () => [N.A.getSpace(b), N.A.getFetchStatus(b), N.A.isInBackoff(b)], [b]),
        $ = (0, a.bG)([y.A], () => y.A.getFetchStatus(b), [b]),
        V = (0, a.bG)([x.A], () => x.A.getGuild(b), [b]),
        X = (0, k.mN)(V),
        Y = r.useRef(!0);
    (r.useEffect(
        () => (
            (Y.current = !0),
            () => {
                Y.current = !1;
            }
        ),
        [],
    ),
        r.useEffect(() => {
            let e = v.current !== b;
            ((v.current = b),
                !(async function () {
                    let t = [];
                    (("idle" === K || e) && t.push((0, _.u)(b, { shouldRefetch: e })),
                        X && "idle" === $ && t.push(I(b)),
                        await Promise.all(t),
                        e &&
                            Y.current &&
                            v.current === b &&
                            X &&
                            "success" === N.A.getFetchStatus(b) &&
                            N.A.isSpaceMissing(b) &&
                            (0, D.Wd)(b));
                })());
        }, [X, $, K, b]),
        r.useEffect(() => {
            (0, m.L4)(b, !1, { respectBackoff: !0 });
        }, [b]),
        (t = (0, O.n)()),
        r.useEffect(
            () => () => {
                if (null == t) return;
                let e = B.Ay.getCurrentEmbeddedActivity();
                null != e &&
                    e.location.kind === U.T.GUILD_CHANNEL &&
                    e.location.channel_id === t &&
                    (0, M._H)({ location: e.location, applicationId: e.applicationId, showFeedback: !1 });
            },
            [t],
        ));
    let J = null != F;
    (0, h.A)(
        { type: te.z.PAGE, name: i.ImpressionNames.SERVER_HUB, properties: { guild_id: b } },
        { disableTrack: !J },
        [J],
    );
    let Q = V?.guildSpaceSettings?.publish_status === L.B.PUBLISHED,
        Z = r.useCallback(() => (0, _.W)(b, { publish_status: L.B.PUBLISHED }), [b]),
        [ee, et] = (0, a.yK)([j.A], () => [j.A.getDraft(b), j.A.getSaveStatus(b)], [b]),
        en = X && null != ee;
    !(function (e, t) {
        let i = (0, z.Ry)(e7.J),
            s = (0, a.bG)([e4.A], () => e4.A.getGuildId()),
            u = (0, e6.A)(),
            [d, c] = (0, e5.kn)(t && s === e && !u ? [e9.M.GUILD_SPACE_NUX_MODAL] : [], {
                groupName: e8.m.GUILD_SPACE_NUX,
                bypassAutoDismiss: !0,
            }),
            o = r.useRef(!1),
            g = d === e9.M.GUILD_SPACE_NUX_MODAL;
        (r.useEffect(() => {
            o.current = !1;
        }, [e, s]),
            r.useEffect(() => {
                !g ||
                    i ||
                    o.current ||
                    ((o.current = !0),
                    (0, z.mM)(
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
                        { modalKey: e7.J },
                    ).catch(() => {
                        o.current = !1;
                    }));
            }, [e, i, c, g]));
    })(b, X && null != F);
    let er = en ? ee.widgets : F?.widgets,
        ei = r.useMemo(() => er?.some((e) => e.locked) ?? !1, [er]);
    r.useEffect(() => {
        X && ei && ((0, A.AK)(b), (0, A.Xd)(b));
    }, [X, b, ei]);
    let ea = (0, a.bG)(
        [C.A, y.A],
        () =>
            F?.widgets.some((e) => {
                let t = y.A.getWidget(b, e.type)?.powerup_sku_id;
                return e.locked && null != t && C.A.getStateForGuild(b)?.unlockedPowerups[t] != null;
            }) ?? !1,
        [b, F],
    );
    (r.useEffect(() => {
        ea && (0, _.u)(b, { shouldRefetch: !0 });
    }, [b, ea]),
        r.useEffect(() => {
            X || null == ee || "saving" === et || (0, D.iX)(b, P.pb.PERMISSION_LOST);
        }, [X, ee, et, b]));
    let es = r.useMemo(
            () =>
                (er ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [er],
        ),
        eu = (0, a.yK)([w.A], () => w.A.getWidgetIdsToHydrate(b, es), [b, es]),
        ec = r.useRef(null);
    r.useEffect(() => {
        if (ec.current !== b && null != F) {
            ((ec.current = b), T(b, es, !0));
            return;
        }
        T(b, eu);
    }, [b, F, es, eu]);
    let eo = r.useCallback(() => {
        E.A.open(b, S.BEX.ENGAGEMENT, void 0, S.nd0.ENGAGEMENT_GUILD_SPACE);
    }, [b]);
    return null == F || null == er
        ? (0, l.jsx)("div", {
              className: tt.MY,
              children: (0, l.jsx)("div", {
                  className: tt.F,
                  children:
                      "error" !== K || q
                          ? (0, l.jsx)(u.y, {
                                type: u.y.Type.SPINNING_CIRCLE,
                                "aria-label": el.intl.string(el.t.ZTNur7),
                            })
                          : (0, l.jsx)(s.E, {
                                variant: "body-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: el.intl.string(el.t.F8FvUy),
                            }),
              }),
          })
        : (0, l.jsx)(ed, {
              children: (0, l.jsxs)("div", {
                  className: tt.MY,
                  children: [
                      (0, l.jsxs)(p.A, {
                          toolbar:
                              X &&
                              (0, l.jsx)(d.m, {
                                  text: el.intl.string(el.t.OBskVU),
                                  children: (0, l.jsx)(c.K, {
                                      type: "button",
                                      variant: "icon-only",
                                      icon: o.SettingsIcon,
                                      "aria-label": el.intl.string(el.t["3D5yo/"]),
                                      size: "md",
                                      onClick: eo,
                                  }),
                              }),
                          children: [
                              (0, l.jsx)(p.A.Icon, { icon: g.HomeIcon, "aria-hidden": !0 }),
                              (0, l.jsx)(p.A.Title, { children: el.intl.string(el.t["04IVMq"]) }),
                          ],
                      }),
                      (0, l.jsx)(f.Ch, {
                          ref: G,
                          className: tt.XG,
                          children: (0, l.jsxs)("div", {
                              className: tt.Qs,
                              children: [
                                  X && !Q ? (0, l.jsx)(W.A, { onPublish: Z }) : null,
                                  (0, l.jsx)(e3, {
                                      guildId: b,
                                      header: en ? ee.header : F.header,
                                      isEditing: en,
                                      canEdit: X,
                                      isSaving: "saving" === et,
                                  }),
                                  en
                                      ? (0, l.jsx)(
                                            eO,
                                            { guildId: b, widgets: er, onRemovalPendingChange: H, scrollerRef: G },
                                            b,
                                        )
                                      : (0, l.jsx)(eW.A, { canEdit: X, guildId: b, widgets: er }),
                              ],
                          }),
                      }),
                      (0, l.jsx)(eg, { guildId: b, isEditing: en, isPublished: Q, isRemovalPending: R }),
                  ],
              }),
          });
}
