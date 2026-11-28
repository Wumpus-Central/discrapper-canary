(t.r(n), t.d(n, { default: () => u7 }), t(321073));
var i,
    l = t(477900),
    s = t(582128),
    r = t(503698),
    a = t.n(r),
    o = t(284009),
    d = t.n(o),
    c = t(435558),
    u = t.n(c),
    h = t(806163),
    A = t(855986),
    m = t(554146),
    p = t(192308),
    g = t(289873),
    f = t(821609),
    x = t(43990),
    I = t(367513),
    E = t(604681),
    C = t(442433);
t(183994);
var y = t(837381),
    j = t(116903),
    b = t(607399),
    _ = t(834730),
    T = t(194261),
    N = t(312138),
    v = t(475825),
    S = t(177953),
    R = t(534514),
    L = t(414798),
    O = t(775602),
    M = t(793574),
    P = t(688810),
    D = t(449582),
    k = t(485947),
    w = t(233824),
    U = t(69282),
    G = t(657048),
    F = t(361610),
    H = t(964486),
    V = t(36124),
    B = t(317525),
    W = t(219065),
    Y = t(818348),
    z = t(792996);
let X = [];
var q = t(342296),
    $ = t(616356),
    K = t(696451),
    Z = t(290863),
    Q = t(894768),
    J = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(129230),
    ei = t(188567),
    el = t(488926),
    es = t(427262),
    er = t(253400),
    ea = t(110574),
    eo = t(652215),
    ed = t(162866),
    ec = t(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, A.bG)([J.A], () => J.A.isTyping(n.id, r)),
            c = (0, A.bG)([K.Ay], () => K.Ay.getMember(n.guild_id, r)),
            u = (0, A.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([ee.default], () => ee.default.getUser(r)),
            m = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === m?.id,
            g = (0, A.bG)([Z.A, Q.A], () => (p ? Q.A.getStatus() : Z.A.getStatus(r, n.guild_id))),
            f = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(r)),
            x = (0, A.yK)([Z.A, Q.A], () => (p ? Q.A.getActivities() : Z.A.getActivities(r, n.guild_id))),
            I = (0, A.bG)([$.A], () => $.A.getAnyStreamForUser(r)),
            E = (0, y.rm)(r),
            j = (0, A.bG)([W.A], () => W.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            T = s.useCallback(
                (e) => {
                    null != h &&
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(893190),
                                t.e(146652),
                                t.e(576432),
                                t.e(451162),
                                t.e(576665),
                                t.e(624198),
                                t.e(144472),
                                t.e(823427),
                                t.e(343116),
                                t.e(70515),
                                t.e(666939),
                                t.e(278544),
                            ]).then(t.bind(t, 202643));
                            return (t) => (0, l.jsx)(e, { ...t, user: h, guildId: n.guild_id, channel: n });
                        });
                },
                [h, n],
            ),
            N = s.useCallback(() => {
                if (null == h) return;
                let e = `@${es.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    L.A.startTyping(n.id));
            }, [h, n]),
            v = s.useCallback(
                (e) => {
                    (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: n.guild_id,
                            location: { section: eo.JJy.THREAD_MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [n.guild_id],
            ),
            S = (0, D.r)({ user: h, guildId: n.guild_id }),
            [R, O] = s.useState(!1);
        if (null == h) return null;
        let M = c?.premiumSince;
        return (0, l.jsx)(q.A, {
            targetElementRef: o,
            user: h,
            guildId: n.guild_id,
            channelId: n.id,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: N,
            shouldShow: R,
            onRequestClose: () => O(!1),
            children: (e) => {
                let { onClick: t, onMouseDown: i, ...s } = e;
                return (0, l.jsx)(ea.A, {
                    ref: o,
                    onContextMenu: T,
                    shouldAnimateStatus: eu,
                    user: h,
                    currentUser: m,
                    nick: c?.nick,
                    status: g,
                    activities: x,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: n,
                    guildId: n.guild_id,
                    isMobile: f,
                    selected: R,
                    applicationStream: I,
                    premiumSince: null == M ? null : new Date(M),
                    onClickPremiumGuildIcon: v,
                    itemProps: E,
                    lostPermissionTooltipText: j ? void 0 : z.intl.string(z.t["/QcoTz"]),
                    isOwner: _,
                    nameplate: S,
                    onClick: (e) => {
                        e.shiftKey ? N?.() : O((e) => !e);
                    },
                    onMouseDown: (e) => {
                        R ? e.stopPropagation() : i?.(e);
                    },
                    ...s,
                });
            },
        });
    }),
    eA = s.memo(function (e) {
        let { id: n, label: t, count: i, guildId: s } = e,
            r = (0, U.Xx)({ roleId: n, guildId: s, size: 16 });
        return n === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != r ? (0, l.jsx)(G.A, { className: ec.UT, ...r }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    em = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === eo.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(_.E, {
                          variant: "body-xs/semibold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(T.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(_.E, {
                          variant: "body-sm/normal",
                          color: "text-default",
                          className: ed.GA,
                          children: z.intl.string(z.t.Hsd8hC),
                      }),
                  ],
              })
            : null;
    });
function ep(e) {
    var n;
    let t,
        i,
        r,
        o,
        d,
        { channel: c, guild: h } = e,
        m = `members-${c.id}`,
        { analyticsLocations: p } = (0, P.Ay)(M.A.MEMBER_LIST),
        g = (function (e, n) {
            (0, H.Ay)(() => {
                n?.id != null && (0, F.Ey)(n.id, e, V.L);
            });
            let t = (0, A.bG)([B.A], () => (null != n ? B.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, A.cf)([W.A], () => ({
                    version: W.A.getMemberListVersion(e),
                    members: W.A.getMemberListSections(e),
                })),
                r = null == n,
                a = s.useMemo(() => {
                    if (r) return X;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: Y.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: Y.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, r]);
            return null != l ? a : X;
        })(c.id, h),
        f = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: x, listRef: I } =
            ((n = m),
            (t = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
            (i = s.useRef(null)),
            (r = s.useCallback(
                (e, n) => {
                    let t = i.current;
                    if (null == t) return;
                    let l = parseInt(n, 10),
                        [s, r] = t.getSectionRowFromIndex(l),
                        a = 42 * (0 === s && 0 === r);
                    t.scrollToIndex({
                        section: s,
                        row: r,
                        padding: a,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (o = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (d = s.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToBottom({
                            callback() {
                                requestAnimationFrame(() => setTimeout(e, 100));
                            },
                        });
                    }),
                [],
            )),
            {
                navigator: (0, j.Ay)({ id: n, setFocus: r, isEnabled: t, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        E = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        E)
    )
        return (0, l.jsx)(eg, { channel: c });
    let C = u().omit(x.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(P.f5, {
        value: p,
        children: (0, l.jsx)(y.hD, {
            navigator: x,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            v.OZ,
                            {
                                ref: I,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = g[n];
                                    return (0, l.jsx)(
                                        eA,
                                        { id: t.id, label: t.label, count: t.userIds.length, guildId: h.id },
                                        t.id,
                                    );
                                },
                                rowHeight: 42,
                                renderRow: (e) => {
                                    let { section: n, row: t } = e,
                                        { userIds: i, id: s } = g[n];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: s, userId: i[t], guildOwnerId: b },
                                        i[t],
                                    );
                                },
                                footerHeight: (e) => 80 * (g[e] === f && c.type === eo.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    g[e.section] === f ? (0, l.jsx)(em, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: g.map((e) => e.userIds.length),
                                fade: !0,
                                ...C,
                                ...e,
                            },
                            m,
                        ),
                    }),
            }),
        }),
    });
}
function eg(e) {
    let { channel: n } = e;
    return (0, l.jsxs)("div", {
        className: a()(ed.p$, ed.kL, ec.yg, ec.ML, ec.ol),
        children: [
            (0, l.jsx)(_.E, {
                className: ed.ks,
                variant: "body-xs/semibold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: ed.AI,
                        children: (0, l.jsx)(S.GroupIcon, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(en.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-sm/semibold",
                children: n.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(_.E, {
                className: ed.WO,
                variant: "body-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
var ef = t(738876),
    ex = t(456412),
    eI = t(432371),
    eE = t(475743),
    eC = t(933958),
    ey = t(164636),
    ej = t(293432),
    eb = t(811024),
    e_ = t(969151),
    eT = t(108959),
    eN = t(866665),
    ev = t(446576),
    eS = t(817281),
    eR = t(149468),
    eL = t(587837),
    eO = t(850891),
    eM = t(964404),
    eP = t(693409),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eU = t(309010),
    eG = t(795816),
    eF = t(685399),
    eH = t(216418),
    eV = t(620148),
    eB = t(732637),
    eW = t(104171),
    eY = t(47294),
    ez = t(594007),
    eX = t(16961),
    eq = t(73153),
    e$ = t(652934),
    eK = t(735168),
    eZ = t(5867),
    eQ = t(138017),
    eJ = t(715482),
    e0 = t(315502),
    e1 = t(218461),
    e2 = t(234320),
    e3 = t(248310);
function e9(e) {
    let { channelId: n, className: t, ...i } = e,
        r = s.useRef(null),
        a = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let n = (0, A.bG)([J.A], () => !(0, c.isEmpty)(J.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, A.cf)(
                    [e1.Ay],
                    () => ({ unreadCount: e1.Ay.getUnreadCount(e), mentionCount: e1.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let m = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [m];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        f = u > 0 ? u : d,
        x = f > 0;
    return (0, l.jsxs)("div", {
        className: e3.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: m,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eQ.ChevronLargeUpIcon : eJ.ChevronLargeDownIcon,
                themeable: !0,
                className: t,
                ...i,
            }),
            x ? (0, l.jsx)(e0.A, { hasMentions: u > 0, truncatedCount: f > 99 ? "99+" : f, className: e3.qS }) : null,
        ],
    });
}
var e6 = t(538303);
let e5 = eW.DN.SIZE_32,
    e7 = { [eZ.E8.NO_CHAT]: e6.Oo, [eZ.E8.RESIZABLE]: e6.Ig };
function e8(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eV.A)(),
        o = (0, A.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        m = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        f = g !== eZ.E8.NO_CHAT,
        [I, E] = s.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        C = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        y = s.useRef(null),
        [j, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == y.current) return;
        let e = new ResizeObserver(() => {
            b({ width: y.current?.clientWidth ?? 0, height: y.current?.clientHeight ?? 0 });
        });
        return (e.observe(y.current), () => e.disconnect());
    }, []);
    let T = j.width / Math.max(j.height, 1) < eZ.B5,
        N = 0,
        v = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = j.width,
            n = j.height;
        T
            ? ((n = j.width / eZ.B5) > j.height && (e = (n = j.height) * eZ.B5), (v = (j.height - n) / 2))
            : ((e = Math.min(j.height * eZ.B5)) > j.width && (n = (e = j.width) / eZ.B5), (N = (j.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        L = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        M = (0, A.yK)(
            [K.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => K.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = s.useMemo(() => {
            let e = new Map();
            return (
                M.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [M]),
        D = (function (e, n, t) {
            let i = (0, eE.Ay)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !O.Ay.useReducedMotion && (l || r);
            return s.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != n && null != t ? { ...i, minHeight: 200, maxHeight: t, height: n } : i;
            }, [o, e, t, n]);
        })(f, I, n),
        k = (0, eX.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e5), alt: t, className: e6.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (w = Array.from(R.embeddedActivity.userIds)
                .map((e) => ee.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(x.N, {
            theme: eo.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: a()(e6.iE, e7[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e6.lq,
                            children: [
                                f
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e6.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: e6.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e6.ht, { [e6.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: v, paddingBottom: v },
                                    ref: y,
                                    children: (0, l.jsx)(eB.A, { className: e6.pU, embedId: (0, ez.A)(t.id, r.id) }),
                                }),
                                null != L
                                    ? (0, l.jsxs)("div", {
                                          className: e6.qr,
                                          children: [
                                              (0, l.jsx)(eW.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e5,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e6.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e6.qi,
                                                          children: [
                                                              (0, l.jsx)(e9, { channelId: L }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: m,
                                                                  iconComponent: ev.MinimizeIcon,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e6.pt,
                                                          children: (0, l.jsx)(eD.A, {
                                                              applicationId: r.id,
                                                              location: t,
                                                              centerButton: !0,
                                                              color: "disconnect",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              k
                                                  ? (0, l.jsx)(ek.A, {
                                                        popoutOpen: !1,
                                                        onOpenPopout: () => {
                                                            ((0, eR.zV)(eo.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                                (0, eY.A)({
                                                                    onConfirm: () => {
                                                                        var e, n;
                                                                        return (
                                                                            (e = r.id),
                                                                            (n = d ?? null),
                                                                            (0, eK.A)({
                                                                                windowKey: eo.MLl.ACTIVITY_POPOUT,
                                                                                openWindow: () =>
                                                                                    eq.h.dispatch({
                                                                                        type: "ACTIVITY_POPOUT_WINDOW_OPEN",
                                                                                    }),
                                                                                onWindowOpened: () =>
                                                                                    (0, eG.gk)(
                                                                                        eZ.Gd.ACTIVITY_POPOUT_WINDOW,
                                                                                    ),
                                                                                refreshProxyTicket: () =>
                                                                                    null != n
                                                                                        ? (0, eG.od)(e, n)
                                                                                        : Promise.resolve(!0),
                                                                                onRefreshFailed: e$.G,
                                                                            })
                                                                        );
                                                                    },
                                                                }));
                                                        },
                                                        onClosePopout: () => {},
                                                    })
                                                  : null,
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        f && null != n
                            ? (0, l.jsx)(eL.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), E(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), C(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e4(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, ey.cf)([eC.Ay], () => {
            let e = eC.Ay.getConnectedActivityLocation(),
                n = eC.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: eC.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, ey.bG)([ej.A], () => ej.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, eT.A)(i)
        ? null
        : (0, l.jsx)(e8, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var ne = t(90804),
    nn = t(748975),
    nt = t(323073),
    ni = t(964167),
    nl = t(483510),
    ns = t(976860);
function nr(e) {
    let { channel: n } = e;
    return (0, l.jsx)(f.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, ns.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nl.ci)(e, n.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var na = t(991690),
    no = t(70688),
    nd = t(995102),
    nc = t(288104),
    nu = t(857071),
    nh = t(233470),
    nA = t(260498),
    nm = t(95264),
    np = t(914315),
    ng = t(258576);
function nf(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, np.A)(n, "ConjureAppChannelRemixButton"),
        r = (0, A.bG)([nu.A], () => null != t && nu.A.isLurking(t), [t]),
        a =
            (s.useEffect(() => {
                (0, nh.b8)();
            }, []),
            (0, A.bG)([nA.Ay], () => {
                let e = nA.Ay.getMaxProjects();
                return null != e && nA.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - nA.Ay.getOwnedProjects().length)
                    : null;
            }));
    return null == i || null == t || r || 0 === a
        ? null
        : (0, l.jsx)(f.$, {
              variant: "secondary",
              size: "sm",
              text: z.intl.string(ng.default.XWgAfc),
              onClick: () => (0, nm.A)(i, t),
          });
}
var nx = t(766367),
    nI = t(246338),
    nE = t(947162),
    nC = t(672929),
    ny = t(58736),
    nj = t(534890);
function nb(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, A.cf)(
                [e1.Ay],
                () => ({
                    hasUnread: null != e && e1.Ay.hasUnread(e),
                    mentionCount: null != e ? e1.Ay.getMentionCount(e) : 0,
                }),
                [e],
            );
            return s.useMemo(() => {
                if (0 === t) {
                    if (!n) return;
                    return { type: "unread", position: "bottom" };
                }
                return { type: "important", position: "bottom", text: String(t) };
            }, [t, n]);
        })(n),
        i = s.useRef(null),
        r = s.useCallback(() => i.current?.focus(), []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, nl.HP)(n),
        o = (0, A.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(ny.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nj.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, nl.m)(n)
                : ((0, nl.ci)(o, n),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: n }), 0));
        },
        selected: a,
        badge: t,
    });
}
var n_ = t(799704),
    nT = t(967198);
function nN(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([n_.Ay], () => n_.Ay.getSection(n)),
        i = (0, A.bG)([nT.A], () => nT.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(ny.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.GroupIcon,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                E.A.toggleMembersSection());
        },
        selected: s,
    });
}
var nv = t(187360),
    nS = t(621466),
    nR = t(453903),
    nL = t(477782),
    nO = t(12470),
    nM = t(811893),
    nP = t(663417),
    nD = t(729475),
    nk = t(265872),
    nw = t(165862),
    nU = t(885574),
    nG = t(365199),
    nF = t(586486),
    nH = t(130332),
    nV = t(625180),
    nB = t(156548),
    nW = t(646973),
    nY = t(100663),
    nz = t(475815),
    nX = t(615606),
    nq = t(165610);
function n$(e) {
    let { channel: n, isConjured: t, notificationItems: i } = e,
        [r, a] = s.useState(!1),
        o = s.useRef(null),
        d = (0, nF.A)(n, "app_channel_header"),
        c = (0, nX.q)(n)?.bot,
        u = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        h = (0, nC.A)(n.application_id ?? null, u),
        A = (0, nq.x1)(h) && h.data.proxyTicketRefreshing,
        m = (0, nH.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        p = null != m.edit,
        { canPopout: g, isPoppedOut: f, popOut: x, popIn: I } = (0, nW.A)(h),
        E = s.useCallback(() => {
            null == h || A || nV.A.refreshProxyTicket(h.id);
        }, [h, A]),
        C = z.intl.string(z.t["UKOtz+"]),
        y = (0, nq.x1)(h);
    if (!y && null == c && null == d && !p && null == i) return null;
    function j() {
        return y
            ? (0, l.jsx)(nL.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: E,
                  icon: nP.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nP.RefreshIcon },
                  disabled: A,
              })
            : null;
    }
    function b() {
        let e = (0, nq.x1)(h) && !f ? (0, nB.fl)(h.id) : null;
        return null != e && (0, nz.Ub)(e)
            ? (0, l.jsx)(nL.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nD.FullscreenEnterIcon,
                  leadingAccessory: { type: "icon", icon: nD.FullscreenEnterIcon },
                  action: () => (0, nz.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nk.Y, {
        targetElementRef: o,
        shouldShow: r,
        animation: nk.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nS.vq)(document.activeElement, HTMLIFrameElement)) return nR.oU;
            a(!1);
        },
        renderPopout: (e) => {
            let { closePopout: s } = e;
            return (0, l.jsxs)(nw.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-header-overflow",
                onClose: s,
                onSelect: s,
                "aria-label": z.intl.string(z.t.Xm41aV),
                children: [
                    t
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  y
                                      ? (0, l.jsxs)(nL.rX, {
                                            children: [
                                                y
                                                    ? f
                                                        ? (0, l.jsx)(nL.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: nO.WindowReturnIcon,
                                                              leadingAccessory: {
                                                                  type: "icon",
                                                                  icon: nO.WindowReturnIcon,
                                                              },
                                                              action: I,
                                                          })
                                                        : g
                                                          ? (0, l.jsx)(nL.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nM.WindowLaunchIcon,
                                                                leadingAccessory: {
                                                                    type: "icon",
                                                                    icon: nM.WindowLaunchIcon,
                                                                },
                                                                action: x,
                                                            })
                                                          : null
                                                    : null,
                                                b(),
                                                m.showOverlay,
                                            ],
                                        })
                                      : null,
                                  y || p ? (0, l.jsxs)(nL.rX, { children: [m.edit, m.devicePermissions, j()] }) : null,
                              ],
                          })
                        : y
                          ? (0, l.jsxs)(nL.rX, {
                                children: [
                                    b(),
                                    j(),
                                    (0, nq.x1)(h)
                                        ? (0, l.jsx)(nL.Dr, {
                                              id: "close-app",
                                              label: z.intl.string(z.t.VkMnR2),
                                              action: () => (0, nE.A)(h.id),
                                              icon: no.DoorExitIcon,
                                              leadingAccessory: { type: "icon", icon: no.DoorExitIcon },
                                          })
                                        : null,
                                ],
                            })
                          : null,
                    null != i ? (0, l.jsx)(nL.rX, { children: i }) : null,
                    null != c || null != d
                        ? (0, l.jsxs)(nL.rX, {
                              children: [
                                  null != c
                                      ? (0, l.jsx)(nL.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nY.openUserProfileModal)({
                                                    userId: c.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nU.CircleInformationIcon },
                                        })
                                      : null,
                                  d,
                              ],
                          })
                        : null,
                ],
            });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: o,
                onClick: () => a((e) => !e),
                tooltip: t ? null : C,
                icon: nG.MoreHorizontalIcon,
                "aria-label": C,
                selected: t,
            });
        },
    });
}
function nK(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: s, popIn: r } = (0, nW.A)(n);
    return (0, nq.x1)(n)
        ? i
            ? (0, l.jsx)(ny.In, {
                  icon: nO.WindowReturnIcon,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: r,
              })
            : t
              ? (0, l.jsx)(ny.In, {
                    icon: nM.WindowLaunchIcon,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: s,
                })
              : null
        : null;
}
function nZ(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nC.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nK, { frame: i });
}
function nQ(e) {
    let { frame: n } = e;
    if (!(0, nq.x1)(n)) return null;
    let t = z.intl.string(z.t.VkMnR2);
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: t,
        "aria-label": t,
        onClick: () => (0, nE.A)(n.id),
    });
}
function nJ(e) {
    let { channel: n, isLurking: t } = e,
        i = s.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        r = (0, nC.A)(n.application_id ?? null, i),
        a = (0, nd.A)(n),
        o = (0, nc.A)(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nQ, { frame: r }),
            (0, l.jsx)(nf, { channel: n }),
            (0, l.jsx)(nx.A, { frame: r }),
            (0, l.jsx)(nN, { channelId: n.id }),
            (0, l.jsx)(nb, { channelId: n.id }),
            (0, l.jsx)(n$, {
                channel: n,
                isConjured: !0,
                notificationItems: t ? null : (0, l.jsxs)(l.Fragment, { children: [a, o] }),
            }),
        ],
    });
}
function n0(e) {
    let { channel: n, isLurking: t } = e;
    return (0, nI.w$)(n, "AppChannelHeaderActions")
        ? (0, l.jsx)(nJ, { channel: n, isLurking: t })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nZ, { channel: n }),
                  t ? null : (0, l.jsx)(nv.A, { channel: n }),
                  (0, l.jsx)(nN, { channelId: n.id }),
                  (0, l.jsx)(nb, { channelId: n.id }),
                  (0, l.jsx)(n$, { channel: n, isConjured: !1 }),
              ],
          });
}
var n1 = t(128376);
let n2 = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var n3 = t(568598),
    n9 = t(628983),
    n6 = t(164617),
    n5 = t(355622),
    n7 = t(689874),
    n8 = t(631828),
    n4 = t(627363),
    te = t(91242),
    tn = t(499466);
function tt(e) {
    let { channel: n } = e,
        t = (0, A.bG)([te.A], () => te.A.getFramesForChannel(n.id).find((e) => (0, nq.x1)(e)), [n.id]),
        i = (0, n4.YY)(t?.applicationId).data,
        s = (0, tn.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(ng.default["/TlGcK"]);
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nE.A)(t.id),
    });
}
var ti = t(828488),
    tl = t(268218),
    ts = t(726249),
    tr = t(334738),
    ta = t(208882),
    to = t(938764),
    td = t(519480),
    tc = t(352123),
    tu = t(302125),
    th = t(130696);
let tA = function (e) {
    let { guild: n, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.mM)(async () => {
                let { default: e } = await Promise.all([
                    t.e(683621),
                    t.e(711162),
                    t.e(401425),
                    t.e(258398),
                    t.e(159957),
                    t.e(658216),
                    t.e(728136),
                    t.e(680029),
                    t.e(635864),
                    t.e(447864),
                    t.e(794704),
                    t.e(119454),
                ]).then(t.bind(t, 137811));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        guild: n,
                        source: eo.PE1.HUB_DIRECTORY,
                        analyticsLocation: { section: eo.JJy.HUB_WELCOME_CTA },
                    });
            });
        }, [n]);
    return (0, l.jsxs)("div", {
        className: th.h2,
        children: [
            (0, l.jsx)("img", { className: th.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: th._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "body-md/normal", className: th.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(tu.E, {
                      className: th.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(tu.E, {
                className: th.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tm = t(683438),
    tp = t(516521),
    tg = t(761508),
    tf = t(765671),
    tx = t(23815),
    tI = t(939249),
    tE = t(22231),
    tC = t(778858),
    ty = t(573435),
    tj = t(101555),
    tb = t(682163),
    t_ = t(714991),
    tT = t(776231),
    tN = t(345942),
    tv = t(71393),
    tS = t(486020),
    tR = t(537975),
    tL = t(682557),
    tO = t(524058);
let tM = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(tI.D, {
        onClick: n,
        className: tO.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                className: tO.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tP(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tc.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tO.fc, { [tO.QX]: i }),
        children: (0, l.jsxs)(tj.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tj.$n, {
                              onClick: () => {
                                  (0, p.mM)(async () => {
                                      let { default: e } = await Promise.all([t.e(533651), t.e(988869)]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tE.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tO.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tL.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tj.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nG.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tO.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tD = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, A.bG)([tv.A], () => tv.A.getGuild(n.guildId)),
        o = tS.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tT.mZ)() }),
        d = tS.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        c = z.intl.string(z.t.VJlc0S);
    return (
        a && (c = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tO.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tO.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tO.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: tO.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tO.$f,
                            children: (0, l.jsx)(ty.Ay, {
                                mask: ty.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tO.SA,
                                    children: (0, l.jsx)(tb.Ay, {
                                        className: tO.rZ,
                                        iconSrc: d,
                                        guild: (0, tR.xi)(n),
                                        size: tb.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tO.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tO.DD,
                            children: [
                                (0, l.jsx)(t_.A, { className: tO.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tO.J5,
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tO.h_,
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tO.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tO.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tO.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: n.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != n.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: tO.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tO.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t.zRl6XR, {
                                                    count: n.approximateMemberCount,
                                                }),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: tO.PD,
                            children: (0, l.jsx)(f.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: async function () {
                                    r(!0);
                                    try {
                                        a
                                            ? (0, tN.u)(n.guildId)
                                            : await tC.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
                                    } finally {
                                        r(!1);
                                    }
                                },
                                text: c,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(tP, { entry: n }),
            ],
        })
    );
});
var tk = t(946116),
    tw = t(844086),
    tU = t(770679);
function tG(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tf.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: tU.wx,
        children: [
            (0, l.jsx)("div", { className: tU.y2, children: (0, l.jsx)(tx.A, {}) }),
            (0, l.jsx)("div", {
                className: tU.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tU.VW, { [tU.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tU.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tU.MT,
                            children: (0, l.jsx)(tm.I, {
                                query: n,
                                "aria-label": z.intl.string(z.t.nL2wKD),
                                placeholder: z.intl.string(z.t.nL2wKD),
                                onChange: t,
                                onClear: i,
                                onKeyDown: s,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
let tF = function (e) {
    let {
        channel: n,
        directoryEntries: t,
        handleCreateOrAddGuild: i,
        searchQuery: r,
        setSearchQuery: a,
        handleClearSearch: o,
        handleSearchKeyPress: d,
        currentCategoryId: c,
        handleSelectCategory: u,
        categoryCounts: h,
        allEntriesCount: A,
        isLoading: m,
    } = e;
    return (0, l.jsx)("div", {
        className: tw.$$,
        children: (0, l.jsxs)(tp.Gt, {
            className: tw.XG,
            children: [
                (0, l.jsx)(tG, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tp.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tg.V, {
                        className: tU.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tg.V.Item,
                                { className: tU.YU, id: tk.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${A})` },
                                tk.mU.ALL,
                            ),
                            (0, tk.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tg.V.Item,
                                    { className: tU.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                m && null == t
                    ? (0, l.jsx)(g.y, { className: tw.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "body-md/semibold",
                                                className: tU.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tw.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tD, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tM, { onClick: i }) : null,
                                          ],
                                      }),
                                  ],
                              },
                              n,
                          ),
                      ),
            ],
        }),
    });
};
var tH = t(370876),
    tV = t(28863),
    tB = t(95362),
    tW = t(792831),
    tY = t(211862);
