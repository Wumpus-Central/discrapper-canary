n.r(t), n.d(t, { default: () => lt });
var l,
    s,
    a,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    c = n.n(d),
    o = n(484030),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(251333),
    A = n(837381),
    f = n(17928),
    x = n(990078),
    p = n(289873),
    N = n(935063),
    j = n(689175),
    E = n(821609),
    S = n(825484),
    C = n(408278),
    y = n(99677),
    _ = n(933832),
    I = n(378939),
    R = n(493336),
    v = n(964486),
    M = n(475743),
    L = n(928039),
    O = n(323073),
    b = n(202803),
    D = n(81437),
    T = n(636922),
    k = n(378570),
    G = n(885386),
    U = n(734057),
    F = n(517019),
    P = n(309010),
    w = n(174459),
    H = n(625494),
    K = n(135978),
    B = n(661531),
    z = n(187322),
    X = n(939249),
    J = n(320448),
    $ = n(778712),
    V = n(97808),
    Y = n(297264),
    Z = n(812993),
    W = n(834730),
    q = n(397244),
    Q = n(714114),
    ee = n(394871),
    et = n(571694),
    en = n(47167),
    el = n(713654),
    es = n(598104),
    ea = n(548118),
    ei = n(616356),
    er = n(71393),
    ed = n(290863),
    ec = n(568548),
    eo = n(287809),
    eu = n(650583),
    eh = n(375708),
    eg = n(889329);
