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
    x = n(503698),
    b = n.n(x),
    y = n(646514),
    A = n(214947),
    C = n(34188),
    I = n(577473),
    E = n(403581),
    v = n(27232),
    M = n(329921),
    N = n(866665),
    D = n(939249),
    R = n(789645),
    k = n(366605),
    w = n(834730),
    j = n(812993),
    P = n(442433),
    T = n(571694),
    S = n(47167),
    _ = n(713654),
    L = n(5180),
    z = n(682163),
    G = n(734057),
    B = n(71393),
    O = n(218461),
    U = n(543465),
    F = n(287809),
    $ = n(114129);
n(712960);
var H = n(652215),
    K = n(792996),
    V = n(133281);
function X() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let Y = new Map(),
    q = new Set(),
    Q = !1,
    W = r.memo(function (e) {
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
            [x, W] = r.useState(
                () => (Q || ((Q = !0), g.A.getTabs().forEach((e) => q.add(e.id))), !q.has(t.id) && !X()),
            );
        (r.useEffect(() => {
            q.add(t.id);
        }, [t.id]),
            r.useEffect(() => {
                if (!x) return;
                let e = setTimeout(() => W(!1), 150);
                return () => clearTimeout(e);
            }, [x]));
        let Z = (0, i.bG)([G.A], () => ("channel" === t.kind ? G.A.getChannel(t.channelId) : null), [t]),
            J = (0, i.bG)([B.A], () => ("channel" === t.kind ? B.A.getGuild(t.guildId) : null), [t]),
            ee = (0, i.bG)([F.default], () => (null != Z && Z.isDM() ? F.default.getUser(Z.getRecipientId()) : null), [
                Z,
            ]),
            et = (0, S.Ay)(Z);
        "channel" === t.kind && null != et && Y.set(t.channelId, et);
        let en = "route" === t.kind ? t.routeLabel : (et ?? Y.get(t.channelId) ?? K.intl.string(K.t.zLZPmk)),
            el = r.useCallback(() => {
                (0, $.ZD)(t.id, "tab_click");
            }, [t]),
            er = r.useCallback(
                (e) => {
                    !u && a && (0, $.f5)(t.id, e);
                },
                [u, a, t.id],
            );
        r.useEffect(() => {
            if (!u) return;
            if (X()) return void p(t.id);
            let e = setTimeout(() => p(t.id), 150);
            return () => clearTimeout(e);
        }, [u, p, t.id]);
        let ei = r.useCallback(
                (e) => {
                    1 === e.button && (e.preventDefault(), er("middle_click"));
                },
                [er],
            ),
            es = r.useCallback(
                (e) => {
                    (0, P.L3)(e, async () => {
                        let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                        return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => er("context_menu") });
                    });
                },
                [t, er],
            ),
            [ea, eu] = r.useState(!1),
            eo = r.useCallback(
                (e, t) => {
                    (eu(!0), d(e, t));
                },
                [d],
            ),
            ec = r.useCallback(() => {
                (eu(!1), m());
            }, [m]),
            {
                nodeRef: ed,
                handlePointerDown: ef,
                handlePointerMove: eh,
                handlePointerUp: eg,
                handleClickCapture: em,
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
            })({ itemId: t.id, onDragStart: eo, onDragMove: f, onDragEnd: ec }),
            ep = r.useCallback(
                (e) => {
                    ((ed.current = e), c(t.id, e));
                },
                [ed, c, t.id],
            ),
            {
                mentionCount: ex,
                isLowImportanceMention: eb,
                showUnreadDot: ey,
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
            eA = null;
        if ("route" === t.kind)
            t.routePath === H.BVt.FRIENDS
                ? (eA = (0, l.jsx)(A.FriendsIcon, { size: "sm", color: "currentColor", className: V.PA }))
                : t.routePath === H.BVt.COLLECTIBLES_SHOP
                  ? (eA = (0, l.jsx)(C.ShopIcon, { size: "sm", color: "currentColor", className: V.PA }))
                  : t.routePath === H.BVt.QUEST_HOME
                    ? (eA = (0, l.jsx)(I.QuestsIcon, { size: "sm", color: "currentColor", className: V.PA }))
                    : t.routePath === H.BVt.APPLICATION_STORE &&
                      (eA = (0, l.jsx)(E.NitroWheelIcon, { size: "sm", color: "currentColor", className: V.PA }));
        else if ((0, L.ai)(t.guildId))
            eA = (0, l.jsx)(v.StarIcon, { size: "sm", color: "currentColor", className: V.PA });
        else if (null != Z && Z.isThread()) {
            let e = (0, _.gU)(Z);
            null != e && (eA = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: V.PA }));
        } else if (null != J) eA = (0, l.jsx)(z.Ay, { guild: J, size: z.Ay.Sizes.SMOL, active: !0, className: V.$f });
        else if (null != Z && (Z.isDM() || Z.isGroupDM())) {
            let e = null != ee ? ee.getAvatarURL(void 0, 18) : (0, T.Y)(Z, 18);
            null != e &&
                (eA = (0, l.jsx)("img", { className: V.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
        }
        let eC = "channel" !== t.kind || null == J || null == Z || Z.isThread() ? null : (0, _.gU)(Z),
            eI = null != J ? K.intl.formatToPlainString(K.t.HPMTD3, { channelName: en, guildName: J.name }) : en,
            eE = null;
        return (
            (a || ey) &&
                (eE = (0, l.jsxs)(l.Fragment, {
                    children: [
                        ey &&
                            (0, l.jsx)("span", {
                                className: V.XE,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(M.N, { variant: "neutral" }),
                            }),
                        a &&
                            (0, l.jsx)(N.m, {
                                position: "bottom",
                                text: K.intl.string(K.t.In6PEK),
                                keyboardShortcut: h.nK.binds["0"],
                                ariaHidden: !0,
                                children: (0, l.jsx)(D.D, {
                                    className: V.Pu,
                                    onClick: () => er("close_button"),
                                    onPointerDown: (e) => e.stopPropagation(),
                                    "aria-label": K.intl.formatToPlainString(K.t["A/PzIa"], { channelName: en }),
                                    children: (0, l.jsx)(R.XSmallIcon, { size: "sm" }),
                                }),
                            }),
                    ],
                })),
            (0, l.jsxs)("div", {
                ref: ep,
                className: b()(V.Mf, { [V.yR]: s, [V.MY]: x, [V.nE]: u, [V.zL]: null != eE }),
                onPointerDown: ef,
                onPointerMove: eh,
                onPointerUp: eg,
                onPointerCancel: eg,
                onClickCapture: em,
                onContextMenu: es,
                onDoubleClick: (e) => e.stopPropagation(),
                children: [
                    (0, l.jsx)(N.m, {
                        position: "bottom",
                        text: eI,
                        delay: 500,
                        shouldShow: !ea && !u,
                        ariaHidden: null == J,
                        children: (0, l.jsxs)(D.D, {
                            className: V.eg,
                            onClick: el,
                            onAuxClick: ei,
                            "aria-current": s ? "page" : void 0,
                            children: [
                                t.pinned
                                    ? (0, l.jsx)(k.PinIcon, { size: "sm", color: "currentColor", className: V.PA })
                                    : eA,
                                null != eC &&
                                    (0, l.jsx)(eC, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: b()(V.j1, { [V.Av]: o }),
                                    }),
                                (0, l.jsx)(w.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: V.HA,
                                    children: en,
                                }),
                            ],
                        }),
                    }),
                    ex > 0 &&
                        (0, l.jsx)("span", {
                            className: V.Xe,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(j.hV, {
                                count: ex,
                                color: eb
                                    ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                    : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            }),
                        }),
                    eE,
                ],
            })
        );
    });
