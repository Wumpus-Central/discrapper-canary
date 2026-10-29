(n.r(t), n.d(t, { default: () => q }));
var r = n(477900),
    l = n(582128),
    s = n(17928),
    i = n(663341),
    a = n(189252),
    u = n(945810),
    c = n(19575),
    o = n(114129),
    d = n(442325),
    f = n(503698),
    h = n.n(f),
    g = n(661531),
    p = n(214947),
    m = n(34188),
    x = n(577473),
    C = n(27232),
    b = n(812993),
    y = n(939249),
    k = n(834730),
    w = n(366605),
    A = n(498032),
    R = n(789645),
    I = n(442433),
    v = n(571694),
    M = n(47167),
    N = n(713654),
    E = n(5180),
    j = n(548118),
    P = n(734057),
    D = n(71393),
    S = n(573163),
    z = n(543465),
    B = n(287809),
    T = n(712960),
    L = n(652215),
    U = n(105292),
    G = n(133281);
function O() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let $ = new Map(),
    F = new Set(),
    Y = !1;
function X(e) {
    let {
            tab: t,
            isActive: i,
            closable: a,
            registerTabNode: u,
            onDragStart: c,
            onDragMove: f,
            onDragEnd: X,
            onCloseStart: _,
            onRequestClose: V,
        } = e,
        [H, K] = l.useState(() => (Y || ((Y = !0), d.A.getTabs().forEach((e) => F.add(e.id))), !F.has(t.id) && !O()));
    (l.useEffect(() => {
        F.add(t.id);
    }, [t.id]),
        l.useEffect(() => {
            if (!H) return;
            let e = setTimeout(() => K(!1), 150);
            return () => clearTimeout(e);
        }, [H]));
    let [q, W] = l.useState(!1),
        Z = (0, s.bG)([P.A], () => ("channel" === t.kind ? P.A.getChannel(t.channelId) : null), [t]),
        J = (0, s.bG)([D.A], () => ("channel" === t.kind ? D.A.getGuild(t.guildId) : null), [t]),
        Q = (0, s.bG)([B.default], () => (null != Z && Z.isDM() ? B.default.getUser(Z.getRecipientId()) : null), [Z]),
        ee = (0, M.Ay)(Z);
    "channel" === t.kind && null != ee && $.set(t.channelId, ee);
    let et = "route" === t.kind ? t.routeLabel : (ee ?? $.get(t.channelId) ?? U.intl.string(U.t.zLZPmk)),
        en = l.useCallback(() => {
            (0, o.ZD)(t.id);
        }, [t.id]),
        er = l.useCallback(() => {
            if (!q && a) {
                if ((_(t.id), O())) return void V(t.id);
                (W(!0),
                    setTimeout(() => {
                        (V(t.id), d.A.getTabs().some((e) => e.id === t.id) && W(!1));
                    }, 150));
            }
        }, [q, a, _, V, t.id]),
        el = l.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), er());
            },
            [er],
        ),
        es = l.useCallback(
            (e) => {
                (0, I.L3)(e, async () => {
                    let { default: e } = await n.e("99401").then(n.bind(n, 774448));
                    return (n) => (0, r.jsx)(e, { ...n, tab: t, onRequestClose: er });
                });
            },
            [t, er],
        ),
        {
            nodeRef: ei,
            handlePointerDown: ea,
            handlePointerMove: eu,
            handlePointerUp: ec,
            handleClickCapture: eo,
        } = (function (e) {
            let { itemId: t, onDragStart: n, onDragMove: r, onDragEnd: s } = e,
                i = l.useRef(null),
                a = l.useRef(null),
                u = l.useRef(!1),
                c = l.useCallback((e) => {
                    0 === e.button &&
                        ((u.current = !1),
                        (a.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, dragging: !1 }));
                }, []),
                o = l.useCallback(
                    (e) => {
                        let l = a.current;
                        if (null != l && l.pointerId === e.pointerId) {
                            if (!l.dragging) {
                                if (Math.hypot(e.clientX - l.startX, e.clientY - l.startY) < T.O) return;
                                ((l.dragging = !0),
                                    i.current?.setPointerCapture(e.pointerId),
                                    n(t, e.clientX, e.clientY));
                            }
                            (e.preventDefault(), r(t, e.clientX, e.clientY));
                        }
                    },
                    [n, r, t],
                );
            return {
                nodeRef: i,
                handlePointerDown: c,
                handlePointerMove: o,
                handlePointerUp: l.useCallback(
                    (e) => {
                        let t = a.current;
                        null != t &&
                            t.pointerId === e.pointerId &&
                            ((a.current = null), t.dragging && ((u.current = !0), s()));
                    },
                    [s],
                ),
                handleClickCapture: l.useCallback((e) => {
                    u.current && ((u.current = !1), e.preventDefault(), e.stopPropagation());
                }, []),
            };
        })({ itemId: t.id, onDragStart: c, onDragMove: f, onDragEnd: X }),
        ed = l.useCallback(
            (e) => {
                ((ei.current = e), u(t.id, e));
            },
            [ei, u, t.id],
        ),
        {
            mentionCount: ef,
            isLowImportanceMention: eh,
            showUnreadDot: eg,
        } = (0, s.cf)(
            [S.Ay, z.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = S.Ay.getMentionCount(t.channelId),
                    n = z.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: S.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && S.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        ep = null;
    if ("route" === t.kind)
        t.routePath === L.BVt.FRIENDS
            ? (ep = (0, r.jsx)(p.$, { size: "xs", color: "currentColor", className: G.PA }))
            : t.routePath === L.BVt.COLLECTIBLES_SHOP
              ? (ep = (0, r.jsx)(m.U, { size: "xs", color: "currentColor", className: G.PA }))
              : t.routePath === L.BVt.QUEST_HOME &&
                (ep = (0, r.jsx)(x.r, { size: "xs", color: "currentColor", className: G.PA }));
    else if ((0, E.ai)(t.guildId)) ep = (0, r.jsx)(C.StarIcon, { size: "xs", color: "currentColor", className: G.PA });
    else if (null != Z && Z.isThread()) {
        let e = (0, N.gU)(Z);
        null != e && (ep = (0, r.jsx)(e, { size: "xs", color: "currentColor", className: G.PA }));
    } else if (null != J) ep = (0, r.jsx)(j.Ay, { guild: J, size: j.Ay.Sizes.SMOL, active: !0, className: G.$f });
    else if (null != Z && (Z.isDM() || Z.isGroupDM())) {
        let e = null != Q ? Q.getAvatarURL(void 0, 16) : (0, v.Y)(Z, 16);
        null != e && (ep = (0, r.jsx)("img", { className: G.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let em = null;
    return (
        ef > 0 &&
            (em = (0, r.jsx)("div", {
                className: G.WK,
                "aria-hidden": !0,
                children: (0, r.jsx)(b.hV, {
                    count: ef,
                    color: eh ? g.A.colors.BACKGROUND_MOD_STRONG.css : g.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                }),
            })),
        (0, r.jsxs)("div", {
            ref: ed,
            className: h()(G.Mf, { [G.yR]: i, [G.MY]: H, [G.nE]: q }),
            onPointerDown: ea,
            onPointerMove: eu,
            onPointerUp: ec,
            onPointerCancel: ec,
            onClickCapture: eo,
            onContextMenu: es,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, r.jsxs)(y.D, {
                    className: G.eg,
                    onClick: en,
                    onAuxClick: el,
                    "aria-current": i ? "page" : void 0,
                    children: [
                        null != ep && (0, r.jsxs)("span", { className: G.P0, children: [ep, em] }),
                        (0, r.jsxs)(k.E, {
                            variant: "text-sm/medium",
                            className: G.HA,
                            children: [et, (0, r.jsx)("span", { className: G.Zi, "aria-hidden": !0 })],
                        }),
                    ],
                }),
                t.pinned
                    ? (0, r.jsxs)("div", {
                          className: G.n3,
                          "aria-hidden": !0,
                          children: [
                              (0, r.jsx)(w.t, { size: "xs", color: "currentColor" }),
                              !i && eg && (0, r.jsx)(A.N, { className: G.UU, variant: "neutral" }),
                          ],
                      })
                    : a
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                !i &&
                                    eg &&
                                    (0, r.jsx)("div", {
                                        className: G.XE,
                                        "aria-hidden": !0,
                                        children: (0, r.jsx)(A.N, { variant: "neutral" }),
                                    }),
                                (0, r.jsx)(y.D, {
                                    className: G.b,
                                    onClick: er,
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": U.intl.formatToPlainString(U.t["A/PzIa"], { channelName: et }),
                                    children: (0, r.jsx)(R.P, { size: "xs" }),
                                }),
                            ],
                        })
                      : null,
            ],
        })
    );
}
n(321073);
let _ = "left 150ms ease-out";
function V() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function H(e) {
    ((e.style.position = ""),
        (e.style.boxSizing = ""),
        (e.style.left = ""),
        (e.style.top = ""),
        (e.style.width = ""),
        (e.style.height = ""),
        (e.style.margin = ""),
        (e.style.zIndex = ""),
        (e.style.boxShadow = ""),
        (e.style.transition = ""));
}
var K = n(266553);
function q() {
    let e,
        t,
        n,
        f,
        h,
        g,
        p,
        m,
        x,
        C,
        b,
        y,
        k,
        w,
        A,
        R,
        I,
        v,
        M,
        N,
        E,
        j,
        P,
        D,
        S,
        {
            tabs: z,
            activeTabId: B,
            isVisible: T,
        } = (0, s.cf)([d.A, u.Bt], () => ({
            tabs: d.A.getTabs(),
            activeTabId: d.A.getActiveTabId(),
            isVisible: d.A.isTabBarVisible(),
        })),
        {
            setStripRef: L,
            registerTabNode: G,
            setNewTabButtonRef: O,
            handleDragStart: $,
            handleDragMove: F,
            handleDragEnd: Y,
            handleCloseStart: q,
        } = ((e = l.useRef(null)),
        (t = l.useRef(new Map())),
        (n = l.useRef(null)),
        (f = l.useRef(null)),
        (h = l.useRef(0)),
        (g = l.useRef(0)),
        (p = l.useRef([])),
        (m = l.useRef(0)),
        (x = l.useRef(0)),
        (C = l.useRef(0)),
        (b = l.useRef(0)),
        (y = l.useRef(0)),
        (k = l.useRef(0)),
        (w = l.useRef(0)),
        (A = l.useCallback((e, n) => {
            null != n ? t.current.set(e, n) : t.current.delete(e);
        }, [])),
        (R = l.useCallback((e) => {
            n.current = e;
        }, [])),
        (I = l.useCallback((t) => {
            e.current = t;
        }, [])),
        (v = l.useRef(new Map())),
        (M = z.map((e) => e.id).join(",")),
        l.useLayoutEffect(() => {
            if (null != f.current) return;
            let e = t.current,
                n = v.current;
            e.forEach((e) => {
                ((e.style.transition = ""), (e.style.transform = ""));
            });
            let r = new Map();
            if (
                (e.forEach((e, t) => {
                    r.set(t, e.getBoundingClientRect().left);
                }),
                n.size === r.size && Array.from(r.keys()).every((e) => n.has(e)) && !V())
            ) {
                let t = [];
                if (
                    (e.forEach((e, l) => {
                        let s = n.get(l),
                            i = r.get(l);
                        if (null == s || null == i) return;
                        let a = s - i;
                        Math.abs(a) > 0.5 && t.push({ node: e, delta: a });
                    }),
                    t.length > 0)
                ) {
                    for (let { node: e, delta: n } of t) e.style.transform = `translateX(${n}px)`;
                    for (let { node: e } of (t[0].node.offsetHeight, t))
                        ((e.style.transition = "transform 150ms ease-out"),
                            (e.style.transform = ""),
                            e.addEventListener(
                                "transitionend",
                                () => {
                                    e.style.transition = "";
                                },
                                { once: !0 },
                            ));
                }
            }
            v.current = r;
        }, [M]),
        (N = l.useRef(!1)),
        (E = l.useRef(!1)),
        (j = l.useCallback(() => {
            E.current = !0;
            let e = new Map();
            (t.current.forEach((t) => {
                "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
            }),
                e.forEach((e, t) => {
                    ((t.style.flexGrow = "0"),
                        (t.style.flexShrink = "0"),
                        (t.style.flexBasis = `${e}px`),
                        (t.style.maxWidth = `${e}px`));
                }));
        }, [])),
        (P = l.useCallback(() => {
            ((E.current = !1),
                t.current.forEach((e) => {
                    ((e.style.flexGrow = ""),
                        (e.style.flexShrink = ""),
                        (e.style.flexBasis = ""),
                        (e.style.maxWidth = ""));
                }));
        }, [])),
        l.useEffect(() => {
            function t(t) {
                if (!E.current) return;
                let n = e.current;
                if (null == n) return;
                let r = n.getBoundingClientRect(),
                    l =
                        t.clientX >= r.left - 32 &&
                        t.clientX <= r.right + 32 &&
                        t.clientY >= r.top - 32 &&
                        t.clientY <= r.bottom + 32;
                l !== N.current && ((N.current = l), l || P());
            }
            return (window.addEventListener("mousemove", t), () => window.removeEventListener("mousemove", t));
        }, [P]),
        (D = l.useCallback(() => {
            let t = e.current,
                n = null != t && t.matches(":hover");
            ((N.current = n), n && j());
        }, [j])),
        (S = l.useCallback(
            (r, l) => {
                let s = e.current,
                    i = t.current.get(r);
                if (null == s || null == i) return;
                let a = s.getBoundingClientRect(),
                    u = parseFloat(getComputedStyle(s).columnGap);
                C.current = Number.isFinite(u) ? u : 0;
                let c = [];
                z.forEach((e) => {
                    let n = t.current.get(e.id);
                    null != n && c.push({ id: e.id, node: n });
                });
                let o = new Map();
                c.forEach((e) => {
                    let { node: t } = e;
                    return o.set(t, t.getBoundingClientRect());
                });
                let d = n.current;
                (null != d && o.set(d, d.getBoundingClientRect()),
                    o.forEach((e, t) => {
                        ((t.style.position = "absolute"),
                            (t.style.boxSizing = "border-box"),
                            (t.style.left = `${e.left - a.left}px`),
                            (t.style.top = `${e.top - a.top}px`),
                            (t.style.width = `${e.width}px`),
                            (t.style.height = `${e.height}px`),
                            (t.style.margin = "0"));
                    }));
                let A = V(),
                    R = [],
                    I = 1 / 0,
                    v = -1 / 0;
                (c.forEach((e) => {
                    let { id: t, node: n } = e,
                        l = o.get(n);
                    if (null == l) return;
                    let s = l.left - a.left;
                    if (((I = Math.min(I, s)), (v = Math.max(v, s + l.width)), t === r)) {
                        x.current = l.width;
                        return;
                    }
                    (A || (n.style.transition = _), R.push({ node: n, size: l.width, center: s + l.width / 2 }));
                }),
                    (p.current = R),
                    (m.current = Number.isFinite(I) ? I : 0),
                    (h.current = l));
                let M = parseFloat(i.style.left);
                g.current = M;
                let N = Number.isFinite(v) ? v : 0;
                ((b.current = Math.min(m.current, M)),
                    (y.current = Math.max(N - x.current, M)),
                    (k.current = z.findIndex((e) => e.id === r)),
                    (w.current = M),
                    (f.current = r),
                    (i.style.zIndex = "1"),
                    (i.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            },
            [z],
        )),
        {
            setStripRef: I,
            registerTabNode: A,
            setNewTabButtonRef: R,
            handleDragStart: S,
            handleDragMove: l.useCallback((e, n) => {
                if (f.current !== e) return;
                let r = t.current.get(e);
                if (null == r) return;
                let l = Math.min(Math.max(g.current + n - h.current, b.current), y.current);
                r.style.left = `${l}px`;
                let s = p.current,
                    i = x.current,
                    a = l + i,
                    u = g.current + i / 2,
                    c = 0;
                for (let e of s) {
                    let t = e.center > u ? a : l;
                    e.center < t && c++;
                }
                let o = C.current,
                    d = m.current,
                    A = d;
                (s.forEach((e, t) => {
                    (t === c && ((A = d), (d += i + o)), (e.node.style.left = `${d}px`), (d += e.size + o));
                }),
                    c >= s.length && (A = d),
                    (k.current = c),
                    (w.current = A));
            }, []),
            handleDragEnd: l.useCallback(() => {
                let e = f.current;
                if (null == e) return;
                let r = t.current.get(e),
                    l = w.current;
                (0, o.Aq)(e, k.current);
                let s = !1;
                function i() {
                    if (s) return;
                    ((s = !0),
                        t.current.forEach(H),
                        null != n.current && H(n.current),
                        (f.current = null),
                        (p.current = []));
                    let e = new Map();
                    (t.current.forEach((t, n) => {
                        e.set(n, t.getBoundingClientRect().left);
                    }),
                        (v.current = e));
                }
                let a = null != r ? parseFloat(r.style.left) : NaN;
                null == r || V() || !Number.isFinite(a) || 0.5 > Math.abs(a - l)
                    ? i()
                    : ((r.style.transition = _),
                      (r.style.left = `${l}px`),
                      r.addEventListener("transitionend", i, { once: !0 }),
                      setTimeout(i, 200));
            }, []),
            handleCloseStart: D,
        }),
        [W, Z] = l.useState(() => new Set()),
        J = l.useCallback(
            (e) => {
                (q(), Z((t) => new Set(t).add(e)));
            },
            [q],
        ),
        Q = l.useCallback((e) => {
            ((0, o.f5)(e),
                Z((t) => {
                    let n = new Set(t);
                    return (n.delete(e), n);
                }));
        }, []);
    if (!T) return null;
    let ee = z.filter((e) => !W.has(e.id)).length > 1;
    return (0, r.jsxs)("div", {
        ref: L,
        className: K.$,
        role: "group",
        "aria-label": U.intl.string(U.t.es0PkU),
        onDoubleClick: () => c.Ay.maximize(),
        children: [
            z.map((e) =>
                (0, r.jsx)(
                    X,
                    {
                        tab: e,
                        isActive: e.id === B,
                        closable: ee,
                        registerTabNode: G,
                        onDragStart: $,
                        onDragMove: F,
                        onDragEnd: Y,
                        onCloseStart: J,
                        onRequestClose: Q,
                    },
                    e.id,
                ),
            ),
            (0, r.jsx)("div", {
                ref: O,
                className: K.Y,
                children: (0, r.jsx)(a.A, {
                    icon: i.PlusLargeIcon,
                    onClick: o.JC,
                    "aria-label": U.intl.string(U.t.GR7NIF),
                }),
            }),
        ],
    });
}
