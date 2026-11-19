(n.r(t), n.d(t, { default: () => eD }));
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
    R = n(27232),
    v = n(329921),
    N = n(866665),
    M = n(939249),
    w = n(789645),
    D = n(366605),
    k = n(834730),
    j = n(812993),
    S = n(442433),
    T = n(571694),
    P = n(47167),
    _ = n(475889),
    G = n(713654),
    L = n(693879),
    z = n(5180),
    B = n(682163),
    O = n(616356),
    F = n(734057),
    U = n(71393),
    $ = n(218461),
    H = n(543465),
    V = n(287809),
    K = n(114129);
(n(897898), n(712960));
var X = n(652215),
    Y = n(792996),
    q = n(133281);
let Q = {
    [X.BVt.FRIENDS]: A.FriendsIcon,
    [X.BVt.COLLECTIBLES_SHOP]: C.ShopIcon,
    [X.BVt.QUEST_HOME]: I.QuestsIcon,
    [X.BVt.APPLICATION_STORE]: E.NitroWheelIcon,
};
function W() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let Z = new Map(),
    J = new Set(),
    ee = !1;
function et(e) {
    let { channel: t } = e,
        n = (0, _.H)(t);
    return null == n
        ? null
        : (0, l.jsx)("span", {
              className: q.XE,
              children: (0, l.jsx)(L.z, { textColor: "text-feedback-positive", entry: { start: n } }),
          });
}
let en = r.memo(function (e) {
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
        [x, A] = r.useState(() => (ee || ((ee = !0), g.A.getTabs().forEach((e) => J.add(e.id))), !J.has(t.id) && !W()));
    (r.useEffect(() => {
        J.add(t.id);
    }, [t.id]),
        r.useEffect(() => {
            if (!x) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x]));
    let C = (0, i.bG)([F.A], () => ("channel" === t.kind ? F.A.getChannel(t.channelId) : null), [t]),
        I = (0, i.bG)([U.A], () => ("channel" === t.kind ? U.A.getGuild(t.guildId) : null), [t]),
        E = (0, i.bG)([V.default], () => (null != C && C.isDM() ? V.default.getUser(C.getRecipientId()) : null), [C]),
        _ = (0, P.Ay)(C),
        L = "channel" === t.kind ? t.channelId : null;
    r.useEffect(() => {
        null != L && null != _ && Z.set(L, _);
    }, [L, _]);
    let X = "route" === t.kind ? t.routeLabel : (_ ?? Z.get(t.channelId) ?? Y.intl.string(Y.t.zLZPmk)),
        en = r.useCallback(() => {
            (0, K.ZD)(t.id, "tab_click");
        }, [t.id]),
        el = r.useCallback(
            (e) => {
                !u && a && (0, K.f5)(t.id, e);
            },
            [u, a, t.id],
        );
    r.useEffect(() => {
        if (!u) return;
        if (W()) return void p(t.id);
        let e = setTimeout(() => p(t.id), 150);
        return () => clearTimeout(e);
    }, [u, p, t.id]);
    let er = r.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), el("middle_click"));
            },
            [el],
        ),
        ei = r.useCallback(
            (e) => {
                (0, S.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => el("context_menu") });
                });
            },
            [t, el],
        ),
        [es, ea] = r.useState(!1),
        eu = r.useCallback(
            (e, t) => {
                (ea(!0), d(e, t));
            },
            [d],
        ),
        eo = r.useCallback(() => {
            (ea(!1), m());
        }, [m]),
        {
            nodeRef: ec,
            handlePointerDown: ed,
            handlePointerMove: ef,
            handlePointerUp: eh,
            handleClickCapture: eg,
        } = (function (e) {
            let { itemId: t, onDragStart: n, onDragMove: l, onDragEnd: i } = e,
                s = r.useRef(null),
                a = r.useRef(null),
                u = r.useRef(!1),
                o = r.useCallback((e) => {
                    0 === e.button &&
                        ((u.current = !1),
                        (a.current = { pointerId: e.pointerId, startX: e.clientX, startY: e.clientY, dragging: !1 }));
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
        })({ itemId: t.id, onDragStart: eu, onDragMove: f, onDragEnd: eo }),
        em = r.useCallback(
            (e) => {
                ((ec.current = e), c(t.id, e));
            },
            [ec, c, t.id],
        ),
        {
            mentionCount: ep,
            isLowImportanceMention: ex,
            showUnreadDot: eb,
        } = (0, i.cf)(
            [$.Ay, H.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = $.Ay.getMentionCount(t.channelId),
                    n = H.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: $.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && $.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        ey = (0, i.bG)(
            [O.A],
            () => "channel" === t.kind && O.A.getAllApplicationStreamsForChannel(t.channelId).length > 0,
            [t],
        ),
        eA = null;
    if ("route" === t.kind) {
        let e = Q[t.routePath];
        null != e && (eA = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: q.NR }));
    } else if ((0, z.ai)(t.guildId))
        eA = (0, l.jsx)(R.StarIcon, { size: "sm", color: "currentColor", className: q.NR });
    else if (null != I) eA = (0, l.jsx)(B.Ay, { guild: I, size: B.Ay.Sizes.SMOL, active: !0, className: q.$f });
    else if (null != C && (C.isDM() || C.isGroupDM())) {
        let e = null != E ? E.getAvatarURL(void 0, 18) : (0, T.Y)(C, 18);
        null != e && (eA = (0, l.jsx)("img", { className: q.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let eC = "channel" === t.kind && null != I && null != C ? (0, G.gU)(C, null, { stream: ey }) : null,
        eI = null != I ? Y.intl.formatToPlainString(Y.t.gT4jAr, { channelName: X, guildName: I.name }) : X,
        eE = null;
    return (
        (a || eb) &&
            (eE = (0, l.jsxs)(l.Fragment, {
                children: [
                    eb &&
                        (0, l.jsx)("span", {
                            className: q.o2,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(v.N, { variant: "neutral" }),
                        }),
                    a &&
                        (0, l.jsx)(N.m, {
                            position: "bottom",
                            text: Y.intl.string(Y.t.In6PEK),
                            keyboardShortcut: h.nK.binds["0"],
                            ariaHidden: !0,
                            children: (0, l.jsx)(M.D, {
                                className: q.Pu,
                                onClick: () => el("close_button"),
                                onPointerDown: (e) => e.stopPropagation(),
                                "aria-label": Y.intl.formatToPlainString(Y.t["A/PzIa"], { channelName: X }),
                                children: (0, l.jsx)(w.XSmallIcon, { size: "sm" }),
                            }),
                        }),
                ],
            })),
        (0, l.jsxs)("div", {
            ref: em,
            className: b()(q.Mf, { [q.yR]: s, [q.MY]: x, [q.nE]: u, [q.zL]: null != eE }),
            onPointerDown: ed,
            onPointerMove: ef,
            onPointerUp: eh,
            onPointerCancel: eh,
            onClickCapture: eg,
            onContextMenu: ei,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, l.jsx)(N.m, {
                    position: "bottom",
                    text: eI,
                    delay: 500,
                    shouldShow: !es && !u,
                    ariaHidden: null == I,
                    children: (0, l.jsx)(M.D, {
                        className: q.eg,
                        onClick: en,
                        onAuxClick: er,
                        "aria-current": s ? "page" : void 0,
                        children: (0, l.jsxs)("span", {
                            className: q.XH,
                            children: [
                                t.pinned
                                    ? (0, l.jsx)(D.PinIcon, { size: "sm", color: "currentColor", className: q.NR })
                                    : eA,
                                null != eC &&
                                    (0, l.jsx)(eC, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: b()(q.j1, { [q.Av]: o }),
                                    }),
                                (0, l.jsx)(k.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: q.HA,
                                    children: X,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsxs)("div", {
                    className: q.Pq,
                    children: [
                        ep > 0 &&
                            (0, l.jsx)("span", {
                                className: q.Xe,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(j.hV, {
                                    count: ep,
                                    color: ex
                                        ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                        : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                }),
                            }),
                        null != C && C.isGuildVocal() && 0 === ep && !eb && (0, l.jsx)(et, { channel: C }),
                        eE,
                    ],
                }),
            ],
        })
    );
});
var el = n(305866),
    er = n(683438),
    ei = n(662090),
    es = n(280157),
    ea = n(320264),
    eu = n(319593),
    eo = n(576705),
    ec = n(994500);
function ed(e) {
    switch (e.type) {
        case ei.rD.TEXT_CHANNEL:
        case ei.rD.VOICE_CHANNEL:
        case ei.rD.GROUP_DM:
        case ei.rD.DM:
        case ei.rD.USER:
        case ei.rD.GUILD:
            return !0;
        case ei.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case ei.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var ef = n(254838),
    eh = n(778712),
    eg = n(97808),
    em = n(476921);
function ep(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: em.wx,
        role: "presentation",
        children: (0, l.jsx)(k.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: t }),
    });
}
function ex(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case ei.rD.TEXT_CHANNEL:
                        case ei.rD.VOICE_CHANNEL:
                        case ei.rD.GROUP_DM:
                        case ei.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([U.A], () => (null != t ? U.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([V.default], () => (t?.isDM() === !0 ? V.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, P.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, T.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? Y.intl.string(Y.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, G.gU)(t, n),
                    s = (0, z.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? Y.intl.string(Y.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case ei.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, eh.FT)(eh._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case ei.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case ei.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, ea.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return null;
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)(B.Ay, { tabIndex: -1, guild: a.guild, size: B.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(eg.eu, { src: a.src, size: eh._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: em.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(ea.Q7, {
        ...r,
        className: em.Ke,
        children: (0, l.jsxs)("div", {
            className: em.nM,
            children: [
                (0, l.jsx)("div", { className: em.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: em.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: em.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: em.gr }),
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
var eb = n(746080),
    ey = n(492652);
function eA(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === ei.rD.HEADER ? -1 : n++ }));
}
function eC(e) {
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
        R = (0, i.bG)([c.A], () => c.A.getChannelHistory()),
        v = (0, i.bG)([d.Ay], () => d.Ay.getChannelId()),
        N = r.useMemo(() => [...new Set([...C, ...I, ...R])], [C, I, R]),
        M = (0, i.yK)(
            [F.A, U.A, eo.A, ec.A],
            () =>
                N.filter((e) => {
                    if ((0, eb.jq)(e)) return !1;
                    let t = F.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !ec.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != U.A.getGuild(t.getGuildId()) &&
                              eo.A.can(X.xBc.VIEW_CHANNEL, t))
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
            let n = t(C),
                l = t(I),
                r = 0 === n.length || 0 === l.length ? t(R) : [];
            return [
                { section: "frequently_opened", title: Y.intl.string(Y.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: Y.intl.string(Y.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: Y.intl.string(Y.t["80lOZ1"]), channelIds: r },
            ];
        }, [M, E, v, C, I, R]),
        D = "" !== u.trim(),
        j = r.useMemo(
            () =>
                D
                    ? eA("search", A.filter(ed))
                    : w.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, es.A)(e) ?? []);
                          return r.length > 0 ? eA(t, [(0, ei.jF)(n), ...r]) : [];
                      }),
            [D, A, w],
        ),
        S = D ? Math.min(p, j.length - 1) : h;
    function T(e) {
        (f(e), m(-1), x(0), (0, o.$P)(e), s.current?.focus());
    }
    function P(e) {
        D ? x(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, ef.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(el.l, {
        className: ey.SW,
        "aria-label": Y.intl.string(Y.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(er.I, {
                ref: s,
                query: u,
                onChange: T,
                onClear: () => T(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, eu.W)(e, {
                            query: u,
                            results: j.map((e) => e.result),
                            selectedIndex: S,
                            onSearch: T,
                            onDismiss: o.jD,
                            onSelectIndex: P,
                            onPick: () => _(j[S]),
                        }));
                },
                placeholder: Y.intl.string(Y.t["++zIVN"]),
                "aria-label": Y.intl.string(Y.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": j.length > 0,
                    "aria-activedescendant": null != j[S] ? `${n}-${S}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            j.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": Y.intl.string(Y.t.KsjOJI),
                      className: ey.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: j.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === ei.rD.HEADER) return (0, l.jsx)(ep, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === S,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  b || P(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === ei.rD.LINK
                              ? (0, l.jsx)(ea.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(ex, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: ey.p$,
                      role: "status",
                      children: (0, l.jsx)(k.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: D
                              ? Y.intl.formatToPlainString(Y.t.AqkHKJ, { query: u.trim() })
                              : Y.intl.string(Y.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var eI = n(333007),
    eE = n(717421),
    eR = n(775602);
function ev(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function eN(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function eM(e) {
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
var ew = n(266553);
function eD() {
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
        C = "popout" === p.A.useConfig({ location: "ChannelTabBar" }).newTabExperience,
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
            let [, t] = (0, eE.z)(() => ({ progress: 0, config: { duration: 150 } })),
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
                A = r.useRef(new Map()),
                C = e.map((e) => e.id).join(",");
            r.useLayoutEffect(() => {
                if (null != a.current) return;
                let e = i.current,
                    t = A.current;
                e.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                });
                let n = "" === C ? [] : C.split(","),
                    l = new Map();
                if (
                    (e.forEach((e, t) => {
                        n.includes(t) && l.set(t, e.getBoundingClientRect().left);
                    }),
                    t.size === n.length && n.every((e) => t.has(e)) && !eR.Ay.useReducedMotion)
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
                A.current = l;
            }, [C]);
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
                            ((t.style.transition = ""), ev(t, e));
                        }),
                        R.current.clear(),
                        e
                    );
                }, []),
                N = r.useCallback((e) => {
                    if (eR.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), ev(e, n));
                        for (let { node: e, to: n } of (t[0].node.getBoundingClientRect(), t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), ev(e, n));
                            let t = setTimeout(() => {
                                (R.current.delete(e), (e.style.transition = ""), eN(e));
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
                        e.forEach((e, t) => ev(t, e)));
                }, [v]),
                w = r.useCallback(() => {
                    ((E.current = !1), v());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(eN), N(e));
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
                    let R = eR.Ay.useReducedMotion,
                        v = [],
                        N = 1 / 0,
                        M = n.find((t) => t.id === e)?.pinned === !0,
                        w = 1 / 0,
                        D = -1 / 0;
                    (C.forEach((t) => {
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
                    let S = Number.isFinite(w) ? w : j,
                        T = Number.isFinite(D) ? D : j + f.current;
                    ((m.current = Math.min(S, j)),
                        (p.current = Math.max(T - f.current, j)),
                        (x.current = n.findIndex((t) => t.id === e)),
                        (b.current = j),
                        (a.current = e),
                        (g.style.zIndex = "1"),
                        (g.style.boxShadow = "var(--shadow-high)"));
                }, []),
                S = r.useCallback((e, t) => {
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
                T = r.useCallback(async () => {
                    let e = a.current;
                    if (null == e) return;
                    let l = i.current.get(e),
                        r = null != l ? parseFloat(l.style.left) : 0 / 0,
                        u = b.current,
                        o = k.current.filter((t) => t.id !== e).map((e) => e.id),
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
                                b = () => (0, K.Aq)(e, x);
                            (t ? (0, eI.flushSync)(b) : b(),
                                i.current.forEach(eM),
                                null != s.current && eM(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                k.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (A.current = y));
                        };
                    (null == l ||
                        !Number.isFinite(r) ||
                        eR.Ay.useReducedMotion ||
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
                handleDragMove: S,
                handleDragEnd: T,
                handleCloseStart: D,
            };
        })(e),
        [k, j] = r.useState(() => new Map()),
        [S, T] = r.useState(e);
    if (S !== e) {
        let t = S.filter((t) => !e.some((e) => e.id === t.id));
        (t.length > 0 &&
            j((e) => {
                let n = new Map(e);
                return (t.forEach((e) => n.set(e.id, { tab: e, index: S.indexOf(e) })), n);
            }),
            T(e));
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
    let G = x ? Y.intl.formatToPlainString(Y.t["I8l3Z+"], { count: b }) : void 0,
        L = e.length > 1,
        z = [...e];
    return (
        k.forEach((e) => {
            let { tab: t, index: n } = e;
            return z.splice(Math.min(n, z.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: E,
            className: ew.$,
            role: "group",
            "aria-label": Y.intl.string(Y.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                z.map((e) =>
                    (0, l.jsx)(
                        en,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: L,
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
                    className: ew.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: v,
                        shouldShow: A,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(eC, { returnFocusRef: I }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: I,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != G,
                                selected: A,
                                "aria-expanded": C ? A : void 0,
                                "aria-haspopup": C ? "dialog" : void 0,
                                tooltip: G ?? Y.intl.string(Y.t.GR7NIF),
                                tooltipKeyboardShortcut: null == G ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
