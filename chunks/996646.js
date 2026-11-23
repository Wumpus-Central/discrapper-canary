(n.r(t), n.d(t, { default: () => eG }));
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
    I = n(34188),
    C = n(577473),
    E = n(403581),
    N = n(27232),
    v = n(183623),
    R = n(983851),
    M = n(264701),
    j = n(329921),
    w = n(866665),
    D = n(939249),
    k = n(365199),
    S = n(789645),
    T = n(366605),
    P = n(834730),
    _ = n(812993),
    G = n(442433),
    L = n(571694),
    z = n(47167),
    B = n(475889),
    U = n(713654),
    O = n(693879),
    F = n(5180),
    $ = n(682163),
    H = n(365571),
    V = n(616356),
    K = n(470710),
    X = n(734057),
    Y = n(71393),
    q = n(218461),
    Q = n(994500),
    W = n(741961),
    Z = n(543465),
    J = n(287809),
    ee = n(114129);
(n(897898), n(712960));
var et = n(652215),
    en = n(792996),
    el = n(133281);
let er = {
    [et.BVt.FRIENDS]: A.FriendsIcon,
    [et.BVt.COLLECTIBLES_SHOP]: I.ShopIcon,
    [et.BVt.QUEST_HOME]: C.QuestsIcon,
    [et.BVt.APPLICATION_STORE]: E.NitroWheelIcon,
};
function ei() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let es = new Map(),
    ea = new Set(),
    eu = !1;
