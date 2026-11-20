(n.r(t), n.d(t, { default: () => eT }));
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
    v = n(27232),
    N = n(183623),
    R = n(983851),
    M = n(329921),
    w = n(866665),
    D = n(939249),
    k = n(789645),
    j = n(366605),
    S = n(834730),
    T = n(812993),
    P = n(442433),
    _ = n(571694),
    G = n(47167),
    L = n(475889),
    z = n(713654),
    B = n(693879),
    O = n(5180),
    F = n(682163),
    U = n(365571),
    $ = n(616356),
    V = n(470710),
    H = n(734057),
    K = n(71393),
    X = n(218461),
    Y = n(543465),
    q = n(287809),
    Q = n(114129);
(n(897898), n(712960));
var W = n(652215),
    Z = n(792996),
    J = n(133281);
let ee = {
    [W.BVt.FRIENDS]: A.FriendsIcon,
    [W.BVt.COLLECTIBLES_SHOP]: I.ShopIcon,
    [W.BVt.QUEST_HOME]: C.QuestsIcon,
    [W.BVt.APPLICATION_STORE]: E.NitroWheelIcon,
};
function et() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let en = new Map(),
    el = new Set(),
    er = !1;
function ei(e) {
    let { channel: t } = e,
        n = (0, L.H)(t);
    return null == n
        ? null
        : (0, l.jsx)("span", {
              className: J.XE,
              children: (0, l.jsx)(B.z, { textColor: "text-feedback-positive", entry: { start: n } }),
          });
}
let es = r.memo(function (e) {
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
            () => (er || ((er = !0), g.A.getTabs().forEach((e) => el.add(e.id))), !el.has(t.id) && !et()),
        );
    (r.useEffect(() => {
        el.add(t.id);
    }, [t.id]),
        r.useEffect(() => {
            if (!x) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x]));
    let I = (0, i.bG)([H.A], () => ("channel" === t.kind ? H.A.getChannel(t.channelId) : null), [t]),
        C = (0, i.bG)([K.A], () => ("channel" === t.kind ? K.A.getGuild(t.guildId) : null), [t]),
        E = (0, i.bG)([q.default], () => (null != I && I.isDM() ? q.default.getUser(I.getRecipientId()) : null), [I]),
        L = (0, G.Ay)(I),
        B = "channel" === t.kind ? t.channelId : null;
    r.useEffect(() => {
        null != B && null != L && en.set(B, L);
    }, [B, L]);
    let W = "route" === t.kind ? t.routeLabel : (L ?? en.get(t.channelId) ?? Z.intl.string(Z.t.zLZPmk)),
        es = r.useCallback(() => {
            (0, Q.ZD)(t.id, "tab_click");
        }, [t.id]),
        ea = r.useCallback(
            (e) => {
                !u && a && (0, Q.f5)(t.id, e);
            },
            [u, a, t.id],
        );
    r.useEffect(() => {
        if (!u) return;
        if (et()) return void p(t.id);
        let e = setTimeout(() => p(t.id), 150);
        return () => clearTimeout(e);
    }, [u, p, t.id]);
    let eu = r.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), ea("middle_click"));
            },
            [ea],
        ),
        eo = r.useCallback(
            (e) => {
                (0, P.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => ea("context_menu") });
                });
            },
            [t, ea],
        ),
        [ec, ed] = r.useState(!1),
        ef = r.useCallback(
            (e, t) => {
                (ed(!0), d(e, t));
            },
            [d],
        ),
        eh = r.useCallback(() => {
            (ed(!1), m());
        }, [m]),
        {
            nodeRef: eg,
            handlePointerDown: em,
            handlePointerMove: ep,
            handlePointerUp: ex,
            handleClickCapture: eb,
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
        })({ itemId: t.id, onDragStart: ef, onDragMove: f, onDragEnd: eh }),
        ey = r.useCallback(
            (e) => {
                ((eg.current = e), c(t.id, e));
            },
            [eg, c, t.id],
        ),
        {
            mentionCount: eA,
            isLowImportanceMention: eI,
            showUnreadDot: eC,
        } = (0, i.cf)(
            [X.Ay, Y.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = X.Ay.getMentionCount(t.channelId),
                    n = Y.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: X.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && X.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        eE = (0, i.bG)(
            [$.A],
            () => "channel" === t.kind && $.A.getAllApplicationStreamsForChannel(t.channelId).length > 0,
            [t],
        ),
        ev = (0, i.bG)(
            [V.A],
            () => (o && "channel" === t.kind && V.A.isCallActive(t.channelId) ? V.A.getMessageId(t.channelId) : null),
            [o, t],
        ),
        eN = null;
    if ("route" === t.kind) {
        let e = ee[t.routePath];
        null != e && (eN = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: J.NR }));
    } else if ((0, O.ai)(t.guildId))
        eN = (0, l.jsx)(v.StarIcon, { size: "sm", color: "currentColor", className: J.NR });
    else if (null != C) eN = (0, l.jsx)(F.Ay, { guild: C, size: F.Ay.Sizes.SMOL, active: !0, className: J.$f });
    else if (null != I && (I.isDM() || I.isGroupDM())) {
        let e = null != E ? E.getAvatarURL(void 0, 18) : (0, _.Y)(I, 18);
        null != e && (eN = (0, l.jsx)("img", { className: J.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let eR = null;
    o && null != I && I.isPrivate()
        ? (eR = eE ? N.ScreenArrowIcon : R.VoiceNormalIcon)
        : "channel" === t.kind && null != C && null != I && (eR = (0, z.gU)(I, null, { stream: eE }));
    let eM = null != C ? Z.intl.formatToPlainString(Z.t.gT4jAr, { channelName: W, guildName: C.name }) : W,
        ew = null;
    return (
        (a || eC) &&
            (ew = (0, l.jsxs)(l.Fragment, {
                children: [
                    eC &&
                        (0, l.jsx)("span", {
                            className: J.o2,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(M.N, { variant: "neutral" }),
                        }),
                    a &&
                        (0, l.jsx)(w.m, {
                            position: "bottom",
                            text: Z.intl.string(Z.t.In6PEK),
                            keyboardShortcut: h.nK.binds["0"],
                            ariaHidden: !0,
                            children: (0, l.jsx)(D.D, {
                                className: J.Pu,
                                onClick: () => ea("close_button"),
                                onPointerDown: (e) => e.stopPropagation(),
                                "aria-label": Z.intl.formatToPlainString(Z.t["A/PzIa"], { channelName: W }),
                                children: (0, l.jsx)(k.XSmallIcon, { size: "sm" }),
                            }),
                        }),
                ],
            })),
        (0, l.jsxs)("div", {
            ref: ey,
            className: b()(J.Mf, { [J.yR]: s, [J.MY]: x, [J.nE]: u, [J.zL]: null != ew }),
            onPointerDown: em,
            onPointerMove: ep,
            onPointerUp: ex,
            onPointerCancel: ex,
            onClickCapture: eb,
            onContextMenu: eo,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, l.jsx)(w.m, {
                    position: "bottom",
                    text: eM,
                    delay: 500,
                    shouldShow: !ec && !u,
                    ariaHidden: null == C,
                    children: (0, l.jsx)(D.D, {
                        className: J.eg,
                        onClick: es,
                        onAuxClick: eu,
                        "aria-current": s ? "page" : void 0,
                        children: (0, l.jsxs)("span", {
                            className: J.XH,
                            children: [
                                t.pinned
                                    ? (0, l.jsx)(j.PinIcon, { size: "sm", color: "currentColor", className: J.NR })
                                    : eN,
                                null != eR &&
                                    (0, l.jsx)(eR, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: b()(J.j1, { [J.Av]: o }),
                                    }),
                                (0, l.jsx)(S.E, {
                                    variant: "body-sm/medium",
                                    color: "none",
                                    className: J.HA,
                                    children: W,
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsxs)("div", {
                    className: J.Pq,
                    children: [
                        eA > 0 &&
                            (0, l.jsx)("span", {
                                className: J.Xe,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(T.hV, {
                                    count: eA,
                                    color: eI
                                        ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                        : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                }),
                            }),
                        null != I && I.isGuildVocal() && 0 === eA && !eC && (0, l.jsx)(ei, { channel: I }),
                        null != ev && 0 === eA && !eC && (0, l.jsx)(U.A, { callMessageId: ev, className: J.XE }),
                        ew,
                    ],
                }),
            ],
        })
    );
});
var ea = n(305866),
    eu = n(683438),
    eo = n(662090),
    ec = n(280157),
    ed = n(320264),
    ef = n(319593),
    eh = n(576705),
    eg = n(994500);
function em(e) {
    switch (e.type) {
        case eo.rD.TEXT_CHANNEL:
        case eo.rD.VOICE_CHANNEL:
        case eo.rD.GROUP_DM:
        case eo.rD.DM:
        case eo.rD.USER:
        case eo.rD.GUILD:
            return !0;
        case eo.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case eo.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var ep = n(254838),
    ex = n(778712),
    eb = n(97808),
    ey = n(476921);
function eA(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: ey.wx,
        role: "presentation",
        children: (0, l.jsx)(S.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: t }),
    });
}
function eI(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case eo.rD.TEXT_CHANNEL:
                        case eo.rD.VOICE_CHANNEL:
                        case eo.rD.GROUP_DM:
                        case eo.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([K.A], () => (null != t ? K.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([q.default], () => (t?.isDM() === !0 ? q.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, G.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, _.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? Z.intl.string(Z.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, z.gU)(t, n),
                    s = (0, O.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? Z.intl.string(Z.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case eo.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, ex.FT)(ex._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case eo.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case eo.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, ed.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return null;
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)(F.Ay, { tabIndex: -1, guild: a.guild, size: F.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(eb.eu, { src: a.src, size: ex._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: ey.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(ed.Q7, {
        ...r,
        className: ey.Ke,
        children: (0, l.jsxs)("div", {
            className: ey.nM,
            children: [
                (0, l.jsx)("div", { className: ey.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: ey.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: ey.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: ey.gr }),
                                (0, l.jsx)(S.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: o,
                                }),
                            ],
                        }),
                        null != c &&
                            (0, l.jsx)(S.E, {
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
var eC = n(746080),
    eE = n(492652);
function ev(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === eo.rD.HEADER ? -1 : n++ }));
}
function eN(e) {
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
        v = (0, i.bG)([c.A], () => c.A.getChannelHistory()),
        N = (0, i.bG)([d.Ay], () => d.Ay.getChannelId()),
        R = r.useMemo(() => [...new Set([...I, ...C, ...v])], [I, C, v]),
        M = (0, i.yK)(
            [H.A, K.A, eh.A, eg.A],
            () =>
                R.filter((e) => {
                    if ((0, eC.jq)(e)) return !1;
                    let t = H.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !eg.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != K.A.getGuild(t.getGuildId()) &&
                              eh.A.can(W.xBc.VIEW_CHANNEL, t))
                    );
                }),
            [R],
        ),
        w = r.useMemo(() => {
            let e = new Set(M);
            for (let t of E) e.delete(t);
            function t(t) {
                let n = t.filter((t) => e.has(t)).slice(0, 3);
                for (let t of n) e.delete(t);
                return n;
            }
            null != N && e.delete(N);
            let n = t(I),
                l = t(C),
                r = 0 === n.length || 0 === l.length ? t(v) : [];
            return [
                { section: "frequently_opened", title: Z.intl.string(Z.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: Z.intl.string(Z.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: Z.intl.string(Z.t["80lOZ1"]), channelIds: r },
            ];
        }, [M, E, N, I, C, v]),
        D = "" !== u.trim(),
        k = r.useMemo(
            () =>
                D
                    ? ev("search", A.filter(em))
                    : w.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, ec.A)(e) ?? []);
                          return r.length > 0 ? ev(t, [(0, eo.jF)(n), ...r]) : [];
                      }),
            [D, A, w],
        ),
        j = D ? Math.min(p, k.length - 1) : h;
    function T(e) {
        (f(e), m(-1), x(0), (0, o.$P)(e), s.current?.focus());
    }
    function P(e) {
        D ? x(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, ep.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(ea.l, {
        className: eE.SW,
        "aria-label": Z.intl.string(Z.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(eu.I, {
                ref: s,
                query: u,
                onChange: T,
                onClear: () => T(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, ef.W)(e, {
                            query: u,
                            results: k.map((e) => e.result),
                            selectedIndex: j,
                            onSearch: T,
                            onDismiss: o.jD,
                            onSelectIndex: P,
                            onPick: () => _(k[j]),
                        }));
                },
                placeholder: Z.intl.string(Z.t["++zIVN"]),
                "aria-label": Z.intl.string(Z.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": k.length > 0,
                    "aria-activedescendant": null != k[j] ? `${n}-${j}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            k.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": Z.intl.string(Z.t.KsjOJI),
                      className: eE.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: k.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === eo.rD.HEADER) return (0, l.jsx)(eA, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === j,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  b || P(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === eo.rD.LINK
                              ? (0, l.jsx)(ed.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(eI, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: eE.p$,
                      role: "status",
                      children: (0, l.jsx)(S.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: D
                              ? Z.intl.formatToPlainString(Z.t.AqkHKJ, { query: u.trim() })
                              : Z.intl.string(Z.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var eR = n(333007),
    eM = n(717421),
    ew = n(775602);
function eD(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function ek(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function ej(e) {
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
var eS = n(266553);
function eT() {
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
            registerTabNode: v,
            newTabButtonRef: N,
            handleDragStart: R,
            handleDragMove: M,
            handleDragEnd: w,
            handleCloseStart: D,
        } = (function (e) {
            let [, t] = (0, eM.z)(() => ({ progress: 0, config: { duration: 150 } })),
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
                    t.size === n.length && n.every((e) => t.has(e)) && !ew.Ay.useReducedMotion)
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
                v = r.useRef(new Map()),
                N = r.useCallback(() => {
                    let e = new Map();
                    return (
                        v.current.forEach((t, n) => {
                            (clearTimeout(t), e.set(n, n.getBoundingClientRect().width));
                        }),
                        e.forEach((e, t) => {
                            ((t.style.transition = ""), eD(t, e));
                        }),
                        v.current.clear(),
                        e
                    );
                }, []),
                R = r.useCallback((e) => {
                    if (ew.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), eD(e, n));
                        for (let { node: e, to: n } of (t[0].node.getBoundingClientRect(), t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), eD(e, n));
                            let t = setTimeout(() => {
                                (v.current.delete(e), (e.style.transition = ""), ek(e));
                            }, 150);
                            v.current.set(e, t);
                        }
                    }
                }, []);
            r.useEffect(() => {
                let e = v.current;
                return () => e.forEach((e) => clearTimeout(e));
            }, []);
            let M = r.useCallback(() => {
                    ((E.current = !0), N());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => eD(t, e)));
                }, [N]),
                w = r.useCallback(() => {
                    ((E.current = !1), N());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(ek), R(e));
                }, [N, R]);
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
                    r !== C.current && ((C.current = r), r || w());
                }
                return (window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e));
            }, [w]);
            let D = r.useCallback(() => {
                    let e = l.current,
                        t = null != e && e.matches(":hover");
                    ((C.current = t), t && M());
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
                    let v = ew.Ay.useReducedMotion,
                        N = [],
                        R = 1 / 0,
                        M = n.find((t) => t.id === e)?.pinned === !0,
                        w = 1 / 0,
                        D = -1 / 0;
                    (I.forEach((t) => {
                        let { id: l, node: r } = t,
                            i = C.get(r);
                        if (null == i) return;
                        let s = i.left - y.left;
                        if (
                            ((R = Math.min(R, s)),
                            n.find((e) => e.id === l)?.pinned === M &&
                                ((w = Math.min(w, s)), (D = Math.max(D, s + i.width))),
                            l === e)
                        ) {
                            f.current = i.width;
                            return;
                        }
                        (v || (r.style.transition = "left 150ms ease-out"),
                            N.push({ node: r, size: i.width, center: s + i.width / 2 }));
                    }),
                        (c.current = N),
                        (d.current = Number.isFinite(R) ? R : 0),
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
                                b = () => (0, Q.Aq)(e, x);
                            (t ? (0, eR.flushSync)(b) : b(),
                                i.current.forEach(ej),
                                null != s.current && ej(s.current),
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
                        ew.Ay.useReducedMotion ||
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
    let G = x ? Z.intl.formatToPlainString(Z.t["I8l3Z+"], { count: b }) : void 0,
        L = e.length > 1,
        z = [...e];
    return (
        k.forEach((e) => {
            let { tab: t, index: n } = e;
            return z.splice(Math.min(n, z.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: E,
            className: eS.$,
            role: "group",
            "aria-label": Z.intl.string(Z.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                z.map((e) =>
                    (0, l.jsx)(
                        es,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: L,
                            isExiting: k.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === y,
                            registerTabNode: v,
                            onDragStart: R,
                            onDragMove: M,
                            onDragEnd: w,
                            onExited: _,
                        },
                        e.id,
                    ),
                ),
                (0, l.jsx)("div", {
                    ref: N,
                    className: eS.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: N,
                        shouldShow: A,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(eN, { returnFocusRef: C }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: C,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != G,
                                selected: A,
                                "aria-expanded": I ? A : void 0,
                                "aria-haspopup": I ? "dialog" : void 0,
                                tooltip: G ?? Z.intl.string(Z.t.GR7NIF),
                                tooltipKeyboardShortcut: null == G ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
