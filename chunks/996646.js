(n.r(t), n.d(t, { default: () => ev }));
var l = n(477900),
    r = n(582128),
    i = n(855986),
    s = n(265872),
    a = n(663341),
    u = n(189252),
    o = n(793322),
    c = n(174768),
    d = n(309010),
    f = n(253400),
    h = n(300259),
    g = n(442325),
    m = n(716099),
    p = n(858760),
    b = n(503698),
    x = n.n(b),
    y = n(646514),
    C = n(214947),
    A = n(34188),
    I = n(577473),
    E = n(403581),
    R = n(27232),
    v = n(329921),
    N = n(866665),
    M = n(939249),
    w = n(789645),
    D = n(366605),
    k = n(834730),
    j = n(812993),
    T = n(442433),
    S = n(571694),
    P = n(47167),
    _ = n(713654),
    L = n(5180),
    G = n(682163),
    z = n(734057),
    B = n(71393),
    O = n(218461),
    U = n(543465),
    F = n(287809),
    $ = n(114129);
(n(897898), n(712960));
var V = n(652215),
    H = n(792996),
    K = n(133281);
let X = {
    [V.BVt.FRIENDS]: C.FriendsIcon,
    [V.BVt.COLLECTIBLES_SHOP]: A.ShopIcon,
    [V.BVt.QUEST_HOME]: I.QuestsIcon,
    [V.BVt.APPLICATION_STORE]: E.NitroWheelIcon,
};
function Y() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let q = new Map(),
    Q = new Set(),
    W = !1,
    Z = r.memo(function (e) {
        let {
                tab: t,
                isActive: s,
                closable: a,
                isExiting: u,
                isConnectedVoiceChannel: o,
                registerTabNode: c,
                onDragStart: d,
                onDragMove: f,
                onDragEnd: m,
                onExited: p,
            } = e,
            [b, C] = r.useState(
                () => (W || ((W = !0), g.A.getTabs().forEach((e) => Q.add(e.id))), !Q.has(t.id) && !Y()),
            );
        (r.useEffect(() => {
            Q.add(t.id);
        }, [t.id]),
            r.useEffect(() => {
                if (!b) return;
                let e = setTimeout(() => C(!1), 150);
                return () => clearTimeout(e);
            }, [b]));
        let A = (0, i.bG)([z.A], () => ("channel" === t.kind ? z.A.getChannel(t.channelId) : null), [t]),
            I = (0, i.bG)([B.A], () => ("channel" === t.kind ? B.A.getGuild(t.guildId) : null), [t]),
            E = (0, i.bG)([F.default], () => (null != A && A.isDM() ? F.default.getUser(A.getRecipientId()) : null), [
                A,
            ]),
            V = (0, P.Ay)(A),
            Z = "channel" === t.kind ? t.channelId : null;
        r.useEffect(() => {
            null != Z && null != V && q.set(Z, V);
        }, [Z, V]);
        let J = "route" === t.kind ? t.routeLabel : (V ?? q.get(t.channelId) ?? H.intl.string(H.t.zLZPmk)),
            ee = r.useCallback(() => {
                (0, $.ZD)(t.id, "tab_click");
            }, [t.id]),
            et = r.useCallback(
                (e) => {
                    !u && a && (0, $.f5)(t.id, e);
                },
                [u, a, t.id],
            );
        r.useEffect(() => {
            if (!u) return;
            if (Y()) return void p(t.id);
            let e = setTimeout(() => p(t.id), 150);
            return () => clearTimeout(e);
        }, [u, p, t.id]);
        let en = r.useCallback(
                (e) => {
                    1 === e.button && (e.preventDefault(), et("middle_click"));
                },
                [et],
            ),
            el = r.useCallback(
                (e) => {
                    (0, T.L3)(e, async () => {
                        let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                        return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => et("context_menu") });
                    });
                },
                [t, et],
            ),
            [er, ei] = r.useState(!1),
            es = r.useCallback(
                (e, t) => {
                    (ei(!0), d(e, t));
                },
                [d],
            ),
            ea = r.useCallback(() => {
                (ei(!1), m());
            }, [m]),
            {
                nodeRef: eu,
                handlePointerDown: eo,
                handlePointerMove: ec,
                handlePointerUp: ed,
                handleClickCapture: ef,
            } = (function (e) {
                let { itemId: t, onDragStart: n, onDragMove: l, onDragEnd: i } = e,
                    s = r.useRef(null),
                    a = r.useRef(null),
                    u = r.useRef(!1),
                    o = r.useCallback((e) => {
                        0 === e.button &&
                            ((u.current = !1),
                            (a.current = {
                                pointerId: e.pointerId,
                                startX: e.clientX,
                                startY: e.clientY,
                                dragging: !1,
                            }));
                    }, []),
                    c = r.useCallback(
                        (e) => {
                            let r = a.current;
                            if (null != r && r.pointerId === e.pointerId) {
                                if (!r.dragging) {
                                    if (3 > Math.hypot(e.clientX - r.startX, e.clientY - r.startY)) return;
                                    ((r.dragging = !0),
                                        s.current?.setPointerCapture(e.pointerId),
                                        n(t, e.clientX, e.clientY));
                                }
                                (e.preventDefault(), l(t, e.clientX, e.clientY));
                            }
                        },
                        [n, l, t],
                    );
                return {
                    nodeRef: s,
                    handlePointerDown: o,
                    handlePointerMove: c,
                    handlePointerUp: r.useCallback(
                        (e) => {
                            let t = a.current;
                            null != t &&
                                t.pointerId === e.pointerId &&
                                ((a.current = null), t.dragging && ((u.current = !0), i()));
                        },
                        [i],
                    ),
                    handleClickCapture: r.useCallback((e) => {
                        u.current && ((u.current = !1), e.preventDefault(), e.stopPropagation());
                    }, []),
                };
            })({ itemId: t.id, onDragStart: es, onDragMove: f, onDragEnd: ea }),
            eh = r.useCallback(
                (e) => {
                    ((eu.current = e), c(t.id, e));
                },
                [eu, c, t.id],
            ),
            {
                mentionCount: eg,
                isLowImportanceMention: em,
                showUnreadDot: ep,
            } = (0, i.cf)(
                [O.Ay, U.Ay],
                () => {
                    if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                    let e = O.Ay.getMentionCount(t.channelId),
                        n = U.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                    return {
                        mentionCount: e,
                        isLowImportanceMention: O.Ay.getIsMentionLowImportance(t.channelId),
                        showUnreadDot: 0 === e && !n && O.Ay.hasUnread(t.channelId),
                    };
                },
                [t],
            ),
            eb = null;
        if ("route" === t.kind) {
            let e = X[t.routePath];
            null != e && (eb = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: K.NR }));
        } else if ((0, L.ai)(t.guildId))
            eb = (0, l.jsx)(R.StarIcon, { size: "sm", color: "currentColor", className: K.NR });
        else if (null != A && A.isThread()) {
            let e = (0, _.gU)(A);
            null != e && (eb = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: K.NR }));
        } else if (null != I) eb = (0, l.jsx)(G.Ay, { guild: I, size: G.Ay.Sizes.SMOL, active: !0, className: K.$f });
        else if (null != A && (A.isDM() || A.isGroupDM())) {
            let e = null != E ? E.getAvatarURL(void 0, 18) : (0, S.Y)(A, 18);
            null != e &&
                (eb = (0, l.jsx)("img", { className: K.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
        }
        let ex = "channel" !== t.kind || null == I || null == A || A.isThread() ? null : (0, _.gU)(A),
            ey = null != I ? H.intl.formatToPlainString(H.t.gT4jAr, { channelName: J, guildName: I.name }) : J,
            eC = null;
        return (
            (a || ep) &&
                (eC = (0, l.jsxs)(l.Fragment, {
                    children: [
                        ep &&
                            (0, l.jsx)("span", {
                                className: K.XE,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(v.N, { variant: "neutral" }),
                            }),
                        a &&
                            (0, l.jsx)(N.m, {
                                position: "bottom",
                                text: H.intl.string(H.t.In6PEK),
                                keyboardShortcut: h.nK.binds["0"],
                                ariaHidden: !0,
                                children: (0, l.jsx)(M.D, {
                                    className: K.Pu,
                                    onClick: () => et("close_button"),
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": H.intl.formatToPlainString(H.t["A/PzIa"], { channelName: J }),
                                    children: (0, l.jsx)(w.XSmallIcon, { size: "sm" }),
                                }),
                            }),
                    ],
                })),
            (0, l.jsxs)("div", {
                ref: eh,
                className: x()(K.Mf, { [K.yR]: s, [K.MY]: b, [K.nE]: u, [K.zL]: null != eC }),
                onPointerDown: eo,
                onPointerMove: ec,
                onPointerUp: ed,
                onPointerCancel: ed,
                onClickCapture: ef,
                onContextMenu: el,
                onDoubleClick: (e) => e.stopPropagation(),
                children: [
                    (0, l.jsx)(N.m, {
                        position: "bottom",
                        text: ey,
                        delay: 500,
                        shouldShow: !er && !u,
                        ariaHidden: null == I,
                        children: (0, l.jsxs)(M.D, {
                            className: K.eg,
                            onClick: ee,
                            onAuxClick: en,
                            "aria-current": s ? "page" : void 0,
                            children: [
                                t.pinned
                                    ? (0, l.jsx)(D.PinIcon, { size: "sm", color: "currentColor", className: K.NR })
                                    : eb,
                                null != ex &&
                                    (0, l.jsx)(ex, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: x()(K.j1, { [K.Av]: o }),
                                    }),
                                (0, l.jsx)(k.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: K.HA,
                                    children: J,
                                }),
                            ],
                        }),
                    }),
                    eg > 0 &&
                        (0, l.jsx)("span", {
                            className: K.Xe,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(j.hV, {
                                count: eg,
                                color: em
                                    ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                    : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            }),
                        }),
                    eC,
                ],
            })
        );
    });
