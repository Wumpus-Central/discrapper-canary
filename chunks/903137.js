(t.r(n), t.d(n, { default: () => u5 }), t(321073));
var i,
    l = t(477900),
    r = t(582128),
    s = t(503698),
    a = t.n(s),
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
    K = t(616356),
    $ = t(696451),
    Z = t(290863),
    Q = t(894768),
    J = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(129230),
    ei = t(188567),
    el = t(488926),
    er = t(427262),
    es = t(253400),
    ea = t(110574),
    eo = t(652215),
    ed = t(162866),
    ec = t(4577);
let eu = es.Ay.getEnableHardwareAcceleration(),
    eh = r.memo(function (e) {
        let { channel: n, sectionId: i, userId: s, guildOwnerId: a } = e,
            o = r.useRef(null),
            d = (0, A.bG)([J.A], () => J.A.isTyping(n.id, s)),
            c = (0, A.bG)([$.Ay], () => $.Ay.getMember(n.guild_id, s)),
            u = (0, A.bG)(
                [B.A],
                () => (c?.colorRoleId != null ? B.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, A.bG)([ee.default], () => ee.default.getUser(s)),
            m = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === m?.id,
            g = (0, A.bG)([Z.A, Q.A], () => (p ? Q.A.getStatus() : Z.A.getStatus(s, n.guild_id))),
            f = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(s)),
            x = (0, A.yK)([Z.A, Q.A], () => (p ? Q.A.getActivities() : Z.A.getActivities(s, n.guild_id))),
            I = (0, A.bG)([K.A], () => K.A.getAnyStreamForUser(s)),
            E = (0, y.rm)(s),
            j = (0, A.bG)([W.A], () => W.A.canUserViewChannel(n.id, i, s)),
            _ = h?.id != null && h.id === a,
            T = r.useCallback(
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
            N = r.useCallback(() => {
                if (null == h) return;
                let e = `@${er.Ay.getUserTag(h, { decoration: "never" })}`,
                    t = `<@${h.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: n.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
                    L.A.startTyping(n.id));
            }, [h, n]),
            v = r.useCallback(
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
            [R, O] = r.useState(!1);
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
                let { onClick: t, onMouseDown: i, ...r } = e;
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
                    ...r,
                });
            },
        });
    }),
    eA = r.memo(function (e) {
        let { id: n, label: t, count: i, guildId: r } = e,
            s = (0, U.Xx)({ roleId: n, guildId: r, size: 16 });
        return n === eo.clD.UNKNOWN
            ? (0, l.jsx)("div", { className: ec.lL, children: (0, l.jsx)("div", { className: ec.k1 }) })
            : (0, l.jsxs)(k.A, {
                  className: ec.lL,
                  "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: t, count: i }),
                  children: [
                      null != s ? (0, l.jsx)(G.A, { className: ec.UT, ...s }) : null,
                      (0, l.jsxs)("span", { "aria-hidden": !0, children: [t, " \u2014 ", i] }),
                  ],
              });
    }),
    em = r.memo(function (e) {
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
        s,
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
                s = null == n,
                a = r.useMemo(() => {
                    if (s) return X;
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
                }, [t, l, i, s]);
            return null != l ? a : X;
        })(c.id, h),
        f = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: x, listRef: I } =
            ((n = m),
            (t = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
            (i = r.useRef(null)),
            (s = r.useCallback(
                (e, n) => {
                    let t = i.current;
                    if (null == t) return;
                    let l = parseInt(n, 10),
                        [r, s] = t.getSectionRowFromIndex(l),
                        a = 42 * (0 === r && 0 === s);
                    t.scrollToIndex({
                        section: r,
                        row: s,
                        padding: a,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
                },
                [42],
            )),
            (o = r.useCallback(
                () =>
                    new Promise((e) => {
                        let n = i.current;
                        if (null == n) return e();
                        n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                    }),
                [],
            )),
            (d = r.useCallback(
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
                navigator: (0, j.Ay)({ id: n, setFocus: s, isEnabled: t, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        E = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (r.useEffect(() => {
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
                                        { userIds: i, id: r } = g[n];
                                    return (0, l.jsx)(
                                        eh,
                                        { channel: c, sectionId: r, userId: i[t], guildOwnerId: b },
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
    eK = t(652934),
    e$ = t(735168),
    eZ = t(5867),
    eQ = t(138017),
    eJ = t(715482),
    e0 = t(315502),
    e1 = t(218461),
    e2 = t(234320),
    e3 = t(248310);
function e6(e) {
    let { channelId: n, className: t, ...i } = e,
        s = r.useRef(null),
        a = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = r.useCallback(() => {
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
        h = r.useCallback(() => {
            s.current?.focus();
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
                buttonRef: s,
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
var e9 = t(538303);
let e7 = eW.DN.SIZE_32,
    e8 = { [eZ.E8.NO_CHAT]: e9.Oo, [eZ.E8.RESIZABLE]: e9.Ig };
function e5(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        s = (0, eV.A)(),
        o = (0, A.yK)([eC.Ay], () => eC.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        m = r.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = r.useRef(null),
        g = (0, A.bG)([eC.Ay], () => eC.Ay.getFocusedLayout()),
        f = g !== eZ.E8.NO_CHAT,
        [I, E] = r.useState(eM.Ay.activityPanelHeight ?? n ?? null),
        C = r.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        y = r.useRef(null),
        [j, b] = r.useState({ width: 0, height: 0 });
    r.useLayoutEffect(() => {
        if (null == y.current) return;
        let e = new ResizeObserver(() => {
            b({ width: y.current?.clientWidth ?? 0, height: y.current?.clientHeight ?? 0 });
        });
        return (e.observe(y.current), () => e.disconnect());
    }, []);
    let T = j.width / Math.max(j.height, 1) < eZ.B5,
        N = 0,
        v = 0,
        S = (0, eH.A)(s?.id);
    if (!S) {
        let e = j.width,
            n = j.height;
        T
            ? ((n = j.width / eZ.B5) > j.height && (e = (n = j.height) * eZ.B5), (v = (j.height - n) / 2))
            : ((e = Math.min(j.height * eZ.B5)) > j.width && (n = (e = j.width) / eZ.B5), (N = (j.width - e) / 2));
    }
    let R = h.get(s?.id ?? ""),
        L = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        M = (0, A.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = r.useMemo(() => {
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
                [s, a] = r.useState(!1);
            r.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !O.Ay.useReducedMotion && (l || s);
            return r.useMemo(() => {
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
    if (null == s) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eW.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? er.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e7), alt: t, className: e9.my }, e.id),
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
                    className: a()(e9.iE, e8[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: s.id }),
                        (0, l.jsxs)("div", {
                            className: e9.lq,
                            children: [
                                f
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e9.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "body-md/semibold",
                                              className: e9.qd,
                                              children: s?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e9.ht, { [e9.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: v, paddingBottom: v },
                                    ref: y,
                                    children: (0, l.jsx)(eB.A, { className: e9.pU, embedId: (0, ez.A)(t.id, s.id) }),
                                }),
                                null != L
                                    ? (0, l.jsxs)("div", {
                                          className: e9.qr,
                                          children: [
                                              (0, l.jsx)(eW.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e7,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e9.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e9.qi,
                                                          children: [
                                                              (0, l.jsx)(e6, { channelId: L }),
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
                                                          className: e9.pt,
                                                          children: (0, l.jsx)(eD.A, {
                                                              applicationId: s.id,
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
                                                                            (e = s.id),
                                                                            (n = d ?? null),
                                                                            (0, e$.A)({
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
                                                                                onRefreshFailed: eK.G,
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
            connectedActivity: r,
            activityPanelMode: s,
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
    let o = r?.applicationId;
    return s !== eZ.Gd.PANEL || null == o || a || null == i || null == r || (0, eT.A)(i)
        ? null
        : (0, l.jsx)(e5, { maxHeight: n, connectedLocation: r.location, renderExternalHeader: t });
}
var ne = t(90804),
    nn = t(748975),
    nt = t(323073),
    ni = t(964167),
    nl = t(483510),
    nr = t(976860);
function ns(e) {
    let { channel: n } = e;
    return (0, l.jsx)(f.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, nr.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nl.ci)(e, n.id));
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
    nu = t(444570),
    nh = t(58736),
    nA = t(857071),
    nm = t(233470),
    np = t(260498),
    ng = t(95264),
    nf = t(914315),
    nx = t(191850);
function nI(e) {
    let { channel: n } = e,
        t = n.guild_id ?? null,
        i = (0, nf.A)(n, "ConjureAppChannelRemixButton"),
        s = (0, A.bG)([nA.A], () => null != t && nA.A.isLurking(t), [t]),
        a =
            (r.useEffect(() => {
                (0, nm.b8)();
            }, []),
            (0, A.bG)([np.Ay], () => {
                let e = np.Ay.getMaxProjects();
                return null != e && np.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - np.Ay.getOwnedProjects().length)
                    : null;
            }));
    if (null == i || null == t || s || 0 === a) return null;
    let o = z.intl.string(nx.default["276ll6"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: nu.PaperPlusIcon,
        tooltip: o,
        "aria-label": o,
        onClick: () => (0, ng.A)(i, t),
    });
}
var nE = t(766367),
    nC = t(246338),
    ny = t(947162),
    nj = t(672929),
    nb = t(534890);
function n_(e) {
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
            return r.useMemo(() => {
                if (0 === t) {
                    if (!n) return;
                    return { type: "unread", position: "bottom" };
                }
                return { type: "important", position: "bottom", text: String(t) };
            }, [t, n]);
        })(n),
        i = r.useRef(null),
        s = r.useCallback(() => i.current?.focus(), []);
    (0, e2.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: s });
    let a = (0, nl.HP)(n),
        o = (0, A.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(nh.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nb.ChatIcon,
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
var nT = t(799704),
    nN = t(967198);
function nv(e) {
    let { channelId: n } = e,
        t = (0, A.bG)([nT.Ay], () => nT.Ay.getSection(n)),
        i = (0, A.bG)([nN.A], () => nN.A.getGuildId()),
        r = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nh.In, {
        tooltip: r ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.GroupIcon,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !r }),
                E.A.toggleMembersSection());
        },
        selected: r,
    });
}
var nS = t(187360),
    nR = t(621466),
    nL = t(453903),
    nO = t(477782),
    nM = t(12470),
    nP = t(811893),
    nD = t(663417),
    nk = t(729475),
    nw = t(265872),
    nU = t(165862),
    nG = t(885574),
    nF = t(365199),
    nH = t(586486),
    nV = t(130332),
    nB = t(625180),
    nW = t(156548),
    nY = t(646973),
    nz = t(702476),
    nX = t(475815),
    nq = t(615606),
    nK = t(165610);
function n$(e) {
    let { channel: n, isConjured: t, notificationItems: i } = e,
        [s, a] = r.useState(!1),
        o = r.useRef(null),
        d = (0, nH.A)(n, "app_channel_header"),
        c = (0, nq.q)(n)?.bot,
        u = r.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        h = (0, nj.A)(n.application_id ?? null, u),
        A = (0, nK.x1)(h) && h.data.proxyTicketRefreshing,
        m = (0, nV.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        p = null != m.edit,
        { canPopout: g, isPoppedOut: f, popOut: x, popIn: I } = (0, nY.A)(h),
        E = r.useCallback(() => {
            null == h || A || nB.A.refreshProxyTicket(h.id);
        }, [h, A]),
        C = z.intl.string(z.t["UKOtz+"]),
        y = (0, nK.x1)(h);
    if (!y && null == c && null == d && !p && null == i) return null;
    function j() {
        return y
            ? (0, l.jsx)(nO.Dr, {
                  id: "reload-app",
                  label: z.intl.string(z.t.kHie4V),
                  action: E,
                  icon: nD.RefreshIcon,
                  leadingAccessory: { type: "icon", icon: nD.RefreshIcon },
                  disabled: A,
              })
            : null;
    }
    function b() {
        let e = (0, nK.x1)(h) && !f ? (0, nW.fl)(h.id) : null;
        return null != e && (0, nX.Ub)(e)
            ? (0, l.jsx)(nO.Dr, {
                  id: "full-screen-app",
                  label: z.intl.string(z.t.OIDkcp),
                  icon: nk.FullscreenEnterIcon,
                  leadingAccessory: { type: "icon", icon: nk.FullscreenEnterIcon },
                  action: () => (0, nX.tl)(e),
              })
            : null;
    }
    return (0, l.jsx)(nw.Y, {
        targetElementRef: o,
        shouldShow: s,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, nR.vq)(document.activeElement, HTMLIFrameElement)) return nL.oU;
            a(!1);
        },
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, l.jsxs)(nU.W, {
                "data-menu-migrated": !0,
                navId: "app-channel-header-overflow",
                onClose: r,
                onSelect: r,
                "aria-label": z.intl.string(z.t.Xm41aV),
                children: [
                    t
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  y
                                      ? (0, l.jsxs)(nO.rX, {
                                            children: [
                                                y
                                                    ? f
                                                        ? (0, l.jsx)(nO.Dr, {
                                                              id: "pop-in-app",
                                                              label: z.intl.string(z.t["NKV/MO"]),
                                                              icon: nM.WindowReturnIcon,
                                                              leadingAccessory: {
                                                                  type: "icon",
                                                                  icon: nM.WindowReturnIcon,
                                                              },
                                                              action: I,
                                                          })
                                                        : g
                                                          ? (0, l.jsx)(nO.Dr, {
                                                                id: "pop-out-app",
                                                                label: z.intl.string(z.t["3Zypbv"]),
                                                                icon: nP.WindowLaunchIcon,
                                                                leadingAccessory: {
                                                                    type: "icon",
                                                                    icon: nP.WindowLaunchIcon,
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
                                  y || p ? (0, l.jsxs)(nO.rX, { children: [m.edit, m.devicePermissions, j()] }) : null,
                              ],
                          })
                        : y
                          ? (0, l.jsxs)(nO.rX, {
                                children: [
                                    b(),
                                    j(),
                                    (0, nK.x1)(h)
                                        ? (0, l.jsx)(nO.Dr, {
                                              id: "close-app",
                                              label: z.intl.string(z.t.VkMnR2),
                                              action: () => (0, ny.A)(h.id),
                                              icon: no.DoorExitIcon,
                                              leadingAccessory: { type: "icon", icon: no.DoorExitIcon },
                                          })
                                        : null,
                                ],
                            })
                          : null,
                    null != i ? (0, l.jsx)(nO.rX, { children: i }) : null,
                    null != c || null != d
                        ? (0, l.jsxs)(nO.rX, {
                              children: [
                                  null != c
                                      ? (0, l.jsx)(nO.Dr, {
                                            id: "app-info",
                                            label: z.intl.string(z.t.Sh2z9g),
                                            action: () =>
                                                (0, nz.openUserProfileModal)({
                                                    userId: c.id,
                                                    guildId: n.guild_id,
                                                    channelId: n.id,
                                                }),
                                            leadingAccessory: { type: "icon", icon: nG.CircleInformationIcon },
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
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: o,
                onClick: () => a((e) => !e),
                tooltip: t ? null : C,
                icon: nF.MoreHorizontalIcon,
                "aria-label": C,
                selected: t,
            });
        },
    });
}
function nZ(e) {
    let { frame: n } = e,
        { canPopout: t, isPoppedOut: i, popOut: r, popIn: s } = (0, nY.A)(n);
    return (0, nK.x1)(n)
        ? i
            ? (0, l.jsx)(nh.In, {
                  icon: nM.WindowReturnIcon,
                  tooltip: z.intl.string(z.t["NKV/MO"]),
                  "aria-label": z.intl.string(z.t["NKV/MO"]),
                  onClick: s,
              })
            : t
              ? (0, l.jsx)(nh.In, {
                    icon: nP.WindowLaunchIcon,
                    tooltip: z.intl.string(z.t["3Zypbv"]),
                    "aria-label": z.intl.string(z.t["3Zypbv"]),
                    onClick: r,
                })
              : null
        : null;
}
function nQ(e) {
    let { channel: n } = e,
        t = r.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nj.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nZ, { frame: i });
}
function nJ(e) {
    let { frame: n } = e;
    if (!(0, nK.x1)(n)) return null;
    let t = z.intl.string(z.t.VkMnR2);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: t,
        "aria-label": t,
        onClick: () => (0, ny.A)(n.id),
    });
}
function n0(e) {
    let { channel: n, isLurking: t } = e,
        i = r.useMemo(
            () => ({ type: na.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        s = (0, nj.A)(n.application_id ?? null, i),
        a = (0, nd.A)(n),
        o = (0, nc.A)(n);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nJ, { frame: s }),
            (0, l.jsx)(nI, { channel: n }),
            (0, l.jsx)(nE.A, { frame: s }),
            (0, l.jsx)(nv, { channelId: n.id }),
            (0, l.jsx)(n_, { channelId: n.id }),
            (0, l.jsx)(n$, {
                channel: n,
                isConjured: !0,
                notificationItems: t ? null : (0, l.jsxs)(l.Fragment, { children: [a, o] }),
            }),
        ],
    });
}
function n1(e) {
    let { channel: n, isLurking: t } = e;
    return (0, nC.w$)(n, "AppChannelHeaderActions")
        ? (0, l.jsx)(n0, { channel: n, isLurking: t })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(nQ, { channel: n }),
                  t ? null : (0, l.jsx)(nS.A, { channel: n }),
                  (0, l.jsx)(nv, { channelId: n.id }),
                  (0, l.jsx)(n_, { channelId: n.id }),
                  (0, l.jsx)(n$, { channel: n, isConjured: !1 }),
              ],
          });
}
var n2 = t(128376);
let n3 = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var n6 = t(568598),
    n9 = t(628983),
    n7 = t(164617),
    n8 = t(355622),
    n5 = t(689874),
    n4 = t(631828),
    te = t(627363),
    tn = t(91242),
    tt = t(499466);
function ti(e) {
    let { channel: n } = e,
        t = (0, A.bG)([tn.A], () => tn.A.getFramesForChannel(n.id).find((e) => (0, nK.x1)(e)), [n.id]),
        i = (0, te.YY)(t?.applicationId).data,
        r = (0, tt.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !r) return null;
    let s = z.intl.string(nx.default["/TlGcK"]);
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: no.DoorExitIcon,
        tooltip: s,
        "aria-label": s,
        onClick: () => (0, ny.A)(t.id),
    });
}
var tl = t(828488),
    tr = t(268218),
    ts = t(726249),
    ta = t(334738),
    to = t(208882),
    td = t(938764),
    tc = t(519480),
    tu = t(352123),
    th = t(302125),
    tA = t(130696);
let tm = function (e) {
    let { guild: n, onAddGuild: i } = e,
        s = r.useCallback(() => {
            (0, p.mM)(async () => {
                let { default: e } = await Promise.all([
                    t.e(683621),
                    t.e(711162),
                    t.e(159957),
                    t.e(728136),
                    t.e(680029),
                    t.e(635864),
                    t.e(447864),
                    t.e(794704),
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
        className: tA.h2,
        children: [
            (0, l.jsx)("img", { className: tA.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: tA._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "body-md/normal", className: tA.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(th.E, {
                      className: tA.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(th.E, {
                className: tA.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: s,
            }),
        ],
    });
};
var tp = t(683438),
    tg = t(516521),
    tf = t(761508),
    tx = t(765671),
    tI = t(23815),
    tE = t(939249),
    tC = t(22231),
    ty = t(778858),
    tj = t(573435),
    tb = t(101555),
    t_ = t(682163),
    tT = t(714991),
    tN = t(776231),
    tv = t(345942),
    tS = t(71393),
    tR = t(486020),
    tL = t(537975),
    tO = t(682557),
    tM = t(524058);
let tP = r.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(tE.D, {
        onClick: n,
        className: tM.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "body-sm/semibold",
                color: "text-strong",
                className: tM.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tD(e) {
    let { entry: n } = e,
        [i, s] = r.useState(!1),
        o = r.useRef(null),
        { canEdit: d } = (0, tu.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tM.fc, { [tM.QX]: i }),
        children: (0, l.jsxs)(tb.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tb.$n, {
                              onClick: () => {
                                  (0, p.mM)(async () => {
                                      let { default: e } = await Promise.all([t.e(533651), t.e(988869)]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tC.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tM.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tO.A, {
                    targetElementRef: o,
                    onRequestOpen: () => s(!0),
                    onRequestClose: () => s(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tb.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nF.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tM.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tk = r.memo(function (e) {
    let { entry: n } = e,
        [i, s] = r.useState(!1),
        a = null != (0, A.bG)([tS.A], () => tS.A.getGuild(n.guildId)),
        o = tR.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tN.mZ)() }),
        d = tR.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        c = z.intl.string(z.t.VJlc0S);
    return (
        a && (c = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tM.Nr,
            onContextMenu: function (e) {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tM.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tM.Yi,
                            children: null != o && (0, l.jsx)("img", { src: o, alt: "", className: tM.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tM.$f,
                            children: (0, l.jsx)(tj.Ay, {
                                mask: tj.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tM.SA,
                                    children: (0, l.jsx)(t_.Ay, {
                                        className: tM.rZ,
                                        iconSrc: d,
                                        guild: (0, tL.xi)(n),
                                        size: t_.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tM.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tM.DD,
                            children: [
                                (0, l.jsx)(tT.A, { className: tM.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tM.J5,
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tM.h_,
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tM.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tM.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tM.JX }),
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
                                        className: tM.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tM.Li }),
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
                            className: tM.PD,
                            children: (0, l.jsx)(f.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: async function () {
                                    s(!0);
                                    try {
                                        a
                                            ? (0, tv.u)(n.guildId)
                                            : await ty.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
                                    } finally {
                                        s(!1);
                                    }
                                },
                                text: c,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(tD, { entry: n }),
            ],
        })
    );
});
var tw = t(946116),
    tU = t(844086),
    tG = t(770679);
function tF(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: r } = e,
        { ref: s, width: o } = (0, tx.Ay)();
    return (0, l.jsxs)("div", {
        ref: s,
        className: tG.wx,
        children: [
            (0, l.jsx)("div", { className: tG.y2, children: (0, l.jsx)(tI.A, {}) }),
            (0, l.jsx)("div", {
                className: tG.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tG.VW, { [tG.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "body-md/normal",
                            color: "text-default",
                            className: tG.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tG.MT,
                            children: (0, l.jsx)(tp.I, {
                                query: n,
                                "aria-label": z.intl.string(z.t.nL2wKD),
                                placeholder: z.intl.string(z.t.nL2wKD),
                                onChange: t,
                                onClear: i,
                                onKeyDown: r,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
let tH = function (e) {
    let {
        channel: n,
        directoryEntries: t,
        handleCreateOrAddGuild: i,
        searchQuery: s,
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
        className: tU.$$,
        children: (0, l.jsxs)(tg.Gt, {
            className: tU.XG,
            children: [
                (0, l.jsx)(tF, { searchQuery: s, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tg.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(tf.V, {
                        className: tG.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                tf.V.Item,
                                { className: tG.YU, id: tw.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${A})` },
                                tw.mU.ALL,
                            ),
                            (0, tw.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    tf.V.Item,
                                    { className: tG.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                m && null == t
                    ? (0, l.jsx)(g.y, { className: tU.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "body-md/semibold",
                                                className: tG.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tU.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tk, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tP, { onClick: i }) : null,
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
var tV = t(370876),
    tB = t(28863),
    tW = t(95362),
    tY = t(792831),
    tz = t(211862);
let tX = function (e) {
    let n,
        {
            searchQuery: t,
            setSearchQuery: i,
            mostRecentQuery: r,
            handleClearSearch: s,
            handleSearchKeyPress: a,
            handleCreateOrAddGuild: o,
            searchResults: d,
            searchFetching: c,
        } = e;
    if (c) n = (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(g.y, { className: tU.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tB.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tz.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "body-md/normal", color: "text-default", className: tz.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tU.vY, children: d.map((e) => (0, l.jsx)(tk, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tU.$$,
        children: (0, l.jsxs)(tW.Ar, {
            className: tU.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tz.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tz.Dr,
                            children: [
                                (0, l.jsx)(tE.D, {
                                    onClick: s,
                                    className: tz.UE,
                                    children: (0, l.jsx)(tY.A, { direction: tY.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tz.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: r }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tp.I, {
                            query: t,
                            "aria-label": z.intl.string(z.t.nL2wKD),
                            placeholder: z.intl.string(z.t.nL2wKD),
                            onChange: i,
                            onClear: s,
                            onKeyDown: a,
                        }),
                    ],
                }),
                n,
            ],
        }),
    });
};
var tq = t(650583);
let tK = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: s,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, A.cf)([tc.A], () => {
            let e = tc.A.getCurrentCategoryId(n.id),
                t = tc.A.getDirectoryEntries(n.id, e === tw.mU.ALL ? null : e),
                i = tc.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: tc.A.getDirectoryAllEntriesCount(n.id),
                isLoading: tc.A.isFetching(),
            };
        });
    r.useEffect(
        () => () => {
            let e = e1.Ay.lastMessageId(n.id);
            null != e &&
                (0, ta.I_)(
                    n.id,
                    { object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED, objectType: eo.btD.ACK_AUTOMATIC },
                    !0,
                    !0,
                    e,
                );
        },
        [n.id],
    );
    let u = r.useMemo(
            () =>
                null != a
                    ? (function (e, n) {
                          if (n !== tw.mU.ALL) return [{ entries: (0, tV._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tV.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let r = e.filter((e) => !l.has(e.guildId));
                          return (
                              (r = (0, tV.DN)(r)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: r, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(a), s)
                    : null,
            [a, s],
        ),
        {
            mostRecentQuery: h,
            searchFetching: m,
            searchResults: f,
        } = (0, A.cf)([td.A], () => {
            let { mostRecentQuery: e, fetching: t } = td.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: td.A.getSearchResults(n.id, e) };
        }),
        [x, I] = r.useState(h),
        E = "" !== h,
        C = { mostRecentQuery: h },
        y = r.useRef(C);
    (r.useEffect(() => {
        y.current = C;
    }),
        r.useEffect(() => {
            let { mostRecentQuery: e } = y.current;
            (to.Yc(n.id), to.YS(n.id), I(e));
        }, [n.id]),
        r.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: s,
            });
        }, [n.id, i.id, s]));
    let j = (0, tu.b)(n),
        b = r.useMemo(
            () =>
                j
                    ? () => {
                          (0, p.mM)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e(122326),
                                  t.e(533651),
                                  t.e(315907),
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
                                      currentCategoryId: s === tw.mU.ALL ? null : s,
                                  });
                          });
                      }
                    : void 0,
            [j, i.name, i.id, n.id, s],
        );
    function _(e) {
        0 !== x.trim().length &&
            e.key === tq.dh.ENTER &&
            (to.Se(n.id, x),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function T() {
        (I(""), to.BA(n.id));
    }
    return E
        ? (0, l.jsx)(tX, {
              searchQuery: x,
              setSearchQuery: I,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: T,
              handleCreateOrAddGuild: b,
              searchResults: f,
              searchFetching: m,
          })
        : null == u && null == s
          ? (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(g.y, { className: tU.u1 }) })
          : u?.length === 0 && null == s
            ? (0, l.jsx)("div", { className: tU.$$, children: (0, l.jsx)(tm, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tH, {
                  channel: n,
                  searchQuery: x,
                  setSearchQuery: I,
                  handleSearchKeyPress: _,
                  handleClearSearch: T,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: s,
                  handleSelectCategory: function (e) {
                      to.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var t$ = t(826673),
    tZ = t(93055),
    tQ = t(47167),
    tJ = t(699344),
    t0 = t(353428),
    t1 = t(288254),
    t2 = t(873614),
    t3 = t(649852),
    t6 = t.n(t3),
    t9 = t(789645),
    t7 = t(163126),
    t8 = t(182061),
    t5 = t(886393),
    t4 = t(307623),
    ie = t(660273),
    it = t(804006),
    ii = t(707792),
    il = t(41402),
    ir = t(271456),
    is = t(200273),
    ia = t(565846),
    io = t(57907),
    id = t(375500),
    ic = t(707653),
    iu = t(50268),
    ih = t(378570),
    iA = t(162199),
    im = t(713608),
    ip = t(473503),
    ig = t(474196),
    ix = t(267102),
    iI = t(474397),
    iE = t(486974),
    iC = t(307805);
function iy(e) {
    let { channel: n } = e,
        t = r.useContext(et.Ig),
        i = (0, ix.aL)(),
        s = z.intl.string(iC.default["Beo/7v"]),
        { firstMessage: a } = (0, ip.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nh.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, ih.iN)(n.id),
                      (0, iI.A)(),
                      (0, ig.z)(n.guild_id, d, n.id, {
                          modViewPanel: iE.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: s,
              icon: im.ModerationIcon,
              "aria-label": s,
          })
        : null;
}
var ij = t(780338),
    ib = t(782603),
    i_ = t(607508),
    iT = t(914703),
    iN = t(37411);
function iv(e) {
    let { channel: n } = e,
        t = (0, i_.X)(n),
        [i, s] = r.useState(!1),
        a = r.useRef(null),
        o = (0, A.bG)([nA.A], () => null != n.guild_id && nA.A.isLurking(n.guild_id));
    if (
        (r.useEffect(() => {
            function e() {
                return s(!0);
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
    return (0, l.jsx)(nw.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => s(!1),
        renderPopout: (e) =>
            (0, l.jsx)(iT.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => s((e) => !e),
                tooltip: i ? null : d,
                icon: t === iN.CP.NO_MESSAGES ? ij.BellSlashIcon : ib.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var iS = t(747926);
function iR(e) {
    let { channel: n } = e,
        [t, i] = r.useState(!1),
        s = r.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: s,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iL, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: s,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iL(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        r = (0, ie.A)(n, "Sidebar Overflow"),
        s = (0, it.A)(n, "Sidebar Overflow"),
        a = (0, il.A)(n),
        o = (0, io.A)(n),
        d = (0, id.A)(n),
        c = (0, t8.A)(n),
        u = (0, ii.A)(n),
        h = (0, ia.A)(n.id),
        A = (0, is.A)(n),
        m = (0, t4.A)(n),
        p = (0, t5.A)(n),
        g = (0, iu.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        f = (0, ic.A)(n),
        x = (0, ir.A)(n),
        I = (0, t7.$)(1e3);
    function E() {
        (0, ih.iN)(n.id);
    }
    function C(e) {
        let t = t6()(() => {
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
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, {
                children: [r, (0, l.jsx)(nO.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(nO.rX, { children: [o, d] }),
            (0, l.jsxs)(nO.rX, { children: [A, a, h, x] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    (0, l.jsx)(nO.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: nP.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nP.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(nO.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: nP.WindowLaunchIcon,
                        trailingIndicator: { type: "icon", icon: nP.WindowLaunchIcon },
                        action: function () {
                            (C(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(nO.rX, { children: [f, c, u, m] }),
            (0, l.jsx)(nO.rX, { children: s }),
            (0, l.jsxs)(nO.rX, { children: [p, g] }),
        ],
    });
}
function iO(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nh.Ay.Icon, {
            icon: t9.XSmallIcon,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, iS.xu)((0, iA.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iv, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(iy, { channel: n }) : null,
                  (0, l.jsx)(iR, { channel: n }),
                  i,
              ],
          });
}
var iM = t(31717),
    iP = t(853742),
    iD = t(85190);
function ik(e) {
    let { channelId: n } = e,
        i = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        s = (0, A.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, A.bG)([tS.A], () => tS.A.getGuild(i?.getGuildId())),
        o = (0, tQ.Ay)(i),
        d = (0, t1.Uf)(i),
        c = r.useRef(!1);
    if (
        (r.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iP.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(t2.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iO, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.A, { channel: i, draftType: iM.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t0.zF)({
                    channel: i,
                    parentChannel: s,
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
                        null != i && (0, nr.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iD.T,
                children: (0, l.jsx)(tJ.A, { channel: i, guild: a, chatInputType: n8.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iw = t(925166),
    iU = t(76268),
    iG = t(605117),
    iF = t(857253),
    iH = t(872363);
let iV = function (e, n) {
    eq.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iB = t(561446),
    iW = t(300233),
    iY = t(499211),
    iz = t(727419),
    iX = t(529942),
    iq = t(739455),
    iK = t(709017);
function i$(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iK.t7,
        children: (0, l.jsxs)("div", {
            className: iK.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iK.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "body-sm/normal",
                            className: iK.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iK.__invalid_button,
                            children: (0, l.jsx)(f.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iX.rf)(n),
                                        iz.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iq.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iZ = t(599941),
    iQ = t(29385),
    iJ = t(950344),
    i0 = t(316369),
    i1 = t(31637),
    i2 = t(325348);
function i3(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iQ.e)({ guildId: n, channelId: t }),
        s = (0, iZ.uk)(n),
        a = (0, iZ.Tq)(n),
        o = (0, A.bG)([tS.A], () => tS.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tQ.Ay)(c),
        h = r.useMemo(() => {
            let e = {};
            for (let n of s) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [s]);
    return ((0, iJ.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: i2.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: i2.__invalid_spinner }),
          })
        : (0, l.jsxs)(tW.Ar, {
              className: i2.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: i2.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: i2.Lv,
                      variant: "body-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(i0.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  i1.A,
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
var i6 = t(256331),
    i9 = t(856896);
function i7() {
    let e = (0, A.bG)([i6.A], () => i6.A.isHighlightingEnabled()),
        n = e ? "Hide Highlights" : "Highlight Conversations";
    return (0, l.jsx)(nh.In, {
        onClick: i9.Eg,
        tooltip: n,
        icon: nb.ChatIcon,
        iconSize: 20,
        "aria-label": n,
        role: "switch",
        "aria-checked": e,
        selected: e,
    });
}
var i8 = t(287074),
    i5 = t(306788),
    i4 = t(863922),
    le = t(391820),
    ln = t(521732);
function lt(e) {
    let { channel: n } = e,
        t = (0, nt.ni)(n),
        i = (0, A.bG)([le.A], () => le.A.shouldShowTopicsBar());
    return (0, l.jsx)(nh.Ay.Icon, {
        icon: i5.TopicsIcon,
        onClick: function () {
            (et.default.track(eo.HAw.SUMMARIES_SIDEBAR_TOGGLED, {
                summaries_sidebar_open: !i,
                source: ln.er.TOOLBAR_BUTTON,
                guild_id: n.guild_id,
                channel_id: n.id,
                channel_type: n.type,
            }),
                (0, i4.Oz)());
        },
        tooltip: i ? z.intl.string(z.t.nGs3kO) : z.intl.string(z.t.bIm2sF),
        selected: i,
        "aria-expanded": i,
        disabled: t,
    });
}
var li = t(947094),
    ll = t(919577),
    lr = t(207777),
    ls = t(422844),
    la = t(435470),
    lo = t(892110),
    ld = t(45494);
function lc(e) {
    let { channel: n } = e,
        t = (0, la.S4)(n),
        i = (0, A.bG)([li.A], () => li.A.hasHidden(n.id)),
        r = (0, lo.l)(n.id),
        { sortOrder: s, tagFilter: a, tagSetting: o } = (0, ls.R)(n.id),
        d = (0, A.bG)(
            [lr.A, ld.A],
            () => !!(lr.A.getThreadIds(n.id, s, a, o).length > 0) || !!(ld.A.getThreads(n.id, s, a, o).length > 0),
            [n.id, s, a, o],
        ),
        c = n.isMediaChannel();
    if (!t || r || (c && d)) return null;
    let u = i
        ? c
            ? z.intl.string(z.t["WP/IE1"])
            : z.intl.string(z.t.zfq9V4)
        : c
          ? z.intl.string(z.t.p60yF1)
          : z.intl.string(z.t.SNOqYC);
    return (0, l.jsx)(nh.In, {
        tooltip: u,
        icon: nG.CircleInformationIcon,
        onClick: function () {
            return ll.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lu = t(290136),
    lh = t(975571),
    lA = t(354817);
function lm() {
    let e = z.intl.string(lA.default.pdipXI);
    return (0, l.jsx)(nh.In, {
        tooltip: e,
        icon: lu.CircleQuestionIcon,
        onClick: function () {
            window.open(lh.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lp = t(742589),
    lg = t(43105),
    lf = t(428689),
    lx = t(978940),
    lI = t(387755),
    lE = t(597798),
    lC = t(641703),
    ly = t(384059),
    lj = t(379848),
    lb = t(753727),
    l_ = t(625075),
    lT = t(222692),
    lN = t(442353),
    lv = t(470710),
    lS = t(186111),
    lR = t(988468),
    lL = t(994500),
    lO = t(977997),
    lM = t(487887),
    lP = t(49999),
    lD = t(731854);
class lk extends r.PureComponent {
    iconRef = r.createRef();
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
                isBlocked: r,
                channel: s,
                mode: a,
                isProvisional: o,
            } = this.props;
        if (n || (t && a === eo._Of.VOICE)) return null;
        let d = s.isManaged(),
            c = null,
            u = !1;
        return (
            o
                ? ((u = !0), (c = z.intl.string(z.t.izMR7o)))
                : lR.Ay.supports(lD.O5.VIDEO)
                  ? r
                      ? ((c = z.intl.string(z.t.PHzjvX)), (u = !0))
                      : t && a === eo._Of.VIDEO
                        ? ((e = this.handleJoinVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.W68MhH)))
                        : ((e = this.handleStartVideoCall),
                          (c = d ? z.intl.string(z.t.S0W8Z5) : z.intl.string(z.t.oCqlGG)))
                  : l_.k.getConfig({ location: "PrivateChannelCallButton" }).videoEnabled
                    ? ((u = !0), (e = this.handleBrowserNotSupported), (c = z.intl.string(z.t.UVpg3U)))
                    : ((u = !0), (c = z.intl.string(z.t.UoW002))),
            (0, l.jsx)(nh.Ay.Icon, { icon: lf.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
        );
    }
    renderVoiceCallButton() {
        let e,
            {
                inCall: n,
                callActive: t,
                callUnavailable: i,
                isBlocked: r,
                channel: s,
                dismissibleContentTypes: a,
                isProvisional: o,
            } = this.props;
        if (n) return null;
        let d = s.isManaged(),
            c = !1;
        o
            ? ((c = !0), (e = z.intl.string(z.t.izMR7o)))
            : i
              ? ((e = d ? z.intl.string(z.t.LW2Ghr) : z.intl.string(z.t.rF7lN5)), (c = !0))
              : r
                ? ((e = z.intl.string(z.t.PHzjvX)), (c = !0))
                : (e = t
                      ? d
                          ? z.intl.string(z.t.S0W8Z5)
                          : z.intl.string(z.t.fdEeb5)
                      : d
                        ? z.intl.string(z.t.S0W8Z5)
                        : z.intl.string(z.t.focH1t));
        let u = (0, l.jsx)(nh.Ay.Icon, {
            ref: this.iconRef,
            icon: lx.PhoneCallIcon,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lj.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === m.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lg.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lM.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lP.i.USER_DISMISS),
                              })
                            : null;
                    },
                }),
            ],
        });
    }
    render() {
        return (0, l.jsxs)(r.Fragment, { children: [this.renderVoiceCallButton(), this.renderVideoCallButton()] });
    }
    handleStartCall = (e, n) => {
        let { channel: t, notFriend: i, appContext: l } = this.props,
            r = i ? t.getRecipientId() : null;
        function s() {
            return (
                (0, ly.lO)(M.A.CHANNEL_HEADER, n ? ly.OP.START_VIDEO_CALL : ly.OP.START_CALL, t.id),
                lI.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, r)
            );
        }
        n ? (0, lN.A)(s, l) : s();
    };
    handleJoinCall = (e) => {
        ((0, ly.lO)(M.A.CHANNEL_HEADER, e ? ly.OP.JOIN_VIDEO_CALL : ly.OP.JOIN_CALL, this.props.channel.id),
            lE.default.selectVoiceChannel(this.props.channel.id, e));
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(m.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lP.i.AUTO }),
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
        (0, lN.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, lT.A)();
    };
}
function lw(e) {
    let { channel: n } = e,
        t = (0, lb.A)(),
        i = (0, A.bG)([n9.A], () => n9.A.getMode(n.id)),
        r = (0, A.bG)([lO.A], () => lO.A.isInChannel(n.id)),
        s = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, A.cf)([lv.A], () => ({
            callActive: lv.A.isCallActive(n.id),
            callUnavailable: lv.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, A.cf)([lL.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lL.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lL.A.isBlocked(d),
        })),
        h = (0, A.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, ix.Us)(),
        g = [],
        f = (0, lC.A)(n.id),
        x = (0, A.bG)([lS.A], () => lS.A.hasLayers());
    return (f && !x && g.push(m.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
        ? null
        : (0, l.jsx)(lk, {
              channel: n,
              mode: i,
              inCall: r,
              callActive: a,
              isProvisional: h?.isProvisional ?? !1,
              callUnavailable: o,
              notFriend: c,
              isBlocked: u,
              appContext: p,
              dismissibleContentTypes: g,
              useReducedMotion: s,
          });
}
var lU = t(753190),
    lG = t(765178),
    lF = t(231483),
    lH = t(544231),
    lV = t(338510),
    lB = t(151119),
    lW = t(278941),
    lY = t(665909),
    lz = t(327337);
let lX = r.memo(function (e) {
    let { channel: n } = e,
        i = (0, lV.u)(n.id),
        s = (0, lB.S)(n.id),
        a = (0, lW.e)(n.id),
        o = (0, p.Rv)(),
        d = (0, A.bG)([lS.A], () => lS.A.hasLayers()),
        c = r.useCallback(
            () => (s ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [s, a],
        ),
        u = r.useMemo(() => (s || null != a) && !o && !d, [s, a, o, d]),
        [h, m] = r.useState(c());
    (r.useEffect(() => {
        (null != a &&
            null != i &&
            (lG.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lH.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lY.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lY.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            s &&
                (lG.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lH.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, s]),
        (0, H.Ay)(() => {
            null != i &&
                (0, lY.QF)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    isNudgeWarning: null != a,
                    viewName: lY.gN.SAFETY_TOOLS_BUTTON,
                });
        }),
        r.useEffect(() => {
            let e = c();
            null != e && m(e);
        }, [s, a, c]));
    let g = r.useCallback(() => {
        (null != a && (0, lH.xi)(n.id, [a.id]),
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
                            let { onClose: r, transitionState: s } = t;
                            return (0, l.jsx)(e, {
                                otherUserId: n.getRecipientId(),
                                channelId: n.id,
                                warningId: i.id,
                                warningType: i.type,
                                onClose: r,
                                transitionState: s,
                            });
                        };
                    },
                    { modalKey: lz.V },
                ),
                (0, lY._$)({
                    channelId: n.id,
                    senderId: n.getRecipientId(),
                    warningId: i.id,
                    warningType: i.type,
                    cta: lY.Wm.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != a,
                })));
    }, [a, i, n]);
    return null == i
        ? null
        : (0, l.jsx)(eN.m, {
              forceOpen: u,
              text: h,
              position: "bottom",
              children: (0, l.jsx)(nh.Ay.Icon, {
                  icon: lF.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lq = t(262763),
    lK = t(406704),
    l$ = t(576705);
let lZ = r.memo(function (e) {
    let { channel: n } = e,
        t = (0, lb.A)(),
        i = (0, A.bG)([lO.A], () => lO.A.isInChannel(n.id)),
        s = (0, A.bG)([lO.A], () => !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id))),
        a = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iY.A)(n.id),
        d = (0, lK.Id)(n),
        { enabled: c } = lK.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = r.useCallback(() => {
            lq.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
        }, [n, i, o]);
    return (r.useEffect(() => {
        if (c)
            return (
                ei._.subscribe(eo.jej.CALL_START, h),
                () => {
                    ei._.unsubscribe(eo.jej.CALL_START, h);
                }
            );
    }, [h, c]),
    c && !t && !i && a && d && n.isVocalThread())
        ? (0, l.jsx)(nh.Ay.Icon, {
              icon: lx.PhoneCallIcon,
              onClick: h,
              tooltip: s ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lQ = t(812991),
    lJ = t(741534),
    l0 = t(527212);
function l1() {
    let [e, n] = (0, r.useState)(window.innerWidth >= 1132);
    return (
        (0, r.useEffect)(() => {
            function e() {
                n(window.innerWidth >= 1132);
            }
            return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
        }, []),
        e
    );
}
function l2(e) {
    let { channel: n, showCallOrActivityPanel: t } = e,
        i = (0, A.bG)([nT.Ay], () => nT.Ay.getSection(n.id, n?.isDM())),
        r = (0, l0.Ay)(n.getRecipientId()),
        s = l1(),
        a = i === eo.YvQ.PROFILE && s;
    return (0, l.jsx)(nh.In, {
        disabled: !s || t,
        tooltip: !s || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lQ.UserCircleStatusIcon,
        onClick: function () {
            ((0, lJ.am)({ displayProfile: r, isProfileOpen: !a }), E.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let l3 = {};
class l6 extends A.Ay.PersistedStore {
    static displayName = "GuildPromptsStore";
    static persistKey = "GuildPromptsStore";
    initialize(e) {
        for (let n in e) {
            let t = e[n];
            l3[n] = new Set(t);
        }
    }
    hasViewedPrompt(e, n) {
        let t = l3[n];
        return null != t && !!t.has(e);
    }
    getState() {
        return l3;
    }
}
let l9 = new l6(eq.h, {
    GUILD_PROMPT_VIEWED: function (e) {
        let { prompt: n, guildId: t } = e,
            i = l3[t];
        return null == i ? ((l3[t] = new Set()), l3[t].add(n), !0) : !i.has(n) && (i.add(n), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: n } = e;
        return null != l3[n.id] && !n.unavailable && (delete l3[n.id], !0);
    },
});
var l7 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l8 = t(376943),
    l5 = t(394953),
    l4 = t(941504),
    re = t(683063),
    rn = t(403581),
    rt = t(241541),
    ri = t(709066),
    rl = t(87664),
    rr = t(247676),
    rs = t(695526),
    ra = t(927813),
    ro = t(812020),
    rd = t(945810);
let rc = (0, rd.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var ru = t(46653),
    rh = t(851746),
    rA = t(103411);
function rm() {
    let e = (0, rA.m)(),
        n = (0, A.bG)([rh.A], () => rh.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, A.bG)([ru.default], () => ru.default.getId()),
    };
}
var rp = t(315629),
    rg = t(610709),
    rf = t(303682),
    rx = t(224370),
    rI = t(544879);
function rE(e) {
    let {
            analyticsLocation: n,
            markAsDismissed: t,
            className: i,
            title: r = z.intl.string(z.t["DMie/y"]),
            body: s = z.intl.string(z.t.u0HAhn),
            ctaText: o = z.intl.string(z.t.Lm2nFc),
            onPrimaryAction: d,
        } = e,
        { analyticsLocations: c } = (0, P.Ay)(n);
    return (0, l.jsxs)(rp.h, {
        color: "nitro-pink",
        className: a()(rx.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: rx.lj,
                children: [
                    (0, l.jsx)("img", { className: rx.Dp, src: rI.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: rx.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-xs/semibold",
                                color: "text-default",
                                className: rx.DD,
                                children: r,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                className: rx.rf,
                                children: s,
                            }),
                        ],
                    }),
                    (0, l.jsx)(tE.D, {
                        className: rx.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lP.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(t9.XSmallIcon, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: rx.v0,
                children: (0, l.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lP.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, rg.jM)({
                                  startingScreen: rf.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var rC = t(349420);
let ry = { cooldownDurationMs: 60 * ra.A.Millis.DAY };
function rj(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: rc.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = rm(),
                l = (0, A.bG)(
                    [lL.A, ee.default, ro.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i) return !1;
                            let n = ee.default.getUser(e);
                            if (null == n || lL.A.isBlockedOrIgnored(e)) return !1;
                            let t = ro.A.getUserAffinity(e);
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
    return (0, l.jsx)(lj.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: ry,
        groupName: lP.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(rE, {
                      className: rC.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var rb = t(403362);
t(696101);
let r_ = [],
    rT = es.Ay.getEnableHardwareAcceleration();
function rN(e) {
    let { user: n, channel: i, status: s, activities: a } = e,
        o = (0, A.bG)([J.A], () => null != J.A.getTypingUsers(i.id)[n.id]),
        d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, A.bG)([Z.A], () => Z.A.isMobileOnline(n.id)),
        u = (0, A.bG)([lL.A], () => lL.A.getNickname(n.id)),
        h = (0, rl.A)(n.id),
        m = r.useRef(null);
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
                t.e(307059),
                t.e(309291),
                t.e(843326),
            ]).then(t.bind(t, 183245));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function g() {
        let e = `@${er.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            L.A.startTyping(i.id));
    }
    let f = (0, D.r)({ user: n }),
        [x, I] = r.useState(!1);
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
            let { onClick: t, onMouseDown: r, ...A } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: m,
                    user: n,
                    currentUser: d,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: rT,
                    isTyping: o,
                    status: s,
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
                        x ? e.stopPropagation() : r?.(e);
                    },
                    ...A,
                },
                n.id,
            );
        },
    });
}
function rv(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function rS(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: s } = (0, P.Ay)(M.A.MEMBER_LIST),
        { listItems: a } = (0, A.bG)(
            [lL.A, ee.default, Z.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(rb.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lL.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Z.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Z.A.getActivities(e.id) ?? r_,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: r_ });
                let r = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    r.push(n);
                }
                return { listItems: r };
            },
            [n],
            rv,
        );
    r.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.Rv)(),
        c = (0, rr.A)({ useNitroCapExperiment: !0 }),
        h = (0, rs.qH)(),
        m = n.isMultiUserDM() && "entitled" === h && c > 10;
    return (0, l.jsx)(P.f5, {
        value: s,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tW.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(rj, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.nN,
                            children: [
                                m
                                    ? (0, l.jsx)(re.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(rn.NitroWheelIcon, {
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
                                o && (0, l.jsx)(ri.A, { type: ri.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                rN,
                                { user: e.user, status: e.status, activities: e.activities, channel: n },
                                e.user.id,
                            ),
                        ),
                        a.length < c
                            ? (0, l.jsx)("div", {
                                  className: ec.Uf,
                                  children: (0, l.jsx)(lU.NE, {
                                      channel: n,
                                      text: z.intl.string(z.t.NB5DFD),
                                      icon: rt.GroupPlusIcon,
                                      variant: "secondary",
                                      fullWidth: !0,
                                      allowFrictionlessGDMUpsell: !d,
                                      entryPointType: lU.YW.MEMBER_LIST,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        }),
    });
}
var rR = t(10394),
    rL = t(898029),
    rO = t(36537);
function rM() {
    return (0, l.jsx)("div", {
        className: rO.zt,
        children: (0, l.jsx)("header", {
            className: rL.wL,
            children: (0, l.jsxs)("div", {
                className: rL.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: rL.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: rL.u1,
                            itemClassName: rL.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var rP = t(138298),
    rD = t(940382),
    rk = t(129095),
    rw = t(718734),
    rU = t(163328),
    rG = t(425557),
    rF = t(270003),
    rH = t(150934),
    rV = t(452027),
    rB = t(95477),
    rW = t(281595),
    rY = t(465532),
    rz = t(579872),
    rX = t(134357),
    rq = t(408018),
    rK = t(989161),
    r$ = t(102077),
    rZ = t(915089),
    rQ = t(314307),
    rJ = t(636922),
    r0 = t(931664),
    r1 = t(631576),
    r2 = t(253932),
    r3 = t(596344),
    r6 = t(522602),
    r9 = t(710272),
    r7 = t(518960),
    r8 = t(753738);
function r5(e, n) {
    return { type: e, message: n ?? null };
}
function r4(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var se = t(971389),
    sn = t(474078),
    st = t(620632),
    si = t(152367),
    sl = t(408278),
    sr = t(147087),
    ss = t(55294),
    sa = t(143161),
    so = t(909833);
let sd = n8.oU.THREAD_CREATION;
function sc(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        r = (0, A.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: s } = (0, P.Ay)(M.A.CREATE_THREAD);
    return null == r
        ? null
        : (0, l.jsx)(P.f5, {
              value: s,
              children: (0, l.jsx)(e2.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: sa.kL,
                      children: [
                          (0, l.jsx)(ef.A, { channel: r, draftType: iM.C.FirstThreadMessage }),
                          (0, l.jsx)(su, { parentChannelId: n }),
                          (0, l.jsx)(sh, { parentChannel: r, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function su(e) {
    let { parentChannelId: n } = e,
        t = r.useCallback(() => {
            let e = iM.A.getThreadSettings(n),
                t = iM.A.getDraft(n, iM.C.FirstThreadMessage).trim(),
                i = r6.A.getUploads(n, iM.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? rz.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, iS.bA)(n);
                      },
                  })
                : (0, iS.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nh.Ay, {
        toolbar: (0, l.jsx)(nh.Ay.Icon, { icon: t9.XSmallIcon, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nh.Ay.Icon, { icon: rU.ThreadIcon, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nh.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function sh(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: s } = e,
        o = (0, A.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((n = r.useContext(e2.EH)),
            r.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, A.bG)([iM.A], () => iM.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = r.useState(t),
                s = r.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), rY.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: s };
        })(t, i),
        { textAreaState: m, setTextAreaState: p } = (function (e, n) {
            let [t, i] = r.useState((0, rq.N3)());
            return (
                r.useEffect(() => {
                    function t(t) {
                        let l = iM.A.getDraft(e.id, iM.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, rq.ur)(l)), n(iM.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iM.A.addChangeListener(t),
                        () => {
                            iM.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, se.EN)(t),
        {
            isGeneratingAI: f,
            enableAIFeatures: x,
            getThreadNameInputAccessory: I,
        } = (function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    updateThreadSettings: i,
                    threadSettings: s,
                    textAreaState: a,
                } = e,
                [o, d] = r.useState(!1),
                [c, u] = r.useState(!1),
                h = (0, sr.b)(),
                A = r.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = r3.A.getMessage(n.id, t);
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
                                        let n = await st.Bo.post({
                                            url: eo.Rsh.AI_TITLE,
                                            body: { content: e },
                                            oldFormErrors: !0,
                                            rejectWithError: (0, st.fT)(),
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
            (r.useEffect(() => {
                (u(!1), d(!1), n.id === s.parentChannelId && t !== s.parentMessageId && i({ name: "" }));
            }, [t, i, n.id, s.parentChannelId, s.parentMessageId]),
                r.useEffect(() => {
                    (null != s.name && "" !== s.name.trim()) || c || (h && null != t && (u(!0), A()));
                }, [n.id, t, i, s.name, c, h, A]));
            let m = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: si.MagicWandIcon,
                                onClick: A,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, A, o, t, a.textValue],
                ),
                p = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(sl.K, {
                                      icon: si.MagicWandIcon,
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
                    textAreaState: s,
                    location: a,
                    enableAIFeatures: o,
                } = e,
                [d, c] = r.useState(null),
                [u, h] = r.useState(null),
                [A, m] = r.useState(!1),
                p = (0, ss.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: iS.GS,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: r.useCallback(
                    async (e, l, r) => {
                        if (A) return { shouldClear: !1, shouldRefocus: !1 };
                        (m(!0),
                            null == e && (e = s.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = r0.A.getStickerPreview(n.id, sd.drafts.type)?.map((e) => e.id)),
                            (null == r || 0 === r.length) && (r = r6.A.getUploads(n.id, iM.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === r.length;
                        if (
                            (c(d ? r5(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? r5(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, r9.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: r.length > 0,
                            type: sd,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, r);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var f;
                                c(((f = e.body), r5(1, (0, r8.cw)(f, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(r5(2, z.intl.string(z.t.uXA573)));
                            return (m(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, r1.x5)(n.id, sd.drafts.type), m(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, s.textValue, i.name, t, n, A, o],
                ),
                submitting: A,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: m,
            location: s,
            enableAIFeatures: x,
        }),
        b = (0, se.Iy)(c, g) ? rG.ThreadLockIcon : rU.ThreadIcon;
    return (0, l.jsx)("div", {
        className: sa.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(sa.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), y());
                },
                className: sa.Zd,
                children: [
                    (0, l.jsx)(tW.Ip, {
                        className: sa.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: sa.bv,
                            children: [
                                (0, l.jsxs)(rQ.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(so.P0, sa.P0),
                                            children: (0, l.jsx)(b, { className: so.Kk }),
                                        }),
                                        (0, l.jsxs)(rF.n, {
                                            children: [
                                                (0, l.jsx)(sm, {
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
                                                (0, l.jsx)(sA, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(sg, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: sa.Eh,
                        children: [
                            (0, l.jsx)(sp, {
                                parentChannel: t,
                                textAreaState: m,
                                setTextAreaState: p,
                                submit: y,
                                error: C,
                            }),
                            (0, l.jsx)(rX.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: sa.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function sA(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: r } = e,
        s = (0, se.Iy)(t, r),
        a = (0, l.jsx)(rH.S, {
            disabled: r === se.jk.PrivateOnly,
            checked: s,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || r === se.jk.Disabled
        ? null
        : (0, l.jsx)(rV.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: s ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function sm(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: i,
            updateThreadSettings: r,
            error: s,
            disabled: a,
            isGeneratingAI: o,
            enableAIFeatures: d,
            getThreadNameInputAccessory: c,
        } = e,
        u = i.name ?? "",
        h = r4(s, { content: u }),
        A = (0, se.l1)(n, t),
        m = null != t && !d,
        p = (0, rZ.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== A ? A : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(rB.k, {
        label: z.intl.string(m ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: 100,
        onChange: function (e) {
            (r({ name: (0, sn.A)(e, !1) }), "" !== e ? L.A.startTyping(n.id) : L.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, sn.A)(u, !0);
            e !== u && r({ name: e });
        },
        error: h,
        disabled: a || o,
    });
}
function sp(e) {
    let { parentChannel: n, textAreaState: t, setTextAreaState: i, submit: s, error: o } = e,
        [d, c] = r.useState(!0),
        u = r.useRef(null),
        h = r.useCallback((e) => {
            (c(!0), e?.wasEnterPressed && (e?.event?.preventDefault(), u.current?.submit()));
        }, []),
        m = r.useCallback(() => c(!1), []),
        p = r.useCallback(
            (e, t, l) => {
                (rY.A.saveDraft(n.id, t, iM.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? L.A.startTyping(n.id) : "" === t && L.A.stopTyping(n.id),
                            { textValue: t, richValue: l }
                        ),
                    ));
            },
            [n.id, i],
        ),
        g = r.useCallback(
            (e) => {
                let { value: n, uploads: t, stickers: i } = e;
                return s(n, i, t);
            },
            [s],
        );
    ((0, e2.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, e2.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: m }));
    let f = (0, A.bG)([l$.A], () => l$.A.can(eo.xBc.ATTACH_FILES, n)),
        x = r4(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r$.A, { channelId: n.id, type: sd, canAttachFiles: f }),
            (0, l.jsx)("div", { className: sa.xN, children: (0, l.jsx)(rW.U, { error: x }) }),
            (0, l.jsx)(rK.Ay, {
                type: sd,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(sa.gM, sa.Yy),
                innerClassName: a()(sa.SL, { [sa.cr]: null != x }),
                onFocus: h,
                onBlur: m,
                onChange: p,
                onSubmit: g,
                promptToUpload: r7.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function sg(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, A.bG)([r3.A], () => (null == t ? null : r3.A.getMessage(n.id, t))),
        r = r2.hH.useSetting();
    return null != i
        ? (0, l.jsx)(rJ.A, {
              className: sa.IL,
              message: i,
              channel: n,
              compact: r,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var sf = t(494208),
    sx = t(40389),
    sI = t(138399),
    sE = t(56562),
    sC = t(438653);
function sy(e) {
    let { channel: n } = e,
        [t, i] = r.useState(!1),
        s = r.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nw.Y, {
        targetElementRef: s,
        shouldShow: t,
        animation: nw.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(sj, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nh.Ay.Icon, {
                ...e,
                ref: s,
                onClick: a,
                tooltip: t ? null : o,
                icon: nF.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function sj(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        r = (0, t8.A)(n),
        s = (0, ii.A)(n),
        a = (0, ia.A)(n.id),
        o = (0, is.A)(n),
        d = (0, iu.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, t5.A)(n),
        h = (0, t4.A)(n),
        m = (0, ie.A)(n, "Toolbar Overflow"),
        p = (0, it.A)(n, "Toolbar Overflow"),
        g = (0, il.A)(n),
        f = (0, sx.A)(n),
        x = (0, ic.A)(n),
        I = (0, ir.A)(n),
        E = n.isThread()
            ? (0, l.jsx)(nO.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      sI.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: sE.vx.INSTANT });
                  },
              })
            : null,
        C = (0, sC.z)(n),
        y = (0, sC.C)(n),
        j = r2.SY.useSetting(),
        b = (0, A.bG)([lO.A], () => !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id))),
        _ = (0, A.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nU.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(nO.rX, { children: [m, f] }),
            (0, l.jsxs)(nO.rX, {
                children: [
                    E,
                    o,
                    g,
                    a,
                    !j || b || _
                        ? null
                        : (0, l.jsx)(nO.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, iS.JA)(n);
                              },
                          }),
                    I,
                ],
            }),
            (0, l.jsx)(nO.rX, { children: C }),
            (0, l.jsxs)(nO.rX, { children: [x, r, s, h] }),
            (0, l.jsxs)(nO.rX, { children: [p, y] }),
            (0, l.jsxs)(nO.rX, { children: [c, d] }),
        ],
    });
}
var sb = t(332456),
    s_ = t(889812),
    sT = t(973854),
    sN = t(62502);
function sv(e) {
    var n;
    let i,
        { channelId: s, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, A.bG)([ew.A], () => ew.A.getChannel(s)),
        c = (0, A.bG)([tS.A], () => tS.A.getGuild(d?.getGuildId())),
        h = (0, tQ.Ay)(d),
        m = (0, t1.Uf)(d);
    ((n = d),
        (i = (0, A.bG)([lO.A], () => null != n && !u().isEmpty(lO.A.getVoiceStatesForChannel(n.id)))),
        r.useEffect(() => {
            i &&
                null != n &&
                (eq.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, ih.N9)(n, { source: iN.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = r.useRef(!1);
    if (
        (r.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, sb.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, s_.q)(d.id), channel_view: o }),
                (0, sT.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != m) return (0, l.jsx)(t2.A, { guild: c, channelId: m });
    let g = (0, l.jsx)(iO, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ef.A, { channel: d, draftType: iM.C.ChannelMessage }),
            (0, l.jsx)(nh.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, t0.zF)({
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
                        null != d && (0, ih.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: sN.T,
                children: (0, l.jsx)(tJ.A, { channel: d, guild: c, chatInputType: n8.oU.SIDEBAR }, s),
            }),
        ],
    });
}
var sS = t(210714),
    sR = t(707554),
    sL = t(140735),
    sO = t(590180),
    sM = t(287727),
    sP = t(562153),
    sD = t(215530),
    sk = t(365958),
    sw = t(736653),
    sU = t(311016),
    sG = t(971217),
    sF = t(713517),
    sH = t(397562),
    sV = t(183555),
    sB = t(718019),
    sW = t(241614),
    sY = t(915614),
    sz = t(743987),
    sX = t(900179),
    sq = t(946356),
    sK = t(465829),
    s$ = t(35241),
    sZ = t(587168),
    sQ = t(442228),
    sJ = t(827428);
function s0(e) {
    let { context: n, analyticsLocations: t, handleOpenProfile: i } = e;
    return (0, l.jsx)("div", {
        className: sJ.l,
        children: (0, l.jsx)(f.$, {
            variant: "secondary",
            size: "md",
            fullWidth: !0,
            text: z.intl.string(z.t["+Xp3hq"]),
            onClick: function () {
                (i(), (0, lJ.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
            },
        }),
    });
}
var s1 = t(518477),
    s2 = t(996988),
    s3 = t(207634),
    s6 = t(561419),
    s9 = t(396095);
function s7(e) {
    let { user: n, channel: t } = e,
        i = __OVERLAY__ || !(0, sU.A)(n.id),
        s = (0, l0.Ay)(n.id),
        o = (0, sw.Ay)(),
        d = r.useRef(Date.now()),
        { analyticsLocations: c } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        u = (0, sV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, sH.A)(c, s, s1.R7.SIDEBAR);
    let h = r.useRef(null),
        { isHoveringOrFocusing: A, isHovering: m } = (0, sF.A)(h);
    function p() {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: c, hideRestrictedProfile: !0, ...u });
    }
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(sV.of, {
            value: u,
            openedAt: d.current,
            fetchStartedAt: s?.fetchStartedAt,
            fetchEndedAt: s?.fetchEndedAt,
            isLoaded: s?.isLoaded,
            children: (0, l.jsxs)(sq.A, {
                ref: h,
                user: n,
                displayProfile: s,
                themeType: s2.d.SIDEBAR,
                themeOverride: o,
                className: a()(s6.BK, "user-profile-sidebar-redesign"),
                children: [
                    (0, l.jsxs)(tW.d_, {
                        className: s6.BE,
                        children: [
                            (0, l.jsx)(sZ.A, { children: (0, l.jsx)(s$.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: s6.wx,
                                children: [
                                    (0, l.jsx)(sY.A, {
                                        user: n,
                                        displayProfile: s,
                                        themeType: s2.d.SIDEBAR,
                                        specOverrides: { bannerWidth: 300, bannerHeight: 105, themePadding: 2 },
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(sB.A, {
                                        user: n,
                                        displayProfile: s,
                                        channelId: t.id,
                                        avatarSize: s3.T[s2.d.SIDEBAR].avatarSize,
                                        onOpenProfile: i ? void 0 : p,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: s9.rf,
                                children: [
                                    (0, l.jsx)(sK.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: sP.Ay.getName(null, t.id, n),
                                        onClickName: i ? void 0 : p,
                                        pronouns: s?.pronouns,
                                        trailing: (0, l.jsx)(sW.A, { displayProfile: s, themeType: s2.d.SIDEBAR }),
                                    }),
                                    (0, l.jsx)(sQ.A, {
                                        userId: n.id,
                                        userBio: s?.bio,
                                        isHoveringOrFocusing: A,
                                        animateOnHoverOrFocusOnly: !0,
                                        hideRestrictedProfile: !0,
                                    }),
                                    (0, l.jsx)(sX.A, {
                                        heading: z.intl.string(z.t["A//N4k"]),
                                        headingColor: "text-strong",
                                        children: (0, l.jsx)(sz.A, { userId: n.id }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    !i && (0, l.jsx)(s0, { handleOpenProfile: p, analyticsLocations: c, context: u }),
                    s?.profileEffect != null && (0, l.jsx)(sG.A, { skuId: s?.profileEffect?.skuId, isHovering: m }),
                ],
            }),
        }),
    });
}
var s8 = t(331322),
    s5 = t(249790),
    s4 = t(254828),
    ae = t(783123),
    an = t(966430);
function at(e) {
    let { user: n, channel: t, onHide: i } = e,
        s = (0, l0.Ay)(n.id),
        a = (0, sw.Ay)(),
        o = (0, A.bG)([lL.A], () => lL.A.isBlocked(n.id)),
        { analyticsLocations: d } = (0, P.Ay)(o ? M.A.BLOCKED_PROFILE_PANEL : M.A.IGNORED_PROFILE_PANEL),
        c = (0, sV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, sH.A)(d, s, s1.R7.SIDEBAR);
    let u = r.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: d,
        children: (0, l.jsx)(sV.of, {
            value: c,
            fetchStartedAt: s?.fetchStartedAt,
            fetchEndedAt: s?.fetchEndedAt,
            isLoaded: s?.isLoaded,
            children: (0, l.jsx)(sq.A, {
                ref: u,
                user: n,
                displayProfile: s,
                themeType: s2.d.SIDEBAR,
                themeOverride: a,
                className: "user-profile-sidebar-redesign",
                children: (0, l.jsx)(tW.d_, {
                    children: (0, l.jsxs)("div", {
                        className: an.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: an.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: an.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: an.N1,
                                        children: [
                                            (0, l.jsx)(s5.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/semibold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                children: z.intl.format(o ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: sP.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(s8.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ae.A, {
                                                isBlocked: o,
                                                onClick: () => {
                                                    (i(),
                                                        (0, lJ.Wn)({
                                                            action: o ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: d,
                                                            ...c,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(s4.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (i(),
                                                        (0, lJ.Wn)({
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
var ai = t(120692),
    al = t(717421),
    ar = t(31956),
    as = t(744808),
    aa = t(679492),
    ao = t(439053),
    ad = t(312381),
    ac = t(630891),
    au = t(193738),
    ah = t(666297),
    aA = t(680581),
    am = t(695366),
    ap = t(922590),
    ag = t(821269),
    af = t(263775),
    ax = t(326084),
    aI = t(834708),
    aE = t(154486);
let aC = (0, rd.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var ay = t(158390),
    aj = t(906573);
let ab = new ay.A(30 * ra.A.Millis.SECOND, 5 * ra.A.Millis.MINUTE, !0),
    a_ = 0;
var aT = t(504492);
function aN(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aC.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, A.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        s = (0, aI.d)(i),
        a = t && s,
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
            } = (0, A.cf)([aj.A], () => {
                let n = Number(aj.A.getVersion());
                return {
                    isDismissed: null != e && aj.A.isDismissedFor(e),
                    hasFetched: aj.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                r.useEffect(() => {
                    null != e &&
                        (async function () {
                            if (aj.A.shouldFetch() && !(Date.now() < a_)) {
                                eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
                                try {
                                    let e = await st.Bo.get({
                                        url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                        oldFormErrors: !0,
                                        rejectWithError: !0,
                                    });
                                    (ab.succeed(),
                                        (a_ = 0),
                                        eq.h.dispatch({
                                            type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                                            version: String(e.body?.version ?? "0"),
                                            targetIds: Array.isArray(e.body?.target_ids)
                                                ? e.body.target_ids.map((e) => String(e))
                                                : [],
                                        }));
                                } catch {
                                    ((a_ = Date.now() + ab.fail()),
                                        eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
                                }
                            }
                        })();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: r.useCallback(() => {
                        null != e &&
                            (aj.A.isDismissedFor(e) ||
                                (eq.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                st.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(av, { targetUser: i, version: c, onDismiss: u }) : null;
}
function av(e) {
    let { targetUser: n, version: i, onDismiss: s } = e,
        a = (0, aE.p)(n.id),
        [o, d] = (0, af.RF)(a ? m.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lP.m.SIDEBAR, !0),
        c = r.useCallback(
            (e) => {
                (d(e), s());
            },
            [d, s],
        ),
        u = r.useCallback(
            (e) => {
                (et.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.mM)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(t.bind(t, 810852)),
                                (0, ax.xm)([n.id]),
                            ]),
                            r = i.get(n.id) ?? ax.o.FAIL;
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                results: [{ recipient: n, status: r }],
                                isReminderConfirmation: !1,
                                showRecipientList: !1,
                                recipientName: er.Ay.getName(n),
                            });
                    }));
            },
            [n],
        );
    if (null == o) return null;
    let h = er.Ay.getName(n);
    return (0, l.jsx)(rE, {
        className: aT.K,
        analyticsLocation: M.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var aS = t(433380),
    aR = t(673843),
    aL = t(634110),
    aO = t(351906),
    aM = t(851767),
    aP = t(612770),
    aD = t(559506),
    ak = t(361311),
    aw = t(477534),
    aU = t(791556),
    aG = t(501193),
    aF = t(383448),
    aH = t(646986),
    aV = t(312294),
    aB = t(243166),
    aW = t(805251),
    aY = t(123292),
    az = t(174947),
    aX = t(840411);
let aq = (0, rd.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aK = t(387325),
    a$ = t(666810),
    aZ = t(416415),
    aQ = t(88940),
    aJ = t(394300),
    a0 = t(575593),
    a1 = t(329921),
    a2 = t(44120),
    a3 = t(778705),
    a6 = t(317560),
    a9 = t(306984),
    a7 = t(661492),
    a8 = t(146423),
    a5 = t(662349),
    a4 = t(802290),
    oe = t(479026),
    on = t(636374),
    ot = t(699976),
    oi = t(682901),
    ol = t(733484),
    or = t(880465);
function os(e) {
    let n,
        {
            sku: t,
            wishlistOwner: i,
            wishlistId: s,
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
        { trackUserProfileWishlistAction: x } = (0, sV.NJ)(),
        I = r.useId(),
        E = (0, aQ.A)(f),
        C = ot.y.SIZE_78,
        y = ot.Z[C],
        j = r.useCallback(() => {
            (m?.(),
                x({
                    action: s1.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: s,
                    productLines: new Set([t.productLine]),
                }),
                h());
        }, [t, s, h, m, x]),
        b = r.useCallback(() => {
            (m?.(),
                x({
                    action: s1.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                    skuId: t.id,
                    wishlistId: s,
                    productLines: new Set([t.productLine]),
                }),
                A());
        }, [A, m, t.id, s, t.productLine, x]),
        {
            onBodyClick: _,
            onOverlayClick: T,
            showOverlayButton: N,
            routesToGift: v,
            label: S,
            icon: R,
        } = (0, on.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: j, onPurchaseClick: b }),
        [L, O] = r.useState(!1);
    return (0, l.jsx)("div", {
        className: ol.kL,
        children: (0, l.jsxs)(a8.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: y,
            cardStyle: a()(ol.Nr, o),
            skuPreviewStyle: a()(ol.ho, d),
            skuAssetClassName: L ? c : void 0,
            onClick: _,
            "aria-label":
                ((n = v ? (0, a7.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a7.T)(t) })),
                !0 === g ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            "aria-describedby": null != E ? I : void 0,
            topLeftContent: null != E ? (0, l.jsx)(a4.A, { id: I, countdown: E, variant: "sidebar" }) : void 0,
            onHoverOrFocusChange: O,
            children: [
                !0 === g && (0, l.jsx)(a1.N, { className: ol.Pf }),
                N &&
                    (0, l.jsx)(a5.A, {
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
function oa(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...s } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            M.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = r.useCallback(() => {
            (0, a9.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: oi.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = r.useCallback(() => {
            (0, a6.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: oi.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(os, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...s,
    });
}
function oo(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...s } = e,
        o = r.useCallback(() => {
            (0, a2.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: oi.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, oe.e)({ sku: n, giftRecipient: t, giftingOrigin: oi.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = r.useMemo(
            () =>
                a()(ol.ML, {
                    [ol.M]: n?.tenantMetadata?.collectibles?.type === a0.R.AVATAR_DECORATION,
                    [ol.Hm]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_EFFECT,
                    [ol.hH]: n?.tenantMetadata?.collectibles?.type === a0.R.PROFILE_FRAME,
                    [ol.qF]: n?.tenantMetadata?.collectibles?.type === a0.R.NAMEPLATE,
                    [ol.l2]: n?.tenantMetadata?.collectibles?.type === a0.R.BUNDLE,
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
        ...s,
    });
}
function od(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: s, style: o, ...d } = e,
        c = r.useCallback(() => {
            let e = n.id;
            (0, a3.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: oi.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = s === aL.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(os, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: s,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(or.MO, { [ol.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(ol.fi, { [ol.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(ol.p7, { [ol.SW]: h.length >= 10, [ol.ot]: h.length >= 12 }),
                          variant: "body-xs/semibold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function oc(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(oa, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(oo, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(od, { sku: n, ...t });
        default:
            return null;
    }
}
var ou = t(448645),
    oh = t(695904),
    oA = t(573238),
    om = t(342442),
    op = t(658946),
    og = t(419731),
    of = t(535089),
    ox = t(815637);
function oI(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: s, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { labelsEnabled: d, reorderEnabled: c } = (0, aK.Zf)("UserProfileSidebarWishlistBreadcrumb"),
        u = ee.default.getCurrentUser(),
        { trackUserProfileAction: h, trackUserProfileWishlistAction: m } = (0, sV.NJ)(),
        p = (0, r.useId)(),
        { hasNewWishlistItems: g, newWishlistItemCount: f, shouldLogExposure: x } = (0, oA.A)(t),
        I = (0, r.useCallback)(() => {
            h({ action: "PRESS_NEW_CONTENT_WISHLIST", section: s1.RP.WISHLIST });
        }, [h]),
        { isItemNew: E, onItemPress: C } = (function (e, n) {
            let t = (0, oh.bq)(),
                i = (0, A.bG)(
                    [aM.A],
                    () => {
                        let n = aM.A.getProfileReadState(e);
                        return null == n ? void 0 : (n[om.o.WISHLIST] ?? null);
                    },
                    [e],
                ),
                [l, s] = r.useState(void 0);
            null == t || void 0 !== l || (t.enabled && void 0 === i) || s(t.enabled ? i : null);
            let [a, o] = r.useState(() => new Set()),
                d = r.useCallback(
                    (e) => t?.enabled === !0 && !a.has(e.skuId) && (0, og.f3)(e.addedAt, l),
                    [t?.enabled, a, l],
                ),
                c = r.useCallback(
                    (i) => {
                        null != t && (o((e) => new Set(e).add(i.skuId)), d(i) && n(), (0, op.U)(e));
                    },
                    [t, e, d, n],
                );
            return { isItemNew: d, onItemPress: c };
        })(t.id, I),
        y = (0, r.useCallback)(() => {
            (g && h({ action: "PRESS_NEW_CONTENT_WISHLIST", section: s1.RP.WISHLIST }), i());
        }, [g, i, h]),
        j = (0, r.useMemo)(() => n ?? [], [n]),
        b = null != u && u.id !== t.id,
        _ = (0, aZ.Ay)(j, b),
        T = c && b ? _ : j,
        N = b && (0, aZ.Oh)(j, _, 3),
        v = (0, r.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && m({ wishlistId: n, action: t, productLines: i });
            },
            [m],
        ),
        S = (0, r.useMemo)(() => {
            let e = T.slice(0, 3).map((e) => ({ item: e, source: aL.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = T.some((e) => ou.Ay.isPremiumSku(e.skuId));
                if (!ou.Ay.isPremiumAtLeast(t.premiumType, oi.PremiumTypes.TIER_2) && !n) {
                    let n = aJ.A.fromSKU((0, aX.rI)());
                    null != n && e.push({ item: n, source: aL.uS.POPULAR });
                }
            }
            return e;
        }, [T, a, t.premiumType]),
        L = (0, r.useMemo)(
            () =>
                j
                    .slice(0, 3)
                    .filter(az.xZ)
                    .map((e) => e.shopUnpublishedAt),
            [j],
        ),
        O = (0, aQ.N)(L),
        M = (0, r.useMemo)(
            () =>
                new Set(
                    S.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [S],
        ),
        D = (0, of.A)({ wishlistId: s ?? null, onAction: v, productLines: M }),
        k = (0, r.useMemo)(
            () =>
                S.map((e, n) => {
                    let { item: i, source: r } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              oc,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: s,
                                  analyticsLocations: o,
                                  onViewWishlist: y,
                                  source: r,
                                  onItemClick: r === aL.uS.WISHLIST ? () => C(i) : void 0,
                                  isNew: r === aL.uS.WISHLIST && E(i),
                                  shopUnpublishedAt: d && r === aL.uS.WISHLIST ? i.shopUnpublishedAt : void 0,
                              },
                              i.skuId,
                          );
                }).filter(rb.Vq),
            [o, y, t, S, s, E, C, d],
        ),
        w = g && k.length > 0,
        U = (0, r.useRef)(!1);
    (0, r.useEffect)(() => {
        w && !U.current && ((U.current = !0), h({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [w, h]);
    let G = N ? (0, l.jsx)(aK.m4, { location: "UserProfileSidebarWishlistReorderOpportunity" }) : null;
    return 0 === k.length
        ? G
        : (0, l.jsxs)("section", {
              "aria-labelledby": p,
              children: [
                  O && (0, l.jsx)(aK.m4, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                  G,
                  (0, l.jsxs)(sq.A.Overlay, {
                      ref: D,
                      className: ox.kL,
                      children: [
                          x && (0, l.jsx)(oh.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                          (0, l.jsxs)("div", {
                              className: ox.wx,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: ox.qd,
                                      children: [
                                          (0, l.jsx)(R.D, {
                                              variant: "body-sm/medium",
                                              id: p,
                                              children: z.intl.string(z.t["7lZ31J"]),
                                          }),
                                          g &&
                                              (0, l.jsx)(aW.E, {
                                                  type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: f }) },
                                                  variant: "primary",
                                              }),
                                      ],
                                  }),
                                  (T.length > 3 || g) &&
                                      (0, l.jsx)(aY.Q, {
                                          variant: "secondary",
                                          textVariant: "body-xs/normal",
                                          onClick: y,
                                          text: z.intl.string(z.t.y6PSA3),
                                      }),
                              ],
                          }),
                          (0, l.jsx)(sR.F, { children: (0, l.jsx)("div", { className: ox.vY, children: k }) }),
                      ],
                  }),
              ],
          });
}
function oE(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...r } = e,
        s = aq.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (n || r.profileOwner.bot || ((null == t || 0 === t.length) && !s)) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== r.profileOwner.id;
    return (0, l.jsx)(a$.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(oI, { ...r, unownedWishlistItems: t, isNitroRecEnabled: s }, r.profileOwner.id),
    });
}
function oC(e) {
    let { user: n, currentUser: t, displayProfile: i, channel: s, isHoveringOrFocusing: a, onOpenProfile: o } = e,
        { relationshipType: d, originApplicationId: c } = (0, A.cf)([lL.A], () => ({
            relationshipType: lL.A.getRelationshipType(n.id),
            originApplicationId: lL.A.getOriginApplicationId(n.id),
        })),
        u = (0, ap.fi)(n.id),
        h = (0, ag.q)({ userId: n.id }),
        m = (0, A.bG)([aO.A], () => aO.A.hidePersonalInformation),
        p = (0, A.bG)([aM.A], () => aM.A.getUserProfile(n.id)?.application),
        g = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, A.cf)([aM.A], () => ({ defaultWishlistId: aM.A.getFirstWishlistId(n.id) })),
        { wishlist: x, isFetching: I } = (0, aL.fw)({ wishlistId: f, userId: n.id });
    (0, aR.A)(x);
    let E = r.useMemo(() => x?.items.filter((e) => !e.isOwned) ?? null, [x]);
    return (0, l.jsxs)("div", {
        className: s9.rf,
        children: [
            (0, l.jsx)(aD.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: s9.pq,
                children: [
                    (0, l.jsx)(sK.Ay, {
                        user: n,
                        guildId: s.guild_id,
                        displayName: sP.Ay.getName(null, s.id, n),
                        onClickName: o,
                        displayNameTrailing: m
                            ? null
                            : (0, l.jsx)(aB.A, { userId: n.id, isVisible: a, onOpenProfile: o }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(sW.A, { displayProfile: i, themeType: s2.d.SIDEBAR }),
                    }),
                    (0, l.jsx)(aU.A, { user: n, onOpenProfile: (e) => o?.({ tabSection: e }) }),
                ],
            }),
            d === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(sq.A.Overlay, {
                    children: (0, l.jsx)(aw.A, { user: n, channelId: s.id, applicationId: c }),
                }),
            u.map((e) =>
                (0, l.jsx)(
                    sq.A.Overlay,
                    {
                        children: (0, l.jsx)(aw.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: s.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aF.A, { user: n }),
            i?.private &&
                (0, l.jsx)(sq.A.Overlay, { children: (0, l.jsx)(aG.A, { username: sP.Ay.getName(null, s.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(sq.A.Overlay, {
                    className: s9.Lw,
                    children: (0, l.jsx)(sX.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: am.CircleErrorIcon,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(aS.T, { userId: n.id }),
                    }),
                }),
            (0, l.jsx)(sQ.A, {
                userId: n.id,
                userBio: i?.bio,
                hidePersonalInformation: m,
                isHoveringOrFocusing: a,
                animateOnHoverOrFocusOnly: !0,
                hideRestrictedProfile: !0,
            }),
            (0, l.jsx)(sX.A, {
                heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                headingColor: "text-strong",
                children: (0, l.jsx)(sz.A, { userId: n.id }),
            }),
            (0, l.jsxs)("div", {
                className: s9.kR,
                children: [
                    g && (0, l.jsx)(aV.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: o }),
                    (0, l.jsx)(aH.A, { user: n, currentUser: t, onOpenUserProfileModal: o }),
                    p?.popularApplicationCommandIds != null &&
                        (0, l.jsx)(aP.A, {
                            applicationId: p.id,
                            commandIds: p.popularApplicationCommandIds,
                            channel: s,
                        }),
                    h.length > 0 &&
                        (0, l.jsx)(sX.A, {
                            heading: z.intl.string(z.t["Uv/eTx"]),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(ak.A, { applicationIds: h }),
                        }),
                    (0, l.jsx)(oE, {
                        profileOwner: n,
                        unownedWishlistItems: E,
                        wishlistId: f,
                        isLoading: I,
                        onClick: () => {
                            o?.({ tabSection: s1.RP.WISHLIST });
                        },
                        canSeeWishlist: null != x,
                    }),
                    s.isDM() && (0, l.jsx)(aN, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
function oy(e) {
    let { user: n, currentUser: t, channel: i } = e,
        s = __OVERLAY__,
        o = (0, l0.Ay)(n.id),
        d = (0, sw.Ay)(),
        c = r.useRef(void 0),
        u = r.useRef(void 0);
    u.current !== n.id && ((u.current = n.id), (c.current = Date.now()));
    let { analyticsLocations: h } = (0, P.Ay)(M.A.USER_PROFILE_SIDEBAR),
        A = (0, sV.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, sH.A)(h, o, s1.R7.SIDEBAR);
    let m = r.useRef(null),
        { isHoveringOrFocusing: p, isHovering: g } = (0, sF.A)(m),
        f = (0, aa.fC)(),
        x = (0, sM.A)(o?.profileFrame?.skuId);
    (0, ar.A)({ skuId: o?.profileFrame?.skuId, openedAt: c.current, context: A, analyticsLocations: h });
    let I = (0, al.z)({ opacity: +(null != f.interactionType), config: { duration: 150 } });
    function E(e) {
        (0, nz.openUserProfileModal)({ sourceAnalyticsLocations: h, hideRestrictedProfile: !0, ...A, ...e });
    }
    return (0, l.jsx)(P.f5, {
        value: h,
        children: (0, l.jsx)(sV.of, {
            value: A,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsx)(aa.Hl, {
                value: f,
                children: (0, l.jsxs)(sq.A, {
                    ref: m,
                    user: n,
                    displayProfile: o,
                    themeType: s2.d.SIDEBAR,
                    themeOverride: d,
                    profileFrameSkuIdOverride: o?.profileFrame?.skuId,
                    className: a()(s6.BK, "user-profile-sidebar-redesign"),
                    isPrivate: o?.private === !0,
                    children: [
                        o?.private === !0 && (0, l.jsx)(ad.A, {}),
                        null != f.interactionType && (0, l.jsx)(ai.animated.div, { style: I, className: s6.tB }),
                        (0, l.jsxs)(tW.d_, {
                            className: s6.BE,
                            children: [
                                (0, l.jsxs)(sZ.A, {
                                    children: [
                                        (0, l.jsx)(au.A, { user: n, themeType: s2.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ac.A, { user: n }) : (0, l.jsx)(ah.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: s6.wx,
                                    children: [
                                        (0, l.jsx)(sY.A, {
                                            user: n,
                                            displayProfile: o,
                                            themeType: s2.d.SIDEBAR,
                                            specOverrides: { bannerWidth: 300, bannerHeight: 105, themePadding: 2 },
                                            animateOnHoverOrFocusOnly: !p,
                                            className: s6.vK,
                                        }),
                                        (0, l.jsx)(ao.A, { className: s6.oR }),
                                        (0, l.jsx)(sB.A, {
                                            user: n,
                                            displayProfile: o,
                                            channelId: i.id,
                                            avatarSize: s3.T[s2.d.SIDEBAR].avatarSize,
                                            onOpenProfile: s ? void 0 : E,
                                        }),
                                        (0, l.jsx)(aA.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: s2.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oC, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: o,
                                    channel: i,
                                    isHoveringOrFocusing: null == f.interactionType && p,
                                    onOpenProfile: s ? void 0 : E,
                                }),
                            ],
                        }),
                        !s && (0, l.jsx)(s0, { context: A, analyticsLocations: h, handleOpenProfile: E }),
                        o?.profileEffect != null && (0, l.jsx)(sG.A, { skuId: o?.profileEffect?.skuId, isHovering: g }),
                        null != x && (0, l.jsx)(as.A, { frame: x, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oj = t(901600);
function ob(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, A.bG)([ee.default], () => ee.default.getUser(t)),
        s = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l1(),
        [o, d] = (0, sD.A)(t),
        [c, u] = r.useState(!1),
        h = (0, l0.Ay)(t),
        m = h?.profileFrame?.skuId,
        p = (0, sM.A)(m),
        g = (0, A.bG)([sO.A], () => sO.A.getProductFetch(m));
    if (
        (r.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, sk.A)(i, e) : (0, sk.A)(t, void 0, e);
        }, [i, t, n.id]),
        null == i ||
            null == s ||
            !a ||
            (!c && h?.isLoaded !== !0) ||
            (!c && null != m && m !== p?.skuId && g?.state !== "success" && g?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        x = sP.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: oj.H,
        children: (0, l.jsx)(sR.F, {
            component: (0, l.jsx)(sL.A, {
                children: (0, l.jsx)(sR.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: x }) }),
            }),
            children:
                null == i || null == s
                    ? null
                    : o
                      ? (0, l.jsx)(at, { user: i, currentUser: s, onHide: d, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(s7, { user: i, currentUser: s, ...e })
                        : (0, l.jsx)(oy, { user: i, currentUser: s, ...e }),
        }),
    });
}
var o_ = t(522556),
    oT = t(225315),
    oN = t(684407),
    ov = t(95701),
    oS = t(919638),
    oR = t(495867),
    oL = t(812771),
    oO = t(350835),
    oM = t(506309),
    oP = t(598748),
    oD = t(681154),
    ok = t(975460),
    ow = t(587895),
    oU = t(429913),
    oG = t(201718),
    oF = t(339580),
    oH = t(633075),
    oV = t(917445),
    oB = t(382483),
    oW = t(385113);
let oY = r.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function oz(e) {
    let [n, t] = r.useState(new Set()),
        i = r.useCallback((e) => {
            t((n) => (n.has(e) ? n : new Set(n).add(e)));
        }, []),
        s = r.useMemo(
            () => ({
                markAsVisible: i,
                useInjectEntriesWithPreviewData: (e) =>
                    (function (e, n) {
                        let t,
                            i,
                            l,
                            s,
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
                                ((t = r2.Q_.useSetting()),
                                r.useEffect(() => {
                                    (0, oB.Wq)().catch(() => {});
                                }, []),
                                r.useEffect(() => {
                                    t && (0, oB.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, A.bG)([oW.A], () => oW.A.getFeaturedFetchState())),
                                (l = (0, A.bG)([oW.A], () => oW.A.getDeveloperFetchState())),
                                (s = (0, A.yK)([oW.A], () => oW.A.getFeaturedApplicationIds())),
                                (a = (0, A.yK)([oW.A], () => oW.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: r.useMemo(() => new Set([...s, ...a]), [s, a]),
                                    isLoadingConfigs:
                                        i === oW.e.NOT_FETCHED ||
                                        i === oW.e.FETCHING ||
                                        (t && (l === oW.e.NOT_FETCHED || l === oW.e.FETCHING)),
                                }),
                            {
                                widgetApps: y,
                                userIdsWhoMightHaveWidgetData: j,
                                isFetchingApplications: b,
                            } = ((o = r.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oD.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = r.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, A.bG)(
                                [ow.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            ow.A.isFetchingApplication(e) ||
                                            (null == ow.A.getApplication(e) && !ow.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oU.A)(d)),
                            (h = r.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(rb.Vq)
                                            .map((e) => [e.id, (0, ok.t)(e)])
                                            .filter(rb.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return E.has(t.id);
                                            }),
                                    ),
                                [E, u],
                            )),
                            (m = r.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: m, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: T } =
                                ((p = (0, A.cf)([oF.A], () =>
                                    Object.fromEntries(j.map((e) => [e, oF.A.getUserIdentities(e)]).filter(rb.QE)),
                                )),
                                (g = (0, A.bG)([oF.A], () =>
                                    j.some((e) => oF.A.getFetchState(e) === oF.e.NOT_FETCHED || oF.A.isFetchingUser(e)),
                                )),
                                r.useEffect(() => {
                                    j.length > 0 && oG.P.fetchMany(...j.map((e) => [e]));
                                }, [j]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: v } =
                                ((f = (0, A.cf)([aM.A], () =>
                                    Object.fromEntries(j.map((e) => [e, aM.A.getUserProfile(e) ?? null]).filter(rb.QE)),
                                )),
                                (x = (0, A.yK)([aM.A], () =>
                                    j.filter((e) => null == aM.A.getUserProfile(e) && !aM.A.isFetchingProfile(e)),
                                )),
                                (I = (0, A.bG)([aM.A], () => j.some((e) => aM.A.isFetchingProfile(e)))),
                                r.useEffect(() => {
                                    for (let e of x) (0, oV.A)(e);
                                }, [x]),
                                { profilesByUserId: f, isLoadingProfiles: x.length > 0 || I }),
                            S = (0, A.cf)(
                                [oW.A],
                                () => Object.fromEntries([...E].map((e) => [e, oW.A.getConfig(e)]).filter(rb.QE)),
                                [E],
                            ),
                            R = C || b || T || v,
                            L = r.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oD.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = y[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[oP.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, oH.E)(e, n.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, y, S, _, N]),
                            [O, M] = r.useState(L);
                        return (
                            r.useEffect(() => {
                                R || M(L);
                            }, [R, L]),
                            O
                        );
                    })(e, n),
            }),
            [i, n],
        );
    return (0, l.jsx)(oY.Provider, { value: s, children: e.children });
}
var oX = t(900797),
    oq = t(847374),
    oK = t(320448),
    o$ = t(890856),
    oZ = t(396696),
    oQ = t(435738),
    oJ = t(38055);
let o0 = "content-inventory-feed",
    o1 = `${o0}-settings`,
    o2 = `${o0}-toggle`;
var o3 = t(569709);
function o6(e) {
    return !e.currentTarget.contains(e.target);
}
let o9 = r.memo(function (e) {
        let n,
            { title: i, onToggleExpand: s, expanded: o, expandedCount: d } = e,
            u = (0, A.bG)([oQ.A], () => oQ.A.hidden),
            h = (0, c.omit)((0, y.rm)(o1), ["role", "tabIndex"]),
            m = (0, c.omit)((0, y.rm)(o2), ["role", "tabIndex"]),
            p = u || d > 3,
            g = r.useCallback((e) => {
                o6(e) ||
                    (0, C.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: C.Z_ });
                    });
            }, []),
            f = r.useCallback(
                (e) => {
                    if (!o6(e)) return u ? (0, oZ.Il)() : s();
                },
                [u, s],
            ),
            x = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(oJ.A, { ...h }),
                    (0, l.jsx)("span", { className: o3.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(oX.ChevronSmallUpIcon, { className: o3.wT })
                              : o
                                ? (0, l.jsx)(oq.ChevronSmallDownIcon, { className: o3.wT })
                                : (0, l.jsx)(oK.ChevronSmallRightIcon, { className: o3.wT })),
                          (0, l.jsx)("span", { className: o3.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o$.s, {
                      ...m,
                      className: a()(o3.N1, { [o3.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: f,
                      onContextMenu: g,
                      children: x,
                  })
                : (0, l.jsx)("div", { className: o3.N1, onContextMenu: g, children: x }),
        });
    }),
    o7 = function () {
        return null;
    };
var o8 = t(963307),
    o5 = t(424994);
let o4 = et.default.track;
function de(e, n) {
    o4(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: o5.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var dn = t(468581),
    dt = t(808666),
    di = t(414499),
    dl = t(323384),
    dr = t(55730),
    ds = t(765379),
    da = t(359549),
    dd = t(284525),
    dc = t(212613),
    du = t(583846),
    dh = t(506326);
t(333007);
var dA = t(646514),
    dm = t(342952),
    dp = t(315710),
    dg = t(276293),
    df = t(935063),
    dx = t(778712),
    dI = t(696986),
    dE = t(97808),
    dC = t(738188),
    dy = t(983851),
    dj = t(31300),
    db = t(308528),
    d_ = t(401843),
    dT = t(375499),
    dN = t(429433),
    dv = t(324688);
let dS = (0, ov.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dR(e) {
    let {
            placeholder: n,
            onEnter: t,
            setEditorRef: i,
            showEmojiButton: s = !1,
            renderAttachButton: o,
            autoFocus: d = !0,
            onFocus: c,
            channel: u,
            className: h,
        } = e,
        [A, m] = r.useState(""),
        [p, g] = r.useState((0, rq.x7)("")),
        f = n8.oU.ATOMIC_REACTOR_REPLY_INPUT,
        x = r.useRef(null);
    return (0, l.jsx)(rK.Ay, {
        ref: x,
        placeholder: n,
        editorClassName: h,
        className: a()(dv.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dS,
        onChange: (e, n, t) => {
            (m(n), g(t));
        },
        type: s ? { ...f, emojis: { button: !0 } } : f,
        textValue: A,
        richValue: p,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (t(n), m(""), g((0, rq.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
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
function dL(e) {
    var n;
    let { onSelectEmoji: t, onClick: i } = e,
        s = (0, sw.Ay)(),
        [a, o] = r.useState(!1),
        d = r.useRef(null),
        c = r.useRef(null);
    return (
        (n = () => o(!1)),
        r.useEffect(() => {
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
        (0, l.jsx)(nw.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(x.N, {
                    theme: s,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, l.jsx)(dN.C, {
                                messageId: "",
                                channel: dS,
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
                        className: dv.mJ,
                        children: (0, l.jsx)(dT.A, {
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
var dO = t(402216),
    dM = t(822123),
    dP = t(409626),
    dD = t(692969),
    dk = t(711589),
    dw = t(607407),
    dU = t(832163),
    dG = t(533562),
    dF = t(805901),
    dH = t(565645);
t(863576);
var dV = t(7584);
(t(850992), t(690521));
var dB = t(806931),
    dW = t(307731),
    dY = t(866780);
function dz(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: s } = e,
        o = r.useRef(null),
        d = (0, sF.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(tE.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dF.c, {
                config: dT.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ai.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dH.A, {
                            className: a()(dY.Zg, s, { [dY.c4]: t }),
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
(dW.EmojiIntention.CHAT,
    [
        dV.Ay.getByName("thumbsup"),
        dV.Ay.getByName("eyes"),
        dV.Ay.getByName("laughing"),
        dV.Ay.getByName("watermelon"),
        dV.Ay.getByName("fork_and_knife"),
        dV.Ay.getByName("yum"),
    ].filter(rb.Vq));
var dX = t(636585),
    dq = t(543465),
    dK = t(607567),
    d$ = t(325158),
    dZ = t(20805),
    dQ = t(22869),
    dJ = t(623671),
    d0 = t(428249),
    d1 = t(327098),
    d2 = t(576757),
    d3 = t(202195),
    d6 = t(823545),
    d9 = t(345394);
let d7 = function (e) {
    let { children: n } = e,
        [t, i] = (0, af.kn)([m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [s, a] = r.useState(!1),
        o = r.useRef(null);
    r.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = r.useCallback(() => {
        i(lP.i.USER_DISMISS);
    }, [i]);
    return t !== m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lg.A, {
                      targetElementRef: o,
                      shouldShow: s,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: d9.A },
                  }),
              ],
          });
};
var d8 = t(315246),
    d5 = t(866323),
    d4 = t(994484);
let ce = (e) => {
    let { shown: n, sent: t, className: i } = e,
        r = (0, A.bG)([O.Ay], () => O.Ay.useReducedMotion),
        s = (0, d5.p)(
            n,
            {
                from: { transform: r ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: r ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, l.jsx)(l.Fragment, {
        children: s(
            (e, n) =>
                n &&
                (0, l.jsx)(ai.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(d4.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(d4.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var cn = t(381941),
    ct = t(231188);
let ci = (0, tr.Fe)({
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
                t.e(860596),
                t.e(279774),
                t.e(763945),
                t.e(261204),
                t.e(686731),
                t.e(807432),
                t.e(873532),
                t.e(590088),
                t.e(807003),
                t.e(46083),
                t.e(152133),
                t.e(747802),
                t.e(626353),
                t.e(71169),
                t.e(906470),
                t.e(736663),
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
                t.e(295507),
                t.e(332447),
                t.e(959880),
                t.e(174016),
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
                t.e(177641),
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
                t.e(649408),
                t.e(221856),
                t.e(186212),
                t.e(755936),
                t.e(316344),
                t.e(801012),
                t.e(274501),
                t.e(714496),
                t.e(692990),
                t.e(305834),
                t.e(745959),
                t.e(858529),
                t.e(481987),
                t.e(595653),
                t.e(958038),
                t.e(532039),
                t.e(719466),
                t.e(14234),
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
                t.e(250129),
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
    cl = r.createContext(void 0);
function cr(e) {
    let { children: n } = e,
        t = r.useRef(null),
        i = r.useId();
    return (
        (0, dp.tj)(t),
        (0, l.jsx)(cl.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: ct.SW,
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
    let { children: n, backgroundImgSrc: t, className: i, style: r = {} } = e,
        { primaryColor: s, secondaryColor: o } = (0, d6.A)(t);
    return (
        null != t && (r.background = `linear-gradient(45deg, ${s}, ${o})`),
        (0, l.jsx)(x.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(ct.ZK, e, i), style: r, children: n }),
        })
    );
}
function ca(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: ct.$m, children: n });
}
function co(e) {
    var n;
    let t,
        i,
        s,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: x } = e,
        [E, C] = r.useState(!1),
        [y, j] = r.useState(null),
        b = (0, A.bG)(
            [l$.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && l$.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [T, N] = r.useState(!1),
        [v, S] = r.useState(!1),
        { voiceBar: R, joinVoiceButton: L } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: s, channel: a } = (0, d3.A)(t),
                o = (0, tQ.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iY.A)(n?.id),
                c = (0, A.bG)([tS.A], () => (null != a ? tS.A.getGuild(a.guild_id) : void 0)),
                u = (0, A.yK)([dK.Ay], () => (null != a ? dK.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, A.bG)([lO.A], () => lO.A.isInChannel(a?.id)),
                m = r.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && dq.Ay.isChannelMuted(null, n),
                            i = lL.A.isBlockedOrIgnored(e.user.id);
                        if (t || i) return !0;
                    }
                    return !1;
                }, [u]);
            if (null == a || null == c) return { voiceBar: void 0, joinVoiceButton: void 0 };
            let p = null != s;
            function g(e) {
                let { children: n, text: t, hasRestrictedOrMutedVCParticipant: i } = e,
                    r = i
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)(dC.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: ct.vb,
                                  }),
                                  z.intl.string(z.t.d6DpXI),
                              ],
                          })
                        : t;
                return (0, l.jsx)(
                    eN.m,
                    {
                        "aria-label": i ? z.intl.string(z.t.d6DpXI) : (t ?? !1),
                        __unsupportedReactNodeAsText: r,
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
                            className: ct.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: m,
                                    children: (0, l.jsxs)(tE.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (I.A.updateChatOpen(a.id, !0), (0, ih.iN)(a.id), i?.(a));
                                        },
                                        className: ct.I3,
                                        children: [
                                            (0, l.jsx)(t_.Ay, {
                                                guild: c,
                                                size: t_.Ay.Sizes.SMOL,
                                                className: ct.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oK.ChevronSmallRightIcon, {
                                                size: "xxs",
                                                color: dA.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dy.VoiceNormalIcon, {
                                                size: "xs",
                                                color: dA.A.colors.TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "body-sm/medium",
                                                color: "text-default",
                                                className: ct.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dX.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dE.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: dx._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: ct.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "footnote/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(dI.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: m,
                          children: (0, l.jsx)(f.$, {
                              onClick: function () {
                                  null != a &&
                                      lq.A.handleVoiceConnect({
                                          channel: a,
                                          connected: h,
                                          needSubscriptionToAccess: d,
                                          routeDirectlyToChannel: !0,
                                      });
                              },
                              fullWidth: !0,
                              text: p ? z.intl.string(z.t.I6JG46) : z.intl.string(z.t.VJlc0S),
                              icon: p ? dj.ScreenIcon : dy.VoiceNormalIcon,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: x }),
        { embeddedActivity: O } = (0, d1.A)(h),
        M =
            ((n = O),
            (t = (0, A.bG)([tS.A], () => tS.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, A.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (s = (0, A.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tQ.Ay)(i)),
            null != n && null != t && null != i && ov.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: ct.kP,
                              children: [
                                  (0, l.jsxs)(tE.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ih.iN)(i.id),
                                      className: ct.I3,
                                      children: [
                                          (0, l.jsx)(t_.Ay, {
                                              guild: t,
                                              size: t_.Ay.Sizes.SMOL,
                                              className: ct.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oK.ChevronSmallRightIcon, {
                                              size: "xxs",
                                              color: dA.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dg.TextIcon, { size: "xs", color: dA.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "body-sm/medium",
                                              color: "text-default",
                                              className: ct.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dX.A, {
                                      guildId: t.id,
                                      users: s,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dE.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: dx._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: ct.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "footnote/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(dI.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != L && 0 === p.length ? [L] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = r.useState(!D),
        G = sP.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tQ.Ay)(o, !0),
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
                    surface_type: o5.UG.GUILD_MEMBER_LIST,
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
                let e = await db.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: o5.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: r } = e;
        (y?.focus(),
            await (0, d0.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: r,
                doNotNotifyOnError: !1,
                location: cn.Hx.CONTENT_INVENTORY_MEMBERLIST,
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
            (0, l.jsx)(ce, { sent: v, shown: T, className: ct.Jt }),
            Y ??
                (0, l.jsx)(d7, {
                    children: (0, l.jsxs)("div", {
                        className: ct.T7,
                        children: [
                            (0, l.jsx)(cd, { channel: o, onClickSuggestion: B }),
                            (0, l.jsx)(dL, { onSelectEmoji: B }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? ct.P2 : ct.VE,
                children: [
                    (0, l.jsx)(dR, {
                        placeholder: H,
                        onEnter: async function (e) {
                            let n;
                            if (((0, t$.Dr)(m.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), E))
                                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"),
                                    (n = o));
                            else {
                                let e = await db.A.openPrivateChannel({ recipientIds: c.id }),
                                    t = ew.A.getChannel(e);
                                (d()(null != t, "DM channel must be defined"), (n = t));
                            }
                            let t =
                                n.type === eo.rbe.DM
                                    ? o5.PA.DM_REACTION_MESSAGE_SENT
                                    : o5.PA.CHANNEL_REACTION_MESSAGE_SENT;
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
                        className: ct.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: V,
                                      children: (0, l.jsx)(tE.D, {
                                          className: ct.wD,
                                          onClick: X,
                                          children: E
                                              ? (0, l.jsx)(dg.TextIcon, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(df.AtIcon, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(tE.D, {
                            onClick: () => q(!1),
                            className: ct.i3,
                            children: (0, l.jsx)(t9.XSmallIcon, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: dA.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: ct.fh,
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
let cd = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, s] = r.useState(!1);
    r.useEffect(() => {
        s(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dM.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tR._O)({ id: e.id, animated: e.animated, size: 58 }) },
            );
    return (0, l.jsx)(l.Fragment, {
        children: o.map((e) => {
            let { emoji: n, url: r } = e;
            return null != r
                ? (0, l.jsx)(
                      "div",
                      {
                          children: (0, l.jsx)(eN.m, {
                              asContainer: !0,
                              text: z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              position: "top",
                              "aria-label": z.intl.formatToPlainString(z.t.kilW3l, { emojiName: n.name }),
                              shouldShow: !a && void 0,
                              children: (0, l.jsx)(dz, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: ct.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cc(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: r, onUserPopoutClosed: s } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d2.A)(i, 3),
        m = (0, A.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d3.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: ct.MH,
        children: [
            (0, l.jsxs)("div", {
                className: ct.WP,
                children: [
                    (0, l.jsx)(dm.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: dx._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: s,
                    }),
                    (0, l.jsx)(dI.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-xs/medium",
                        className: a()(ct.Xn, ct.zA),
                        children: z.intl.format(t, {
                            user0: sP.Ay.getName(o, n?.id, g[0]),
                            user1: sP.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "body-sm/medium", className: a()(ct.Mj, ct.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    dQ.A,
                                    {
                                        textClassName: a()(ct.Mj, ct.nk),
                                        text: e,
                                        user: g[0],
                                        channel: n,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                            name1Hook: (e, t) =>
                                (0, l.jsx)(
                                    dQ.A,
                                    {
                                        textClassName: a()(ct.Mj, ct.nk),
                                        text: e,
                                        user: g[1],
                                        channel: n,
                                        onPopoutClosed: s,
                                        enableDisplayNameStyles: !0,
                                    },
                                    t,
                                ),
                        }),
                    }),
                ],
            }),
            null != p && (0, l.jsx)(dO.Ay, { size: dO.Ay.Sizes.SMALL }),
            null != m && (0, l.jsx)(d8.A, { user: m, channel: n, guildId: o, entry: i, disableGameProfileLinks: r }),
        ],
    });
}
function cu(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(tE.D, { className: ct.Zw, onClick: t, children: n });
}
function ch(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: s,
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
        I = (0, dZ.zD)(x),
        E = I ? x.extra?.application_id : void 0,
        C = (0, dG.W)();
    null != C && (E = C);
    let y = (0, dD.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : E,
                source: dP.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => g?.(o5.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: j, smallImage: b } = (0, d$.nO)({
            entry: x,
            showCoverImage: m,
            trackingSource: "memberlist_content_popout",
        }),
        T = (0, A.bG)([dU.A], () => dU.A.getDetectableIdsToApplicationIds()),
        N = I ? y : void 0,
        v = r.useContext(cl);
    return (0, l.jsxs)("div", {
        className: ct.au,
        children: [
            (0, l.jsx)(cc, { disableGameProfileLinks: h, ...f, onUserPopoutClosed: p }),
            (0, l.jsxs)(cs, {
                backgroundImgSrc: j?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: ct.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: ct.Fb,
                                children: (0, l.jsx)(dJ.d, {
                                    image: j,
                                    smallImage: b,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: dJ.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: ct.iC,
                                children: [
                                    (0, l.jsx)(cu, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: v,
                                            variant: "heading-sm/medium",
                                            className: a()(ct.$2, { [ct.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cu, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: ct.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dI.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: ct.hO, children: u }),
                        ],
                    }),
                    s,
                ],
            }),
            null != E && null != T[E]
                ? (0, l.jsx)(ci, {
                      className: ct.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: f.channel?.guild_id,
                      channelId: f.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ot.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cA(e) {
    let {
            title: n,
            subtitle: t,
            badges: i,
            children: s,
            stream: a,
            onClickThumbnail: o,
            onClickTitle: d,
            onClickSubtitle: c,
            onUserPopoutClosed: u,
            trackRankingItemInteraction: h,
            ...m
        } = e,
        { actionString: p, canWatch: g } = (0, dk.K)(a),
        { entry: f } = m,
        x = (0, dZ.zD)(f),
        I = x ? f.extra?.application_id : void 0,
        E = (0, dG.W)();
    null != E && (I = E);
    let C = (0, dD.A)(
            {
                location: "ContentPopout",
                applicationId: I,
                source: dP.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => h?.(o5.PA.OPENED_GAME_PROFILE) },
        ),
        y = x ? C : void 0,
        { activity: j, activityApplication: b, fallbackApplication: T } = (0, d1.A)(f),
        { largeImage: N, smallImage: v } = (0, d$.D8)(j, b ?? T),
        { largeImage: S } = (0, d$.nO)({ entry: f, trackingSource: "memberlist_streaming_content_popout" }),
        L = (0, A.bG)([dU.A], () => dU.A.getDetectableIdsToApplicationIds()),
        O = r.useContext(cl);
    return (0, l.jsxs)("div", {
        className: ct.au,
        children: [
            (0, l.jsx)(cc, { ...m, onUserPopoutClosed: u }),
            (0, l.jsxs)(cs, {
                backgroundImgSrc: S?.src,
                className: ct.uR,
                children: [
                    (0, l.jsx)(cu, {
                        onClick: g
                            ? () => {
                                  (lE.default.selectVoiceChannel(a.channelId), (0, d_.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: ct.nh,
                            children: [
                                (0, l.jsx)(dw.A, { className: ct.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: ct.NE,
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
                        className: ct.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: ct.Fb,
                                    children: (0, l.jsx)(dJ.d, {
                                        image: N,
                                        smallImage: v,
                                        onClick: o ?? y,
                                        size: dJ.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: ct.gv,
                                children: [
                                    (0, l.jsx)(cu, {
                                        onClick: d ?? y,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-sm/semibold",
                                            className: ct.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cu, {
                                              onClick: c ?? y,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "body-sm/normal",
                                                  className: ct.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(dI.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    s,
                ],
            }),
            null != I && null != L[I]
                ? (0, l.jsx)(ci, {
                      className: ct.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: m.channel?.guild_id,
                      channelId: m.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: ot.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cm = t(299846);
let cp = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: r, disableActivityProfileLinks: s } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cm.u)(t);
    function u() {
        (0, dc.hg)(t.extra.application_id);
    }
    let { data: h } = (0, te.YY)(t.extra.application_id),
        A = (0, da.Ay)({ application: h, analyticsLocations: [M.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let m = (0, l.jsx)(dh.iT, { location: dh.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(ch, {
            channel: n,
            userDescription: (0, du.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: m,
            entry: t,
            showCoverImage: !1,
            onClickTitle: s ? void 0 : u,
            onClickSubtitle: s ? void 0 : u,
            onClickThumbnail: s ? void 0 : u,
        }),
        g = (0, dr.A)(d, eo.jUm.JOIN) || (0, ds.A)(d),
        x = g
            ? (0, l.jsx)(dd.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dt.DoorEnterIcon,
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
                      icon: di.CloudIcon,
                  }),
        E =
            null != I || s
                ? null
                : (0, l.jsx)(f.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: dl.AppsIcon,
                  }),
        C = [I, g && !s ? x : E].filter(rb.Vq);
    return (0, l.jsxs)(cr, {
        children: [
            p,
            (0, l.jsx)(ca, {
                children: (0, l.jsx)(co, {
                    onReaction: i,
                    onVoiceChannelPreview: r,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: C,
                }),
            }),
        ],
    });
};
var cg = t(322789),
    cf = t(808380),
    cx = t(687966),
    cI = t(39623),
    cE = t(960076),
    cC = t(73963),
    cy = t(613412),
    cj = t(139286);
function cb(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        r = (0, da.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cj.A)({
            name: cy.ImpressionNames.CLOUD_PLAY_CTA,
            type: cy.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            f.$,
            {
                variant: "primary",
                size: "md",
                icon: di.CloudIcon,
                text: z.intl.string(z.t["jaYS/h"]),
                onClick: function () {
                    r?.();
                },
                fullWidth: !0,
            },
            "cloud-play",
        )
    );
}
var c_ = t(607781),
    cT = t(648246),
    cN = t(308335),
    cv = t(790381),
    cS = t(266080),
    cR = t(522978),
    cL = t(417869);
function cO(e) {
    let n = (0, A.bG)([cL.A], () => cL.A.getAccounts().some((n) => n.type === e)),
        t = r.useCallback(() => {
            if (null == e) return null;
            (0, cR.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cM = t(18282);
let cP = [...cg.n, dh.Yq],
    cD = {
        [cf.Y.DESKTOP]: null,
        [cf.Y.LINUX]: null,
        [cf.Y.MACOS]: null,
        [cf.Y.ROBLOX]: null,
        [cf.Y.NINTENDO]: null,
        [cf.Y.IOS]: null,
        [cf.Y.ANDROID]: null,
        [cf.Y.XBOX]: cS.A,
        [cf.Y.PLAYSTATION]: cv.A,
    },
    ck = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: r,
                onVoiceChannelPreview: s,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: A } = (0, cm.u)(t),
            { streamPreviewUrl: m, stream: p } = (0, d3.A)(t),
            g = t.extra.platform,
            f = t.extra.application_id,
            x = null != g ? cD[g] : null,
            I = cO(g === cf.Y.XBOX ? eo.fg2.XBOX : g === cf.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: E } = (0, te.YY)(f),
            C = (0, cC.A)(f),
            { analyticsLocations: y } = (0, P.Ay)(M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            j = (0, da.JC)(E),
            b = (0, cN.o)(h?.application_id ?? A?.applicationId ?? E?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dh.mG, {
                location: null == m ? dh.N5.POPOUT : dh.N5.STREAMING_POPOUT,
                children: cP.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            T =
                null == p
                    ? (0, l.jsx)(ch, {
                          channel: n,
                          headerIcons:
                              null == x
                                  ? null
                                  : (0, l.jsx)(cM.A, { onClick: I, Icon: x, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, du.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              C.length > 0
                                  ? (0, l.jsx)(c_.A, {
                                        distributorCTAConfigs: C,
                                        applicationId: f,
                                        analyticsLocations: y,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cA, {
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
                                  ? (0, l.jsx)(c_.A, {
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
                          cb,
                          { application: E, analyticsLocation: M.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            v = [
                null == N && ((0, dr.A)(h, eo.jUm.JOIN) || (0, ds.A)(h))
                    ? (0, l.jsx)(
                          dd.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cx.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, cE.A)(h)
                    ? (0, l.jsx)(cT.A, { activity: h, size: "md", variant: "primary", icon: cI.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(rb.Vq);
        return (0, l.jsxs)(cr, {
            children: [
                T,
                (0, l.jsx)(ca, {
                    children: (0, l.jsx)(co, {
                        onReaction: r,
                        onVoiceChannelPreview: s,
                        user: d,
                        channel: n,
                        entry: t,
                        buttons: v,
                    }),
                }),
            ],
        });
    },
    cw = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cU(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: s } = (0, te.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(M.A.CLOUD_PLAY_POPOVER),
        o = (0, da.Ay)({ application: s, analyticsLocations: a }),
        d = (0, t$.HX)(m.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cw(),
        A = u === n.id,
        p = c && A ? [m.M.CLOUD_PLAY_POPOVER] : [],
        [g, f] = (0, af.kn)(p),
        x = g === m.M.CLOUD_PLAY_POPOVER;
    (r.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        r.useEffect(
            () => () => {
                x && (f(lP.i.USER_DISMISS), h(null));
            },
            [x, f, h],
        ));
    let [I, E] = r.useState(!1);
    return (
        x && !I && E(!0),
        (0, cj.A)(
            {
                name: cy.ImpressionNames.CLOUD_PLAY_CTA,
                type: cy.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !I },
            [I],
        ),
        (0, l.jsx)(lg.A, {
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
                    icon: di.CloudIcon,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (f(lP.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cG = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cU, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cF = t(363670),
    cH = t(205327),
    cV = t(52133),
    cB = t(835723),
    cW = t(172710),
    cY = t(655116),
    cz = t(763758),
    cX = t(286617),
    cq = t(533207),
    cK = t(121090),
    c$ = t(693879),
    cZ = t(809854),
    cQ = t(272984),
    cJ = t(170699);
function c0(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, cZ.e)(),
        { durationTimestamp: s, seekBarStyles: a } = r.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                r = t - e,
                s = Math.floor((Math.max(l - e, 0) / r) * 100);
            return { seekBarStyles: { width: `${s}%` }, durationTimestamp: (0, du.W6)({ start: 0 }, r) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: cJ.lu,
              children: [
                  (0, l.jsx)(c$.z, { entry: t }),
                  (0, l.jsx)("div", { className: cJ.Lt, children: (0, l.jsx)("div", { className: cJ.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: cJ.vE,
                      variant: "body-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: s,
                  }),
              ],
          });
}
function c1(e) {
    let n,
        t,
        i,
        { channel: r, entry: s, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: m, user: p } = (0, cF.u7)(s),
        g = cO(eo.fg2.SPOTIFY),
        x = (0, A.bG)(
            [cY.A, ru.default],
            () => (c?.type === oO.$.LISTENING && null != p ? (0, cX.A)(cY.A, ru.default, p, c) : void 0),
            [c, p],
            cV.A,
        );
    if (null == c || null == u) return null;
    let I = h,
        E = [];
    u.media.provider === cH.X.SPOTIFY &&
        ((t = () => {
            (0, cW.Mp)(c);
        }),
        (i = () => {
            (0, cW.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cW.Mp)(c);
        }),
        (I = (0, l.jsx)(cz.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: ct.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cW.mN)(c, p.id, e);
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
                        icon: cB.UserPlayIcon,
                        onClick: function () {
                            null != x && ((0, cq.A)(x, cQ.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let C = (0, l.jsx)(ch, {
        onClickThumbnail: i,
        channel: r,
        entry: s,
        headerIcons:
            u.media.provider === cH.X.SPOTIFY
                ? (0, l.jsx)(cM.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: cK.A })
                : null,
        userDescription: (0, du.JM)(s) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: m,
        onClickTitle: t,
        subtitle: I,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c0, { activity: c }),
    });
    return (0, l.jsxs)(cr, {
        children: [
            C,
            (0, l.jsx)(ca, {
                children: (0, l.jsx)(co, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: r,
                    entry: s,
                    buttons: E,
                }),
            }),
        ],
    });
}
var c2 = t(903134),
    c3 = t(56121),
    c6 = t(263577),
    c9 = t(868065),
    c7 = t(804779);
let c8 = [dh.Y8],
    c5 = [c3.j.WEEK],
    c4 = r.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: r } = (0, d$.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            s = (0, du.TQ)(n);
        return null != s && (0, rb.S1)(s, c5)
            ? (0, l.jsxs)(c9.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(c9.UA, {
                          children: [
                              (0, l.jsx)(c9.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(c9.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dh.mG, {
                                  location: dh.N5.CARD,
                                  children: c8.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c6.V, { src: r?.src, size: 48, className: c7.xn }),
                  ],
              })
            : null;
    });
var ue = t(210528);
let un = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: r } = e,
        { parent_title: s, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, du.TQ)(t),
        u = cO(eo.fg2.SPOTIFY);
    if (null == d || !(0, rb.S1)(c, c5)) return null;
    function h() {
        let e = cQ.M0.ALBUM,
            n = ue.A.isProtocolRegistered()
                ? cQ.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : cQ.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cr, {
        children: [
            (0, l.jsx)(ch, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = cQ.M0.ARTIST,
                        n = ue.A.isProtocolRegistered()
                            ? cQ.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : cQ.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cH.X.SPOTIFY
                        ? (0, l.jsx)(cM.A, { onClick: u, Icon: cK.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: s,
                subtitle: o,
                badges: (0, l.jsx)(dh.mG, {
                    location: dh.N5.POPOUT,
                    children: c8.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(ca, {
                children: (0, l.jsx)(co, { onReaction: i, onVoiceChannelPreview: r, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var ut = t(977001);
let ui = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: r, onVoiceChannelPreview: s } = e,
        { user: a, details: o, appName: d } = (0, cm.u)(t),
        c = (0, du.ty)(t),
        u = (0, du.TQ)(t);
    if (null == a || null == c || null == u || !(0, ut._E)(u)) return null;
    let h = null != t.extra.platform ? cD[t.extra.platform] : null;
    return (0, l.jsxs)(cr, {
        children: [
            (0, l.jsx)(ch, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cM.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dh.mG, {
                    location: dh.N5.POPOUT,
                    children: ut.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(ca, {
                children: (0, l.jsx)(co, { onReaction: r, onVoiceChannelPreview: s, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var ul = t(514243),
    ur = t(347306),
    us = t(889558),
    ua = t(998218);
let uo = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: r } = e,
        s = (0, A.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cO(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = ua.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, us.h)({ href: ua.A.format(e), trusted: !1 });
    }
    return null == s
        ? null
        : (0, l.jsxs)(cr, {
              children: [
                  (0, l.jsx)(ch, {
                      channel: n,
                      entry: t,
                      userDescription: (0, du.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cM.A, {
                          onClick: a,
                          Icon: ur.CrunchyrollNeutralIcon,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dh.mG, {
                          location: dh.N5.POPOUT,
                          children: ul.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(ca, {
                      children: (0, l.jsx)(co, {
                          onReaction: i,
                          onVoiceChannelPreview: r,
                          user: s,
                          channel: n,
                          entry: t,
                      }),
                  }),
              ],
          });
};
function ud(e) {
    return e?.type === o8.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oD.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function uc(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oD.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cg.A, { ...t, entry: n });
        case oD.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ul.A, { ...t, entry: n });
        case oD.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ut.Ay, { ...t, entry: n });
        case oD.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(c4, { ...t, entry: n });
        case oD.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cF.Ay, { ...t, entry: n });
        case oD.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(dn.A, { ...t, entry: n });
        default:
            return null;
    }
}
function uu(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oD.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cG, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function uh(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uA, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(o5.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uA(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oD.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(ck, { ...t, entry: n });
        case oD.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(uo, { ...t, entry: n });
        case oD.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ui, { ...t, entry: n });
        case oD.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(un, { ...t, entry: n });
        case oD.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c1, { ...t, entry: n });
        case oD.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cp, { ...t, entry: n });
        default:
            return null;
    }
}
let um = r.memo(function (e) {
    let { index: n, ref: i, ...s } = e,
        a = r.useRef(null),
        [o, d] = r.useState("default"),
        [c, h] = r.useState(!1),
        m = (0, y.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: f } = (0, cm.u)(s.entry);
    !(function (e) {
        let { markAsVisible: n } = r.useContext(oY);
        r.useEffect(() => n(e), [n, e]);
    })(s.entry.id);
    let x = r.useMemo(
            () => ({
                entry: s.entry,
                channelId: s.channel.id,
                guildId: s.channel.guild_id,
                requestId: s.requestId,
                richPresenceName: g ? f : void 0,
            }),
            [f, s.channel.guild_id, s.channel.id, s.entry, s.requestId, g],
        ),
        I = r.useRef(!1),
        [E, j] = r.useState(!1),
        [b, _] = r.useState(!1),
        T = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (r.useEffect(() => {
        E && T && _(!0);
    }, [E, T]),
        r.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = r.useCallback(
            (e) => {
                p &&
                    (0, C.L3)(e, async () => {
                        let { default: e } = await t.e(789346).then(t.bind(t, 949881));
                        return () => (0, l.jsx)(e, { entry: s.entry, requestId: s.requestId });
                    });
            },
            [s, p],
        ),
        v = r.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = r.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                de(e, { ...x, ...n });
            },
            [x],
        ),
        R = r.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        de(o5.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        L = r.useCallback(() => {
            ((I.current = !1),
                setTimeout(() => {
                    I.current || (j(!1), _(T));
                }, 100));
        }, [T]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(uu, { ...s, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((I.current = !0),
                        setTimeout(() => {
                            (I.current && j(!0), R(x));
                        }, 100));
                },
                onMouseLeave: L,
                children: (0, l.jsx)(nw.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(c2.J.Provider, {
                            value: L,
                            children: (0, l.jsx)(uh, {
                                closePopout: n,
                                updatePopoutPosition: v,
                                trackRankingItemInteraction: S,
                                ...s,
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
                        return (0, l.jsx)(tE.D, {
                            ...e,
                            ...m,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                E || j(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(uc, {
                                ...s,
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
var up = t(531685),
    ug = t(99066),
    uf = t(376261),
    ux = t(99753),
    uI = t(136722),
    uE = t(949744);
let uC = [],
    uy = new Set(),
    uj = new Set();
var ub = t(214693);
let u_ = new Set([
    oD.ContentInventoryEntryType.PLAYED_GAME,
    oD.ContentInventoryEntryType.WATCHED_MEDIA,
    oD.ContentInventoryEntryType.TOP_GAME,
    oD.ContentInventoryEntryType.TOP_ARTIST,
    oD.ContentInventoryEntryType.LISTENED_SESSION,
    oD.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uT = t(498642);
let uN = (0, rd.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uv = t(293860);
let uS = { cooldownDurationMs: 60 * ra.A.Millis.DAY };
function uR(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uN.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = rm(),
                i = (0, A.bG)([uT.A], () => uT.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(lj.zJ, {
        contentType: t ? m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uS,
        groupName: lP.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== m.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(rE, {
                      className: uv.K,
                      analyticsLocation: M.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uL = t(728321),
    uO = t(282006);
let uM = es.Ay.getEnableHardwareAcceleration(),
    uP = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uD = r.memo(function (e) {
        let {
                colorString: n,
                colorStrings: i,
                colorRoleName: s,
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
            _ = r.useRef(null),
            [T, N] = r.useState(!1),
            v = null != E ? new Date(E) : null,
            { analyticsLocations: S } = (0, P.Ay)(),
            R = r.useCallback(
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
                                t.e(144472),
                                t.e(700792),
                                t.e(552172),
                                t.e(529422),
                                t.e(823427),
                                t.e(307059),
                                t.e(309291),
                                t.e(343116),
                                t.e(470314),
                                t.e(557830),
                                t.e(70515),
                                t.e(404524),
                                t.e(654148),
                                t.e(666939),
                                t.e(281165),
                                t.e(184841),
                            ]).then(t.bind(t, 107632)),
                            n = lO.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
            O = r.useCallback(() => {
                let e = `@${er.Ay.getUserTag(c, { decoration: "never" })}`,
                    n = `<@${c.id}>`;
                (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: p.id }),
                    ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: n }),
                    L.A.startTyping(p.id));
            }, [c, p.id]),
            M = r.useCallback(
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
                let { onClick: t, onMouseDown: r, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uM,
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
                    colorRoleName: s,
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
                        T ? e.stopPropagation() : r?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uk = r.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: r, index: s } = e,
            a = (0, y.rm)(`${s}`),
            o = (0, A.bG)([J.A], () => J.A.isTyping(i.id, r.id)),
            d = (0, A.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, A.bG)([B.A], () => (null != n ? B.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: r, guildId: i.guild_id });
        return (0, l.jsx)(uD, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uw(e) {
    let { index: n } = e,
        t = (0, y.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uU extends r.Component {
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
            s = t[n];
        if (s?.id === o0) return (0, r.createElement)(o9, { ...s, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = s;
            return (0, l.jsx)(
                uL.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uP,
                    children: (0, r.createElement)(uO.Y, {
                        ...s,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, r.createElement)(uO.Y, { ...s, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === o8.S9.CONTENT_INVENTORY) {
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
            { channel: r } = this.props,
            s = this.getRowProps(e);
        if (null != s) {
            if (s.type === o8.S9.MEMBER && "user" in s) {
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
                } = s;
                return (0, l.jsx)(
                    uk,
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
                        channel: r,
                        guildId: r.guild_id,
                        premiumSince: p,
                        isMobileOnline: c,
                        isVROnline: u,
                        index: i,
                    },
                    `member-${s.user.id}`,
                );
            }
            if (s.type === o8.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${s.entry.id}`;
                null != s.entry.original_id && (e += `-${s.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(s.entry.id);
                return (0, l.jsx)(
                    um,
                    { ...s, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (s.type === o8.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(o7, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uw, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === o0) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? ud(t[i + 1 + l]) : n;
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
            r = Math.max(0, n - Math.max(0, l - i)),
            s = Math.floor(r / t);
        return { height: r, rowHeight: t, rowsVisible: s, y: Math.max(0, i - l) };
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
            .filter(rb.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== o8.S9.MEMBER ||
                    (e.num_users_visible++,
                    n.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != n.activities &&
                        n.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        n.activities.some((e) => e.type === oO.$.PLAYING) && e.num_users_visible_with_game_activity++),
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
            children: (r) =>
                (0, l.jsx)(rZ.V0, {
                    children: (s) =>
                        (0, l.jsx)("aside", {
                            className: a()(ec.yg, ec.ML),
                            "aria-labelledby": s,
                            children: (0, l.jsx)(sR.F, {
                                component: (0, l.jsx)(sL.A, {
                                    children: (0, l.jsx)(sR.H, {
                                        id: s,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tQ.m1)(t, ee.default, lL.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(y.PR, {
                                    children: (t) => {
                                        let { ref: s, role: o, ...d } = t;
                                        return (0, l.jsx)(
                                            v.OZ,
                                            {
                                                role: o,
                                                "aria-label": z.intl.string(z.t["9Oq93m"]),
                                                ref: (e) => {
                                                    ((this._list = e),
                                                        (this.props.listRef.current = e),
                                                        (s.current = e?.getScrollerNode() ?? null));
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
                                                ...r,
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
function uG(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(M.A.MEMBER_LIST),
        s = (0, A.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, A.cf)([o8.Ay], () => o8.Ay.getProps(n.guild_id, n.id)),
        {
            rows: d,
            groups: c,
            version: u,
            updateMaxRowSeen: h,
        } = (function (e) {
            let {
                    memberStoreProps: { groups: n, rows: t, version: i },
                    channelId: l,
                    guildId: s,
                } = e,
                [a, o] = r.useState(!1),
                {
                    requestId: d,
                    entries: c,
                    impressionCappedEntryIds: u,
                } = (function (e) {
                    var n, t;
                    let i,
                        l = (0, ub.A)({ id: o5.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, A.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            s = r.useRef(new Set()),
                            a = r.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cV.v)([...s.current], [...e]) || (s.current = e), s.current);
                            }, [n]);
                        r.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    uE.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, A.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uC;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = r.useMemo(() => {
                                if (null == i || 0 === o.length) return uy;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    uI.zy(t, Y.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return r.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: s, filteredIds: a } =
                        ((n = l = r.useMemo(() => l?.filter((e) => u_.has(e.content_type)), [l])),
                        (i = (0, A.bG)(
                            [oQ.A, ux.A],
                            () => {
                                let e = ux.A.getDebugImpressionCappingDisabled();
                                return !(0, ug.sE)("useFilterImpressionCappedContent") || e
                                    ? uj
                                    : oQ.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        r.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uj };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, du.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = s;
                    let o = (0, A.bG)([ux.A], () => ux.A.getFeedRequestId(o5.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = r.useContext(oY).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, A.bG)([oQ.A], () => oQ.A.hidden),
                m = (0, A.bG)([up.A], () => up.A.isFocused()),
                p = (0, A.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, A.bG)([tS.A], () => tS.A.getGuild(s), [s]),
                f = ((0, uf.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [x, I, E, C] = r.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !f) return [n, t, i];
                    let r = a ? c.length : 3,
                        u = c.slice(0, r);
                    e = h
                        ? [{ type: o8.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: o8.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let A = {
                        id: o0,
                        type: o8.S9.CONTENT_INVENTORY_GROUP,
                        key: o0,
                        count: e.length,
                        index: t.length,
                        title: z.intl.string(z.t["6gwSFY"]),
                        onToggleExpand: function () {
                            o((e) => {
                                let n = !e;
                                return (
                                    et.default.track(eo.HAw.MEMBERLIST_CONTENT_FEED_TOGGLED, {
                                        channel_id: l,
                                        guild_id: s,
                                        expanded: n,
                                    }),
                                    n
                                );
                            });
                        },
                        expanded: a,
                        expandedCount: c.length,
                        feedHeight: e.map(ud).reduce((e, n) => e + n, 0),
                    };
                    return [[A, ...n], [...t, A, ...e], Math.random(), e];
                }, [l, c, a, n, s, d, t, i, h, f]),
                y = r.useRef(0),
                j = r.useRef(c),
                b = r.useRef(void 0),
                _ = r.useRef({ impressionCappedEntryIds: u }),
                T = r.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(C?.length ?? 0, n);
                        y.current = Math.max(y.current, t);
                    },
                    [C],
                );
            return (
                r.useEffect(() => {
                    j.current = c;
                }, [c]),
                r.useEffect(() => {
                    _.current = { impressionCappedEntryIds: u };
                }, [u]),
                r.useEffect(
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
                                (o4(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: o5.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: s,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, ug.sE)("useInjectContentInventoryFeed") &&
                                    eq.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, s, h, m, f],
                ),
                { groups: x, rows: I, version: E, updateMaxRowSeen: T }
            );
        })({ memberStoreProps: o, channelId: n.id, guildId: n.guild_id }),
        m = r.useRef(null),
        p = r.useRef(null);
    r.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oM.W)("lg") + (0, oM.W)("xxs"),
        f = r.useCallback(
            (e, n) => {
                let t = m.current;
                if (null == t) return;
                let i = n === o1 || n === o2 ? 0 : parseInt(n, 10),
                    [l, r] = t.getSectionRowFromIndex(i);
                t.scrollToIndex({
                    section: l,
                    row: r,
                    padding: 42 * (0 === l && 0 === r),
                    callback: () => {
                        requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                    },
                });
            },
            [42],
        ),
        x = r.useCallback(
            () =>
                new Promise((e) => {
                    let n = m.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = r.useCallback(
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
        E = (0, j.Ay)({ id: `members-${n.id}`, setFocus: f, isEnabled: s, scrollToStart: x, scrollToEnd: I });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uR, { guildId: n.guild_id }),
                (0, l.jsx)(y.hD, {
                    navigator: E,
                    children: (0, l.jsx)(uU, {
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
function uF(e) {
    let { channel: n, className: t } = e,
        i = r.useDeferredValue(n);
    return r.useMemo(() => (0, l.jsx)(oz, { children: (0, l.jsx)(uG, { channel: i, className: t }) }), [i, t]);
}
var uH = t(888904);
let uV = () => (
    r.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uH.kL,
        children: [
            (0, l.jsxs)(lp.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(r.Fragment, {}),
                children: [
                    (0, l.jsx)(lp.A.Icon, { icon: dg.TextIcon, "aria-hidden": !0 }),
                    (0, l.jsx)(lp.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uH.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uH.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uH.fh,
                        variant: "body-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uB = t(909735),
    uW = t(205375),
    uY = t(108926),
    uz = t(746080),
    uX = t(516607),
    uq = t(999900);
function uK() {
    return (0, l.jsx)("div", { className: uq.wG, children: (0, l.jsx)(g.y, {}) });
}
let u$ = (0, tr.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(229511),
                t.e(599660),
                t.e(452880),
                t.e(726399),
                t.e(500194),
                t.e(207309),
                t.e(626501),
                t.e(302800),
                t.e(666140),
                t.e(583518),
                t.e(704374),
                t.e(777848),
                t.e(689160),
                t.e(846066),
                t.e(714573),
                t.e(218911),
                t.e(421225),
                t.e(943351),
            ]).then(t.bind(t, 745431)),
        webpackId: 745431,
        renderLoader: uK,
        name: "ForumChannel",
    }),
    uZ = (0, tr.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(770583),
                t.e(43853),
                t.e(578090),
                t.e(154168),
                t.e(979585),
                t.e(357718),
                t.e(989677),
            ]).then(t.bind(t, 98492)),
        webpackId: 98492,
        renderLoader: uK,
        name: "AppChannel",
    });
function uQ() {
    return Promise.all([
        t.e(991625),
        t.e(426965),
        t.e(256172),
        t.e(859821),
        t.e(113561),
        t.e(368991),
        t.e(688508),
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
        t.e(998392),
        t.e(703540),
        t.e(718878),
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
        t.e(972638),
        t.e(389684),
        t.e(45646),
        t.e(967493),
        t.e(93372),
        t.e(459397),
        t.e(847810),
        t.e(249727),
        t.e(784573),
        t.e(918024),
        t.e(700792),
        t.e(552172),
        t.e(309291),
        t.e(144179),
        t.e(246969),
        t.e(880672),
        t.e(437961),
        t.e(999873),
        t.e(557830),
        t.e(829260),
        t.e(504098),
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
        t.e(14020),
        t.e(587732),
        t.e(420577),
        t.e(40811),
        t.e(258568),
        t.e(578090),
        t.e(360536),
        t.e(704374),
        t.e(986300),
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
        t.e(45916),
        t.e(726223),
        t.e(979585),
        t.e(678827),
        t.e(606913),
        t.e(314117),
        t.e(291553),
        t.e(277749),
        t.e(61924),
        t.e(105064),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(736793),
        t.e(83888),
        t.e(357718),
        t.e(276293),
        t.e(676510),
        t.e(586546),
        t.e(431692),
        t.e(613637),
        t.e(792461),
    ]).then(t.bind(t, 540462));
}
let uJ = (0, tr.Fe)({ createPromise: uQ, webpackId: 540462, name: "ChannelCall", renderLoader: uK });
function u0() {
    return Promise.all([
        t.e(770583),
        t.e(998392),
        t.e(703540),
        t.e(368991),
        t.e(256172),
        t.e(688508),
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
        t.e(700792),
        t.e(552172),
        t.e(309291),
        t.e(144179),
        t.e(246969),
        t.e(880672),
        t.e(437961),
        t.e(999873),
        t.e(829260),
        t.e(504098),
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
        t.e(258568),
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
        t.e(105064),
        t.e(215980),
        t.e(842492),
        t.e(230761),
        t.e(975076),
        t.e(564001),
        t.e(949239),
    ]).then(t.bind(t, 482877));
}
let u1 = (0, tr.Fe)({ createPromise: u0, webpackId: 482877, name: "StageChannelCall", renderLoader: uK }),
    u2 = (0, tr.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(603977),
                t.e(527552),
                t.e(769266),
                t.e(193845),
                t.e(781202),
                t.e(583518),
                t.e(428235),
                t.e(966016),
                t.e(462984),
                t.e(369501),
                t.e(671367),
                t.e(138728),
                t.e(220803),
                t.e(79171),
                t.e(417664),
                t.e(662368),
            ]).then(t.bind(t, 252715)),
        webpackId: 252715,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(rM, {});
        },
    }),
    u3 = (0, tr.Fe)({
        createPromise: () =>
            Promise.all([
                t.e(577154),
                t.e(424216),
                t.e(877730),
                t.e(611899),
                t.e(603977),
                t.e(527552),
                t.e(769266),
                t.e(487873),
                t.e(765626),
                t.e(683302),
                t.e(728136),
                t.e(428235),
                t.e(966016),
                t.e(507775),
                t.e(462984),
                t.e(369501),
                t.e(218489),
                t.e(636002),
                t.e(138728),
                t.e(466913),
                t.e(71719),
                t.e(213848),
            ]).then(t.bind(t, 956972)),
        webpackId: 956972,
        name: "GuildMemberModViewSidebar",
    }),
    u6 = (0, tr.Fe)({
        createPromise: () =>
            Promise.all([t.e(276604), t.e(781202), t.e(269178), t.e(51919), t.e(53923), t.e(90445)]).then(
                t.bind(t, 839964),
            ),
        webpackId: 839964,
        name: "FriendsSidebar",
    });
function u9(e) {
    let { channel: n, guild: t, showTopic: i } = e,
        r = (0, l4.ZF)(n, "channel_header_label");
    return (0, l.jsxs)(l.Fragment, {
        children: [r ? (0, l.jsx)(l4.yw, { channel: n }) : null, i ? (0, t0.EP)(n, t, r ? "bar" : "dot") : null],
    });
}
class u7 extends r.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        ((0, sS.d0)("guild_channel"), this.maybePreloadChannelCall());
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
        return null != e && ((0, ov.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? uQ()
            : e === eo.rbe.GUILD_STAGE_VOICE && u0();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ih.iN)(e.id);
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
            (0, nz.openUserProfileModal)({
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
                    t.e(576432),
                    t.e(797558),
                    t.e(491001),
                    t.e(451162),
                    t.e(576665),
                    t.e(245996),
                    t.e(700792),
                    t.e(965789),
                    t.e(552172),
                    t.e(529422),
                    t.e(823427),
                    t.e(307059),
                    t.e(309291),
                    t.e(150773),
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
        return e?.hasFlag(uz.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iB.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(n5.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dB.lp.STREAM
            ? null
            : (0, l.jsx)(
                  iH.A,
                  { size: dO.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: n,
            isLurking: t,
            showCall: i,
            showActivityPanel: r,
            showFramePanel: s,
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
                    o.push((0, l.jsx)(lw, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i8.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lU.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(n_, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(l2, { channel: e, showCallOrActivityPanel: i || r || s }, "profile")),
                    o.push((0, l.jsx)(lX, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lw, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i8.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lU.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(nv, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(iy, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(sf.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(lZ, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iv, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i8.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(nv, { channelId: e.id }, "members")),
                    null != n && (0, eI.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(sy, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(sf.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i8.A, { channel: e }, "pins")),
                    (0, tl.PD)(e.guild_id, "channel_header") && o.push((0, l.jsx)(i7, {}, "conversations")),
                    o.push((0, l.jsx)(nv, { channelId: e.id }, "members")),
                    (0, eI.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(ti, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(sf.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(nS.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i8.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(nv, { channelId: e.id }, "members")));
                    break;
                }
                o.push((0, l.jsx)(n1, { channel: e, isLurking: t }, "app-channel-actions"));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lm, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lc, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(nS.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(nv, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(nv, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(nv, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(nv, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(nv, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: uq.u8,
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
            guildId: r,
            showActivityPanel: s,
            showFramePanel: o,
            hasVideo: c,
            showHeaderGuildBreadcrumb: u,
            isAppChannelChatExpanded: h,
        } = this.props;
        (d()(null != e, "Missing channel in Channel.renderHeaderBar"),
            d()(null != n, "Should not be null if channel is not null."));
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, ih.iN)(e.id) : void 0,
            m = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = s || o,
            I = p || g;
        return (0, l.jsxs)("div", {
            className: uq.SC,
            children: [
                (0, l.jsx)(x.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (s) =>
                        (0, l.jsxs)(
                            lp.A,
                            {
                                guildId: r,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uq.DD, s, { [uq.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: I,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(t0.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, t0.zF)({
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
                                              className: uq.u8,
                                              children: (0, l.jsx)(ns, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: uq.u8,
                                                children: (0, l.jsx)(f.$, {
                                                    onClick: () => (0, nr.uh)(e.guild_id, e.id),
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
                (0, l.jsx)(rR.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(u1, { channel: e, popoutType: n7.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    uJ,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: n7.N.NO_POPOUT,
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
            spoilerGatingChannelId: r,
            showCall: s,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderChat"), t))
            return (d()(null != n, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, l.jsx)(i$, { guildId: n.id })
                : (0, l.jsx)(iW.H, { guildId: n.id, children: (0, l.jsx)(i3, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(o_.A, { guild: n, channelId: e.id });
        if (null != r) return (0, l.jsx)(t2.A, { guild: n, channelId: r });
        if (e.isGuildVocal() || (e.isVocalThread() && s)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tK, { channel: e, guild: n })
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
            ? (0, l.jsx)(tJ.A, { channel: e, guild: n, chatInputType: n8.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(uZ, { channel: e }, e.id);
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: n,
            guild: t,
            needSubscriptionToAccess: i,
            section: r,
            showCall: s,
            showActivityPanel: a,
            showFramePanel: o,
        } = this.props;
        if ((d()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || i));
        else if (r === eo.YvQ.PROFILE && e.isPrivate() && !s && !a && !o)
            return (0, l.jsx)(ob, { channel: e }, `private-channel-profile-${e.id}`);
        else if (r === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(rS, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uF, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uF, { channel: n }, `channel-members-${n.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(ep, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (r === eo.YvQ.SEARCH) return (0, l.jsx)(u2, { guildId: t?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: n,
            hasModalOpen: i,
            showWelcomeModal: r,
            isLurking: s,
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
                        { onCloseCallback: () => iV(l7.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                r &&
                    (0, p.mM)(
                        async () => {
                            let { default: e } = await Promise.all([t.e(99643), t.e(217388)]).then(t.bind(t, 538471));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, oT.ry)(n, s), modalKey: "Guild Welcome Screen Modal" },
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
                guildSidebarState: r,
                width: s,
                channelIsContentGated: a,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == r && null == i) return null;
        if (t === eo.YvQ.SIDEBAR_CHAT && null != i) {
            if (a || null != o) return null;
            switch (i.type) {
                case rD.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(sc, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case rD.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(sv, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case rD.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? ik : sv;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(uY.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case rD.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != r && null == e)
            if (r.type !== rD.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = r.details;
                return (0, l.jsx)("div", {
                    style: { width: 480 },
                    className: uq.uC,
                    children: (0, l.jsx)(u3, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => rP.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = s - 240 - (n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450);
        return (
            (d += 375),
            (0, l.jsx)(oL.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? oL.X.PostSidebar : oL.X.ThreadSidebar,
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
                layout: r,
                section: s,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
                friendsSidebarExperimentEnabled: u,
                canShowFriendsSidebar: h,
                friendsSidebarAppBarToggleEnabled: A,
                friendsSidebarCollapsed: m,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            f = h && r !== eo.DUB.FULL_SCREEN && (!A || !m),
            x = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uV, {});
        if (null == e) return (0, l.jsx)(uW.A, { channelId: this.props.channelId });
        let I = s === eo.YvQ.SIDEBAR_CHAT,
            E = (0, uB.UN)("Channel"),
            C = null != d && !I,
            y =
                ((0, ov.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            j = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !x,
                        className: a()(uq.TE, {
                            [uq.js]: (I && !E) || C,
                            [uq.Rs]: I ? !E || g : C || f,
                            [uq.jl]: I && g,
                        }),
                        children: [
                            y
                                ? (0, l.jsx)(ef.A, {
                                      style: { right: I ? p : void 0 },
                                      className: uq.x4,
                                      channel: e,
                                      draftType: iM.C.ChannelMessage,
                                  })
                                : null,
                            x || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uq.Qs, { [uq.Oo]: r === eo.DUB.NO_CHAT }),
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
                u ? (0, l.jsx)("div", { className: uq.zP, children: b }) : b,
                f && (0, l.jsx)(u6, {}),
            ],
        });
    }
}
let u8 = (0, ex.A)(u7),
    u5 = r.memo(function (e) {
        var n, t, i;
        let s,
            { providedChannel: a } = e,
            [o, d] = r.useState(null),
            c = (0, A.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, A.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            f = (0, A.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            x = (0, tZ.DZ)(),
            C = (0, tZ.e4)(f),
            y = (0, A.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            j = C?.parent_id,
            b = (0, A.bG)([ew.A], () => ew.A.getChannel(j), [j]),
            _ = (0, A.bG)([tS.A], () => tS.A.getGuild(C?.guild_id), [C]),
            { needSubscriptionToAccess: T } = (0, iY.A)(C?.id ?? void 0),
            N = (0, A.bG)(
                [n9.A],
                () => {
                    let e = null != c ? n9.A.getParticipants(c) : [],
                        n = null != c ? n9.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            v = (0, iF.A)(),
            S = (0, A.bG)([eU.Ay], () => (v?.channelId ?? eU.Ay.getVoiceChannelId()) === C?.id),
            R = (0, A.bG)([eC.Ay], () => (null != C ? eC.Ay.getSelfEmbeddedActivityForChannel(C.id) : null), [C]),
            L = (0, A.bG)([oR.A], () => oR.A.isConnected()),
            O = (0, eE.Ay)(L),
            M = L && !1 === O;
        r.useEffect(() => {
            S &&
                M &&
                null != R &&
                null != C &&
                I.A.selectParticipant(
                    C.id,
                    (0, n6.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [M, C, S, R]);
        let P = (0, A.bG)([eC.Ay], () => eC.Ay.getCurrentEmbeddedActivity()),
            D = (0, A.bG)([eC.Ay], () => eC.Ay.getActivityPanelMode()),
            k = null != P && !(0, eT.A)(C?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, A.cf)([lO.A], () =>
                null != C && C.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lO.A.getVoiceStatesForChannel(C.id)),
                          isUserInThisVoice: lO.A.isInChannel(C.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != C && C.isPrivate() && !k && N,
            H = C?.isGuildVocal() || F || (U && (G || !w)),
            V = (0, rw.e)(C, "channel"),
            B = (0, A.bG)([tn.A], () => {
                let e = (0, nK.ny)(tn.A.getMainFrame());
                return e?.data.layoutMode === nK.y0.FOCUSED && e.intent === nK.sV.MAIN;
            }),
            { welcomeModalChannelId: W } = (0, h.zy)(),
            Y = (0, A.bG)([nA.A], () => null != C && nA.A.isLurking(C.guild_id), [C]),
            z = (0, A.bG)([oN.A], () => oN.A.hasSeen(C?.guild_id, Y), [C, Y]),
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
                (s = (0, A.bG)([tS.A, l9, ee.default, $.Ay], () => {
                    let e = tS.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l9.hasViewedPrompt(l7.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                r.useEffect(() => {
                    null != n && null != s && (s || iV(l7.REAL_NAME_PROMPT, n));
                }, [s, n]),
                !0 === s),
            K =
                ((t = _?.id),
                (0, A.bG)([ew.A, tS.A, eU.Ay], () => {
                    let e = tS.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(W);
                    return W === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, ov.ke)(n.type);
                })),
            { section: Q, channelSidebarState: J } = (0, A.cf)(
                [nT.Ay],
                () => ({ section: nT.Ay.getSection(c, C?.isDM()), channelSidebarState: nT.Ay.getSidebarState(c) }),
                [c, C],
            ),
            en = _?.id,
            et = (0, A.bG)([nT.Ay], () => nT.Ay.getGuildSidebarState(en), [en]),
            el = (0, l5.lI)(),
            er = (0, ni.qz)() && C?.type === eo.rbe.GUILD_APP;
        ((i = C?.id),
            r.useEffect(() => {
                if (er && null != i)
                    return n2.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: r } = e;
                        return "POP" === n || (0, ni.Dw)(l) || n3.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ni.gu)(t), state: r };
                    });
            }, [i, er]));
        let es = er && J?.type === rD.PE.VIEW_CHANNEL && J.channelId === C.id,
            ea = (0, tQ.Ay)(C),
            ed = (0, tQ.Ay)(C, !0),
            ec = (0, A.bG)([n9.A], () => (null != C ? n9.A.getSelectedParticipant(C.id) : null)),
            eu = (0, nt.vL)(C),
            eh = (0, t1.Uf)(C),
            eA = null != C && g === C.id,
            em = null != C && C.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iw.A.useConfig({ location: "Channel" }),
            ef = (0, iG.c)(),
            ex = (0, A.bG)(
                [oS.A, nN.A],
                () => {
                    let e = C?.guild_id ?? nN.A.getGuildId();
                    return null != e && oS.A.isUnavailable(e);
                },
                [C],
            ),
            ey = ep && (0, iU.A)() && null != C && !ex && !C.isGuildVocal();
        (r.useEffect(() => (E.A.setFriendsSidebarAvailable(ey), () => E.A.setFriendsSidebarAvailable(!1)), [ey]),
            (function (e) {
                let { onTransition: n } = e;
                r.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, eT.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, ne.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            r = l?.guild_id;
                        setTimeout(() => {
                            ((0, nn.A)(r, t), n?.());
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
            r.useEffect(() => {
                let e = (0, nr.JK)();
                if (e?.location?.state?.stageInviteKey === uX.J2) {
                    let { channelId: n } = (0, l8.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ej = { channel: C, inCurrentVoiceChannel: eA },
            eb = r.useRef(ej);
        (r.useEffect(() => {
            eb.current = ej;
        }),
            r.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eb.current;
                null != o && null != e && em && e.id === o && !n && ((0, rk.av)(e), d(null));
            }, [o, em]));
        let eN = (0, eI.cI)(C),
            ev = null != C && C.isPrivate(),
            eS = (0, eE.Ay)(ev),
            eR = (0, eE.Ay)(C?.id);
        r.useEffect(() => {
            let e = eS && !ev,
                n = eS && ev && C?.id !== eR;
            (e || n) && (0, t$.Dr)(m.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lP.i.AUTO });
        }, [C?.id, eR, ev, eS]);
        let eL = (0, p.Rv)(),
            eO = (0, n4.a)(C);
        return (0, l.jsx)(u8, {
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
            channelSidebarState: es ? void 0 : J,
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
            showWelcomeModal: !z && K,
            showFollowButton: (C?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, A.cf)([lO.A], () => ({ hasVideo: null != C && lO.A.hasVideo(C.id) }), [C]),
            inCall: eA,
            selectedParticipant: ec,
            showChannelSummaries: eN,
            showHeaderGuildBreadcrumb: x || el,
            isAppChannelChatExpanded: er,
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