let em = { top: 8, bottom: 8, left: -4, right: -4 };
function eA(e) {
    let { channel: t, children: n, onClick: l, collapsed: s = !1, mentionCount: a, onToggleCollapse: r, itemId: d } = e,
        o = (0, A.rm)(d);
    return (0, i.jsx)(z.vN, {
        offset: em,
        children: (0, i.jsxs)("div", {
            className: c()(eg.ZO, { [eg.yZ]: s }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === eu.dh.ENTER || e.key === eu.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), l(e);
                    return;
                }
                null != r && ((e.key === eu.dh.ARROW_RIGHT && s) || (e.key === eu.dh.ARROW_LEFT && !s)) && r();
            },
            children: [
                (0, i.jsx)(X.D, {
                    className: eg.YT,
                    onClick: l,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ef, { channel: t }),
                }),
                (0, i.jsx)(J._, { size: "xxs" }),
                (0, i.jsx)(ex, { channel: t, onClick: l, mentionCount: a }),
                n,
            ],
        }),
    });
}
function ef(e) {
    let { channel: t } = e,
        n = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(ea.Ay, { className: eg.Kk, guild: n, size: ea.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(es.A, { channel: t, size: $._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(V.eu, { size: $._3.SIZE_32, src: (0, et.Y)(t), "aria-hidden": !0 });
}
function ex(e) {
    let { channel: t, onClick: n, mentionCount: l } = e,
        s = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id)),
        a = (0, en.Ay)(t, !1),
        r = (0, f.bG)([ec.Ay], () => ec.Ay.getIsMentionLowImportance(t.id)),
        d = (0, f.bG)([U.A], () => U.A.getChannel(t.parent_id)),
        o = (0, en.Ay)(d),
        u = (0, el.gU)(t, s);
    return (0, i.jsxs)("div", {
        className: eg.yP,
        children: [
            (0, i.jsx)(Y.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: eg.lz,
                children: (0, i.jsxs)(X.D, {
                    className: eg.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: eg.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: eg.je, children: a }),
                        null != l && l > 0
                            ? (0, i.jsx)("div", {
                                  className: eg.qS,
                                  children: (0, i.jsx)(Z.hV, {
                                      count: l,
                                      color: r
                                          ? B.A.colors.BACKGROUND_MOD_STRONG.css
                                          : B.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(W.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? eh.intl.formatToPlainString(eh.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(ep, { channel: t })
                      : (0, i.jsx)(X.D, {
                            className: c()(eg.je, eg.J5),
                            onClick: n,
                            children: null == d ? s?.name : `${s?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function ep(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: s,
            applicationStream: a,
        } = (0, f.cf)([eo.default, ed.A, ei.A], () => {
            let e = eo.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ed.A.getStatus(e.id) : null,
                activities: null != e ? ed.A.getActivities(e.id) : null,
                applicationStream: null != e ? ei.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, Q.Ay)({ userId: n?.id });
    return (0, q.A)({ activities: s, status: l, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(ee.A, { user: n, activities: s, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var eN = n(303727),
    ej = n(711917);
function eE(e) {
    let { Icon: t, header: n, tip: l, disableStars: s } = e;
    return (0, i.jsxs)("div", {
        className: ej.kL,
        children: [
            (0, i.jsxs)("div", {
                className: ej.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: ej.Kk, width: 36, height: 36 }),
                    s ? null : (0, i.jsx)(eN.A, { className: ej.uf }),
                ],
            }),
            (0, i.jsx)(Y.D, { className: ej.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(W.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    s
                        ? null
                        : (0, i.jsxs)(W.E, {
                              tag: "span",
                              className: ej.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [eh.intl.string(eh.t["8tvIiN"]), ":", " "],
                          }),
                    l,
                ],
            }),
        ],
    });
}
var eS = n(652215),
    eC = n(521443),
    ey = n(575863);
let e_ = { offset: { left: 4, right: -12 } },
    eI = "Recent Mentions";
function eR(e, t) {
    I.A.fetchRecentMentions({
        before: t,
        limit: eS.Ue3,
        guildId: null != e && K.Ay.guildFilter !== eS.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: K.Ay.roleFilter,
        everyone: K.Ay.everyoneFilter,
    });
}
function ev(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        l = (0, L.A)("recents", n),
        s = (0, f.bG)([U.A, P.A], () => U.A.getChannel(P.A.getChannelId())),
        {
            messages: a,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: u,
            everyoneFilter: h,
        } = (0, f.cf)([K.Ay], () => ({
            messages: K.Ay.getMentions(),
            hasMore: K.Ay.hasMore,
            loading: K.Ay.loading,
            guildFilter: K.Ay.guildFilter,
            roleFilter: K.Ay.roleFilter,
            everyoneFilter: K.Ay.everyoneFilter,
        })),
        g = (0, M.A)(o),
        m = (0, M.A)(u),
        x = (0, M.A)(h);
    r.useEffect(() => {
        K.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && u !== m) || (null != x && h !== x)) && eR(s)
            : eR(s);
    }, [g, o, m, u, x, h, s]),
        (0, v.Ay)(() => {
            a?.some(b.$r) && (I.A.clearMentions(), eR(s));
        }),
        (0, v.l0)(() => {
            I.A.truncateMentions(eS.Ue3);
        }),
        (0, v.Ay)(() => {
            w.default.track(eS.HAw.OPEN_POPOUT, { type: eI });
        }),
        (0, v.Ay)(() => {
            function e() {
                n.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                n.current?.scrollPageDown({ animate: !0 });
            }
            return (
                H._.subscribe(eS.jej.SCROLL_PAGE_DOWN, t),
                H._.subscribe(eS.jej.SCROLL_PAGE_UP, e),
                () => {
                    H._.unsubscribe(eS.jej.SCROLL_PAGE_DOWN, t), H._.unsubscribe(eS.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let S = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            eR(s, null != a && a.length > 0 ? a[a.length - 1].id : null);
    }, [d, c, s, a]);
    return null == a || (c && 0 === a.length)
        ? (0, i.jsx)("div", { className: ey.Lq, children: (0, i.jsx)(p.y, {}) })
        : 0 === a.length
          ? (0, i.jsx)(eE, { Icon: N.X, header: eh.intl.string(eh.t.bgDz74), tip: eh.intl.string(eh.t.NS15vk) })
          : (0, i.jsx)(A.hD, {
                navigator: l,
                children: (0, i.jsx)(A.PR, {
                    children: (e) => {
                        let { ref: l, ...r } = e;
                        return (0, i.jsxs)(j.Ch, {
                            ref: (e) => {
                                (n.current = e), (l.current = e?.getScrollerNode() ?? null);
                            },
                            className: ey.XG,
                            onScroll: d ? S : void 0,
                            ...r,
                            children: [
                                a.map((e) => (0, i.jsx)(eM, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: ey.Lq, children: (0, i.jsx)(p.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: ey.u9,
                                            children: (0, i.jsx)(E.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: eh.intl.string(eh.t.XBlaiC),
                                                onClick: () =>
                                                    eR(s, null != a && a.length > 0 ? a[a.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function eM(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let l = U.A.getChannel(t.channel_id);
    if (null == l || (0, O.Jm)(l) || (0, O.$v)(l)) return null;
    let s = F.A.didAgree(l.getGuildId()),
        a = !!(0, O.Gc)(l) && !s;
    return (0, i.jsxs)("div", {
        className: eC.a,
        children: [
            (0, i.jsx)(eA, {
                channel: l,
                onClick: (e) => eL(t, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(S.e, {
                    size: "sm",
                    className: eg.GC,
                    children: [
                        (0, i.jsx)(x.m, {
                            text: eh.intl.string(eh.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(C.K, {
                                variant: "secondary",
                                "aria-label": eh.intl.string(eh.t["+TSRGD"]),
                                size: "sm",
                                icon: y.t,
                                onClick: (e) => eL(t, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(x.m, {
                            text: eh.intl.string(eh.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(C.K, {
                                variant: "secondary",
                                "aria-label": eh.intl.string(eh.t.e6RscS),
                                size: "sm",
                                icon: _.A,
                                onClick: () => I.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    T.A,
                    {
                        message: t,
                        channel: l,
                        className: ey.iU,
                        hideAccessories: a,
                        compact: G.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: e_,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
function eL(e, t) {
    function n() {
        let { id: n, channel_id: l } = e;
        null != U.A.getChannel(l) && (R.A.trackJump(l, n, eI), (0, k.ci)(l, n)), t();
    }
    (0, D.A)(e, n) && n();
}
var eO = n(702841),
    eb = n(912592),
    eD = n(890856),
    eT = n(761508),
    ek = n(966597),
    eG = n(85109),
    eU = n(910425),
    eF = n(214947),
    eP = n(711950),
    ew = n(322387),
    eH = n(912309),
    eK = n(134314);
function eB(e) {
    let { closePopout: t } = e,
        n = (0, eH.kX)();
    return (0, i.jsx)(x.m, {
        asContainer: !0,
        text: eh.intl.string(eh.t["lMR96+"]),
        children: (0, i.jsxs)(X.D, {
            "aria-label": `${eh.intl.string(eh.t["lMR96+"])}, ${n}`,
            className: eK.b,
            onClick: () => {
                w.default.track(eS.HAw.NOTIFICATION_CENTER_ACTION, { action_type: ew.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    eP.A.transitionToSection(eS.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eF.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(Z.hV, { count: n, color: B.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var ez = n(980707),
    eX = n(477782),
    eJ = n(922016),
    e$ = n(783977);
function eV(e) {
    let { closePopout: t, onSelect: n } = e,
        l = (0, f.bG)([U.A, P.A], () => U.A.getChannel(P.A.getChannelId())),
        {
            everyoneFilter: s,
            roleFilter: a,
            guildFilter: r,
        } = (0, f.cf)([K.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = K.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(ez.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": eh.intl.string(eh.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eX.sL, {
                id: "Everyone",
                label: eh.intl.string(eh.t.cdyUsV),
                action: function () {
                    I.A.setGuildFilter({ everyoneFilter: !s });
                },
                checked: s,
            }),
            (0, i.jsx)(eX.sL, {
                id: "Roles",
                label: eh.intl.string(eh.t.lZejCq),
                action: function () {
                    I.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == l || l.isPrivate()
                ? null
                : (0, i.jsx)(eX.sL, {
                      id: "All Servers",
                      label: eh.intl.string(eh.t.GWMA6s),
                      action: function () {
                          I.A.setGuildFilter({
                              guildFilter: r === eS.KE7.THIS_SERVER ? eS.KE7.ALL_SERVERS : eS.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eS.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function eY() {
    let e = r.useRef(null);
    return (0, i.jsx)(eJ.Y, {
        targetElementRef: e,
        align: "right",
        animation: eJ.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eV, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(x.m, {
                text: eh.intl.string(eh.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(C.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": eh.intl.string(eh.t.pEasFX),
                    icon: e$.R,
                    onClick: n,
                }),
            });
        },
    });
}
var eZ = n(481613),
    eW = n.n(eZ),
    eq = n(621466),
    eQ = n(192308),
    e0 = n(228366),
    e1 = n(775602),
    e3 = n(723702),
    e2 = n(862482),
    e7 = n(143838),
    e8 = n(640238);
function e6(e) {
    let { onClick: t } = e,
        [n, l] = r.useState(!1);
    function s() {
        t(),
            w.default.track(eS.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(e4, { confirm: s, cancel: () => l(!1) }) : null,
            (0, i.jsx)(x.m, {
                text: eh.intl.string(eh.t["8k+6QY"]),
                children: (0, i.jsx)(C.K, {
                    variant: "secondary",
                    "aria-label": eh.intl.string(eh.t["8k+6QY"]),
                    size: "sm",
                    icon: e7.i,
                    onClick: function (e) {
                        e.shiftKey ? s() : l(!0);
                    },
                }),
            }),
        ],
    });
}
function e4(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(e8.M, {
        dismissable: !0,
        header: eh.intl.string(eh.t.h4bVZ2),
        confirmText: eh.intl.string(eh.t.e6RscS),
        cancelText: eh.intl.string(eh.t["ETE/oC"]),
        confirmButtonColor: e2.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(W.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: eh.intl.string(eh.t["0MQ0Bf"]),
        }),
    });
}
n(321073);
var e9 = n(435558),
    e5 = n.n(e9),
    te = n(749314),
    tt = n(580929),
    tn = n(311283),
    tl = n(717421),
    ts = n(334738),
    ta = n(95561),
    ti = n(976860),
    tr = n(847374),
    td = n(714568);
function tc(e) {
    let { collapsed: t, onClick: n } = e,
        l = eh.intl.string(t ? eh.t.dcl9MQ : eh.t.iTcuma);
    return (0, i.jsx)(x.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsx)(X.D, {
            className: td.x6,
            "aria-label": l,
            onClick: n,
            children: (0, i.jsx)(tr.a, { className: c()(td.ai, { [td.yZ]: t }), size: "xs" }),
        }),
    });
}
var to = n(169894);
let tu = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    th = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tg(e) {
    let { collapsed: t, children: n } = e,
        l = r.useRef(null),
        [s, a] = (0, tl.z)(() => (t ? tu : th), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = l.current?.offsetHeight;
            null != e &&
                (t
                    ? a({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: e1.Ay.useReducedMotion,
                      })
                    : a({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: e1.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && a({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, a]),
        (0, i.jsx)(tt.animated.div, {
            className: to.r,
            style: s,
            children: (0, i.jsx)("div", { ref: l, inert: !!t || void 0, children: n }),
        })
    );
}
var tm = n(782603),
    tA = n(461678),
    tf = n(914703);
function tx(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(eJ.Y, {
        targetElementRef: n,
        align: "right",
        animation: eJ.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tf.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: eh.intl.string(eh.t.ljs3Oe),
                  })
                : (0, i.jsx)(tA.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: eh.intl.string(eh.t.ljs3Oe),
                      location: { section: eS.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(x.m, {
                text: eh.intl.string(eh.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(C.K, {
                    "aria-label": eh.intl.string(eh.t.h850Ss),
                    icon: tm.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tp = n(350527),
    tN = n(218152),
    tj = n(970278),
    tE = n(747926),
    tS = n(403362),
    tC = n(935208),
    ty = n(37411),
    t_ = n(791641);
function tI(e) {
    let { channel: t, channelRecord: n, deleteChannel: l } = e,
        s = (0, f.yK)(
            [tj.A, U.A],
            () =>
                e5()(tj.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tC.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return U.A.getChannel(t);
                    })
                    .filter(tS.Vq)
                    .sort((e, t) => tC.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, tE.JA)(e, t, ty.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== s.length ||
                e0.h.wait(() => {
                    (0, ts.ack)(
                        t.channelId,
                        {
                            section: eS.JJy.INBOX,
                            object: eS.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eS.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        l(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t_.k,
            children: s.map((e) =>
                (0, i.jsx)(
                    tN.Cp,
                    { channel: n, children: (0, i.jsx)(tp.Ay, { className: t_.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var tR = n(989349),
    tv = n.n(tR),
    tM = n(123292),
    tL = n(857069),
    tO = n(789645),
    tb = n(33358),
    tD = n(384231),
    tT = n(207133),
    tk = n(704413),
    tG = n(9842),
    tU = n(994500),
    tF = n(5095),
    tP = n(320095),
    tw = n(143413),
    tH = n(763754),
    tK = n(467073),
    tB = n(491182),
    tz = n(860227),
    tX = n(500414),
    tJ = n(375199),
    t$ = n(824556),
    tV = n(715628),
    tY = n(752636),
    tZ = n(352043),
    tW = n(268719),
    tq = n(234957),
    tQ = n(888675),
    t0 = n(21623),
    t1 = n(701628);
let t3 = r.memo(function e(t) {
    let n,
        {
            channel: l,
            message: s,
            compact: a = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        g = eS.sl8.has(s.type) ? s.messageReference : void 0,
        m = (0, f.bG)([tG.A], () => tG.A.getMessageByReference(g)),
        A = (0, f.bG)([U.A], () =>
            s.type === eS.lAJ.THREAD_STARTER_MESSAGE && m.state === tG.a.LOADED
                ? U.A.getChannel(m.message.channel_id)
                : null,
        ),
        x = G.X6.useSetting(),
        p = G.hD.useSetting(),
        N = G.rs.useSetting(),
        j = G.kt.useSetting(),
        E = (0, tD.S)((s.editedTimestamp ?? s.timestamp).valueOf()),
        S = (0, tT.A)(l?.id),
        { disableReactionCreates: C } = (0, tK.A)(l),
        {
            content: y,
            hasSpoilerEmbeds: _,
            hasBailedAst: I,
        } = (0, tJ.A)(s, {
            hideSimpleEmbedContent: p && N,
            allowList: E,
            allowHeading: E,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        R = (0, tH.Ay)(s),
        v = (0, f.bG)(
            [U.A],
            () => s.hasFlag(eS.pr7.HAS_THREAD) && U.A.getChannel(tC.default.castMessageIdAsChannelId(s.id)),
        ),
        M = s.type === eS.lAJ.THREAD_STARTER_MESSAGE && m.state === tG.a.LOADED && null != A,
        L = !M && void 0 === n,
        O = (0, t$.A)({ message: s, channel: l, announcementEnabled: L }),
        b = (0, tb.P)(s),
        D = (0, tF._f)(s.id, s.channel_id),
        T = (0, tk.A)(s),
        k = (0, tz.fF)(s);
    return M
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (tU.A.isBlockedForMessage(s) ? (n = eh.t["+FcYM/"]) : tU.A.isIgnoredForMessage(s) && (n = eh.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(t2, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(tB.A, {
                compact: a,
                className: c()(r, { [t1.M1]: (0, tP.ec)(s), [t1.XN]: u, [t1._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, tq.A)(s, l, g, m, a),
                childrenHeader: (0, tY.A)({ ...t, author: R, guildId: l.guild_id }),
                childrenAccessories: (0, i.jsx)(tX.iV, {
                    channel: l,
                    message: s,
                    hasSpoilerEmbeds: _,
                    hasBailedAst: I,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: C,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: x,
                    inlineEmbedMedia: p,
                    renderEmbeds: N,
                    gifAutoPlay: j,
                    poll: T,
                    showListsAndHeaders: E,
                    showMaskedLinks: E,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: b,
                    ctaButtonType: D,
                }),
                childrenExecutedCommand: (0, tW.A)(s, l, a),
                childrenMessageContent: (0, tV.A)(t, y),
                childrenSystemMessage: (0, tZ.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != v && s.hasFlag(eS.pr7.HAS_THREAD),
                hasReply: s.type === eS.lAJ.REPLY,
                isSystemMessage: (0, tw.A)(s),
                messageRef: O,
                author: R,
                "aria-labelledby": k,
                "aria-roledescription": eh.intl.string(eh.t.BAB0yK),
            });
});
function t2(e) {
    let { className: t, count: n, compact: l, collapsedReason: s } = e;
    return (0, i.jsx)(tB.A, {
        className: t,
        compact: l,
        role: "group",
        childrenMessageContent: (0, i.jsx)(tQ.A, {
            compact: l,
            className: t0.L9,
            iconNode: (0, i.jsx)(tO.P, { size: "md", color: "currentColor", className: t0.Q6 }),
            children: (0, i.jsx)("div", { className: t0.Fo, children: eh.intl.format(s, { count: n }) }),
        }),
    });
}
var t7 = n(58703),
    t8 = n(373423);
function t6(e) {
    let { className: t, onJump: n } = e,
        [l, s] = r.useState(!1);
    return (0, i.jsx)(X.D, {
        className: c()(t8.n, t),
        onClick: function (e) {
            s(!0), n(e);
        },
        children: l
            ? (0, i.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(W.E, { variant: "text-xs/medium", className: t8.Q, children: eh.intl.string(eh.t.k5WiPf) }),
    });
}
var t4 = n(143236),
    t9 = n(284009),
    t5 = n.n(t9),
    ne = n(181079),
    nt = n(567035),
    nn = n(455234),
    nl = n(695633),
    ns = n(152007),
    na = n(607508),
    ni = n(594061),
    nr = n(617617),
    nd = n(95701),
    nc = n(808728),
    no = n(232835),
    nu = n(576705),
    nh = n(711014),
    ng = n(543465),
    nm = n(927813),
    nA =
        (((l = {})[(l.Favorite = 0)] = "Favorite"),
        (l[(l.PrivateChannel = 1)] = "PrivateChannel"),
        (l[(l.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (l[(l.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (l[(l.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (l[(l.GuildChannel = 5)] = "GuildChannel"),
        (l[(l.OldChannel = 6)] = "OldChannel"),
        (l[(l.NoNotifications = 7)] = "NoNotifications"),
        (l[(l.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        l),
    nf = (((s = {}).Loading = "loading"), (s.Loaded = "loaded"), (s.Done = "done"), s);
class nx extends t4.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            l = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (t5()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || l.some((e, n) => e !== t[n])) &&
            this.setState({ channels: l, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = np(e, !1);
                if (t.messages.some(b.$r)) return R.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tj.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, tS.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? np(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        e0.h.wait(() =>
            ts.ack(
                t,
                {
                    section: eS.JJy.INBOX,
                    object: eS.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eS.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let l = this.state.channels.find((e) => e.channelId === t);
        (null != l && this.undoStack.push(l), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              e1.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        ts.ack(
            e.channelId,
            { section: eS.JJy.INBOX, object: eS.ZSU.UNDO_MARK_AS_READ, objectType: eS.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        e0.h.wait(() => (0, nt.A)([e], eS.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: e5().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        ts.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: l, collapsedChannels: s, loadState: a } = this.state,
            i = e5().findIndex(l, (e) => e.channelId === t),
            r = l[i],
            d = !r.collapsed;
        (s[t] = d),
            (0, ni.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                ni.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: s,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !ng.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !ns.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tj.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        R.A.clearChannel(e.channelId);
        let t = R.A.fetchMessages({
            channelId: e.channelId,
            limit: eS.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            t5()("messages" === e.type, "channel cannot change type");
                            let n = np(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                t5()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...np(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function np(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = no.A.getMessages(e.channelId),
        s = l
            .toArray()
            .filter(
                (t) =>
                    tC.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tC.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (s.length === e.messages.length && s.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != l.getAfter(e.oldestReadMessageId) || s[0]?.id === e.oldestUnreadMessageId,
        i = s[s.length - 1],
        r = tC.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || s.length >= 25;
    return {
        ...e,
        messages: s,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !l.hasMoreAfter),
    };
}
function nN() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nr.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let l in t[n].channels) {
                    let s = U.A.getChannel(l);
                    (l in e && s?.guild_id !== n) || (e[l] = t[n].channels[l].collapsedInInbox);
                }
            return e;
        })(),
        l =
            ((e = n),
            (t = []),
            U.A.getSortedPrivateChannels().forEach((n) => nj(e, t, null, n.id)),
            nh.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let l = nc.Ay.getSelectableChannelIds(n),
                    s = nl.A.getActiveJoinedUnreadThreadsForGuild(n);
                l.forEach((l) => {
                    nj(e, t, n, l);
                    let a = s[l] ?? {};
                    for (let l in a) nj(e, t, n, l);
                });
            }),
            e5().sortBy(t, (e) => e.sortOrder)),
        s = e5()
            .uniq(l.map((e) => e.guildId))
            .filter(tS.Vq);
    return (
        e0.h.dispatch({ type: "INBOX_OPEN", guildIds: s }),
        { collapsedChannels: n, loadState: "loaded", channels: l, scrollToChannelIndex: null }
    );
}
function nj(e, t, n, l) {
    if (null == l) return;
    let s = U.A.getChannel(l);
    if (null == s || (!nd.Le.has(s.type) && ng.Ay.isGuildOrCategoryOrChannelMuted(n, s.id))) return;
    if (s.isPrivate()) {
        if (0 === ec.Ay.getMentionCount(l)) return;
    } else if (!(0, nn.Y)(s) && 0 === ec.Ay.getMentionCount(l)) return;
    if ((!s.isPrivate() && !nu.A.can(eS.xBc.READ_MESSAGE_HISTORY, s)) || (0, O.qR)(s)) return;
    let a = ec.Ay.ackMessageId(l);
    if (null == a) {
        let e = er.A.getGuild(s.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tC.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = ec.Ay.getOldestUnreadMessageId(l),
        r = ec.Ay.lastMessageId(l),
        d = ec.Ay.getMentionCount(l),
        c = d > 0 || s.isPrivate();
    if (null == r || tC.default.compare(a, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: l,
        oldestReadMessageId: a,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[l],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let l = U.A.getChannel(t);
            if (ne.A.isFavorite(t)) return 0;
            if (l.isPrivate()) return 1;
            if (ec.Ay.getMentionCount(t) > 0) return ec.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tC.default.extractTimestamp(n);
                if (Date.now() - e > nS) return 8;
                if (Date.now() - e > nE) return 6;
            }
            if (l.isThread()) {
                let e = (0, na.l)(l);
                return e === ty.CP.ALL_MESSAGES ? 4 : e === ty.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = ng.Ay.getChannelMessageNotifications(e, t),
                    l = n === eS.orn.NULL ? ng.Ay.getMessageNotifications(e) : n;
                return l === eS.orn.ALL_MESSAGES ? 4 : l === eS.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, l, r),
        order: 0,
    };
    (0, O.qR)(s)
        ? t.push({ ...o, type: "nsfw" })
        : s.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nE = 2 * nm.A.Millis.DAY,
    nS = 10 * nm.A.Millis.DAY;
var nC = n(357242);
let ny = { left: 4, right: -12 },
    n_ = [eS.lAJ.THREAD_CREATED];
function nI(e) {
    let { channel: t, message: n, compact: l, isGroupStart: s, gotoChannel: a } = e,
        d = (0, A.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), a(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, a, n.id],
        ),
        o = n_.includes(n.type);
    return (0, i.jsx)(z.vN, {
        offset: ny,
        children: (0, i.jsxs)("div", {
            className: nC.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(t6, { className: nC.nn, onJump: (e) => a(e, n.id) }),
                (0, i.jsx)(t3, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nC.iU,
                    compact: l,
                    animateAvatar: !1,
                    isGroupStart: s,
                }),
            ],
        }),
    });
}
function nR(e) {
    let { channel: t, channelRecord: n, gotoChannel: l } = e,
        s = G.hH.useSetting(),
        a = 0 === t.messages.length || tv()(t.messages[0].timestamp).isSame(tv()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!a && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, t7.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(te.A, { className: nC.yF, children: t }, t)), (d = tv()(e.timestamp));
        }
        let t = null == c || (0, tL.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nI, { channel: n, message: e, compact: s, isGroupStart: t, gotoChannel: l }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tC.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nC.Gr,
                        children: (0, i.jsx)(tM.Q, {
                            variant: "primary",
                            text: `${eh.intl.string(eh.t["9OB9hq"])} \u203A`,
                            onClick: (e) => l(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(p.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nC.DZ, children: r })
    );
}
let nv = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            l = r.useRef(null),
            [[s, a], d] = r.useState([0, 0]),
            c = t.deleted && s > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== s || null == l.current) return;
            let e = l.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, s]);
        let { opacity: o, size: u } = (0, tl.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: o,
                height: u.to((e) => {
                    var t, n;
                    return c ? ((t = s), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(tt.animated.div, {
            ref: l,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nM, { ...e }),
        });
    }),
    nM = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: l, toggle: s } = e,
            a = (0, f.bG)([U.A], () => U.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    e0.h.wait(() => {
                        (0, ts.ack)(
                            t.channelId,
                            {
                                section: eS.JJy.INBOX,
                                object: eS.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eS.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            l(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        function d(e, l) {
            (0, ta.zV)(eS.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let s = l ?? t.oldestUnreadMessageId;
            (0, ti.pX)(eS.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : s)), n(e);
        }
        function c() {
            s(t),
                (0, ta.zV)(eS.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !a.isNSFW();
        return (0, i.jsx)("div", {
            className: eC.a,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(eA, {
                    channel: a,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${a.id}`,
                    children: [
                        (0, i.jsxs)(S.e, {
                            size: "sm",
                            className: eg.GC,
                            children: [(0, i.jsx)(tx, { channel: a }), (0, i.jsx)(nL, { ...e })],
                        }),
                        o ? (0, i.jsx)(tc, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tg, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nR, { channel: t, channelRecord: a, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tI, { channel: t, channelRecord: a, deleteChannel: l })
                              : null,
                }),
            }),
        });
    });
function nL(e) {
    let { channel: t, markChannelRead: n, markGuildRead: l, getNumUnreadChannels: s } = e,
        a = (0, tn.A)() && null != t.guildId;
    return (0, i.jsx)(x.m, {
        text: a ? eh.intl.string(eh.t["5lLMhM"]) : eh.intl.string(eh.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(C.K, {
            variant: "secondary",
            "aria-label": a ? eh.intl.string(eh.t["5lLMhM"]) : eh.intl.string(eh.t.e6RscS),
            size: "sm",
            icon: a ? e7.i : _.A,
            onClick: function () {
                a && null != t.guildId ? l(t.guildId) : n(t),
                    (0, ta.zV)(eS.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: s() - 1,
                    });
            },
        }),
    });
}
var nO = n(301328),
    nb = n(691503);
function nD(e) {
    var t, n, l, s, a, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [x, N] = (function (e) {
            let [t, n] = r.useState(() => new nx(nN(), e)),
                [l, s] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => nN());
            r.useEffect(() => {
                function e(e) {
                    return d(e);
                }
                return (
                    t.on("change", e),
                    d(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || l) return;
                    let t = Date.now(),
                        r = nN();
                    0 === r.channels.length || t - a.current < 10 * nm.A.Millis.SECOND
                        ? s(!0)
                        : ((a.current = Date.now()), n(new nx(r, e)));
                }, [i, l, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (no.A.addChangeListener(t.reloadMessages), () => no.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        ng.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => ng.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        ns.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => ns.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tj.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tj.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: E, channels: S } = x,
        { maybeLoadMore: C } = N,
        y = (0, f.bG)([e1.Ay], () => e1.Ay.messageGroupSpacing);
    (t = m),
        (n = x),
        (l = N),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            l.clearScrollToChannelIndex();
            let { current: s } = t;
            if (null == s || null == e) return;
            let a = s.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: d } = s.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + d) && s.scrollTo({ to: i.offsetTop });
        }),
        (s = x),
        (a = N),
        r.useEffect(() => {
            function e() {
                let e = s.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                H._.subscribe(eS.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    H._.unsubscribe(eS.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, s.channels]),
        (d = N),
        r.useEffect(() => {
            function e(e) {
                if ((0, eQ.hasAnyModalOpen)()) return;
                let t = (0, eq.BF)(e)?.activeElement;
                (0, eq.Cw)(t) ||
                    (((0, e3.isMac)() || (0, e3.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                        !e.shiftKey &&
                        !e.altKey &&
                        "z" === e.key &&
                        d.undoMarkChannelRead());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d]),
        r.useEffect(() => {
            w.default.track(eS.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                e0.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    e0.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, v.Ay)(
            () => (
                H._.subscribe(eS.jej.INBOX_MARK_ALL_UNREADS_READ, N.markAllRead),
                () => {
                    H._.unsubscribe(eS.jej.INBOX_MARK_ALL_UNREADS_READ, N.markAllRead);
                }
            ),
        );
    let _ = (0, L.A)("unreads", m);
    return 0 === S.length
        ? (0, i.jsx)(eE, {
              Icon: eb.K,
              header: eh.intl.string(eh.t["6XMM+D"]),
              tip: eW().os?.family === "OS X" ? eh.intl.string(eh.t.w9uDOW) : eh.intl.string(eh.t.BiUJC6),
          })
        : (0, i.jsx)(A.hD, {
              navigator: _,
              children: (0, i.jsx)(A.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(j.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: E === nf.Done ? void 0 : C,
                          className: c()(nb.XG, `group-spacing-${y}`),
                          children: [
                              u ? (0, i.jsx)(nT, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: l,
                                          markGuildRead: s,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return e5().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nA.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            te.A,
                                                            {
                                                                className: nO.y,
                                                                contentClassName: nO.$,
                                                                children: eh.intl.string(eh.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nA.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            te.A,
                                                            {
                                                                className: nO.y,
                                                                contentClassName: nO.$,
                                                                children: eh.intl.string(eh.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nv,
                                                  {
                                                      channel: e,
                                                      markChannelRead: l,
                                                      markGuildRead: s,
                                                      toggle: r,
                                                      deleteChannel: a,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          o
                                      );
                                  });
                              })(S, N, o),
                              E === nf.Done ? null : (0, i.jsx)(p.y, { className: nb.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nT(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nb.d$,
        children: [
            (0, i.jsx)("div", { className: nb.cm, children: (0, i.jsx)(eb.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(Y.D, {
                        className: nb.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: eh.intl.string(eh.t.vZPktJ),
                    }),
                    (0, i.jsx)(W.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: eh.intl.string(eh.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nb.dh,
                        children: (0, i.jsx)(E.$, {
                            variant: "primary",
                            size: "sm",
                            text: eh.intl.string(eh.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nk() {
    return (0, i.jsx)(eE, {
        Icon: eb.K,
        disableStars: !0,
        header: eh.intl.string(eh.t["KG/ynf"]),
        tip: eh.intl.string(eh.t.cvcKzX),
    });
}
function nG() {
    return (0, i.jsx)(e6, { onClick: () => H._.dispatch(eS.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var nU = n(716030);
function nF(e) {
    let { tab: t, setTab: n, closePopout: l } = e,
        { enabled: s, inInbox: a } = ek.A.useConfig({ location: "RecentsPopout" }),
        r = (0, eU.Sc)(),
        d = (0, eO.bG)([eG.A], () => eG.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: nU.wx,
        children: [
            (0, i.jsxs)("div", {
                className: nU.qd,
                children: [
                    (0, i.jsx)(eb.K, { size: "md", color: "currentColor", className: nU.yH }),
                    (0, i.jsx)(Y.D, {
                        className: nU.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: eh.intl.string(eh.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eD.s, {
                        className: nU.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": eh.intl.string(eh.t["8k+6QY"]),
                        children: [(0, i.jsx)(nP, { tab: t }), (0, i.jsx)(eB, { closePopout: l })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nU.YF,
                children: (0, i.jsxs)(eT.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: nU.$H,
                    children: [
                        (0, i.jsx)(eT.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": eh.intl.string(eh.t.sRUdB8),
                            className: nU.Mf,
                            children: (0, i.jsx)("span", { className: nU.Gn, children: eh.intl.string(eh.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eT.V.Item, {
                            "aria-label": eh.intl.string(eh.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: nU.Mf,
                            children: (0, i.jsx)("span", { className: nU.Gn, children: eh.intl.string(eh.t.GRZF96) }),
                        }),
                        s && a
                            ? (0, i.jsx)(eT.V.Item, {
                                  "aria-label": eh.intl.string(eh.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: nU.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nU.Gn,
                                      children:
                                          0 === d
                                              ? eh.intl.string(eh.t["2pAkDA"])
                                              : eh.intl.formatToPlainString(eh.t.I4fryG, { count: d }),
                                  }),
                              })
                            : null,
                        r
                            ? (0, i.jsx)(eT.V.Item, {
                                  "aria-label": eh.intl.string(eh.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: nU.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nU.Gn,
                                      children: eh.intl.string(eh.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function nP(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(nG, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(eY, {}) : null;
}
var nw = n(406810),
    nH = n(285796),
    nK = n(151282),
    nB = n(199160),
    nz =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    nX = n(970244),
    nJ = n(383233),
    n$ = n(915089),
    nV = n(147925),
    nY = n(110357);
let nZ = { top: 8, bottom: 8, left: -4, right: -4 };
function nW(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: l } = e;
    return (0, i.jsx)(x.m, {
        text: eh.intl.string(eh.t.iTcuma),
        children: (0, i.jsx)(X.D, {
            className: c()(nY.cS, { [nY.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, ta.zV)(eS.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: l?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(nV.A, { width: 16, height: 16 }),
        }),
    });
}
function nq(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: l,
            mentionCount: s,
            channelState: a,
            toggleCollapsed: r,
            showCollapseButton: d = !1,
            getNumUnreadChannels: c,
        } = e,
        o = (0, A.rm)(`recents-header-${t.id}-${(0, n$.GV)()}`),
        u = d && !t.isNSFW() && null != a && "nsfw" !== a.type;
    return (0, i.jsx)(z.vN, {
        offset: nZ,
        children: (0, i.jsxs)("div", {
            className: nY.ZO,
            ...o,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), l(e);
                    return;
                }
                null != r &&
                    null != a &&
                    (("ArrowRight" === e.key && a.collapsed) || ("ArrowLeft" === e.key && !a.collapsed)) &&
                    r?.(a);
            },
            children: [
                u && null != a ? (0, i.jsx)(nW, { channelState: a, toggle: r, getNumUnreadChannels: c }) : null,
                (0, i.jsx)(nQ, { channel: t, gotoChannel: l }),
                (0, i.jsx)(n3, { channel: t, gotoChannel: l, mentionCount: s }),
                n,
            ],
        }),
    });
}
function nQ(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(n0, { channel: t, gotoChannel: n })
        : (0, i.jsx)(n1, { channel: t, gotoChannel: n });
}
function n0(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, f.bG)([eo.default], () => (t.isDM() ? eo.default.getUser(t.getRecipientId()) : null)),
        s = null == l ? (0, et.Y)(t) : l.getAvatarURL(void 0, 40);
    return (0, i.jsx)(X.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: nY.ro, src: s, alt: "", "aria-hidden": !0 }),
    });
}
function n1(e) {
    let { channel: t, gotoChannel: n } = e,
        l = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id));
    return null == l
        ? null
        : (0, i.jsx)(ea.Ay, {
              "aria-hidden": !0,
              className: nY.$f,
              guild: l,
              size: ea.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function n3(e) {
    let { channel: t, gotoChannel: n, mentionCount: l } = e,
        s = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id)),
        a = (0, f.bG)([U.A], () => U.A.getChannel(t.parent_id)),
        r = (0, f.bG)([ec.Ay], () => ec.Ay.getIsMentionLowImportance(t.id)),
        d = (0, el.gU)(t, s),
        o = (0, en.Ay)(t, !1),
        u = (0, en.Ay)(a),
        h = null == a ? s?.name : `${s?.name} \u{203A} ${u}`,
        g = t.isMultiUserDM()
            ? eh.intl.formatToPlainString(eh.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(n2, { channel: t })
              : (0, i.jsx)(X.D, { className: c()(nY.W$, nY.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: nY.yP,
        children: [
            (0, i.jsx)(Y.D, {
                variant: "heading-md/semibold",
                className: nY.un,
                children: (0, i.jsxs)(X.D, {
                    className: nY.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == d
                            ? null
                            : (0, i.jsx)(d, {
                                  className: t.isForumLikeChannel() ? nY.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: nY.je, children: o }),
                        null != l && l > 0
                            ? (0, i.jsx)("div", {
                                  className: nY.qS,
                                  children: (0, i.jsx)(Z.hV, {
                                      count: l,
                                      color: r
                                          ? B.A.colors.BACKGROUND_MOD_STRONG.css
                                          : B.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(W.E, { color: "text-default", variant: "text-xs/normal", className: nY.PL, children: g }),
        ],
    });
}
function n2(e) {
    let { channel: t } = e,
        {
            user: n,
            status: l,
            activities: s,
            applicationStream: a,
        } = (0, f.cf)([eo.default, ed.A, ei.A], () => {
            let e = eo.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ed.A.getStatus(e.id) : null,
                activities: null != e ? ed.A.getActivities(e.id) : null,
                applicationStream: null != e ? ei.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, Q.Ay)({ userId: n?.id });
    return (0, q.A)({ activities: s, status: l, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(ee.A, { user: n, activities: s, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var n7 = n(560502);
let n8 = { offset: { left: 4, right: -12 } };
function n6() {
    return (
        r.useEffect(() => {
            (0, nK.sy)();
        }, []),
        (0, i.jsx)(n4, {})
    );
}
function n4() {
    let e = (0, f.bG)([nB.A], () => nB.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, f.bG)([nB.A], () => nB.A.loading, []),
        l = r.useRef(null),
        s = (0, L.A)("scheduled-messages", l);
    return n
        ? (0, i.jsx)(p.y, { className: n7.k$ })
        : 0 === t.length
          ? (0, i.jsx)(eE, { Icon: nw.O, header: eh.intl.string(eh.t.aJQZfZ), tip: eh.intl.string(eh.t.rCN4pN) })
          : (0, i.jsx)(A.hD, {
                navigator: s,
                children: (0, i.jsx)(A.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(j.Ch, {
                            className: n7.XG,
                            ref: (e) => {
                                (l.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: (0, i.jsx)(n9, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function n9(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = U.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        l = (0, f.bG)([nB.A], () => nB.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: s }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: n7.WG,
                    children: [
                        (0, i.jsx)(nq, {
                            channel: n,
                            gotoChannel: () => (0, ti.pX)(eS.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        s.map((e) => {
                            let t = l.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                n5,
                                { scheduledMessage: e, channel: n, isPendingDeletion: t },
                                e.scheduledMessageId,
                            );
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
let n5 = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: l } = e,
        s = new nJ.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: eo.default.getUser(t.userId),
            timestamp: tv()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: a, stateMessage: d } = (function (e) {
            switch (e) {
                case nz.SCHEDULED:
                    return { isError: !1, stateMessage: eh.intl.string(eh.t.Fn6Odn) };
                case nz.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: eh.intl.string(eh.t.v5O2dK) };
                case nz.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: eh.intl.string(eh.t.j8uIfG) };
                case nz.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: eh.intl.string(eh.t["w6zHX/"]) };
                case nz.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: eh.intl.string(eh.t.pflV7z) };
                case nz.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: eh.intl.string(eh.t.j8uIfG) };
                default:
                    (0, tS.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, nK.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, nX.Re)();
                })
                .catch((e) => {
                    (0, nX.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, nX.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: c()(n7.zC, { [n7._4]: a, [n7.j3]: !a }),
            children: l
                ? (0, i.jsx)(p.y, { className: n7.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(W.E, {
                              variant: "text-xs/semibold",
                              color: a ? "text-feedback-critical" : "text-feedback-positive",
                              className: n7.Rq,
                              children: d,
                          }),
                          (0, i.jsxs)("div", {
                              className: n7.Pd,
                              children: [
                                  (0, i.jsx)(
                                      T.A,
                                      {
                                          message: s,
                                          channel: n,
                                          className: n7.iU,
                                          compact: G.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: n8,
                                      },
                                      s.id,
                                  ),
                                  (0, i.jsxs)(S.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(C.K, {
                                              icon: nw.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": eh.intl.string(eh.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(C.K, {
                                              icon: nH.a,
                                              onClick: o,
                                              "aria-label": eh.intl.string(eh.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        s.id,
    );
});
var le = n(978313);
function lt(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: l,
        setTab: s,
        closePopout: a,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
        showForLater: x,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": eh.intl.string(eh.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(le.k, { [le.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(nF, { tab: l, setTab: s, closePopout: a }),
                children:
                    l === u.Y2.MENTIONS
                        ? (0, i.jsx)(ev, { onJump: r })
                        : f && x && l === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(m.J, { closePopout: a })
                          : l === u.Y2.SCHEDULED
                            ? (0, i.jsx)(n6, {})
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(nk, {}),
                                  children: (0, i.jsx)(nD, {
                                      onJump: r,
                                      showTutorial: d,
                                      setSeenTutorial: A,
                                      closePopout: a,
                                  }),
                              }),
            }),
        }),
    });
}