var J = n(305866),
    ee = n(683438),
    et = n(662090),
    en = n(280157),
    el = n(320264),
    er = n(319593),
    ei = n(576705),
    es = n(994500);
function ea(e) {
    switch (e.type) {
        case et.rD.TEXT_CHANNEL:
        case et.rD.VOICE_CHANNEL:
        case et.rD.GROUP_DM:
        case et.rD.DM:
        case et.rD.USER:
        case et.rD.GUILD:
            return !0;
        case et.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case et.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var eu = n(254838),
    eo = n(778712),
    ec = n(97808),
    ed = n(476921);
function ef(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: ed.wx,
        role: "presentation",
        children: (0, l.jsx)(k.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: t }),
    });
}
function eh(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case et.rD.TEXT_CHANNEL:
                        case et.rD.VOICE_CHANNEL:
                        case et.rD.GROUP_DM:
                        case et.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([B.A], () => (null != t ? B.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([F.default], () => (t?.isDM() === !0 ? F.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, P.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, S.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? H.intl.string(H.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, _.gU)(t, n),
                    s = (0, L.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? H.intl.string(H.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case et.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, eo.FT)(eo._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case et.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case et.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, el.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return null;
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)(G.Ay, { tabIndex: -1, guild: a.guild, size: G.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(ec.eu, { src: a.src, size: eo._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: ed.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(el.Q7, {
        ...r,
        className: ed.Ke,
        children: (0, l.jsxs)("div", {
            className: ed.nM,
            children: [
                (0, l.jsx)("div", { className: ed.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: ed.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ed.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: ed.gr }),
                                (0, l.jsx)(k.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: o,
                                }),
                            ],
                        }),
                        null != c &&
                            (0, l.jsx)(k.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: c,
                            }),
                    ],
                }),
            ],
        }),
    });
}
var eg = n(746080),
    em = n(492652);
function ep(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === et.rD.HEADER ? -1 : n++ }));
}
function eb(e) {
    let { returnFocusRef: t } = e,
        n = r.useId(),
        s = r.useRef(null),
        a = r.useRef(null);
    r.useLayoutEffect(() => {
        a.current = t.current;
    }, [t]);
    let [u, f] = r.useState(""),
        [h, m] = r.useState(-1),
        [p, b] = r.useState(0),
        [x, y] = r.useState(!0),
        C = (0, i.bG)([c.A], () => c.A.getProps().results),
        A = (0, i.bG)([g.A], () => g.A.getFrequentlyOpenedChannelIds()),
        I = (0, i.yK)([g.A], () =>
            g.A.getRecentlyClosed().map((e) => {
                let { channelId: t } = e;
                return t;
            }),
        ),
        E = (0, i.yK)([g.A], () => g.A.getTabs().flatMap((e) => ("channel" === e.kind ? [e.channelId] : []))),
        R = (0, i.bG)([c.A], () => c.A.getChannelHistory()),
        v = (0, i.bG)([d.Ay], () => d.Ay.getChannelId()),
        N = r.useMemo(() => [...new Set([...A, ...I, ...R])], [A, I, R]),
        M = (0, i.yK)(
            [z.A, B.A, ei.A, es.A],
            () =>
                N.filter((e) => {
                    if ((0, eg.jq)(e)) return !1;
                    let t = z.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !es.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != B.A.getGuild(t.getGuildId()) &&
                              ei.A.can(V.xBc.VIEW_CHANNEL, t))
                    );
                }),
            [N],
        ),
        w = r.useMemo(() => {
            let e = new Set(M);
            for (let t of E) e.delete(t);
            function t(t) {
                let n = t.filter((t) => e.has(t)).slice(0, 3);
                for (let t of n) e.delete(t);
                return n;
            }
            null != v && e.delete(v);
            let n = t(A),
                l = t(I),
                r = 0 === n.length || 0 === l.length ? t(R) : [];
            return [
                { section: "frequently_opened", title: H.intl.string(H.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: H.intl.string(H.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: H.intl.string(H.t["80lOZ1"]), channelIds: r },
            ];
        }, [M, E, v, A, I, R]),
        D = "" !== u.trim(),
        j = r.useMemo(
            () =>
                D
                    ? ep("search", C.filter(ea))
                    : w.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, en.A)(e) ?? []);
                          return r.length > 0 ? ep(t, [(0, et.jF)(n), ...r]) : [];
                      }),
            [D, C, w],
        ),
        T = D ? Math.min(p, j.length - 1) : h;
    function S(e) {
        (f(e), m(-1), b(0), (0, o.$P)(e), s.current?.focus());
    }
    function P(e) {
        D ? b(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, eu.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(J.l, {
        className: em.SW,
        "aria-label": H.intl.string(H.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(ee.I, {
                ref: s,
                query: u,
                onChange: S,
                onClear: () => S(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, er.W)(e, {
                            query: u,
                            results: j.map((e) => e.result),
                            selectedIndex: T,
                            onSearch: S,
                            onDismiss: o.jD,
                            onSelectIndex: P,
                            onPick: () => _(j[T]),
                        }));
                },
                placeholder: H.intl.string(H.t["++zIVN"]),
                "aria-label": H.intl.string(H.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": j.length > 0,
                    "aria-activedescendant": null != j[T] ? `${n}-${T}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            j.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": H.intl.string(H.t.KsjOJI),
                      className: em.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: j.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === et.rD.HEADER) return (0, l.jsx)(ef, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === T,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  x || P(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === et.rD.LINK
                              ? (0, l.jsx)(el.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(eh, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: em.p$,
                      role: "status",
                      children: (0, l.jsx)(k.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: D
                              ? H.intl.formatToPlainString(H.t.AqkHKJ, { query: u.trim() })
                              : H.intl.string(H.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var ex = n(333007),
    ey = n(717421),
    eC = n(775602);
function eA(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function eI(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function eE(e) {
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
var eR = n(266553);
function ev() {
    let {
            tabs: e,
            activeTabId: t,
            isVisible: n,
            isAtMaxTabs: b,
            maxTabs: x,
        } = (0, i.cf)([g.A], () => ({
            tabs: g.A.getTabs(),
            activeTabId: g.A.getActiveTabId(),
            isVisible: g.A.isTabBarVisible(),
            isAtMaxTabs: g.A.isAtMaxTabs(),
            maxTabs: g.A.getMaxTabs(),
        })),
        y = (0, i.bG)([d.Ay], () => d.Ay.getVoiceChannelId()),
        C = (0, i.bG)([c.A], () => c.A.isTabPicker()),
        A = "popout" === p.A.useConfig({ location: "ChannelTabBar" }).newTabExperience,
        I = r.useRef(null),
        {
            stripRef: E,
            registerTabNode: R,
            newTabButtonRef: v,
            handleDragStart: N,
            handleDragMove: M,
            handleDragEnd: w,
            handleCloseStart: D,
        } = (function (e) {
            let [, t] = (0, ey.z)(() => ({ progress: 0, config: { duration: 150 } })),
                n = r.useRef(null);
            r.useEffect(() => () => n.current?.(!1), []);
            let l = r.useRef(null),
                i = r.useRef(new Map()),
                s = r.useRef(null),
                a = r.useRef(null),
                u = r.useRef(0),
                o = r.useRef(0),
                c = r.useRef([]),
                d = r.useRef(0),
                f = r.useRef(0),
                h = r.useRef(0),
                m = r.useRef(0),
                p = r.useRef(0),
                b = r.useRef(0),
                x = r.useRef(0),
                y = r.useCallback((e, t) => {
                    null != t ? i.current.set(e, t) : i.current.delete(e);
                }, []),
                C = r.useRef(new Map()),
                A = e.map((e) => e.id).join(",");
            r.useLayoutEffect(() => {
                if (null != a.current) return;
                let e = i.current,
                    t = C.current;
                e.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                });
                let n = "" === A ? [] : A.split(","),
                    l = new Map();
                if (
                    (e.forEach((e, t) => {
                        n.includes(t) && l.set(t, e.getBoundingClientRect().left);
                    }),
                    t.size === n.length && n.every((e) => t.has(e)) && !eC.Ay.useReducedMotion)
                ) {
                    let n = [];
                    if (
                        (e.forEach((e, r) => {
                            let i = t.get(r),
                                s = l.get(r);
                            if (null == i || null == s) return;
                            let a = i - s;
                            Math.abs(a) > 0.5 && n.push({ node: e, delta: a });
                        }),
                        n.length > 0)
                    ) {
                        for (let { node: e, delta: t } of n) e.style.transform = `translateX(${t}px)`;
                        for (let { node: e } of (n[0].node.getBoundingClientRect(), n))
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
                C.current = l;
            }, [A]);
            let I = r.useRef(!1),
                E = r.useRef(!1),
                R = r.useRef(new Map()),
                v = r.useCallback(() => {
                    let e = new Map();
                    return (
                        R.current.forEach((t, n) => {
                            (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                        }),
                        e.forEach((e, t) => {
                            ((t.style.transition = ""), eA(t, e));
                        }),
                        R.current.clear(),
                        e
                    );
                }, []),
                N = r.useCallback((e) => {
                    if (eC.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), eA(e, n));
                        for (let { node: e, to: n } of (t[0].node.getBoundingClientRect(), t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), eA(e, n));
                            let t = setTimeout(() => {
                                (R.current.delete(e), (e.style.transition = ""), eI(e));
                            }, 150);
                            R.current.set(e, t);
                        }
                    }
                }, []);
            r.useEffect(() => {
                let e = R.current;
                return () => e.forEach((e) => clearTimeout(e));
            }, []);
            let M = r.useCallback(() => {
                    ((E.current = !0), v());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => eA(t, e)));
                }, [v]),
                w = r.useCallback(() => {
                    ((E.current = !1), v());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(eI), N(e));
                }, [v, N]);
            r.useEffect(() => {
                function e(e) {
                    if (!E.current) return;
                    let t = l.current;
                    if (null == t) return;
                    let n = t.getBoundingClientRect(),
                        r =
                            e.clientX >= n.left - 32 &&
                            e.clientX <= n.right + 32 &&
                            e.clientY >= n.top - 32 &&
                            e.clientY <= n.bottom + 32;
                    r !== I.current && ((I.current = r), r || w());
                }
                return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
            }, [w]);
            let D = r.useCallback(() => {
                    let e = l.current,
                        t = null != e && e.matches(":hover");
                    ((I.current = t), t && M());
                }, [M]),
                k = r.useRef(e);
            r.useLayoutEffect(() => {
                k.current = e;
            }, [e]);
            let j = r.useCallback((e, t) => {
                    let n = k.current,
                        r = l.current,
                        g = i.current.get(e);
                    if (null == r || null == g) return;
                    let y = r.getBoundingClientRect(),
                        C = parseFloat(getComputedStyle(r).columnGap);
                    h.current = Number.isFinite(C) ? C : 0;
                    let A = [];
                    n.forEach((e) => {
                        let t = i.current.get(e.id);
                        null != t && A.push({ id: e.id, node: t });
                    });
                    let I = new Map();
                    A.forEach((e) => {
                        let { node: t } = e;
                        return I.set(t, t.getBoundingClientRect());
                    });
                    let E = s.current;
                    (null != E && I.set(E, E.getBoundingClientRect()),
                        I.forEach((e, t) => {
                            ((t.style.position = "absolute"),
                                (t.style.boxSizing = "border-box"),
                                (t.style.left = `${e.left - y.left}px`),
                                (t.style.top = `${e.top - y.top}px`),
                                (t.style.width = `${e.width}px`),
                                (t.style.height = `${e.height}px`),
                                (t.style.margin = "0"));
                        }));
                    let R = eC.Ay.useReducedMotion,
                        v = [],
                        N = 1 / 0,
                        M = n.find((t) => t.id === e)?.pinned === !0,
                        w = 1 / 0,
                        D = -1 / 0;
                    (A.forEach((t) => {
                        let { id: l, node: r } = t,
                            i = I.get(r);
                        if (null == i) return;
                        let s = i.left - y.left;
                        if (
                            ((N = Math.min(N, s)),
                            n.find((e) => e.id === l)?.pinned === M &&
                                ((w = Math.min(w, s)), (D = Math.max(D, s + i.width))),
                            l === e)
                        ) {
                            f.current = i.width;
                            return;
                        }
                        (R || (r.style.transition = "left 150ms ease-out"),
                            v.push({ node: r, size: i.width, center: s + i.width / 2 }));
                    }),
                        (c.current = v),
                        (d.current = Number.isFinite(N) ? N : 0),
                        (u.current = t));
                    let j = parseFloat(g.style.left);
                    o.current = j;
                    let T = Number.isFinite(w) ? w : j,
                        S = Number.isFinite(D) ? D : j + f.current;
                    ((m.current = Math.min(T, j)),
                        (p.current = Math.max(S - f.current, j)),
                        (b.current = n.findIndex((t) => t.id === e)),
                        (x.current = j),
                        (a.current = e),
                        (g.style.zIndex = "1"),
                        (g.style.boxShadow = "var(--shadow-high)"));
                }, []),
                T = r.useCallback((e, t) => {
                    if (a.current !== e) return;
                    let n = i.current.get(e);
                    if (null == n) return;
                    let l = Math.min(Math.max(o.current + t - u.current, m.current), p.current);
                    n.style.left = `${l}px`;
                    let r = c.current,
                        s = f.current,
                        g = l + s,
                        y = o.current + s / 2,
                        C = 0;
                    for (let e of r) {
                        let t = e.center > y ? g : l;
                        e.center < t && C++;
                    }
                    let A = h.current,
                        I = d.current,
                        E = I;
                    (r.forEach((e, t) => {
                        (t === C && ((E = I), (I += s + A)), (e.node.style.left = `${I}px`), (I += e.size + A));
                    }),
                        C >= r.length && (E = I),
                        (b.current = C),
                        (x.current = E));
                }, []),
                S = r.useCallback(async () => {
                    let e = a.current;
                    if (null == e) return;
                    let l = i.current.get(e),
                        r = null != l ? parseFloat(l.style.left) : 0 / 0,
                        u = x.current,
                        o = k.current.filter((t) => t.id !== e).map((e) => e.id),
                        d = o.slice(b.current),
                        f = o.slice(0, b.current).reverse(),
                        h = !1,
                        m = function () {
                            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                            if (h) return;
                            ((h = !0), (n.current = null));
                            let l = g.A.getTabs(),
                                r = l.find((t) => t.id === e),
                                u = l.filter((t) => t.id !== e),
                                o = (e) => u.some((t) => t.id === e && t.pinned === r?.pinned),
                                m = d.find(o),
                                p = f.find(o),
                                b =
                                    null != m
                                        ? u.findIndex((e) => e.id === m)
                                        : null != p
                                          ? u.findIndex((e) => e.id === p) + 1
                                          : u.length,
                                x = () => (0, $.Aq)(e, b);
                            (t ? (0, ex.flushSync)(x) : x(),
                                i.current.forEach(eE),
                                null != s.current && eE(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                k.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (C.current = y));
                        };
                    (null == l ||
                        !Number.isFinite(r) ||
                        eC.Ay.useReducedMotion ||
                        ((n.current = m),
                        await t({
                            from: { progress: 0 },
                            to: { progress: 1 },
                            reset: !0,
                            onChange: (e) => {
                                let { progress: t } = e;
                                h || (l.style.left = `${r + (u - r) * t}px`);
                            },
                        })),
                        m());
                }, [t]);
            return {
                stripRef: l,
                registerTabNode: y,
                newTabButtonRef: s,
                handleDragStart: j,
                handleDragMove: T,
                handleDragEnd: S,
                handleCloseStart: D,
            };
        })(e),
        [k, j] = r.useState(() => new Map()),
        [T, S] = r.useState(e);
    if (T !== e) {
        let t = T.filter((t) => !e.some((e) => e.id === t.id));
        (t.length > 0 &&
            j((e) => {
                let n = new Map(e);
                return (t.forEach((e) => n.set(e.id, { tab: e, index: T.indexOf(e) })), n);
            }),
            S(e));
    }
    let P = r.useRef(0);
    r.useLayoutEffect(() => {
        (k.size > P.current && D(), (P.current = k.size));
    }, [k, D]);
    let _ = r.useCallback((e) => {
        j((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!n) return null;
    let L = b ? H.intl.formatToPlainString(H.t["I8l3Z+"], { count: x }) : void 0,
        G = e.length > 1,
        z = [...e];
    return (
        k.forEach((e) => {
            let { tab: t, index: n } = e;
            return z.splice(Math.min(n, z.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: E,
            className: eR.$,
            role: "group",
            "aria-label": H.intl.string(H.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                z.map((e) =>
                    (0, l.jsx)(
                        Z,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: G,
                            isExiting: k.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === y,
                            registerTabNode: R,
                            onDragStart: N,
                            onDragMove: M,
                            onDragEnd: w,
                            onExited: _,
                        },
                        e.id,
                    ),
                ),
                (0, l.jsx)("div", {
                    ref: v,
                    className: eR.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: v,
                        shouldShow: C,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(eb, { returnFocusRef: I }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: I,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != L,
                                selected: C,
                                "aria-expanded": A ? C : void 0,
                                "aria-haspopup": A ? "dialog" : void 0,
                                tooltip: L ?? H.intl.string(H.t.GR7NIF),
                                tooltipKeyboardShortcut: null == L ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