let tz = function (e) {
    let n,
        {
            searchQuery: t,
            setSearchQuery: i,
            mostRecentQuery: s,
            handleClearSearch: r,
            handleSearchKeyPress: a,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) n = (0, l.jsx)("div", { className: tw.$$, children: (0, l.jsx)(g.y, { className: tw.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tV.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tY.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "body-md/normal", color: "text-default", className: tY.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tw.vY, children: d.map((e) => (0, l.jsx)(tD, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tw.$$,
        children: (0, l.jsxs)(tB.Ar, {
            className: tw.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tY.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tY.Dr,
                            children: [
                                (0, l.jsx)(tI.D, {
                                    onClick: r,
                                    className: tY.UE,
                                    children: (0, l.jsx)(tW.A, { direction: tW.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tY.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tm.I, {
                            query: t,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
                            onChange: i,
                            onClear: r,
                            onKeyDown: a,
                        }),
                    ],
                }),
                n,
            ],
        }),
    });
};
var tX = t(650583);
let tq = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, A.cf)([td.A], () => {
            let e = td.A.getCurrentCategoryId(n.id),
                t = td.A.getDirectoryEntries(n.id, e === tk.mU.ALL ? null : e),
                i = td.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: td.A.getDirectoryAllEntriesCount(n.id),
                isLoading: td.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = e1.Ay.lastMessageId(n.id);
            null != e &&
                (0, tr.I_)(
                    n.id,
                    { object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: eo.btD.ACK_AUTOMATIC },
                    !0,
                    !0,
                    e,
                );
        },
        [n.id],
    );
    let u = s.useMemo(
            () =>
                null != a
                    ? (function (e, n) {
                          if (n !== tk.mU.ALL) return [{ entries: (0, tH._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tH.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tH.DN)(s)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: f,
        } = (0, A.cf)([to.A], () => {
            let { mostRecentQuery: e, fetching: t } = to.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: to.A.getSearchResults(n.id, e) };
        }),
        [x, I] = s.useState(h),
        E = "" !== h,
        C = { mostRecentQuery: h },
        y = s.useRef(C);
    (s.useEffect(() => {
        y.current = C;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = y.current;
            (ta.Yc(n.id), ta.YS(n.id), I(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let j = (0, tc.b)(n),
        b = s.useMemo(
            () =>
                j
                    ? () => {
                          (0, p.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e(122326),
                                  t.e(533651),
                                  t.e(538288),
                                  t.e(419580),
                                  t.e(197804),
                                  t.e(756856),
                                  t.e(118822),
                              ]).then(t.bind(t, 668822));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: r === tk.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [j, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== x.trim().length &&
            e.key === tX.dh.ENTER &&
            (ta.Se(n.id, x),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function T() {
        (I(""), ta.BA(n.id));
    }
    return E
        ? (0, l.jsx)(tz, {
              searchQuery: x,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: T,
              handleCreateOrAddGuild: b,
              searchResults: f,
              searchFetching: m,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: tw.$$, children: (0, l.jsx)(g.y, { className: tw.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tw.$$, children: (0, l.jsx)(tA, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tF, {
                  channel: n,
                  searchQuery: x,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: T,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      ta.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var t$ = t(826673),
    tK = t(93055),
    tZ = t(47167),
    tQ = t(5206),
    tJ = t(353428),
    t0 = t(288254),
    t1 = t(873614),
    t2 = t(649852),
    t3 = t.n(t2),
    t9 = t(789645),
    t6 = t(163126),
    t5 = t(182061),
    t7 = t(886393),
    t8 = t(307623),
    t4 = t(660273),
    ie = t(804006),
    it = t(707792),
    ii = t(41402),
    il = t(271456),
    is = t(200273),
    ir = t(565846),
    ia = t(57907),
    io = t(375500),
    id = t(707653),
    ic = t(50268),
    iu = t(378570),
    ih = t(162199),
    iA = t(713608),
    im = t(473503),
    ip = t(474196),
    ig = t(267102),
    ix = t(474397),
    iI = t(486974),
    iE = t(964079);
function iC(e) {
    let { channel: n } = e,
        t = s.useContext(et.Ig),
        i = (0, ig.aL)(),
        r = z.intl.string(iE.default["Beo/7v"]),
        { firstMessage: a } = (0, im.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(ny.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, iu.iN)(n.id),
                      (0, ix.A)(),
                      (0, ip.z)(n.guild_id, d, n.id, {
                          modViewPanel: iI.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: iA.ModerationIcon,
              "aria-label": r,
          })
        : null;
}
var iy = t(780338),
    ij = t(782603),
    ib = t(607508),
    i_ = t(914703),
    iT = t(37411);
function iN(e) {
    let { channel: n } = e,
        t = (0, ib.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, A.bG)([nu.A], () => null != n.guild_id && nu.A.isLurking(n.guild_id));
    if (
        (s.useEffect(() => {
            function e() {
                return r(!0);
            }
            return (
                ei._.subscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e),
                () => {
                    ei._.unsubscribe(eo.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e);
                }
            );
        }, []),
        o)
    )
        return null;
    let d = z.intl.string(z.t.h850Ss);
    return (0, l.jsx)(nk.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nk.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(i_.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iT.CP.NO_MESSAGES ? iy.BellSlashIcon : ij.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iv = t(747926);
function iS(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nk.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nk.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iR, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nG.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iR(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t4.A)(n, "Sidebar Overflow"),
        r = (0, ie.A)(n, "Sidebar Overflow"),
        a = (0, ii.A)(n),
        o = (0, ia.A)(n),
        d = (0, io.A)(n),
        c = (0, t5.A)(n),
        u = (0, it.A)(n),
        h = (0, ir.A)(n.id),
        A = (0, is.A)(n),
        m = (0, t8.A)(n),
        p = (0, t7.A)(n),
        g = (0, ic.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        f = (0, id.A)(n),
        x = (0, il.A)(n),
        I = (0, t6.$)(1e3);
    function E() {
        (0, iu.iN)(n.id);
    }
    function C(e) {
        let t = t3()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            I.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nw.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nL.rX, {
                children: [s, (0, l.jsx)(nL.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(nL.rX, { children: [o, d] }),
            (0, l.jsxs)(nL.rX, { children: [A, a, h, x] }),
            (0, l.jsxs)(nL.rX, {
                children: [
                    (0, l.jsx)(nL.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nM.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nM.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(nL.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nM.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nM.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nL.rX, { children: [f, c, u, m] }),
            (0, l.jsx)(nL.rX, { children: r }),
            (0, l.jsxs)(nL.rX, { children: [p, g] }),
        ],
    });
}
function iL(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(ny.Ay.Icon, {
            icon: t9.XSmallIcon,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iv.xu)((0, ih.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iN, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(iC, { channel: n }) : null,
                  (0, l.jsx)(iS, { channel: n }),
                  i,
              ],
          });
}
var iO = t(31717),
    iM = t(853742),
    iP = t(85190);
function iD(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, A.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, A.bG)([tv.A], () => tv.A.getGuild(i?.getGuildId())),
        o = (0, tZ.Ay)(i),
        d = (0, t0.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iM.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(t1.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iL, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.A, { channel: i, draftType: iO.C.ChannelMessage }),
            (0, l.jsx)(ny.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tJ.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(491001),
                                t.e(965789),
                                t.e(420105),
                            ]).then(t.bind(t, 949488));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, ns.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iP.T,
                children: (0, l.jsx)(tQ.A, { channel: i, guild: a, chatInputType: n5.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var ik = t(925166),
    iw = t(76268),
    iU = t(605117),
    iG = t(857253),
    iF = t(872363);
let iH = function (e, n) {
    eq.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iV = t(561446),
    iB = t(300233),
    iW = t(499211),
    iY = t(727419),
    iz = t(529942),
    iX = t(739455),
    iq = t(709017);
function i$(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iq.t7,
        children: (0, l.jsxs)("div", {
            className: iq.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iq.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "body-sm/normal",
                            className: iq.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iq.__invalid_button,
                            children: (0, l.jsx)(f.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iz.rf)(n),
                                        iY.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iX.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iK = t(599941),
    iZ = t(29385),
    iQ = t(950344),
    iJ = t(316369),
    i0 = t(31637),
    i1 = t(325348);
function i2(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iZ.e)({ guildId: n, channelId: t }),
        r = (0, iK.uk)(n),
        a = (0, iK.Tq)(n),
        o = (0, A.bG)([tv.A], () => tv.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tZ.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iQ.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: i1.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: i1.__invalid_spinner }),
          })
        : (0, l.jsxs)(tB.Ar, {
              className: i1.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: i1.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: i1.Lv,
                      variant: "body-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(iJ.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  i0.A,
                                  {
                                      guildId: n,
                                      listingId: e.id,
                                      groupListingId: h[e.id],
                                      analyticsLocation: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
                                  },
                                  e.id,
                              ),
                          ),
                  }),
              ],
          });
}
var i3 = t(256331),
    i9 = t(856896);
function i6() {
    let e = (0, A.bG)([i3.A], () => i3.A.isHighlightingEnabled()),
        n = e ? "Hide Highlights" : "Highlight Conversations";
    return (0, l.jsx)(ny.In, {
        onClick: i9.Eg,
        tooltip: n,
        icon: nj.ChatIcon,
        iconSize: 20,
        "aria-label": n,
        role: "switch",
        "aria-checked": e,
        selected: e,
    });
}
var i5 = t(287074),
    i7 = t(306788),
    i8 = t(863922),
    i4 = t(391820),
    le = t(521732);
function ln(e) {
    let { channel: n } = e,
        t = (0, nt.ni)(n),
        i = (0, A.bG)([i4.A], () => i4.A.shouldShowTopicsBar());
    return (0, l.jsx)(ny.Ay.Icon, {
        icon: i7.TopicsIcon,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: le.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, i8.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var lt = t(947094),
    li = t(919577),
    ll = t(207777),
    ls = t(422844),
    lr = t(435470),
    la = t(892110),
    lo = t(45494);
function ld(e) {
    let { channel: n } = e,
        t = (0, lr.S4)(n),
        i = (0, A.bG)([lt.A], () => lt.A.hasHidden(n.id)),
        s = (0, la.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, ls.R)(n.id),
        d = (0, A.bG)(
            [ll.A, lo.A],
            () => !!(ll.A.getThreadIds(n.id, r, a, o).length > 0) || !!(lo.A.getThreads(n.id, r, a, o).length > 0),
            [n.id, r, a, o],
        ),
        c = n.isMediaChannel();
    if (!t || s || (c && d)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(ny.In, {
        tooltip: u,
        icon: nU.CircleInformationIcon,
        onClick: function () {
            return li.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lc = t(290136),
    lu = t(975571),
    lh = t(657371);
function lA() {
    let e = z.intl.string(lh.default.pdipXI);
    return (0, l.jsx)(ny.In, {
        tooltip: e,
        icon: lc.CircleQuestionIcon,
        onClick: function () {
            window.open(lu.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lm = t(742589),
    lp = t(43105),
    lg = t(428689),
    lf = t(978940),
    lx = t(387755),
    lI = t(597798),
    lE = t(641703),
    lC = t(384059),
    ly = t(379848),
    lj = t(753727),
    lb = t(625075),
    l_ = t(222692),
    lT = t(442353),
    lN = t(470710),
    lv = t(186111),
    lS = t(988468),
    lR = t(994500),
    lL = t(977997),
    lO = t(487887),
    lM = t(49999),
    lP = t(731854);
class lD extends s.PureComponent {
    iconRef = s.createRef();
    componentDidMount() {
        ei._.subscribe(eo.jej.CALL_START, this.handleVoiceClick);
    }
    componentWillUnmount() {
        ei._.unsubscribe(eo.jej.CALL_START, this.handleVoiceClick);
    }
    renderVideoCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                mode: a,
                isProvisional: o,
            } = this.props;
        if (n || (t && a === eo._Of.VOICE)) return null;
        let d = r.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lS.Ay.supports(lP.O5.VIDEO)
                  ? s
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : lb.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(ny.Ay.Icon, { icon: lg.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: s,
                channel: r,
                dismissibleContentTypes: a,
                isProvisional: o,
            } = this.props;
        if (n) return null;
        let d = r.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = d ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : s
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = t
                      ? d
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : d
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(ny.Ay.Icon, {
            ref: this.iconRef,
            icon: lf.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(ly.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lp.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lO.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lM.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(s.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, n) => {
        let { channel: t, notFriend: i, appContext: l } = this.props,
            s = i ? t.getRecipientId() : null;
        function r() {
            return (
                (0, lC.lO)(M.A.CHANNEL_HEADER, n ? lC.OP.START_VIDEO_CALL : lC.OP.START_CALL, t.id),
                lx.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s)
            );
        }
        n ? (0, lT.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        ((0, lC.lO)(M.A.CHANNEL_HEADER, e ? lC.OP.JOIN_VIDEO_CALL : lC.OP.JOIN_CALL, this.props.channel.id),
            lI.default.selectVoiceChannel(this.props.channel.id, e));
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lM.i.AUTO }),
            n)
        );
        else if (t) return this.handleJoinCall(!1);
        else return this.handleStartCall(e, !1);
    };
    handleStartVideoCall = (e) => {
        this.handleStartCall(e, !0);
    };
    handleJoinVideoCall = () => {
        let { appContext: e } = this.props,
            n = () => this.handleJoinCall(!0);
        (0, lT.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, l_.A)();
    };
}
function lk(e) {
    let { channel: n } = e,
        t = (0, lj.A)(),
        i = (0, A.bG)([n9.A], () => n9.A.getMode(n.id)),
        s = (0, A.bG)([lL.A], () => lL.A.isInChannel(n.id)),
        r = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, A.cf)([lN.A], () => ({
            callActive: lN.A.isCallActive(n.id),
            callUnavailable: lN.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([lR.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lR.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lR.A.isBlocked(d),
        })),
        h = (0, A.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, ig.Us)(),
        g = [],
        f = (0, lE.A)(n.id),
        x = (0, A.bG)([lv.A], () => lv.A.hasLayers());
    return (f && !x && g.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lD, {
              channel: n,
              mode: i,
              inCall: s,
              callActive: a,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: p,
              dismissibleContentTypes: g,
              useReducedMotion: r,
          });
}
var lw = t(753190),
    lU = t(765178),
    lG = t(231483),
    lF = t(544231),
    lH = t(338510),
    lV = t(151119),
    lB = t(278941),
    lW = t(665909),
    lY = t(327337);
let lz = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lH.u)(n.id),
        r = (0, lV.S)(n.id),
        a = (0, lB.e)(n.id),
        o = (0, p.Rv)(),
        d = (0, A.bG)([lv.A], () => lv.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, m] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lU.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lF.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lW.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lW.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lU.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lF.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lW.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lW.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        s.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lF.xi)(n.id, [a.id]),
            null != i &&
                ((0, p.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e(456510),
                            t.e(506627),
                            t.e(770940),
                            t.e(302033),
                            t.e(120884),
                        ]).then(t.bind(t, 556127));
                        return (t) => {
                            let { onClose: s, transitionState: r } = t;
                            return (0, l.jsx)(e, {
                                otherUserId: n.getRecipientId(),
                                channelId: n.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: s,
                                transitionState: r,
                            });
                        };
                    },
                    { modalKey: lY.V },
                ),
                (0, lW._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lW.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(ny.Ay.Icon, {
                  icon: lG.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lX = t(262763),
    lq = t(406704),
    l$ = t(576705);
let lK = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, lj.A)(),
        i = (0, A.bG)([lL.A], () => lL.A.isInChannel(n.id)),
        r = (0, A.bG)([lL.A], () => !u().isEmpty(lL.A.getVoiceStatesForChannel(n.id))),
        a = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iW.A)(n.id),
        d = (0, lq.Id)(n),
        { enabled: c } = lq.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lX.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [n, i, o]);
    return (s.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(eo.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(eo.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !i && a && d && n.isVocalThread())
        ? (0, l.jsx)(ny.Ay.Icon, {
              icon: lf.PhoneCallIcon,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lZ = t(812991),
    lQ = t(741534),
    lJ = t(527212);
function l0() {
    let [e, n] = (0, s.useState)(window.innerWidth >= 1132);
    return (
        (0, s.useEffect)(() => {
            function e() {
                n(window.innerWidth >= 1132);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        e
    );
}
function l1(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([n_.Ay], () => n_.Ay.getSection(n.id, n?.isDM())),
        s = (0, lJ.Ay)(n.getRecipientId()),
        r = l0(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(ny.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lZ.UserCircleStatusIcon,
        onClick: function () {
            ((0, lQ.am)({ displayProfile: s, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let l2 = {};
class l3 extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            l2[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = l2[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return l2;
    }
}
let l9 = new l3(eq.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = l2[t];
        return null == i ? ((l2[t] = new Set()), l2[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != l2[n.id] && !n.unavailable && (delete l2[n.id], !0);
    },
});
var l6 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l5 = t(376943),
    l7 = t(394953),
    l8 = t(941504),
    l4 = t(683063),
    se = t(403581),
    sn = t(241541),
    st = t(709066),
    si = t(87664),
    sl = t(247676),
    ss = t(695526),
    sr = t(927813),
    sa = t(812020),
    so = t(945810);
let sd = (0, so.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sc = t(46653),
    su = t(851746),
    sh = t(103411);
function sA() {
    let e = (0, sh.m)(),
        n = (0, A.bG)([su.A], () => su.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, A.bG)([sc.default], () => sc.default.getId()),
    };
}
var sm = t(315629),
    sp = t(610709),
    sg = t(303682),
    sf = t(224370),
    sx = t(544879);
function sI(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: s = z.intl.string(z.t["DMie/y"]),
            body: r = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(n);
    return (0, l.jsxs)(sm.h, {
        color: "nitro-pink",
        className: a()(sf.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sf.lj,
                children: [
                    (0, l.jsx)("img", { className: sf.Dp, src: sx.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sf.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-xs/semibold",
                                color: "text-default",
                                className: sf.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                className: sf.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tI.D, {
                        className: sf.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lM.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(t9.XSmallIcon, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sf.v0,
                children: (0, l.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lM.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sp.jM)({
                                  startingScreen: sg.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sE = t(349420);
let sC = { cooldownDurationMs: 60 * sr.A.Millis.DAY };
function sy(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: sd.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sA(),
                l = (0, A.bG)(
                    [lR.A, ee.default, sa.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lR.A.isBlockedOrIgnored(e)) return !1;
                            let t = sa.A.getUserAffinity(e);
                            return (
                                null != t &&
                                null != t.communicationRank &&
                                t.communicationRank <= 20 &&
                                null == n.premiumType
                            );
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(ly.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sC,
        groupName: lM.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sI, {
                      className: sE.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sj = t(403362);
t(696101);
let sb = [],
    s_ = er.Ay.getEnableHardwareAcceleration();
function sT(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, A.bG)([J.A], () => null != J.A.getTypingUsers(i.id)[n.id]),
        d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(n.id)),
        u = (0, A.bG)([lR.A], () => lR.A.getNickname(n.id)),
        h = (0, si.A)(n.id),
        m = s.useRef(null);
    function p(e) {
        (0, C.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e(463317),
                t.e(926132),
                t.e(893190),
                t.e(146652),
                t.e(189673),
                t.e(576432),
                t.e(797558),
                t.e(451162),
                t.e(576665),
                t.e(624198),
                t.e(245996),
                t.e(700792),
                t.e(552172),
                t.e(529422),
                t.e(823427),
                t.e(309291),
                t.e(307059),
                t.e(843326),
            ]).then(t.bind(t, 183245));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            L.A.startTyping(i.id));
    }
    let f = (0, D.r)({ user: n }),
        [x, I] = s.useState(!1);
    return (0, l.jsx)(q.A, {
        targetElementRef: m,
        user: n,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: x,
        onRequestClose: () => I(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...A } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: m,
                    user: n,
                    currentUser: d,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: s_,
                    isTyping: o,
                    status: r,
                    activities: a,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: p,
                    selected: x,
                    isMobile: c,
                    nick: u,
                    nameplate: f,
                    onClick: (e) => {
                        e.shiftKey ? g?.() : I((e) => !e);
                    },
                    onMouseDown: (e) => {
                        x ? e.stopPropagation() : s?.(e);
                    },
                    ...A,
                },
                n.id,
            );
        },
    });
}
function sN(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sv(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, A.bG)(
            [lR.A, ee.default, Z.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sj.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lR.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Z.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Z.A.getActivities(e.id) ?? sb,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sb });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sN,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.Rv)(),
        c = (0, sl.A)({ useNitroCapExperiment: !0 }),
        h = (0, ss.qH)(),
        m = n.isMultiUserDM() && "entitled" === h && c > 10;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tB.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sy, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.nN,
                            children: [
                                m
                                    ? (0, l.jsx)(l4.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(se.NitroWheelIcon, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: ec.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length}`,
                                              ],
                                          }),
                                      })
                                    : `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length}`,
                                o && (0, l.jsx)(st.A, { type: st.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                sT,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lw.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: sn.GroupPlusIcon,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lw.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var sS = t(10394),
    sR = t(898029),
    sL = t(36537);
function sO() {
    return (0, l.jsx)("div", {
        className: sL.zt,
        children: (0, l.jsx)("header", {
            className: sR.wL,
            children: (0, l.jsxs)("div", {
                className: sR.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sR.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sR.u1,
                            itemClassName: sR.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sM = t(138298),
    sP = t(940382),
    sD = t(129095),
    sk = t(718734),
    sw = t(163328),
    sU = t(425557),
    sG = t(270003),
    sF = t(150934),
    sH = t(452027),
    sV = t(95477),
    sB = t(281595),
    sW = t(465532),
    sY = t(579872),
    sz = t(134357),
    sX = t(408018),
    sq = t(989161),
    s$ = t(102077),
    sK = t(915089),
    sZ = t(314307),
    sQ = t(636922),
    sJ = t(931664),
    s0 = t(631576),
    s1 = t(253932),
    s2 = t(596344),
    s3 = t(522602),
    s9 = t(710272),
    s6 = t(518960),
    s5 = t(753738);
function s7(e, n) {
    return { type: e, message: n ?? null };
}
function s8(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var s4 = t(971389),
    re = t(474078),
    rn = t(620632),
    rt = t(152367),
    ri = t(408278),
    rl = t(147087),
    rs = t(55294),
    rr = t(143161),
    ra = t(909833);
let ro = n5.oU.THREAD_CREATION;
function rd(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, P.Ay)(M.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(e2.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: rr.kL,
                      children: [
                          (0, l.jsx)(ef.A, { channel: s, draftType: iO.C.FirstThreadMessage }),
                          (0, l.jsx)(rc, { parentChannelId: n }),
                          (0, l.jsx)(ru, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function rc(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iO.A.getThreadSettings(n),
                t = iO.A.getDraft(n, iO.C.FirstThreadMessage).trim(),
                i = s3.A.getUploads(n, iO.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sY.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iv.bA)(n);
                      },
                  })
                : (0, iv.bA)(n);
        }, [n]);
    return (0, l.jsxs)(ny.Ay, {
        toolbar: (0, l.jsx)(ny.Ay.Icon, { icon: t9.XSmallIcon, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(ny.Ay.Icon, { icon: sw.ThreadIcon, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(ny.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function ru(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, A.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((n = s.useContext(e2.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([iO.A], () => iO.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sW.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: m, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sX.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iO.A.getDraft(e.id, iO.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sX.ur)(l)), n(iO.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iO.A.addChangeListener(t),
                        () => {
                            iO.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, s4.EN)(t),
        {
            isGeneratingAI: f,
            enableAIFeatures: x,
            getThreadNameInputAccessory: I,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    updateThreadSettings: i,
                    threadSettings: r,
                    textAreaState: a,
                } = e,
                [o, d] = s.useState(!1),
                [c, u] = s.useState(!1),
                h = (0, rl.b)(),
                A = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = s2.A.getMessage(n.id, t);
                                e = (function (e) {
                                    if (null == e) return null;
                                    if ("" !== e.content.trim()) return Array.from(e.content).slice(0, 2e3).join("");
                                    for (let n of e.embeds) {
                                        let e = (function (e) {
                                            if (null != e.rawTitle && "" !== e.rawTitle.trim()) return e.rawTitle;
                                            if (null != e.rawDescription && "" !== e.rawDescription.trim())
                                                return e.rawDescription;
                                            let n = e.fields?.find((e) => {
                                                let { rawName: n, rawValue: t } = e;
                                                return "" !== n.trim() || "" !== t.trim();
                                            });
                                            return null != n
                                                ? `${n.rawName}
${n.rawValue}`
                                                : null;
                                        })(n);
                                        if (null != e) return Array.from(e).slice(0, 2e3).join("");
                                    }
                                    let n = e.poll?.question?.text;
                                    return null != n && "" !== n.trim() ? Array.from(n).slice(0, 2e3).join("") : null;
                                })(i?.getContentMessage());
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await (async function (e) {
                                    try {
                                        let n = await rn.Bo.post({
                                            url: eo.Rsh.AI_TITLE,
                                            body: { content: e },
                                            oldFormErrors: !0,
                                            rejectWithError: (0, rn.fT)(),
                                        });
                                        return n.body?.title ?? null;
                                    } catch (e) {
                                        return null;
                                    }
                                })(e);
                                null != n && "" !== n.trim() && i({ name: n });
                            }
                        } finally {
                            d(!1);
                        }
                    }
                }, [n.id, t, i, h, a.textValue]);
            (s.useEffect(() => {
                (u(!1), d(!1), n.id === r.parentChannelId && t !== r.parentMessageId && i({ name: "" }));
            }, [t, i, n.id, r.parentChannelId, r.parentMessageId]),
                s.useEffect(() => {
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, i, r.name, c, h, A]));
            let m = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: rt.MagicWandIcon,
                                onClick: A,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, A, o, t, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(ri.K, {
                                      icon: rt.MagicWandIcon,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: A,
                                      disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, t, a.textValue, A],
                );
            return {
                isGeneratingAI: o,
                generateAIName: A,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: m,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: m }),
        {
            nameError: E,
            messageError: C,
            submit: y,
            submitting: j,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    textAreaState: r,
                    location: a,
                    enableAIFeatures: o,
                } = e,
                [d, c] = s.useState(null),
                [u, h] = s.useState(null),
                [A, m] = s.useState(!1),
                p = (0, rs.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iv.GS,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        (m(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sJ.A.getStickerPreview(n.id, ro.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = s3.A.getUploads(n.id, iO.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? s7(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? s7(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s9.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: ro,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var f;
                                c(((f = e.body), s7(1, (0, s5.cw)(f, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(s7(2, z.intl.string(z.t.uXA573)));
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, s0.x5)(n.id, ro.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, t, n, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: m,
            location: r,
            enableAIFeatures: x,
        }),
        b = (0, s4.Iy)(c, g) ? sU.ThreadLockIcon : sw.ThreadIcon;
    return (0, l.jsx)("div", {
        className: rr.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(rr.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), y());
                },
                className: rr.Zd,
                children: [
                    (0, l.jsx)(tB.Ip, {
                        className: rr.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: rr.bv,
                            children: [
                                (0, l.jsxs)(sZ.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(ra.P0, rr.P0),
                                            children: (0, l.jsx)(b, { className: ra.Kk }),
                                        }),
                                        (0, l.jsxs)(sG.n, {
                                            children: [
                                                (0, l.jsx)(rA, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: E,
                                                    disabled: j,
                                                    isGeneratingAI: f,
                                                    enableAIFeatures: x,
                                                    getThreadNameInputAccessory: I,
                                                }),
                                                (0, l.jsx)(rh, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rp, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: rr.Eh,
                        children: [
                            (0, l.jsx)(rm, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: p,
                                submit: y,
                                error: C,
                            }),
                            (0, l.jsx)(sz.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: rr.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function rh(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, s4.Iy)(t, s),
        a = (0, l.jsx)(sF.S, {
            disabled: s === s4.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === s4.jk.Disabled
        ? null
        : (0, l.jsx)(sH.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rA(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: i,
            updateThreadSettings: s,
            error: r,
            disabled: a,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = s8(r, { content: u }),
        A = (0, s4.l1)(n, t),
        m = null != t && !d,
        p = (0, sK.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== A ? A : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sV.k, {
        label: z.intl.string(m ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: 100,
        onChange: function (e) {
            (s({ name: (0, re.A)(e, !1) }), "" !== e ? L.A.startTyping(n.id) : L.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, re.A)(u, !0);
            e !== u && s({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function rm(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: r, error: o } = e,
        [d, c] = s.useState(!0),
        u = s.useRef(null),
        h = s.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        m = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sW.A.saveDraft(n.id, t, iO.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? L.A.startTyping(n.id) : "" === t && L.A.stopTyping(n.id),
                            { textValue: t, richValue: l }
                        ),
                    ));
            },
            [n.id, i],
        ),
        g = s.useCallback(
            (e) => {
                let { value: n, uploads: t, stickers: i } = e;
                return r(n, i, t);
            },
            [r],
        );
    ((0, e2.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, e2.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: m }));
    let f = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.ATTACH_FILES, n)),
        x = s8(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(s$.A, { channelId: n.id, type: ro, canAttachFiles: f }),
            (0, l.jsx)("div", { className: rr.xN, children: (0, l.jsx)(sB.U, { error: x }) }),
            (0, l.jsx)(sq.Ay, {
                type: ro,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(rr.gM, rr.Yy),
                innerClassName: a()(rr.SL, { [rr.cr]: null != x }),
                onFocus: h,
                onBlur: m,
                onChange: p,
                onSubmit: g,
                promptToUpload: s6.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rp(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([s2.A], () => (null == t ? null : s2.A.getMessage(n.id, t))),
        s = s1.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sQ.A, {
              className: rr.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rg = t(494208),
    rf = t(40389),
    rx = t(138399),
    rI = t(56562),
    rE = t(438653);
function rC(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nk.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nk.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(ry, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(ny.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nG.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function ry(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t5.A)(n),
        r = (0, it.A)(n),
        a = (0, ir.A)(n.id),
        o = (0, is.A)(n),
        d = (0, ic.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, t7.A)(n),
        h = (0, t8.A)(n),
        m = (0, t4.A)(n, "Toolbar Overflow"),
        p = (0, ie.A)(n, "Toolbar Overflow"),
        g = (0, ii.A)(n),
        f = (0, rf.A)(n),
        x = (0, id.A)(n),
        I = (0, il.A)(n),
        E = n.isThread()
            ? (0, l.jsx)(nL.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rx.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rI.vx.INSTANT });
                  },
              })
            : null,
        C = (0, rE.z)(n),
        y = (0, rE.C)(n),
        j = s1.SY.useSetting(),
        b = (0, A.bG)([lL.A], () => !u().isEmpty(lL.A.getVoiceStatesForChannel(n.id))),
        _ = (0, A.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nw.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nL.rX, { children: [m, f] }),
            (0, l.jsxs)(nL.rX, {
                children: [
                    E,
                    o,
                    g,
                    a,
                    !j || b || _
                        ? null
                        : (0, l.jsx)(nL.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iv.JA)(n);
                              },
                          }),
                    I,
                ],
            }),
            (0, l.jsx)(nL.rX, { children: C }),
            (0, l.jsxs)(nL.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(nL.rX, { children: [p, y] }),
            (0, l.jsxs)(nL.rX, { children: [c, d] }),
        ],
    });
}
var rj = t(332456),
    rb = t(889812),
    r_ = t(973854),
    rT = t(62502);
function rN(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, A.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, A.bG)([tv.A], () => tv.A.getGuild(d?.getGuildId())),
        h = (0, tZ.Ay)(d),
        m = (0, t0.Uf)(d);
    ((n = d),
        (i = (0, A.bG)([lL.A], () => null != n && !u().isEmpty(lL.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (eq.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, iu.N9)(n, { source: iT.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rj.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rb.q)(d.id), channel_view: o }),
                (0, r_.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != m) return (0, l.jsx)(t1.A, { guild: c, channelId: m });
    let g = (0, l.jsx)(iL, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.A, { channel: d, draftType: iO.C.ChannelMessage }),
            (0, l.jsx)(ny.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tJ.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, C.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e(926132),
                                t.e(491001),
                                t.e(965789),
                                t.e(420105),
                            ]).then(t.bind(t, 949488));
                            return (n) => (0, l.jsx)(e, { ...n, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, iu.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rT.T,
                children: (0, l.jsx)(tQ.A, { channel: d, guild: c, chatInputType: n5.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rv = t(210714),
    rS = t(707554),
    rR = t(140735),
    rL = t(590180),
    rO = t(287727),
    rM = t(562153),
    rP = t(215530),
    rD = t(365958),
    rk = t(736653),
    rw = t(311016),
    rU = t(971217),
    rG = t(713517),
    rF = t(397562),
    rH = t(183555),
    rV = t(718019),
    rB = t(56810),
    rW = t(915614),
    rY = t(743987),
    rz = t(900179),
    rX = t(946356),
    rq = t(465829),
    r$ = t(35241),
    rK = t(587168),
    rZ = t(442228),
    rQ = t(827428);
function rJ(e) {
    let { context: n, analyticsLocations: t, handleOpenProfile: i } = e;
    return (0, l.jsx)("div", {
        className: rQ.l,
        children: (0, l.jsx)(f.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            text: z.intl.string(z.t["+Xp3hq"]),
            onClick: function () {
                (i(), (0, lQ.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
            },
        }),
    });
}
var r0 = t(518477),
    r1 = t(996988),
    r2 = t(207634),
    r3 = t(561419),
    r9 = t(396095);
function r6(e) {
    let { user: n, channel: t } = e,
        i = __OVERLAY__ || !(0, rw.A)(n.id),
        r = (0, lJ.Ay)(n.id),
        o = (0, rk.Ay)(),
        d = s.useRef(Date.now()),
        { analyticsLocations: c } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        u = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rF.A)(c, r, r0.R7.SIDEBAR);
    let h = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: m } = (0, rG.A)(h);
    function p() {
        (0, nY.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u });
    }
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rH.of, {
            value: u,
            openedAt: d.current,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsxs)(rX.A, {
                ref: h,
                user: n,
                displayProfile: r,
                themeType: r1.d.SIDEBAR,
                themeOverride: o,
                className: a()(r3.BK, "user-profile-sidebar-redesign"),
                children: [
                    (0, l.jsxs)(tB.d_, {
                        className: r3.BE,
                        children: [
                            (0, l.jsx)(rK.A, { children: (0, l.jsx)(r$.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: r3.wx,
                                children: [
                                    (0, l.jsx)(rW.A, {
                                        user: n,
                                        displayProfile: r,
                                        themeType: r1.d.SIDEBAR,
                                        specOverrides: { bannerWidth: 300, bannerHeight: 105, themePadding: 2 },
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rV.A, {
                                        user: n,
                                        displayProfile: r,
                                        channelId: t.id,
                                        avatarSize: r2.T[r1.d.SIDEBAR].avatarSize,
                                        onOpenProfile: i ? void 0 : p,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r9.rf,
                                children: [
                                    (0, l.jsx)(rq.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rM.Ay.getName(null, t.id, n),
                                        onClickName: i ? void 0 : p,
                                        pronouns: r?.pronouns,
                                        trailing: (0, l.jsx)(rB.A, { displayProfile: r, themeType: r1.d.SIDEBAR }),
                                    }),
                                    (0, l.jsx)(rZ.A, {
                                        userId: n.id,
                                        userBio: r?.bio,
                                        isHoveringOrFocusing: A,
                                        animateOnHoverOrFocusOnly: !0,
                                        hideRestrictedProfile: !0,
                                    }),
                                    (0, l.jsx)(rz.A, {
                                        heading: z.intl.string(z.t["A//N4k"]),
                                        headingColor: "text-strong",
                                        children: (0, l.jsx)(rY.A, { userId: n.id }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !i && (0, l.jsx)(rJ, { handleOpenProfile: p, analyticsLocations: c, context: u }),
                    r?.profileEffect != null && (0, l.jsx)(rU.A, { skuId: r?.profileEffect?.skuId, isHovering: m }),
                ],
            }),
        }),
    });
}
var r5 = t(331322),
    r7 = t(249790),
    r8 = t(254828),
    r4 = t(783123),
    ae = t(966430);
function an(e) {
    let { user: n, channel: t, onHide: i } = e,
        r = (0, lJ.Ay)(n.id),
        a = (0, rk.Ay)(),
        o = (0, A.bG)([lR.A], () => lR.A.isBlocked(n.id)),
        { analyticsLocations: d } = (0, P.Ay)(o ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        c = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rF.A)(d, r, r0.R7.SIDEBAR);
    let u = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: d,
        children: (0, l.jsx)(rH.of, {
            value: c,
            fetchStartedAt: r?.fetchStartedAt,
            fetchEndedAt: r?.fetchEndedAt,
            isLoaded: r?.isLoaded,
            children: (0, l.jsx)(rX.A, {
                ref: u,
                user: n,
                displayProfile: r,
                themeType: r1.d.SIDEBAR,
                themeOverride: a,
                className: "user-profile-sidebar-redesign",
                children: (0, l.jsx)(tB.d_, {
                    children: (0, l.jsxs)("div", {
                        className: ae.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: ae.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: ae.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ae.N1,
                                        children: [
                                            (0, l.jsx)(r7.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/semibold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rM.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(r5.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(r4.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    (i(),
                                                        (0, lQ.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(r8.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (i(),
                                                        (0, lQ.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        }));
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var at = t(156150),
    ai = t(717421),
    al = t(31956),
    as = t(744808),
    ar = t(679492),
    aa = t(439053),
    ao = t(312381),
    ad = t(630891),
    ac = t(193738),
    au = t(666297),
    ah = t(804329),
    aA = t(695366),
    am = t(922590),
    ap = t(821269),
    ag = t(263775),
    af = t(326084),
    ax = t(834708),
    aI = t(154486);
let aE = (0, so.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aC = t(158390),
    ay = t(906573);
let aj = new aC.A(30 * sr.A.Millis.SECOND, 5 * sr.A.Millis.MINUTE, !0),
    ab = 0;
var a_ = t(504492);
function aT(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aE.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, A.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, ax.d)(i),
        a = t && r,
        {
            isDismissed: o,
            hasFetched: d,
            version: c,
            dismiss: u,
        } = (function (e) {
            let {
                isDismissed: n,
                hasFetched: t,
                version: i,
            } = (0, A.cf)([ay.A], () => {
                let n = Number(ay.A.getVersion());
                return {
                    isDismissed: null != e && ay.A.isDismissedFor(e),
                    hasFetched: ay.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e &&
                        (async function () {
                            if (ay.A.shouldFetch() && !(Date.now() < ab)) {
                                eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
                                try {
                                    let e = await rn.Bo.get({
                                        url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                        oldFormErrors: !0,
                                        rejectWithError: !0,
                                    });
                                    (aj.succeed(),
                                        (ab = 0),
                                        eq.h.dispatch({
                                            type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                                            version: String(e.body?.version ?? "0"),
                                            targetIds: Array.isArray(e.body?.target_ids)
                                                ? e.body.target_ids.map((e) => String(e))
                                                : [],
                                        }));
                                } catch {
                                    ((ab = Date.now() + aj.fail()),
                                        eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
                                }
                            }
                        })();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (ay.A.isDismissedFor(e) ||
                                (eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                rn.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(aN, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aN(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, aI.p)(n.id),
        [o, d] = (0, ag.RF)(a ? m.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lM.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (et.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.mM)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(t.bind(t, 810852)),
                                (0, af.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? af.o.FAIL;
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                results: [{ recipient: n, status: s }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: es.Ay.getName(n),
                            });
                    }));
            },
            [n],
        );
    if (null == o) return null;
    let h = es.Ay.getName(n);
    return (0, l.jsx)(sI, {
        className: a_.K,
        analyticsLocation: M.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var av = t(433380),
    aS = t(673843),
    aR = t(634110),
    aL = t(351906),
    aO = t(851767),
    aM = t(612770),
    aP = t(559506),
    aD = t(361311),
    ak = t(477534),
    aw = t(791556),
    aU = t(501193),
    aG = t(383448),
    aF = t(646986),
    aH = t(494213),
    aV = t(243166),
    aB = t(805251),
    aW = t(123292),
    aY = t(698253),
    az = t(174947),
    aX = t(840411);
let aq = (0, so.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var a$ = t(387325),
    aK = t(416415),
    aZ = t(88940),
    aQ = t(394300),
    aJ = t(575593),
    a0 = t(329921),
    a1 = t(44120),
    a2 = t(778705),
    a3 = t(317560),
    a9 = t(306984),
    a6 = t(661492),
    a5 = t(146423),
    a7 = t(662349),
    a8 = t(802290),
    a4 = t(479026),
    oe = t(636374),
    on = t(699976),
    ot = t(682901),
    oi = t(733484),
    ol = t(880465);
function os(e) {
    let n,
        {
            sku: t,
            wishlistOwner: i,
            wishlistId: r,
            style: o,
            skuPreviewStyle: d,
            skuAssetHoverClassName: c,
            disableRiveHover: u,
            onDetailsClick: h,
            onPurchaseClick: A,
            onItemClick: m,
            renderChildren: p,
            isNew: g,
            shopUnpublishedAt: f,
        } = e,
        { trackUserProfileWishlistAction: x } = (0, rH.NJ)(),
        I = s.useId(),
        E = (0, aZ.A)(f),
        C = on.y.SIZE_78,
        y = on.Z[C],
        j = s.useCallback(() => {
            (m?.(),
                x({
                    action: r0.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: r,
                    productLines: new Set([t.productLine]),
                }),
                h());
        }, [t, r, h, m, x]),
        b = s.useCallback(() => {
            (m?.(),
                x({
                    action: r0.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: r,
                    productLines: new Set([t.productLine]),
                }),
                A());
        }, [A, m, t.id, r, t.productLine, x]),
        {
            onBodyClick: _,
            onOverlayClick: T,
            showOverlayButton: N,
            routesToGift: v,
            label: S,
            icon: R,
        } = (0, oe.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: j, onPurchaseClick: b }),
        [L, O] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: oi.kL,
        children: (0, l.jsxs)(a5.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: y,
            cardStyle: a()(oi.Nr, o),
            skuPreviewStyle: a()(oi.ho, d),
            skuAssetClassName: L ? c : void 0,
            onClick: _,
            "aria-label":
                ((n = v ? (0, a6.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a6.T)(t) })),
                !0 === g ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            "aria-describedby": null != E ? I : void 0,
            topLeftContent: null != E ? (0, l.jsx)(a8.A, { id: I, countdown: E, variant: "sidebar" }) : void 0,
            onHoverOrFocusChange: O,
            children: [
                !0 === g && (0, l.jsx)(a0.N, { className: oi.Pf }),
                N &&
                    (0, l.jsx)(a7.A, {
                        spec: y,
                        onClick: T,
                        isHoveringOrFocusing: L,
                        label: S,
                        icon: S.length < 6 ? R : void 0,
                    }),
                p?.(N && L),
            ],
        }),
    });
}
function or(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a9.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, a3.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(os, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function oa(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, a1.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, a4.e)({ sku: n, giftRecipient: t, giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(oi.ML, {
                    [oi.M]: n?.tenantMetadata?.collectibles?.type === aJ.R.AVATAR_DECORATION,
                    [oi.Hm]: n?.tenantMetadata?.collectibles?.type === aJ.R.PROFILE_EFFECT,
                    [oi.hH]: n?.tenantMetadata?.collectibles?.type === aJ.R.PROFILE_FRAME,
                    [oi.qF]: n?.tenantMetadata?.collectibles?.type === aJ.R.NAMEPLATE,
                    [oi.l2]: n?.tenantMetadata?.collectibles?.type === aJ.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(os, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function oo(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, a2.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: ot.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === aR.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(os, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(ol.MO, { [oi.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(oi.fi, { [oi.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(oi.p7, { [oi.SW]: h.length >= 10, [oi.ot]: h.length >= 12 }),
                          variant: "body-xs/semibold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function od(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(or, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(oa, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(oo, { sku: n, ...t });
        default:
            return null;
    }
}
var oc = t(448645),
    ou = t(695904),
    oh = t(573238),
    oA = t(342442),
    om = t(658946),
    op = t(419731),
    og = t(535089),
    of = t(815637);
function ox(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { labelsEnabled: d, reorderEnabled: c } = (0, a$.Zf)("UserProfileSidebarWishlistBreadcrumb"),
        u = ee.default.getCurrentUser(),
        { trackUserProfileAction: h, trackUserProfileWishlistAction: m } = (0, rH.NJ)(),
        p = (0, s.useId)(),
        { hasNewWishlistItems: g, newWishlistItemCount: f, shouldLogExposure: x } = (0, oh.A)(t),
        I = (0, s.useCallback)(() => {
            h({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r0.RP.WISHLIST });
        }, [h]),
        { isItemNew: E, onItemPress: C } = (function (e, n) {
            let t = (0, ou.bq)(),
                i = (0, A.bG)(
                    [aO.A],
                    () => {
                        let n = aO.A.getProfileReadState(e);
                        return null == n ? void 0 : (n[oA.o.WISHLIST] ?? null);
                    },
                    [e],
                ),
                [l, r] = s.useState(void 0);
            null == t || void 0 !== l || (t.enabled && void 0 === i) || r(t.enabled ? i : null);
            let [a, o] = s.useState(() => new Set()),
                d = s.useCallback(
                    (e) => t?.enabled === !0 && !a.has(e.skuId) && (0, op.f3)(e.addedAt, l),
                    [t?.enabled, a, l],
                ),
                c = s.useCallback(
                    (i) => {
                        null != t && (o((e) => new Set(e).add(i.skuId)), d(i) && n(), (0, om.U)(e));
                    },
                    [t, e, d, n],
                );
            return { isItemNew: d, onItemPress: c };
        })(t.id, I),
        y = (0, s.useCallback)(() => {
            (g && h({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r0.RP.WISHLIST }), i());
        }, [g, i, h]),
        j = (0, s.useMemo)(() => n ?? [], [n]),
        b = null != u && u.id !== t.id,
        _ = (0, aK.Ay)(j, b),
        T = c && b ? _ : j,
        N = b && (0, aK.Oh)(j, _, 3),
        v = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && m({ wishlistId: n, action: t, productLines: i });
            },
            [m],
        ),
        S = (0, s.useMemo)(() => {
            let e = T.slice(0, 3).map((e) => ({ item: e, source: aR.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = T.some((e) => oc.Ay.isPremiumSku(e.skuId));
                if (!oc.Ay.isPremiumAtLeast(t.premiumType, ot.PremiumTypes.TIER_2) && !n) {
                    let n = aQ.A.fromSKU((0, aX.rI)());
                    null != n && e.push({ item: n, source: aR.uS.POPULAR });
                }
            }
            return e;
        }, [T, a, t.premiumType]),
        L = (0, s.useMemo)(
            () =>
                j
                    .slice(0, 3)
                    .filter(az.xZ)
                    .map((e) => e.shopUnpublishedAt),
            [j],
        ),
        O = (0, aZ.N)(L),
        M = (0, s.useMemo)(
            () =>
                new Set(
                    S.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [S],
        ),
        D = (0, og.A)({ wishlistId: r ?? null, onAction: v, productLines: M }),
        k = (0, s.useMemo)(
            () =>
                S.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              od,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: y,
                                  source: s,
                                  onItemClick: s === aR.uS.WISHLIST ? () => C(i) : void 0,
                                  isNew: s === aR.uS.WISHLIST && E(i),
                                  shopUnpublishedAt: d && s === aR.uS.WISHLIST ? i.shopUnpublishedAt : void 0,
                              },
                              i.skuId,
                          );
                }).filter(sj.Vq),
            [o, y, t, S, r, E, C, d],
        ),
        w = g && k.length > 0,
        U = (0, s.useRef)(!1);
    (0, s.useEffect)(() => {
        w && !U.current && ((U.current = !0), h({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [w, h]);
    let G = N ? (0, l.jsx)(a$.m4, { location: "UserProfileSidebarWishlistReorderOpportunity" }) : null;
    return 0 === k.length
        ? G
        : (0, l.jsxs)("section", {
              "aria-labelledby": p,
              children: [
                  O && (0, l.jsx)(a$.m4, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                  G,
                  (0, l.jsxs)(rX.A.Overlay, {
                      ref: D,
                      className: of.kL,
                      children: [
                          x && (0, l.jsx)(ou.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                          (0, l.jsxs)("div", {
                              className: of.wx,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: of.qd,
                                      children: [
                                          (0, l.jsx)(R.D, {
                                              variant: "body-sm/medium",
                                              id: p,
                                              children: z.intl.string(z.t["7lZ31J"]),
                                          }),
                                          g &&
                                              (0, l.jsx)(aB.E, {
                                                  type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: f }) },
                                                  variant: "primary",
                                              }),
                                      ],
                                  }),
                                  (T.length > 3 || g) &&
                                      (0, l.jsx)(aW.Q, {
                                          variant: "secondary",
                                          textVariant: "body-xs/normal",
                                          onClick: y,
                                          text: z.intl.string(z.t.y6PSA3),
                                      }),
                              ],
                          }),
                          (0, l.jsx)(rS.F, { children: (0, l.jsx)("div", { className: of.vY, children: k }) }),
                      ],
                  }),
              ],
          });
}
function oI(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = aq.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r)) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aY.P, {
        isGifting: o,
        children: (0, l.jsx)(ox, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }, s.profileOwner.id),
    });
}
function oE(e) {
    let { user: n, currentUser: t, displayProfile: i, channel: r, isHoveringOrFocusing: a, onOpenProfile: o } = e,
        { relationshipType: d, originApplicationId: c } = (0, A.cf)([lR.A], () => ({
            relationshipType: lR.A.getRelationshipType(n.id),
            originApplicationId: lR.A.getOriginApplicationId(n.id),
        })),
        u = (0, am.fi)(n.id),
        h = (0, ap.q)({ userId: n.id }),
        m = (0, A.bG)([aL.A], () => aL.A.hidePersonalInformation),
        p = (0, A.bG)([aO.A], () => aO.A.getUserProfile(n.id)?.application),
        g = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, A.cf)([aO.A], () => ({ defaultWishlistId: aO.A.getFirstWishlistId(n.id) })),
        { wishlist: x, isFetching: I } = (0, aR.fw)({ wishlistId: f, userId: n.id });
    (0, aS.A)(x);
    let E = s.useMemo(() => x?.items.filter((e) => !e.isOwned) ?? null, [x]);
    return (0, l.jsxs)("div", {
        className: r9.rf,
        children: [
            (0, l.jsx)(aP.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: r9.pq,
                children: [
                    (0, l.jsx)(rq.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rM.Ay.getName(null, r.id, n),
                        onClickName: o,
                        displayNameTrailing: m
                            ? null
                            : (0, l.jsx)(aV.A, { userId: n.id, isVisible: a, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rB.A, { displayProfile: i, themeType: r1.d.SIDEBAR }),
                    }),
                    (0, l.jsx)(aw.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            d === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rX.A.Overlay, {
                    children: (0, l.jsx)(ak.A, { user: n, channelId: r.id, applicationId: c }),
                }),
            u.map((e) =>
                (0, l.jsx)(
                    rX.A.Overlay,
                    {
                        children: (0, l.jsx)(ak.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aG.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rX.A.Overlay, { children: (0, l.jsx)(aU.A, { username: rM.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rX.A.Overlay, {
                    className: r9.Lw,
                    children: (0, l.jsx)(rz.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aA.CircleErrorIcon,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(av.T, { userId: n.id }),
                    }),
                }),
            (0, l.jsx)(rZ.A, {
                userId: n.id,
                userBio: i?.bio,
                hidePersonalInformation: m,
                isHoveringOrFocusing: a,
                animateOnHoverOrFocusOnly: !0,
                hideRestrictedProfile: !0,
            }),
            (0, l.jsx)(rz.A, {
                heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                headingColor: "text-strong",
                children: (0, l.jsx)(rY.A, { userId: n.id }),
            }),
            (0, l.jsxs)("div", {
                className: r9.kR,
                children: [
                    g && (0, l.jsx)(aH.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aF.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    p?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(aM.A, {
                            applicationId: p.id,
                            commandIds: p.popularApplicationCommandIds,
                            channel: r,
                        }),
                    h.length > 0 &&
                        (0, l.jsx)(rz.A, {
                            heading: z.intl.string(z.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(aD.A, { applicationIds: h }),
                        }),
                    (0, l.jsx)(oI, {
                        profileOwner: n,
                        unownedWishlistItems: E,
                        wishlistId: f,
                        isLoading: I,
                        onClick: () => {
                            o?.({ tabSection: r0.RP.WISHLIST });
                        },
                        canSeeWishlist: null != x,
                    }),
                    r.isDM() && (0, l.jsx)(aT, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
function oC(e) {
    let { user: n, currentUser: t, channel: i } = e,
        r = __OVERLAY__,
        o = (0, lJ.Ay)(n.id),
        d = (0, rk.Ay)(),
        c = s.useRef(void 0),
        u = s.useRef(void 0);
    u.current !== n.id && ((u.current = n.id), (c.current = Date.now()));
    let { analyticsLocations: h } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        A = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rF.A)(h, o, r0.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: p, isHovering: g } = (0, rG.A)(m),
        f = (0, ar.fC)(),
        x = (0, rO.A)(o?.profileFrame?.skuId);
    (0, al.A)({ skuId: o?.profileFrame?.skuId, openedAt: c.current, context: A, analyticsLocations: h });
    let I = (0, ai.z)({ opacity: +(null != f.interactionType), config: { duration: 150 } });
    function E(e) {
        (0, nY.openUserProfileModal)({ sourceAnalyticsLocations: h, hideRestrictedProfile: !0, ...A, ...e });
    }
    return (0, l.jsx)(P.f5, {
        value: h,
        children: (0, l.jsx)(rH.of, {
            value: A,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(ar.Hl, {
                value: f,
                children: (0, l.jsxs)(rX.A, {
                    ref: m,
                    user: n,
                    displayProfile: o,
                    themeType: r1.d.SIDEBAR,
                    themeOverride: d,
                    profileFrameSkuIdOverride: o?.profileFrame?.skuId,
                    className: a()(r3.BK, "user-profile-sidebar-redesign"),
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(ao.A, {}),
                        null != f.interactionType && (0, l.jsx)(at.animated.div, { style: I, className: r3.tB }),
                        (0, l.jsxs)(tB.d_, {
                            className: r3.BE,
                            children: [
                                (0, l.jsxs)(rK.A, {
                                    children: [
                                        (0, l.jsx)(ac.A, { user: n, themeType: r1.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ad.A, { user: n }) : (0, l.jsx)(au.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r3.wx,
                                    children: [
                                        (0, l.jsx)(rW.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: r1.d.SIDEBAR,
                                            specOverrides: { bannerWidth: 300, bannerHeight: 105, themePadding: 2 },
                                            animateOnHoverOrFocusOnly: !p,
                                            className: r3.vK,
                                        }),
                                        (0, l.jsx)(aa.A, { className: r3.oR }),
                                        (0, l.jsx)(rV.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            avatarSize: r2.T[r1.d.SIDEBAR].avatarSize,
                                            onOpenProfile: r ? void 0 : E,
                                        }),
                                        (0, l.jsx)(ah.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: r1.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oE, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: o,
                                    channel: i,
                                    isHoveringOrFocusing: null == f.interactionType && p,
                                    onOpenProfile: r ? void 0 : E,
                                }),
                            ],
                        }),
                        !r && (0, l.jsx)(rJ, { context: A, analyticsLocations: h, handleOpenProfile: E }),
                        o?.profileEffect != null && (0, l.jsx)(rU.A, { skuId: o?.profileEffect?.skuId, isHovering: g }),
                        null != x && (0, l.jsx)(as.A, { frame: x, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oy = t(901600);
function oj(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l0(),
        [o, d] = (0, rP.A)(t),
        [c, u] = s.useState(!1),
        h = (0, lJ.Ay)(t),
        m = h?.profileFrame?.skuId,
        p = (0, rO.A)(m),
        g = (0, A.bG)([rL.A], () => rL.A.getProductFetch(m));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rD.A)(i, e) : (0, rD.A)(t, void 0, e);
        }, [i, t, n.id]),
        null == i ||
            null == r ||
            !a ||
            (!c && h?.isLoaded !== !0) ||
            (!c && null != m && m !== p?.skuId && g?.state !== "success" && g?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        x = rM.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: oy.H,
        children: (0, l.jsx)(rS.F, {
            component: (0, l.jsx)(rR.A, {
                children: (0, l.jsx)(rS.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: x }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(an, { user: i, currentUser: r, onHide: d, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r6, { user: i, currentUser: r, ...e })
                        : (0, l.jsx)(oC, { user: i, currentUser: r, ...e }),
        }),
    });
}
var ob = t(522556),
    o_ = t(225315),
    oT = t(684407),
    oN = t(95701),
    ov = t(919638),
    oS = t(495867),
    oR = t(812771),
    oL = t(350835),
    oO = t(506309),
    oM = t(598748),
    oP = t(681154),
    oD = t(975460),
    ok = t(587895),
    ow = t(429913),
    oU = t(201718),
    oG = t(339580),
    oF = t(633075),
    oH = t(917445),
    oV = t(382483),
    oB = t(385113);
let oW = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oY(e) {
    let [n, t] = s.useState(new Set()),
        i = s.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []),
        r = s.useMemo(
            () => ({
                markAsVisible: i,
                useInjectEntriesWithPreviewData: (e) =>
                    (function (e, n) {
                        let t,
                            i,
                            l,
                            r,
                            a,
                            o,
                            d,
                            c,
                            u,
                            h,
                            m,
                            p,
                            g,
                            f,
                            x,
                            I,
                            { appsWithConfigs: E, isLoadingConfigs: C } =
                                ((t = s1.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, oV.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, oV.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, A.bG)([oB.A], () => oB.A.getFeaturedFetchState())),
                                (l = (0, A.bG)([oB.A], () => oB.A.getDeveloperFetchState())),
                                (r = (0, A.yK)([oB.A], () => oB.A.getFeaturedApplicationIds())),
                                (a = (0, A.yK)([oB.A], () => oB.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === oB.e.NOT_FETCHED ||
                                        i === oB.e.FETCHING ||
                                        (t && (l === oB.e.NOT_FETCHED || l === oB.e.FETCHING)),
                                }),
                            {
                                widgetApps: y,
                                userIdsWhoMightHaveWidgetData: j,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oP.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, A.bG)(
                                [ok.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            ok.A.isFetchingApplication(e) ||
                                            (null == ok.A.getApplication(e) && !ok.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, ow.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sj.Vq)
                                            .map((e) => [e.id, (0, oD.t)(e)])
                                            .filter(sj.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return E.has(t.id);
                                            }),
                                    ),
                                [E, u],
                            )),
                            (m = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: m, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: T } =
                                ((p = (0, A.cf)([oG.A], () =>
                                    Object.fromEntries(j.map((e) => [e, oG.A.getUserIdentities(e)]).filter(sj.QE)),
                                )),
                                (g = (0, A.bG)([oG.A], () =>
                                    j.some((e) => oG.A.getFetchState(e) === oG.e.NOT_FETCHED || oG.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    j.length > 0 && oU.P.fetchMany(...j.map((e) => [e]));
                                }, [j]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: v } =
                                ((f = (0, A.cf)([aO.A], () =>
                                    Object.fromEntries(j.map((e) => [e, aO.A.getUserProfile(e) ?? null]).filter(sj.QE)),
                                )),
                                (x = (0, A.yK)([aO.A], () =>
                                    j.filter((e) => null == aO.A.getUserProfile(e) && !aO.A.isFetchingProfile(e)),
                                )),
                                (I = (0, A.bG)([aO.A], () => j.some((e) => aO.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of x) (0, oH.A)(e);
                                }, [x]),
                                { profilesByUserId: f, isLoadingProfiles: x.length > 0 || I }),
                            S = (0, A.cf)(
                                [oB.A],
                                () => Object.fromEntries([...E].map((e) => [e, oB.A.getConfig(e)]).filter(sj.QE)),
                                [E],
                            ),
                            R = C || b || T || v,
                            L = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oP.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = y[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[oM.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, oF.E)(e, n.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, y, S, _, N]),
                            [O, M] = s.useState(L);
                        return (
                            s.useEffect(() => {
                                R || M(L);
                            }, [R, L]),
                            O
                        );
                    })(e, n),
            }),
            [i, n],
        );
    return (0, l.jsx)(oW.Provider, { value: r, children: e.children });
}
var oz = t(900797),
    oX = t(847374),
    oq = t(320448),
    o$ = t(890856),
    oK = t(396696),
    oZ = t(435738),
    oQ = t(38055);
let oJ = "content-inventory-feed",
    o0 = `${oJ}-settings`,
    o1 = `${oJ}-toggle`;
var o2 = t(569709);
function o3(e) {
    return !e.currentTarget.contains(e.target);
}
let o9 = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, A.bG)([oZ.A], () => oZ.A.hidden),
            h = (0, c.omit)((0, y.rm)(o0), ["role", "tabIndex"]),
            m = (0, c.omit)((0, y.rm)(o1), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                o3(e) ||
                    (0, C.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                    });
            }, []),
            f = s.useCallback(
                (e) => {
                    if (!o3(e)) return u ? (0, oK.Il)() : r();
                },
                [u, r],
            ),
            x = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(oQ.A, { ...h }),
                    (0, l.jsx)("span", { className: o2.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(oz.ChevronSmallUpIcon, { className: o2.wT })
                              : o
                                ? (0, l.jsx)(oX.ChevronSmallDownIcon, { className: o2.wT })
                                : (0, l.jsx)(oq.ChevronSmallRightIcon, { className: o2.wT })),
                          (0, l.jsx)("span", { className: o2.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o$.s, {
                      ...m,
                      className: a()(o2.N1, { [o2.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: f,
                      onContextMenu: g,
                      children: x,
                  })
                : (0, l.jsx)("div", { className: o2.N1, onContextMenu: g, children: x }),
        });
    }),
    o6 = function () {
        return null;
    };
var o5 = t(963307),
    o7 = t(424994);
let o8 = et.default.track;
function o4(e, n) {
    o8(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: o7.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var de = t(468581),
    dn = t(808666),
    dt = t(414499),
    di = t(323384),
    dl = t(55730),
    ds = t(765379),
    dr = t(359549),
    da = t(284525),
    dd = t(212613),
    dc = t(583846),
    du = t(506326);
t(333007);
var dh = t(646514),
    dA = t(342952),
    dm = t(315710),
    dp = t(276293),
    dg = t(935063),
    df = t(778712),
    dx = t(696986),
    dI = t(97808),
    dE = t(738188),
    dC = t(983851),
    dy = t(31300),
    dj = t(308528),
    db = t(401843),
    d_ = t(375499),
    dT = t(429433),
    dN = t(324688);
let dv = (0, oN.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dS(e) {
    let {
            placeholder: n,
            onEnter: t,
            setEditorRef: i,
            showEmojiButton: r = !1,
            renderAttachButton: o,
            autoFocus: d = !0,
            onFocus: c,
            channel: u,
            className: h,
        } = e,
        [A, m] = s.useState(""),
        [p, g] = s.useState((0, sX.x7)("")),
        f = n5.oU.ATOMIC_REACTOR_REPLY_INPUT,
        x = s.useRef(null);
    return (0, l.jsx)(sq.Ay, {
        ref: x,
        placeholder: n,
        editorClassName: h,
        className: a()(dN.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dv,
        onChange: (e, n, t) => {
            (m(n), g(t));
        },
        type: r ? { ...f, emojis: { button: !0 } } : f,
        textValue: A,
        richValue: p,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (t(n), m(""), g((0, sX.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: i,
        focused: d,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == x.current) return "top";
            let e = x.current.getBoundingClientRect(),
                n = window.innerHeight;
            return e.top < n / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function dR(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        r = (0, rk.Ay)(),
        [a, o] = s.useState(!1),
        d = s.useRef(null),
        c = s.useRef(null);
    return (
        (n = () => o(!1)),
        s.useEffect(() => {
            function e(e) {
                "Escape" === e.key && n();
            }
            function t(e) {
                null != e.target && (d?.current?.contains(e?.target) || n());
            }
            return (
                document.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (document.removeEventListener("keydown", e), document.removeEventListener("mousedown", t));
                }
            );
        }, [n, d]),
        (0, l.jsx)(nk.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(x.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, l.jsx)(dT.C, {
                                messageId: "",
                                channel: dv,
                                closePopout: () => {
                                    o(!1);
                                },
                                onSelectEmoji: (e) => {
                                    let { emoji: n, willClose: i, isBurst: l } = e;
                                    null != n && (t({ emoji: n, willClose: i, isBurst: l }), o(!1));
                                },
                            }),
                        }),
                }),
            children: () =>
                (0, l.jsx)(eN.m, {
                    text: z.intl.string(z.t.lfIHs4),
                    children: (0, l.jsx)("div", {
                        ref: c,
                        className: dN.mJ,
                        children: (0, l.jsx)(d_.A, {
                            active: !1,
                            tabIndex: 0,
                            onClick: () => {
                                (i?.(), o(!0));
                            },
                        }),
                    }),
                }),
        })
    );
}
var dL = t(402216),
    dO = t(822123),
    dM = t(409626),
    dP = t(692969),
    dD = t(711589),
    dk = t(607407),
    dw = t(832163),
    dU = t(533562),
    dG = t(805901),
    dF = t(565645);
t(201614);
var dH = t(7584);
(t(850992), t(690521));
var dV = t(806931),
    dB = t(307731),
    dW = t(866780);
function dY(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rG.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tI.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dG.c, {
                config: d_.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(at.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dF.A, {
                            className: a()(dW.Zg, r, { [dW.c4]: t }),
                            emojiId: n.id,
                            emojiName: n?.surrogates,
                            animated: n.animated,
                        }),
                    });
                },
            }),
        }),
    });
}
(dB.EmojiIntention.CHAT,
    [
        dH.Ay.getByName("thumbsup"),
        dH.Ay.getByName("eyes"),
        dH.Ay.getByName("laughing"),
        dH.Ay.getByName("watermelon"),
        dH.Ay.getByName("fork_and_knife"),
        dH.Ay.getByName("yum"),
    ].filter(sj.Vq));
var dz = t(636585),
    dX = t(543465),
    dq = t(607567),
    d$ = t(325158),
    dK = t(20805),
    dZ = t(22869),
    dQ = t(623671),
    dJ = t(428249),
    d0 = t(327098),
    d1 = t(576757),
    d2 = t(202195),
    d3 = t(823545),
    d9 = t(345394);
let d6 = function (e) {
    let { children: n } = e,
        [t, i] = (0, ag.kn)([m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lM.i.USER_DISMISS);
    }, [i]);
    return t !== m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lp.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d9.A },
                  }),
              ],
          });
};
var d5 = t(315246),
    d7 = t(866323),
    d8 = t(994484);
let d4 = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, d7.p)(
            n,
            {
                from: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: s ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: r(
            (e, n) =>
                n &&
                (0, l.jsx)(at.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(d8.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(d8.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var ce = t(381941),
    cn = t(231188);
let ct = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(419121),
                t.e(149697),
                t.e(60882),
                t.e(489020),
                t.e(919789),
                t.e(669130),
                t.e(735042),
                t.e(802890),
                t.e(377109),
                t.e(74886),
                t.e(143882),
                t.e(656997),
                t.e(412117),
                t.e(263406),
                t.e(1955),
                t.e(341161),
                t.e(410526),
                t.e(202985),
                t.e(603619),
                t.e(175927),
                t.e(470126),
                t.e(128804),
                t.e(71151),
                t.e(227853),
                t.e(286615),
                t.e(311541),
                t.e(795854),
                t.e(870088),
                t.e(300641),
                t.e(571163),
                t.e(586662),
                t.e(831377),
                t.e(709976),
                t.e(750955),
                t.e(953343),
                t.e(279774),
                t.e(763945),
                t.e(261204),
                t.e(686731),
                t.e(807432),
                t.e(873532),
                t.e(590088),
                t.e(807003),
                t.e(46083),
                t.e(889957),
                t.e(747802),
                t.e(716541),
                t.e(906470),
                t.e(736663),
                t.e(361243),
                t.e(82937),
                t.e(987221),
                t.e(157064),
                t.e(156957),
                t.e(918786),
                t.e(701335),
                t.e(257935),
                t.e(724086),
                t.e(358937),
                t.e(448738),
                t.e(206189),
                t.e(804439),
                t.e(795345),
                t.e(894292),
                t.e(153302),
                t.e(88683),
                t.e(239204),
                t.e(923981),
                t.e(750370),
                t.e(972281),
                t.e(307107),
                t.e(896622),
                t.e(466592),
                t.e(73946),
                t.e(228271),
                t.e(387970),
                t.e(847445),
                t.e(547510),
                t.e(966366),
                t.e(983513),
                t.e(76928),
                t.e(699250),
                t.e(528311),
                t.e(156422),
                t.e(324469),
                t.e(70379),
                t.e(417333),
                t.e(905581),
                t.e(863232),
                t.e(517888),
                t.e(332447),
                t.e(959880),
                t.e(951635),
                t.e(22921),
                t.e(910471),
                t.e(11301),
                t.e(430858),
                t.e(861060),
                t.e(364827),
                t.e(77333),
                t.e(626565),
                t.e(257980),
                t.e(960235),
                t.e(486137),
                t.e(80421),
                t.e(206027),
                t.e(393471),
                t.e(633983),
                t.e(198329),
                t.e(678157),
                t.e(942374),
                t.e(223219),
                t.e(130795),
                t.e(10866),
                t.e(313537),
                t.e(40291),
                t.e(733115),
                t.e(397270),
                t.e(406222),
                t.e(761597),
                t.e(373122),
                t.e(540126),
                t.e(221856),
                t.e(686367),
                t.e(971508),
                t.e(755936),
                t.e(316344),
                t.e(801012),
                t.e(274501),
                t.e(965152),
                t.e(692990),
                t.e(305834),
                t.e(745959),
                t.e(858529),
                t.e(481987),
                t.e(595653),
                t.e(958038),
                t.e(719466),
                t.e(352805),
                t.e(576909),
                t.e(27355),
                t.e(282833),
                t.e(393766),
                t.e(255580),
                t.e(299854),
                t.e(608557),
                t.e(770182),
                t.e(506620),
                t.e(318939),
                t.e(178048),
                t.e(556868),
                t.e(897461),
                t.e(186212),
                t.e(919726),
                t.e(359258),
                t.e(144179),
                t.e(437961),
                t.e(401980),
                t.e(946430),
                t.e(949013),
                t.e(820667),
            ]).then(t.bind(t, 128790)),
        webpackId: 128790,
    }),
    ci = s.createContext(void 0);
function cl(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dm.tj)(t),
        (0, l.jsx)(ci.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: cn.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function cs(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, d3.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(x.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(cn.ZK, e, i), style: s, children: n }),
        })
    );
}
function cr(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: cn.$m, children: n });
}
function ca(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: x } = e,
        [E, C] = s.useState(!1),
        [y, j] = s.useState(null),
        b = (0, A.bG)(
            [l$.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && l$.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [T, N] = s.useState(!1),
        [v, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: L } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, d2.A)(t),
                o = (0, tZ.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iW.A)(n?.id),
                c = (0, A.bG)([tv.A], () => (null != a ? tv.A.getGuild(a.guild_id) : void 0)),
                u = (0, A.yK)([dq.Ay], () => (null != a ? dq.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, A.bG)([lL.A], () => lL.A.isInChannel(a?.id)),
                m = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dX.Ay.isChannelMuted(null, n),
                            i = lR.A.isBlockedOrIgnored(e.user.id);
                        if (t || i) return !0;
                    }
                    return !1;
                }, [u]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != r;
            function g(e) {
                let { children: n, text: t, hasRestrictedOrMutedVCParticipant: i } = e,
                    s = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(dE.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: cn.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : t;
                return (0, l.jsx)(
                    eN.m,
                    {
                        "aria-label": i ? z.intl.string(z.t.d6DpXI) : (t ?? !1),
                        __unsupportedReactNodeAsText: s,
                        shouldShow: !0,
                        children: n,
                    },
                    "voice-preview",
                );
            }
            return {
                voiceBar: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("div", {
                            className: cn.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: m,
                                    children: (0, l.jsxs)(tI.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, iu.iN)(a.id), i?.(a));
                                        },
                                        className: cn.I3,
                                        children: [
                                            (0, l.jsx)(tb.Ay, {
                                                guild: c,
                                                size: tb.Ay.Sizes.SMOL,
                                                className: cn.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oq.ChevronSmallRightIcon, {
                                                size: "xxs",
                                                color: dh.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dC.VoiceNormalIcon, {
                                                size: "xs",
                                                color: dh.A.colors.TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                className: cn.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dz.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dI.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: df._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: cn.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "footnote/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dx.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: m,
                          children: (0, l.jsx)(f.$, {
                              onClick: function () {
                                  null != a &&
                                      lX.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dy.ScreenIcon : dC.VoiceNormalIcon,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: x }),
        { embeddedActivity: O } = (0, d0.A)(h),
        M =
            ((n = O),
            (t = (0, A.bG)([tv.A], () => tv.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, A.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, A.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tZ.Ay)(i)),
            null != n && null != t && null != i && oN.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: cn.kP,
                              children: [
                                  (0, l.jsxs)(tI.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, iu.iN)(i.id),
                                      className: cn.I3,
                                      children: [
                                          (0, l.jsx)(tb.Ay, {
                                              guild: t,
                                              size: tb.Ay.Sizes.SMOL,
                                              className: cn.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oq.ChevronSmallRightIcon, {
                                              size: "xxs",
                                              color: dh.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dp.TextIcon, { size: "xs", color: dh.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              className: cn.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dz.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dI.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: df._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: cn.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "footnote/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dx.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != L && 0 === p.length ? [L] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rM.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tZ.Ay)(o, !0),
        H =
            null != o && E
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        V = E ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function B(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: o7.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, t$.Dr)(m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                E)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dj.A.getOrEnsurePrivateChannel(c.id);
                n = ew.A.getChannel(e) ?? null;
            }
            return (
                d()(null != n, "Send channel must be defined"),
                W({
                    reply: `:${t.name}:`,
                    sendToChannel: n,
                    onComplete: (e, n) => {
                        (S(!0),
                            setTimeout(() => {
                                (N(!1), u(e, n));
                            }, 600));
                    },
                    interactionType: o7.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (y?.focus(),
            await (0, dJ.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: ce.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let Y = g ?? R ?? M;
    function X() {
        (C((e) => !e), w && y?.focus());
    }
    function q(e) {
        (U(e), e && y?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: T ? "none" : "all" },
        children: [
            (0, l.jsx)(d4, { sent: v, shown: T, className: cn.Jt }),
            Y ??
                (0, l.jsx)(d6, {
                    children: (0, l.jsxs)("div", {
                        className: cn.T7,
                        children: [
                            (0, l.jsx)(co, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(dR, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? cn.P2 : cn.VE,
                children: [
                    (0, l.jsx)(dS, {
                        placeholder: H,
                        onEnter: async function (e) {
                            let n;
                            if (((0, t$.Dr)(m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"),
                                    (n = o));
                            else {
                                let e = await dj.A.openPrivateChannel({ recipientIds: c.id }),
                                    t = ew.A.getChannel(e);
                                (d()(null != t, "DM channel must be defined"), (n = t));
                            }
                            let t =
                                n.type === eo.rbe.DM
                                    ? o7.PA.DM_REACTION_MESSAGE_SENT
                                    : o7.PA.CHANNEL_REACTION_MESSAGE_SENT;
                            return W({
                                reply: e,
                                sendToChannel: n,
                                interactionType: t,
                                onComplete: u,
                                requiresChannelReadiness: !0,
                            });
                        },
                        setEditorRef: (e) => j(e),
                        channel: E ? o : void 0,
                        showEmojiButton: null != Y,
                        className: cn.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(tI.D, {
                                          className: cn.wD,
                                          onClick: X,
                                          children: E
                                              ? (0, l.jsx)(dp.TextIcon, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dg.AtIcon, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tI.D, {
                            onClick: () => q(!1),
                            className: cn.i3,
                            children: (0, l.jsx)(t9.XSmallIcon, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: dh.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: cn.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                f.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => q(!0),
                                    size: "md",
                                    text: z.intl.string(z.t.OAJQlP),
                                },
                                "toggleMessageMode",
                            ),
                        P,
                    ],
                }),
        ],
    });
}
let co = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dO.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tS._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: n, url: s } = e;
            return null != s
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eN.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(dY, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: cn.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cd(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d1.A)(i, 3),
        m = (0, A.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d2.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: cn.MH,
        children: [
            (0, l.jsxs)("div", {
                className: cn.WP,
                children: [
                    (0, l.jsx)(dA.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: df._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(dx.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-xs/medium",
                        className: a()(cn.Xn, cn.zA),
                        children: z.intl.format(t, {
                            user0: rM.Ay.getName(o, n?.id, g[0]),
                            user1: rM.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "body-sm/medium", className: a()(cn.Mj, cn.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dZ.A,
                                    {
                                        textClassName: a()(cn.Mj, cn.nk),
                                        text: e,
                                        user: g[0],
                                        channel: n,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                            name1Hook: (e, t) =>
                                (0, l.jsx)(
                                    dZ.A,
                                    {
                                        textClassName: a()(cn.Mj, cn.nk),
                                        text: e,
                                        user: g[1],
                                        channel: n,
                                        onPopoutClosed: r,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                        }),
                    }),
                ],
            }),
            null != p && (0, l.jsx)(dL.Ay, { size: dL.Ay.Sizes.SMALL }),
            null != m && (0, l.jsx)(d5.A, { user: m, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cc(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(tI.D, { className: cn.Zw, onClick: t, children: n });
}
function cu(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: r,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            headerIcons: u,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: g,
            ...f
        } = e,
        { entry: x } = f,
        I = (0, dK.zD)(x),
        E = I ? x.extra?.application_id : void 0,
        C = (0, dU.W)();
    null != C && (E = C);
    let y = (0, dP.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: dM.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => g?.(o7.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: j, smallImage: b } = (0, d$.nO)({
            entry: x,
            showCoverImage: m,
            trackingSource: "memberlist_content_popout",
        }),
        T = (0, A.bG)([dw.A], () => dw.A.getDetectableIdsToApplicationIds()),
        N = I ? y : void 0,
        v = s.useContext(ci);
    return (0, l.jsxs)("div", {
        className: cn.au,
        children: [
            (0, l.jsx)(cd, { disableGameProfileLinks: h, ...f, onUserPopoutClosed: p }),
            (0, l.jsxs)(cs, {
                backgroundImgSrc: j?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: cn.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: cn.Fb,
                                children: (0, l.jsx)(dQ.d, {
                                    image: j,
                                    smallImage: b,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dQ.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: cn.iC,
                                children: [
                                    (0, l.jsx)(cc, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: v,
                                            variant: "heading-sm/medium",
                                            className: a()(cn.$2, { [cn.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cc, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: cn.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dx.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: cn.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != T[E]
                ? (0, l.jsx)(ct, {
                      className: cn.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: on.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function ch(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: r,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            onUserPopoutClosed: u,
            trackRankingItemInteraction: h,
            ...m
        } = e,
        { actionString: p, canWatch: g } = (0, dD.K)(a),
        { entry: f } = m,
        x = (0, dK.zD)(f),
        I = x ? f.extra?.application_id : void 0,
        E = (0, dU.W)();
    null != E && (I = E);
    let C = (0, dP.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dM.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => h?.(o7.PA.OPENED_GAME_PROFILE) },
        ),
        y = x ? C : void 0,
        { activity: j, activityApplication: b, fallbackApplication: T } = (0, d0.A)(f),
        { largeImage: N, smallImage: v } = (0, d$.D8)(j, b ?? T),
        { largeImage: S } = (0, d$.nO)({ entry: f, trackingSource: "memberlist_streaming_content_popout" }),
        L = (0, A.bG)([dw.A], () => dw.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(ci);
    return (0, l.jsxs)("div", {
        className: cn.au,
        children: [
            (0, l.jsx)(cd, { ...m, onUserPopoutClosed: u }),
            (0, l.jsxs)(cs, {
                backgroundImgSrc: S?.src,
                className: cn.uR,
                children: [
                    (0, l.jsx)(cc, {
                        onClick: g
                            ? () => {
                                  (lI.default.selectVoiceChannel(a.channelId), (0, db.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: cn.nh,
                            children: [
                                (0, l.jsx)(dk.A, { className: cn.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: cn.NE,
                                        children: (0, l.jsx)(_.E, {
                                            variant: "body-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: cn.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: cn.Fb,
                                    children: (0, l.jsx)(dQ.d, {
                                        image: N,
                                        smallImage: v,
                                        onClick: o ?? y,
                                        size: dQ.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: cn.gv,
                                children: [
                                    (0, l.jsx)(cc, {
                                        onClick: d ?? y,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-sm/semibold",
                                            className: cn.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cc, {
                                              onClick: c ?? y,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: cn.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dx.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != L[I]
                ? (0, l.jsx)(ct, {
                      className: cn.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: m.channel?.guild_id,
                      channelId: m.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: on.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cA = t(299846);
let cm = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cA.u)(t);
    function u() {
        (0, dd.hg)(t.extra.application_id);
    }
    let { data: h } = (0, n4.YY)(t.extra.application_id),
        A = (0, dr.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let m = (0, l.jsx)(du.iT, { location: du.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(cu, {
            channel: n,
            userDescription: (0, dc.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: m,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dl.A)(d, eo.jUm.JOIN) || (0, ds.A)(d),
        x = g
            ? (0, l.jsx)(da.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dn.DoorEnterIcon,
              })
            : null,
        I =
            null == A
                ? null
                : (0, l.jsx)(f.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: A,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: dt.CloudIcon,
                  }),
        E =
            null != I || r
                ? null
                : (0, l.jsx)(f.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: di.AppsIcon,
                  }),
        C = [I, g && !r ? x : E].filter(sj.Vq);
    return (0, l.jsxs)(cl, {
        children: [
            p,
            (0, l.jsx)(cr, {
                children: (0, l.jsx)(ca, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: C,
                }),
            }),
        ],
    });
};
var cp = t(322789),
    cg = t(808380),
    cf = t(687966),
    cx = t(39623),
    cI = t(960076),
    cE = t(73963),
    cC = t(613412),
    cy = t(139286);
function cj(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, dr.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cy.A)({
            name: cC.ImpressionNames.CLOUD_PLAY_CTA,
            type: cC.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            f.$,
            {
                variant: "primary",
                size: "md",
                icon: dt.CloudIcon,
                text: z.intl.string(z.t["jaYS/h"]),
                onClick: function () {
                    s?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var cb = t(607781),
    c_ = t(648246),
    cT = t(308335),
    cN = t(790381),
    cv = t(266080),
    cS = t(522978),
    cR = t(417869);
function cL(e) {
    let n = (0, A.bG)([cR.A], () => cR.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cS.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cO = t(18282);
let cM = [...cp.n, du.Yq],
    cP = {
        [cg.Y.DESKTOP]: null,
        [cg.Y.LINUX]: null,
        [cg.Y.MACOS]: null,
        [cg.Y.ROBLOX]: null,
        [cg.Y.NINTENDO]: null,
        [cg.Y.IOS]: null,
        [cg.Y.ANDROID]: null,
        [cg.Y.XBOX]: cv.A,
        [cg.Y.PLAYSTATION]: cN.A,
    },
    cD = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: A } = (0, cA.u)(t),
            { streamPreviewUrl: m, stream: p } = (0, d2.A)(t),
            g = t.extra.platform,
            f = t.extra.application_id,
            x = null != g ? cP[g] : null,
            I = cL(g === cg.Y.XBOX ? eo.fg2.XBOX : g === cg.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, n4.YY)(f),
            C = (0, cE.A)(f),
            { analyticsLocations: y } = (0, P.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            j = (0, dr.JC)(E),
            b = (0, cT.o)(h?.application_id ?? A?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(du.mG, {
                location: null == m ? du.N5.POPOUT : du.N5.STREAMING_POPOUT,
                children: cM.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            T =
                null == p
                    ? (0, l.jsx)(cu, {
                          channel: n,
                          headerIcons:
                              null == x
                                  ? null
                                  : (0, l.jsx)(cO.A, { onClick: I, Icon: x, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, dc.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(cb.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: f,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(ch, {
                          channel: n,
                          title: t.extra.game_name,
                          subtitle: c,
                          badges: _,
                          userDescription: z.t["6oWFUN"],
                          entry: t,
                          stream: p,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(cb.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: f,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && j
                    ? (0, l.jsx)(
                          cj,
                          { application: E, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            v = [
                null == N && ((0, dl.A)(h, eo.jUm.JOIN) || (0, ds.A)(h))
                    ? (0, l.jsx)(
                          da.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cf.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cI.A)(h)
                    ? (0, l.jsx)(c_.A, { activity: h, size: "md", variant: "primary", icon: cx.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sj.Vq);
        return (0, l.jsxs)(cl, {
            children: [
                T,
                (0, l.jsx)(cr, {
                    children: (0, l.jsx)(ca, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: n,
                        entry: t,
                        buttons: v,
                    }),
                }),
            ],
        });
    },
    ck = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cw(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, n4.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, dr.Ay)({ application: r, analyticsLocations: a }),
        d = (0, t$.HX)(m.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = ck(),
        A = u === n.id,
        p = c && A ? [m.M.CLOUD_PLAY_POPOVER] : [],
        [g, f] = (0, ag.kn)(p),
        x = g === m.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                x && (f(lM.i.USER_DISMISS), h(null));
            },
            [x, f, h],
        ));
    let [I, E] = s.useState(!1);
    return (
        x && !I && E(!0),
        (0, cy.A)(
            {
                name: cC.ImpressionNames.CLOUD_PLAY_CTA,
                type: cC.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lp.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: x,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/5915cd247ac6483ec4affbfd6004c9f0379475a4de474e3d2021fc013022a823.svg",
            },
            actions: [
                {
                    icon: dt.CloudIcon,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (f(lM.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cU = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cw, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cG = t(363670),
    cF = t(205327),
    cH = t(52133),
    cV = t(835723),
    cB = t(172710),
    cW = t(655116),
    cY = t(763758),
    cz = t(286617),
    cX = t(533207),
    cq = t(121090),
    c$ = t(693879),
    cK = t(809854),
    cZ = t(272984),
    cQ = t(170699);
function cJ(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cK.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, dc.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cQ.lu,
              children: [
                  (0, l.jsx)(c$.z, { entry: t }),
                  (0, l.jsx)("div", { className: cQ.Lt, children: (0, l.jsx)("div", { className: cQ.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cQ.vE,
                      variant: "body-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c0(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: m, user: p } = (0, cG.u7)(r),
        g = cL(eo.fg2.SPOTIFY),
        x = (0, A.bG)(
            [cW.A, sc.default],
            () => (c?.type === oL.$.LISTENING && null != p ? (0, cz.A)(cW.A, sc.default, p, c) : void 0),
            [c, p],
            cH.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === cF.X.SPOTIFY &&
        ((t = () => {
            (0, cB.Mp)(c);
        }),
        (i = () => {
            (0, cB.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cB.Mp)(c);
        }),
        (I = (0, l.jsx)(cY.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: cn.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cB.mN)(c, p.id, e);
            },
        })),
        x?.syncDisabled === !1 &&
            E.push(
                (0, l.jsx)(
                    f.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: cV.UserPlayIcon,
                        onClick: function () {
                            null != x && ((0, cX.A)(x, cZ.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(cu, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cF.X.SPOTIFY
                ? (0, l.jsx)(cO.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cq.A })
                : null,
        userDescription: (0, dc.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: m,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(cJ, { activity: c }),
    });
    return (0, l.jsxs)(cl, {
        children: [
            C,
            (0, l.jsx)(cr, {
                children: (0, l.jsx)(ca, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: E,
                }),
            }),
        ],
    });
}
var c1 = t(903134),
    c2 = t(56121),
    c3 = t(263577),
    c9 = t(868065),
    c6 = t(804779);
let c5 = [du.Y8],
    c7 = [c2.j.WEEK],
    c8 = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, d$.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, dc.TQ)(n);
        return null != r && (0, sj.S1)(r, c7)
            ? (0, l.jsxs)(c9.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c9.UA, {
                          children: [
                              (0, l.jsx)(c9.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(c9.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(du.mG, {
                                  location: du.N5.CARD,
                                  children: c5.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c3.V, { src: s?.src, size: 48, className: c6.xn }),
                  ],
              })
            : null;
    });
var c4 = t(210528);
let ue = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, dc.TQ)(t),
        u = cL(eo.fg2.SPOTIFY);
    if (null == d || !(0, sj.S1)(c, c7)) return null;
    function h() {
        let e = cZ.M0.ALBUM,
            n = c4.A.isProtocolRegistered()
                ? cZ.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : cZ.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cl, {
        children: [
            (0, l.jsx)(cu, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cZ.M0.ARTIST,
                        n = c4.A.isProtocolRegistered()
                            ? cZ.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : cZ.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cF.X.SPOTIFY
                        ? (0, l.jsx)(cO.A, { onClick: u, Icon: cq.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(du.mG, {
                    location: du.N5.POPOUT,
                    children: c5.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cr, {
                children: (0, l.jsx)(ca, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var un = t(977001);
let ut = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cA.u)(t),
        c = (0, dc.ty)(t),
        u = (0, dc.TQ)(t);
    if (null == a || null == c || null == u || !(0, un._E)(u)) return null;
    let h = null != t.extra.platform ? cP[t.extra.platform] : null;
    return (0, l.jsxs)(cl, {
        children: [
            (0, l.jsx)(cu, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cO.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(du.mG, {
                    location: du.N5.POPOUT,
                    children: un.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cr, {
                children: (0, l.jsx)(ca, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var ui = t(514243),
    ul = t(347306),
    us = t(889558),
    ur = t(998218);
let ua = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cL(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = ur.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, us.h)({ href: ur.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cl, {
              children: [
                  (0, l.jsx)(cu, {
                      channel: n,
                      entry: t,
                      userDescription: (0, dc.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cO.A, {
                          onClick: a,
                          Icon: ul.CrunchyrollNeutralIcon,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(du.mG, {
                          location: du.N5.POPOUT,
                          children: ui.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cr, {
                      children: (0, l.jsx)(ca, {
                          onReaction: i,
                          onVoiceChannelPreview: s,
                          user: r,
                          channel: n,
                          entry: t,
                      }),
                  }),
              ],
          });
};
function uo(e) {
    return e?.type === o5.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oP.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function ud(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oP.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cp.A, { ...t, entry: n });
        case oP.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ui.A, { ...t, entry: n });
        case oP.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(un.Ay, { ...t, entry: n });
        case oP.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(c8, { ...t, entry: n });
        case oP.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cG.Ay, { ...t, entry: n });
        case oP.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(de.A, { ...t, entry: n });
        default:
            return null;
    }
}
function uc(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oP.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cU, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uu(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uh, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(o7.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uh(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oP.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cD, { ...t, entry: n });
        case oP.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ua, { ...t, entry: n });
        case oP.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ut, { ...t, entry: n });
        case oP.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ue, { ...t, entry: n });
        case oP.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c0, { ...t, entry: n });
        case oP.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cm, { ...t, entry: n });
        default:
            return null;
    }
}
let uA = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        m = (0, y.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: f } = (0, cA.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(oW);
        s.useEffect(() => n(e), [n, e]);
    })(r.entry.id);
    let x = s.useMemo(
            () => ({
                entry: r.entry,
                channelId: r.channel.id,
                guildId: r.channel.guild_id,
                requestId: r.requestId,
                richPresenceName: g ? f : void 0,
            }),
            [f, r.channel.guild_id, r.channel.id, r.entry, r.requestId, g],
        ),
        I = s.useRef(!1),
        [E, j] = s.useState(!1),
        [b, _] = s.useState(!1),
        T = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        E && T && _(!0);
    }, [E, T]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
                        let { default: e } = await t.e(789346).then(t.bind(t, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, p],
        ),
        v = s.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o4(e, { ...x, ...n });
            },
            [x],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        o4(o7.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(() => {
            ((I.current = !1),
                setTimeout(() => {
                    I.current || (j(!1), _(T));
                }, 100));
        }, [T]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(uc, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && j(!0), R(x));
                        }, 100));
                },
                onMouseLeave: L,
                children: (0, l.jsx)(nk.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(c1.J.Provider, {
                            value: L,
                            children: (0, l.jsx)(uu, {
                                closePopout: n,
                                updatePopoutPosition: v,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: E,
                    positionKey: o,
                    onRequestOpen: () => R(x),
                    onRequestClose: () => {
                        b && L();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(tI.D, {
                            ...e,
                            ...m,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || j(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(ud, {
                                ...r,
                                selected: t,
                                hovered: I.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var um = t(531685),
    up = t(99066),
    ug = t(376261),
    uf = t(99753),
    ux = t(136722),
    uI = t(949744);
let uE = [],
    uC = new Set(),
    uy = new Set();
var uj = t(214693);
let ub = new Set([
    oP.ContentInventoryEntryType.PLAYED_GAME,
    oP.ContentInventoryEntryType.WATCHED_MEDIA,
    oP.ContentInventoryEntryType.TOP_GAME,
    oP.ContentInventoryEntryType.TOP_ARTIST,
    oP.ContentInventoryEntryType.LISTENED_SESSION,
    oP.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var u_ = t(498642);
let uT = (0, so.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uN = t(293860);
let uv = { cooldownDurationMs: 60 * sr.A.Millis.DAY };
function uS(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uT.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sA(),
                i = (0, A.bG)([u_.A], () => u_.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(ly.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uv,
        groupName: lM.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sI, {
                      className: uN.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uR = t(728321),
    uL = t(282006);
let uO = er.Ay.getEnableHardwareAcceleration(),
    uM = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uP = s.memo(function (e) {
        let {
                colorString: n,
                colorStrings: i,
                colorRoleName: r,
                colorRoleId: a,
                isOwner: o,
                nick: d,
                user: c,
                currentUser: u,
                activities: h,
                applicationStream: A,
                status: m,
                channel: p,
                guildId: g,
                isTyping: f,
                isMobileOnline: x,
                isVROnline: I,
                premiumSince: E,
                nameplate: y,
                ...j
            } = e,
            _ = s.useRef(null),
            [T, N] = s.useState(!1),
            v = null != E ? new Date(E) : null,
            { analyticsLocations: S } = (0, P.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, C.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                t.e(463317),
                                t.e(893190),
                                t.e(189673),
                                t.e(576432),
                                t.e(797558),
                                t.e(451162),
                                t.e(576665),
                                t.e(624198),
                                t.e(245996),
                                t.e(700792),
                                t.e(144472),
                                t.e(552172),
                                t.e(529422),
                                t.e(823427),
                                t.e(309291),
                                t.e(307059),
                                t.e(343116),
                                t.e(470314),
                                t.e(70515),
                                t.e(404524),
                                t.e(654148),
                                t.e(666939),
                                t.e(281165),
                                t.e(184841),
                            ]).then(t.bind(t, 107632)),
                            n = lL.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                user: c,
                                guildId: g,
                                channel: p,
                                showMediaItems: n,
                                analyticsLocations: S,
                            });
                    });
                },
                [c, g, p, S],
            ),
            O = s.useCallback(() => {
                let e = `@${es.Ay.getUserTag(c, { decoration: "never" })}`,
                    n = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    L.A.startTyping(p.id));
            }, [c, p.id]),
            M = s.useCallback(
                (e) => {
                    null != g &&
                        (e.stopPropagation(),
                        (0, w.K4)({
                            guildId: g,
                            location: { section: eo.JJy.MEMBER_LIST, object: eo.ZSU.BOOST_GEM_ICON },
                        }));
                },
                [g],
            );
        return (0, l.jsx)(q.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: O,
            shouldShow: T,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: t, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uO,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: m,
                    activities: h,
                    applicationStream: A,
                    isOwner: o,
                    premiumSince: v,
                    colorString: n,
                    colorStrings: i,
                    colorRoleName: r,
                    isTyping: f,
                    channel: p,
                    guildId: g,
                    isMobile: x,
                    isVR: I,
                    onClickPremiumGuildIcon: M,
                    selected: T,
                    itemProps: j,
                    nameplate: y,
                    onClick: (e) => {
                        e.shiftKey ? O?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        T ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uD = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, y.rm)(`${r}`),
            o = (0, A.bG)([J.A], () => J.A.isTyping(i.id, s.id)),
            d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, A.bG)([B.A], () => (null != n ? B.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uP, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uk(e) {
    let { index: n } = e,
        t = (0, y.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uw extends s.Component {
    _list = null;
    _firstApplicationIdOccurrences = null;
    _lastRowsVersion;
    lastReportedAnalyticsChannel;
    shouldComponentUpdate(e) {
        return (
            e.channel.id !== this.props.channel.id ||
            e.version !== this.props.version ||
            e.groups.length !== this.props.groups.length
        );
    }
    componentDidMount() {
        (this.updateSubscription(), this.trackMemberListViewed());
    }
    componentDidUpdate(e) {
        (e.channel.id !== this.props.channel.id && this.updateSubscription(),
            this.trackMemberListViewed(),
            this.updateMaxContentFeedRowSeen());
    }
    setList = (e) => {
        ((this._list = e), (this.props.listRef.current = e));
    };
    renderSection = (e) => {
        let { section: n } = e,
            { groups: t, channel: i } = this.props,
            r = t[n];
        if (r?.id === oJ) return (0, s.createElement)(o9, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uR.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uM,
                    children: (0, s.createElement)(uL.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uL.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
    };
    getRowProps = (e) => {
        let { groups: n, rows: t } = this.props,
            i = n[e.section];
        if (null == i) return null;
        let { index: l } = i;
        return null == l || "row" !== e.type ? null : t[l + 1 + e.row];
    };
    getFirstApplicationIdOccurrences = () => {
        let { rows: e, version: n } = this.props;
        if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === n)
            return this._firstApplicationIdOccurrences;
        let t = new Set(),
            i = new Set();
        for (let n of e)
            if (null != n && n.type === o5.S9.CONTENT_INVENTORY) {
                let { entry: e } = n;
                if ("application_id" in e.extra && null != e.extra.application_id) {
                    let n = e.extra.application_id;
                    t.has(n) || (t.add(n), i.add(e.id));
                }
            }
        return ((this._firstApplicationIdOccurrences = i), (this._lastRowsVersion = n), i);
    };
    renderRow = (e) => {
        let { section: n, row: t, rowIndex: i } = e,
            { channel: s } = this.props,
            r = this.getRowProps(e);
        if (null != r) {
            if (r.type === o5.S9.MEMBER && "user" in r) {
                let {
                    colorString: e,
                    colorStrings: n,
                    colorRoleId: t,
                    user: a,
                    status: o,
                    isOwner: d,
                    isMobileOnline: c,
                    isVROnline: u,
                    nick: h,
                    activities: A,
                    applicationStream: m,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    uD,
                    {
                        colorString: e,
                        colorStrings: n,
                        colorRoleId: t,
                        user: a,
                        status: o,
                        isOwner: d,
                        nick: h,
                        activities: A,
                        applicationStream: m,
                        channel: s,
                        guildId: s.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: u,
                        index: i,
                    },
                    `member-${r.user.id}`,
                );
            }
            if (r.type === o5.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uA,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === o5.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(o6, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uk, { index: i }, `placeholder-${n}:${t}`);
    };
    handleScroll = () => {
        (this.updateSubscription(), this.updateMaxContentFeedRowSeen());
    };
    updateMaxContentFeedRowSeen = u().debounce(() => {
        let e = this._list;
        if (null == e) return;
        let { offsetHeight: n, scrollTop: t } = e.getScrollerState(),
            i = t + n - this.props.sectionHeight;
        this.props.updateMaxContentFeedRowSeen(i);
    }, 50);
    getContentFeedGroup = () => {
        let e = this.props.groups[0];
        if (e?.id === oJ) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uo(t[i + 1 + l]) : n;
            };
        }
        return n;
    };
    getContentFeedHeight = () => {
        let e = this.getContentFeedGroup();
        return null != e ? e.feedHeight + this.props.sectionHeight : 0;
    };
    getContentFeedAdjustedDimensions(e) {
        let { height: n, rowHeight: t, y: i } = e,
            l = this.getContentFeedHeight(),
            s = Math.max(0, n - Math.max(0, l - i)),
            r = Math.floor(s / t);
        return { height: s, rowHeight: t, rowsVisible: r, y: Math.max(0, i - l) };
    }
    getDimensions() {
        let e = this._list;
        if (null == e) return { y: 0, height: 0, rowHeight: 0 };
        let { offsetHeight: n, scrollTop: t } = e.getScrollerState(),
            { rowHeight: i } = this.props,
            l = Math.floor(n / i);
        return this.getContentFeedAdjustedDimensions({ height: n, rowHeight: i, rowsVisible: l, y: t });
    }
    updateSubscription = u().debounce(() => {
        if (null == this._list) return;
        let { channel: e } = this.props,
            { rowHeight: n, y: t, height: i } = this.getDimensions();
        (0, F.NJ)({ guildId: e.guild_id, channelId: e.id, y: t, height: i, rowHeight: n });
    }, 50);
    trackMemberListViewed = () => {
        if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
        let e = this._list?.getItems(),
            { rowsVisible: n } = this.getDimensions();
        if (void 0 === n || 0 === n || null == e) return;
        this.hasContentFeed() && (e = e.filter((e) => 0 !== e.section));
        let t = e
            .map((e) => this.getRowProps(e))
            .slice(0, n + 1)
            .filter(sj.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== o5.S9.MEMBER ||
                    (e.num_users_visible++,
                    n.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != n.activities &&
                        n.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        n.activities.some((e) => e.type === oL.$.PLAYING) && e.num_users_visible_with_game_activity++),
                    null != n.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++,
                    n.user.collectibles?.nameplate != null && e.num_users_visible_with_nameplate++),
                e
            ),
            {
                num_users_visible: 0,
                num_users_visible_with_mobile_indicator: 0,
                num_users_visible_with_game_activity: 0,
                num_users_visible_with_activity: 0,
                num_users_visible_with_avatar_decoration: 0,
                num_users_visible_with_nameplate: 0,
            },
        );
        ((this.lastReportedAnalyticsChannel = this.props.channel.id),
            eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_VIEWED, { ...i }));
    };
    render() {
        let { groups: e, listId: n, channel: t, sectionHeight: i } = this.props;
        return (0, l.jsx)(N.sk, {
            children: (s) =>
                (0, l.jsx)(sK.V0, {
                    children: (r) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": r,
                            children: (0, l.jsx)(rS.F, {
                                component: (0, l.jsx)(rR.A, {
                                    children: (0, l.jsx)(rS.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tZ.m1)(t, ee.default, lR.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(y.PR, {
                                    children: (t) => {
                                        let { ref: r, role: o, ...d } = t;
                                        return (0, l.jsx)(
                                            v.OZ,
                                            {
                                                role: o,
                                                "aria-label": z.intl.string(z.t["9Oq93m"]),
                                                ref: (e) => {
                                                    ((this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (r.current = e?.getScrollerNode() ?? null));
                                                },
                                                className: a()(ec.ol, { [ec.Ij]: b.Fr }),
                                                paddingTop: 0,
                                                sectionHeight: i,
                                                rowHeight: this.getRowHeightComputer(),
                                                renderSection: this.renderSection,
                                                renderRow: this.renderRow,
                                                sections: e.map((e) => e.count),
                                                onScroll: this.handleScroll,
                                                fade: !0,
                                                ...d,
                                                ...s,
                                            },
                                            n,
                                        );
                                    },
                                }),
                            }),
                        }),
                }),
        });
    }
}
function uU(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(M.A.MEMBER_LIST),
        r = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, A.cf)([o5.Ay], () => o5.Ay.getProps(n.guild_id, n.id)),
        {
            rows: d,
            groups: c,
            version: u,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: n, rows: t, version: i },
                    channelId: l,
                    guildId: r,
                } = e,
                [a, o] = s.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var n, t;
                    let i,
                        l = (0, uj.A)({ id: o7.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cH.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uI.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, A.yK)(
                                [K.Ay],
                                () => {
                                    if (null == l) return uE;
                                    let e = [];
                                    for (let n of a) K.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uC;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    ux.zy(t, Y.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => ub.has(e.content_type)), [l])),
                        (i = (0, A.bG)(
                            [oZ.A, uf.A],
                            () => {
                                let e = uf.A.getDebugImpressionCappingDisabled();
                                return !(0, up.sE)("useFilterImpressionCappedContent") || e
                                    ? uy
                                    : oZ.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uy };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, dc.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, A.bG)([uf.A], () => uf.A.getFeedRequestId(o7.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(oW).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, A.bG)([oZ.A], () => oZ.A.hidden),
                m = (0, A.bG)([um.A], () => um.A.isFocused()),
                p = (0, A.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, A.bG)([tv.A], () => tv.A.getGuild(r), [r]),
                f = ((0, ug.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [x, I, E, C] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !f) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: o5.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: o5.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let A = {
                        id: oJ,
                        type: o5.S9.CONTENT_INVENTORY_GROUP,
                        key: oJ,
                        count: e.length,
                        index: t.length,
                        title: z.intl.string(z.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let n = !e;
                                return (
                                    et.default.track(eo.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: l,
                                        guild_id: r,
                                        expanded: n,
                                    }),
                                    n
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(uo).reduce((e, n) => e + n, 0),
                    };
                    return [[A, ...n], [...t, A, ...e], Math.random(), e];
                }, [l, c, a, n, r, d, t, i, h, f]),
                y = s.useRef(0),
                j = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                T = s.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(C?.length ?? 0, n);
                        y.current = Math.max(y.current, t);
                    },
                    [C],
                );
            return (
                s.useEffect(() => {
                    j.current = c;
                }, [c]),
                s.useEffect(() => {
                    _.current = { impressionCappedEntryIds: u };
                }, [u]),
                s.useEffect(
                    () => (
                        (y.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = j.current?.map((e) => e.id) ?? [],
                                n = e.slice(0, y.current);
                            !h &&
                                m &&
                                f &&
                                (o8(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: o7.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, up.sE)("useInjectContentInventoryFeed") &&
                                    eq.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, m, f],
                ),
                { groups: x, rows: I, version: E, updateMaxRowSeen: T }
            );
        })({ memberStoreProps: o, channelId: n.id, guildId: n.guild_id }),
        m = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oO.W)("lg") + (0, oO.W)("xxs"),
        f = s.useCallback(
            (e, n) => {
                let t = m.current;
                if (null == t) return;
                let i = n === o0 || n === o1 ? 0 : parseInt(n, 10),
                    [l, s] = t.getSectionRowFromIndex(i);
                t.scrollToIndex({
                    section: l,
                    row: s,
                    padding: 42 * (0 === l && 0 === s),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        x = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = m.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = m.current;
                    if (null == n) return e();
                    n.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        E = (0, j.Ay)({ id: `members-${n.id}`, setFocus: f, isEnabled: r, scrollToStart: x, scrollToEnd: I });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uS, { guildId: n.guild_id }),
                (0, l.jsx)(y.hD, {
                    navigator: E,
                    children: (0, l.jsx)(uw, {
                        ...e,
                        ...o,
                        version: u,
                        groups: c,
                        rows: d,
                        listRef: m,
                        updateMaxContentFeedRowSeen: h,
                        sectionHeight: 18 + g,
                        rowHeight: 42,
                    }),
                }),
            ],
        }),
    });
}
function uG(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(oY, { children: (0, l.jsx)(uU, { channel: i, className: t }) }), [i, t]);
}
var uF = t(888904);
let uH = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uF.kL,
        children: [
            (0, l.jsxs)(lm.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lm.A.Icon, { icon: dp.TextIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(lm.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uF.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uF.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uF.fh,
                        variant: "body-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uV = t(909735),
    uB = t(205375),
    uW = t(108926),
    uY = t(746080),
    uz = t(516607),
    uX = t(999900);
function uq() {
    return (0, l.jsx)("div", { className: uX.wG, children: (0, l.jsx)(g.y, {}) });
}
let u$ = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(229511),
                t.e(599660),
                t.e(452880),
                t.e(726399),
                t.e(500194),
                t.e(207309),
                t.e(351598),
                t.e(302800),
                t.e(666140),
                t.e(583518),
                t.e(704374),
                t.e(777848),
                t.e(689160),
                t.e(623685),
                t.e(714573),
                t.e(218911),
                t.e(421225),
                t.e(943351),
            ]).then(t.bind(t, 745431)),
        webpackId: 745431,
        renderLoader: uq,
        name: "ForumChannel",
    }),
    uK = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([t.e(770583), t.e(43853), t.e(87729), t.e(154168), t.e(979585), t.e(357718), t.e(415905)]).then(
                t.bind(t, 676792),
            ),
        webpackId: 676792,
        renderLoader: uq,
        name: "AppChannel",
    });
function uZ() {
    return Promise.all([
        t.e(991625),
        t.e(280574),
        t.e(401425),
        t.e(113561),
        t.e(368991),
        t.e(494925),
        t.e(269714),
        t.e(593779),
        t.e(918221),
        t.e(656997),
        t.e(828849),
        t.e(944121),
        t.e(655282),
        t.e(375971),
        t.e(792818),
        t.e(352694),
        t.e(460582),
        t.e(477751),
        t.e(245851),
        t.e(103377),
        t.e(655910),
        t.e(794188),
        t.e(188526),
        t.e(374962),
        t.e(770583),
        t.e(907467),
        t.e(43853),
        t.e(102170),
        t.e(28094),
        t.e(371547),
        t.e(503681),
        t.e(389684),
        t.e(45646),
        t.e(934081),
        t.e(880186),
        t.e(250837),
        t.e(93372),
        t.e(971848),
        t.e(847810),
        t.e(249727),
        t.e(784573),
        t.e(918024),
        t.e(258398),
        t.e(700792),
        t.e(552172),
        t.e(838090),
        t.e(203930),
        t.e(903663),
        t.e(309291),
        t.e(144179),
        t.e(658216),
        t.e(437961),
        t.e(829260),
        t.e(555732),
        t.e(255895),
        t.e(746479),
        t.e(79216),
        t.e(545006),
        t.e(419360),
        t.e(528384),
        t.e(949013),
        t.e(202669),
        t.e(886913),
        t.e(256373),
        t.e(749736),
        t.e(119454),
        t.e(587732),
        t.e(420577),
        t.e(40811),
        t.e(349740),
        t.e(795752),
        t.e(87729),
        t.e(360536),
        t.e(704374),
        t.e(998882),
        t.e(300619),
        t.e(465694),
        t.e(874821),
        t.e(13107),
        t.e(932011),
        t.e(154168),
        t.e(769014),
        t.e(815057),
        t.e(654624),
        t.e(241411),
        t.e(830224),
        t.e(45916),
        t.e(979585),
        t.e(678827),
        t.e(606913),
        t.e(314117),
        t.e(291553),
        t.e(277749),
        t.e(61924),
        t.e(304110),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(736793),
        t.e(949486),
        t.e(357718),
        t.e(276293),
        t.e(676510),
        t.e(586546),
        t.e(431692),
        t.e(613637),
        t.e(792461),
    ]).then(t.bind(t, 540462));
}
let uQ = (0, tl.Fe)({ createPromise: uZ, webpackId: 540462, name: "ChannelCall", renderLoader: uq });
function uJ() {
    return Promise.all([
        t.e(770583),
        t.e(103377),
        t.e(368991),
        t.e(280574),
        t.e(494925),
        t.e(269714),
        t.e(593779),
        t.e(918221),
        t.e(656997),
        t.e(828849),
        t.e(944121),
        t.e(655282),
        t.e(375971),
        t.e(792818),
        t.e(352694),
        t.e(45646),
        t.e(389684),
        t.e(655910),
        t.e(794188),
        t.e(460582),
        t.e(477751),
        t.e(188526),
        t.e(153965),
        t.e(258398),
        t.e(700792),
        t.e(552172),
        t.e(838090),
        t.e(203930),
        t.e(903663),
        t.e(309291),
        t.e(144179),
        t.e(437961),
        t.e(829260),
        t.e(555732),
        t.e(255895),
        t.e(746479),
        t.e(79216),
        t.e(545006),
        t.e(419360),
        t.e(528384),
        t.e(949013),
        t.e(202669),
        t.e(886913),
        t.e(256373),
        t.e(749736),
        t.e(587732),
        t.e(420577),
        t.e(40811),
        t.e(349740),
        t.e(360536),
        t.e(704374),
        t.e(300619),
        t.e(465694),
        t.e(874821),
        t.e(13107),
        t.e(769014),
        t.e(654624),
        t.e(241411),
        t.e(45916),
        t.e(979585),
        t.e(678827),
        t.e(606913),
        t.e(314117),
        t.e(291553),
        t.e(277749),
        t.e(61924),
        t.e(304110),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(564001),
        t.e(949239),
    ]).then(t.bind(t, 705258));
}
let u0 = (0, tl.Fe)({ createPromise: uJ, webpackId: 705258, name: "StageChannelCall", renderLoader: uq }),
    u1 = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(969016),
                t.e(597645),
                t.e(217921),
                t.e(855151),
                t.e(18420),
                t.e(527552),
                t.e(583518),
                t.e(428235),
                t.e(966016),
                t.e(462984),
                t.e(369501),
                t.e(671367),
                t.e(322274),
                t.e(220803),
                t.e(136515),
                t.e(79171),
                t.e(17874),
                t.e(85475),
                t.e(662368),
            ]).then(t.bind(t, 926916)),
        webpackId: 926916,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sO, {});
        },
    }),
    u2 = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(577154),
                t.e(424216),
                t.e(877730),
                t.e(611899),
                t.e(18420),
                t.e(527552),
                t.e(217921),
                t.e(487873),
                t.e(765626),
                t.e(683302),
                t.e(728136),
                t.e(507775),
                t.e(428235),
                t.e(636002),
                t.e(966016),
                t.e(462984),
                t.e(369501),
                t.e(218489),
                t.e(322274),
                t.e(466913),
                t.e(71719),
                t.e(213848),
            ]).then(t.bind(t, 956972)),
        webpackId: 956972,
        name: "GuildMemberModViewSidebar",
    }),
    u3 = (0, tl.Fe)({
        createPromise: () =>
            Promise.all([t.e(276604), t.e(269178), t.e(51919), t.e(53923), t.e(90445)]).then(t.bind(t, 839964)),
        webpackId: 839964,
        name: "FriendsSidebar",
    });
function u9(e) {
    let { channel: n, guild: t, showTopic: i } = e,
        s = (0, l8.ZF)(n, "channel_header_label");
    return (0, l.jsxs)(l.Fragment, {
        children: [s ? (0, l.jsx)(l8.yw, { channel: n }) : null, i ? (0, tJ.EP)(n, t, s ? "bar" : "dot") : null],
    });
}
class u6 extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, rv.d0)("guild_channel"), this.maybePreloadChannelCall());
    }
    componentDidUpdate(e) {
        (null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal());
    }
    isChatInSidebar() {
        let { channel: e, dmAppChannelApplicationId: n } = this.props;
        return null != e && ((0, oN.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? uZ()
            : e === eo.rbe.GUILD_STAGE_VOICE && uJ();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, iu.iN)(e.id);
    };
    _handleContextMenu = (e, n) => {
        switch (n.type) {
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_APP:
                this.openChannelContextMenu(e, n);
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, n);
                break;
            case eo.rbe.DM:
                this.openDMContextMenu(e, n);
        }
    };
    handleContextMenu = (e) => {
        (d()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel));
    };
    handleParentContextMenu = (e) => {
        (d()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel));
    };
    handleThreadSidebarResize = (e, n) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: n });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        (d()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, nY.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [M.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(926132),
                    t.e(309004),
                    t.e(430997),
                    t.e(379995),
                    t.e(544058),
                    t.e(591377),
                    t.e(35723),
                    t.e(256372),
                    t.e(29542),
                    t.e(135610),
                ]).then(t.bind(t, 834881));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            }));
    }
    openThreadContextMenu(e, n) {
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([t.e(926132), t.e(491001), t.e(965789), t.e(420105)]).then(
                    t.bind(t, 949488),
                );
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            }));
    }
    openDMContextMenu(e, n) {
        d()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(n.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, C.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e(463317),
                    t.e(926132),
                    t.e(893190),
                    t.e(146652),
                    t.e(189673),
                    t.e(491001),
                    t.e(576432),
                    t.e(797558),
                    t.e(451162),
                    t.e(576665),
                    t.e(245996),
                    t.e(700792),
                    t.e(965789),
                    t.e(552172),
                    t.e(529422),
                    t.e(823427),
                    t.e(309291),
                    t.e(150773),
                    t.e(307059),
                    t.e(935483),
                    t.e(17244),
                    t.e(298199),
                    t.e(861649),
                    t.e(439778),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(uY.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iV.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(n7.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dV.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iF.A,
                  { size: dL.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: n,
            isLurking: t,
            showCall: i,
            showActivityPanel: s,
            showFramePanel: r,
            dmAppChannelApplicationId: a,
        } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let o = [];
        if (e.isSystemDM()) return o;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
                break;
            case eo.rbe.DM:
                (o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lk, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lw.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(nb, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(l1, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lz, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lk, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lw.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(iC, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rg.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lK, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iN, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(nN, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && o.push((0, l.jsx)(ln, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rC, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rg.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nv.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                    (0, ti.PD)(e.guild_id, "channel_header") && o.push((0, l.jsx)(i6, {}, "conversations")),
                    o.push((0, l.jsx)(nN, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && o.push((0, l.jsx)(ln, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(tt, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rg.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nv.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i5.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(n0, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lA, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(ld, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nv.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(nN, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
        }
        return o;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        d()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let n = [];
        if (e.isSystemDM()) return n;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
                break;
            case eo.rbe.GROUP_DM:
                n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(nN, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: uX.u8,
                  children: (0, l.jsx)(f.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.mM)(async () => {
                              let { default: e } = await Promise.all([t.e(836178), t.e(670774)]).then(
                                  t.bind(t, 464035),
                              );
                              return (t) => (0, l.jsx)(e, { channel: n, ...t });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: n,
            parentChannel: t,
            guild: i,
            guildId: s,
            showActivityPanel: r,
            showFramePanel: o,
            hasVideo: c,
            showHeaderGuildBreadcrumb: u,
            isAppChannelChatExpanded: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != n, "Should not be null if channel is not null."));
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, iu.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            I = p || g;
        return (0, l.jsxs)("div", {
            className: uX.SC,
            children: [
                (0, l.jsx)(x.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lm.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uX.DD, r, { [uX.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: I,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(tJ.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tJ.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: c,
                                        isAppChannelChatExpanded: h,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    (0, l.jsx)(u9, { channel: e, guild: i, showTopic: !h && !u }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: uX.u8,
                                              children: (0, l.jsx)(nr, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: uX.u8,
                                                children: (0, l.jsx)(f.$, {
                                                    onClick: () => (0, ns.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : null,
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sS.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: n, spoilerGatingChannelId: t } = this.props;
        return !n && null == t && e;
    }
    renderCall() {
        let { channel: e, isStageUnifiedCall: n } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case eo.rbe.GUILD_STAGE_VOICE:
                if (!n) return (0, l.jsx)(u0, { channel: e, popoutType: n6.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uQ,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: n6.N.NO_POPOUT,
                    },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            n = this.shouldRenderCall();
        if ((d()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), n)) return null;
        let t = this.props.height - 200;
        return (0, l.jsx)(e4, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: n,
            needSubscriptionToAccess: t,
            channelIsContentGated: i,
            spoilerGatingChannelId: s,
            showCall: r,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), t))
            return (d()(null != n, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(i$, { guildId: n.id })
                : (0, l.jsx)(iB.H, { guildId: n.id, children: (0, l.jsx)(i2, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(ob.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(t1.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tq, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(u$, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(tQ.A, { channel: e, guild: n, chatInputType: n5.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(uK, { channel: e }, e.id);
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: n,
            guild: t,
            needSubscriptionToAccess: i,
            section: s,
            showCall: r,
            showActivityPanel: a,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (s === eo.YvQ.PROFILE && e.isPrivate() && !r && !a && !o)
            return (0, l.jsx)(oj, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sv, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uG, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uG, { channel: n }, `channel-members-${n.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(ep, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(u1, { guildId: t?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: n,
            hasModalOpen: i,
            showWelcomeModal: s,
            isLurking: r,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == n ||
                a ||
                i ||
                (o &&
                    (0, p.mM)(
                        async () => {
                            let { default: e } = await t.e(638763).then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iH(l6.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.mM)(
                        async () => {
                            let { default: e } = await Promise.all([t.e(99643), t.e(217388)]).then(t.bind(t, 538471));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, o_.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: n,
                section: t,
                channelSidebarState: i,
                guildSidebarState: s,
                width: r,
                channelIsContentGated: a,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == i) return null;
        if (t === eo.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
            switch (i.type) {
                case sP.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(rd, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sP.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(rN, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sP.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iD : rN;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(uW.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sP.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sP.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: 480 },
                    className: uX.uC,
                    children: (0, l.jsx)(u2, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => sM.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = r - 240 - (n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450);
        return (
            (d += 375),
            (0, l.jsx)(oR.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? oR.X.PostSidebar : oR.X.ThreadSidebar,
                maxWidth: d,
                capturePointer: this.isChatInSidebar(),
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: n,
                formattedChannelName: t,
                isUnavailable: i,
                layout: s,
                section: r,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
                friendsSidebarExperimentEnabled: u,
                canShowFriendsSidebar: h,
                friendsSidebarAppBarToggleEnabled: A,
                friendsSidebarCollapsed: m,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            f = h && s !== eo.DUB.FULL_SCREEN && (!A || !m),
            x = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uH, {});
        if (null == e) return (0, l.jsx)(uB.A, { channelId: this.props.channelId });
        let I = r === eo.YvQ.SIDEBAR_CHAT,
            E = (0, uV.UN)("Channel"),
            C = null != d && !I,
            y =
                ((0, oN.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            j = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !x,
                        className: a()(uX.TE, {
                            [uX.js]: (I && !E) || C,
                            [uX.Rs]: I ? !E || g : C || f,
                            [uX.jl]: I && g,
                        }),
                        children: [
                            y
                                ? (0, l.jsx)(ef.A, {
                                      style: { right: I ? p : void 0 },
                                      className: uX.x4,
                                      channel: e,
                                      draftType: iO.C.ChannelMessage,
                                  })
                                : null,
                            x || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uX.Qs, { [uX.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(ts.HI, { location: j, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uX.zP, children: b }) : b,
                f && (0, l.jsx)(u3, {}),
            ],
        });
    }
}
let u5 = (0, ex.A)(u6),
    u7 = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            f = (0, A.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            x = (0, tK.DZ)(),
            C = (0, tK.e4)(f),
            y = (0, A.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            j = C?.parent_id,
            b = (0, A.bG)([ew.A], () => ew.A.getChannel(j), [j]),
            _ = (0, A.bG)([tv.A], () => tv.A.getGuild(C?.guild_id), [C]),
            { needSubscriptionToAccess: T } = (0, iW.A)(C?.id ?? void 0),
            N = (0, A.bG)(
                [n9.A],
                () => {
                    let e = null != c ? n9.A.getParticipants(c) : [],
                        n = null != c ? n9.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            v = (0, iG.A)(),
            S = (0, A.bG)([eU.Ay], () => (v?.channelId ?? eU.Ay.getVoiceChannelId()) === C?.id),
            R = (0, A.bG)([eC.Ay], () => (null != C ? eC.Ay.getSelfEmbeddedActivityForChannel(C.id) : null), [C]),
            L = (0, A.bG)([oS.A], () => oS.A.isConnected()),
            O = (0, eE.Ay)(L),
            M = L && !1 === O;
        s.useEffect(() => {
            S &&
                M &&
                null != R &&
                null != C &&
                I.A.selectParticipant(
                    C.id,
                    (0, n3.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [M, C, S, R]);
        let P = (0, A.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            D = (0, A.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            k = null != P && !(0, eT.A)(C?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, A.cf)([lL.A], () =>
                null != C && C.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lL.A.getVoiceStatesForChannel(C.id)),
                          isUserInThisVoice: lL.A.isInChannel(C.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != C && C.isPrivate() && !k && N,
            H = C?.isGuildVocal() || F || (U && (G || !w)),
            V = (0, sk.e)(C, "channel"),
            B = (0, A.bG)([te.A], () => {
                let e = (0, nq.ny)(te.A.getMainFrame());
                return e?.data.layoutMode === nq.y0.FOCUSED && e.intent === nq.sV.MAIN;
            }),
            { welcomeModalChannelId: W } = (0, h.zy)(),
            Y = (0, A.bG)([nu.A], () => null != C && nu.A.isLurking(C.guild_id), [C]),
            z = (0, A.bG)([oT.A], () => oT.A.hasSeen(C?.guild_id, Y), [C, Y]),
            X = (0, A.bG)(
                [n9.A, eC.Ay],
                () =>
                    null != eC.Ay.getConnectedActivityLocation() && eC.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? eC.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? n9.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            q =
                ((n = _?.id),
                (r = (0, A.bG)([tv.A, l9, ee.default, K.Ay], () => {
                    let e = tv.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l9.hasViewedPrompt(l6.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = K.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || iH(l6.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            $ =
                ((t = _?.id),
                (0, A.bG)([ew.A, tv.A, eU.Ay], () => {
                    let e = tv.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(W);
                    return W === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oN.ke)(n.type);
                })),
            { section: Q, channelSidebarState: J } = (0, A.cf)(
                [n_.Ay],
                () => ({ section: n_.Ay.getSection(c, C?.isDM()), channelSidebarState: n_.Ay.getSidebarState(c) }),
                [c, C],
            ),
            en = _?.id,
            et = (0, A.bG)([n_.Ay], () => n_.Ay.getGuildSidebarState(en), [en]),
            el = (0, l7.lI)(),
            es = (0, ni.qz)() && C?.type === eo.rbe.GUILD_APP;
        ((i = C?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return n1.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ni.Dw)(l) || n2.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ni.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && J?.type === sP.PE.VIEW_CHANNEL && J.channelId === C.id,
            ea = (0, tZ.Ay)(C),
            ed = (0, tZ.Ay)(C, !0),
            ec = (0, A.bG)([n9.A], () => (null != C ? n9.A.getSelectedParticipant(C.id) : null)),
            eu = (0, nt.vL)(C),
            eh = (0, t0.Uf)(C),
            eA = null != C && g === C.id,
            em = null != C && C.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = ik.A.useConfig({ location: "Channel" }),
            ef = (0, iU.c)(),
            ex = (0, A.bG)(
                [ov.A, nT.A],
                () => {
                    let e = C?.guild_id ?? nT.A.getGuildId();
                    return null != e && ov.A.isUnavailable(e);
                },
                [C],
            ),
            ey = ep && (0, iw.A)() && null != C && !ex && !C.isGuildVocal();
        (s.useEffect(() => (E.A.setFriendsSidebarAvailable(ey), () => E.A.setFriendsSidebarAvailable(!1)), [ey]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, eT.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, ne.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, nn.A)(s, t), n?.());
                        }, 0);
                    }
                    return (
                        ei._.subscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e),
                        () => {
                            ei._.unsubscribe(eo.jej.OPEN_EMBEDDED_ACTIVITY, e);
                        }
                    );
                }, [n]);
            })({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, ns.JK)();
                if (e?.location?.state?.stageInviteKey === uz.J2) {
                    let { channelId: n } = (0, l5.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ej = { channel: C, inCurrentVoiceChannel: eA },
            eb = s.useRef(ej);
        (s.useEffect(() => {
            eb.current = ej;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eb.current;
                null != o && null != e && em && e.id === o && !n && ((0, sD.av)(e), d(null));
            }, [o, em]));
        let eN = (0, eI.cI)(C),
            ev = null != C && C.isPrivate(),
            eS = (0, eE.Ay)(ev),
            eR = (0, eE.Ay)(C?.id);
        s.useEffect(() => {
            let e = eS && !ev,
                n = eS && ev && C?.id !== eR;
            (e || n) && (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lM.i.AUTO });
        }, [C?.id, eR, ev, eS]);
        let eL = (0, p.Rv)(),
            eO = (0, n8.a)(C);
        return (0, l.jsx)(u5, {
            guildId: C?.guild_id,
            channelId: c,
            channel: C,
            channelName: ea,
            formattedChannelName: ed,
            parentChannel: b,
            voiceChannel: y,
            layout: X,
            needSubscriptionToAccess: T,
            isLurking: Y,
            hasModalOpen: eL,
            section: Q,
            channelSidebarState: er ? void 0 : J,
            guildSidebarState: et,
            guild: _,
            showCall: !T && H,
            isStageUnifiedCall: V,
            showActivityPanel: k,
            showFramePanel: B,
            channelIsContentGated: eu,
            spoilerGatingChannelId: eh,
            isMobile: (0, A.bG)([Z.A], () => C?.type === eo.rbe.DM && Z.A.isMobileOnline(C.getRecipientId()), [C]),
            isUnavailable: ex,
            showRealNameModal: q,
            showWelcomeModal: !z && $,
            showFollowButton: (C?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([lL.A], () => ({ hasVideo: null != C && lL.A.hasVideo(C.id) }), [C]),
            inCall: eA,
            selectedParticipant: ec,
            showChannelSummaries: eN,
            showHeaderGuildBreadcrumb: x || el,
            isAppChannelChatExpanded: es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: ep,
            canShowFriendsSidebar: ey,
            friendsSidebarAppBarToggleEnabled: eg,
            friendsSidebarCollapsed: ef,
            dmAppChannelApplicationId: eO,
        });
    });
