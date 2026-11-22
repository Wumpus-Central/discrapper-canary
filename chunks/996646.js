(n.r(t), n.d(t, { default: () => eP }));
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
    M = n(983851),
    R = n(329921),
    w = n(866665),
    D = n(939249),
    j = n(365199),
    k = n(789645),
    S = n(366605),
    T = n(834730),
    P = n(812993),
    _ = n(442433),
    G = n(571694),
    z = n(47167),
    L = n(475889),
    B = n(713654),
    O = n(693879),
    F = n(5180),
    U = n(682163),
    $ = n(365571),
    H = n(616356),
    V = n(470710),
    K = n(734057),
    X = n(71393),
    Y = n(218461),
    q = n(543465),
    Q = n(287809),
    W = n(114129);
(n(897898), n(712960));
var Z = n(652215),
    J = n(792996),
    ee = n(133281);
let et = {
    [Z.BVt.FRIENDS]: A.FriendsIcon,
    [Z.BVt.COLLECTIBLES_SHOP]: I.ShopIcon,
    [Z.BVt.QUEST_HOME]: C.QuestsIcon,
    [Z.BVt.APPLICATION_STORE]: E.NitroWheelIcon,
};
function en() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
let el = new Map(),
    er = new Set(),
    ei = !1;
function es(e) {
    let { channel: t } = e,
        n = (0, L.H)(t);
    return null == n
        ? null
        : (0, l.jsx)("span", {
              className: ee.XE,
              children: (0, l.jsx)(O.z, { textColor: "text-feedback-positive", entry: { start: n } }),
          });
}
let ea = r.memo(function (e) {
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
            () => (ei || ((ei = !0), g.A.getTabs().forEach((e) => er.add(e.id))), !er.has(t.id) && !en()),
        );
    (r.useEffect(() => {
        er.add(t.id);
    }, [t.id]),
        r.useEffect(() => {
            if (!x) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x]));
    let I = (0, i.bG)([K.A], () => ("channel" === t.kind ? K.A.getChannel(t.channelId) : null), [t]),
        C = (0, i.bG)([X.A], () => ("channel" === t.kind ? X.A.getGuild(t.guildId) : null), [t]),
        E = (0, i.bG)([Q.default], () => (null != I && I.isDM() ? Q.default.getUser(I.getRecipientId()) : null), [I]),
        L = (0, z.Ay)(I),
        O = "channel" === t.kind ? t.channelId : null;
    r.useEffect(() => {
        null != O && null != L && el.set(O, L);
    }, [O, L]);
    let Z = "route" === t.kind ? t.routeLabel : (L ?? el.get(t.channelId) ?? J.intl.string(J.t.zLZPmk)),
        ea = r.useCallback(() => {
            (0, W.ZD)(t.id, "tab_click");
        }, [t.id]),
        eu = r.useCallback(
            (e) => {
                !u && a && (0, W.f5)(t.id, e);
            },
            [u, a, t.id],
        );
    r.useEffect(() => {
        if (!u) return;
        if (en()) return void p(t.id);
        let e = setTimeout(() => p(t.id), 150);
        return () => clearTimeout(e);
    }, [u, p, t.id]);
    let eo = r.useCallback(
            (e) => {
                1 === e.button && (e.preventDefault(), eu("middle_click"));
            },
            [eu],
        ),
        ec = r.useCallback(
            (e) => {
                (0, _.L3)(e, async () => {
                    let { default: e } = await n.e(99401).then(n.bind(n, 774448));
                    return (n) => (0, l.jsx)(e, { ...n, tab: t, onRequestClose: () => eu("context_menu") });
                });
            },
            [t, eu],
        ),
        [ed, ef] = r.useState(!1),
        eh = r.useCallback(
            (e, t) => {
                (ef(!0), d(e, t));
            },
            [d],
        ),
        eg = r.useCallback(() => {
            (ef(!1), m());
        }, [m]),
        {
            nodeRef: em,
            handlePointerDown: ep,
            handlePointerMove: ex,
            handlePointerUp: eb,
            handleClickCapture: ey,
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
        })({ itemId: t.id, onDragStart: eh, onDragMove: f, onDragEnd: eg }),
        eA = r.useCallback(
            (e) => {
                ((em.current = e), c(t.id, e));
            },
            [em, c, t.id],
        ),
        {
            mentionCount: eI,
            isLowImportanceMention: eC,
            showUnreadDot: eE,
        } = (0, i.cf)(
            [Y.Ay, q.Ay],
            () => {
                if ("channel" !== t.kind) return { mentionCount: 0, isLowImportanceMention: !1, showUnreadDot: !1 };
                let e = Y.Ay.getMentionCount(t.channelId),
                    n = q.Ay.isGuildOrCategoryOrChannelMuted(t.guildId, t.channelId);
                return {
                    mentionCount: e,
                    isLowImportanceMention: Y.Ay.getIsMentionLowImportance(t.channelId),
                    showUnreadDot: 0 === e && !n && Y.Ay.hasUnread(t.channelId),
                };
            },
            [t],
        ),
        ev = (0, i.bG)(
            [H.A],
            () => "channel" === t.kind && H.A.getAllApplicationStreamsForChannel(t.channelId).length > 0,
            [t],
        ),
        eN = (0, i.bG)(
            [V.A],
            () => (o && "channel" === t.kind && V.A.isCallActive(t.channelId) ? V.A.getMessageId(t.channelId) : null),
            [o, t],
        ),
        eM = null;
    if ("route" === t.kind) {
        let e = et[t.routePath];
        null != e && (eM = (0, l.jsx)(e, { size: "sm", color: "currentColor", className: ee.NR }));
    } else if ((0, F.ai)(t.guildId))
        eM = (0, l.jsx)(v.StarIcon, { size: "sm", color: "currentColor", className: ee.NR });
    else if (null != C) eM = (0, l.jsx)(U.Ay, { guild: C, size: U.Ay.Sizes.SMOL, active: !0, className: ee.$f });
    else if (null != I && (I.isDM() || I.isGroupDM())) {
        let e = null != E ? E.getAvatarURL(void 0, 18) : (0, G.Y)(I, 18);
        null != e && (eM = (0, l.jsx)("img", { className: ee.ro, src: e, alt: "", "aria-hidden": !0, draggable: !1 }));
    }
    let eR = null;
    o && null != I && I.isPrivate()
        ? (eR = ev ? N.ScreenArrowIcon : M.VoiceNormalIcon)
        : "channel" === t.kind && null != C && null != I && (eR = (0, B.gU)(I, null, { stream: ev }));
    let ew = null != C ? J.intl.formatToPlainString(J.t.gT4jAr, { channelName: Z, guildName: C.name }) : Z,
        eD = null;
    return (
        (a || t.pinned || eE) &&
            (eD = (0, l.jsxs)(l.Fragment, {
                children: [
                    eE &&
                        (0, l.jsx)("span", {
                            className: ee.o2,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(R.N, { variant: "neutral", size: "sm" }),
                        }),
                    t.pinned
                        ? (0, l.jsx)(w.m, {
                              position: "bottom",
                              text: J.intl.string(J.t.dd5Eyn),
                              ariaHidden: !0,
                              children: (0, l.jsx)(D.D, {
                                  className: ee.Pu,
                                  onClick: ec,
                                  onPointerDown: (e) => e.stopPropagation(),
                                  "aria-label": J.intl.formatToPlainString(J.t.vhrMct, { channelName: Z }),
                                  "aria-haspopup": "menu",
                                  children: (0, l.jsx)(j.MoreHorizontalIcon, { size: "sm" }),
                              }),
                          })
                        : a &&
                          (0, l.jsx)(w.m, {
                              position: "bottom",
                              text: J.intl.string(J.t.In6PEK),
                              keyboardShortcut: h.nK.binds["0"],
                              ariaHidden: !0,
                              children: (0, l.jsx)(D.D, {
                                  className: ee.Pu,
                                  onClick: () => eu("close_button"),
                                  onPointerDown: (e) => e.stopPropagation(),
                                  "aria-label": J.intl.formatToPlainString(J.t["A/PzIa"], { channelName: Z }),
                                  children: (0, l.jsx)(k.XSmallIcon, { size: "sm" }),
                              }),
                          }),
                ],
            })),
        (0, l.jsxs)("div", {
            ref: eA,
            className: b()(ee.Mf, {
                [ee.yR]: s,
                [ee.MY]: x,
                [ee.nE]: u,
                [ee.y7]: t.pinned,
                [ee.Z5]: !s && (eI > 0 || eE),
                [ee.zL]: null != eD,
            }),
            onPointerDown: ep,
            onPointerMove: ex,
            onPointerUp: eb,
            onPointerCancel: eb,
            onClickCapture: ey,
            onContextMenu: ec,
            onDoubleClick: (e) => e.stopPropagation(),
            children: [
                (0, l.jsx)(w.m, {
                    position: "bottom",
                    text: ew,
                    delay: 500,
                    shouldShow: !ed && !u,
                    ariaHidden: null == C,
                    children: (0, l.jsx)(D.D, {
                        className: ee.eg,
                        onClick: ea,
                        onAuxClick: eo,
                        "aria-current": s ? "page" : void 0,
                        children: (0, l.jsxs)("span", {
                            className: ee.XH,
                            children: [
                                t.pinned &&
                                    (0, l.jsx)(S.PinIcon, { size: "sm", color: "currentColor", className: ee.Ne }),
                                (0, l.jsxs)("span", {
                                    className: ee.ez,
                                    children: [
                                        !t.pinned && eM,
                                        null != eR &&
                                            (0, l.jsx)(eR, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: b()(ee.j1, { [ee.Av]: o }),
                                            }),
                                        (0, l.jsx)(T.E, {
                                            variant: "body-sm/medium",
                                            color: "none",
                                            className: ee.HA,
                                            children: Z,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsxs)("div", {
                    className: ee.Pq,
                    children: [
                        eI > 0 &&
                            (0, l.jsx)("span", {
                                className: ee.Xe,
                                "aria-hidden": !0,
                                children: (0, l.jsx)(P.hV, {
                                    count: eI,
                                    color: eC
                                        ? y.A.colors.BACKGROUND_MOD_STRONG.css
                                        : y.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                }),
                            }),
                        o && null != I && I.isGuildVocal() && 0 === eI && !eE && (0, l.jsx)(es, { channel: I }),
                        null != eN && 0 === eI && !eE && (0, l.jsx)($.A, { callMessageId: eN, className: ee.XE }),
                        eD,
                    ],
                }),
            ],
        })
    );
});
var eu = n(305866),
    eo = n(683438),
    ec = n(662090),
    ed = n(280157),
    ef = n(320264),
    eh = n(319593),
    eg = n(576705),
    em = n(994500);
function ep(e) {
    switch (e.type) {
        case ec.rD.TEXT_CHANNEL:
        case ec.rD.VOICE_CHANNEL:
        case ec.rD.GROUP_DM:
        case ec.rD.DM:
        case ec.rD.USER:
        case ec.rD.GUILD:
            return !0;
        case ec.rD.IN_APP_NAVIGATION:
            return !o.Pc.has(e.record.type);
        case ec.rD.LINK:
            return null == e.record.inviteCode;
        default:
            return !1;
    }
}
var ex = n(254838),
    eb = n(778712),
    ey = n(97808),
    eA = n(476921);
function eI(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", {
        className: eA.wx,
        role: "presentation",
        children: (0, l.jsx)(T.E, { variant: "body-sm/medium", color: "text-muted", lineClamp: 1, children: t }),
    });
}
function eC(e) {
    let t,
        { result: n, ...r } = e,
        s = (function (e) {
            let t = (function (e) {
                    switch (e.type) {
                        case ec.rD.TEXT_CHANNEL:
                        case ec.rD.VOICE_CHANNEL:
                        case ec.rD.GROUP_DM:
                        case ec.rD.DM:
                            return e.record;
                        default:
                            return null;
                    }
                })(e),
                n = (0, i.bG)([X.A], () => (null != t ? X.A.getGuild(t.guild_id) : null), [t]),
                l = (0, i.bG)([Q.default], () => (t?.isDM() === !0 ? Q.default.getUser(t.getRecipientId()) : null), [
                    t,
                ]),
                r = (0, z.Ay)(t);
            if (null != t) {
                let e = r ?? "";
                if (t.isPrivate())
                    return {
                        visual: { type: "image", src: (0, G.Y)(t) },
                        titleIcon: null,
                        title: e,
                        subtitle: t.isGroupDM() ? J.intl.string(J.t["e5y+gm"]) : (l?.username ?? null),
                    };
                let i = (0, B.gU)(t, n),
                    s = (0, F.ai)(t.guild_id);
                return {
                    visual: null == n || s ? { type: "icon", Icon: i } : { type: "guild", guild: n },
                    titleIcon: i,
                    title: e,
                    subtitle: s ? J.intl.string(J.t.wMWyci) : (n?.name ?? null),
                };
            }
            switch (e.type) {
                case ec.rD.USER: {
                    let t = e.record;
                    return {
                        visual: { type: "image", src: t.getAvatarURL(void 0, (0, eb.FT)(eb._3.SIZE_32)) },
                        titleIcon: null,
                        title: t.globalName ?? t.username,
                        subtitle: t.username,
                    };
                }
                case ec.rD.GUILD: {
                    let t = e.record;
                    return { visual: { type: "guild", guild: t }, titleIcon: null, title: t.name, subtitle: null };
                }
                case ec.rD.IN_APP_NAVIGATION: {
                    let { label: t, Icon: n } = (0, ef.TT)(e.record);
                    return { visual: { type: "icon", Icon: n }, titleIcon: null, title: t, subtitle: null };
                }
                default:
                    return null;
            }
        })(n);
    if (null == s) return null;
    let { visual: a, titleIcon: u, title: o, subtitle: c } = s;
    if ("guild" === a.type) t = (0, l.jsx)(U.Ay, { tabIndex: -1, guild: a.guild, size: U.Ay.Sizes.SMALL, active: !0 });
    else if ("image" === a.type && null != a.src)
        t = (0, l.jsx)(ey.eu, { src: a.src, size: eb._3.SIZE_32, "aria-hidden": !0 });
    else {
        let e = "icon" === a.type ? a.Icon : null;
        t = (0, l.jsx)("div", {
            className: eA.aU,
            children: null != e ? (0, l.jsx)(e, { size: "sm", color: "currentColor" }) : null,
        });
    }
    return (0, l.jsx)(ef.Q7, {
        ...r,
        className: eA.Ke,
        children: (0, l.jsxs)("div", {
            className: eA.nM,
            children: [
                (0, l.jsx)("div", { className: eA.Tn, children: t }),
                (0, l.jsxs)("div", {
                    className: eA.Qq,
                    children: [
                        (0, l.jsxs)("div", {
                            className: eA.DD,
                            children: [
                                null != u && (0, l.jsx)(u, { size: "xs", color: "currentColor", className: eA.gr }),
                                (0, l.jsx)(T.E, {
                                    variant: "body-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: o,
                                }),
                            ],
                        }),
                        null != c &&
                            (0, l.jsx)(T.E, {
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
var eE = n(746080),
    ev = n(492652);
function eN(e, t) {
    let n = 0;
    return t.map((t) => ({ result: t, section: e, sectionIndex: t.type === ec.rD.HEADER ? -1 : n++ }));
}
function eM(e) {
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
        M = r.useMemo(() => [...new Set([...I, ...C, ...v])], [I, C, v]),
        R = (0, i.yK)(
            [K.A, X.A, eg.A, em.A],
            () =>
                M.filter((e) => {
                    if ((0, eE.jq)(e)) return !1;
                    let t = K.A.getChannel(e);
                    return (
                        null != t &&
                        (t.isPrivate()
                            ? !t.isDM() || !em.A.isBlocked(t.getRecipientId())
                            : !(t.isThread() && t.isArchivedThread()) &&
                              null != X.A.getGuild(t.getGuildId()) &&
                              eg.A.can(Z.xBc.VIEW_CHANNEL, t))
                    );
                }),
            [M],
        ),
        w = r.useMemo(() => {
            let e = new Set(R);
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
                { section: "frequently_opened", title: J.intl.string(J.t.EuJQg8), channelIds: n },
                { section: "recently_closed", title: J.intl.string(J.t["94yiQK"]), channelIds: l },
                { section: "previous_channels", title: J.intl.string(J.t["80lOZ1"]), channelIds: r },
            ];
        }, [R, E, N, I, C, v]),
        D = "" !== u.trim(),
        j = r.useMemo(
            () =>
                D
                    ? eN("search", A.filter(ep))
                    : w.flatMap((e) => {
                          let { section: t, title: n, channelIds: l } = e,
                              r = l.flatMap((e) => (0, ed.A)(e) ?? []);
                          return r.length > 0 ? eN(t, [(0, ec.jF)(n), ...r]) : [];
                      }),
            [D, A, w],
        ),
        k = D ? Math.min(p, j.length - 1) : h;
    function S(e) {
        (f(e), m(-1), x(0), (0, o.$P)(e), s.current?.focus());
    }
    function P(e) {
        D ? x(e) : m(e);
    }
    function _(e) {
        let { result: t, section: n, sectionIndex: l } = e;
        (0, ex.H)()
            ? ((a.current = null),
              (0, o.$U)(t, { source: "new_tab_popout", newTabPickerSelection: { section: n, resultIndex: l } }))
            : (0, o.jD)();
    }
    return (0, l.jsxs)(eu.l, {
        className: ev.SW,
        "aria-label": J.intl.string(J.t.GR7NIF),
        returnRef: a,
        onMouseMove: () => y(!1),
        children: [
            (0, l.jsx)(eo.I, {
                ref: s,
                query: u,
                onChange: S,
                onClear: () => S(""),
                onKeyDown: (e) => {
                    (y(!0),
                        (0, eh.W)(e, {
                            query: u,
                            results: j.map((e) => e.result),
                            selectedIndex: k,
                            onSearch: S,
                            onDismiss: o.jD,
                            onSelectIndex: P,
                            onPick: () => _(j[k]),
                        }));
                },
                placeholder: J.intl.string(J.t["++zIVN"]),
                "aria-label": J.intl.string(J.t["++zIVN"]),
                autoComplete: "off",
                autoFocus: !0,
                inputProps: {
                    role: "combobox",
                    "aria-controls": n,
                    "aria-expanded": j.length > 0,
                    "aria-activedescendant": null != j[k] ? `${n}-${k}` : void 0,
                    "aria-autocomplete": "list",
                    spellCheck: !1,
                },
            }),
            j.length > 0
                ? (0, l.jsx)("div", {
                      id: n,
                      role: "listbox",
                      tabIndex: -1,
                      "aria-label": J.intl.string(J.t.KsjOJI),
                      className: ev.p_,
                      onMouseDown: (e) => e.preventDefault(),
                      children: j.map(function (e, t) {
                          let { result: r } = e,
                              i = `${e.section}-${r.type}-${r.record.id}`;
                          if (r.type === ec.rD.HEADER) return (0, l.jsx)(eI, { children: r.record.text }, i);
                          let s = {
                              id: `${n}-${t}`,
                              focused: t === k,
                              onClick: () => _(e),
                              onMouseEnter: () => {
                                  b || P(t);
                              },
                              onFocus: (e) => e.scrollIntoView({ block: "nearest" }),
                          };
                          return r.type === ec.rD.LINK
                              ? (0, l.jsx)(ef.N_, { link: r.record, ...s }, i)
                              : (0, l.jsx)(eC, { result: r, ...s }, i);
                      }),
                  })
                : (0, l.jsx)("div", {
                      className: ev.p$,
                      role: "status",
                      children: (0, l.jsx)(T.E, {
                          variant: "body-sm/medium",
                          color: "text-muted",
                          children: D
                              ? J.intl.formatToPlainString(J.t.AqkHKJ, { query: u.trim() })
                              : J.intl.string(J.t["6HQ6PJ"]),
                      }),
                  }),
        ],
    });
}
n(321073);
var eR = n(333007),
    ew = n(717421),
    eD = n(775602);
function ej(e, t) {
    ((e.style.flexGrow = "0"),
        (e.style.flexShrink = "0"),
        (e.style.flexBasis = `${t}px`),
        (e.style.maxWidth = `${t}px`));
}
function ek(e) {
    ((e.style.flexGrow = ""), (e.style.flexShrink = ""), (e.style.flexBasis = ""), (e.style.maxWidth = ""));
}
function eS(e) {
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
var eT = n(266553);
function eP() {
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
            handleDragStart: M,
            handleDragMove: R,
            handleDragEnd: w,
            handleCloseStart: D,
        } = (function (e) {
            let [, t] = (0, ew.z)(() => ({ progress: 0, config: { duration: 150 } })),
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
                    t.size === n.length && n.every((e) => t.has(e)) && !eD.Ay.useReducedMotion)
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
                            ((t.style.transition = ""), ej(t, e));
                        }),
                        v.current.clear(),
                        e
                    );
                }, []),
                M = r.useCallback((e) => {
                    if (eD.Ay.useReducedMotion) return;
                    let t = [];
                    if (
                        (e.forEach((e, n) => {
                            let l = n.getBoundingClientRect().width;
                            Math.abs(l - e) > 0.5 && t.push({ node: n, from: e, to: l });
                        }),
                        0 !== t.length)
                    ) {
                        for (let { node: e, from: n } of t) ((e.style.transition = ""), ej(e, n));
                        for (let { node: e, to: n } of (t[0].node.getBoundingClientRect(), t)) {
                            ((e.style.transition = "flex-basis 150ms ease-out, max-width 150ms ease-out"), ej(e, n));
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
            let R = r.useCallback(() => {
                    ((E.current = !0), N());
                    let e = new Map();
                    (i.current.forEach((t) => {
                        "" === t.style.flexBasis && e.set(t, t.getBoundingClientRect().width);
                    }),
                        e.forEach((e, t) => ej(t, e)));
                }, [N]),
                w = r.useCallback(() => {
                    ((E.current = !1), N());
                    let e = new Map();
                    (i.current.forEach((t) => e.set(t, t.getBoundingClientRect().width)), i.current.forEach(ek), M(e));
                }, [N, M]);
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
                    ((C.current = t), t && R());
                }, [R]),
                j = r.useRef(e);
            r.useLayoutEffect(() => {
                j.current = e;
            }, [e]);
            let k = r.useCallback((e, t) => {
                    let n = j.current,
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
                    let v = eD.Ay.useReducedMotion,
                        N = [],
                        M = 1 / 0,
                        R = n.find((t) => t.id === e)?.pinned === !0,
                        w = 1 / 0,
                        D = -1 / 0;
                    (I.forEach((t) => {
                        let { id: l, node: r } = t,
                            i = C.get(r);
                        if (null == i) return;
                        let s = i.left - y.left;
                        if (
                            ((M = Math.min(M, s)),
                            n.find((e) => e.id === l)?.pinned === R &&
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
                        (d.current = Number.isFinite(M) ? M : 0),
                        (u.current = t));
                    let k = parseFloat(g.style.left);
                    o.current = k;
                    let S = Number.isFinite(w) ? w : k,
                        T = Number.isFinite(D) ? D : k + f.current;
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
                        o = j.current.filter((t) => t.id !== e).map((e) => e.id),
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
                                b = () => (0, W.Aq)(e, x);
                            (t ? (0, eR.flushSync)(b) : b(),
                                i.current.forEach(eS),
                                null != s.current && eS(s.current),
                                (a.current = null),
                                (c.current = []));
                            let y = new Map();
                            (i.current.forEach((e, t) => {
                                j.current.some((e) => e.id === t) && y.set(t, e.getBoundingClientRect().left);
                            }),
                                (A.current = y));
                        };
                    (null == l ||
                        !Number.isFinite(r) ||
                        eD.Ay.useReducedMotion ||
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
                handleCloseStart: D,
            };
        })(e),
        [j, k] = r.useState(() => new Map()),
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
        (j.size > P.current && D(), (P.current = j.size));
    }, [j, D]);
    let _ = r.useCallback((e) => {
        k((t) => {
            let n = new Map(t);
            return (n.delete(e), n);
        });
    }, []);
    if (!n) return null;
    let G = x ? J.intl.formatToPlainString(J.t["I8l3Z+"], { count: b }) : void 0,
        z = e.length > 1,
        L = [...e];
    return (
        j.forEach((e) => {
            let { tab: t, index: n } = e;
            return L.splice(Math.min(n, L.length), 0, t);
        }),
        (0, l.jsxs)("div", {
            ref: E,
            className: eT.$,
            role: "group",
            "aria-label": J.intl.string(J.t.es0PkU),
            onDoubleClick: () => f.Ay.maximize(),
            children: [
                L.map((e) =>
                    (0, l.jsx)(
                        ea,
                        {
                            tab: e,
                            isActive: e.id === t,
                            closable: z,
                            isExiting: j.has(e.id),
                            isConnectedVoiceChannel: "channel" === e.kind && e.channelId === y,
                            registerTabNode: v,
                            onDragStart: M,
                            onDragMove: R,
                            onDragEnd: w,
                            onExited: _,
                        },
                        e.id,
                    ),
                ),
                (0, l.jsx)("div", {
                    ref: N,
                    className: eT.Y,
                    onDoubleClick: (e) => e.stopPropagation(),
                    children: (0, l.jsx)(s.Y, {
                        targetElementRef: N,
                        shouldShow: A,
                        onRequestClose: o.jD,
                        position: "bottom",
                        align: "left",
                        animation: s.Y.Animation.FADE,
                        renderPopout: () => (0, l.jsx)(eM, { returnFocusRef: C }),
                        children: () =>
                            (0, l.jsx)(u.A, {
                                ref: C,
                                icon: a.PlusLargeIcon,
                                onClick: () => (0, m.k)("new_tab_button"),
                                disabled: null != G,
                                selected: A,
                                "aria-expanded": I ? A : void 0,
                                "aria-haspopup": I ? "dialog" : void 0,
                                tooltip: G ?? J.intl.string(J.t.GR7NIF),
                                tooltipKeyboardShortcut: null == G ? h.T3.binds["0"] : void 0,
                            }),
                    }),
                }),
            ],
        })
    );
}