var Z = n(305866),
    J = n(683438),
    ee = n(662090),
    et = n(280157),
    en = n(320264),
    el = n(319593),
    er = n(576705),
    ei = n(994500);
function es(e) {
    switch (e.type) {
        case ee.rD.TEXT_CHANNEL:
        case ee.rD.VOICE_CHANNEL:
        case ee.rD.GROUP_DM:
        case ee.rD.DM:
        case ee.rD.USER:
        case ee.rD.GUILD:
            return !0;
        case ee.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case ee.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var ea = n(254838),
    eu = n(778712),
    eo = n(97808),
    ec = n(476921);
function ed(e) {
    let { id: t, children: n } = e;
    return (0, l.jsx)("div", {
        className: ec.wx,
        id: t,
        role: "presentation",
        children: (0, l.jsx)(w.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: n }),
    });
}
function ef(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case ee.rD.TEXT_CHANNEL:
                        case ee.rD.VOICE_CHANNEL:
                        case ee.rD.GROUP_DM:
                        case ee.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([B.A], () => (null != t ? B.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([F.default], () => (t?.isDM() === !0 ? F.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, S.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, T.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? K.intl.string(K.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, _.gU)(t, n),
                    s = (0, L.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? K.intl.string(K.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case ee.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, eu.FT)(eu._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case ee.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case ee.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, en.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return (0, l.jsx)(en.Q7, { ...r, className: ec.Ke, children: null });
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)(z.Ay, { tabIndex: -1, guild: a.guild, size: z.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(eo.eu, { src: a.src, size: eu._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: ec.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(en.Q7, {
        ...r,
        className: ec.Ke,
        children: (0, l.jsxs)("div", {
            className: ec.nM,
            children: [
                (0, l.jsx)("div", { className: ec.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: ec.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ec.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: ec.gr }),
                                (0, l.jsx)(w.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: o,
                                }),
                            ],
                        }),
                        null != c &&
                            (0, l.jsx)(w.E, {
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
var eh = n(746080),
    eg = n(492652);
function em(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === ee.rD.HEADER ? -1 : n++ }));
}
function ep(e) {
    let { returnFocusRef: t } = e,
        n = r.useId(),
        s = r.useRef(null),
        a = r.useRef(null);
    r.useLayoutEffect(() => {
        a.current = t.current;
    }, [t]);
    let [u, f] = r.useState(""),
        [h, m] = r.useState(-1),
        [p, x] = r.useState(0),
        [b, y] = r.useState(!0),
        A = (0, i.bG)([c.A], () => c.A.getProps().results),
        C = (0, i.bG)([g.A], () => g.A.getFrequentlyOpenedChannelIds()),
        I = (0, i.yK)([g.A], () =>
            g.A.getRecentlyClosed().map((e) => {
                let { channelId: t } = e;
                return t;
            }),
        ),
        E = (0, i.yK)([g.A], () => g.A.getTabs().flatMap((e) => ("channel" === e.kind ? [e.channelId] : []))),
        v = (0, i.bG)([c.A], () => c.A.getChannelHistory()),
        M = (0, i.bG)([d.Ay], () => d.Ay.getChannelId()),
        N = r.useMemo(() => [...new Set([...C, ...I, ...v])], [C, I, v]),
        D = (0, i.yK)(
            [G.A, B.A, er.A, ei.A],
            () =>
                N.filter((e) => {
                    if ((0, eh.jq)(e)) return !1;
                    let t = G.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !ei.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != B.A.getGuild(t.getGuildId()) &&
                              er.A.can(H.xBc.VIEW_CHANNEL, t))
                    );
                }),
            [N],
        ),
        R = r.useMemo(() => {
            let e = new Set(D);
            for (let t of E) e.delete(t);
            function t(t) {
                let n = t.filter((t) => e.has(t)).slice(0, 3);
                for (let t of n) e.delete(t);
                return n;
            }
            null != M && e.delete(M);
            let n = t(C),
                l = t(I),
                r = 0 === n.length || 0 === l.length ? t(v) : [];
            return [
                { section: "frequently_opened", title: K.intl.string(K.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: K.intl.string(K.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: K.intl.string(K.t["80lOZ1"]), channelIds: r },
            ];
        }, [D, E, M, C, I, v]),
        k = "" !== u.trim(),
        j = r.useMemo(
            () =>
                k
                    ? em("search", A.filter(es))
                    : R.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, et.A)(e) ?? []);
                          return r.length > 0 ? em(t, [(0, ee.jF)(n), ...r]) : [];
                      }),
            [k, A, R],
        ),
        P = k ? Math.min(p, j.length - 1) : h;
    function T(e) {
        (f(e), m(-1), x(0), (0, o.$P)(e), s.current?.focus());
    }
    function S(e) {
        k ? x(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, ea.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(Z.l, {
        className: eg.SW,
        "aria-label": K.intl.string(K.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(J.I, {
                ref: s,
                query: u,
                onChange: T,
                onClear: () => T(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, el.W)(e, {
                            query: u,
                            results: j.map((e) => e.result),
                            selectedIndex: P,
                            onSearch: T,
                            onDismiss: o.jD,
                            onSelectIndex: S,
                            onPick: () => _(j[P]),
                        }));
                },
                placeholder: K.intl.string(K.t["++zIVN"]),
                "aria-label": K.intl.string(K.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": j.length > 0,
                    "aria-activedescendant": null != j[P] ? `${n}-${P}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            j.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": K.intl.string(K.t.KsjOJI),
                      className: eg.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: j.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === ee.rD.HEADER) return (0, l.jsx)(ed, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === P,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  b || S(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === ee.rD.LINK
                              ? (0, l.jsx)(en.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(ef, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: eg.p$,
                      role: "status",
                      children: (0, l.jsx)(w.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: k
                              ? K.intl.formatToPlainString(K.t.AqkHKJ, { query: u.trim() })
                              : K.intl.string(K.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var ex = n(333007),
    eb = n(717421),
    ey = n(775602);
function eA(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function eC(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function eI(e) {
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
var eE = n(266553);
function ev() {
    let {
            tabs: e,
            activeTabId: t,
            isVisible: n,
            isAtMaxTabs: x,
            maxTabs: b,
        } = (0, i.cf)([g.A], () => ({
            tabs: g.A.getTabs(),
            activeTabId: g.A.getActiveTabId(),
            isVisible: g.A.isTabBarVisible(),
            isAtMaxTabs: g.A.isAtMaxTabs(),
            maxTabs: g.A.getMaxTabs(),
        })),
        y = (0, i.bG)([d.Ay], () => d.Ay.getVoiceChannelId()),
        A = (0, i.bG)([c.A], () => c.A.isTabPicker()),
        C = "popout" === p.A.useConfig({ location: "ChannelTabBar" }, { autoTrackExposure: !1 }).newTabExperience,
        I = r.useRef(null),
        E = r.useRef(null),
        {
            setStripRef: v,
            registerTabNode: M,
            setNewTabButtonRef: N,
            handleDragStart: D,
            handleDragMove: R,
            handleDragEnd: k,
            handleCloseStart: w,
        } = (function (e) {
            let [, t] = (0, eb.z)(() => ({ progress: 0, config: { duration: 150 } })),
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
                x = r.useRef(0),
                b = r.useRef(0),
                y = r.useCallback((e, t) => {
                    null != t ? i.current.set(e, t) : i.current.delete(e);
                }, []),
                A = r.useCallback((e) => {
                    s.current = e;
                }, []),
                C = r.useCallback((e) => {
                    l.current = e;
                }, []),
                I = r.useRef(new Map()),
                E = e.map((e) => e.id).join(",");
            r.useLayoutEffect(() => {
                if (null != a.current) return;
                let t = i.current,
                    n = I.current;
                t.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                });
                let l = new Map();
                if (
                    (t.forEach((t, n) => {
                        e.some((e) => e.id === n) && l.set(n, t.getBoundingClientRect().left);
                    }),
                    n.size === e.length && e.every((e) => n.has(e.id)) && !ey.Ay.useReducedMotion)
                ) {
                    let e = [];
                    if (
                        (t.forEach((t, r) => {
                            let i = n.get(r),
                                s = l.get(r);
                            if (null == i || null == s) return;
                            let a = i - s;
                            Math.abs(a) > 0.5 && e.push({ node: t, delta: a });
                        }),
                        e.length > 0)
                    ) {
                        for (let { node: t, delta: n } of e) t.style.transform = `translateX(${n}px)`;
                        for (let { node: t } of (e[0].node.offsetHeight, e))
                            ((t.style.transition = "transform 150ms ease-out"),
                                (t.style.transform = ""),
                                t.addEventListener(
                                    "transitionend",
                                    () => {
                                        t.style.transition = "";
                                    },
                                    { once: !0 },
                                ));
                    }
                }
                I.current = l;
            }, [E]);
            let v = r.useRef(!1),
                M = r.useRef(!1),
                N = r.useRef(new Map()),
                D = r.useCallback(() => {
                    let e = new Map();
                    return (
                        N.current.forEach((t, n) => {
                            (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                        }),
                        e.forEach((e, t) => {
                            ((t.style.transition = ""), eA(t, e));
                        }),
                        N.current.clear(),
                        e
                    );
                }, []),
                R = r.useCallback((e) => {
                    if (ey.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), eA(e, n));
                        for (let { node: e, to: n } of (t[0].node.offsetWidth, t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), eA(e, n));
                            let t = setTimeout(() => {
                                (N.current.delete(e), (e.style.transition = ""), eC(e));
                            }, 150);
                            N.current.set(e, t);
                        }
                    }
                }, []);
            r.useEffect(() => {
                let e = N.current;
                return () => e.forEach((e) => clearTimeout(e));
            }, []);
            let k = r.useCallback(() => {
                    ((M.current = !0), D());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => eA(t, e)));
                }, [D]),
                w = r.useCallback(() => {
                    ((M.current = !1), D());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(eC), R(e));
                }, [D, R]);
            r.useEffect(() => {
                function e(e) {
                    if (!M.current) return;
                    let t = l.current;
                    if (null == t) return;
                    let n = t.getBoundingClientRect(),
                        r =
                            e.clientX >= n.left - 32 &&
                            e.clientX <= n.right + 32 &&
                            e.clientY >= n.top - 32 &&
                            e.clientY <= n.bottom + 32;
                    r !== v.current && ((v.current = r), r || w());
                }
                return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
            }, [w]);
            let j = r.useCallback(() => {
                    let e = l.current,
                        t = null != e && e.matches(":hover");
                    ((v.current = t), t && k());
                }, [k]),
                P = r.useRef(e);
            r.useLayoutEffect(() => {
                P.current = e;
            }, [e]);
            let T = r.useCallback((e, t) => {
                let n = P.current,
                    r = l.current,
                    g = i.current.get(e);
                if (null == r || null == g) return;
                let y = r.getBoundingClientRect(),
                    A = parseFloat(getComputedStyle(r).columnGap);
                h.current = Number.isFinite(A) ? A : 0;
                let C = [];
                n.forEach((e) => {
                    let t = i.current.get(e.id);
                    null != t && C.push({ id: e.id, node: t });
                });
                let I = new Map();
                C.forEach((e) => {
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
                let v = ey.Ay.useReducedMotion,
                    M = [],
                    N = 1 / 0,
                    D = n.find((t) => t.id === e)?.pinned === !0,
                    R = 1 / 0,
                    k = -1 / 0;
                (C.forEach((t) => {
                    let { id: l, node: r } = t,
                        i = I.get(r);
                    if (null == i) return;
                    let s = i.left - y.left;
                    if (
                        ((N = Math.min(N, s)),
                        n.find((e) => e.id === l)?.pinned === D &&
                            ((R = Math.min(R, s)), (k = Math.max(k, s + i.width))),
                        l === e)
                    ) {
                        f.current = i.width;
                        return;
                    }
                    (v || (r.style.transition = "left 150ms ease-out"),
                        M.push({ node: r, size: i.width, center: s + i.width / 2 }));
                }),
                    (c.current = M),
                    (d.current = Number.isFinite(N) ? N : 0),
                    (u.current = t));
                let w = parseFloat(g.style.left);
                o.current = w;
                let j = Number.isFinite(R) ? R : w,
                    T = Number.isFinite(k) ? k : w + f.current;
                ((m.current = Math.min(j, w)),
                    (p.current = Math.max(T - f.current, w)),
                    (x.current = n.findIndex((t) => t.id === e)),
                    (b.current = w),
                    (a.current = e),
                    (g.style.zIndex = "1"),
                    (g.style.boxShadow = "0 4px 12px var(--elevation-high)"));
            }, []);
            return {
                setStripRef: C,
                registerTabNode: y,
                setNewTabButtonRef: A,
                handleDragStart: T,
                handleDragMove: r.useCallback((e, t) => {
                    if (a.current !== e) return;
                    let n = i.current.get(e);
                    if (null == n) return;
                    let l = Math.min(Math.max(o.current + t - u.current, m.current), p.current);
                    n.style.left = `${l}px`;
                    let r = c.current,
                        s = f.current,
                        g = l + s,
                        y = o.current + s / 2,
                        A = 0;
                    for (let e of r) {
                        let t = e.center > y ? g : l;
                        e.center < t && A++;
                    }
                    let C = h.current,
                        I = d.current,
                        E = I;
                    (r.forEach((e, t) => {
                        (t === A && ((E = I), (I += s + C)), (e.node.style.left = `${I}px`), (I += e.size + C));
                    }),
                        A >= r.length && (E = I),
                        (x.current = A),
                        (b.current = E));
                }, []),
                handleDragEnd: r.useCallback(async () => {
                    let e = a.current;
                    if (null == e) return;
                    let l = i.current.get(e),
                        r = null != l ? parseFloat(l.style.left) : 0 / 0,
                        u = b.current,
                        o = P.current.filter((t) => t.id !== e).map((e) => e.id),
                        d = o.slice(x.current),
                        f = o.slice(0, x.current).reverse(),
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
                                x =
                                    null != m
                                        ? u.findIndex((e) => e.id === m)
                                        : null != p
                                          ? u.findIndex((e) => e.id === p) + 1
                                          : u.length,
                                b = () => (0, $.Aq)(e, x);
                            (t ? (0, ex.flushSync)(b) : b(),
                                i.current.forEach(eI),
                                null != s.current && eI(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                P.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (I.current = y));
                        };
                    (null == l ||
                        !Number.isFinite(r) ||
                        ey.Ay.useReducedMotion ||
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
                }, [t]),
                handleCloseStart: j,
            };
        })(e),
        j = r.useCallback(
            (e) => {
                ((I.current = e), N(e));
            },
            [N],
        ),
        [P, T] = r.useState(() => new Map()),
        [S, _] = r.useState(e);
    if (S !== e) {
        let t = S.filter((t) => !e.some((e) => e.id === t.id));
        (t.length > 0 &&
            T((e) => {
                let n = new Map(e);
                return (t.forEach((e) => n.set(e.id, { tab: e, index: S.indexOf(e) })), n);
            }),
            _(e));
    }
    let L = r.useRef(0);
    r.useLayoutEffect(() => {
        (P.size > L.current && w(), (L.current = P.size));
    }, [P, w]);
    let z = r.useCallback((e) => {
        T((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!n) return null;
    let G = x ? K.intl.formatToPlainString(K.t["I8l3Z+"], { count: b }) : void 0,
        B = e.length > 1,
        O = [...e];
    return (
        P.forEach((e) => {
            let { tab: t, index: n } = e;
            return O.splice(Math.min(n, O.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: v,
            className: eE.$,
            role: "group",
            "aria-label": K.intl.string(K.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                O.map((e) =>
                    (0, l.jsx)(
                        W,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: B,
                            isExiting: P.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === y,
                            registerTabNode: M,
                            onDragStart: D,
                            onDragMove: R,
                            onDragEnd: k,
                            onExited: z,
                        },
                        e.id,
                    ),
                ),
                (0, l.jsx)("div", {
                    ref: j,
                    className: eE.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: I,
                        shouldShow: A,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(ep, { returnFocusRef: E }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: E,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != G,
                                selected: A,
                                "aria-expanded": C ? A : void 0,
                                "aria-haspopup": C ? "dialog" : void 0,
                                tooltip: G ?? K.intl.string(K.t.GR7NIF),
                                tooltipKeyboardShortcut: null == G ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