function eo(e) {
    let { channel: t } = e,
        n = (0, B.H)(t);
    return null == n
        ? null
        : (0, l.jsx)("span", {
              className: el.XE,
              children: (0, l.jsx)(O.z, { textColor: "text-feedback-positive", entry: { start: n } }),
          });
}
let ec = r.memo(function (e) {
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
        [x, A] = r.useState(
            () => (eu || ((eu = !0), g.A.getTabs().forEach((e) => ea.add(e.id))), !ea.has(t.id) && !ei()),
        );
    (r.useEffect(() => {
        ea.add(t.id);
    }, [t.id]),
        r.useEffect(() => {
            if (!x) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x]));
    let I = (0, i.bG)([X.A], () => ("channel" === t.kind ? X.A.getChannel(t.channelId) : null), [t]),
        C = (0, i.bG)([Y.A], () => ("channel" === t.kind ? Y.A.getGuild(t.guildId) : null), [t]),
        E = (0, i.bG)([J.default], () => (null != I && I.isDM() ? J.default.getUser(I.getRecipientId()) : null), [I]),
        B = (0, z.Ay)(I),
        O = "channel" === t.kind ? t.channelId : null;
    r.useEffect(() => {
        null != O && null != B && es.set(O, B);
    }, [O, B]);
    let et = "route" === t.kind ? t.routeLabel : (B ?? es.get(t.channelId) ?? en.intl.string(en.t.zLZPmk)),
        ec = r.useCallback(() => {
            (0, ee.ZD)(t.id, "tab_click");
        }, [t.id]),
        ed = r.useCallback(
            (e) => {
                !u && a && (0, ee.f5)(t.id, e);
            },
            [u, a, t.id],
        );
    r.useEffect(() => {
        if (!u) return;
        if (ei()) return void p(t.id);
        let e = setTimeout(() => p(t.id), 150);
        return () => clearTimeout(e);
    }, [u, p, t.id]);
    let ef = r.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), ed("middle_click"));
            },
            [ed],
        ),
        eh = r.useCallback(
            (e) => {
                (0, G.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => ed("context_menu") });
                });
            },
            [t, ed],
        ),
        [eg, em] = r.useState(!1),
        ep = r.useCallback(
            (e, t) => {
                (em(!0), d(e, t));
            },
            [d],
        ),
        ex = r.useCallback(() => {
            (em(!1), m());
        }, [m]),
        {
            nodeRef: eb,
            handlePointerDown: ey,
            handlePointerMove: eA,
            handlePointerUp: eI,
            handleClickCapture: eC,
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
        })({ itemId: t.id, onDragStart: ep, onDragMove: f, onDragEnd: ex }),
        eE = r.useCallback(
            (e) => {
                ((eb.current = e), c(t.id, e));
            },
            [eb, c, t.id],
        ),
        {
            mentionCount: eN,
            isLowImportanceMention: ev,
            showUnreadDot: eR,
        } = (0, i.cf)(
            [q.Ay, Z.Ay],
            () => {
                if ("channel" !== t.kind || s)
                    return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = q.Ay.getMentionCount(t.channelId),
                    n = Z.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: q.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && q.Ay.hasUnread(t.channelId),
                };
            },
            [t, s],
        ),
        eM =
            (0, i.bG)(
                [W.A, J.default, Q.A],
                () => {
                    if ("channel" !== t.kind || s) return !1;
                    let e = J.default.getCurrentUser()?.id;
                    for (let n in W.A.getTypingUsers(t.channelId)) {
                        let t = J.default.getUser(n);
                        if (null != t && t.id !== e && !Q.A.isBlockedOrIgnored(t.id)) return !0;
                    }
                    return !1;
                },
                [t, s],
            ) && 0 === eN,
        ej = eR && !eM,
        ew = (0, i.bG)(
            [V.A],
            () => "channel" === t.kind && V.A.getAllApplicationStreamsForChannel(t.channelId).length > 0,
            [t],
        ),
        eD = (0, i.bG)(
            [K.A],
            () => (o && "channel" === t.kind && K.A.isCallActive(t.channelId) ? K.A.getMessageId(t.channelId) : null),
            [o, t],
        ),
        ek = null;
    if ("route" === t.kind) {
        let e = er[t.routePath];
        null != e && (ek = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: el.NR }));
    } else if ((0, F.ai)(t.guildId))
        ek = (0, l.jsx)(N.StarIcon, { size: "sm", color: "currentColor", className: el.NR });
    else if (null != C) ek = (0, l.jsx)($.Ay, { guild: C, size: $.Ay.Sizes.SMOL, active: !0, className: el.$f });
    else if (null != I && (I.isDM() || I.isGroupDM())) {
        let e = null != E ? E.getAvatarURL(void 0, 18) : (0, L.Y)(I, 18);
        null != e && (ek = (0, l.jsx)("img", { className: el.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let eS = null;
    o && null != I && I.isPrivate()
        ? (eS = ew ? v.ScreenArrowIcon : R.VoiceNormalIcon)
        : "channel" === t.kind && null != C && null != I && (eS = (0, U.gU)(I, null, { stream: ew }));
    let eT = null != C ? en.intl.formatToPlainString(en.t.gT4jAr, { channelName: et, guildName: C.name }) : et,
        eP = null;
    return (
        (a || t.pinned || eM || ej) &&
            (eP = (0, l.jsxs)(l.Fragment, {
                children: [
                    eM &&
                        (0, l.jsx)("span", {
                            className: el.RL,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(M.C, { location: "ChannelTabItem", dotRadius: 2, themed: !0 }),
                        }),
                    ej &&
                        (0, l.jsx)("span", {
                            className: el.o2,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(j.N, { variant: "neutral", size: "sm" }),
                        }),
                    t.pinned
                        ? (0, l.jsx)(w.m, {
                              position: "bottom",
                              text: en.intl.string(en.t.dd5Eyn),
                              ariaHidden: !0,
                              children: (0, l.jsx)(D.D, {
                                  className: el.Pu,
                                  onClick: eh,
                                  onPointerDown: (e) => e.stopPropagation(),
                                  "aria-label": en.intl.formatToPlainString(en.t.vhrMct, { channelName: et }),
                                  "aria-haspopup": "menu",
                                  children: (0, l.jsx)(k.MoreHorizontalIcon, { size: "sm" }),
                              }),
                          })
                        : a &&
                          (0, l.jsx)(w.m, {
                              position: "bottom",
                              text: en.intl.string(en.t.In6PEK),
                              keyboardShortcut: h.nK.binds["0"],
                              ariaHidden: !0,
                              children: (0, l.jsx)(D.D, {
                                  className: el.Pu,
                                  onClick: () => ed("close_button"),
                                  onPointerDown: (e) => e.stopPropagation(),
                                  "aria-label": en.intl.formatToPlainString(en.t["A/PzIa"], { channelName: et }),
                                  children: (0, l.jsx)(S.XSmallIcon, { size: "sm" }),
                              }),
                          }),
                ],
            })),
        (0, l.jsxs)("div", {
            ref: eE,
            className: b()(el.Mf, {
                [el.yR]: s,
                [el.MY]: x,
                [el.nE]: u,
                [el.y7]: t.pinned,
                [el.Z5]: !s && (eN > 0 || eR),
                [el.zL]: null != eP,
            }),
            onPointerDown: ey,
            onPointerMove: eA,
            onPointerUp: eI,
            onPointerCancel: eI,
            onClickCapture: eC,
            onContextMenu: eh,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, l.jsx)(w.m, {
                    position: "bottom",
                    text: eT,
                    delay: 500,
                    shouldShow: !eg && !u,
                    ariaHidden: null == C,
                    children: (0, l.jsx)(D.D, {
                        className: el.eg,
                        onClick: ec,
                        onAuxClick: ef,
                        "aria-current": s ? "page" : void 0,
                        children: (0, l.jsxs)("span", {
                            className: el.XH,
                            children: [
                                t.pinned &&
                                    (0, l.jsx)(T.PinIcon, { size: "sm", color: "currentColor", className: el.Ne }),
                                (0, l.jsxs)("span", {
                                    className: el.ez,
                                    children: [
                                        !t.pinned && ek,
                                        null != eS &&
                                            (0, l.jsx)(eS, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: b()(el.j1, { [el.Av]: o }),
                                            }),
                                        (0, l.jsx)(P.E, {
                                            variant: "body-sm/medium",
                                            color: "none",
                                            className: el.HA,
                                            children: et,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsxs)("div", {
                    className: el.Pq,
                    children: [
                        eN > 0 &&
                            (0, l.jsx)("span", {
                                className: el.Xe,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(_.hV, {
                                    count: eN,
                                    color: ev
                                        ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                        : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                }),
                            }),
                        o && null != I && I.isGuildVocal() && 0 === eN && !eM && !eR && (0, l.jsx)(eo, { channel: I }),
                        null != eD &&
                            0 === eN &&
                            !eM &&
                            !eR &&
                            (0, l.jsx)(H.A, { callMessageId: eD, className: el.XE }),
                        eP,
                    ],
                }),
            ],
        })
    );
});
var ed = n(305866),
    ef = n(683438),
    eh = n(662090),
    eg = n(280157),
    em = n(320264),
    ep = n(319593),
    ex = n(576705);
function eb(e) {
    switch (e.type) {
        case eh.rD.TEXT_CHANNEL:
        case eh.rD.VOICE_CHANNEL:
        case eh.rD.GROUP_DM:
        case eh.rD.DM:
        case eh.rD.USER:
        case eh.rD.GUILD:
            return !0;
        case eh.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case eh.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var ey = n(254838),
    eA = n(778712),
    eI = n(97808),
    eC = n(476921);
function eE(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: eC.wx,
        role: "presentation",
        children: (0, l.jsx)(P.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: t }),
    });
}
function eN(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case eh.rD.TEXT_CHANNEL:
                        case eh.rD.VOICE_CHANNEL:
                        case eh.rD.GROUP_DM:
                        case eh.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([Y.A], () => (null != t ? Y.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([J.default], () => (t?.isDM() === !0 ? J.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, z.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, L.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? en.intl.string(en.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, U.gU)(t, n),
                    s = (0, F.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? en.intl.string(en.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case eh.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, eA.FT)(eA._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case eh.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case eh.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, em.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return null;
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)($.Ay, { tabIndex: -1, guild: a.guild, size: $.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(eI.eu, { src: a.src, size: eA._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: eC.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(em.Q7, {
        ...r,
        className: eC.Ke,
        children: (0, l.jsxs)("div", {
            className: eC.nM,
            children: [
                (0, l.jsx)("div", { className: eC.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: eC.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eC.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: eC.gr }),
                                (0, l.jsx)(P.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: o,
                                }),
                            ],
                        }),
                        null != c &&
                            (0, l.jsx)(P.E, {
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
var ev = n(746080),
    eR = n(492652);
function eM(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === eh.rD.HEADER ? -1 : n++ }));
}
function ej(e) {
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
        I = (0, i.bG)([g.A], () => g.A.getFrequentlyOpenedChannelIds()),
        C = (0, i.yK)([g.A], () =>
            g.A.getRecentlyClosed().map((e) => {
                let { channelId: t } = e;
                return t;
            }),
        ),
        E = (0, i.yK)([g.A], () => g.A.getTabs().flatMap((e) => ("channel" === e.kind ? [e.channelId] : []))),
        N = (0, i.bG)([c.A], () => c.A.getChannelHistory()),
        v = (0, i.bG)([d.Ay], () => d.Ay.getChannelId()),
        R = r.useMemo(() => [...new Set([...I, ...C, ...N])], [I, C, N]),
        M = (0, i.yK)(
            [X.A, Y.A, ex.A, Q.A],
            () =>
                R.filter((e) => {
                    if ((0, ev.jq)(e)) return !1;
                    let t = X.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !Q.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != Y.A.getGuild(t.getGuildId()) &&
                              ex.A.can(et.xBc.VIEW_CHANNEL, t))
                    );
                }),
            [R],
        ),
        j = r.useMemo(() => {
            let e = new Set(M);
            for (let t of E) e.delete(t);
            function t(t) {
                let n = t.filter((t) => e.has(t)).slice(0, 3);
                for (let t of n) e.delete(t);
                return n;
            }
            null != v && e.delete(v);
            let n = t(I),
                l = t(C),
                r = 0 === n.length || 0 === l.length ? t(N) : [];
            return [
                { section: "frequently_opened", title: en.intl.string(en.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: en.intl.string(en.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: en.intl.string(en.t["80lOZ1"]), channelIds: r },
            ];
        }, [M, E, v, I, C, N]),
        w = "" !== u.trim(),
        D = r.useMemo(
            () =>
                w
                    ? eM("search", A.filter(eb))
                    : j.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, eg.A)(e) ?? []);
                          return r.length > 0 ? eM(t, [(0, eh.jF)(n), ...r]) : [];
                      }),
            [w, A, j],
        ),
        k = w ? Math.min(p, D.length - 1) : h;
    function S(e) {
        (f(e), m(-1), x(0), (0, o.$P)(e), s.current?.focus());
    }
    function T(e) {
        w ? x(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, ey.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(ed.l, {
        className: eR.SW,
        "aria-label": en.intl.string(en.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(ef.I, {
                ref: s,
                query: u,
                onChange: S,
                onClear: () => S(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, ep.W)(e, {
                            query: u,
                            results: D.map((e) => e.result),
                            selectedIndex: k,
                            onSearch: S,
                            onDismiss: o.jD,
                            onSelectIndex: T,
                            onPick: () => _(D[k]),
                        }));
                },
                placeholder: en.intl.string(en.t["++zIVN"]),
                "aria-label": en.intl.string(en.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": D.length > 0,
                    "aria-activedescendant": null != D[k] ? `${n}-${k}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            D.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": en.intl.string(en.t.KsjOJI),
                      className: eR.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: D.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === eh.rD.HEADER) return (0, l.jsx)(eE, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === k,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  b || T(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === eh.rD.LINK
                              ? (0, l.jsx)(em.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(eN, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: eR.p$,
                      role: "status",
                      children: (0, l.jsx)(P.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: w
                              ? en.intl.formatToPlainString(en.t.AqkHKJ, { query: u.trim() })
                              : en.intl.string(en.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var ew = n(333007),
    eD = n(717421),
    ek = n(775602);
function eS(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function eT(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function eP(e) {
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
var e_ = n(266553);
function eG() {
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
        I = "popout" === p.A.useConfig({ location: "ChannelTabBar" }).newTabExperience,
        C = r.useRef(null),
        {
            stripRef: E,
            registerTabNode: N,
            newTabButtonRef: v,
            handleDragStart: R,
            handleDragMove: M,
            handleDragEnd: j,
            handleCloseStart: w,
        } = (function (e) {
            let [, t] = (0, eD.z)(() => ({ progress: 0, config: { duration: 150 } })),
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
                I = e.map((e) => e.id).join(",");
            r.useLayoutEffect(() => {
                if (null != a.current) return;
                let e = i.current,
                    t = A.current;
                e.forEach((e) => {
                    ((e.style.transition = ""), (e.style.transform = ""));
                });
                let n = "" === I ? [] : I.split(","),
                    l = new Map();
                if (
                    (e.forEach((e, t) => {
                        n.includes(t) && l.set(t, e.getBoundingClientRect().left);
                    }),
                    t.size === n.length && n.every((e) => t.has(e)) && !ek.Ay.useReducedMotion)
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
            }, [I]);
            let C = r.useRef(!1),
                E = r.useRef(!1),
                N = r.useRef(new Map()),
                v = r.useCallback(() => {
                    let e = new Map();
                    return (
                        N.current.forEach((t, n) => {
                            (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                        }),
                        e.forEach((e, t) => {
                            ((t.style.transition = ""), eS(t, e));
                        }),
                        N.current.clear(),
                        e
                    );
                }, []),
                R = r.useCallback((e) => {
                    if (ek.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), eS(e, n));
                        for (let { node: e, to: n } of (t[0].node.getBoundingClientRect(), t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), eS(e, n));
                            let t = setTimeout(() => {
                                (N.current.delete(e), (e.style.transition = ""), eT(e));
                            }, 150);
                            N.current.set(e, t);
                        }
                    }
                }, []);
            r.useEffect(() => {
                let e = N.current;
                return () => e.forEach((e) => clearTimeout(e));
            }, []);
            let M = r.useCallback(() => {
                    ((E.current = !0), v());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => eS(t, e)));
                }, [v]),
                j = r.useCallback(() => {
                    ((E.current = !1), v());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(eT), R(e));
                }, [v, R]);
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
                    r !== C.current && ((C.current = r), r || j());
                }
                return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
            }, [j]);
            let w = r.useCallback(() => {
                    let e = l.current,
                        t = null != e && e.matches(":hover");
                    ((C.current = t), t && M());
                }, [M]),
                D = r.useRef(e);
            r.useLayoutEffect(() => {
                D.current = e;
            }, [e]);
            let k = r.useCallback((e, t) => {
                    let n = D.current,
                        r = l.current,
                        g = i.current.get(e);
                    if (null == r || null == g) return;
                    let y = r.getBoundingClientRect(),
                        A = parseFloat(getComputedStyle(r).columnGap);
                    h.current = Number.isFinite(A) ? A : 0;
                    let I = [];
                    n.forEach((e) => {
                        let t = i.current.get(e.id);
                        null != t && I.push({ id: e.id, node: t });
                    });
                    let C = new Map();
                    I.forEach((e) => {
                        let { node: t } = e;
                        return C.set(t, t.getBoundingClientRect());
                    });
                    let E = s.current;
                    (null != E && C.set(E, E.getBoundingClientRect()),
                        C.forEach((e, t) => {
                            ((t.style.position = "absolute"),
                                (t.style.boxSizing = "border-box"),
                                (t.style.left = `${e.left - y.left}px`),
                                (t.style.top = `${e.top - y.top}px`),
                                (t.style.width = `${e.width}px`),
                                (t.style.height = `${e.height}px`),
                                (t.style.margin = "0"));
                        }));
                    let N = ek.Ay.useReducedMotion,
                        v = [],
                        R = 1 / 0,
                        M = n.find((t) => t.id === e)?.pinned === !0,
                        j = 1 / 0,
                        w = -1 / 0;
                    (I.forEach((t) => {
                        let { id: l, node: r } = t,
                            i = C.get(r);
                        if (null == i) return;
                        let s = i.left - y.left;
                        if (
                            ((R = Math.min(R, s)),
                            n.find((e) => e.id === l)?.pinned === M &&
                                ((j = Math.min(j, s)), (w = Math.max(w, s + i.width))),
                            l === e)
                        ) {
                            f.current = i.width;
                            return;
                        }
                        (N || (r.style.transition = "left 150ms ease-out"),
                            v.push({ node: r, size: i.width, center: s + i.width / 2 }));
                    }),
                        (c.current = v),
                        (d.current = Number.isFinite(R) ? R : 0),
                        (u.current = t));
                    let k = parseFloat(g.style.left);
                    o.current = k;
                    let S = Number.isFinite(j) ? j : k,
                        T = Number.isFinite(w) ? w : k + f.current;
                    ((m.current = Math.min(S, k)),
                        (p.current = Math.max(T - f.current, k)),
                        (x.current = n.findIndex((t) => t.id === e)),
                        (b.current = k),
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
                    let I = h.current,
                        C = d.current,
                        E = C;
                    (r.forEach((e, t) => {
                        (t === A && ((E = C), (C += s + I)), (e.node.style.left = `${C}px`), (C += e.size + I));
                    }),
                        A >= r.length && (E = C),
                        (x.current = A),
                        (b.current = E));
                }, []),
                T = r.useCallback(async () => {
                    let e = a.current;
                    if (null == e) return;
                    let l = i.current.get(e),
                        r = null != l ? parseFloat(l.style.left) : 0 / 0,
                        u = b.current,
                        o = D.current.filter((t) => t.id !== e).map((e) => e.id),
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
                                b = () => (0, ee.Aq)(e, x);
                            (t ? (0, ew.flushSync)(b) : b(),
                                i.current.forEach(eP),
                                null != s.current && eP(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                D.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (A.current = y));
                        };
                    (null == l ||
                        !Number.isFinite(r) ||
                        ek.Ay.useReducedMotion ||
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
                handleDragStart: k,
                handleDragMove: S,
                handleDragEnd: T,
                handleCloseStart: w,
            };
        })(e),
        [D, k] = r.useState(() => new Map()),
        [S, T] = r.useState(e);
    if (S !== e) {
        let t = S.filter((t) => !e.some((e) => e.id === t.id));
        (t.length > 0 &&
            k((e) => {
                let n = new Map(e);
                return (t.forEach((e) => n.set(e.id, { tab: e, index: S.indexOf(e) })), n);
            }),
            T(e));
    }
    let P = r.useRef(0);
    r.useLayoutEffect(() => {
        (D.size > P.current && w(), (P.current = D.size));
    }, [D, w]);
    let _ = r.useCallback((e) => {
        k((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!n) return null;
    let G = x ? en.intl.formatToPlainString(en.t["I8l3Z+"], { count: b }) : void 0,
        L = e.length > 1,
        z = [...e];
    return (
        D.forEach((e) => {
            let { tab: t, index: n } = e;
            return z.splice(Math.min(n, z.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: E,
            className: e_.$,
            role: "group",
            "aria-label": en.intl.string(en.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                z.map((e) =>
                    (0, l.jsx)(
                        ec,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: L,
                            isExiting: D.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === y,
                            registerTabNode: N,
                            onDragStart: R,
                            onDragMove: M,
                            onDragEnd: j,
                            onExited: _,
                        },
                        e.id,
                    ),
                ),
                (0, l.jsx)("div", {
                    ref: v,
                    className: e_.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: v,
                        shouldShow: A,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(ej, { returnFocusRef: C }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: C,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != G,
                                selected: A,
                                "aria-expanded": I ? A : void 0,
                                "aria-haspopup": I ? "dialog" : void 0,
                                tooltip: G ?? en.intl.string(en.t.GR7NIF),
                                tooltipKeyboardShortcut: null == G ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
