n.r(t), n.d(t, { default: () => se });
var s,
    l,
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
    A = n(17928),
    f = n(815021),
    x = n(935063),
    p = n(378939),
    N = n(964486),
    E = n(475743),
    C = n(323073),
    S = n(202803),
    j = n(636922),
    y = n(835835),
    I = n(910425),
    _ = n(885386),
    R = n(734057),
    M = n(517019),
    v = n(309010),
    L = n(135978),
    O = n(939249),
    b = n(289873),
    D = n(834730),
    T = n(375708),
    k = n(373423);
function G(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(O.D, {
        className: c()(k.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(b.y, { type: b.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(D.E, { variant: "text-xs/medium", className: k.Q, children: T.intl.string(T.t.k5WiPf) }),
    });
}
var U = n(837381),
    F = n(661531),
    w = n(990078),
    H = n(187322),
    P = n(297264),
    K = n(812993),
    B = n(397244),
    z = n(714114),
    X = n(394871),
    J = n(95561),
    V = n(571694),
    Y = n(47167),
    $ = n(713654),
    Z = n(915089),
    q = n(548118),
    W = n(616356),
    Q = n(71393),
    ee = n(290863),
    et = n(568548),
    en = n(287809),
    es = n(147925),
    el = n(652215),
    ea = n(110357);
let ei = { top: 8, bottom: 8, left: -4, right: -4 };
function er(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(w.m, {
        text: T.intl.string(T.t.iTcuma),
        children: (0, i.jsx)(O.D, {
            className: c()(ea.cS, { [ea.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, J.zV)(el.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(es.A, { width: 16, height: 16 }),
        }),
    });
}
function ed(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: l,
            channelState: a,
            toggleCollapsed: r,
            showCollapseButton: d = !1,
            getNumUnreadChannels: c,
        } = e,
        o = (0, U.rm)(`recents-header-${t.id}-${(0, Z.GV)()}`),
        u = d && !t.isNSFW() && null != a && "nsfw" !== a.type;
    return (0, i.jsx)(H.vN, {
        offset: ei,
        children: (0, i.jsxs)("div", {
            className: ea.ZO,
            ...o,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r &&
                    null != a &&
                    (("ArrowRight" === e.key && a.collapsed) || ("ArrowLeft" === e.key && !a.collapsed)) &&
                    r?.(a);
            },
            children: [
                u && null != a ? (0, i.jsx)(er, { channelState: a, toggle: r, getNumUnreadChannels: c }) : null,
                (0, i.jsx)(ec, { channel: t, gotoChannel: s }),
                (0, i.jsx)(eh, { channel: t, gotoChannel: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function ec(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(eo, { channel: t, gotoChannel: n })
        : (0, i.jsx)(eu, { channel: t, gotoChannel: n });
}
function eo(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, A.bG)([en.default], () => (t.isDM() ? en.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, V.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(O.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: ea.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function eu(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, A.bG)([Q.A], () => Q.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(q.Ay, {
              "aria-hidden": !0,
              className: ea.$f,
              guild: s,
              size: q.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function eh(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        l = (0, A.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        a = (0, A.bG)([R.A], () => R.A.getChannel(t.parent_id)),
        r = (0, A.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, $.gU)(t, l),
        o = (0, Y.Ay)(t, !1),
        u = (0, Y.Ay)(a),
        h = null == a ? l?.name : `${l?.name} \u{203A} ${u}`,
        g = t.isMultiUserDM()
            ? T.intl.formatToPlainString(T.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(eg, { channel: t })
              : (0, i.jsx)(O.D, { className: c()(ea.W$, ea.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: ea.yP,
        children: [
            (0, i.jsx)(P.D, {
                variant: "heading-md/semibold",
                className: ea.un,
                children: (0, i.jsxs)(O.D, {
                    className: ea.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == d
                            ? null
                            : (0, i.jsx)(d, {
                                  className: t.isForumLikeChannel() ? ea.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: ea.je, children: o }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: ea.qS,
                                  children: (0, i.jsx)(K.hV, {
                                      count: s,
                                      color: r
                                          ? F.A.colors.BACKGROUND_MOD_STRONG.css
                                          : F.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(D.E, { color: "text-default", variant: "text-xs/normal", className: ea.PL, children: g }),
        ],
    });
}
function eg(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, A.cf)([en.default, ee.A, W.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? W.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, z.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var em = n(303727),
    eA = n(711917);
function ef(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: eA.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eA.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: eA.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(em.A, { className: eA.uf }),
                ],
            }),
            (0, i.jsx)(P.D, { className: eA.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(D.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(D.E, {
                              tag: "span",
                              className: eA.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [T.intl.string(T.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var ex = n(575863);
let ep = { offset: { left: 4, right: -12 } };
function eN(e, t) {
    p.A.fetchRecentMentions({
        before: t,
        limit: el.Ue3,
        guildId: null != e && L.Ay.guildFilter !== el.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: L.Ay.roleFilter,
        everyone: L.Ay.everyoneFilter,
    });
}
function eE(e) {
    let { onJump: t } = e,
        n = (0, A.bG)([R.A, v.A], () => R.A.getChannel(v.A.getChannelId())),
        {
            messages: s,
            hasMore: l,
            loading: a,
            guildFilter: d,
            roleFilter: o,
            everyoneFilter: u,
        } = (0, A.cf)([L.Ay], () => ({
            messages: L.Ay.getMentions(),
            hasMore: L.Ay.hasMore,
            loading: L.Ay.loading,
            guildFilter: L.Ay.guildFilter,
            roleFilter: L.Ay.roleFilter,
            everyoneFilter: L.Ay.everyoneFilter,
        })),
        h = (0, I.Sc)(),
        g = (0, E.A)(d),
        m = (0, E.A)(o),
        f = (0, E.A)(u);
    r.useEffect(() => {
        L.Ay.hasLoadedEver
            ? ((null != g && d !== g) || (null != m && o !== m) || (null != f && u !== f)) && eN(n)
            : eN(n);
    }, [g, d, m, o, f, u, n]),
        (0, N.Ay)(() => {
            s?.some(S.$r) && (p.A.clearMentions(), eN(n));
        }),
        r.useEffect(
            () => () => {
                p.A.truncateMentions(el.Ue3);
            },
            [],
        );
    let x = r.useCallback(() => null, []);
    return (0, i.jsx)(y.Ay, {
        className: c()(ex.sH, { [ex.qC]: h }),
        scrollerClassName: ex.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            p.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: a,
        hasMore: l,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            eN(n, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: x,
        renderEmptyState: ej,
        renderMessage: eC,
        "aria-label": T.intl.string(T.t.jbV6MM),
        listName: "recents",
    });
}
function eC(e, t) {
    return [(0, i.jsx)(eS, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function eS(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let l = R.A.getChannel(t.channel_id);
    if (null == l || (0, C.Jm)(l) || (0, C.$v)(l)) return null;
    let a = M.A.didAgree(l.getGuildId()),
        r = !!(0, C.Gc)(l) && !a;
    return (0, i.jsxs)("div", {
        className: ex.kL,
        children: [
            (0, i.jsx)(ed, {
                channel: l,
                gotoChannel: n,
                children:
                    null != s ? (0, i.jsx)(f.J, { size: "sm", onClick: () => p.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: ex.zC,
                children: [
                    (0, i.jsx)(G, { className: ex.QT, onJump: n }),
                    (0, i.jsx)(
                        j.A,
                        {
                            message: t,
                            channel: l,
                            className: ex.iU,
                            hideAccessories: r,
                            compact: _.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: ep,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function ej() {
    return (0, i.jsx)(ef, { Icon: x.X, header: T.intl.string(T.t.bgDz74), tip: T.intl.string(T.t.NS15vk) });
}
var ey = n(702841),
    eI = n(912592),
    e_ = n(890856),
    eR = n(761508),
    eM = n(966597),
    ev = n(85109),
    eL = n(214947),
    eO = n(711950),
    eb = n(322387),
    eD = n(912309),
    eT = n(174459),
    ek = n(134314);
function eG(e) {
    let { closePopout: t } = e,
        n = (0, eD.kX)();
    return (0, i.jsx)(w.m, {
        asContainer: !0,
        text: T.intl.string(T.t["lMR96+"]),
        children: (0, i.jsxs)(O.D, {
            "aria-label": `${T.intl.string(T.t["lMR96+"])}, ${n}`,
            className: ek.b,
            onClick: () => {
                eT.default.track(el.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: eb.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eO.A.transitionToSection(el.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eL.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(K.hV, { count: n, color: F.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var eU = n(980707),
    eF = n(477782),
    ew = n(922016),
    eH = n(408278),
    eP = n(783977);
function eK(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, A.bG)([R.A, v.A], () => R.A.getChannel(v.A.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, A.cf)([L.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = L.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(eU.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": T.intl.string(T.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eF.sL, {
                id: "Everyone",
                label: T.intl.string(T.t.cdyUsV),
                action: function () {
                    p.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(eF.sL, {
                id: "Roles",
                label: T.intl.string(T.t.lZejCq),
                action: function () {
                    p.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eF.sL, {
                      id: "All Servers",
                      label: T.intl.string(T.t.GWMA6s),
                      action: function () {
                          p.A.setGuildFilter({
                              guildFilter: r === el.KE7.THIS_SERVER ? el.KE7.ALL_SERVERS : el.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === el.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function eB() {
    let e = r.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: e,
        align: "right",
        animation: ew.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eK, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(w.m, {
                text: T.intl.string(T.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(eH.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": T.intl.string(T.t.pEasFX),
                    icon: eP.R,
                    onClick: n,
                }),
            });
        },
    });
}
var ez = n(481613),
    eX = n.n(ez),
    eJ = n(621466),
    eV = n(689175),
    eY = n(821609),
    e$ = n(192308),
    eZ = n(228366),
    eq = n(775602),
    eW = n(928039),
    eQ = n(625494),
    e0 = n(723702),
    e1 = n(862482),
    e3 = n(143838),
    e2 = n(640238);
function e8(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            eT.default.track(el.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(e7, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(w.m, {
                text: T.intl.string(T.t["8k+6QY"]),
                children: (0, i.jsx)(eH.K, {
                    variant: "secondary",
                    "aria-label": T.intl.string(T.t["8k+6QY"]),
                    size: "sm",
                    icon: e3.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function e7(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(e2.M, {
        dismissable: !0,
        header: T.intl.string(T.t.h4bVZ2),
        confirmText: T.intl.string(T.t.e6RscS),
        cancelText: T.intl.string(T.t["ETE/oC"]),
        confirmButtonColor: e1.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(D.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: T.intl.string(T.t["0MQ0Bf"]),
        }),
    });
}
n(321073);
var e6 = n(735438),
    e4 = n.n(e6),
    e9 = n(749314),
    e5 = n(580929),
    te = n(311283),
    tt = n(717421),
    tn = n(825484),
    ts = n(933832),
    tl = n(334738),
    ta = n(976860),
    ti = n(320448),
    tr = n(778712),
    td = n(97808),
    tc = n(598104),
    to = n(650583),
    tu = n(889329);
let th = { top: 8, bottom: 8, left: -4, right: -4 };
function tg(e) {
    let { channel: t, children: n, onClick: s, collapsed: l = !1, mentionCount: a, onToggleCollapse: r } = e,
        d = (0, U.rm)(`header-${t.id}`);
    return (0, i.jsx)(H.vN, {
        offset: th,
        children: (0, i.jsxs)("div", {
            className: c()(tu.ZO, { [tu.yZ]: l }),
            ...d,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === to.dh.ENTER || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === to.dh.ARROW_RIGHT && l) || (e.key === to.dh.ARROW_LEFT && !l)) && r();
            },
            children: [
                (0, i.jsx)(O.D, {
                    className: tu.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(tm, { channel: t }),
                }),
                (0, i.jsx)(ti._, { size: "xxs" }),
                (0, i.jsx)(tA, { channel: t, onClick: s, mentionCount: a }),
                n,
            ],
        }),
    });
}
function tm(e) {
    let { channel: t } = e,
        n = (0, A.bG)([Q.A], () => Q.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(q.Ay, { className: tu.Kk, guild: n, size: q.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(tc.A, { channel: t, size: tr._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(td.eu, { size: tr._3.SIZE_32, src: (0, V.Y)(t), "aria-hidden": !0 });
}
function tA(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, A.bG)([Q.A], () => Q.A.getGuild(t.guild_id)),
        a = (0, Y.Ay)(t, !1),
        r = (0, A.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, A.bG)([R.A], () => R.A.getChannel(t.parent_id)),
        o = (0, Y.Ay)(d),
        u = (0, $.gU)(t, l);
    return (0, i.jsxs)("div", {
        className: tu.yP,
        children: [
            (0, i.jsx)(P.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: tu.lz,
                children: (0, i.jsxs)(O.D, {
                    className: tu.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == u ? null : (0, i.jsx)(u, { className: tu.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: tu.je, children: a }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: tu.qS,
                                  children: (0, i.jsx)(K.hV, {
                                      count: s,
                                      color: r
                                          ? F.A.colors.BACKGROUND_MOD_STRONG.css
                                          : F.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(D.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? T.intl.formatToPlainString(T.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(tf, { channel: t })
                      : (0, i.jsx)(O.D, {
                            className: c()(tu.je, tu.J5),
                            onClick: n,
                            children: null == d ? l?.name : `${l?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function tf(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, A.cf)([en.default, ee.A, W.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? W.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, z.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var tx = n(847374),
    tp = n(714568);
function tN(e) {
    let { collapsed: t, onClick: n } = e,
        s = T.intl.string(t ? T.t.dcl9MQ : T.t.iTcuma);
    return (0, i.jsx)(w.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(O.D, {
            className: tp.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tx.a, { className: c()(tp.ai, { [tp.yZ]: t }), size: "xs" }),
        }),
    });
}
var tE = n(169894);
let tC = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tS = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tj(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [l, a] = (0, tt.z)(() => (t ? tC : tS), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? a({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: eq.Ay.useReducedMotion,
                      })
                    : a({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: eq.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && a({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, a]),
        (0, i.jsx)(e5.animated.div, {
            className: tE.r,
            style: l,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var ty = n(782603),
    tI = n(461678),
    t_ = n(914703);
function tR(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: n,
        align: "right",
        animation: ew.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(t_.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: T.intl.string(T.t.ljs3Oe),
                  })
                : (0, i.jsx)(tI.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: T.intl.string(T.t.ljs3Oe),
                      location: { section: el.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(w.m, {
                text: T.intl.string(T.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(eH.K, {
                    "aria-label": T.intl.string(T.t.h850Ss),
                    icon: ty.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tM = n(350527),
    tv = n(218152),
    tL = n(970278),
    tO = n(747926),
    tb = n(403362),
    tD = n(935208),
    tT = n(37411),
    tk = n(791641);
function tG(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, A.yK)(
            [tL.A, R.A],
            () =>
                e4()(tL.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tD.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return R.A.getChannel(t);
                    })
                    .filter(tb.Vq)
                    .sort((e, t) => tD.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, tO.JA)(e, t, tT.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                eZ.h.wait(() => {
                    (0, tl.ack)(
                        t.channelId,
                        {
                            section: el.JJy.INBOX,
                            object: el.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tk.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    tv.Cp,
                    { channel: n, children: (0, i.jsx)(tM.Ay, { className: tk.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var tU = n(989349),
    tF = n.n(tU),
    tw = n(123292),
    tH = n(857069),
    tP = n(789645),
    tK = n(33358),
    tB = n(384231),
    tz = n(207133),
    tX = n(704413),
    tJ = n(9842),
    tV = n(994500),
    tY = n(5095),
    t$ = n(320095),
    tZ = n(143413),
    tq = n(763754),
    tW = n(467073),
    tQ = n(491182),
    t0 = n(860227),
    t1 = n(500414),
    t3 = n(375199),
    t2 = n(824556),
    t8 = n(715628),
    t7 = n(752636),
    t6 = n(352043),
    t4 = n(268719),
    t9 = n(234957),
    t5 = n(888675),
    ne = n(21623),
    nt = n(701628);
let nn = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: a = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: u = !1,
            hasThread: h,
        } = t,
        g = el.sl8.has(l.type) ? l.messageReference : void 0,
        m = (0, A.bG)([tJ.A], () => tJ.A.getMessageByReference(g)),
        f = (0, A.bG)([R.A], () =>
            l.type === el.lAJ.THREAD_STARTER_MESSAGE && m.state === tJ.a.LOADED
                ? R.A.getChannel(m.message.channel_id)
                : null,
        ),
        x = _.X6.useSetting(),
        p = _.hD.useSetting(),
        N = _.rs.useSetting(),
        E = _.kt.useSetting(),
        C = (0, tB.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        S = (0, tz.A)(s?.id),
        { disableReactionCreates: j } = (0, tW.A)(s),
        {
            content: y,
            hasSpoilerEmbeds: I,
            hasBailedAst: M,
        } = (0, t3.A)(l, {
            hideSimpleEmbedContent: p && N,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        v = (0, tq.Ay)(l),
        L = (0, A.bG)(
            [R.A],
            () => l.hasFlag(el.pr7.HAS_THREAD) && R.A.getChannel(tD.default.castMessageIdAsChannelId(l.id)),
        ),
        O = l.type === el.lAJ.THREAD_STARTER_MESSAGE && m.state === tJ.a.LOADED && null != f,
        b = !O && void 0 === n,
        D = (0, t2.A)({ message: l, channel: s, announcementEnabled: b }),
        k = (0, tK.P)(l),
        G = (0, tY._f)(l.id, l.channel_id),
        U = (0, tX.A)(l),
        F = (0, t0.fF)(l);
    return O
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: f, hasThread: !1 })
        : (tV.A.isBlockedForMessage(l) ? (n = T.t["+FcYM/"]) : tV.A.isIgnoredForMessage(l) && (n = T.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(ns, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(tQ.A, {
                compact: a,
                className: c()(r, { [nt.M1]: (0, t$.ec)(l), [nt.XN]: u, [nt._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, t9.A)(l, s, g, m, a),
                childrenHeader: (0, t7.A)({ ...t, author: v, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(t1.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: I,
                    hasBailedAst: M,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: j,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: x,
                    inlineEmbedMedia: p,
                    renderEmbeds: N,
                    gifAutoPlay: E,
                    poll: U,
                    showListsAndHeaders: C,
                    showMaskedLinks: C,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: k,
                    ctaButtonType: G,
                }),
                childrenExecutedCommand: (0, t4.A)(l, s, a),
                childrenMessageContent: (0, t8.A)(t, y),
                childrenSystemMessage: (0, t6.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== h && null != L && l.hasFlag(el.pr7.HAS_THREAD),
                hasReply: l.type === el.lAJ.REPLY,
                isSystemMessage: (0, tZ.A)(l),
                messageRef: D,
                author: v,
                "aria-labelledby": F,
                "aria-roledescription": T.intl.string(T.t.BAB0yK),
            });
});
function ns(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(tQ.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(t5.A, {
            compact: s,
            className: ne.L9,
            iconNode: (0, i.jsx)(tP.P, { size: "md", color: "currentColor", className: ne.Q6 }),
            children: (0, i.jsx)("div", { className: ne.Fo, children: T.intl.format(l, { count: n }) }),
        }),
    });
}
var nl = n(58703),
    na = n(143236),
    ni = n(284009),
    nr = n.n(ni),
    nd = n(493336),
    nc = n(181079),
    no = n(567035),
    nu = n(455234),
    nh = n(695633),
    ng = n(152007),
    nm = n(607508),
    nA = n(594061),
    nf = n(617617),
    nx = n(95701),
    np = n(808728),
    nN = n(232835),
    nE = n(576705),
    nC = n(711014),
    nS = n(543465),
    nj = n(927813),
    ny =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    nI = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class n_ extends na.EventEmitter {
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
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (nr()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = nR(e, !1);
                if (t.messages.some(S.$r)) return nd.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tL.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, tb.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nR(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        eZ.h.wait(() =>
            tl.ack(
                t,
                {
                    section: el.JJy.INBOX,
                    object: el.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              eq.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tl.ack(
            e.channelId,
            { section: el.JJy.INBOX, object: el.ZSU.UNDO_MARK_AS_READ, objectType: el.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        eZ.h.wait(() => (0, no.A)([e], el.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: e4().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tl.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = e4().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, nA.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                nA.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nS.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !ng.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tL.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        nd.A.clearChannel(e.channelId);
        let t = nd.A.fetchMessages({
            channelId: e.channelId,
            limit: el.EMb,
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
                            nr()("messages" === e.type, "channel cannot change type");
                            let n = nR(e, !0);
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
                                nr()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nR(e, !0),
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
function nR(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nN.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tD.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tD.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tD.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function nM() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nf.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = R.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            R.A.getSortedPrivateChannels().forEach((n) => nv(e, t, null, n.id)),
            nC.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = np.Ay.getSelectableChannelIds(n),
                    l = nh.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nv(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nv(e, t, n, s);
                });
            }),
            e4().sortBy(t, (e) => e.sortOrder)),
        l = e4()
            .uniq(s.map((e) => e.guildId))
            .filter(tb.Vq);
    return (
        eZ.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nv(e, t, n, s) {
    if (null == s) return;
    let l = R.A.getChannel(s);
    if (null == l || (!nx.Le.has(l.type) && nS.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === et.Ay.getMentionCount(s)) return;
    } else if (!(0, nu.Y)(l) && 0 === et.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !nE.A.can(el.xBc.READ_MESSAGE_HISTORY, l)) || (0, C.qR)(l)) return;
    let a = et.Ay.ackMessageId(s);
    if (null == a) {
        let e = Q.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tD.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = et.Ay.getOldestUnreadMessageId(s),
        r = et.Ay.lastMessageId(s),
        d = et.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || tD.default.compare(a, r) >= 0) return;
    let o = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: a,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = R.A.getChannel(t);
            if (nc.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (et.Ay.getMentionCount(t) > 0) return et.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tD.default.extractTimestamp(n);
                if (Date.now() - e > nO) return 8;
                if (Date.now() - e > nL) return 6;
            }
            if (s.isThread()) {
                let e = (0, nm.l)(s);
                return e === tT.CP.ALL_MESSAGES ? 4 : e === tT.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nS.Ay.getChannelMessageNotifications(e, t),
                    s = n === el.orn.NULL ? nS.Ay.getMessageNotifications(e) : n;
                return s === el.orn.ALL_MESSAGES ? 4 : s === el.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, C.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nL = 2 * nj.A.Millis.DAY,
    nO = 10 * nj.A.Millis.DAY;
var nb = n(357242);
let nD = { left: 4, right: -12 },
    nT = [el.lAJ.THREAD_CREATED];
function nk(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: a } = e,
        d = (0, U.rm)(n.id ?? ""),
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
        o = nT.includes(n.type);
    return (0, i.jsx)(H.vN, {
        offset: nD,
        children: (0, i.jsxs)("div", {
            className: nb.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(G, { className: nb.nn, onJump: (e) => a(e, n.id) }),
                (0, i.jsx)(nn, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nb.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function nG(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = _.hH.useSetting(),
        a = 0 === t.messages.length || tF()(t.messages[0].timestamp).isSame(tF()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!a && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, nl.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(e9.A, { className: nb.yF, children: t }, t)), (d = tF()(e.timestamp));
        }
        let t = null == c || (0, tH.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nk, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let u = o[o.length - 1];
    return (
        null != u &&
            0 > tD.default.compare(u.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nb.Gr,
                        children: (0, i.jsx)(tw.Q, {
                            variant: "primary",
                            text: `${T.intl.string(T.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, u.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(b.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nb.DZ, children: r })
    );
}
var nU = n(201489);
let nF = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[l, a], d] = r.useState([0, 0]),
            c = t.deleted && l > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: o, size: u } = (0, tt.z)(
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
                    return c ? ((t = l), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(e5.animated.div, {
            ref: s,
            style: h,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nw, { ...e }),
        });
    }),
    nw = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, A.bG)([R.A], () => R.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    eZ.h.wait(() => {
                        (0, tl.ack)(
                            t.channelId,
                            {
                                section: el.JJy.INBOX,
                                object: el.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            (0, J.zV)(el.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, ta.pX)(el.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        }
        function c() {
            l(t),
                (0, J.zV)(el.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !a.isNSFW();
        return (0, i.jsx)("div", {
            className: nU.I,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(tg, {
                    channel: a,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    children: [
                        (0, i.jsxs)(tn.e, {
                            size: "sm",
                            className: tu.GC,
                            children: [(0, i.jsx)(tR, { channel: a }), (0, i.jsx)(nH, { ...e })],
                        }),
                        o ? (0, i.jsx)(tN, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tj, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nG, { channel: t, channelRecord: a, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tG, { channel: t, channelRecord: a, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nH(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, te.A)() && null != t.guildId;
    return (0, i.jsx)(w.m, {
        text: a ? T.intl.string(T.t["5lLMhM"]) : T.intl.string(T.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(eH.K, {
            variant: "secondary",
            "aria-label": a ? T.intl.string(T.t["5lLMhM"]) : T.intl.string(T.t.e6RscS),
            size: "sm",
            icon: a ? e3.i : ts.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, J.zV)(el.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var nP = n(301328),
    nK = n(691503);
function nB(e) {
    var t, n, s, l, a, d;
    let { onJump: o, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [f, x] = (function (e) {
            let [t, n] = r.useState(() => new n_(nM(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => nM());
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
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = nM();
                    0 === r.channels.length || t - a.current < 10 * nj.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new n_(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (nN.A.addChangeListener(t.reloadMessages), () => nN.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nS.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nS.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        ng.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => ng.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tL.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tL.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: p, channels: E } = f,
        { maybeLoadMore: C } = x,
        S = (0, A.bG)([eq.Ay], () => eq.Ay.messageGroupSpacing);
    (t = m),
        (n = f),
        (s = x),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == e) return;
            let a = l.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: d } = l.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + d) && l.scrollTo({ to: i.offsetTop });
        }),
        (l = f),
        (a = x),
        r.useEffect(() => {
            function e() {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                eQ._.subscribe(el.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    eQ._.unsubscribe(el.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (d = x),
        r.useEffect(() => {
            function e(e) {
                if ((0, e$.hasAnyModalOpen)()) return;
                let t = (0, eJ.BF)(e)?.activeElement;
                (0, eJ.Cw)(t) ||
                    (((0, e0.isMac)() || (0, e0.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            eT.default.track(el.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                eZ.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    eZ.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, N.Ay)(
            () => (
                eQ._.subscribe(el.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead),
                () => {
                    eQ._.unsubscribe(el.jej.INBOX_MARK_ALL_UNREADS_READ, x.markAllRead);
                }
            ),
        );
    let j = (0, eW.A)("unreads", m);
    return 0 === E.length
        ? (0, i.jsx)(ef, {
              Icon: eI.K,
              header: T.intl.string(T.t["6XMM+D"]),
              tip: eX().os?.family === "OS X" ? T.intl.string(T.t.w9uDOW) : T.intl.string(T.t.BiUJC6),
          })
        : (0, i.jsx)(U.hD, {
              navigator: j,
              children: (0, i.jsx)(U.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(eV.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: p === nI.Done ? void 0 : C,
                          className: c()(nK.XG, `group-spacing-${S}`),
                          children: [
                              u ? (0, i.jsx)(nz, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return e4().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === ny.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            e9.A,
                                                            {
                                                                className: nP.y,
                                                                contentClassName: nP.$,
                                                                children: T.intl.string(T.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === ny.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            e9.A,
                                                            {
                                                                className: nP.y,
                                                                contentClassName: nP.$,
                                                                children: T.intl.string(T.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nF,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
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
                              })(E, x, o),
                              p === nI.Done ? null : (0, i.jsx)(b.y, { className: nK.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nz(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nK.d$,
        children: [
            (0, i.jsx)("div", { className: nK.cm, children: (0, i.jsx)(eI.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(P.D, {
                        className: nK.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: T.intl.string(T.t.vZPktJ),
                    }),
                    (0, i.jsx)(D.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: T.intl.string(T.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nK.dh,
                        children: (0, i.jsx)(eY.$, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(T.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nX() {
    return (0, i.jsx)(ef, {
        Icon: eI.K,
        disableStars: !0,
        header: T.intl.string(T.t["KG/ynf"]),
        tip: T.intl.string(T.t.cvcKzX),
    });
}
function nJ() {
    return (0, i.jsx)(e8, { onClick: () => eQ._.dispatch(el.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var nV = n(716030);
function nY(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: l, inInbox: a } = eM.A.useConfig({ location: "RecentsPopout" }),
        r = (0, I.Sc)(),
        d = (0, ey.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: nV.wx,
        children: [
            (0, i.jsxs)("div", {
                className: nV.qd,
                children: [
                    (0, i.jsx)(eI.K, { size: "md", color: "currentColor", className: nV.yH }),
                    (0, i.jsx)(P.D, {
                        className: nV.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: T.intl.string(T.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e_.s, {
                        className: nV.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": T.intl.string(T.t["8k+6QY"]),
                        children: [(0, i.jsx)(n$, { tab: t }), (0, i.jsx)(eG, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nV.YF,
                children: (0, i.jsxs)(eR.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: nV.$H,
                    children: [
                        (0, i.jsx)(eR.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": T.intl.string(T.t.sRUdB8),
                            className: nV.Mf,
                            children: (0, i.jsx)("span", { className: nV.Gn, children: T.intl.string(T.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eR.V.Item, {
                            "aria-label": T.intl.string(T.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: nV.Mf,
                            children: (0, i.jsx)("span", { className: nV.Gn, children: T.intl.string(T.t.GRZF96) }),
                        }),
                        l && a
                            ? (0, i.jsx)(eR.V.Item, {
                                  "aria-label": T.intl.string(T.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: nV.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nV.Gn,
                                      children:
                                          0 === d
                                              ? T.intl.string(T.t["2pAkDA"])
                                              : T.intl.formatToPlainString(T.t.I4fryG, { count: d }),
                                  }),
                              })
                            : null,
                        r
                            ? (0, i.jsx)(eR.V.Item, {
                                  "aria-label": T.intl.string(T.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: nV.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nV.Gn,
                                      children: T.intl.string(T.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function n$(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(nJ, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(eB, {}) : null;
}
var nZ = n(406810),
    nq = n(285796),
    nW = n(151282),
    nQ = n(199160),
    n0 =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    n1 = n(970244),
    n3 = n(383233),
    n2 = n(560502);
let n8 = { offset: { left: 4, right: -12 } };
function n7() {
    return (
        r.useEffect(() => {
            (0, nW.sy)();
        }, []),
        (0, i.jsx)(n6, {})
    );
}
function n6() {
    let e = (0, A.bG)([nQ.A], () => nQ.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, A.bG)([nQ.A], () => nQ.A.loading, []),
        s = r.useRef(null),
        l = (0, eW.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(b.y, { className: n2.k$ })
        : 0 === t.length
          ? (0, i.jsx)(ef, { Icon: nZ.O, header: T.intl.string(T.t.aJQZfZ), tip: T.intl.string(T.t.rCN4pN) })
          : (0, i.jsx)(U.hD, {
                navigator: l,
                children: (0, i.jsx)(U.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(eV.Ch, {
                            className: n2.XG,
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...l,
                            children: (0, i.jsx)(n4, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function n4(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = R.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        s = (0, A.bG)([nQ.A], () => nQ.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: n2.WG,
                    children: [
                        (0, i.jsx)(ed, {
                            channel: n,
                            gotoChannel: () => (0, ta.pX)(el.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        l.map((e) => {
                            let t = s.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                n9,
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
let n9 = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: s } = e,
        l = new n3.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: en.default.getUser(t.userId),
            timestamp: tF()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: a, stateMessage: d } = (function (e) {
            switch (e) {
                case n0.SCHEDULED:
                    return { isError: !1, stateMessage: T.intl.string(T.t.Fn6Odn) };
                case n0.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: T.intl.string(T.t.v5O2dK) };
                case n0.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: T.intl.string(T.t.j8uIfG) };
                case n0.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: T.intl.string(T.t["w6zHX/"]) };
                case n0.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: T.intl.string(T.t.pflV7z) };
                case n0.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: T.intl.string(T.t.j8uIfG) };
                default:
                    (0, tb.xb)(e);
            }
        })(t.state),
        o = r.useCallback(() => {
            (0, nW.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, n1.Re)();
                })
                .catch((e) => {
                    (0, n1.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, n1.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: c()(n2.zC, { [n2._4]: a, [n2.j3]: !a }),
            children: s
                ? (0, i.jsx)(b.y, { className: n2.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(D.E, {
                              variant: "text-xs/semibold",
                              color: a ? "text-feedback-critical" : "text-feedback-positive",
                              className: n2.Rq,
                              children: d,
                          }),
                          (0, i.jsxs)("div", {
                              className: n2.Pd,
                              children: [
                                  (0, i.jsx)(
                                      j.A,
                                      {
                                          message: l,
                                          channel: n,
                                          className: n2.iU,
                                          compact: _.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: n8,
                                      },
                                      l.id,
                                  ),
                                  (0, i.jsxs)(tn.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(eH.K, {
                                              icon: nZ.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": T.intl.string(T.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(eH.K, {
                                              icon: nq.a,
                                              onClick: o,
                                              "aria-label": T.intl.string(T.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        l.id,
    );
});
var n5 = n(978313);
function se(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: a,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
        showForLater: x,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": T.intl.string(T.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(n5.k, { [n5.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(nY, { tab: s, setTab: l, closePopout: a }),
                children:
                    s === u.Y2.MENTIONS
                        ? (0, i.jsx)(eE, { onJump: r })
                        : f && x && s === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(m.J, { closePopout: a })
                          : s === u.Y2.SCHEDULED
                            ? (0, i.jsx)(n7, {})
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(nX, {}),
                                  children: (0, i.jsx)(nB, {
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
