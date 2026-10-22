(t.r(n), t.d(n, { default: () => ht }), t(321073));
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
    m = t(17928),
    A = t(554146),
    p = t(192308),
    g = t(289873),
    x = t(821609),
    f = t(43990),
    E = t(367513),
    I = t(604681),
    j = t(442433);
t(183994);
var C = t(837381),
    y = t(887129),
    b = t(607399),
    _ = t(834730),
    v = t(194261),
    N = t(312138),
    T = t(475825),
    S = t(177953),
    R = t(297264),
    M = t(414798),
    O = t(775602),
    L = t(793574),
    P = t(688810),
    D = t(449582),
    k = t(485947),
    w = t(878678),
    U = t(69282),
    G = t(657048),
    F = t(361610),
    H = t(964486),
    B = t(36124),
    V = t(317525),
    Y = t(219065),
    W = t(818348),
    z = t(105292);
let q = [];
var X = t(342296),
    K = t(616356),
    $ = t(696451),
    Q = t(290863),
    J = t(461213),
    Z = t(741961),
    ee = t(287809),
    en = t(303727),
    et = t(174459),
    ei = t(625494),
    el = t(488926),
    es = t(427262),
    er = t(19575),
    ea = t(589158),
    eo = t(652215),
    ed = t(162866),
    ec = t(4577);
let eu = er.Ay.getEnableHardwareAcceleration(),
    eh = s.memo(function (e) {
        let { channel: n, sectionId: i, userId: r, guildOwnerId: a } = e,
            o = s.useRef(null),
            d = (0, m.bG)([Z.A], () => Z.A.isTyping(n.id, r)),
            c = (0, m.bG)([$.Ay], () => $.Ay.getMember(n.guild_id, r)),
            u = (0, m.bG)(
                [V.A],
                () => (c?.colorRoleId != null ? V.A.getRole(n.guild_id, c.colorRoleId)?.name : void 0),
                [n.guild_id, c],
            ),
            h = (0, m.bG)([ee.default], () => ee.default.getUser(r)),
            A = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            p = h?.id === A?.id,
            g = (0, m.bG)([Q.A, J.A], () => (p ? J.A.getStatus() : Q.A.getStatus(r, n.guild_id))),
            x = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(r)),
            f = (0, m.yK)([Q.A, J.A], () => (p ? J.A.getActivities() : Q.A.getActivities(r, n.guild_id))),
            E = (0, m.bG)([K.A], () => K.A.getAnyStreamForUser(r)),
            I = (0, C.rm)(r),
            y = (0, m.bG)([Y.A], () => Y.A.canUserViewChannel(n.id, i, r)),
            _ = h?.id != null && h.id === a,
            v = s.useCallback(
                (e) => {
                    null != h &&
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("893190"),
                                t.e("146652"),
                                t.e("882073"),
                                t.e("691994"),
                                t.e("576665"),
                                t.e("624198"),
                                t.e("823427"),
                                t.e("343116"),
                                t.e("70515"),
                                t.e("666939"),
                                t.e("424966"),
                            ]).then(t.bind(t, 175269));
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
                    M.A.startTyping(n.id));
            }, [h, n]),
            T = s.useCallback(
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
        let L = c?.premiumSince;
        return (0, l.jsx)(X.A, {
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
                    onContextMenu: v,
                    shouldAnimateStatus: eu,
                    user: h,
                    currentUser: A,
                    nick: c?.nick,
                    status: g,
                    activities: f,
                    colorString: c?.colorString,
                    colorStrings: c?.colorStrings,
                    colorRoleName: u,
                    isTyping: d,
                    channel: n,
                    guildId: n.guild_id,
                    isMobile: x,
                    selected: R,
                    applicationStream: E,
                    premiumSince: null == L ? null : new Date(L),
                    onClickPremiumGuildIcon: T,
                    itemProps: I,
                    lostPermissionTooltipText: y ? void 0 : z.intl.string(z.t["/QcoTz"]),
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
    em = s.memo(function (e) {
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
    eA = s.memo(function (e) {
        let { channel: n } = e;
        return n.type === eo.rbe.PRIVATE_THREAD
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)("div", { className: ed.yF }),
                      (0, l.jsxs)(_.E, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: ed.Uz,
                          children: [
                              (0, l.jsx)(v.LockIcon, { size: "xxs", color: "currentColor" }),
                              "\xa0",
                              z.intl.string(z.t.BTLTAs),
                          ],
                      }),
                      (0, l.jsx)(_.E, {
                          variant: "text-sm/normal",
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
        A = `members-${c.id}`,
        { analyticsLocations: p } = (0, P.Ay)(L.A.MEMBER_LIST),
        g = (function (e, n) {
            (0, H.Ay)(() => {
                n?.id != null && (0, F.Ey)(n.id, e, B.LD);
            });
            let t = (0, m.bG)([V.A], () => (null != n ? V.A.getSortedRoles(n.id) : [])),
                { version: i, members: l } = (0, m.cf)([Y.A], () => ({
                    version: Y.A.getMemberListVersion(e),
                    members: Y.A.getMemberListSections(e),
                })),
                r = null == n,
                a = s.useMemo(() => {
                    if (r) return q;
                    let e = t.filter((e) => e.hoist).map((e) => ({ id: e.id, label: e.name }));
                    return (
                        e.push(
                            { id: W.cl.ONLINE, label: z.intl.string(z.t.WbGtnH) },
                            { id: W.cl.OFFLINE, label: z.intl.string(z.t.Vv0abJ) },
                        ),
                        e.map((e) => {
                            let { id: n, label: t } = e;
                            return { label: t, userIds: l?.[n]?.userIds ?? [], id: n, roleId: n };
                        })
                    );
                }, [t, l, i, r]);
            return null != l ? a : q;
        })(c.id, h),
        x = g.filter((e) => e.userIds.length > 0).reverse()[0],
        { navigator: f, listRef: E } =
            ((n = A),
            (t = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled)),
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
                navigator: (0, y.Ay)({ id: n, setFocus: r, isEnabled: t, scrollToStart: o, scrollToEnd: d }),
                listRef: i,
            }),
        I = 0 === g.length || g.every((e) => 0 === e.userIds.length);
    if (
        (s.useEffect(() => {
            et.default.track(eo.HAw.MEMBER_LIST_VIEWED, {
                channel_id: c.id,
                channel_type: c.type,
                guild_id: c.guild_id,
            });
        }, [c.guild_id, c.id, c.type]),
        I)
    )
        return (0, l.jsx)(eg, { channel: c });
    let j = u().omit(f.containerProps, ["ref"]),
        b = el.wT(h);
    return (0, l.jsx)(P.f5, {
        value: p,
        children: (0, l.jsx)(C.hD, {
            navigator: f,
            children: (0, l.jsx)(N.sk, {
                children: (e) =>
                    (0, l.jsx)("div", {
                        className: a()(ec.yg, ec.ML, ed.kL),
                        children: (0, l.jsx)(
                            T.OZ,
                            {
                                ref: E,
                                className: ec.ol,
                                paddingTop: 0,
                                sectionHeight: 42,
                                renderSection: (e) => {
                                    let { section: n } = e,
                                        t = g[n];
                                    return (0, l.jsx)(
                                        em,
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
                                footerHeight: (e) => 80 * (g[e] === x && c.type === eo.rbe.PRIVATE_THREAD),
                                renderFooter: (e) =>
                                    g[e.section] === x ? (0, l.jsx)(eA, { channel: c }, "footer") : null,
                                innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                                innerTag: "ul",
                                sections: g.map((e) => e.userIds.length),
                                fade: !0,
                                ...j,
                                ...e,
                            },
                            A,
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
                variant: "text-xs/bold",
                color: "interactive-text-default",
                children: z.intl.string(z.t["9Oq93m"]),
            }),
            (0, l.jsxs)("div", {
                className: ed.hs,
                children: [
                    (0, l.jsx)("div", {
                        className: ed.AI,
                        children: (0, l.jsx)(S.n, { size: "lg", color: "currentColor" }),
                    }),
                    (0, l.jsx)(en.A, { className: ed.WA }),
                ],
            }),
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                children: n.isForumPost() ? z.intl.string(z.t.p0UgNQ) : z.intl.string(z.t["9/n5vz"]),
            }),
            (0, l.jsx)(_.E, {
                className: ed.WO,
                variant: "text-sm/normal",
                color: "text-default",
                children: z.intl.string(z.t.emw8UP),
            }),
        ],
    });
}
var ex = t(738876),
    ef = t(456412),
    eE = t(432371),
    eI = t(475743),
    ej = t(933958),
    eC = t(702841),
    ey = t(567249),
    eb = t(811024),
    e_ = t(969151),
    ev = t(108959),
    eN = t(866665),
    eT = t(446576),
    eS = t(817281),
    eR = t(666860),
    eM = t(587837),
    eO = t(850891),
    eL = t(964404),
    eP = t(204651),
    eD = t(383831),
    ek = t(128286),
    ew = t(734057),
    eU = t(309010),
    eG = t(795816),
    eF = t(685399),
    eH = t(216418),
    eB = t(620148),
    eV = t(732637),
    eY = t(104171),
    eW = t(47294),
    ez = t(594007),
    eq = t(16961),
    eX = t(138017),
    eK = t(715482),
    e$ = t(315502),
    eQ = t(573163),
    eJ = t(234320),
    eZ = t(5867),
    e0 = t(248310);
function e1(e) {
    let { channelId: n, className: t, ...i } = e,
        r = s.useRef(null),
        a = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout() === eZ.E8.RESIZABLE),
        o = s.useCallback(() => {
            let e = a ? eZ.E8.NO_CHAT : eZ.E8.RESIZABLE;
            (0, eG.i5)(e);
        }, [a]),
        { unreadCount: d, mentionCount: u } = (function (e) {
            let n = (0, m.bG)([Z.A], () => !(0, c.isEmpty)(Z.A.getTypingUsers(e)), [e]),
                { unreadCount: t, mentionCount: i } = (0, m.cf)(
                    [eQ.Ay],
                    () => ({ unreadCount: eQ.Ay.getUnreadCount(e), mentionCount: eQ.Ay.getMentionCount(e) }),
                    [e],
                );
            return { unreadCount: t, mentionCount: i, isTyping: n };
        })(n),
        h = s.useCallback(() => {
            r.current?.focus();
        }, []);
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: h });
    let A = a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        p = [A];
    (u > 0 && p.push(z.intl.formatToPlainString(z.t["3l1GOx"], { mentionCount: u })),
        d > 0 && p.push(z.intl.string(z.t.x5zAGZ)));
    let g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = u > 0 ? u : d,
        f = x > 0;
    return (0, l.jsxs)("div", {
        className: e0.iE,
        children: [
            (0, l.jsx)(eP.l, {
                isTrayButton: !0,
                buttonRef: r,
                onClick: o,
                label: A,
                "aria-label": p.join(", "),
                tooltipPosition: "top",
                iconComponent: g === eZ.E8.NO_CHAT ? eX.j : eK.g,
                themeable: !0,
                className: t,
                ...i,
            }),
            f ? (0, l.jsx)(e$.A, { hasMentions: u > 0, truncatedCount: x > 99 ? "99+" : x, className: e0.qS }) : null,
        ],
    });
}
var e2 = t(538303);
let e3 = eY.DN.SIZE_32,
    e7 = { [eZ.E8.NO_CHAT]: e2.Oo, [eZ.E8.RESIZABLE]: e2.Ig };
function e5(e) {
    let { maxHeight: n, connectedLocation: t, renderExternalHeader: i } = e,
        r = (0, eB.A)(),
        o = (0, m.yK)([ej.Ay], () => ej.Ay.getEmbeddedActivitiesForLocationIncludingHidden(t), [t]),
        d = (0, e_.H)(t),
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(d)),
        u = (0, eF.IQ)(o),
        h = (0, eF.Rz)(u),
        A = s.useCallback(() => {
            (0, eG.gk)(eZ.Gd.PIP);
        }, []),
        p = s.useRef(null),
        g = (0, m.bG)([ej.Ay], () => ej.Ay.getFocusedLayout()),
        x = g !== eZ.E8.NO_CHAT,
        [E, I] = s.useState(eL.Ay.activityPanelHeight ?? n ?? null),
        j = s.useCallback((e) => {
            eS.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        C = s.useRef(null),
        [y, b] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == C.current) return;
        let e = new ResizeObserver(() => {
            b({ width: C.current?.clientWidth ?? 0, height: C.current?.clientHeight ?? 0 });
        });
        return (e.observe(C.current), () => e.disconnect());
    }, []);
    let v = y.width / Math.max(y.height, 1) < eZ.B5,
        N = 0,
        T = 0,
        S = (0, eH.A)(r?.id);
    if (!S) {
        let e = y.width,
            n = y.height;
        v
            ? ((n = y.width / eZ.B5) > y.height && (e = (n = y.height) * eZ.B5), (T = (y.height - n) / 2))
            : ((e = Math.min(y.height * eZ.B5)) > y.width && (n = (e = y.width) / eZ.B5), (N = (y.width - e) / 2));
    }
    let R = h.get(r?.id ?? ""),
        M = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
        L = (0, m.yK)(
            [$.Ay],
            () =>
                null == c
                    ? []
                    : Array.from(R?.embeddedActivity.userIds ?? []).map((e) => $.Ay.getMember(c.guild_id, e)),
            [R, c],
        ),
        P = s.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [L]),
        D = (function (e, n, t) {
            let i = (0, eI.Ay)(e),
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
        })(x, E, n),
        k = (0, eq.G)();
    if (null == r) return null;
    let w = [];
    function U(e) {
        if (null == e || void 0 === e || e === eY.mt) return null;
        let n = P.get(e.id),
            t = n?.nick ?? es.Ay.getName(e);
        return (0, l.jsx)(
            eN.m,
            {
                asContainer: !0,
                text: t,
                position: "bottom",
                children: (0, l.jsx)("img", { src: e.getAvatarURL(c?.guild_id, e3), alt: t, className: e2.my }, e.id),
            },
            e.id,
        );
    }
    return (
        null != R &&
            (w = Array.from(R.embeddedActivity.userIds)
                .map((e) => ee.default.getUser(e))
                .filter((e) => null != e && void 0 !== e)),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: a()(e2.iE, e7[g], e),
                    ref: p,
                    style: D,
                    children: [
                        i?.(),
                        (0, l.jsx)(eO.A, { type: "embedded-activity", applicationId: r.id }),
                        (0, l.jsxs)("div", {
                            className: e2.lq,
                            children: [
                                x
                                    ? null
                                    : (0, l.jsx)("div", {
                                          className: e2.wx,
                                          children: (0, l.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: e2.qd,
                                              children: r?.name,
                                          }),
                                      }),
                                (0, l.jsx)("div", {
                                    className: a()(e2.ht, { [e2.kK]: S }),
                                    style: { paddingLeft: N, paddingRight: N, paddingTop: T, paddingBottom: T },
                                    ref: C,
                                    children: (0, l.jsx)(eV.A, { className: e2.pU, embedId: (0, ez.A)(t.id, r.id) }),
                                }),
                                null != M
                                    ? (0, l.jsxs)("div", {
                                          className: e2.qr,
                                          children: [
                                              (0, l.jsx)(eY.Ay, {
                                                  renderIcon: !1,
                                                  users: w,
                                                  size: e3,
                                                  max: 6,
                                                  renderUser: U,
                                              }),
                                              (0, l.jsxs)("div", {
                                                  className: e2.Hq,
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: e2.qi,
                                                          children: [
                                                              (0, l.jsx)(e1, { channelId: M }),
                                                              (0, l.jsx)(eP.l, {
                                                                  isTrayButton: !0,
                                                                  label: z.intl.string(z.t.brPQ5U),
                                                                  onClick: A,
                                                                  iconComponent: eT.g,
                                                                  themeable: !0,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: e2.pt,
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
                                                                (0, eW.A)({
                                                                    onConfirm: async () => {
                                                                        (r?.id != null &&
                                                                            null != d &&
                                                                            (await (0, eG.od)(r.id, d)),
                                                                            (0, eG.jp)());
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
                        x && null != n
                            ? (0, l.jsx)(eM.A, {
                                  minHeight: 480,
                                  maxHeight: n,
                                  resizableNode: p,
                                  onResize: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), I(e));
                                  },
                                  onResizeEnd: (e) => {
                                      (ei._.dispatch(eo.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), j(e));
                                  },
                              })
                            : null,
                    ],
                }),
        })
    );
}
function e6(e) {
    let { maxHeight: n, renderExternalHeader: t } = e,
        {
            connectedChannelId: i,
            connectedActivity: s,
            activityPanelMode: r,
        } = (0, eC.cf)([ej.Ay], () => {
            let e = ej.Ay.getConnectedActivityLocation(),
                n = ej.Ay.getSelfEmbeddedActivityForLocation(e);
            return {
                connectedChannelId: (0, e_.H)(e),
                connectedActivity: n,
                activityPanelMode: ej.Ay.getActivityPanelMode(),
            };
        }),
        a = (0, eC.bG)([ey.A], () => ey.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT));
    if (!(0, eb.Gp)(i)) return null;
    let o = s?.applicationId;
    return r !== eZ.Gd.PANEL || null == o || a || null == i || null == s || (0, ev.A)(i)
        ? null
        : (0, l.jsx)(e5, { maxHeight: n, connectedLocation: s.location, renderExternalHeader: t });
}
var e9 = t(90804),
    e8 = t(748975),
    e4 = t(323073),
    ne = t(964167),
    nn = t(483510),
    nt = t(976860);
function ni(e) {
    let { channel: n } = e;
    return (0, l.jsx)(x.$, {
        onClick: function () {
            let e = n.getGuildId();
            (ei._.dispatch(eo.jej.SEARCH_RESULTS_CLOSE), (0, nt.pX)(eo.BVt.CHANNEL(e, n.id)), (0, nn.ci)(e, n.id));
        },
        variant: "secondary",
        size: "sm",
        text: z.intl.string(z.t.vLgj1J),
    });
}
var nl = t(991690),
    ns = t(621466),
    nr = t(453903),
    na = t(477782),
    no = t(729475),
    nd = t(265872),
    nc = t(980707),
    nu = t(663417),
    nh = t(70688),
    nm = t(885574),
    nA = t(365199),
    np = t(146337),
    ng = t(316768),
    nx = t(625180),
    nf = t(91242),
    nE = t(545691),
    nI = t(672929),
    nj = t(156548),
    nC = t(58736),
    ny = t(869146),
    nb = t(402860),
    n_ = t(475815),
    nv = t(615606),
    nN = t(165610);
function nT(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null),
        a = (0, np.A)(n, "app_channel_header"),
        o = (0, nv.q)(n)?.bot,
        d = s.useMemo(
            () => ({ type: nl.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        c = (0, nI.A)(n.application_id ?? null, d),
        u = (0, nN.x1)(c) && c.data.proxyTicketRefreshing,
        h = (0, ng.A)(n, "AppChannelHeaderOverflowMenu", { includeSettings: !1 }),
        A = (0, m.bG)(
            [ny.A, nf.A],
            () => null != c && ny.A.getWindowOpen(eo.MLl.ACTIVITY_POPOUT) && nf.A.getMainFrame()?.id === c.id,
            [c],
        ),
        p = s.useCallback(() => {
            null == c || u || nx.A.refreshProxyTicket(c.id);
        }, [c, u]),
        g = z.intl.string(z.t["UKOtz+"]),
        x = (0, nN.x1)(c);
    return x || null != o || null != a || 0 !== h.length
        ? (0, l.jsx)(nd.Y, {
              targetElementRef: r,
              shouldShow: t,
              animation: nd.Y.Animation.NONE,
              position: "bottom",
              align: "right",
              autoInvert: !1,
              onRequestClose: (e, n) => {
                  if ("user:escape" === n && (0, ns.vq)(document.activeElement, HTMLIFrameElement)) return nr.oU;
                  i(!1);
              },
              renderPopout: (e) => {
                  let t,
                      { closePopout: i } = e;
                  return (0, l.jsxs)(nc.W, {
                      "data-menu-migrated": !0,
                      navId: "app-channel-header-overflow",
                      onClose: i,
                      onSelect: i,
                      "aria-label": z.intl.string(z.t.Xm41aV),
                      children: [
                          x
                              ? (0, l.jsxs)(na.rX, {
                                    children: [
                                        null != (t = (0, nN.x1)(c) && !A ? (0, nj.fl)(c.id) : null) && (0, n_.Ub)(t)
                                            ? (0, l.jsx)(na.Dr, {
                                                  id: "full-screen-app",
                                                  label: z.intl.string(z.t.OIDkcp),
                                                  icon: no.T,
                                                  leadingAccessory: { type: "icon", icon: no.T },
                                                  action: () => (0, n_.tl)(t),
                                              })
                                            : null,
                                        (0, l.jsx)(na.Dr, {
                                            id: "reload-app",
                                            label: z.intl.string(z.t.kHie4V),
                                            action: p,
                                            icon: nu.RefreshIcon,
                                            leadingAccessory: { type: "icon", icon: nu.RefreshIcon },
                                            disabled: u,
                                        }),
                                        (0, l.jsx)(na.Dr, {
                                            id: "close-app",
                                            label: z.intl.string(z.t.VkMnR2),
                                            action: () => (0, nE.A)(c.id),
                                            icon: nh.DoorExitIcon,
                                            leadingAccessory: { type: "icon", icon: nh.DoorExitIcon },
                                        }),
                                    ],
                                })
                              : null,
                          h.length > 0 ? (0, l.jsx)(na.rX, { children: h }) : null,
                          null != o || null != a
                              ? (0, l.jsxs)(na.rX, {
                                    children: [
                                        null != o
                                            ? (0, l.jsx)(na.Dr, {
                                                  id: "app-info",
                                                  label: z.intl.string(z.t.Sh2z9g),
                                                  action: () =>
                                                      (0, nb.openUserProfileModal)({
                                                          userId: o.id,
                                                          guildId: n.guild_id,
                                                          channelId: n.id,
                                                      }),
                                                  leadingAccessory: { type: "icon", icon: nm.CircleInformationIcon },
                                              })
                                            : null,
                                        a,
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, n) => {
                  let { isShown: t } = n;
                  return (0, l.jsx)(nC.Ay.Icon, {
                      ...e,
                      ref: r,
                      onClick: () => i((e) => !e),
                      tooltip: t ? null : g,
                      icon: nA.MoreHorizontalIcon,
                      "aria-label": g,
                      selected: t,
                  });
              },
          })
        : null;
}
var nS = t(270593);
function nR(e) {
    let { channel: n } = e,
        t = s.useMemo(
            () => ({ type: nl.U.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }),
            [n.id, n.guild_id],
        ),
        i = (0, nI.A)(n.application_id ?? null, t);
    return (0, l.jsx)(nS.A, { frame: i });
}
var nM = t(320989);
let nO = /^\/channels\/[^/]+\/(\d+)\/\d+$/;
var nL = t(568598),
    nP = t(198052),
    nD = t(164617),
    nk = t(355622),
    nw = t(689874),
    nU = t(631828),
    nG = t(627363),
    nF = t(793480),
    nH = t(248675);
function nB(e) {
    let { channel: n } = e,
        t = (0, m.bG)([nf.A], () => nf.A.getFramesForChannel(n.id).find((e) => (0, nN.x1)(e)), [n.id]),
        i = (0, nG.YY)(t?.applicationId).data,
        s = (0, nF.m0)({ guildId: n.guild_id, location: "ConjureHostedAppCloseButton" });
    if (null == t || i?.conjureProjectId == null || !s) return null;
    let r = z.intl.string(nH.default["/TlGcK"]);
    return (0, l.jsx)(nC.Ay.Icon, {
        icon: nh.DoorExitIcon,
        tooltip: r,
        "aria-label": r,
        onClick: () => (0, nE.A)(t.id),
    });
}
var nV = t(828488),
    nY = t(939249),
    nW = t(408278),
    nz = t(624479),
    nq = t(858899),
    nX = t(534890),
    nK = t(661531),
    n$ = t(39623),
    nQ = t(952270),
    nJ = t(381849),
    nZ = t(549973),
    n0 = t(957565),
    n1 = t(935208),
    n2 = t(181041),
    n3 = t(256331),
    n7 = t(623562),
    n5 = t(403862);
let n6 = ["high", "medium", "low"],
    n9 = s.memo(function (e) {
        let { moderation: n } = e,
            t = null != n && 1 === n.status,
            i = null != n && !n.flaggedTitle && !n.flaggedSummary && !n.flaggedKeyPoints,
            r = s.useMemo(() => {
                if (null == n) return { passed: 0, failed: 0, unknown: 0 };
                let e = n.flaggedMessageCount ?? n.flaggedMessageIds.length,
                    t = n.totalMessageCount ?? 0,
                    i = 0,
                    l = 0;
                return (
                    null == n.flaggedMessageCount && 0 === n.flaggedMessageIds.length
                        ? (l = t)
                        : null != n.flaggedMessageCount
                          ? (i = Math.max(0, t - e))
                          : (l = Math.max(0, t - e)),
                    { passed: i, failed: e, unknown: l }
                );
            }, [n]),
            a =
                null == n
                    ? "unknown"
                    : r.failed > 0
                      ? "failed"
                      : r.unknown > 0
                        ? "unknown"
                        : r.passed > 0
                          ? "passed"
                          : "unknown",
            o =
                null != n
                    ? (n.flaggedSummaryDetails.find((e) => {
                          var t;
                          return (
                              e.severity ===
                              ((t = n.flaggedSummaryDetails.map((e) => e.severity)),
                              n6.find((e) => t.includes(e)) ?? null)
                          );
                      }) ?? null)
                    : null,
            d = o?.severity ?? null,
            c = o?.confidence ?? null;
        return (0, l.jsxs)("div", {
            className: n5.UO,
            children: [
                (0, l.jsx)(_.E, {
                    variant: "text-xs/semibold",
                    color: "text-default",
                    className: n5.a9,
                    children: "Moderation",
                }),
                (0, l.jsxs)("div", {
                    className: n5.so,
                    children: [
                        (0, l.jsxs)("div", {
                            className: n5.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : t ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : t ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Conversation",
                                }),
                                null != n &&
                                    !t &&
                                    null != n.statusReason &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: n.statusReason,
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n5.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: null == n ? "text-muted" : i ? "status-positive" : "text-feedback-critical",
                                    children: null == n ? "\u2014" : i ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Summary",
                                }),
                                null != n &&
                                    !i &&
                                    (0, l.jsxs)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            [
                                                n.flaggedTitle && "title",
                                                n.flaggedSummary && "summary",
                                                n.flaggedKeyPoints && "key points",
                                            ]
                                                .filter(Boolean)
                                                .join(", "),
                                            " ",
                                            "flagged",
                                        ],
                                    }),
                                null != n &&
                                    !i &&
                                    (null != d || null != c) &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [d, c].filter(Boolean).join(" \xb7 "),
                                    }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: n5.a7,
                            children: [
                                (0, l.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color:
                                        null == n || "unknown" === a
                                            ? "text-muted"
                                            : "passed" === a
                                              ? "status-positive"
                                              : "text-feedback-critical",
                                    children:
                                        null == n || "unknown" === a ? "\u2014" : "passed" === a ? "\u2713" : "\u2717",
                                }),
                                (0, l.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: "Messages",
                                }),
                                null != n &&
                                    (r.passed > 0 || r.failed > 0 || r.unknown > 0) &&
                                    (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: [
                                            r.passed > 0 && `${r.passed} passed`,
                                            r.failed > 0 && `${r.failed} failed`,
                                            r.unknown > 0 && `${r.unknown} unknown`,
                                        ]
                                            .filter(Boolean)
                                            .join(", "),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    n8 = s.memo(function (e) {
        let { conversation: n, onJump: t } = e,
            i = n1.default.extractTimestamp(n.startMessageId),
            s = n1.default.extractTimestamp(n.endMessageId),
            r = (0, nZ.e)({ timestamp: i }),
            a = Math.max(1, Math.round((s - i) / 1e3)),
            o = (0, nJ.WR)({ seconds: a, getFormatter: nJ.i }),
            d = (0, m.bG)([n2.A], () => n2.A.getConversationColor(n.channelId, n.id) ?? void 0, [n.channelId, n.id]);
        return (0, l.jsxs)(nY.D, {
            className: n5.Nm,
            style: { backgroundColor: d },
            onClick: () => t(n),
            children: [
                (0, l.jsxs)("div", {
                    className: n5.PY,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: n5.So,
                            children: n.title,
                        }),
                        (0, l.jsx)(nW.K, {
                            icon: nz.CopyIcon,
                            "aria-label": "Copy conversation JSON",
                            variant: "secondary",
                            size: "sm",
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    (0, n0.C)(JSON.stringify(n, null, 2), () =>
                                        (0, nq.P0)({ text: "Copied conversation JSON", variant: "success" }),
                                    ));
                            },
                        }),
                    ],
                }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n5.FR,
                    children: [
                        r,
                        " ago \xb7 ",
                        o,
                        " duration \xb7 ",
                        n.messageCount,
                        " messages \xb7 ",
                        n.userCount,
                        " users",
                    ],
                }),
                null != n.briefSummary &&
                    (0, l.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: n5.g5,
                        children: n.briefSummary,
                    }),
                n.keyPoints.length > 0 &&
                    (0, l.jsx)("ul", {
                        className: n5.JP,
                        children: n.keyPoints.map((e, n) =>
                            (0, l.jsx)(
                                "li",
                                {
                                    children: (0, l.jsx)(_.E, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: e,
                                    }),
                                },
                                n,
                            ),
                        ),
                    }),
                (0, l.jsxs)(_.E, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    className: n5.RE,
                    children: [
                        "Keywords: ",
                        (0, l.jsx)("span", {
                            className: n5.Br,
                            children: n.keywords.length > 0 ? n.keywords.join(" \xb7 ") : "Not available.",
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: n5.UO,
                    children: [
                        (0, l.jsx)(_.E, {
                            variant: "text-xs/semibold",
                            color: "text-default",
                            className: n5.a9,
                            children: "Quality Scores",
                        }),
                        (0, l.jsxs)("div", {
                            className: n5.so,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: n5.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.substance?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Substance",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: n5.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.engagement?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Engagement",
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: n5.a7,
                                    children: [
                                        (0, l.jsx)(_.E, {
                                            variant: "text-md/semibold",
                                            color: "text-default",
                                            children: n.dynamics?.score?.toFixed(2) ?? "\u2014",
                                        }),
                                        (0, l.jsx)(_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-default",
                                            children: "Dynamics",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, l.jsx)(n9, { moderation: n.moderation ?? null }),
            ],
        });
    });
function n4(e) {
    let { channel: n } = e,
        t = (0, m.bG)([n2.A], () => n2.A.getChannelConversations(n.id) ?? [], [n.id]),
        i = (0, m.bG)([n2.A], () => n2.A.isPendingFetch(n.id), [n.id]),
        r = (0, m.bG)([n3.A], () => n3.A.isHighlightingEnabled(), []),
        a = s.useCallback(
            (e) => {
                (0, n7.xI)(n.id, e.id, { cacheType: "channel" });
            },
            [n],
        );
    return (0, l.jsxs)("aside", {
        "aria-label": "Conversations",
        className: n5.zr,
        children: [
            (0, l.jsxs)("div", {
                className: n5.wx,
                children: [
                    (0, l.jsxs)("div", {
                        className: n5.gn,
                        children: [
                            (0, l.jsx)(nX.ChatIcon, { color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                            (0, l.jsx)(_.E, {
                                variant: "text-lg/semibold",
                                color: "interactive-text-active",
                                children: "Conversations",
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: n5.y6,
                        children: (0, l.jsx)(nW.K, {
                            icon: r ? n$.EyeIcon : nQ.EyeSlashIcon,
                            "aria-label": r ? "Hide highlights" : "Show highlights",
                            variant: "secondary",
                            size: "sm",
                            onClick: n7.Eg,
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: n5.Qs,
                children:
                    0 !== t.length || i
                        ? t.map((e) => (0, l.jsx)(n8, { conversation: e, onJump: a }, e.id))
                        : (0, l.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: n5.BI,
                              children: "No conversations available.",
                          }),
            }),
        ],
    });
}
var te = t(268218),
    tn = t(726249),
    tt = t(334738),
    ti = t(208882),
    tl = t(938764),
    ts = t(519480),
    tr = t(352123),
    ta = t(825244),
    to = t(130696);
let td = function (e) {
    let { guild: n, onAddGuild: i } = e,
        r = s.useCallback(() => {
            (0, p.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("683621"),
                    t.e("711162"),
                    t.e("159957"),
                    t.e("728136"),
                    t.e("216084"),
                    t.e("284819"),
                ]).then(t.bind(t, 405342));
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
        className: to.h2,
        children: [
            (0, l.jsx)("img", { className: to.hd, alt: "", src: t(668778) }),
            (0, l.jsx)(R.D, {
                className: to._U,
                variant: "heading-xl/semibold",
                children: z.intl.format(z.t.vyvrpC, { guildName: n.name }),
            }),
            (0, l.jsx)(_.E, { variant: "text-md/normal", className: to.YI, children: z.intl.string(z.t.WypE0i) }),
            null != i
                ? (0, l.jsx)(ta.E, {
                      className: to.c5,
                      iconUrl: t(928202),
                      header: z.intl.string(z.t.hyK15i),
                      completed: !1,
                      onClick: i,
                  })
                : null,
            (0, l.jsx)(ta.E, {
                className: to.c5,
                iconUrl: t(799258),
                header: z.intl.string(z.t.L4bwJ9),
                completed: !1,
                onClick: r,
            }),
        ],
    });
};
var tc = t(683438),
    tu = t(689175),
    th = t(761508),
    tm = t(765671),
    tA = t(902119),
    tp = t(22231),
    tg = t(66834),
    tx = t(573435),
    tf = t(101555),
    tE = t(548118),
    tI = t(714991),
    tj = t(776231),
    tC = t(345942),
    ty = t(71393),
    tb = t(486020),
    t_ = t(149790),
    tv = t(682557),
    tN = t(524058);
let tT = s.memo(function (e) {
    let { onClick: n } = e;
    return (0, l.jsxs)(nY.D, {
        onClick: n,
        className: tN.Eo,
        children: [
            (0, l.jsx)("img", { alt: "", src: "/assets/0b31557cff3db10f.svg" }),
            (0, l.jsx)(_.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                className: tN.Kk,
                children: z.intl.string(z.t.H9jxS1),
            }),
        ],
    });
});
function tS(e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        o = s.useRef(null),
        { canEdit: d } = (0, tr.A)(n);
    return (0, l.jsx)("div", {
        className: a()(tN.fc, { [tN.QX]: i }),
        children: (0, l.jsxs)(tf.Ay, {
            children: [
                d
                    ? (0, l.jsx)(eN.m, {
                          text: z.intl.string(z.t.XnuOvN),
                          children: (0, l.jsx)(tf.$n, {
                              onClick: () => {
                                  (0, p.openModalLazy)(async () => {
                                      let { default: e } = await Promise.all([t.e("533651"), t.e("988869")]).then(
                                          t.bind(t, 201700),
                                      );
                                      return (t) => (0, l.jsx)(e, { ...t, entry: n });
                                  });
                              },
                              "aria-label": z.intl.string(z.t.XnuOvN),
                              children: (0, l.jsx)(tp.PencilIcon, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: tN.IQ,
                              }),
                          }),
                      })
                    : null,
                (0, l.jsx)(tv.A, {
                    targetElementRef: o,
                    onRequestOpen: () => r(!0),
                    onRequestClose: () => r(!1),
                    entry: n,
                    hideEditButton: !0,
                    children: (e) => {
                        let { onClick: n, ...t } = e;
                        return (0, l.jsx)(eN.m, {
                            text: z.intl.string(z.t["UKOtz+"]),
                            children: (0, l.jsx)(tf.$n, {
                                ...t,
                                onClick: (e) => {
                                    n(e);
                                },
                                ref: o,
                                "aria-label": z.intl.string(z.t["UKOtz+"]),
                                children: (0, l.jsx)(nA.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: tN.IQ,
                                }),
                            }),
                        });
                    },
                }),
            ],
        }),
    });
}
let tR = s.memo(function (e) {
    let { entry: n } = e,
        [i, r] = s.useState(!1),
        a = null != (0, m.bG)([ty.A], () => ty.A.getGuild(n.guildId));
    async function o() {
        r(!0);
        try {
            a ? (0, tC.u)(n.guildId) : await tg.A.joinGuild(n.guildId, { source: eo.Q4z.DIRECTORY_ENTRY });
        } finally {
            r(!1);
        }
    }
    let d = tb.Ay.getGuildSplashURL({ id: n.guildId, splash: n.splash, size: 300 * (0, tj.mZ)() }),
        c = tb.Ay.getGuildIconURL({ id: n.guildId, icon: n.icon, size: 40 }) ?? void 0,
        u = z.intl.string(z.t.VJlc0S);
    return (
        a && (u = z.intl.string(z.t.cqWE2Z)),
        (0, l.jsxs)("div", {
            className: tN.Nr,
            onContextMenu: function (e) {
                (0, j.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(t.bind(t, 283354));
                    return (t) => (0, l.jsx)(e, { ...t, entry: n });
                });
            },
            children: [
                (0, l.jsxs)("div", {
                    className: tN.MY,
                    children: [
                        (0, l.jsx)("div", {
                            className: tN.Yi,
                            children: null != d && (0, l.jsx)("img", { src: d, alt: "", className: tN.j0 }),
                        }),
                        (0, l.jsx)("div", {
                            className: tN.$f,
                            children: (0, l.jsx)(tx.Ay, {
                                mask: tx.Ay.Masks.SQUIRCLE,
                                width: 48,
                                height: 48,
                                children: (0, l.jsx)("div", {
                                    className: tN.SA,
                                    children: (0, l.jsx)(tE.Ay, {
                                        className: tN.rZ,
                                        iconSrc: c,
                                        guild: (0, t_.xi)(n),
                                        size: tE.Ay.Sizes.MEDIUM,
                                        active: !0,
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: tN.OA,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tN.DD,
                            children: [
                                (0, l.jsx)(tI.A, { className: tN.n2, guild: n }),
                                (0, l.jsx)(_.E, {
                                    className: tN.J5,
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, l.jsx)(_.E, {
                            className: tN.h_,
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: n.description,
                        }),
                        (0, l.jsxs)("div", {
                            className: tN.Fj,
                            children: [
                                null != n.approximatePresenceCount &&
                                    (0, l.jsxs)("div", {
                                        className: tN.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tN.JX }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
                                                color: "text-default",
                                                children: z.intl.format(z.t["LC+S+m"], {
                                                    membersOnline: n.approximatePresenceCount,
                                                }),
                                            }),
                                        ],
                                    }),
                                null != n.approximateMemberCount &&
                                    (0, l.jsxs)("div", {
                                        className: tN.Kl,
                                        children: [
                                            (0, l.jsx)("div", { className: tN.Li }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-xs/normal",
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
                            className: tN.PD,
                            children: (0, l.jsx)(x.$, {
                                loading: i,
                                variant: a ? "secondary" : "active",
                                onClick: o,
                                text: u,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(tS, { entry: n }),
            ],
        })
    );
});
var tM = t(946116),
    tO = t(844086),
    tL = t(770679);
function tP(e) {
    let { searchQuery: n, setSearchQuery: t, handleClearSearch: i, handleSearchKeyPress: s } = e,
        { ref: r, width: o } = (0, tm.Ay)();
    return (0, l.jsxs)("div", {
        ref: r,
        className: tL.wx,
        children: [
            (0, l.jsx)("div", { className: tL.y2, children: (0, l.jsx)(tA.A, {}) }),
            (0, l.jsx)("div", {
                className: tL.AZ,
                children: (0, l.jsxs)("div", {
                    className: a()(tL.VW, { [tL.eO]: null != o && o <= 800 }),
                    children: [
                        (0, l.jsx)(R.D, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
                            children: z.intl.string(z.t.IT7qoC),
                        }),
                        (0, l.jsx)(_.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            className: tL.R_,
                            children: z.intl.string(z.t["5PoYts"]),
                        }),
                        (0, l.jsx)("div", {
                            className: tL.MT,
                            children: (0, l.jsx)(tc.I, {
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
let tD = function (e) {
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
        allEntriesCount: m,
        isLoading: A,
    } = e;
    return (0, l.jsx)("div", {
        className: tO.$$,
        children: (0, l.jsxs)(tu.Gt, {
            className: tO.XG,
            children: [
                (0, l.jsx)(tP, { searchQuery: r, setSearchQuery: a, handleClearSearch: o, handleSearchKeyPress: d }),
                (0, l.jsx)(tu.Ch, {
                    orientation: "horizontal",
                    children: (0, l.jsxs)(th.V, {
                        className: tL.$H,
                        type: "top",
                        look: "brand",
                        selectedItem: c,
                        onItemSelect: function (e) {
                            u(e);
                        },
                        children: [
                            (0, l.jsx)(
                                th.V.Item,
                                { className: tL.YU, id: tM.mU.ALL, children: `${z.intl.string(z.t.hEAa2a)} (${m})` },
                                tM.mU.ALL,
                            ),
                            (0, tM.g2)(n.id).map((e) => {
                                let { value: n, label: t } = e;
                                return (0, l.jsx)(
                                    th.V.Item,
                                    { className: tL.YU, id: n, children: `${t} ${null != h[n] ? `(${h[n]})` : ""}` },
                                    n,
                                );
                            }),
                        ],
                    }),
                }),
                A && null == t
                    ? (0, l.jsx)(g.y, { className: tO.u1 })
                    : t?.map((e, n) =>
                          (0, l.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      void 0 !== e.header
                                          ? (0, l.jsx)(_.E, {
                                                variant: "text-md/semibold",
                                                className: tL.bV,
                                                children: e.header,
                                            })
                                          : null,
                                      (0, l.jsxs)("div", {
                                          className: tO.vY,
                                          children: [
                                              e.entries.map((e) => (0, l.jsx)(tR, { entry: e }, e.guildId)),
                                              e.appendEndCard && null != i ? (0, l.jsx)(tT, { onClick: i }) : null,
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
var tk = t(370876),
    tw = t(28863),
    tU = t(364522),
    tG = t(792831),
    tF = t(211862);
let tH = function (e) {
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
    if (c) n = (0, l.jsx)("div", { className: tO.$$, children: (0, l.jsx)(g.y, { className: tO.u1 }) });
    else if (0 === d.length) {
        let e =
            null != o
                ? z.intl.format(z.t.qWFupn, {
                      addServerHook: function (e, n) {
                          return (0, l.jsx)(tw.Anchor, { onClick: o, children: e }, n);
                      },
                  })
                : z.intl.string(z.t.vYyEnv);
        n = (0, l.jsxs)("div", {
            className: tF.Je,
            children: [
                (0, l.jsx)(R.D, {
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: z.intl.string(z.t["6HXiuE"]),
                }),
                (0, l.jsx)(_.E, { variant: "text-md/normal", color: "text-default", className: tF.av, children: e }),
            ],
        });
    } else n = (0, l.jsx)("div", { className: tO.vY, children: d.map((e) => (0, l.jsx)(tR, { entry: e }, e.guildId)) });
    return (0, l.jsx)("div", {
        className: tO.$$,
        children: (0, l.jsxs)(tU.Ar, {
            className: tO.XG,
            children: [
                (0, l.jsxs)("div", {
                    className: tF.wL,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tF.Dr,
                            children: [
                                (0, l.jsx)(nY.D, {
                                    onClick: r,
                                    className: tF.UE,
                                    children: (0, l.jsx)(tG.A, { direction: tG.A.Directions.LEFT }),
                                }),
                                (0, l.jsx)(R.D, {
                                    variant: "heading-xl/semibold",
                                    className: tF.s7,
                                    children: z.intl.format(z.t.UkOHRd, { numResults: d.length, query: s }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(tc.I, {
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
var tB = t(650583);
let tV = function (e) {
    let { channel: n, guild: i } = e,
        {
            currentCategoryId: r,
            directoryEntries: a,
            categoryCounts: o,
            allEntriesCount: d,
            isLoading: c,
        } = (0, m.cf)([ts.A], () => {
            let e = ts.A.getCurrentCategoryId(n.id),
                t = ts.A.getDirectoryEntries(n.id, e === tM.mU.ALL ? null : e),
                i = ts.A.getDirectoryCategoryCounts(n.id);
            return {
                currentCategoryId: e,
                directoryEntries: t,
                categoryCounts: i,
                allEntriesCount: ts.A.getDirectoryAllEntriesCount(n.id),
                isLoading: ts.A.isFetching(),
            };
        });
    s.useEffect(
        () => () => {
            let e = eQ.Ay.lastMessageId(n.id);
            null != e &&
                (0, tt.ack)(
                    n.id,
                    {
                        object: eo.ZSU.ACK_GUILD_DIRECTORY_CHANNEL_VIEWED,
                        objectType: eo.AnalyticsObjectTypes.ACK_AUTOMATIC,
                    },
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
                          if (n !== tM.mU.ALL) return [{ entries: (0, tk._t)(e), appendEndCard: !0 }];
                          let t = [],
                              i = (0, tk.A3)(e),
                              l = new Set(i.map((e) => e.guildId));
                          i.length > 0 && t.push({ header: z.intl.string(z.t.CbaapP), entries: i, appendEndCard: !1 });
                          let s = e.filter((e) => !l.has(e.guildId));
                          return (
                              (s = (0, tk.DN)(s)).length > 0 &&
                                  t.push({ header: z.intl.string(z.t.wxbhEe), entries: s, appendEndCard: !0 }),
                              t
                          );
                      })(Object.values(a), r)
                    : null,
            [a, r],
        ),
        {
            mostRecentQuery: h,
            searchFetching: A,
            searchResults: x,
        } = (0, m.cf)([tl.A], () => {
            let { mostRecentQuery: e, fetching: t } = tl.A.getSearchState(n.id);
            return { mostRecentQuery: e, searchFetching: t, searchResults: tl.A.getSearchResults(n.id, e) };
        }),
        [f, E] = s.useState(h),
        I = "" !== h,
        j = { mostRecentQuery: h },
        C = s.useRef(j);
    (s.useEffect(() => {
        C.current = j;
    }),
        s.useEffect(() => {
            let { mostRecentQuery: e } = C.current;
            (ti.Yc(n.id), ti.YS(n.id), E(e));
        }, [n.id]),
        s.useEffect(() => {
            et.default.track(eo.HAw.GUILD_DIRECTORY_CHANNEL_VIEWED, {
                directory_channel_id: n.id,
                directory_guild_id: i.id,
                primary_category_id: r,
            });
        }, [n.id, i.id, r]));
    let y = (0, tr.b)(n),
        b = s.useMemo(
            () =>
                y
                    ? () => {
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  t.e("122326"),
                                  t.e("533651"),
                                  t.e("538288"),
                                  t.e("419580"),
                                  t.e("197804"),
                                  t.e("756856"),
                                  t.e("796349"),
                              ]).then(t.bind(t, 579735));
                              return (t) =>
                                  (0, l.jsx)(e, {
                                      ...t,
                                      directoryGuildName: i.name,
                                      directoryGuildId: i.id,
                                      directoryChannelId: n.id,
                                      currentCategoryId: r === tM.mU.ALL ? null : r,
                                  });
                          });
                      }
                    : void 0,
            [y, i.name, i.id, n.id, r],
        );
    function _(e) {
        0 !== f.trim().length &&
            e.key === tB.dh.ENTER &&
            (ti.Se(n.id, f),
            et.default.track(eo.HAw.GUILD_DIRECTORY_SEARCH, { directory_channel_id: n.id, directory_guild_id: i.id }));
    }
    function v() {
        (E(""), ti.BA(n.id));
    }
    return I
        ? (0, l.jsx)(tH, {
              searchQuery: f,
              setSearchQuery: E,
              mostRecentQuery: h,
              handleSearchKeyPress: _,
              handleClearSearch: v,
              handleCreateOrAddGuild: b,
              searchResults: x,
              searchFetching: A,
          })
        : null == u && null == r
          ? (0, l.jsx)("div", { className: tO.$$, children: (0, l.jsx)(g.y, { className: tO.u1 }) })
          : u?.length === 0 && null == r
            ? (0, l.jsx)("div", { className: tO.$$, children: (0, l.jsx)(td, { guild: i, onAddGuild: b }) })
            : (0, l.jsx)(tD, {
                  channel: n,
                  searchQuery: f,
                  setSearchQuery: E,
                  handleSearchKeyPress: _,
                  handleClearSearch: v,
                  handleCreateOrAddGuild: b,
                  currentCategoryId: r,
                  handleSelectCategory: function (e) {
                      ti.uU(n.id, e);
                  },
                  directoryEntries: u,
                  categoryCounts: o,
                  allEntriesCount: d,
                  isLoading: c,
              });
};
var tY = t(826673),
    tW = t(93055),
    tz = t(47167),
    tq = t(688438),
    tX = t(353428),
    tK = t(288254),
    t$ = t(873614),
    tQ = t(649852),
    tJ = t.n(tQ),
    tZ = t(811893),
    t0 = t(789645),
    t1 = t(163126),
    t2 = t(182061),
    t3 = t(886393),
    t7 = t(307623),
    t5 = t(660273),
    t6 = t(707792),
    t9 = t(41402),
    t8 = t(271456),
    t4 = t(200273),
    ie = t(565846),
    it = t(57907),
    ii = t(375500),
    il = t(707653),
    is = t(50268),
    ir = t(378570),
    ia = t(162199),
    io = t(713608),
    id = t(473503),
    ic = t(901472),
    iu = t(267102),
    ih = t(474397),
    im = t(486974),
    iA = t(39470);
function ip(e) {
    let { channel: n } = e,
        t = s.useContext(et.AnalyticsContext),
        i = (0, iu.aL)(),
        r = z.intl.string(iA.default["Beo/7v"]),
        { firstMessage: a } = (0, id.OA)(n),
        o = a?.messageSnapshots?.[0],
        d = o?.moderatorReport?.reported_user_id;
    return n.isModeratorReportChannel() && null != d
        ? (0, l.jsx)(nC.Ay.Icon, {
              onClick: function () {
                  null != d &&
                      ((0, ir.iN)(n.id),
                      (0, ih.A)(),
                      (0, ic.z)(n.guild_id, d, n.id, {
                          modViewPanel: im.g.INFO,
                          sourceLocation: location ?? t.location,
                      }),
                      i.dispatch(eo.jej.POPOUT_CLOSE));
              },
              tooltip: r,
              icon: io.q,
              "aria-label": r,
          })
        : null;
}
var ig = t(780338),
    ix = t(782603),
    iE = t(857071),
    iI = t(607508),
    ij = t(914703),
    iC = t(37411);
function iy(e) {
    let { channel: n } = e,
        t = (0, iI.X)(n),
        [i, r] = s.useState(!1),
        a = s.useRef(null),
        o = (0, m.bG)([iE.A], () => null != n.guild_id && iE.A.isLurking(n.guild_id));
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
    return (0, l.jsx)(nd.Y, {
        targetElementRef: a,
        shouldShow: i,
        animation: nd.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => r(!1),
        renderPopout: (e) =>
            (0, l.jsx)(ij.A, { ...e, channel: n, navId: "thread-context", label: z.intl.string(z.t["1NBjqb"]) }),
        children: (e, n) => {
            let { isShown: i } = n;
            return (0, l.jsx)(nC.Ay.Icon, {
                ...e,
                ref: a,
                onClick: () => r((e) => !e),
                tooltip: i ? null : d,
                icon: t === iC.CP.NO_MESSAGES ? ig.BellSlashIcon : ix.BellIcon,
                "aria-label": d,
                selected: i,
            });
        },
    });
}
var ib = t(747926);
function i_(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nd.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nd.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(iv, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nC.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nA.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function iv(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t5.A)(n, "Sidebar Overflow"),
        r = (0, t9.A)(n),
        a = (0, it.A)(n),
        o = (0, ii.A)(n),
        d = (0, t2.A)(n),
        c = (0, t6.A)(n),
        u = (0, ie.A)(n.id),
        h = (0, t4.A)(n),
        m = (0, t7.A)(n),
        A = (0, t3.A)(n),
        p = (0, is.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        g = (0, il.A)(n),
        x = (0, t8.A)(n),
        f = (0, t1.$)(1e3);
    function E() {
        (0, ir.iN)(n.id);
    }
    function I(e) {
        let t = tJ()(() => {
            (ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i), e());
        }, 250);
        function i(e) {
            e.channelId === n.id && t();
        }
        (ei._.subscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i),
            f.addEventListener("abort", () => {
                ei._.unsubscribe(eo.jej.CHANNEL_TEXT_AREA_FOCUSED, i);
            }));
    }
    return (0, l.jsxs)(nc.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(na.rX, {
                children: [s, (0, l.jsx)(na.Dr, { id: "open", label: z.intl.string(z.t.IxVmZi), action: E })],
            }),
            (0, l.jsxs)(na.rX, { children: [a, o] }),
            (0, l.jsxs)(na.rX, { children: [h, r, u, x] }),
            (0, l.jsxs)(na.rX, {
                children: [
                    (0, l.jsx)(na.Dr, {
                        id: "search",
                        label: z.intl.string(z.t["5h0QOP"]),
                        icon: tZ.t,
                        trailingIndicator: { type: "icon", icon: tZ.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.FOCUS_SEARCH, { prefillCurrentChannel: !1 });
                            }),
                                E());
                        },
                    }),
                    (0, l.jsx)(na.Dr, {
                        id: "pins",
                        label: z.intl.string(z.t["2BSH7n"]),
                        icon: tZ.t,
                        trailingIndicator: { type: "icon", icon: tZ.t },
                        action: function () {
                            (I(() => {
                                ei._.dispatch(eo.jej.TOGGLE_CHANNEL_PINS);
                            }),
                                E());
                        },
                    }),
                ],
            }),
            (0, l.jsxs)(na.rX, { children: [g, d, c, m] }),
            (0, l.jsxs)(na.rX, { children: [A, p] }),
        ],
    });
}
function iN(e) {
    let { channel: n, baseChannelId: t } = e,
        i = (0, l.jsx)(nC.Ay.Icon, {
            icon: t0.P,
            tooltip: z.intl.string(z.t.cpT0Cq),
            onClick: () => (0, ib.xu)((0, ia.j)(n), t ?? n.parent_id),
        });
    return n.isMediaThread()
        ? i
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  n.isForumPost() ? null : (0, l.jsx)(iy, { channel: n }),
                  n.isModeratorReportChannel() ? (0, l.jsx)(ip, { channel: n }) : null,
                  (0, l.jsx)(i_, { channel: n }),
                  i,
              ],
          });
}
var iT = t(31717),
    iS = t(853742),
    iR = t(85190);
function iM(e) {
    let { channelId: n } = e,
        i = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        r = (0, m.bG)([ew.A], () => ew.A.getChannel(i?.parent_id)),
        a = (0, m.bG)([ty.A], () => ty.A.getGuild(i?.getGuildId())),
        o = (0, tz.Ay)(i),
        d = (0, tK.Uf)(i),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == i || c.current || ((c.current = !0), (0, iS.rH)(i));
        }, [i]),
        null == i || null == a)
    )
        return null;
    if (null != d) return (0, l.jsx)(t$.A, { guild: a, channelId: d });
    let u = (0, l.jsx)(iN, { channel: i });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: i, draftType: iT.C.ChannelMessage }),
            (0, l.jsx)(nC.Ay, {
                toolbar: u,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tX.zF)({
                    channel: i,
                    parentChannel: r,
                    channelName: o,
                    guild: a,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("955557"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("584615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: i });
                        });
                    },
                    handleClick: function () {
                        null != i && (0, nt.uh)(i.guild_id, i.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: iR.T,
                children: (0, l.jsx)(tq.A, { channel: i, guild: a, chatInputType: nk.oU.SIDEBAR }, n),
            }),
        ],
    });
}
var iO = t(925166),
    iL = t(76268),
    iP = t(605117),
    iD = t(857253),
    ik = t(872363),
    iw = t(73153);
let iU = function (e, n) {
    iw.h.dispatch({ type: "GUILD_PROMPT_VIEWED", prompt: e, guildId: n });
};
var iG = t(561446),
    iF = t(300233),
    iH = t(499211),
    iB = t(468689),
    iV = t(529942),
    iY = t(739455),
    iW = t(709017);
function iz(e) {
    let { guildId: n } = e;
    return (0, l.jsx)("div", {
        className: iW.t7,
        children: (0, l.jsxs)("div", {
            className: iW.Zj,
            children: [
                (0, l.jsx)("img", { src: "/assets/ca761ca633a6781b.svg", alt: "" }),
                (0, l.jsxs)("div", {
                    className: iW.xw,
                    children: [
                        (0, l.jsx)(R.D, { variant: "heading-xl/semibold", children: z.intl.string(z.t["8gJGPs"]) }),
                        (0, l.jsx)(_.E, {
                            variant: "text-sm/normal",
                            className: iW.G3,
                            children: z.intl.string(z.t.GpOWIi),
                        }),
                        (0, l.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: iW.__invalid_button,
                            children: (0, l.jsx)(x.$, {
                                variant: "primary",
                                text: z.intl.string(z.t["I/XhUn"]),
                                onClick: function () {
                                    ((0, iV.rf)(n),
                                        iB.A.open(n, eo.BEX.ROLE_SUBSCRIPTIONS, void 0, eo.nd0.ROLE_SUBSCRIPTION_TIERS),
                                        (0, iY.Fx)(n));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iq = t(599941),
    iX = t(29385),
    iK = t(950344),
    i$ = t(217530),
    iQ = t(162093),
    iJ = t(325348);
function iZ(e) {
    let { guildId: n, channelId: t } = e,
        i = (0, iX.e)({ guildId: n, channelId: t }),
        r = (0, iq.uk)(n),
        a = (0, iq.Tq)(n),
        o = (0, m.bG)([ty.A], () => ty.A.getGuild(n), [n]),
        d = o?.name,
        c = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
        u = (0, tz.Ay)(c),
        h = s.useMemo(() => {
            let e = {};
            for (let n of r) for (let t of n.subscription_listings_ids) e[t] = n.id;
            return e;
        }, [r]);
    return ((0, iK.A)({
        guildId: n,
        location: eo.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: i.map((e) => e.id),
    }),
    null == o)
        ? (0, l.jsx)("div", {
              className: iJ.__invalid_spinnerContainer,
              children: (0, l.jsx)(g.y, { className: iJ.__invalid_spinner }),
          })
        : (0, l.jsxs)(tU.Ar, {
              className: iJ.$$,
              children: [
                  (0, l.jsx)(R.D, {
                      variant: "heading-xl/semibold",
                      className: iJ.DX,
                      children: z.intl.format(z.t.xHMpym, { serverName: d, channelName: u }),
                  }),
                  (0, l.jsx)(_.E, {
                      className: iJ.Lv,
                      variant: "text-md/normal",
                      color: "text-default",
                      children: a?.description,
                  }),
                  (0, l.jsx)(i$.A, {
                      children: i
                          .filter((e) => null != h[e.id])
                          .map((e) =>
                              (0, l.jsx)(
                                  iQ.A,
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
function i0(e) {
    let { channelId: n } = e,
        t = (function (e) {
            let { hasUnread: n, mentionCount: t } = (0, m.cf)(
                [eQ.Ay],
                () => ({
                    hasUnread: null != e && eQ.Ay.hasUnread(e),
                    mentionCount: null != e ? eQ.Ay.getMentionCount(e) : 0,
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
    (0, eJ.Vo)({ event: eo.jej.FOCUS_CHAT_BUTTON, handler: r });
    let a = (0, nn.HP)(n),
        o = (0, m.bG)([ew.A], () => ew.A.getBasicChannel(n)?.guild_id, [n]);
    return (0, l.jsx)(nC.In, {
        ref: i,
        tooltip: a ? z.intl.string(z.t["5MstTl"]) : z.intl.string(z.t.kkKapG),
        icon: nX.ChatIcon,
        iconSize: 20,
        onClick: () => {
            a
                ? (0, nn.m)(n)
                : ((0, nn.ci)(o, n),
                  setTimeout(() => ei._.dispatch(eo.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: n }), 0));
        },
        selected: a,
        badge: t,
    });
}
var i1 = t(358047),
    i2 = t(284252);
function i3(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n), [n]) === eo.YvQ.CONVERSATIONS,
        i = (0, m.bG)([n2.A], () => (n2.A.getChannelConversations(n)?.length ?? 0) > 0, [n]),
        r = s.useMemo(() => (i ? { type: "important", position: "bottom" } : void 0), [i]);
    return (0, l.jsx)(nC.In, {
        onClick: I.A.toggleConversationsSection,
        tooltip: t ? null : "Conversations",
        icon: nX.ChatIcon,
        iconSize: 20,
        "aria-label": "Conversations",
        className: i ? i2.q : void 0,
        selected: t,
        badge: r,
    });
}
var i7 = t(967198);
function i5(e) {
    let { channelId: n } = e,
        t = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n)),
        i = (0, m.bG)([i7.A], () => i7.A.getGuildId()),
        s = t === eo.YvQ.MEMBERS;
    return (0, l.jsx)(nC.In, {
        tooltip: s ? z.intl.string(z.t.Axvx8c) : z.intl.string(z.t.gxChDx),
        icon: S.n,
        onClick: function () {
            (eR.Ay.trackWithMetadata(eo.HAw.MEMBER_LIST_TOGGLED, { channel_id: n, guild_id: i, member_list_open: !s }),
                I.A.toggleMembersSection());
        },
        selected: s,
    });
}
var i6 = t(187360),
    i9 = t(287074),
    i8 = t(306788),
    i4 = t(863922),
    le = t(822074),
    ln = t(521732);
function lt(e) {
    let { channel: n } = e,
        t = (0, e4.ni)(n),
        i = (0, m.bG)([le.A], () => le.A.shouldShowTopicsBar());
    return (0, l.jsx)(nC.Ay.Icon, {
        icon: i8.K,
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
    ls = t(207777),
    lr = t(422844),
    la = t(435470),
    lo = t(892110),
    ld = t(45494);
function lc(e) {
    let { channel: n } = e,
        t = (0, la.S4)(n),
        i = (0, m.bG)([li.A], () => li.A.hasHidden(n.id)),
        s = (0, lo.l)(n.id),
        { sortOrder: r, tagFilter: a, tagSetting: o } = (0, lr.R)(n.id),
        d = (0, m.bG)(
            [ls.A, ld.A],
            () => !!(ls.A.getThreadIds(n.id, r, a, o).length > 0) || !!(ld.A.getThreads(n.id, r, a, o).length > 0),
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
    return (0, l.jsx)(nC.In, {
        tooltip: u,
        icon: nm.CircleInformationIcon,
        onClick: function () {
            return ll.A.hideAdminOnboarding(n.id, !i);
        },
        selected: !i,
    });
}
var lu = t(290136),
    lh = t(975571),
    lm = t(490094);
function lA() {
    let e = z.intl.string(lm.default.pdipXI);
    return (0, l.jsx)(nC.In, {
        tooltip: e,
        icon: lu.CircleQuestionIcon,
        onClick: function () {
            window.open(lh.A.getArticleURL(eo.MVz.LFG_CHANNELS), "_blank");
        },
    });
}
var lp = t(742589),
    lg = t(43105),
    lx = t(428689),
    lf = t(978940),
    lE = t(387755),
    lI = t(730852),
    lj = t(641703),
    lC = t(379848),
    ly = t(753727),
    lb = t(625075),
    l_ = t(222692),
    lv = t(442353),
    lN = t(470710),
    lT = t(186111),
    lS = t(360906),
    lR = t(994500),
    lM = t(977997),
    lO = t(818023),
    lL = t(49999),
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
            (0, l.jsx)(nC.Ay.Icon, { icon: lx.VideoIcon, onClick: e, disabled: u || i, tooltip: c })
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
        let u = (0, l.jsx)(nC.Ay.Icon, {
            ref: this.iconRef,
            icon: lf._,
            onClick: this.handleVoiceClick,
            disabled: c,
            tooltip: e,
        });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                u,
                (0, l.jsx)(lC.Ay, {
                    contentTypes: a,
                    children: (e) => {
                        let { visibleContent: n, markAsDismissed: t } = e;
                        return n === A.M.ACTIVITY_GDM_CALL_TOOLTIP
                            ? (0, l.jsx)(lg.A, {
                                  targetElementRef: this.iconRef,
                                  title: z.intl.string(z.t.HOPqzR),
                                  body: z.intl.format(z.t.xAW71b, { helpdeskUrl: lO.DY }),
                                  position: "bottom",
                                  align: "center",
                                  caretConfig: { align: "center" },
                                  onRequestClose: () => t(lL.i.USER_DISMISS),
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
            return lE.A.call(t.id, n, !i && !t.isManaged() && !e?.shiftKey, s);
        }
        n ? (0, lv.A)(r, l) : r();
    };
    handleJoinCall = (e) => {
        lI.default.selectVoiceChannel(this.props.channel.id, e);
    };
    handleVoiceClick = (e) => {
        let { callUnavailable: n, callActive: t, dismissibleContentTypes: i } = this.props;
        if (
            (i.includes(A.M.ACTIVITY_GDM_CALL_TOOLTIP) &&
                (0, tY.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lL.i.AUTO }),
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
        (0, lv.A)(n, e);
    };
    handleBrowserNotSupported = () => {
        (0, l_.A)();
    };
}
function lk(e) {
    let { channel: n } = e,
        t = (0, ly.A)(),
        i = (0, m.bG)([nP.A], () => nP.A.getMode(n.id)),
        s = (0, m.bG)([lM.A], () => lM.A.isInChannel(n.id)),
        r = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { callActive: a, callUnavailable: o } = (0, m.cf)([lN.A], () => ({
            callActive: lN.A.isCallActive(n.id),
            callUnavailable: lN.A.isCallUnavailable(n.id),
        })),
        d = n.getRecipientId(),
        { notFriend: c, isBlocked: u } = (0, m.cf)([lR.A], () => ({
            notFriend: n.type === eo.rbe.DM && null != d && !lR.A.isFriend(d),
            isBlocked: n.type === eo.rbe.DM && null != d && lR.A.isBlocked(d),
        })),
        h = (0, m.bG)([ee.default], () => ee.default.getUser(d)),
        p = (0, iu.Us)(),
        g = [],
        x = (0, lj.A)(n.id),
        f = (0, m.bG)([lT.A], () => lT.A.hasLayers());
    return (x && !f && g.push(A.M.ACTIVITY_GDM_CALL_TOOLTIP), t || h?.bot)
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
var lw = t(452015),
    lU = t(765178),
    lG = t(231483),
    lF = t(544231),
    lH = t(338510),
    lB = t(151119),
    lV = t(278941),
    lY = t(665909),
    lW = t(327337);
let lz = s.memo(function (e) {
    let { channel: n } = e,
        i = (0, lH.u)(n.id),
        r = (0, lB.S)(n.id),
        a = (0, lV.e)(n.id),
        o = (0, p.useHasAnyModalOpen)(),
        d = (0, m.bG)([lT.A], () => lT.A.hasLayers()),
        c = s.useCallback(
            () => (r ? z.intl.string(z.t["16QyDv"]) : null != a ? z.intl.string(z.t.kCN9i0) : null),
            [r, a],
        ),
        u = s.useMemo(() => (r || null != a) && !o && !d, [r, a, o, d]),
        [h, A] = s.useState(c());
    (s.useEffect(() => {
        (null != a &&
            null != i &&
            (lU.O.announce(z.intl.string(z.t.acsXuG)),
            setTimeout(() => {
                (0, lF.xi)(n.id, [a.id]);
            }, 5e3),
            (0, lY.QF)({
                channelId: n.id,
                senderId: n.getRecipientId(),
                warningId: a.id,
                warningType: a.type,
                isNudgeWarning: null != a,
                viewName: lY.gN.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            r &&
                (lU.O.announce(z.intl.string(z.t["1dxCqG"])),
                setTimeout(() => {
                    (0, lF.bg)(n.id);
                }, 5e3)));
    }, [n, a, i, r]),
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
        s.useEffect(() => {
            let e = c();
            null != e && A(e);
        }, [r, a, c]));
    let g = s.useCallback(() => {
        (null != a && (0, lF.xi)(n.id, [a.id]),
            null != i &&
                ((0, p.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            t.e("456510"),
                            t.e("506627"),
                            t.e("770940"),
                            t.e("302033"),
                            t.e("623068"),
                        ]).then(t.bind(t, 516567));
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
                    { modalKey: lW.V },
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
              children: (0, l.jsx)(nC.Ay.Icon, {
                  icon: lG.ShieldIcon,
                  onClick: g,
                  tooltip: z.intl.string(z.t.rpc2qv),
                  tooltipDisabled: null != a,
              }),
          });
});
var lq = t(262763),
    lX = t(406704),
    lK = t(576705);
let l$ = s.memo(function (e) {
    let { channel: n } = e,
        t = (0, ly.A)(),
        i = (0, m.bG)([lM.A], () => lM.A.isInChannel(n.id)),
        r = (0, m.bG)([lM.A], () => !u().isEmpty(lM.A.getVoiceStatesForChannel(n.id))),
        a = (0, m.bG)([lK.A], () => lK.A.can(eo.xBc.CONNECT, n)),
        { needSubscriptionToAccess: o } = (0, iH.A)(n.id),
        d = (0, lX.Id)(n),
        { enabled: c } = lX.io.useExperiment({ guildId: n.guild_id, location: "63250c_1" }, { autoTrackExposure: !1 }),
        h = s.useCallback(() => {
            lq.A.handleVoiceConnect({ channel: n, connected: i, needSubscriptionToAccess: o, locked: !1 });
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
        ? (0, l.jsx)(nC.Ay.Icon, {
              icon: lf._,
              onClick: h,
              tooltip: r ? z.intl.string(z.t.fdEeb5) : z.intl.string(z.t.focH1t),
          })
        : null;
});
var lQ = t(812991),
    lJ = t(47675),
    lZ = t(999291);
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
        i = (0, m.bG)([i1.Ay], () => i1.Ay.getSection(n.id, n?.isDM())),
        s = (0, lZ.Ay)(n.getRecipientId()),
        r = l0(),
        a = i === eo.YvQ.PROFILE && r;
    return (0, l.jsx)(nC.In, {
        disabled: !r || t,
        tooltip: !r || t ? z.intl.string(z.t.YneDgF) : a ? z.intl.string(z.t.niD64e) : z.intl.string(z.t["+FAsHq"]),
        icon: lQ.n,
        onClick: function () {
            ((0, lJ.am)({ displayProfile: s, isProfileOpen: !a }), I.A.toggleUserProfileSidebarSection());
        },
        selected: a && !t,
    });
}
let l2 = {};
class l3 extends m.Ay.PersistedStore {
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
let l7 = new l3(iw.h, {
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
var l5 = (((i = {}).REAL_NAME_PROMPT = "REAL_NAME_PROMPT"), i),
    l6 = t(376943),
    l9 = t(394953),
    l8 = t(683063),
    l4 = t(403581),
    se = t(241541),
    sn = t(709066),
    st = t(87664),
    si = t(247676),
    sl = t(695526),
    ss = t(927813),
    sr = t(427358),
    sa = t(945810);
let so = (0, sa.mj)({
    name: "2026-10-contextual-referrals-gdm-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var sd = t(280450),
    sc = t(851746),
    su = t(103411);
function sh() {
    let e = (0, su.m)(),
        n = (0, m.bG)([sc.A], () => sc.A.getReferralsRemaining());
    return {
        isBaseEligible: e && null != n && n > 0,
        currentUserId: (0, m.bG)([sd.default], () => sd.default.getId()),
    };
}
var sm = t(315629),
    sA = t(744413),
    sp = t(303682),
    sg = t(224370),
    sx = t(544879);
function sf(e) {
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
        className: a()(sg.kL, i),
        "data-testid": "contextual-referral-embed-card",
        children: [
            (0, l.jsxs)("div", {
                className: sg.lj,
                children: [
                    (0, l.jsx)("img", { className: sg.Dp, src: sx.A, alt: "", role: "presentation" }),
                    (0, l.jsxs)("div", {
                        className: sg.Qq,
                        children: [
                            (0, l.jsx)(R.D, {
                                variant: "heading-sm/semibold",
                                color: "text-default",
                                className: sg.DD,
                                children: s,
                            }),
                            (0, l.jsx)(_.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                className: sg.rf,
                                children: r,
                            }),
                        ],
                    }),
                    (0, l.jsx)(nY.D, {
                        className: sg.VN,
                        "aria-label": z.intl.string(z.t.H2NPrR),
                        onClick: function () {
                            t(lL.i.USER_DISMISS);
                        },
                        children: (0, l.jsx)(t0.P, { size: "xs", color: "currentColor" }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: sg.v0,
                children: (0, l.jsx)(x.$, {
                    variant: "secondary",
                    size: "sm",
                    text: o,
                    onClick: function () {
                        (t(lL.i.TAKE_ACTION), null != d)
                            ? d(c)
                            : (0, sA.jM)({
                                  startingScreen: sp.SelectFriendsModalScreens.SELECT_FRIENDS,
                                  analyticsLocations: c,
                              });
                    },
                }),
            }),
        ],
    });
}
var sE = t(349420);
let sI = { cooldownDurationMs: 60 * ss.A.Millis.DAY };
function sj(e) {
    let { channel: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: so.useConfig({ location: "ContextualReferralGDMMemberListEmbed" }).showEmbed,
                },
                { isBaseEligible: t, currentUserId: i } = sh(),
                l = (0, m.bG)(
                    [sr.A, lR.A],
                    () =>
                        e.recipients.some((e) => {
                            if (e === i || lR.A.isBlockedOrIgnored(e)) return !1;
                            let n = sr.A.getUserAffinity(e);
                            return null != n && null != n.communicationRank && n.communicationRank <= 20;
                        }),
                    [e.recipients, i],
                );
            return !!t && !!n && !!l;
        })(n);
    return (0, l.jsx)(lC.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: sI,
        groupName: lL.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sf, {
                      className: sE.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_GDM_MEMBER_LIST,
                      markAsDismissed: t,
                  });
        },
    });
}
t(667532);
var sC = t(403362);
t(696101);
let sy = [],
    sb = er.Ay.getEnableHardwareAcceleration();
function s_(e) {
    let { user: n, channel: i, status: r, activities: a } = e,
        o = (0, m.bG)([Z.A], () => null != Z.A.getTypingUsers(i.id)[n.id]),
        d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        c = (0, m.bG)([Q.A], () => Q.A.isMobileOnline(n.id)),
        u = (0, m.bG)([lR.A], () => lR.A.getNickname(n.id)),
        h = (0, st.A)(n.id),
        A = s.useRef(null);
    function p(e) {
        (0, j.L3)(e, async () => {
            let { default: e } = await Promise.all([
                t.e("463317"),
                t.e("926132"),
                t.e("893190"),
                t.e("146652"),
                t.e("189673"),
                t.e("882073"),
                t.e("797558"),
                t.e("691994"),
                t.e("576665"),
                t.e("624198"),
                t.e("245996"),
                t.e("700792"),
                t.e("592822"),
                t.e("529422"),
                t.e("823427"),
                t.e("307059"),
                t.e("309291"),
                t.e("528864"),
            ]).then(t.bind(t, 778595));
            return (t) => (0, l.jsx)(e, { ...t, user: n, channel: i });
        });
    }
    function g() {
        let e = `@${es.Ay.getUserTag(n, { decoration: "never" })}`,
            t = `<@${n.id}>`;
        (ei._.dispatch(eo.jej.TEXTAREA_FOCUS, { channelId: i.id }),
            ei._.dispatchToLastSubscribed(eo.jej.INSERT_TEXT, { plainText: e, rawText: t }),
            M.A.startTyping(i.id));
    }
    let x = (0, D.r)({ user: n }),
        [f, E] = s.useState(!1);
    return (0, l.jsx)(X.A, {
        targetElementRef: A,
        user: n,
        channelId: i.id,
        position: b.Fr ? "window_center" : "left",
        spacing: 16,
        onShiftClick: g,
        shouldShow: f,
        onRequestClose: () => E(!1),
        children: (e) => {
            let { onClick: t, onMouseDown: s, ...m } = e;
            return (0, l.jsx)(
                ea.A,
                {
                    ref: A,
                    user: n,
                    currentUser: d,
                    isOwner: n.id === i.ownerId,
                    ownerTooltipText: z.intl.string(z.t["MRXZ+x"]),
                    shouldAnimateStatus: sb,
                    isTyping: o,
                    status: r,
                    activities: a,
                    applicationStream: h,
                    channel: i,
                    onContextMenu: p,
                    selected: f,
                    isMobile: c,
                    nick: u,
                    nameplate: x,
                    onClick: (e) => {
                        e.shiftKey ? g?.() : E((e) => !e);
                    },
                    onMouseDown: (e) => {
                        f ? e.stopPropagation() : s?.(e);
                    },
                    ...m,
                },
                n.id,
            );
        },
    });
}
function sv(e, n) {
    if (e.listItems.length !== n.listItems.length) return !1;
    for (let t = 0; t < e.listItems.length; t++) {
        let i = e.listItems[t],
            l = n.listItems[t];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function sN(e) {
    let { channel: n } = e,
        t = ee.default.getCurrentUser(),
        i = t?.isStaff(),
        { analyticsLocations: r } = (0, P.Ay)(L.A.MEMBER_LIST),
        { listItems: a } = (0, m.bG)(
            [lR.A, ee.default, Q.A],
            () => {
                var e, t;
                let i =
                        ((e = n.recipients),
                        (t = ee.default),
                        u()(e)
                            .map(t.getUser)
                            .unshift(t.getCurrentUser())
                            .filter(sC.Vq)
                            .sortBy((e) => e.username.toLowerCase())
                            .value()),
                    l = {};
                for (let e of i)
                    lR.A.isFriend(e.id) || e.id === ee.default.getCurrentUser()?.id
                        ? (l[e.id] = {
                              status: Q.A.getStatus(e.id) ?? eo.clD.OFFLINE,
                              activities: Q.A.getActivities(e.id) ?? sy,
                          })
                        : (l[e.id] = { status: eo.clD.OFFLINE, activities: sy });
                let s = [];
                for (let e of i) {
                    let n = { user: e, status: l[e.id].status, activities: l[e.id].activities };
                    s.push(n);
                }
                return { listItems: s };
            },
            [n],
            sv,
        );
    s.useEffect(() => {
        et.default.track(eo.HAw.MEMBER_LIST_VIEWED, { channel_id: n.id, channel_type: n.type, guild_id: n.guild_id });
    }, [n.guild_id, n.id, n.type]);
    let o = i && a.every((e) => e.user.isStaff()),
        d = (0, p.useHasAnyModalOpen)(),
        c = (0, si.A)({ useNitroCapExperiment: !0 }),
        h = (0, sl.qH)(),
        A = n.isMultiUserDM() && "entitled" === h && c > eo.wLU;
    return (0, l.jsx)(P.f5, {
        value: r,
        children: (0, l.jsx)("div", {
            className: ec.kL,
            children: (0, l.jsx)("aside", {
                className: ec.yg,
                children: (0, l.jsxs)(tU.Ip, {
                    className: ec.ol,
                    fade: !0,
                    children: [
                        (0, l.jsx)(sj, { channel: n }),
                        (0, l.jsxs)(k.A, {
                            className: ec.lL,
                            children: [
                                A
                                    ? (0, l.jsx)(l8.u, {
                                          title: z.intl.string(z.t.u1ilug),
                                          body: z.intl.format(z.t["mr27w/"], { number: 25 }),
                                          position: "left",
                                          align: "center",
                                          spacing: 16,
                                          children: (0, l.jsxs)("span", {
                                              className: ec.BY,
                                              children: [
                                                  (0, l.jsx)(l4.t, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                      className: ec.K4,
                                                      "aria-hidden": !0,
                                                  }),
                                                  `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                              ],
                                          }),
                                      })
                                    : `${z.intl.string(z.t["9Oq93m"])}\u{2014}${a.length} `,
                                o && (0, l.jsx)(sn.A, { type: sn.A.Types.STAFF_ONLY_DM }),
                            ],
                        }),
                        a.map((e) =>
                            (0, l.jsx)(
                                s_,
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
                                      icon: se.D,
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
var sT = t(322338),
    sS = t(898029),
    sR = t(36537);
function sM() {
    return (0, l.jsx)("div", {
        className: sR.zt,
        children: (0, l.jsx)("header", {
            className: sS.wL,
            children: (0, l.jsxs)("div", {
                className: sS.TN,
                role: "status",
                children: [
                    (0, l.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        children: z.intl.string(z.t.uixzLf),
                    }),
                    (0, l.jsx)("div", {
                        className: sS.zp,
                        children: (0, l.jsx)(g.y, {
                            type: g.y.Type.SPINNING_CIRCLE,
                            className: sS.u1,
                            itemClassName: sS.pu,
                        }),
                    }),
                ],
            }),
        }),
    });
}
var sO = t(138298),
    sL = t(940382),
    sP = t(747376),
    sD = t(718734),
    sk = t(163328),
    sw = t(425557),
    sU = t(270003),
    sG = t(150934),
    sF = t(452027),
    sH = t(95477),
    sB = t(281595),
    sV = t(465532),
    sY = t(579872),
    sW = t(119031),
    sz = t(408018),
    sq = t(845207),
    sX = t(822610),
    sK = t(915089),
    s$ = t(314307),
    sQ = t(636922),
    sJ = t(931664),
    sZ = t(631576),
    s0 = t(885386),
    s1 = t(232835),
    s2 = t(522602),
    s3 = t(806150),
    s7 = t(518960),
    s5 = t(753738);
function s6(e, n) {
    return { type: e, message: n ?? null };
}
function s9(e, n) {
    return null == e || (0 === e.type && null != n.content && n.content.trim().length > 0) ? null : (e.message ?? null);
}
var s8 = t(659617),
    s4 = t(474078),
    re = t(636537),
    rn = t(152367),
    rt = t(147087);
async function ri(e) {
    try {
        let n = await re.Bo.post({
            url: eo.Rsh.AI_TITLE,
            body: { content: e },
            oldFormErrors: !0,
            rejectWithError: (0, re.fT)(),
        });
        return n.body?.title ?? null;
    } catch (e) {
        return null;
    }
}
var rl = t(55294),
    rs = t(143161),
    rr = t(909833);
let ra = nk.oU.THREAD_CREATION;
function ro(e) {
    let { parentChannelId: n, parentMessageId: t, location: i } = e,
        s = (0, m.bG)([ew.A], () => ew.A.getChannel(n)),
        { analyticsLocations: r } = (0, P.Ay)(L.A.CREATE_THREAD);
    return null == s
        ? null
        : (0, l.jsx)(P.f5, {
              value: r,
              children: (0, l.jsx)(eJ.Ah, {
                  children: (0, l.jsxs)("section", {
                      "aria-label": z.intl.string(z.t.rBIGBL),
                      className: rs.kL,
                      children: [
                          (0, l.jsx)(ex.A, { channel: s, draftType: iT.C.FirstThreadMessage }),
                          (0, l.jsx)(rd, { parentChannelId: n }),
                          (0, l.jsx)(rc, { parentChannel: s, parentMessageId: t, location: i }),
                      ],
                  }),
              }),
          });
}
function rd(e) {
    let { parentChannelId: n } = e,
        t = s.useCallback(() => {
            let e = iT.A.getThreadSettings(n),
                t = iT.A.getDraft(n, iT.C.FirstThreadMessage).trim(),
                i = s2.A.getUploads(n, iT.C.FirstThreadMessage);
            (e?.name != null && e?.name !== "") || 0 !== t.length || 0 !== i.length
                ? sY.A.show({
                      title: z.intl.string(z.t["6kDZh1"]),
                      body: z.intl.string(z.t.NgS9jX),
                      confirmText: z.intl.string(z.t["7WGI4H"]),
                      confirmVariant: "critical-primary",
                      cancelText: z.intl.string(z.t["olcKd/"]),
                      onConfirm: () => {
                          (0, ib.bA)(n);
                      },
                  })
                : (0, ib.bA)(n);
        }, [n]);
    return (0, l.jsxs)(nC.Ay, {
        toolbar: (0, l.jsx)(nC.Ay.Icon, { icon: t0.P, tooltip: z.intl.string(z.t.cpT0Cq), onClick: t }),
        children: [
            (0, l.jsx)(nC.Ay.Icon, { icon: sk.y, disabled: !0, "aria-label": z.intl.string(z.t["7Xm5QI"]) }),
            (0, l.jsx)(nC.Ay.Title, { children: z.intl.string(z.t["4WNcpu"]) }),
        ],
    });
}
function rc(e) {
    let n,
        { parentChannel: t, parentMessageId: i, location: r } = e,
        o = (0, m.bG)([O.Ay], () => O.Ay.messageGroupSpacing),
        d =
            ((n = s.useContext(eJ.EH)),
            s.useCallback(() => {
                n.bumpDispatchPriority();
            }, [n])),
        {
            threadSettings: c,
            setThreadSettings: u,
            updateThreadSettings: h,
        } = (function (e, n) {
            let t = (0, m.bG)([iT.A], () => iT.A.getThreadSettings(e.id) ?? {}, [e.id]),
                [i, l] = s.useState(t),
                r = s.useCallback(
                    (t) => {
                        (l((e) => ({ ...e, ...t })), sV.A.changeThreadSettings(e.id, { ...t, parentMessageId: n }));
                    },
                    [e.id, n],
                );
            return { threadSettings: i, setThreadSettings: l, updateThreadSettings: r };
        })(t, i),
        { textAreaState: A, setTextAreaState: p } = (function (e, n) {
            let [t, i] = s.useState((0, sz.N3)());
            return (
                s.useEffect(() => {
                    function t(t) {
                        let l = iT.A.getDraft(e.id, iT.C.FirstThreadMessage);
                        ((0 === l.length || !0 === t) && i((0, sz.ur)(l)), n(iT.A.getThreadSettings(e.id) ?? {}));
                    }
                    return (
                        t(!0),
                        iT.A.addChangeListener(t),
                        () => {
                            iT.A.removeChangeListener(t);
                        }
                    );
                }, [e.id, n]),
                { textAreaState: t, setTextAreaState: i }
            );
        })(t, u),
        g = (0, s8.EN)(t),
        {
            isGeneratingAI: x,
            enableAIFeatures: f,
            getThreadNameInputAccessory: E,
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
                h = (0, rt.b)(),
                m = s.useCallback(async () => {
                    if (h) {
                        d(!0);
                        try {
                            let e = null;
                            if (null != t) {
                                let i = s1.A.getMessage(n.id, t);
                                e = i?.getContentMessage()?.content ?? null;
                            } else a.textValue.trim().length >= 10 && (e = a.textValue);
                            if (null != e) {
                                let n = await ri(e);
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
                    (null != r.name && "" !== r.name.trim()) || c || (h && null != t && (u(!0), m()));
                }, [n.id, t, i, r.name, c, h, m]));
            let A = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (h)
                            return {
                                icon: rn.D,
                                onClick: m,
                                "aria-label": z.intl.string(z.t.ZF2oBs),
                                disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                tooltip: z.intl.string(z.t.ZF2oBs),
                                loading: o,
                            };
                    },
                    [h, m, o, t, a.textValue],
                ),
                p = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return h
                            ? (0, l.jsx)(eN.m, {
                                  text: z.intl.string(z.t.ZF2oBs),
                                  children: (0, l.jsx)(nW.K, {
                                      icon: rn.D,
                                      variant: "secondary",
                                      size: "sm",
                                      "aria-label": z.intl.string(z.t.ZF2oBs),
                                      onClick: m,
                                      disabled: e || o || (null == t && a.textValue.trim().length < 10),
                                      loading: o,
                                      type: "button",
                                  }),
                              })
                            : null;
                    },
                    [h, o, t, a.textValue, m],
                );
            return {
                isGeneratingAI: o,
                generateAIName: m,
                enableAIFeatures: h,
                renderAiGenerateButton: p,
                getThreadNameInputAccessory: A,
            };
        })({ parentChannel: t, parentMessageId: i, updateThreadSettings: h, threadSettings: c, textAreaState: A }),
        {
            nameError: I,
            messageError: j,
            submit: C,
            submitting: y,
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
                [m, A] = s.useState(!1),
                p = (0, rl.Ay)({
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: i,
                    privateThreadMode: l,
                    location: a,
                    onThreadCreated: ib.GS,
                    useDefaultThreadName: !0,
                });
            return {
                nameError: d,
                messageError: u,
                submit: s.useCallback(
                    async (e, l, s) => {
                        if (m) return { shouldClear: !1, shouldRefocus: !1 };
                        (A(!0),
                            null == e && (e = r.textValue),
                            (e = e.trim()),
                            (null == l || 0 === l.length) &&
                                (l = sJ.A.getStickerPreview(n.id, ra.drafts.type)?.map((e) => e.id)),
                            (null == s || 0 === s.length) && (s = s2.A.getUploads(n.id, iT.C.FirstThreadMessage)));
                        let a = (i.name ?? "").trim(),
                            d = (o || null == t) && 0 === a.length,
                            u = "" === e && (null == l || 0 === l.length) && 0 === s.length;
                        if (
                            (c(d ? s6(0, z.intl.string(z.t.uXA573)) : null),
                            h(u ? s6(0, z.intl.string(z.t.kesTVT)) : null),
                            d || u)
                        )
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        let { valid: g } = await (0, s3.i)({
                            content: e,
                            hasStickers: null != l && l.length > 0,
                            hasAttachments: s.length > 0,
                            type: ra,
                            channel: null == t ? n : null,
                        });
                        if (!g) return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        try {
                            await p(e, l, s);
                        } catch (e) {
                            if (e.body?.code === eo.t02.AUTOMOD_TITLE_BLOCKED) {
                                var x;
                                c(((x = e.body), s6(1, (0, s5.cw)(x, n?.id))));
                            } else
                                e.body?.code === eo.t02.INVALID_FORM_BODY &&
                                    e.body?.errors?.name != null &&
                                    c(s6(2, z.intl.string(z.t.uXA573)));
                            return (A(!1), { shouldClear: !1, shouldRefocus: !0 });
                        }
                        return ((0, sZ.x5)(n.id, ra.drafts.type), A(!1), { shouldClear: !0, shouldRefocus: !1 });
                    },
                    [p, r.textValue, i.name, t, n, m, o],
                ),
                submitting: m,
            };
        })({
            parentChannel: t,
            parentMessageId: i,
            threadSettings: c,
            privateThreadMode: g,
            textAreaState: A,
            location: r,
            enableAIFeatures: f,
        }),
        b = (0, s8.Iy)(c, g) ? sw.t : sk.y;
    return (0, l.jsx)("div", {
        className: rs.TE,
        onMouseDown: d,
        onFocus: d,
        children: (0, l.jsx)("div", {
            className: a()(rs.Og, `group-spacing-${o}`),
            children: (0, l.jsxs)("form", {
                onSubmit: (e) => {
                    (e.preventDefault(), C());
                },
                className: rs.Zd,
                children: [
                    (0, l.jsx)(tU.Ip, {
                        className: rs.XG,
                        fade: !0,
                        children: (0, l.jsxs)("div", {
                            className: rs.bv,
                            children: [
                                (0, l.jsxs)(s$.Ay, {
                                    channelId: "create-thread-null",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: a()(rr.P0, rs.P0),
                                            children: (0, l.jsx)(b, { className: rr.Kk }),
                                        }),
                                        (0, l.jsxs)(sU.n, {
                                            children: [
                                                (0, l.jsx)(rh, {
                                                    parentChannel: t,
                                                    parentMessageId: i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    error: I,
                                                    disabled: y,
                                                    isGeneratingAI: x,
                                                    enableAIFeatures: f,
                                                    getThreadNameInputAccessory: E,
                                                }),
                                                (0, l.jsx)(ru, {
                                                    startedFromMessage: null != i,
                                                    threadSettings: c,
                                                    updateThreadSettings: h,
                                                    privateThreadMode: g,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(rA, { parentChannel: t, parentMessageId: i }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: rs.Eh,
                        children: [
                            (0, l.jsx)(rm, {
                                parentChannel: t,
                                textAreaState: A,
                                setTextAreaState: p,
                                submit: C,
                                error: j,
                            }),
                            (0, l.jsx)(sW.Ay, {
                                channel: t,
                                isThreadCreation: !0,
                                className: rs.RL,
                                isInTextChannel: !0,
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function ru(e) {
    let { startedFromMessage: n, threadSettings: t, updateThreadSettings: i, privateThreadMode: s } = e,
        r = (0, s8.Iy)(t, s),
        a = (0, l.jsx)(sG.S, {
            disabled: s === s8.jk.PrivateOnly,
            checked: r,
            onChange: (e) => i({ isPrivate: e }),
            label: z.intl.string(z.t.TRPp3g),
        });
    return n || s === s8.jk.Disabled
        ? null
        : (0, l.jsx)(sF.D, {
              label: z.intl.string(z.t.F1zyvU),
              helperText: r ? z.intl.string(z.t.EWXycz) : void 0,
              children: a,
          });
}
function rh(e) {
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
        h = s9(r, { content: u }),
        m = (0, s8.l1)(n, t),
        A = null != t && !d,
        p = (0, sK.GV)(),
        g = d ? z.intl.string(z.t["Nb2/RE"]) : "" !== m ? m : z.intl.string(z.t["Nb2/RE"]);
    return (0, l.jsx)(sH.k, {
        label: z.intl.string(A ? z.t.JPvIiL : z.t.j3XWjD),
        trailing: c(a),
        value: u,
        id: p,
        placeholder: g,
        maxLength: eo.Ign,
        onChange: function (e) {
            (s({ name: (0, s4.A)(e, !1) }), "" !== e ? M.A.startTyping(n.id) : M.A.stopTyping(n.id));
        },
        onBlur: function () {
            let e = (0, s4.A)(u, !0);
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
        A = s.useCallback(() => c(!1), []),
        p = s.useCallback(
            (e, t, l) => {
                (sV.A.saveDraft(n.id, t, iT.C.FirstThreadMessage),
                    i(
                        (e) => (
                            "" !== t && e.textValue !== t ? M.A.startTyping(n.id) : "" === t && M.A.stopTyping(n.id),
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
    ((0, eJ.Vo)({ event: eo.jej.TEXTAREA_FOCUS, handler: h }), (0, eJ.Vo)({ event: eo.jej.TEXTAREA_BLUR, handler: A }));
    let x = (0, m.bG)([lK.A], () => lK.A.can(eo.xBc.ATTACH_FILES, n)),
        f = s9(o, { content: t.textValue });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(sX.A, { channelId: n.id, type: ra, canAttachFiles: x }),
            (0, l.jsx)("div", { className: rs.xN, children: (0, l.jsx)(sB.U, { error: f }) }),
            (0, l.jsx)(sq.Ay, {
                type: ra,
                channel: n,
                placeholder: z.intl.string(z.t.taZfIC),
                textValue: t.textValue,
                richValue: t.richValue,
                focused: d,
                className: a()(rs.gM, rs.Yy),
                innerClassName: a()(rs.SL, { [rs.cr]: null != f }),
                onFocus: h,
                onBlur: A,
                onChange: p,
                onSubmit: g,
                promptToUpload: s7.R,
                setEditorRef: (e) => {
                    u.current = e;
                },
            }),
        ],
    });
}
function rA(e) {
    let { parentChannel: n, parentMessageId: t } = e,
        i = (0, m.bG)([s1.A], () => (null == t ? null : s1.A.getMessage(n.id, t))),
        s = s0.hH.useSetting();
    return null != i
        ? (0, l.jsx)(sQ.A, {
              className: rs.IL,
              message: i,
              channel: n,
              compact: s,
              renderThreadAccessory: !1,
              trackAnnouncementViews: !0,
          })
        : null;
}
var rp = t(494208),
    rg = t(40389),
    rx = t(148494),
    rf = t(56562);
function rE(e) {
    let { channel: n } = e,
        [t, i] = s.useState(!1),
        r = s.useRef(null);
    function a() {
        i((e) => !e);
    }
    let o = z.intl.string(z.t["UKOtz+"]);
    return (0, l.jsx)(nd.Y, {
        targetElementRef: r,
        shouldShow: t,
        animation: nd.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        autoInvert: !1,
        onRequestClose: () => i(!1),
        renderPopout: function (e) {
            return (0, l.jsx)(rI, { ...e, channel: n });
        },
        children: (e, n) => {
            let { isShown: t } = n;
            return (0, l.jsx)(nC.Ay.Icon, {
                ...e,
                ref: r,
                onClick: a,
                tooltip: t ? null : o,
                icon: nA.MoreHorizontalIcon,
                "aria-label": o,
                selected: t,
            });
        },
    });
}
function rI(e) {
    let { channel: n, closePopout: t, onSelect: i } = e,
        s = (0, t2.A)(n),
        r = (0, t6.A)(n),
        a = (0, ie.A)(n.id),
        o = (0, t4.A)(n),
        d = (0, is.A)({ id: n.id, label: z.intl.string(z.t.DQ797g) }),
        c = (0, t3.A)(n),
        h = (0, t7.A)(n),
        A = (0, t5.A)(n, "Toolbar Overflow"),
        p = (0, t9.A)(n),
        g = (0, rg.A)(n),
        x = (0, il.A)(n),
        f = (0, t8.A)(n),
        E = n.isThread()
            ? (0, l.jsx)(na.Dr, {
                  id: "jump-to-top",
                  label: z.intl.string(z.t.nFP4oa),
                  action: function () {
                      rx.A.jumpToMessage({ channelId: n.id, messageId: "0", jumpType: rf.vx.INSTANT });
                  },
              })
            : null,
        I = s0.SY.useSetting(),
        j = (0, m.bG)([lM.A], () => !u().isEmpty(lM.A.getVoiceStatesForChannel(n.id))),
        C = (0, m.bG)([ew.A], () => null != n.parent_id && ew.A.getChannel(n.parent_id)?.type === eo.rbe.GUILD_APP, [
            n.parent_id,
        ]);
    return (0, l.jsxs)(nc.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: t,
        "aria-label": z.intl.string(z.t["1NBjqb"]),
        onSelect: i,
        children: [
            (0, l.jsxs)(na.rX, { children: [A, g] }),
            (0, l.jsxs)(na.rX, {
                children: [
                    E,
                    o,
                    p,
                    a,
                    !I || j || C
                        ? null
                        : (0, l.jsx)(na.Dr, {
                              id: "open",
                              label: z.intl.string(z.t.bX7EaG),
                              action: function () {
                                  (0, ib.JA)(n);
                              },
                          }),
                    f,
                ],
            }),
            (0, l.jsxs)(na.rX, { children: [x, s, r, h] }),
            (0, l.jsxs)(na.rX, { children: [c, d] }),
        ],
    });
}
var rj = t(332456),
    rC = t(806411),
    ry = t(973854),
    rb = t(62502);
function r_(e) {
    var n;
    let i,
        { channelId: r, baseChannelId: a, channelViewSource: o = "Split View" } = e,
        d = (0, m.bG)([ew.A], () => ew.A.getChannel(r)),
        c = (0, m.bG)([ty.A], () => ty.A.getGuild(d?.getGuildId())),
        h = (0, tz.Ay)(d),
        A = (0, tK.Uf)(d);
    ((n = d),
        (i = (0, m.bG)([lM.A], () => null != n && !u().isEmpty(lM.A.getVoiceStatesForChannel(n.id)))),
        s.useEffect(() => {
            i &&
                null != n &&
                (iw.h.dispatch({ type: "SIDEBAR_CLOSE", baseChannelId: n.parent_id }),
                (0, ir.N9)(n, { source: iC.H9.VOICE_AUTO_OPEN }));
        }, [i, n]));
    let p = s.useRef(!1);
    if (
        (s.useEffect(() => {
            if (null == d || p.current) return;
            p.current = !0;
            let e = (0, rj.C)(ew.A.getChannel(d.id), !0);
            ((0, eR.zV)(eo.HAw.CHANNEL_OPENED, { ...e, ...(0, rC.q)(d.id), channel_view: o }),
                (0, ry.A)({ channelId: d.id }));
        }, [d, o]),
        null == d || null == c)
    )
        return null;
    if (null != A) return (0, l.jsx)(t$.A, { guild: c, channelId: A });
    let g = (0, l.jsx)(iN, { channel: d, baseChannelId: a });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ex.A, { channel: d, draftType: iT.C.ChannelMessage }),
            (0, l.jsx)(nC.Ay, {
                toolbar: g,
                "aria-label": z.intl.string(z.t.Pwe8tN),
                children: (0, tX.zF)({
                    channel: d,
                    channelName: h,
                    guild: c,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, j.L3)(e, async () => {
                            let { default: e } = await Promise.all([
                                t.e("926132"),
                                t.e("955557"),
                                t.e("947502"),
                                t.e("965789"),
                                t.e("584615"),
                            ]).then(t.bind(t, 612826));
                            return (n) => (0, l.jsx)(e, { ...n, channel: d });
                        });
                    },
                    handleClick: function () {
                        null != d && (0, ir.iN)(d.id);
                    },
                }),
            }),
            (0, l.jsx)("div", {
                className: rb.T,
                children: (0, l.jsx)(tq.A, { channel: d, guild: c, chatInputType: nk.oU.SIDEBAR }, r),
            }),
        ],
    });
}
var rv = t(210714),
    rN = t(707554),
    rT = t(140735),
    rS = t(590180),
    rR = t(372320),
    rM = t(562153);
let rO = (0, sa.mj)({
    name: "2026-06-user-profile-sidebar-redesign",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function rL(e) {
    return rO.useConfig({ location: e }).enabled;
}
var rP = t(215530),
    rD = t(454719),
    rk = t(736653),
    rw = t(311016),
    rU = t(480335),
    rG = t(713517),
    rF = t(397562),
    rH = t(183555),
    rB = t(718019),
    rV = t(977059),
    rY = t(915614),
    rW = t(308244),
    rz = t(743987),
    rq = t(900179),
    rX = t(946356),
    rK = t(465829),
    r$ = t(35241),
    rQ = t(587168),
    rJ = t(442228),
    rZ = t(744808);
let r0 = (0, sa.mj)({
    kind: "user",
    name: "2026-04-hide-view-full-profile-button",
    defaultConfig: { showButton: !0 },
    variations: { 1: { showButton: !1 } },
});
var r1 = t(827428);
function r2(e) {
    let { type: n, anchor: t } = e;
    return "staple" === n && "bottom" !== t;
}
function r3(e) {
    let { context: n, analyticsLocations: t, profileFrame: i, isRedesignEnabled: s, handleOpenProfile: r } = e,
        { showButton: a } = r0.useConfig({ location: "UserProfileSidebarFooter" });
    if (s && !a) return null;
    function o() {
        (r(), (0, lJ.Wn)({ action: "PRESS_VIEW_PROFILE", analyticsLocations: t, ...n }));
    }
    if (s)
        return (0, l.jsx)("div", {
            className: r1.lS,
            children: (0, l.jsx)(x.$, {
                variant: "secondary",
                size: "md",
                fullWidth: !0,
                text: z.intl.string(z.t["+Xp3hq"]),
                onClick: o,
            }),
        });
    let d = a
        ? (0, l.jsx)("div", {
              className: r1.qr,
              children: (0, l.jsx)(nY.D, {
                  onClick: o,
                  className: r1.wC,
                  children: (0, l.jsx)(_.E, {
                      color: "text-strong",
                      variant: "text-sm/normal",
                      children: z.intl.string(z.t["+Xp3hq"]),
                  }),
              }),
          })
        : null;
    return null != i
        ? (0, l.jsxs)("div", { className: r1.xQ, children: [(0, l.jsx)(rZ.A, { frame: i, filterLayer: r2 }), d] })
        : d;
}
var r7 = t(518477),
    r5 = t(996988),
    r6 = t(207634),
    r9 = t(561419),
    r8 = t(396095);
function r4(e) {
    let { user: n, channel: t, isRedesignEnabled: i } = e,
        r = __OVERLAY__ || !(0, rw.A)(n.id),
        o = (0, lZ.Ay)(n.id),
        d = (0, rk.Ay)(),
        c = s.useRef(Date.now()),
        { analyticsLocations: u } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        h = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rF.A)(u, o, r7.R7.SIDEBAR);
    let m = s.useRef(null),
        { isHoveringOrFocusing: A, isHovering: p } = (0, rG.A)(m);
    function g() {
        (0, nb.openUserProfileModal)({ sourceAnalyticsLocations: u, hideRestrictedProfile: !0, ...h });
    }
    return (0, l.jsx)(P.f5, {
        value: u,
        children: (0, l.jsx)(rH.of, {
            value: h,
            openedAt: c.current,
            fetchStartedAt: o?.fetchStartedAt,
            fetchEndedAt: o?.fetchEndedAt,
            isLoaded: o?.isLoaded,
            children: (0, l.jsxs)(rX.A, {
                ref: m,
                user: n,
                displayProfile: o,
                themeType: r5.d.SIDEBAR,
                themeOverride: d,
                className: i ? a()(r9.BK, "user-profile-sidebar-redesign") : void 0,
                children: [
                    (0, l.jsxs)(tU.d_, {
                        className: i ? r9.BE : void 0,
                        children: [
                            (0, l.jsx)(rQ.A, { children: (0, l.jsx)(r$.A, { user: n }) }),
                            (0, l.jsxs)("div", {
                                className: r9.wx,
                                children: [
                                    (0, l.jsx)(rY.A, {
                                        user: n,
                                        displayProfile: o,
                                        themeType: r5.d.SIDEBAR,
                                        specOverrides: i
                                            ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                            : void 0,
                                        animateOnHoverOrFocusOnly: !A,
                                    }),
                                    (0, l.jsx)(rB.A, {
                                        user: n,
                                        displayProfile: o,
                                        channelId: t.id,
                                        avatarSize: r6.T[r5.d.SIDEBAR].avatarSize,
                                        onOpenProfile: r ? void 0 : g,
                                    }),
                                ],
                            }),
                            (0, l.jsxs)("div", {
                                className: r8.rf,
                                children: [
                                    (0, l.jsx)(rK.Ay, {
                                        user: n,
                                        guildId: t.guild_id,
                                        displayName: rM.Ay.getName(null, t.id, n),
                                        onClickName: r ? void 0 : g,
                                        pronouns: o?.pronouns,
                                        trailing: (0, l.jsx)(rV.A, {
                                            displayProfile: o,
                                            themeType: r5.d.SIDEBAR,
                                            isRedesignEnabled: i,
                                        }),
                                    }),
                                    i
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(rJ.A, {
                                                      userId: n.id,
                                                      userBio: o?.bio,
                                                      isHoveringOrFocusing: A,
                                                      animateOnHoverOrFocusOnly: !0,
                                                      hideRestrictedProfile: !0,
                                                  }),
                                                  (0, l.jsx)(rq.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rz.A, { userId: n.id }),
                                                  }),
                                              ],
                                          })
                                        : (0, l.jsxs)(rX.A.Overlay, {
                                              className: r8.Lw,
                                              children: [
                                                  o?.bio != null &&
                                                      "" !== o.bio &&
                                                      (0, l.jsx)(rq.A, {
                                                          heading: z.intl.string(z.t.ZzAR2Y),
                                                          headingColor: "text-strong",
                                                          children: (0, l.jsx)(rW.A, {
                                                              userBio: o?.bio,
                                                              userId: n.id,
                                                              animateOnHoverOrFocusOnly: !0,
                                                              isHoveringOrFocusing: A,
                                                          }),
                                                      }),
                                                  (0, l.jsx)(rq.A, {
                                                      heading: z.intl.string(z.t["A//N4k"]),
                                                      headingColor: "text-strong",
                                                      children: (0, l.jsx)(rz.A, { userId: n.id }),
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                    !r &&
                        (0, l.jsx)(r3, {
                            handleOpenProfile: g,
                            analyticsLocations: u,
                            context: h,
                            isRedesignEnabled: i,
                        }),
                    o?.profileEffect != null && (0, l.jsx)(rU.A, { skuId: o?.profileEffect?.skuId, isHovering: p }),
                ],
            }),
        }),
    });
}
var ae = t(331322),
    an = t(249790),
    at = t(254828),
    ai = t(783123),
    al = t(966430);
function as(e) {
    let { user: n, channel: t, isRedesignEnabled: i, onHide: r } = e,
        a = (0, lZ.Ay)(n.id),
        o = (0, rk.Ay)(),
        d = (0, m.bG)([lR.A], () => lR.A.isBlocked(n.id)),
        { analyticsLocations: c } = (0, P.Ay)(d ? L.A.BLOCKED_PROFILE_PANEL : L.A.IGNORED_PROFILE_PANEL),
        u = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: t.id });
    (0, rF.A)(c, a, r7.R7.SIDEBAR);
    let h = s.useRef(null);
    return (0, l.jsx)(P.f5, {
        value: c,
        children: (0, l.jsx)(rH.of, {
            value: u,
            fetchStartedAt: a?.fetchStartedAt,
            fetchEndedAt: a?.fetchEndedAt,
            isLoaded: a?.isLoaded,
            children: (0, l.jsx)(rX.A, {
                ref: h,
                user: n,
                displayProfile: a,
                themeType: r5.d.SIDEBAR,
                themeOverride: o,
                className: i ? "user-profile-sidebar-redesign" : void 0,
                children: (0, l.jsx)(tU.d_, {
                    children: (0, l.jsxs)("div", {
                        className: al.kL,
                        children: [
                            (0, l.jsx)("img", {
                                alt: "",
                                src: "/assets/5682f76b7c3741bd.svg",
                                className: al.VH,
                                "aria-hidden": !0,
                            }),
                            (0, l.jsxs)("div", {
                                className: al.rf,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: al.N1,
                                        children: [
                                            (0, l.jsx)(an.A, { user: n }),
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-lg/bold",
                                                children: z.intl.string(z.t.b33pLD),
                                            }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                children: z.intl.format(d ? z.t["8F+WNz"] : z.t["/cZp5s"], {
                                                    username: rM.Ay.getName(t.guild_id, t.id, n),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)(ae.B, {
                                        align: "center",
                                        children: [
                                            (0, l.jsx)(ai.A, {
                                                isBlocked: d,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lJ.Wn)({
                                                            action: d ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
                                                        }));
                                                },
                                            }),
                                            (0, l.jsx)(at.A, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (r(),
                                                        (0, lJ.Wn)({
                                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                            analyticsLocations: c,
                                                            ...u,
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
var ar = t(941143),
    aa = t(717421),
    ao = t(31956),
    ad = t(673843),
    ac = t(594832),
    au = t(321191),
    ah = t(679492),
    am = t(439053),
    aA = t(312381),
    ap = t(657538),
    ag = t(984545),
    ax = t(193738),
    af = t(413737),
    aE = t(394816),
    aI = t(695366),
    aj = t(922590),
    aC = t(821269),
    ay = t(131607),
    ab = t(326084),
    a_ = t(834708),
    av = t(154486);
let aN = (0, sa.mj)({
    name: "2026-10-contextual-referrals-user-dm-sidebar",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var aT = t(158390),
    aS = t(906573);
let aR = new aT.A(30 * ss.A.Millis.SECOND, 5 * ss.A.Millis.MINUTE, !0),
    aM = 0;
async function aO() {
    if (aS.A.shouldFetch() && !(Date.now() < aM)) {
        iw.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_START" });
        try {
            let e = await re.Bo.get({
                url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            (aR.succeed(),
                (aM = 0),
                iw.h.dispatch({
                    type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_SUCCESS",
                    version: String(e.body?.version ?? "0"),
                    targetIds: Array.isArray(e.body?.target_ids) ? e.body.target_ids.map((e) => String(e)) : [],
                }));
        } catch {
            ((aM = Date.now() + aR.fail()),
                iw.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS_FETCH_FAILURE" }));
        }
    }
}
var aL = t(504492);
function aP(e) {
    let { targetUserId: n } = e,
        { isInTreatment: t } = {
            isInTreatment: aN.useConfig({ location: "ContextualReferralUserDMSidebarEmbed" }).showEmbed,
        },
        i = (0, m.bG)([ee.default], () => ee.default.getUser(n) ?? null, [n]),
        r = (0, a_.d)(i),
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
            } = (0, m.cf)([aS.A], () => {
                let n = Number(aS.A.getVersion());
                return {
                    isDismissed: null != e && aS.A.isDismissedFor(e),
                    hasFetched: aS.A.hasFetched(),
                    version: Number.isFinite(n) ? n : 0,
                };
            });
            return (
                s.useEffect(() => {
                    null != e && aO();
                }, [e]),
                {
                    isDismissed: n,
                    hasFetched: t,
                    version: i,
                    dismiss: s.useCallback(() => {
                        null != e &&
                            (aS.A.isDismissedFor(e) ||
                                (iw.h.dispatch({ type: "CONTEXTUAL_REFERRAL_UPSELL_DISMISS", targetId: e }),
                                re.Bo.post({
                                    url: eo.Rsh.CONTEXTUAL_REFERRAL_UPSELL_DISMISSALS,
                                    body: { target_id: e },
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                }).catch(() => {})));
                    }, [e]),
                }
            );
        })(a ? n : null);
    return a && d && !o && null != i ? (0, l.jsx)(aD, { targetUser: i, version: c, onDismiss: u }) : null;
}
function aD(e) {
    let { targetUser: n, version: i, onDismiss: r } = e,
        a = (0, av.p)(n.id),
        [o, d] = (0, ay.RF)(a ? A.M.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR_EMBED : null, i + 1, lL.m.SIDEBAR, !0),
        c = s.useCallback(
            (e) => {
                (d(e), r());
            },
            [d, r],
        ),
        u = s.useCallback(
            (e) => {
                (et.default.track(eo.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: e }),
                    (0, p.openModalLazy)(async () => {
                        let [{ TrialsSharedConfirmationModal: e }, i] = await Promise.all([
                                Promise.resolve().then(t.bind(t, 809813)),
                                (0, ab.xm)([n.id]),
                            ]),
                            s = i.get(n.id) ?? ab.o.FAIL;
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
    return (0, l.jsx)(sf, {
        className: aL.K,
        analyticsLocation: L.A.CONTEXTUAL_REFERRAL_USER_DM_SIDEBAR,
        markAsDismissed: c,
        title: z.intl.string(z.t.KXbhzo),
        body: z.intl.formatToPlainString(z.t.tJvaQ8, { recipientName: h }),
        ctaText: z.intl.string(z.t.JSSBzo),
        onPrimaryAction: u,
    });
}
var ak = t(93246),
    aw = t(351906),
    aU = t(383199),
    aG = t(559506),
    aF = t(361311),
    aH = t(931481),
    aB = t(791556),
    aV = t(501193),
    aY = t(383448),
    aW = t(646986),
    az = t(243166),
    aq = t(62010),
    aX = t(123292),
    aK = t(840411);
let a$ = (0, sa.mj)({
    name: "2026-07-smag-dm-sidebar-nitro-recommendation",
    kind: "user",
    defaultConfig: { isEnabled: !1 },
    variations: { 0: { isEnabled: !1 }, 1: { isEnabled: !0 } },
});
var aQ = t(666810),
    aJ = t(394300),
    aZ = t(575593),
    a0 = t(498032),
    a1 = t(44120),
    a2 = t(75678),
    a3 = t(317560),
    a7 = t(99161),
    a5 = t(661492),
    a6 = t(146423),
    a9 = t(662349),
    a8 = t(479026),
    a4 = t(636374),
    oe = t(699976),
    on = t(202541),
    ot = t(733484),
    oi = t(880465);
function ol(e) {
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
            onPurchaseClick: m,
            renderChildren: A,
            isNew: p,
        } = e,
        { trackUserProfileWishlistAction: g } = (0, rH.NJ)(),
        x = rL("DMSidePanelWishlistItemCard") ? oe.y.SIZE_78 : oe.y.SIZE_90,
        f = oe.Z[x],
        E = s.useCallback(() => {
            (g({
                action: r7.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                h());
        }, [t, r, h, g]),
        I = s.useCallback(() => {
            (g({
                action: r7.Mq.PRESS_WISHLIST_BREADCRUMB_CARD,
                skuId: t.id,
                wishlistId: r,
                productLines: new Set([t.productLine]),
            }),
                m());
        }, [m, t.id, r, t.productLine, g]),
        {
            onBodyClick: j,
            onOverlayClick: C,
            showOverlayButton: y,
            routesToGift: b,
            label: _,
            icon: v,
        } = (0, a4.P)({ wishlistOwner: i, isOwned: !1, shortText: !0, onDetailsClick: E, onPurchaseClick: I }),
        [N, T] = s.useState(!1);
    return (0, l.jsx)("div", {
        className: ot.kL,
        children: (0, l.jsxs)(a6.A, {
            disableHoverOrFocus: !0,
            disableRiveHover: u,
            sku: t,
            user: i,
            spec: f,
            cardStyle: a()(ot.Nr, o),
            skuPreviewStyle: a()(ot.ho, d),
            skuAssetClassName: N ? c : void 0,
            onClick: j,
            "aria-label":
                ((n = b ? (0, a5.T)(t) : z.intl.formatToPlainString(z.t.ZBB4Ty, { productName: (0, a5.T)(t) })),
                !0 === p ? z.intl.formatToPlainString(z.t.s9RZ1r, { label: n }) : n),
            onHoverOrFocusChange: T,
            children: [
                !0 === p && (0, l.jsx)(a0.N, { className: ot.Pf }),
                y &&
                    (0, l.jsx)(a9.A, {
                        spec: f,
                        onClick: C,
                        isHoveringOrFocusing: N,
                        label: _,
                        icon: _.length < 6 ? v : void 0,
                    }),
                A?.(y && N),
            ],
        }),
    });
}
function os(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        { analyticsLocations: a } = (0, P.Ay)(
            ...(i ?? []),
            L.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
        ),
        o = s.useCallback(() => {
            (0, a7.a)(
                n,
                { isGift: !0, giftRecipient: t, giftingOrigin: on.vQ.USER_PROFILE_WISHLIST },
                { analyticsLocations: a },
            );
        }, [n, t, a]),
        d = s.useCallback(() => {
            (0, a3.R)({
                skuId: n.id,
                applicationId: n.applicationId,
                isStorefront: !1,
                giftRecipient: t,
                giftingOrigin: on.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: a,
            });
        }, [n.id, n.applicationId, t, a]);
    return (0, l.jsx)(ol, {
        sku: n,
        analyticsLocations: a,
        wishlistOwner: t,
        onDetailsClick: d,
        onPurchaseClick: o,
        ...r,
    });
}
function or(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, ...r } = e,
        o = s.useCallback(() => {
            (0, a1.A)({
                skuId: n.id,
                isGift: !0,
                giftingOrigin: on.vQ.USER_PROFILE_WISHLIST,
                analyticsLocations: i ?? [],
                giftRecipient: t,
            });
        }, [n.id, t, i]),
        d = (0, a8.e)({ sku: n, giftRecipient: t, giftingOrigin: on.vQ.USER_PROFILE_WISHLIST, analyticsLocations: i }),
        c = s.useMemo(
            () =>
                a()(ot.ML, {
                    [ot.M]: n?.tenantMetadata?.collectibles?.type === aZ.R.AVATAR_DECORATION,
                    [ot.Hm]: n?.tenantMetadata?.collectibles?.type === aZ.R.PROFILE_EFFECT,
                    [ot.hH]: n?.tenantMetadata?.collectibles?.type === aZ.R.PROFILE_FRAME,
                    [ot.qF]: n?.tenantMetadata?.collectibles?.type === aZ.R.NAMEPLATE,
                    [ot.l2]: n?.tenantMetadata?.collectibles?.type === aZ.R.BUNDLE,
                }),
            [n?.tenantMetadata?.collectibles?.type],
        );
    return (0, l.jsx)(ol, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        onDetailsClick: d,
        onPurchaseClick: o,
        skuPreviewStyle: c,
        ...r,
    });
}
function oa(e) {
    let { sku: n, wishlistOwner: t, analyticsLocations: i, source: r, style: o, ...d } = e,
        c = s.useCallback(() => {
            let e = n.id;
            (0, a2.A)({
                isGift: !0,
                giftRecipient: t,
                giftingOrigin: on.vQ.USER_PROFILE_WISHLIST,
                subscriptionTier: e,
                analyticsLocations: i ?? [],
            });
        }, [n.id, t, i]),
        u = r === ac.uS.POPULAR,
        h = z.intl.string(z.t.HbJ7eD);
    return (0, l.jsx)(ol, {
        sku: n,
        wishlistOwner: t,
        analyticsLocations: i,
        source: r,
        onDetailsClick: c,
        onPurchaseClick: c,
        skuPreviewStyle: a()(oi.MO, { [ot.F5]: u }),
        style: o,
        disableRiveHover: !0,
        renderChildren: (e) =>
            u
                ? (0, l.jsx)("div", {
                      className: a()(ot.fi, { [ot.sp]: e }),
                      children: (0, l.jsx)(_.E, {
                          className: a()(ot.p7, { [ot.SW]: h.length >= 10, [ot.ot]: h.length >= 12 }),
                          variant: "text-xs/bold",
                          lineClamp: 1,
                          children: h,
                      }),
                  })
                : null,
        ...d,
    });
}
function oo(e) {
    let { sku: n, ...t } = e;
    switch (n.productLine) {
        case eo.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, l.jsx)(os, { sku: n, ...t });
        case eo.EZt.COLLECTIBLES:
            return (0, l.jsx)(or, { sku: n, ...t });
        case eo.EZt.PREMIUM:
            return (0, l.jsx)(oa, { sku: n, ...t });
        default:
            return null;
    }
}
var od = t(158045),
    oc = t(249203),
    ou = t(919769),
    oh = t(695904),
    om = t(116331),
    oA = t(713348),
    op = t(535089),
    og = t(815637);
function ox(e) {
    let { unownedWishlistItems: n, profileOwner: t, onClick: i, wishlistId: r, isNitroRecEnabled: a } = e,
        { analyticsLocations: o } = (0, P.Ay)(),
        { trackUserProfileAction: d, trackUserProfileWishlistAction: c } = (0, rH.NJ)(),
        u = (0, s.useId)(),
        { hasNewWishlistItems: h, newWishlistItemCount: A, shouldLogExposure: p } = (0, om.A)(t),
        g = (0, m.bG)([oc.A], () => oc.A.getEntry(t.id)?.lastViewedAt ?? null, [t.id]),
        x = (0, s.useCallback)(() => {
            (h && d({ action: "PRESS_NEW_CONTENT_WISHLIST", section: r7.RP.WISHLIST }), i());
        }, [h, i, d]),
        f = (0, s.useMemo)(() => n ?? [], [n]),
        E = (0, s.useCallback)(
            (e) => {
                let { wishlistId: n, action: t, productLines: i } = e;
                null != n && c({ wishlistId: n, action: t, productLines: i });
            },
            [c],
        ),
        I = (0, s.useMemo)(() => {
            let e = f.slice(0, 3).map((e) => ({ item: e, source: ac.uS.WISHLIST }));
            if (a && e.length < 3) {
                let n = f.some((e) => od.Ay.isPremiumSku(e.skuId));
                if (!od.Ay.isPremiumAtLeast(t.premiumType, on.PremiumTypes.TIER_2) && !n) {
                    let n = aJ.A.fromSKU((0, aK.rI)());
                    null != n && e.push({ item: n, source: ac.uS.POPULAR });
                }
            }
            return e;
        }, [f, a, t.premiumType]),
        j = (0, s.useMemo)(
            () =>
                new Set(
                    I.map((e) => {
                        let { item: n } = e;
                        return n.skuProductLine;
                    }),
                ),
            [I],
        ),
        C = (0, op.A)({ wishlistId: r ?? null, onAction: E, productLines: j }),
        y = (0, s.useMemo)(
            () =>
                I.map((e, n) => {
                    let { item: i, source: s } = e;
                    return null == i.sku
                        ? null
                        : (0, l.jsx)(
                              oo,
                              {
                                  sku: i.sku,
                                  index: n,
                                  wishlistOwner: t,
                                  wishlistId: r,
                                  analyticsLocations: o,
                                  onViewWishlist: x,
                                  source: s,
                                  isNew: h && (0, ou.f3)(i.addedAt, g),
                              },
                              i.skuId,
                          );
                }).filter(sC.Vq),
            [o, x, t, I, r, h, g],
        ),
        b = h && y.length > 0,
        _ = (0, s.useRef)(!1);
    return ((0, s.useEffect)(() => {
        b && !_.current && ((_.current = !0), d({ action: "VIEW_NEW_CONTENT_SIDEBAR" }));
    }, [b, d]),
    0 === y.length)
        ? null
        : (0, l.jsx)("section", {
              "aria-labelledby": u,
              children: (0, l.jsxs)(rX.A.Overlay, {
                  ref: C,
                  className: og.kL,
                  children: [
                      p && (0, l.jsx)(oh.kM, { location: "UserProfileSidebarWishlistBreadcrumb" }),
                      (0, l.jsxs)("div", {
                          className: og.wx,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: og.qd,
                                  children: [
                                      (0, l.jsx)(R.D, {
                                          variant: "text-sm/medium",
                                          id: u,
                                          children: z.intl.string(z.t["7lZ31J"]),
                                      }),
                                      h &&
                                          (0, l.jsx)(aq.E, {
                                              type: { text: z.intl.formatToPlainString(z.t.akCCqu, { count: A }) },
                                              variant: "primary",
                                          }),
                                  ],
                              }),
                              (f.length > 3 || h) &&
                                  (0, l.jsx)(aX.Q, {
                                      variant: "secondary",
                                      textVariant: "text-xs/normal",
                                      onClick: x,
                                      text: z.intl.string(z.t.y6PSA3),
                                  }),
                          ],
                      }),
                      (0, l.jsx)(rN.F, { children: (0, l.jsx)("div", { className: og.vY, children: y }) }),
                  ],
              }),
          });
}
function of(e) {
    let { isLoading: n, unownedWishlistItems: t, canSeeWishlist: i = !1, ...s } = e,
        r = a$.useConfig({ location: "UserProfileSidebarWishlistBreadcrumb" }).isEnabled && i;
    if (((0, oA.A)(s.profileOwner), n || s.profileOwner.bot || ((null == t || 0 === t.length) && !r))) return null;
    let a = ee.default.getCurrentUser()?.id,
        o = null != a && a !== s.profileOwner.id;
    return (0, l.jsx)(aQ.h, {
        isGifting: o,
        location: "UserProfileSidebarWishlistBreadcrumb",
        children: (0, l.jsx)(ox, { ...s, unownedWishlistItems: t, isNitroRecEnabled: r }),
    });
}
function oE(e) {
    let {
            user: n,
            currentUser: t,
            displayProfile: i,
            channel: r,
            isHoveringOrFocusing: a,
            isRedesignEnabled: o,
            onOpenProfile: d,
        } = e,
        { relationshipType: c, originApplicationId: u } = (0, m.cf)([lR.A], () => ({
            relationshipType: lR.A.getRelationshipType(n.id),
            originApplicationId: lR.A.getOriginApplicationId(n.id),
        })),
        h = (0, aj.fi)(n.id),
        A = (0, aC.q)({ userId: n.id }),
        p = (0, m.bG)([aw.A], () => aw.A.hidePersonalInformation),
        g = (0, m.bG)([au.A], () => au.A.getUserProfile(n.id)?.application),
        x = i?.widgets != null && i.widgets.length > 0,
        { defaultWishlistId: f } = (0, m.cf)([au.A], () => ({ defaultWishlistId: au.A.getFirstWishlistId(n.id) })),
        { wishlist: E, isFetching: I } = (0, ac.fw)({ wishlistId: o ? f : void 0, userId: n.id });
    (0, ad.A)(E);
    let j = s.useMemo(() => E?.items.filter((e) => !e.isOwned) ?? null, [E]);
    return (0, l.jsxs)("div", {
        className: r8.rf,
        children: [
            (0, l.jsx)(aG.A, { userId: n.id }),
            (0, l.jsxs)("div", {
                className: r8.pq,
                children: [
                    (0, l.jsx)(rK.Ay, {
                        user: n,
                        guildId: r.guild_id,
                        displayName: rM.Ay.getName(null, r.id, n),
                        onClickName: d,
                        displayNameTrailing: p
                            ? null
                            : (0, l.jsx)(az.A, { userId: n.id, isVisible: a, onOpenProfile: d }),
                        pronouns: i?.pronouns,
                        trailing: (0, l.jsx)(rV.A, {
                            displayProfile: i,
                            themeType: r5.d.SIDEBAR,
                            isRedesignEnabled: o,
                        }),
                    }),
                    o && (0, l.jsx)(aB.A, { user: n, onOpenProfile: (e) => d?.({ tabSection: e }) }),
                ],
            }),
            c === eo.eA$.PENDING_INCOMING &&
                (0, l.jsx)(rX.A.Overlay, {
                    children: (0, l.jsx)(aH.A, { user: n, channelId: r.id, applicationId: u }),
                }),
            h.map((e) =>
                (0, l.jsx)(
                    rX.A.Overlay,
                    {
                        children: (0, l.jsx)(aH.A, {
                            user: n,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: r.id,
                        }),
                    },
                    e.applicationId,
                ),
            ),
            (0, l.jsx)(aY.A, { user: n }),
            i?.private &&
                (0, l.jsx)(rX.A.Overlay, { children: (0, l.jsx)(aV.A, { username: rM.Ay.getName(null, r.id, n) }) }),
            n.isProvisional &&
                (0, l.jsx)(rX.A.Overlay, {
                    className: r8.Lw,
                    children: (0, l.jsx)(rq.A, {
                        heading: z.intl.string(z.t.Iyka0U),
                        headingIcon: aI.E,
                        headingColor: "text-strong",
                        children: (0, l.jsx)(ak.T, { userId: n.id }),
                    }),
                }),
            o &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(rJ.A, {
                            userId: n.id,
                            userBio: i?.bio,
                            hidePersonalInformation: p,
                            isHoveringOrFocusing: a,
                            animateOnHoverOrFocusOnly: !0,
                            hideRestrictedProfile: !0,
                        }),
                        (0, l.jsx)(rq.A, {
                            heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                            headingColor: "text-strong",
                            children: (0, l.jsx)(rz.A, { userId: n.id }),
                        }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: r8.kR,
                children: [
                    o && x && (0, l.jsx)(ap.A, { user: n, widgets: i?.widgets, onOpenUserProfileModal: d }),
                    (0, l.jsx)(aW.A, { user: n, currentUser: t, onOpenUserProfileModal: d }),
                    o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  g?.popularApplicationCommandIds != null &&
                                      (0, l.jsx)(aU.A, {
                                          applicationId: g.id,
                                          commandIds: g.popularApplicationCommandIds,
                                          channel: r,
                                      }),
                                  A.length > 0 &&
                                      (0, l.jsx)(rq.A, {
                                          heading: z.intl.string(z.t["Uv/eTx"]),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(aF.A, { applicationIds: A }),
                                      }),
                              ],
                          })
                        : (0, l.jsxs)(rX.A.Overlay, {
                              className: r8.Lw,
                              children: [
                                  !p &&
                                      i?.bio != null &&
                                      "" !== i.bio &&
                                      (0, l.jsx)(rq.A, {
                                          heading: z.intl.string(z.t.ZzAR2Y),
                                          headingColor: "text-strong",
                                          children: (0, l.jsx)(rW.A, {
                                              userId: n.id,
                                              userBio: i.bio,
                                              isHoveringOrFocusing: a,
                                              animateOnHoverOrFocusOnly: !0,
                                          }),
                                      }),
                                  (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          g?.popularApplicationCommandIds != null &&
                                              (0, l.jsx)(aU.A, {
                                                  applicationId: g.id,
                                                  commandIds: g.popularApplicationCommandIds,
                                                  channel: r,
                                              }),
                                          A.length > 0 &&
                                              (0, l.jsx)(rq.A, {
                                                  heading: z.intl.string(z.t["Uv/eTx"]),
                                                  headingColor: "text-strong",
                                                  children: (0, l.jsx)(aF.A, { applicationIds: A }),
                                              }),
                                          (0, l.jsx)(rq.A, {
                                              heading: n.bot ? z.intl.string(z.t["A//N4k"]) : z.intl.string(z.t.a6XYD9),
                                              headingColor: "text-strong",
                                              children: (0, l.jsx)(rz.A, { userId: n.id }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                    o &&
                        (0, l.jsx)(of, {
                            profileOwner: n,
                            unownedWishlistItems: j,
                            wishlistId: f,
                            isLoading: I,
                            onClick: () => {
                                d?.({ tabSection: r7.RP.WISHLIST });
                            },
                            canSeeWishlist: null != E,
                        }),
                    r.isDM() && (0, l.jsx)(aP, { targetUserId: n.id }),
                ],
            }),
        ],
    });
}
var oI = t(114212),
    oj = t(913453),
    oC = t(229187),
    oy = t(21241),
    ob = t(503062),
    o_ = t(51943),
    ov = t(847374),
    oN = t(320448),
    oT = t(723200);
function oS(e) {
    let { section: n, header: t, items: i, listClassName: r, onExpand: o } = e,
        { trackUserProfileAction: d } = (0, rH.NJ)(),
        c = s.useId(),
        [u, h] = s.useState(!1),
        m = u ? ov.a : oN._;
    return (0, l.jsxs)("section", {
        className: oT.uW,
        children: [
            (0, l.jsxs)(nY.D, {
                className: a()(oT.wx, oT.vk),
                "aria-controls": c,
                "aria-expanded": u,
                onClick: () => {
                    (h(!u), u || (d({ action: "PRESS_SECTION", section: n }), o?.()));
                },
                children: [
                    (0, l.jsxs)(R.D, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [t, " \u2014 ", i.length],
                    }),
                    (0, l.jsx)(m, { size: "md" }),
                ],
            }),
            i.length > 0 && (0, l.jsx)("ul", { id: c, hidden: !u, className: a()(oT.p_, r), children: i }),
        ],
    });
}
var oR = t(341278);
function oM(e) {
    let { user: n, channelId: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(),
        { context: s } = (0, rH.NJ)(),
        r = (0, t1.A)(),
        { mutualFriendsCount: a, mutualFriends: o, mutualGuilds: d } = (0, oj.A)(n),
        c = !n.bot && null != a && a > 0,
        u = null != d && d.length > 0;
    return c || u
        ? (0, l.jsxs)(rX.A.Overlay, {
              className: oR.Lw,
              children: [
                  u &&
                      (0, l.jsx)(oS, {
                          section: "MUTUAL_GUILDS",
                          header: z.intl.string(z.t["4lTDZq"]),
                          listClassName: oR.p_,
                          items: d.map((e) => {
                              let { guild: t, nick: i } = e;
                              return (0, l.jsx)(
                                  o_.A,
                                  { user: n, guild: t, nick: i, onSelect: () => (0, tC.u)(t.id) },
                                  t.id,
                              );
                          }),
                      }),
                  u && c && (0, l.jsx)(oy.A, { className: oR.yF }),
                  c &&
                      (0, l.jsx)(oS, {
                          section: "MUTUAL_FRIENDS",
                          header: z.intl.string(z.t["0mTJ3j"]),
                          listClassName: oR.p_,
                          onExpand: () => (0, oC.A)(n.id, r),
                          items:
                              null == o
                                  ? Array.from({ length: a }).map((e, n) =>
                                        (0, l.jsxs)(
                                            "div",
                                            {
                                                className: oR.nC,
                                                children: [
                                                    (0, l.jsx)(oI.FQ, { width: 40, opacity: 0.08 }),
                                                    (0, l.jsx)(oI.FQ, { width: 135, opacity: 0.08 }),
                                                ],
                                            },
                                            n,
                                        ),
                                    )
                                  : o.map((e) => {
                                        let { key: n, user: r, status: a } = e;
                                        return (0, l.jsx)(
                                            ob.A,
                                            {
                                                user: r,
                                                status: a,
                                                channelId: t,
                                                onSelect: () => {
                                                    (0, nb.openUserProfileModal)({
                                                        ...s,
                                                        userId: r.id,
                                                        sourceAnalyticsLocations: i,
                                                    });
                                                },
                                            },
                                            n,
                                        );
                                    }),
                      }),
              ],
          })
        : null;
}
function oO(e) {
    let { user: n, currentUser: t, channel: i, isRedesignEnabled: r } = e,
        o = __OVERLAY__,
        d = (0, lZ.Ay)(n.id),
        c = (0, rk.Ay)(),
        u = s.useRef(void 0),
        h = s.useRef(void 0);
    h.current !== n.id && ((h.current = n.id), (u.current = Date.now()));
    let { analyticsLocations: A } = (0, P.Ay)(L.A.USER_PROFILE_SIDEBAR),
        p = (0, rH.pb)({ layout: "SIDEBAR", userId: n.id, channelId: i.id });
    (0, rF.A)(A, d, r7.R7.SIDEBAR);
    let g = s.useRef(null),
        { isHoveringOrFocusing: x, isHovering: f } = (0, rG.A)(g),
        E = (0, ah.fC)(),
        I = (0, rR.A)(d?.profileFrame?.skuId);
    (0, ao.A)({ skuId: d?.profileFrame?.skuId, openedAt: u.current, context: p, analyticsLocations: A });
    let j = (0, aa.z)({ opacity: +(null != E.interactionType), config: { duration: 150 } });
    function C(e) {
        (0, nb.openUserProfileModal)({ sourceAnalyticsLocations: A, hideRestrictedProfile: !0, ...p, ...e });
    }
    let y = d?.widgets != null && d.widgets.length > 0,
        { defaultWishlistId: b } = (0, m.cf)([au.A], () => ({ defaultWishlistId: au.A.getFirstWishlistId(n.id) })),
        { wishlist: _, isFetching: v } = (0, ac.fw)({ wishlistId: r ? void 0 : b, userId: n.id });
    (0, ad.A)(_);
    let N = s.useMemo(() => (null == _ ? null : _.items.filter((e) => !e.isOwned)), [_]);
    return (0, l.jsx)(P.f5, {
        value: A,
        children: (0, l.jsx)(rH.of, {
            value: p,
            openedAt: u.current,
            fetchStartedAt: d?.fetchStartedAt,
            fetchEndedAt: d?.fetchEndedAt,
            isLoaded: d?.isLoaded,
            children: (0, l.jsx)(ah.Hl, {
                value: E,
                children: (0, l.jsxs)(rX.A, {
                    ref: g,
                    user: n,
                    displayProfile: d,
                    themeType: r5.d.SIDEBAR,
                    themeOverride: c,
                    profileFrameSkuIdOverride: r ? d?.profileFrame?.skuId : null,
                    className: r ? a()(r9.BK, "user-profile-sidebar-redesign") : void 0,
                    isPrivate: d?.private === !0,
                    children: [
                        d?.private === !0 && (0, l.jsx)(aA.A, {}),
                        null != E.interactionType && (0, l.jsx)(ar.animated.div, { style: j, className: r9.tB }),
                        (0, l.jsxs)(tU.d_, {
                            className: a()(r && r9.BE, !r && null != I && r9.It),
                            children: [
                                (0, l.jsxs)(rQ.A, {
                                    children: [
                                        (0, l.jsx)(ax.A, { user: n, themeType: r5.d.SIDEBAR }),
                                        n.bot ? (0, l.jsx)(ag.A, { user: n }) : (0, l.jsx)(af.yo, { user: n }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: r9.wx,
                                    children: [
                                        (0, l.jsx)(rY.A, {
                                            user: n,
                                            displayProfile: d,
                                            themeType: r5.d.SIDEBAR,
                                            specOverrides: r
                                                ? { bannerWidth: 300, bannerHeight: 105, themePadding: 2 }
                                                : void 0,
                                            animateOnHoverOrFocusOnly: !x,
                                            className: r9.vK,
                                        }),
                                        (0, l.jsx)(am.A, { className: r9.oR }),
                                        (0, l.jsx)(rB.A, {
                                            user: n,
                                            displayProfile: d,
                                            channelId: i.id,
                                            avatarSize: r6.T[r5.d.SIDEBAR].avatarSize,
                                            onOpenProfile: o ? void 0 : C,
                                        }),
                                        (0, l.jsx)(aE.A, {
                                            user: n,
                                            channelId: i.id,
                                            themeType: r5.d.SIDEBAR,
                                            disableToolbar: n.bot,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(oE, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: d,
                                    channel: i,
                                    isHoveringOrFocusing: null == E.interactionType && x,
                                    isRedesignEnabled: r,
                                    onOpenProfile: o ? void 0 : C,
                                }),
                                !r &&
                                    y &&
                                    (0, l.jsx)("div", {
                                        className: r9.sJ,
                                        children: (0, l.jsx)(ap.A, {
                                            user: n,
                                            widgets: d.widgets,
                                            onOpenUserProfileModal: C,
                                        }),
                                    }),
                                !r &&
                                    (0, l.jsx)("div", {
                                        className: r9.vS,
                                        children: (0, l.jsx)(of, {
                                            profileOwner: n,
                                            unownedWishlistItems: N,
                                            wishlistId: b,
                                            isLoading: v,
                                            onClick: () => {
                                                C?.({ tabSection: r7.RP.WISHLIST });
                                            },
                                            canSeeWishlist: null != _,
                                        }),
                                    }),
                                !r && (0, l.jsx)(oM, { user: n, channelId: i.id }),
                            ],
                        }),
                        !o &&
                            (0, l.jsx)(r3, {
                                context: p,
                                analyticsLocations: A,
                                profileFrame: I,
                                handleOpenProfile: C,
                                isRedesignEnabled: r,
                            }),
                        d?.profileEffect != null && (0, l.jsx)(rU.A, { skuId: d?.profileEffect?.skuId, isHovering: f }),
                        r && null != I && (0, l.jsx)(rZ.A, { frame: I, fadeIn: !1 }),
                    ],
                }),
            }),
        }),
    });
}
var oL = t(901600);
function oP(e) {
    let { channel: n } = e,
        [t] = n.recipients,
        i = (0, m.bG)([ee.default], () => ee.default.getUser(t)),
        r = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
        a = l0(),
        [o, d] = (0, rP.A)(t),
        [c, u] = s.useState(!1),
        h = rL("UserProfileSidebarRenderer"),
        A = (0, lZ.Ay)(t),
        p = A?.profileFrame?.skuId,
        g = (0, rR.A)(p),
        x = (0, m.bG)([rS.A], () => rS.A.getProductFetch(p));
    if (
        (s.useEffect(() => {
            let e = {
                type: "sidebar",
                withMutualFriendsCount: i?.bot !== !0,
                withMutualFriends: i?.bot !== !0 && h,
                withMutualGuilds: !0,
                channelId: n.id,
            };
            null != i ? (0, rD.A)(i, e) : (0, rD.A)(t, void 0, e);
        }, [i, t, n.id, h]),
        null == i ||
            null == r ||
            !a ||
            (h && !c && A?.isLoaded !== !0) ||
            (h && !c && null != p && p !== g?.skuId && x?.state !== "success" && x?.state !== "error"))
    )
        return null;
    c || u(!0);
    let f = `user-profile-sidebar-heading-${i.id}`,
        E = rM.Ay.getName(null, n.id, i);
    return (0, l.jsx)("aside", {
        "aria-labelledby": f,
        className: h ? oL.H : void 0,
        children: (0, l.jsx)(rN.F, {
            component: (0, l.jsx)(rT.A, {
                children: (0, l.jsx)(rN.H, { id: f, children: z.intl.format(z.t.KRe1Fk, { name: E }) }),
            }),
            children:
                null == i || null == r
                    ? null
                    : o
                      ? (0, l.jsx)(as, { user: i, currentUser: r, onHide: d, isRedesignEnabled: h, ...e })
                      : i.isNonUserBot()
                        ? (0, l.jsx)(r4, { user: i, currentUser: r, isRedesignEnabled: h, ...e })
                        : (0, l.jsx)(oO, { user: i, currentUser: r, isRedesignEnabled: h, ...e }),
        }),
    });
}
var oD = t(522556),
    ok = t(225315),
    ow = t(684407),
    oU = t(95701),
    oG = t(919638),
    oF = t(763827),
    oH = t(812771),
    oB = t(506309),
    oV = t(598748),
    oY = t(681154),
    oW = t(975460),
    oz = t(587895),
    oq = t(429913),
    oX = t(201718),
    oK = t(339580),
    o$ = t(633075),
    oQ = t(903209),
    oJ = t(382483),
    oZ = t(385113);
let o0 = s.createContext({ markAsVisible: () => {}, useInjectEntriesWithPreviewData: (e) => e });
function o1(e) {
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
                            A,
                            p,
                            g,
                            x,
                            f,
                            E,
                            { appsWithConfigs: I, isLoadingConfigs: j } =
                                ((t = s0.Q_.useSetting()),
                                s.useEffect(() => {
                                    (0, oJ.Wq)().catch(() => {});
                                }, []),
                                s.useEffect(() => {
                                    t && (0, oJ.i$)().catch(() => {});
                                }, [t]),
                                (i = (0, m.bG)([oZ.A], () => oZ.A.getFeaturedFetchState())),
                                (l = (0, m.bG)([oZ.A], () => oZ.A.getDeveloperFetchState())),
                                (r = (0, m.yK)([oZ.A], () => oZ.A.getFeaturedApplicationIds())),
                                (a = (0, m.yK)([oZ.A], () => oZ.A.getDeveloperApplicationIds())),
                                {
                                    appsWithConfigs: s.useMemo(() => new Set([...r, ...a]), [r, a]),
                                    isLoadingConfigs:
                                        i === oZ.e.NOT_FETCHED ||
                                        i === oZ.e.FETCHING ||
                                        (t && (l === oZ.e.NOT_FETCHED || l === oZ.e.FETCHING)),
                                }),
                            {
                                widgetApps: C,
                                userIdsWhoMightHaveWidgetData: y,
                                isFetchingApplications: b,
                            } = ((o = s.useMemo(
                                () =>
                                    e
                                        ?.filter((e) => e.content_type === oY.ContentInventoryEntryType.PLAYED_GAME)
                                        .filter((e) => n.has(e.id)) ?? [],
                                [e, n],
                            )),
                            (d = s.useMemo(() => [...new Set(o.map((e) => e.extra.application_id))], [o])),
                            (c = (0, m.bG)(
                                [oz.A],
                                () =>
                                    d.length > 0 &&
                                    d.some(
                                        (e) =>
                                            oz.A.isFetchingApplication(e) ||
                                            (null == oz.A.getApplication(e) && !oz.A.didFetchingApplicationFail(e)),
                                    ),
                            )),
                            (u = (0, oq.A)(d)),
                            (h = s.useMemo(
                                () =>
                                    Object.fromEntries(
                                        u
                                            .filter(sC.Vq)
                                            .map((e) => [e.id, (0, oW.t)(e)])
                                            .filter(sC.QE)
                                            .filter((e) => {
                                                let [n, t] = e;
                                                return I.has(t.id);
                                            }),
                                    ),
                                [I, u],
                            )),
                            (A = s.useMemo(
                                () => [
                                    ...new Set(o.filter((e) => e.extra.application_id in h).map((e) => e.author_id)),
                                ],
                                [o, h],
                            )),
                            { widgetApps: h, userIdsWhoMightHaveWidgetData: A, isFetchingApplications: c }),
                            { identitiesByUserId: _, isLoadingIdentities: v } =
                                ((p = (0, m.cf)([oK.A], () =>
                                    Object.fromEntries(y.map((e) => [e, oK.A.getUserIdentities(e)]).filter(sC.QE)),
                                )),
                                (g = (0, m.bG)([oK.A], () =>
                                    y.some((e) => oK.A.getFetchState(e) === oK.e.NOT_FETCHED || oK.A.isFetchingUser(e)),
                                )),
                                s.useEffect(() => {
                                    y.length > 0 && oX.P.fetchMany(...y.map((e) => [e]));
                                }, [y]),
                                { identitiesByUserId: p, isLoadingIdentities: g }),
                            { profilesByUserId: N, isLoadingProfiles: T } =
                                ((x = (0, m.cf)([au.A], () =>
                                    Object.fromEntries(y.map((e) => [e, au.A.getUserProfile(e) ?? null]).filter(sC.QE)),
                                )),
                                (f = (0, m.yK)([au.A], () =>
                                    y.filter((e) => null == au.A.getUserProfile(e) && !au.A.isFetchingProfile(e)),
                                )),
                                (E = (0, m.bG)([au.A], () => y.some((e) => au.A.isFetchingProfile(e)))),
                                s.useEffect(() => {
                                    for (let e of f) (0, oQ.A)(e);
                                }, [f]),
                                { profilesByUserId: x, isLoadingProfiles: f.length > 0 || E }),
                            S = (0, m.cf)(
                                [oZ.A],
                                () => Object.fromEntries([...I].map((e) => [e, oZ.A.getConfig(e)]).filter(sC.QE)),
                                [I],
                            ),
                            R = j || b || v || T,
                            M = s.useMemo(() => {
                                if (!R && void 0 !== e)
                                    return e.map((e) => {
                                        if (e.content_type !== oY.ContentInventoryEntryType.PLAYED_GAME) return e;
                                        let n = C[e.extra.application_id] ?? null;
                                        if (null == n) return e;
                                        let t = S[n.id] ?? null;
                                        if (null == t || null == t.surfaces[oV.m.ACTIVITY_ACCESSORY]) return e;
                                        let i = _[e.author_id]?.find((e) => e.application_id === n.id) ?? null;
                                        if (i?.profile == null) return e;
                                        let l = N[e.author_id]?.widgets?.some((e) => (0, o$.E)(e, n.id)) ?? !1;
                                        return {
                                            ...e,
                                            applicationWidgetPreview: { widgetApplicationId: n.id, hasWidget: l },
                                        };
                                    });
                            }, [R, e, C, S, _, N]),
                            [O, L] = s.useState(M);
                        return (
                            s.useEffect(() => {
                                R || L(M);
                            }, [R, M]),
                            O
                        );
                    })(e, n),
            }),
            [i, n],
        );
    return (0, l.jsx)(o0.Provider, { value: r, children: e.children });
}
var o2 = t(900797),
    o3 = t(890856),
    o7 = t(180170),
    o5 = t(435738),
    o6 = t(38055);
let o9 = "content-inventory-feed",
    o8 = `${o9}-settings`,
    o4 = `${o9}-toggle`;
var de = t(569709);
function dn(e) {
    return !e.currentTarget.contains(e.target);
}
let dt = s.memo(function (e) {
        let n,
            { title: i, onToggleExpand: r, expanded: o, expandedCount: d } = e,
            u = (0, m.bG)([o5.A], () => o5.A.hidden),
            h = (0, c.omit)((0, C.rm)(o8), ["role", "tabIndex"]),
            A = (0, c.omit)((0, C.rm)(o4), ["role", "tabIndex"]),
            p = u || d > 3,
            g = s.useCallback((e) => {
                dn(e) ||
                    (0, j.L3)(e, async () => {
                        let { MemberListContentSettingsMenu: e } = await Promise.resolve().then(t.bind(t, 38055));
                        return () => (0, l.jsx)(e, { closePopout: j.Z_ });
                    });
            }, []),
            x = s.useCallback(
                (e) => {
                    if (!dn(e)) return u ? (0, o7.Il)() : r();
                },
                [u, r],
            ),
            f = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("span", { children: [i, " \u2014 ", d] }),
                    (0, l.jsx)(o6.A, { ...h }),
                    (0, l.jsx)("span", { className: de.AN }),
                    p
                        ? ((n = u
                              ? (0, l.jsx)(o2.t, { className: de.wT })
                              : o
                                ? (0, l.jsx)(ov.a, { className: de.wT })
                                : (0, l.jsx)(oN._, { className: de.wT })),
                          (0, l.jsx)("span", { className: de.wT, children: n }))
                        : null,
                ],
            });
        return (0, l.jsx)(k.A, {
            className: ec.lL,
            children: p
                ? (0, l.jsx)(o3.s, {
                      ...A,
                      className: a()(de.N1, { [de.jJ]: p }),
                      "aria-label": z.intl.formatToPlainString(z.t.Uaqbke, { title: i, count: d }),
                      "aria-expanded": !u && o,
                      onClick: x,
                      onContextMenu: g,
                      children: f,
                  })
                : (0, l.jsx)("div", { className: de.N1, onContextMenu: g, children: f }),
        });
    }),
    di = function () {
        return null;
    };
var dl = t(963307),
    ds = t(424994);
let dr = et.default.track;
function da(e, n) {
    dr(eo.HAw.RANKING_ITEM_INTERACTED_MUST_BE_SAMPLED, {
        request_id: n.requestId,
        item_id: n.entry.id,
        surface_type: ds.UG.GUILD_MEMBER_LIST,
        channel_id: n.channelId,
        guild_id: n.guildId,
        interaction_type: e,
        destination_channel_id: n.destinationChannelId,
        destination_guild_id: n.destinationGuildId,
        rich_presence_name: n.richPresenceName,
    });
}
var dd = t(468581),
    dc = t(808666),
    du = t(414499),
    dh = t(323384),
    dm = t(55730),
    dA = t(765379),
    dp = t(359549),
    dg = t(284525),
    dx = t(482030),
    df = t(583846),
    dE = t(506326);
t(333007);
var dI = t(342952),
    dj = t(315710),
    dC = t(276293),
    dy = t(935063),
    db = t(778712),
    d_ = t(696986),
    dv = t(97808),
    dN = t(738188),
    dT = t(983851),
    dS = t(31300),
    dR = t(308528),
    dM = t(401843),
    dO = t(375499),
    dL = t(429433),
    dP = t(324688);
let dD = (0, oU.createChannelRecord)({ id: "1", type: eo.rbe.DM });
function dk(e) {
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
        [m, A] = s.useState(""),
        [p, g] = s.useState((0, sz.x7)("")),
        x = nk.oU.ATOMIC_REACTOR_REPLY_INPUT,
        f = s.useRef(null);
    return (0, l.jsx)(sq.Ay, {
        ref: f,
        placeholder: n,
        editorClassName: h,
        className: a()(dP.N8, h),
        showRemainingCharsAfterCount: -1,
        allowNewLines: !1,
        maxCharacterCount: 200,
        channel: u ?? dD,
        onChange: (e, n, t) => {
            (A(n), g(t));
        },
        type: r ? { ...x, emojis: { button: !0 } } : x,
        textValue: m,
        richValue: p,
        onSubmit: (e) => {
            let { value: n } = e;
            return n.length > 200
                ? Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                : (t(n), A(""), g((0, sz.x7)("")), Promise.resolve({ shouldClear: !0, shouldRefocus: !1 }));
        },
        setEditorRef: i,
        focused: d,
        onFocus: c,
        disableThemedBackground: !0,
        emojiPickerCloseOnModalOuterClick: !0,
        disabled: !1,
        autoCompletePosition: (function () {
            if (null == f.current) return "top";
            let e = f.current.getBoundingClientRect(),
                n = window.innerHeight;
            return e.top < n / 2 ? "bottom" : "top";
        })(),
        renderAttachButton: o,
    });
}
function dw(e) {
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
        (0, l.jsx)(nd.Y, {
            targetElementRef: c,
            align: "right",
            position: "top",
            shouldShow: a,
            disablePointerEvents: !1,
            renderPopout: () =>
                (0, l.jsx)(f.N, {
                    theme: r,
                    children: (e) =>
                        (0, l.jsx)("div", {
                            className: e,
                            ref: d,
                            children: (0, l.jsx)(dL.C, {
                                messageId: eo.dJq,
                                channel: dD,
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
                        className: dP.mJ,
                        children: (0, l.jsx)(dO.A, {
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
var dU = t(402216),
    dG = t(822123),
    dF = t(409626),
    dH = t(692969),
    dB = t(711589),
    dV = t(607407),
    dY = t(832163),
    dW = t(533562),
    dz = t(805901),
    dq = t(565645);
t(90295);
var dX = t(7584);
(t(850992), t(690521));
var dK = t(806931),
    d$ = t(307731),
    dQ = t(866780);
function dJ(e) {
    let { emoji: n, isDisabled: t = !1, onClick: i, className: r } = e,
        o = s.useRef(null),
        d = (0, rG.M)(o);
    return (0, l.jsx)("span", {
        ref: o,
        children: (0, l.jsx)(nY.D, {
            onClick: i,
            focusProps: { enabled: !t },
            children: (0, l.jsx)(dz.c, {
                config: dO.B,
                from: { value: 0 },
                to: { value: +!!d },
                children: (e) => {
                    let { value: i } = e;
                    return (0, l.jsx)(ar.animated.div, {
                        style: { transform: i.to([0, 1], [1, 1.14]).to((e) => `scale(${e})`) },
                        children: (0, l.jsx)(dq.A, {
                            className: a()(dQ.Zg, r, { [dQ.c4]: t }),
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
(d$.EmojiIntention.CHAT,
    [
        dX.Ay.getByName("thumbsup"),
        dX.Ay.getByName("eyes"),
        dX.Ay.getByName("laughing"),
        dX.Ay.getByName("watermelon"),
        dX.Ay.getByName("fork_and_knife"),
        dX.Ay.getByName("yum"),
    ].filter(sC.Vq));
var dZ = t(636585),
    d0 = t(543465),
    d1 = t(607567),
    d2 = t(774926),
    d3 = t(20805),
    d7 = t(22869),
    d5 = t(623671),
    d6 = t(428249),
    d9 = t(327098),
    d8 = t(576757),
    d4 = t(202195),
    ce = t(140651),
    cn = t(345394);
let ct = function (e) {
    let { children: n } = e,
        [t, i] = (0, ay.kn)([A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
        [r, a] = s.useState(!1),
        o = s.useRef(null);
    s.useEffect(() => {
        let e = setTimeout(() => {
            a(!0);
        }, 300);
        return () => clearTimeout(e);
    }, []);
    let d = s.useCallback(() => {
        i(lL.i.USER_DISMISS);
    }, [i]);
    return t !== A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP
        ? n
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { ref: o, children: n }),
                  (0, l.jsx)(lg.A, {
                      targetElementRef: o,
                      shouldShow: r,
                      onRequestClose: d,
                      position: "left",
                      title: z.intl.string(z.t.V5y3qZ),
                      body: z.intl.string(z.t.eSDHDk),
                      graphic: { type: "image", src: cn.A },
                  }),
              ],
          });
};
var ci = t(315246),
    cl = t(866323),
    cs = t(252392);
let cr = (e) => {
    let { shown: n, sent: t, className: i } = e,
        s = (0, m.bG)([O.Ay], () => O.Ay.useReducedMotion),
        r = (0, cl.p)(
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
                (0, l.jsx)(ar.animated.div, {
                    className: i,
                    style: e,
                    children: t
                        ? (0, l.jsx)(cs.y, { text: z.intl.string(z.t.fjcCk5), variant: "success" })
                        : (0, l.jsx)(cs.y, { text: z.intl.string(z.t["5z/hlE"]) }),
                }),
        ),
    });
};
var ca = t(381941),
    co = t(231188);
let cd = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("419121"),
                t.e("149697"),
                t.e("60882"),
                t.e("489020"),
                t.e("919789"),
                t.e("669130"),
                t.e("70866"),
                t.e("802890"),
                t.e("232960"),
                t.e("74886"),
                t.e("713273"),
                t.e("656997"),
                t.e("412117"),
                t.e("263406"),
                t.e("1955"),
                t.e("341161"),
                t.e("410526"),
                t.e("202985"),
                t.e("603619"),
                t.e("833292"),
                t.e("222969"),
                t.e("515363"),
                t.e("128804"),
                t.e("71151"),
                t.e("227853"),
                t.e("286615"),
                t.e("311541"),
                t.e("795854"),
                t.e("870088"),
                t.e("300641"),
                t.e("571163"),
                t.e("586662"),
                t.e("831377"),
                t.e("709976"),
                t.e("750955"),
                t.e("953343"),
                t.e("279774"),
                t.e("763945"),
                t.e("261204"),
                t.e("686731"),
                t.e("807432"),
                t.e("873532"),
                t.e("590088"),
                t.e("807003"),
                t.e("46083"),
                t.e("152133"),
                t.e("747802"),
                t.e("626353"),
                t.e("71169"),
                t.e("906470"),
                t.e("736663"),
                t.e("82937"),
                t.e("987221"),
                t.e("157064"),
                t.e("156957"),
                t.e("918786"),
                t.e("701335"),
                t.e("257935"),
                t.e("724086"),
                t.e("358937"),
                t.e("448738"),
                t.e("700181"),
                t.e("804439"),
                t.e("84978"),
                t.e("894292"),
                t.e("153302"),
                t.e("88683"),
                t.e("363874"),
                t.e("923981"),
                t.e("750370"),
                t.e("972281"),
                t.e("307107"),
                t.e("896622"),
                t.e("466592"),
                t.e("73946"),
                t.e("282050"),
                t.e("440727"),
                t.e("387970"),
                t.e("847445"),
                t.e("547510"),
                t.e("966366"),
                t.e("983513"),
                t.e("76928"),
                t.e("355502"),
                t.e("528311"),
                t.e("156422"),
                t.e("348567"),
                t.e("452075"),
                t.e("900277"),
                t.e("905581"),
                t.e("76428"),
                t.e("863232"),
                t.e("517888"),
                t.e("959880"),
                t.e("174016"),
                t.e("907167"),
                t.e("910471"),
                t.e("11301"),
                t.e("811133"),
                t.e("861060"),
                t.e("364827"),
                t.e("77333"),
                t.e("56366"),
                t.e("217229"),
                t.e("477175"),
                t.e("960235"),
                t.e("910486"),
                t.e("198329"),
                t.e("678157"),
                t.e("942374"),
                t.e("147134"),
                t.e("331988"),
                t.e("10866"),
                t.e("236850"),
                t.e("40291"),
                t.e("733115"),
                t.e("397270"),
                t.e("190779"),
                t.e("373122"),
                t.e("217951"),
                t.e("221856"),
                t.e("755936"),
                t.e("609705"),
                t.e("899843"),
                t.e("904448"),
                t.e("833703"),
                t.e("256274"),
                t.e("692990"),
                t.e("362931"),
                t.e("745959"),
                t.e("858529"),
                t.e("481987"),
                t.e("595653"),
                t.e("958038"),
                t.e("532039"),
                t.e("719466"),
                t.e("178565"),
                t.e("630267"),
                t.e("576909"),
                t.e("27355"),
                t.e("407170"),
                t.e("255580"),
                t.e("299854"),
                t.e("608557"),
                t.e("247660"),
                t.e("506620"),
                t.e("649362"),
                t.e("773534"),
                t.e("153535"),
                t.e("147864"),
                t.e("276177"),
                t.e("93461"),
                t.e("437961"),
                t.e("604172"),
                t.e("949013"),
                t.e("820667"),
            ]).then(t.bind(t, 316725)),
        webpackId: 316725,
    }),
    cc = s.createContext(void 0);
function cu(e) {
    let { children: n } = e,
        t = s.useRef(null),
        i = s.useId();
    return (
        (0, dj.tj)(t),
        (0, l.jsx)(cc.Provider, {
            value: i,
            children: (0, l.jsx)("div", {
                ref: t,
                className: co.SW,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": i,
                tabIndex: -1,
                children: n,
            }),
        })
    );
}
function ch(e) {
    let { children: n, backgroundImgSrc: t, className: i, style: s = {} } = e,
        { primaryColor: r, secondaryColor: o } = (0, ce.A)(t);
    return (
        null != t && (s.background = `linear-gradient(45deg, ${r}, ${o})`),
        (0, l.jsx)(f.N, {
            theme: eo.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) => (0, l.jsx)("div", { className: a()(co.ZK, e, i), style: s, children: n }),
        })
    );
}
function cm(e) {
    let { children: n } = e;
    return (0, l.jsx)("div", { className: co.$m, children: n });
}
function cA(e) {
    var n;
    let t,
        i,
        r,
        a,
        { channel: o, user: c, onReaction: u, entry: h, buttons: p = [], header: g, onVoiceChannelPreview: f } = e,
        [I, j] = s.useState(!1),
        [C, y] = s.useState(null),
        b = (0, m.bG)(
            [lK.A],
            () => null != o && eo.kvI.CONTENT_ENTRY_EMBEDS.has(o.type) && lK.A.can(eo.xBc.SEND_MESSAGES, o),
        ),
        [v, N] = s.useState(!1),
        [T, S] = s.useState(!1),
        { voiceBar: R, joinVoiceButton: M } = (function (e) {
            let { channel: n, entry: t, onVoiceChannelPreview: i } = e,
                { streamPreviewUrl: r, channel: a } = (0, d4.A)(t),
                o = (0, tz.Ay)(a),
                { needSubscriptionToAccess: d } = (0, iH.A)(n?.id),
                c = (0, m.bG)([ty.A], () => (null != a ? ty.A.getGuild(a.guild_id) : void 0)),
                u = (0, m.yK)([d1.Ay], () => (null != a ? d1.Ay.getVoiceStatesForChannel(a) : []), [a]),
                h = (0, m.bG)([lM.A], () => lM.A.isInChannel(a?.id)),
                A = s.useMemo(() => {
                    for (let e of u) {
                        let n = ew.A.getDMFromUserId(e.user.id),
                            t = null != n && d0.Ay.isChannelMuted(null, n),
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
                                  (0, l.jsx)(dN.WarningIcon, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: co.vb,
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
                            className: co.kP,
                            children: [
                                (0, l.jsx)(g, {
                                    text: z.intl.string(z.t.WIVYqJ),
                                    hasRestrictedOrMutedVCParticipant: A,
                                    children: (0, l.jsxs)(nY.D, {
                                        "aria-label": z.intl.string(z.t.WIVYqJ),
                                        onClick: function () {
                                            null != a && (E.A.updateChatOpen(a.id, !0), (0, ir.iN)(a.id), i?.(a));
                                        },
                                        className: co.I3,
                                        children: [
                                            (0, l.jsx)(tE.Ay, {
                                                guild: c,
                                                size: tE.Ay.Sizes.SMOL,
                                                className: co.O9,
                                                active: !0,
                                            }),
                                            (0, l.jsx)(oN._, {
                                                size: "xxs",
                                                color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            }),
                                            (0, l.jsx)(dT.H, { size: "xs", color: nK.A.colors.TEXT_DEFAULT }),
                                            (0, l.jsx)(_.E, {
                                                variant: "text-sm/medium",
                                                color: "text-default",
                                                className: co.NR,
                                                children: o,
                                            }),
                                        ],
                                    }),
                                }),
                                (0, l.jsx)(dZ.A, {
                                    guildId: c.id,
                                    users: u,
                                    max: 3,
                                    renderUser: (e, n) =>
                                        (0, l.jsx)(dv.eu, {
                                            src: e.user.getAvatarURL(c.id, 16),
                                            size: db._3.SIZE_16,
                                            "aria-label": "avatar",
                                            className: n,
                                        }),
                                    renderMoreUsers: (e) =>
                                        (0, l.jsx)("div", {
                                            className: co.V9,
                                            children: (0, l.jsx)(_.E, {
                                                variant: "text-xxs/semibold",
                                                color: "text-default",
                                                children: e,
                                            }),
                                        }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(d_.h, { size: 16 }),
                    ],
                }),
                joinVoiceButton: h
                    ? null
                    : (0, l.jsx)(g, {
                          hasRestrictedOrMutedVCParticipant: A,
                          children: (0, l.jsx)(x.$, {
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
                              icon: p ? dS.k : dT.H,
                              variant: "active",
                              size: "md",
                          }),
                      }),
            };
        })({ channel: o, entry: h, onVoiceChannelPreview: f }),
        { embeddedActivity: O } = (0, d9.A)(h),
        L =
            ((n = O),
            (t = (0, m.bG)([ty.A], () => ty.A.getGuild((0, e_.D)(n?.location)))),
            (i = (0, m.bG)([ew.A], () => ew.A.getChannel((0, e_.H)(n?.location)))),
            (r = (0, m.yK)([ee.default], () => n?.participants?.map((e) => ee.default.getUser(e.userId)) ?? [])),
            (a = (0, tz.Ay)(i)),
            null != n && null != t && null != i && oU.k3.has(i.type)
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)("div", {
                              className: co.kP,
                              children: [
                                  (0, l.jsxs)(nY.D, {
                                      "aria-label": z.intl.string(z.t["W/A4Qp"]),
                                      onClick: () => (0, ir.iN)(i.id),
                                      className: co.I3,
                                      children: [
                                          (0, l.jsx)(tE.Ay, {
                                              guild: t,
                                              size: tE.Ay.Sizes.SMOL,
                                              className: co.O9,
                                              active: !0,
                                          }),
                                          (0, l.jsx)(oN._, {
                                              size: "xxs",
                                              color: nK.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                          }),
                                          (0, l.jsx)(dC.N, { size: "xs", color: nK.A.colors.TEXT_DEFAULT }),
                                          (0, l.jsx)(_.E, {
                                              variant: "text-sm/medium",
                                              color: "text-default",
                                              className: co.NR,
                                              children: a,
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(dZ.A, {
                                      guildId: t.id,
                                      users: r,
                                      max: 3,
                                      renderUser: (e, n) =>
                                          (0, l.jsx)(dv.eu, {
                                              src: e.getAvatarURL(t.id, 16),
                                              size: db._3.SIZE_16,
                                              "aria-label": "avatar",
                                              className: n,
                                          }),
                                      renderMoreUsers: (e) =>
                                          (0, l.jsx)("div", {
                                              className: co.V9,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-xxs/semibold",
                                                  color: "text-default",
                                                  children: e,
                                              }),
                                          }),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(d_.h, { size: 16 }),
                      ],
                  })
                : null),
        P = null != M && 0 === p.length ? [M] : p,
        D = P.length > 0,
        k = P.length >= 2,
        [w, U] = s.useState(!D),
        G = rM.Ay.getName(o?.guild_id, o?.id, c),
        F = (0, tz.Ay)(o, !0),
        H =
            null != o && I
                ? z.intl.formatToPlainString(z.t["8lzR/R"], { channel: F })
                : z.intl.formatToPlainString(z.t["4c+CAx"], { channel: `@${G}` }),
        B = I ? z.intl.string(z.t.Z2CUgn) : z.intl.string(z.t.XLGiTG);
    async function V(e) {
        let n,
            { emoji: t } = e;
        if (null != t) {
            if (
                (et.default.track(eo.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                    surface_type: ds.UG.GUILD_MEMBER_LIST,
                    channel_id: o?.id,
                    guild_id: o?.guild_id,
                }),
                (0, tY.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                N(!0),
                S(!1),
                I)
            )
                (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
            else {
                let e = await dR.A.getOrEnsurePrivateChannel(c.id);
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
                    interactionType: ds.PA.REACTION_EMOJI_REACT_SENT,
                    requiresChannelReadiness: !1,
                })
            );
        }
    }
    async function Y(e) {
        let n;
        if (((0, tY.Dr)(A.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), I))
            (d()(null != o, "shareToChannelMode should only be true if a valid channel is passed"), (n = o));
        else {
            let e = await dR.A.openPrivateChannel({ recipientIds: c.id }),
                t = ew.A.getChannel(e);
            (d()(null != t, "DM channel must be defined"), (n = t));
        }
        let t = n.type === eo.rbe.DM ? ds.PA.DM_REACTION_MESSAGE_SENT : ds.PA.CHANNEL_REACTION_MESSAGE_SENT;
        return W({ reply: e, sendToChannel: n, interactionType: t, onComplete: u, requiresChannelReadiness: !0 });
    }
    async function W(e) {
        let { reply: n, sendToChannel: t, onComplete: i, interactionType: l, requiresChannelReadiness: s } = e;
        (C?.focus(),
            await (0, d6.d)({
                channel: t,
                content: n,
                entry: h,
                whenReady: s,
                doNotNotifyOnError: !1,
                location: ca.Hx.CONTENT_INVENTORY_MEMBERLIST,
            }),
            i?.(l, t));
    }
    let q = g ?? R ?? L;
    function X() {
        (j((e) => !e), w && C?.focus());
    }
    function K(e) {
        (U(e), e && C?.focus());
    }
    return (0, l.jsxs)("div", {
        style: { pointerEvents: v ? "none" : "all" },
        children: [
            (0, l.jsx)(cr, { sent: T, shown: v, className: co.Jt }),
            q ??
                (0, l.jsx)(ct, {
                    children: (0, l.jsxs)("div", {
                        className: co.T7,
                        children: [
                            (0, l.jsx)(cp, { channel: o, onClickSuggestion: V }),
                            (0, l.jsx)(dw, { onSelectEmoji: V }),
                        ],
                    }),
                }),
            (0, l.jsxs)("div", {
                className: w ? co.P2 : co.VE,
                children: [
                    (0, l.jsx)(dk, {
                        placeholder: H,
                        onEnter: Y,
                        setEditorRef: (e) => y(e),
                        channel: I ? o : void 0,
                        showEmojiButton: null != q,
                        className: co.N8,
                        autoFocus: !1,
                        renderAttachButton: b
                            ? () =>
                                  (0, l.jsx)(eN.m, {
                                      text: B,
                                      children: (0, l.jsx)(nY.D, {
                                          className: co.wD,
                                          onClick: X,
                                          children: I
                                              ? (0, l.jsx)(dC.N, { size: "custom", width: 20, height: 20 })
                                              : (0, l.jsx)(dy.X, { size: "custom", width: 20, height: 20 }),
                                      }),
                                  })
                            : void 0,
                    }),
                    D &&
                        (0, l.jsx)(nY.D, {
                            onClick: () => K(!1),
                            className: co.i3,
                            children: (0, l.jsx)(t0.P, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: nK.A.colors.ICON_STRONG,
                            }),
                        }),
                ],
            }),
            !1 === w &&
                (0, l.jsxs)("div", {
                    className: co.fh,
                    children: [
                        !k &&
                            (0, l.jsx)(
                                x.$,
                                {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    onClick: () => K(!0),
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
let cp = (e) => {
    let { channel: n, onClickSuggestion: t } = e,
        [i, r] = s.useState(!1);
    s.useEffect(() => {
        r(!0);
    }, []);
    let a = !!O.Ay.keyboardModeEnabled && !i,
        o = (0, dG.Fj)(n?.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? { emoji: e, url: e.url }
                    : { emoji: e, url: (0, tb._O)({ id: e.id, animated: e.animated, size: 58 }) },
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
                              children: (0, l.jsx)(dJ, {
                                  emoji: n,
                                  isDisabled: !i,
                                  onClick: () => t({ emoji: n }),
                                  className: co.Zg,
                              }),
                          }),
                      },
                      n.name,
                  )
                : null;
        }),
    });
};
function cg(e) {
    let { channel: n, userDescription: t, entry: i, disableGameProfileLinks: s, onUserPopoutClosed: r } = e,
        o = n?.guild_id,
        { displayParticipants: d, participant1: c, participant2: u, numOtherParticipants: h } = (0, d8.A)(i, 3),
        A = (0, m.bG)([ee.default], () => ee.default.getUser(i.author_id)),
        { streamPreviewUrl: p } = (0, d4.A)(i),
        g = [c, u];
    return (0, l.jsxs)("div", {
        className: co.MH,
        children: [
            (0, l.jsxs)("div", {
                className: co.WP,
                children: [
                    (0, l.jsx)(dI.A, {
                        maxUsers: 3,
                        users: d,
                        guildId: o,
                        size: db._3.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: r,
                    }),
                    (0, l.jsx)(d_.h, { size: 8, horizontal: !0 }),
                    (0, l.jsx)(R.D, {
                        variant: "heading-sm/normal",
                        className: a()(co.Xn, co.zA),
                        children: z.intl.format(t, {
                            user0: rM.Ay.getName(o, n?.id, g[0]),
                            user1: rM.Ay.getName(o, n?.id, g[1]),
                            countOthers: h,
                            countOthersHook: (e, n) =>
                                (0, l.jsx)(
                                    _.E,
                                    { variant: "text-sm/medium", className: a()(co.Mj, co.nk), children: e },
                                    n,
                                ),
                            name0Hook: (e, t) =>
                                (0, l.jsx)(
                                    d7.A,
                                    {
                                        textClassName: a()(co.Mj, co.nk),
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
                                    d7.A,
                                    {
                                        textClassName: a()(co.Mj, co.nk),
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
            null != p && (0, l.jsx)(dU.Ay, { size: dU.Ay.Sizes.SMALL }),
            null != A && (0, l.jsx)(ci.A, { user: A, channel: n, guildId: o, entry: i, disableGameProfileLinks: s }),
        ],
    });
}
function cx(e) {
    let { children: n, onClick: t } = e;
    return null == t ? n : (0, l.jsx)(nY.D, { className: co.Zw, onClick: t, children: n });
}
function cf(e) {
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
            showCoverImage: A = !0,
            onUserPopoutClosed: p,
            trackRankingItemInteraction: g,
            ...x
        } = e,
        { entry: f } = x,
        E = (0, d3.zD)(f),
        I = E ? f.extra?.application_id : void 0,
        j = (0, dW.W)();
    null != j && (I = j);
    let C = (0, dH.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : I,
                source: dF.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: f.author_id,
            },
            { onOpened: () => g?.(ds.PA.OPENED_GAME_PROFILE) },
        ),
        { largeImage: y, smallImage: b } = (0, d2.nO)({
            entry: f,
            showCoverImage: A,
            trackingSource: "memberlist_content_popout",
        }),
        v = (0, m.bG)([dY.A], () => dY.A.getDetectableIdsToApplicationIds()),
        N = E ? C : void 0,
        T = s.useContext(cc);
    return (0, l.jsxs)("div", {
        className: co.au,
        children: [
            (0, l.jsx)(cg, { disableGameProfileLinks: h, ...x, onUserPopoutClosed: p }),
            (0, l.jsxs)(ch, {
                backgroundImgSrc: y?.src,
                children: [
                    (0, l.jsxs)("div", {
                        className: co.CG,
                        children: [
                            (0, l.jsx)("div", {
                                className: co.Fb,
                                children: (0, l.jsx)(d5.d, {
                                    image: y,
                                    smallImage: b,
                                    aspectRatio: A ? "none" : void 0,
                                    onClick: o ?? N,
                                    size: d5.w.SIZE_72,
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: co.iC,
                                children: [
                                    (0, l.jsx)(cx, {
                                        onClick: d ?? N,
                                        children: (0, l.jsx)(R.D, {
                                            id: T,
                                            variant: "heading-md/medium",
                                            className: a()(co.$2, { [co.bC]: null != u }),
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cx, {
                                              onClick: c ?? N,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: co.LG,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(d_.h, { size: 8 }),
                                    i,
                                ],
                            }),
                            (0, l.jsx)("div", { className: co.hO, children: u }),
                        ],
                    }),
                    r,
                ],
            }),
            null != I && null != v[I]
                ? (0, l.jsx)(cd, {
                      className: co.zu,
                      applicationId: I,
                      userIds: [f.author_id],
                      location: "content_popout",
                      guildId: x.channel?.guild_id,
                      channelId: x.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: oe.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
function cE(e) {
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
            ...A
        } = e,
        { actionString: p, canWatch: g } = (0, dB.K)(a),
        { entry: x } = A,
        f = (0, d3.zD)(x),
        E = f ? x.extra?.application_id : void 0,
        I = (0, dW.W)();
    null != I && (E = I);
    let j = (0, dH.A)(
            {
                location: "ContentPopout",
                applicationId: E,
                source: dF.GameProfileSources.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: x.author_id,
            },
            { onOpened: () => h?.(ds.PA.OPENED_GAME_PROFILE) },
        ),
        C = f ? j : void 0,
        { activity: y, activityApplication: b, fallbackApplication: v } = (0, d9.A)(x),
        { largeImage: N, smallImage: T } = (0, d2.D8)(y, b ?? v),
        { largeImage: S } = (0, d2.nO)({ entry: x, trackingSource: "memberlist_streaming_content_popout" }),
        M = (0, m.bG)([dY.A], () => dY.A.getDetectableIdsToApplicationIds()),
        O = s.useContext(cc);
    return (0, l.jsxs)("div", {
        className: co.au,
        children: [
            (0, l.jsx)(cg, { ...A, onUserPopoutClosed: u }),
            (0, l.jsxs)(ch, {
                backgroundImgSrc: S?.src,
                className: co.uR,
                children: [
                    (0, l.jsx)(cx, {
                        onClick: g
                            ? () => {
                                  (lI.default.selectVoiceChannel(a.channelId), (0, dM.Nl)(a));
                              }
                            : void 0,
                        children: (0, l.jsxs)("div", {
                            className: co.nh,
                            children: [
                                (0, l.jsx)(dV.A, { className: co.j7, stream: a }),
                                g &&
                                    (0, l.jsx)("div", {
                                        className: co.NE,
                                        children: (0, l.jsx)(_.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: p,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: co.$6,
                        children: [
                            null != N &&
                                (0, l.jsx)("div", {
                                    className: co.Fb,
                                    children: (0, l.jsx)(d5.d, {
                                        image: N,
                                        smallImage: T,
                                        onClick: o ?? C,
                                        size: d5.w.SIZE_72,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                className: co.gv,
                                children: [
                                    (0, l.jsx)(cx, {
                                        onClick: d ?? C,
                                        children: (0, l.jsx)(R.D, {
                                            id: O,
                                            variant: "heading-md/semibold",
                                            className: co.nk,
                                            lineClamp: 3,
                                            children: n,
                                        }),
                                    }),
                                    null != t
                                        ? (0, l.jsx)(cx, {
                                              onClick: c ?? C,
                                              children: (0, l.jsx)(_.E, {
                                                  variant: "text-sm/normal",
                                                  className: co.zA,
                                                  children: t,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(d_.h, { size: 8 }),
                                    i,
                                ],
                            }),
                        ],
                    }),
                    r,
                ],
            }),
            null != E && null != M[E]
                ? (0, l.jsx)(cd, {
                      className: co.zu,
                      applicationId: E,
                      userIds: [x.author_id],
                      location: "content_popout",
                      guildId: A.channel?.guild_id,
                      channelId: A.channel?.id,
                      numWishlistItems: 3,
                      cardSpec: oe.Z.SIZE_90,
                  })
                : null,
        ],
    });
}
var cI = t(299846);
let cj = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s, disableActivityProfileLinks: r } = e,
        { user: a, details: o, activity: d, embeddedActivity: c } = (0, cI.u)(t);
    function u() {
        (0, dx.hg)(t.extra.application_id);
    }
    let { data: h } = (0, nG.YY)(t.extra.application_id),
        m = (0, dp.Ay)({ application: h, analyticsLocations: [L.A.MEMBER_LIST_ACTIVITY_CONTENT_POPOUT] });
    if (null == a) return null;
    let A = (0, l.jsx)(dE.iT, { location: dE.N5.POPOUT, entry: t }),
        p = (0, l.jsx)(cf, {
            channel: n,
            userDescription: (0, df.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
            title: t.extra.activity_name,
            subtitle: o,
            badges: A,
            entry: t,
            showCoverImage: !1,
            onClickTitle: r ? void 0 : u,
            onClickSubtitle: r ? void 0 : u,
            onClickThumbnail: r ? void 0 : u,
        }),
        g = (0, dm.A)(d, eo.jUm.JOIN) || (0, dA.A)(d),
        f = g
            ? (0, l.jsx)(dg.A, {
                  embeddedActivity: c,
                  activity: d,
                  user: a,
                  variant: "primary",
                  size: "md",
                  icon: dc.I,
              })
            : null,
        E =
            null == m
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: m,
                      text: z.intl.string(z.t["jaYS/h"]),
                      icon: du.h,
                  }),
        I =
            null != E || r
                ? null
                : (0, l.jsx)(x.$, {
                      variant: "primary",
                      size: "md",
                      fullWidth: !0,
                      onClick: u,
                      text: z.intl.string(z.t.GDWYR8),
                      icon: dh.k,
                  }),
        j = [E, g && !r ? f : I].filter(sC.Vq);
    return (0, l.jsxs)(cu, {
        children: [
            p,
            (0, l.jsx)(cm, {
                children: (0, l.jsx)(cA, {
                    onReaction: i,
                    onVoiceChannelPreview: s,
                    user: a,
                    channel: n,
                    entry: t,
                    buttons: j,
                }),
            }),
        ],
    });
};
var cC = t(322789),
    cy = t(808380),
    cb = t(687966),
    c_ = t(960076),
    cv = t(544441),
    cN = t(562708),
    cT = t(139286);
function cS(e) {
    let { application: n, analyticsLocation: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(t),
        s = (0, dp.Ay)({ application: n, analyticsLocations: i });
    return (
        (0, cT.A)({
            name: cN.ImpressionNames.CLOUD_PLAY_CTA,
            type: cN.ImpressionTypes.VIEW,
            properties: { location_stack: i },
        }),
        (0, l.jsx)(
            x.$,
            {
                variant: "primary",
                size: "md",
                icon: du.h,
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
var cR = t(601007),
    cM = t(648246),
    cO = t(308335),
    cL = t(790381),
    cP = t(266080),
    cD = t(968309),
    ck = t(30370);
function cw(e) {
    let n = (0, m.bG)([ck.A], () => ck.A.getAccounts().some((n) => n.type === e)),
        t = s.useCallback(() => {
            if (null == e) return null;
            (0, cD.A)({ platformType: e, location: "Member List Content Popout" });
        }, [e]);
    if (null != e) return n ? void 0 : t;
}
var cU = t(18282);
let cG = [...cC.n, dE.Yq],
    cF = {
        [cy.Y.DESKTOP]: null,
        [cy.Y.LINUX]: null,
        [cy.Y.MACOS]: null,
        [cy.Y.NINTENDO]: null,
        [cy.Y.IOS]: null,
        [cy.Y.ANDROID]: null,
        [cy.Y.XBOX]: cP.A,
        [cy.Y.PLAYSTATION]: cL.A,
    },
    cH = function (e) {
        let {
                channel: n,
                entry: t,
                disableGameProfileLinks: i,
                onReaction: s,
                onVoiceChannelPreview: r,
                onUserPopoutClosed: a,
                trackRankingItemInteraction: o,
            } = e,
            { user: d, details: c, appName: u, activity: h, embeddedActivity: m } = (0, cI.u)(t),
            { streamPreviewUrl: A, stream: p } = (0, d4.A)(t),
            g = t.extra.platform,
            x = t.extra.application_id,
            f = null != g ? cF[g] : null,
            E = cw(g === cy.Y.XBOX ? eo.fg2.XBOX : g === cy.Y.PLAYSTATION ? eo.fg2.PLAYSTATION : void 0),
            { data: I } = (0, nG.YY)(x),
            j = (0, cv.A)(x),
            { analyticsLocations: C } = (0, P.Ay)(L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT),
            y = (0, dp.JC)(I),
            b = (0, cO.o)(h?.application_id ?? m?.applicationId ?? I?.id);
        if (null == d) return null;
        let _ = (0, l.jsx)(dE.mG, {
                location: null == A ? dE.N5.POPOUT : dE.N5.STREAMING_POPOUT,
                children: cG.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
            }),
            v =
                null == p
                    ? (0, l.jsx)(cf, {
                          channel: n,
                          headerIcons:
                              null == f
                                  ? null
                                  : (0, l.jsx)(cU.A, { onClick: E, Icon: f, "aria-label": z.intl.string(z.t.YR4cHH) }),
                          userDescription: (0, df.JM)(t) ? z.t.vPg1JT : z.t.rPqqts,
                          title: u,
                          subtitle: c,
                          badges: _,
                          entry: t,
                          disableGameProfileLinks: i,
                          onUserPopoutClosed: a,
                          trackRankingItemInteraction: o,
                          children:
                              j.length > 0
                                  ? (0, l.jsx)(cR.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      })
                    : (0, l.jsx)(cE, {
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
                              j.length > 0
                                  ? (0, l.jsx)(cR.A, {
                                        distributorCTAConfigs: j,
                                        applicationId: x,
                                        analyticsLocations: C,
                                        buttonVariant: "overlay-primary",
                                    })
                                  : null,
                      }),
            N =
                !b && y
                    ? (0, l.jsx)(
                          cS,
                          { application: I, analyticsLocation: L.A.MEMBER_LIST_GAMING_CONTENT_POPOUT },
                          "cloud-play",
                      )
                    : null,
            T = [
                null == N && ((0, dm.A)(h, eo.jUm.JOIN) || (0, dA.A)(h))
                    ? (0, l.jsx)(
                          dg.A,
                          { activity: h, user: d, variant: "primary", size: "md", icon: cb.GameControllerIcon },
                          "join",
                      )
                    : null,
                (0, c_.A)(h)
                    ? (0, l.jsx)(cM.A, { activity: h, size: "md", variant: "primary", icon: n$.EyeIcon }, "watch")
                    : null,
                N,
            ].filter(sC.Vq);
        return (0, l.jsxs)(cu, {
            children: [
                v,
                (0, l.jsx)(cm, {
                    children: (0, l.jsx)(cA, {
                        onReaction: s,
                        onVoiceChannelPreview: r,
                        user: d,
                        channel: n,
                        entry: t,
                        buttons: T,
                    }),
                }),
            ],
        });
    },
    cB = (0, t(196765).v)((e) => ({ activeEntryId: null, setActiveEntryId: (n) => e({ activeEntryId: n }) }));
function cV(e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e,
        { data: r } = (0, nG.YY)(n.extra.application_id),
        { analyticsLocations: a } = (0, P.Ay)(L.A.CLOUD_PLAY_POPOVER),
        o = (0, dp.Ay)({ application: r, analyticsLocations: a }),
        d = (0, tY.HX)(A.M.CLOUD_PLAY_NEW_BADGE),
        c = null != o && !d && t,
        { activeEntryId: u, setActiveEntryId: h } = cB(),
        m = u === n.id,
        p = c && m ? [A.M.CLOUD_PLAY_POPOVER] : [],
        [g, x] = (0, ay.kn)(p),
        f = g === A.M.CLOUD_PLAY_POPOVER;
    (s.useEffect(() => {
        c && null === u && h(n.id);
    }, [u, c, n.id, h]),
        s.useEffect(
            () => () => {
                f && (x(lL.i.USER_DISMISS), h(null));
            },
            [f, x, h],
        ));
    let [E, I] = s.useState(!1);
    return (
        f && !E && I(!0),
        (0, cT.A)(
            {
                name: cN.ImpressionNames.CLOUD_PLAY_CTA,
                type: cN.ImpressionTypes.VIEW,
                properties: { location_stack: a },
            },
            { disableTrack: !E },
            [E],
        ),
        (0, l.jsx)(lg.A, {
            title: z.intl.string(z.t["+WNDtV"]),
            body: z.intl.string(z.t["5QKxGI"]),
            targetElementRef: i,
            shouldShow: f,
            position: "left",
            caretConfig: { align: "center" },
            gradientColor: "pink",
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/5915cd247ac6483ec4affbfd6004c9f0379475a4de474e3d2021fc013022a823.svg",
            },
            actions: [
                {
                    icon: du.h,
                    text: z.intl.string(z.t["jaYS/h"]),
                    onClick: function () {
                        o?.();
                    },
                },
            ],
            onRequestClose: function () {
                (x(lL.i.USER_DISMISS), h(null));
            },
        })
    );
}
let cY = function (e) {
    let { entry: n, isFirstApplicationOccurrence: t, targetElementRef: i } = e;
    return (0, l.jsx)(cV, { entry: n, targetElementRef: i, isFirstApplicationOccurrence: t });
};
var cW = t(363670),
    cz = t(205327),
    cq = t(52133),
    cX = t(835723),
    cK = t(172710),
    c$ = t(655116),
    cQ = t(763758),
    cJ = t(286617),
    cZ = t(533207),
    c0 = t(121090),
    c1 = t(693879),
    c2 = t(809854),
    c3 = t(272984),
    c7 = t(170699);
function c5(e) {
    let { activity: n } = e,
        t = n.timestamps,
        { now: i } = (0, c2.e)(),
        { durationTimestamp: r, seekBarStyles: a } = s.useMemo(() => {
            let { start: e, end: t } = n.timestamps ?? {};
            if (null == e || null == t) return {};
            let l = Math.min(t, i),
                s = t - e,
                r = Math.floor((Math.max(l - e, 0) / s) * 100);
            return { seekBarStyles: { width: `${r}%` }, durationTimestamp: (0, df.W6)({ start: 0 }, s) };
        }, [n, i]);
    return null == a
        ? null
        : (0, l.jsxs)("div", {
              className: c7.lu,
              children: [
                  (0, l.jsx)(c1.z, { entry: t }),
                  (0, l.jsx)("div", { className: c7.Lt, children: (0, l.jsx)("div", { className: c7.Vp, style: a }) }),
                  (0, l.jsx)(_.E, {
                      className: c7.vE,
                      variant: "text-xs/normal",
                      tabularNumbers: !0,
                      color: void 0,
                      children: r,
                  }),
              ],
          });
}
function c6(e) {
    let n,
        t,
        i,
        { channel: s, entry: r, closePopout: a, onReaction: o, onVoiceChannelPreview: d } = e,
        { activity: c, currentEntry: u, artist: h, title: A, user: p } = (0, cW.u7)(r),
        g = cw(eo.fg2.SPOTIFY),
        f = (0, m.bG)(
            [c$.A, sd.default],
            () => (c?.type === eo.$pd.LISTENING && null != p ? (0, cJ.A)(c$.A, sd.default, p, c) : void 0),
            [c, p],
            cq.A,
        );
    if (null == c || null == u) return null;
    let E = h,
        I = [];
    u.media.provider === cz.X.SPOTIFY &&
        ((t = () => {
            (0, cK.Mp)(c);
        }),
        (i = () => {
            (0, cK.QX)(c, p.id);
        }),
        (n = () => {
            null != g ? g() : (0, cK.Mp)(c);
        }),
        (E = (0, l.jsx)(cQ.A, {
            artists: h,
            canOpen: null != c.sync_id,
            linkClassName: co.zA,
            onOpenSpotifyArtist: function (e) {
                null != c && null != p && (0, cK.mN)(c, p.id, e);
            },
        })),
        f?.syncDisabled === !1 &&
            I.push(
                (0, l.jsx)(
                    x.$,
                    {
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                        text: z.intl.string(z.t.eU3inB),
                        icon: cX.J,
                        onClick: function () {
                            null != f && ((0, cZ.A)(f, c3.Qp.USER_ACTIVITY_SYNC), a());
                        },
                    },
                    "listen-along",
                ),
            ));
    let j = (0, l.jsx)(cf, {
        onClickThumbnail: i,
        channel: s,
        entry: r,
        headerIcons:
            u.media.provider === cz.X.SPOTIFY
                ? (0, l.jsx)(cU.A, { onClick: n, "aria-label": z.intl.string(z.t.rRffNz), Icon: c0.A })
                : null,
        userDescription: (0, df.JM)(r) ? z.t.Tzx5D2 : z.t.CcVI1T,
        title: A,
        onClickTitle: t,
        subtitle: E,
        badges: null,
        children: c.timestamps?.start != null && (0, l.jsx)(c5, { activity: c }),
    });
    return (0, l.jsxs)(cu, {
        children: [
            j,
            (0, l.jsx)(cm, {
                children: (0, l.jsx)(cA, {
                    onReaction: o,
                    onVoiceChannelPreview: d,
                    user: p,
                    channel: s,
                    entry: r,
                    buttons: I,
                }),
            }),
        ],
    });
}
var c9 = t(903134),
    c8 = t(56121),
    c4 = t(263577),
    ue = t(868065),
    un = t(804779);
let ut = [dE.Y8],
    ui = [c8.j.WEEK],
    ul = s.memo(function (e) {
        let { entry: n, channel: t, selected: i } = e,
            { largeImage: s } = (0, d2.nO)({ entry: n, trackingSource: "memberlist_top_artist_content_row" }),
            r = (0, df.TQ)(n);
        return null != r && (0, sC.S1)(r, ui)
            ? (0, l.jsxs)(ue.Zp, {
                  selected: i,
                  children: [
                      (0, l.jsxs)(ue.UA, {
                          children: [
                              (0, l.jsx)(ue.Hp, { entry: n, channelId: t.id, guildId: t.guild_id }),
                              (0, l.jsx)(ue.ZB, { children: n.extra.artist.name }),
                              (0, l.jsx)(dE.mG, {
                                  location: dE.N5.CARD,
                                  children: ut.map((e, t) => (0, l.jsx)(e, { entry: n }, t)),
                              }),
                          ],
                      }),
                      (0, l.jsx)(c4.V, { src: s?.src, size: 48, className: un.xn }),
                  ],
              })
            : null;
    });
var us = t(210528);
let ur = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        { parent_title: r, provider: a } = t.extra.media,
        o = t.extra.artist.name,
        d = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        c = (0, df.TQ)(t),
        u = cw(eo.fg2.SPOTIFY);
    if (null == d || !(0, sC.S1)(c, ui)) return null;
    function h() {
        let e = c3.M0.ALBUM,
            n = us.A.isProtocolRegistered()
                ? c3.RQ.PLAYER_OPEN(e, t.extra.media.external_parent_id)
                : c3.RQ.WEB_OPEN(e, t.extra.media.external_parent_id);
        window.open(n);
    }
    return (0, l.jsxs)(cu, {
        children: [
            (0, l.jsx)(cf, {
                onClickTitle: h,
                onClickSubtitle: function () {
                    let e = c3.M0.ARTIST,
                        n = us.A.isProtocolRegistered()
                            ? c3.RQ.PLAYER_OPEN(e, t.extra.artist.external_id)
                            : c3.RQ.WEB_OPEN(e, t.extra.artist.external_id);
                    window.open(n);
                },
                onClickThumbnail: h,
                channel: n,
                entry: t,
                headerIcons:
                    a === cz.X.SPOTIFY
                        ? (0, l.jsx)(cU.A, { onClick: u, Icon: c0.A, "aria-label": z.intl.string(z.t["0ZB/XE"]) })
                        : null,
                userDescription: z.t.CcVI1T,
                title: r,
                subtitle: o,
                badges: (0, l.jsx)(dE.mG, {
                    location: dE.N5.POPOUT,
                    children: ut.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
            }),
            (0, l.jsx)(cm, {
                children: (0, l.jsx)(cA, { onReaction: i, onVoiceChannelPreview: s, user: d, channel: n, entry: t }),
            }),
        ],
    });
};
var ua = t(977001);
let uo = function (e) {
    let { channel: n, entry: t, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: r } = e,
        { user: a, details: o, appName: d } = (0, cI.u)(t),
        c = (0, df.ty)(t),
        u = (0, df.TQ)(t);
    if (null == a || null == c || null == u || !(0, ua._E)(u)) return null;
    let h = null != t.extra.platform ? cF[t.extra.platform] : null;
    return (0, l.jsxs)(cu, {
        children: [
            (0, l.jsx)(cf, {
                channel: n,
                headerIcons: null == h ? null : (0, l.jsx)(cU.A, { Icon: h, "aria-label": z.intl.string(z.t.YR4cHH) }),
                entry: t,
                userDescription: z.t.rPqqts,
                title: d,
                subtitle: o,
                badges: (0, l.jsx)(dE.mG, {
                    location: dE.N5.POPOUT,
                    children: ua.ac.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                }),
                disableGameProfileLinks: i,
            }),
            (0, l.jsx)(cm, {
                children: (0, l.jsx)(cA, { onReaction: s, onVoiceChannelPreview: r, user: a, channel: n, entry: t }),
            }),
        ],
    });
};
var ud = t(514243),
    uc = t(347306),
    uu = t(123917),
    uh = t(998218);
let um = function (e) {
    let { channel: n, entry: t, onReaction: i, onVoiceChannelPreview: s } = e,
        r = (0, m.bG)([ee.default], () => ee.default.getUser(t.author_id)),
        a = cw(eo.fg2.CRUNCHYROLL);
    function o() {
        if (null == t.extra.url) return;
        let e = uh.A.safeParseWithQuery(t.extra.url);
        null != e && null != e.protocol && null != e.hostname && (0, uu.h)({ href: uh.A.format(e), trusted: !1 });
    }
    return null == r
        ? null
        : (0, l.jsxs)(cu, {
              children: [
                  (0, l.jsx)(cf, {
                      channel: n,
                      entry: t,
                      userDescription: (0, df.JM)(t) ? z.t["LH+Z3y"] : z.t.YuKgml,
                      title: t.extra.media_title,
                      subtitle: t.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(cU.A, {
                          onClick: a,
                          Icon: uc.k,
                          "aria-label": z.intl.string(z.t.jdJYXw),
                      }),
                      badges: (0, l.jsx)(dE.mG, {
                          location: dE.N5.POPOUT,
                          children: ud.R.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                      }),
                      onClickTitle: o,
                      onClickThumbnail: o,
                  }),
                  (0, l.jsx)(cm, {
                      children: (0, l.jsx)(cA, {
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
function uA(e) {
    return e?.type === dl.S9.CONTENT_INVENTORY
        ? e.entry.content_type === oY.ContentInventoryEntryType.PLAYED_GAME && null != e.entry.applicationWidgetPreview
            ? 104
            : 72
        : 0;
}
function up(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oY.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cC.A, { ...t, entry: n });
        case oY.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(ud.A, { ...t, entry: n });
        case oY.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(ua.Ay, { ...t, entry: n });
        case oY.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ul, { ...t, entry: n });
        case oY.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(cW.Ay, { ...t, entry: n });
        case oY.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(dd.A, { ...t, entry: n });
        default:
            return null;
    }
}
function ug(e) {
    let { entry: n, targetElementRef: t, ...i } = e;
    return n.content_type === oY.ContentInventoryEntryType.PLAYED_GAME
        ? (0, l.jsx)(cY, {
              entry: n,
              targetElementRef: t,
              isFirstApplicationOccurrence: i.isFirstApplicationOccurrence ?? !1,
          })
        : null;
}
function ux(e) {
    let { closePopout: n, ...t } = e;
    return (0, l.jsx)(uf, {
        onReaction: (e, i) => {
            (t.trackRankingItemInteraction(e, { destinationChannelId: i.id, destinationGuildId: i.guild_id }), n());
        },
        closePopout: n,
        onVoiceChannelPreview: (e) => {
            t.trackRankingItemInteraction(ds.PA.VOICE_CHANNEL_PREVIEWED, {
                destinationChannelId: e.id,
                destinationGuildId: e.guild_id,
            });
        },
        ...t,
    });
}
function uf(e) {
    let { entry: n, ...t } = e;
    switch (n.content_type) {
        case oY.ContentInventoryEntryType.PLAYED_GAME:
            return (0, l.jsx)(cH, { ...t, entry: n });
        case oY.ContentInventoryEntryType.WATCHED_MEDIA:
            return (0, l.jsx)(um, { ...t, entry: n });
        case oY.ContentInventoryEntryType.TOP_GAME:
            return (0, l.jsx)(uo, { ...t, entry: n });
        case oY.ContentInventoryEntryType.TOP_ARTIST:
            return (0, l.jsx)(ur, { ...t, entry: n });
        case oY.ContentInventoryEntryType.LISTENED_SESSION:
            return (0, l.jsx)(c6, { ...t, entry: n });
        case oY.ContentInventoryEntryType.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(cj, { ...t, entry: n });
        default:
            return null;
    }
}
let uE = s.memo(function (e) {
    let { index: n, ref: i, ...r } = e,
        a = s.useRef(null),
        [o, d] = s.useState("default"),
        [c, h] = s.useState(!1),
        A = (0, C.rm)(`${n}`),
        p = ee.default.getCurrentUser()?.isStaff(),
        { isRich: g, appName: x } = (0, cI.u)(r.entry);
    !(function (e) {
        let { markAsVisible: n } = s.useContext(o0);
        s.useEffect(() => n(e), [n, e]);
    })(r.entry.id);
    let f = s.useMemo(
            () => ({
                entry: r.entry,
                channelId: r.channel.id,
                guildId: r.channel.guild_id,
                requestId: r.requestId,
                richPresenceName: g ? x : void 0,
            }),
            [x, r.channel.guild_id, r.channel.id, r.entry, r.requestId, g],
        ),
        E = s.useRef(!1),
        [I, y] = s.useState(!1),
        [b, _] = s.useState(!1),
        v = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled);
    (s.useEffect(() => {
        I && v && _(!0);
    }, [I, v]),
        s.useLayoutEffect(() => {
            null != a.current && h(!0);
        }, []));
    let N = s.useCallback(
            (e) => {
                p &&
                    (0, j.L3)(e, async () => {
                        let { default: e } = await t.e("789346").then(t.bind(t, 949881));
                        return () => (0, l.jsx)(e, { entry: r.entry, requestId: r.requestId });
                    });
            },
            [r, p],
        ),
        T = s.useCallback(() => {
            d(String(Date.now()));
        }, []),
        S = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                da(e, { ...f, ...n });
            },
            [f],
        ),
        R = s.useMemo(
            () =>
                u().throttle(
                    (e) => {
                        da(ds.PA.CARD_POPOUT_OPEN, e);
                    },
                    2e3,
                    { leading: !0, trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(() => {
            ((E.current = !1),
                setTimeout(() => {
                    E.current || (y(!1), _(v));
                }, 100));
        }, [v]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c && (0, l.jsx)(ug, { ...r, targetElementRef: a }),
            (0, l.jsx)("div", {
                ref: i,
                onMouseEnter: () => {
                    ((E.current = !0),
                        setTimeout(() => {
                            (E.current && y(!0), R(f));
                        }, 100));
                },
                onMouseLeave: M,
                children: (0, l.jsx)(nd.Y, {
                    targetElementRef: a,
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, l.jsx)(c9.J.Provider, {
                            value: M,
                            children: (0, l.jsx)(ux, {
                                closePopout: n,
                                updatePopoutPosition: T,
                                trackRankingItemInteraction: S,
                                ...r,
                            }),
                        });
                    },
                    position: "left",
                    shouldShow: I,
                    positionKey: o,
                    onRequestOpen: () => R(f),
                    onRequestClose: () => {
                        b && M();
                    },
                    spacing: 8,
                    children: (e, n) => {
                        let { isShown: t } = n;
                        return (0, l.jsx)(nY.D, {
                            ...e,
                            ...A,
                            role: "button",
                            innerRef: a,
                            focusProps: { offset: { top: 4, bottom: 4, left: 4, right: 4 } },
                            onClick: () => {
                                I || y(!0);
                            },
                            onContextMenu: N,
                            children: (0, l.jsx)(up, {
                                ...r,
                                selected: t,
                                hovered: E.current,
                                trackRankingItemInteraction: S,
                            }),
                        });
                    },
                }),
            }),
        ],
    });
});
var uI = t(531685),
    uj = t(99066),
    uC = t(376261),
    uy = t(99753),
    ub = t(136722),
    u_ = t(860071);
let uv = [],
    uN = new Set(),
    uT = new Set();
var uS = t(808323);
let uR = new Set([
    oY.ContentInventoryEntryType.PLAYED_GAME,
    oY.ContentInventoryEntryType.WATCHED_MEDIA,
    oY.ContentInventoryEntryType.TOP_GAME,
    oY.ContentInventoryEntryType.TOP_ARTIST,
    oY.ContentInventoryEntryType.LISTENED_SESSION,
    oY.ContentInventoryEntryType.LAUNCHED_ACTIVITY,
]);
var uM = t(498642);
let uO = (0, sa.mj)({
    name: "2026-10-contextual-referrals-server-channel-member-list",
    kind: "user",
    defaultConfig: { showEmbed: !1 },
    variations: { 0: { showEmbed: !1 }, 1: { showEmbed: !0 } },
});
var uL = t(293860);
let uP = { cooldownDurationMs: 60 * ss.A.Millis.DAY };
function uD(e) {
    let { guildId: n } = e,
        t = (function (e) {
            let { isInTreatment: n } = {
                    isInTreatment: uO.useConfig({ location: "ContextualReferralServerChannelMemberListEmbed" })
                        .showEmbed,
                },
                { isBaseEligible: t } = sh(),
                i = (0, m.bG)([uM.A], () => uM.A.getMemberCount(e), [e]);
            return null != e && !!t && !!n && null != i && !(i >= 200);
        })(n);
    return (0, l.jsx)(lC.zJ, {
        contentType: t ? A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED : null,
        timeRecurringConfig: uP,
        groupName: lL.m.MEMBER_LIST_HEADER,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: n, markAsDismissed: t } = e;
            return n !== A.M.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST_EMBED
                ? null
                : (0, l.jsx)(sf, {
                      className: uL.K,
                      analyticsLocation: L.A.CONTEXTUAL_REFERRAL_SERVER_CHANNEL_MEMBER_LIST,
                      markAsDismissed: t,
                      title: z.intl.string(z.t.GCMMir),
                      body: z.intl.string(z.t["0gqEHu"]),
                  });
        },
    });
}
var uk = t(728321),
    uw = t(282006);
let uU = er.Ay.getEnableHardwareAcceleration(),
    uG = { origin: { x: 38, y: 11 }, targetWidth: 232, targetHeight: 40, offset: { x: 0, y: 0 } },
    uF = s.memo(function (e) {
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
                applicationStream: m,
                status: A,
                channel: p,
                guildId: g,
                isTyping: x,
                isMobileOnline: f,
                isVROnline: E,
                premiumSince: I,
                nameplate: C,
                ...y
            } = e,
            _ = s.useRef(null),
            [v, N] = s.useState(!1),
            T = null != I ? new Date(I) : null,
            { analyticsLocations: S } = (0, P.Ay)(),
            R = s.useCallback(
                (e) => {
                    (0, j.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                                t.e("463317"),
                                t.e("893190"),
                                t.e("189673"),
                                t.e("882073"),
                                t.e("797558"),
                                t.e("691994"),
                                t.e("576665"),
                                t.e("624198"),
                                t.e("245996"),
                                t.e("700792"),
                                t.e("592822"),
                                t.e("529422"),
                                t.e("823427"),
                                t.e("307059"),
                                t.e("309291"),
                                t.e("343116"),
                                t.e("711617"),
                                t.e("470314"),
                                t.e("70515"),
                                t.e("404524"),
                                t.e("654148"),
                                t.e("666939"),
                                t.e("717334"),
                                t.e("184841"),
                            ]).then(t.bind(t, 107632)),
                            n = lM.A.isInChannel(eU.Ay.getVoiceChannelId(), c.id);
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
                    M.A.startTyping(p.id));
            }, [c, p.id]),
            L = s.useCallback(
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
        return (0, l.jsx)(X.A, {
            targetElementRef: _,
            user: c,
            guildId: g,
            channelId: p.id,
            roleId: a,
            position: b.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: O,
            shouldShow: v,
            onRequestClose: () => {
                N(!1);
            },
            children: (e) => {
                let { onClick: t, onMouseDown: s, ...a } = e;
                return (0, l.jsx)(ea.A, {
                    ref: _,
                    className: ec.Dc,
                    onContextMenu: R,
                    shouldAnimateStatus: uU,
                    user: c,
                    currentUser: u,
                    nick: d,
                    status: A,
                    activities: h,
                    applicationStream: m,
                    isOwner: o,
                    premiumSince: T,
                    colorString: n,
                    colorStrings: i,
                    colorRoleName: r,
                    isTyping: x,
                    channel: p,
                    guildId: g,
                    isMobile: f,
                    isVR: E,
                    onClickPremiumGuildIcon: L,
                    selected: v,
                    itemProps: y,
                    nameplate: C,
                    onClick: (e) => {
                        e.shiftKey ? O?.() : N((e) => !e);
                    },
                    onMouseDown: (e) => {
                        v ? e.stopPropagation() : s?.(e);
                    },
                    ...a,
                });
            },
        });
    }),
    uH = s.memo(function (e) {
        let { colorRoleId: n, ...t } = e,
            { channel: i, user: s, index: r } = e,
            a = (0, C.rm)(`${r}`),
            o = (0, m.bG)([Z.A], () => Z.A.isTyping(i.id, s.id)),
            d = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            c = (0, m.bG)([V.A], () => (null != n ? V.A.getRole(i.guild_id, n)?.name : void 0), [i, n]),
            u = (0, D.r)({ user: s, guildId: i.guild_id });
        return (0, l.jsx)(uF, { ...t, ...a, isTyping: o, currentUser: d, colorRoleName: c, nameplate: u });
    });
function uB(e) {
    let { index: n } = e,
        t = (0, C.rm)(`${n}`);
    return (0, l.jsx)(ea.A, { itemProps: t });
}
class uV extends s.Component {
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
        if (r?.id === o9) return (0, s.createElement)(dt, { ...r, key: `section-${n}` });
        if (0 === n) {
            let { key: e } = r;
            return (0, l.jsx)(
                uk.A,
                {
                    tutorialId: "whos-online",
                    position: "left",
                    inlineSpecs: uG,
                    children: (0, s.createElement)(uw.Y, {
                        ...r,
                        key: `section-${e}`,
                        guildId: i.guild_id,
                        className: ec.lL,
                    }),
                },
                `section-${n}`,
            );
        }
        return (0, s.createElement)(uw.Y, { ...r, key: `section-${n}`, guildId: i.guild_id, className: ec.lL });
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
            if (null != n && n.type === dl.S9.CONTENT_INVENTORY) {
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
            if (r.type === dl.S9.MEMBER && "user" in r) {
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
                    activities: m,
                    applicationStream: A,
                    premiumSince: p,
                } = r;
                return (0, l.jsx)(
                    uH,
                    {
                        colorString: e,
                        colorStrings: n,
                        colorRoleId: t,
                        user: a,
                        status: o,
                        isOwner: d,
                        nick: h,
                        activities: m,
                        applicationStream: A,
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
            if (r.type === dl.S9.CONTENT_INVENTORY) {
                let e = `content-inventory-${r.entry.id}`;
                null != r.entry.original_id && (e += `-${r.entry.original_id}`);
                let n = this.getFirstApplicationIdOccurrences().has(r.entry.id);
                return (0, l.jsx)(
                    uE,
                    { ...r, channel: this.props.channel, index: i, isFirstApplicationOccurrence: n },
                    e,
                );
            }
            if (r.type === dl.S9.HIDDEN_CONTENT_INVENTORY) return (0, l.jsx)(di, {}, "content-inventory-hidden-entry");
        }
        return (0, l.jsx)(uB, { index: i }, `placeholder-${n}:${t}`);
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
        if (e?.id === o9) return e;
    };
    hasContentFeed = () => null != this.getContentFeedGroup();
    getRowHeightComputer = () => {
        let e = this.getContentFeedGroup(),
            { rowHeight: n } = this.props;
        if (null != e) {
            let { rows: t } = this.props,
                i = e.index;
            return function (e, l) {
                return 0 === e ? uA(t[i + 1 + l]) : n;
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
            .filter(sC.Vq);
        if (0 === t.length) return;
        let i = t.reduce(
            (e, n) => (
                n.type !== dl.S9.MEMBER ||
                    (e.num_users_visible++,
                    n.isMobileOnline && e.num_users_visible_with_mobile_indicator++,
                    null != n.activities &&
                        n.activities.length > 0 &&
                        (e.num_users_visible_with_activity++,
                        n.activities.some((e) => e.type === eo.$pd.PLAYING) &&
                            e.num_users_visible_with_game_activity++),
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
                            children: (0, l.jsx)(rN.F, {
                                component: (0, l.jsx)(rT.A, {
                                    children: (0, l.jsx)(rN.H, {
                                        id: r,
                                        children: z.intl.format(z.t.JBQxV6, {
                                            channel: (0, tz.m1)(t, ee.default, lR.A),
                                        }),
                                    }),
                                }),
                                children: (0, l.jsx)(C.PR, {
                                    children: (t) => {
                                        let { ref: r, role: o, ...d } = t;
                                        return (0, l.jsx)(
                                            T.OZ,
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
function uY(e) {
    let { channel: n, className: t } = e,
        { analyticsLocations: i } = (0, P.Ay)(L.A.MEMBER_LIST),
        r = (0, m.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
        o = (0, m.cf)([dl.Ay], () => dl.Ay.getProps(n.guild_id, n.id)),
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
                        l = (0, uS.A)({ id: ds.X1.GLOBAL_FEED });
                    l = (function (e) {
                        let { entries: n, channelId: t } = e,
                            i = (0, m.bG)([ew.A], () => ew.A.getChannel(t)),
                            l = i?.guild_id,
                            r = s.useRef(new Set()),
                            a = s.useMemo(() => {
                                let e = new Set(n?.map((e) => e.author_id));
                                return ((0, cq.v)([...r.current], [...e]) || (r.current = e), r.current);
                            }, [n]);
                        s.useEffect(() => {
                            null != l &&
                                Array.from(a).forEach((e) => {
                                    u_.A.requestMember(l, e);
                                });
                        }, [a, l]);
                        let o = (0, m.yK)(
                                [$.Ay],
                                () => {
                                    if (null == l) return uv;
                                    let e = [];
                                    for (let n of a) $.Ay.isMember(l, n) && e.push(n);
                                    return e;
                                },
                                [a, l],
                            ),
                            d = s.useMemo(() => {
                                if (null == i || 0 === o.length) return uN;
                                let e = new Set();
                                for (let n of o) {
                                    let t = el.cc({ user: n, context: i });
                                    ub.zy(t, W.xB.VIEW_CHANNEL) && e.add(n);
                                }
                                return e;
                            }, [o, i]);
                        return s.useMemo(() => n?.filter((e) => d.has(e.author_id)), [n, d]);
                    })({ entries: l, channelId: e });
                    let { entries: r, filteredIds: a } =
                        ((n = l = s.useMemo(() => l?.filter((e) => uR.has(e.content_type)), [l])),
                        (i = (0, m.bG)(
                            [o5.A, uy.A],
                            () => {
                                let e = uy.A.getDebugImpressionCappingDisabled();
                                return !(0, uj.sE)("useFilterImpressionCappedContent") || e
                                    ? uT
                                    : o5.A.getImpressionCappedItemIds();
                            },
                            [n],
                        )),
                        s.useMemo(() => {
                            if (null == n) return { entries: n, filteredIds: uT };
                            let e = new Set();
                            return {
                                entries: n.filter((n) => !!(0, df.JM)(n) || !i.has(n.id) || (e.add(n.id), !1)),
                                filteredIds: e,
                            };
                        }, [n, i]));
                    l = r;
                    let o = (0, m.bG)([uy.A], () => uy.A.getFeedRequestId(ds.X1.GLOBAL_FEED));
                    return (
                        (t = l),
                        {
                            requestId: o,
                            entries: (l = s.useContext(o0).useInjectEntriesWithPreviewData(t)),
                            impressionCappedEntryIds: a,
                        }
                    );
                })(l),
                h = (0, m.bG)([o5.A], () => o5.A.hidden),
                A = (0, m.bG)([uI.A], () => uI.A.isFocused()),
                p = (0, m.bG)([ew.A], () => ew.A.getChannel(l)),
                g = (0, m.bG)([ty.A], () => ty.A.getGuild(r), [r]),
                x = ((0, uC.T)(g) ?? !1) && p?.isForumChannel() === !1,
                [f, E, I, j] = s.useMemo(() => {
                    let e;
                    if (null == c || 0 === c.length || null == d || !x) return [n, t, i];
                    let s = a ? c.length : 3,
                        u = c.slice(0, s);
                    e = h
                        ? [{ type: dl.S9.HIDDEN_CONTENT_INVENTORY }]
                        : u.map((e) => ({ type: dl.S9.CONTENT_INVENTORY, entry: e, requestId: d }));
                    let m = {
                        id: o9,
                        type: dl.S9.CONTENT_INVENTORY_GROUP,
                        key: o9,
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
                        feedHeight: e.map(uA).reduce((e, n) => e + n, 0),
                    };
                    return [[m, ...n], [...t, m, ...e], Math.random(), e];
                }, [l, c, a, n, r, d, t, i, h, x]),
                C = s.useRef(0),
                y = s.useRef(c),
                b = s.useRef(void 0),
                _ = s.useRef({ impressionCappedEntryIds: u }),
                v = s.useCallback(
                    (e) => {
                        let n = Math.floor(e / 72),
                            t = Math.min(j?.length ?? 0, n);
                        C.current = Math.max(C.current, t);
                    },
                    [j],
                );
            return (
                s.useEffect(() => {
                    y.current = c;
                }, [c]),
                s.useEffect(() => {
                    _.current = { impressionCappedEntryIds: u };
                }, [u]),
                s.useEffect(
                    () => (
                        (C.current = 0),
                        (b.current = Date.now()),
                        () => {
                            if (null == d || null == b.current || Date.now() - b.current < 3e3) return;
                            let e = y.current?.map((e) => e.id) ?? [],
                                n = e.slice(0, C.current);
                            !h &&
                                A &&
                                x &&
                                (dr(eo.HAw.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
                                    request_id: d,
                                    first_shown_at: b.current,
                                    item_ids: n,
                                    surface_type: ds.UG.GUILD_MEMBER_LIST,
                                    channel_id: l,
                                    guild_id: r,
                                    all_item_ids: e,
                                    impression_capped_item_ids: [..._.current.impressionCappedEntryIds],
                                }),
                                (0, uj.sE)("useInjectContentInventoryFeed") &&
                                    iw.h.dispatch({ type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS", itemIds: n }));
                        }
                    ),
                    [d, l, r, h, A, x],
                ),
                { groups: f, rows: E, version: I, updateMaxRowSeen: v }
            );
        })({ memberStoreProps: o, channelId: n.id, guildId: n.guild_id }),
        A = s.useRef(null),
        p = s.useRef(null);
    s.useEffect(() => {
        "u" < typeof document ||
            (null != document.activeElement &&
                document.activeElement !== document.body &&
                p.current?.focus({ preventScroll: !0 }));
    }, []);
    let g = (0, oB.W)("lg") + (0, oB.W)("xxs"),
        x = s.useCallback(
            (e, n) => {
                let t = A.current;
                if (null == t) return;
                let i = n === o8 || n === o4 ? 0 : parseInt(n, 10),
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
        f = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = A.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        E = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = A.current;
                    if (null == n) return e();
                    n.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [],
        ),
        I = (0, y.Ay)({ id: `members-${n.id}`, setFocus: x, isEnabled: r, scrollToStart: f, scrollToEnd: E });
    return (0, l.jsx)(P.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            ref: p,
            tabIndex: -1,
            className: a()(ec.kL, t),
            children: [
                (0, l.jsx)(uD, { guildId: n.guild_id }),
                (0, l.jsx)(C.hD, {
                    navigator: I,
                    children: (0, l.jsx)(uV, {
                        ...e,
                        ...o,
                        version: u,
                        groups: c,
                        rows: d,
                        listRef: A,
                        updateMaxContentFeedRowSeen: h,
                        sectionHeight: 18 + g,
                        rowHeight: 42,
                    }),
                }),
            ],
        }),
    });
}
function uW(e) {
    let { channel: n, className: t } = e,
        i = s.useDeferredValue(n);
    return s.useMemo(() => (0, l.jsx)(o1, { children: (0, l.jsx)(uY, { channel: i, className: t }) }), [i, t]);
}
var uz = t(888904);
let uq = () => (
    s.useEffect(() => {
        eR.Ay.trackWithMetadata(eo.HAw.GUILD_OUTAGE_VIEWED, {});
    }, []),
    (0, l.jsxs)("div", {
        className: uz.kL,
        children: [
            (0, l.jsxs)(lp.A, {
                keepToastsBelow: !0,
                toolbar: (0, l.jsx)(s.Fragment, {}),
                children: [
                    (0, l.jsx)(lp.A.Icon, { icon: dC.N, "aria-hidden": !0 }),
                    (0, l.jsx)(lp.A.Title, { children: z.intl.string(z.t["8LKchl"]) }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: uz.Qs,
                children: [
                    (0, l.jsx)(R.D, {
                        className: uz.Zd,
                        variant: "heading-lg/medium",
                        children: z.intl.string(z.t.m9gRVN),
                    }),
                    (0, l.jsx)(_.E, {
                        className: uz.fh,
                        variant: "text-md/normal",
                        children: z.intl.string(z.t.wC3j56),
                    }),
                ],
            }),
        ],
    })
);
var uX = t(909735),
    uK = t(943712),
    u$ = t(321255),
    uQ = t(746080),
    uJ = t(516607),
    uZ = t(999900);
function u0() {
    return (0, l.jsx)("div", { className: uZ.wG, children: (0, l.jsx)(g.y, {}) });
}
let u1 = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("229511"),
                t.e("599660"),
                t.e("452880"),
                t.e("726399"),
                t.e("500194"),
                t.e("207309"),
                t.e("430877"),
                t.e("302800"),
                t.e("249681"),
                t.e("666140"),
                t.e("333097"),
                t.e("704374"),
                t.e("777848"),
                t.e("689160"),
                t.e("623685"),
                t.e("842516"),
                t.e("421225"),
                t.e("822070"),
            ]).then(t.bind(t, 559296)),
        webpackId: 559296,
        renderLoader: u0,
        name: "ForumChannel",
    }),
    u2 = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("770583"),
                t.e("43853"),
                t.e("116694"),
                t.e("815852"),
                t.e("154168"),
                t.e("108168"),
                t.e("28047"),
                t.e("979585"),
                t.e("357718"),
                t.e("563600"),
            ]).then(t.bind(t, 203859)),
        webpackId: 203859,
        renderLoader: u0,
        name: "AppChannel",
    });
function u3() {
    return Promise.all([
        t.e("651299"),
        t.e("426965"),
        t.e("256172"),
        t.e("859821"),
        t.e("113561"),
        t.e("368991"),
        t.e("688508"),
        t.e("422037"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("630279"),
        t.e("17094"),
        t.e("305210"),
        t.e("477751"),
        t.e("245851"),
        t.e("998392"),
        t.e("703540"),
        t.e("728723"),
        t.e("794188"),
        t.e("740705"),
        t.e("730227"),
        t.e("374962"),
        t.e("770583"),
        t.e("907467"),
        t.e("43853"),
        t.e("529659"),
        t.e("371547"),
        t.e("673950"),
        t.e("389684"),
        t.e("45646"),
        t.e("604456"),
        t.e("459397"),
        t.e("847810"),
        t.e("249727"),
        t.e("784573"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("711617"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("920593"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("79216"),
        t.e("420577"),
        t.e("815275"),
        t.e("116694"),
        t.e("636516"),
        t.e("360536"),
        t.e("704374"),
        t.e("986300"),
        t.e("815852"),
        t.e("932011"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("154168"),
        t.e("769014"),
        t.e("108168"),
        t.e("815057"),
        t.e("654624"),
        t.e("322094"),
        t.e("28047"),
        t.e("45916"),
        t.e("726223"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("60701"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("975076"),
        t.e("736793"),
        t.e("112733"),
        t.e("357718"),
        t.e("586546"),
        t.e("792461"),
    ]).then(t.bind(t, 540462));
}
let u7 = (0, te.Fe)({ createPromise: u3, webpackId: 540462, name: "ChannelCall", renderLoader: u0 });
function u5() {
    return Promise.all([
        t.e("770583"),
        t.e("998392"),
        t.e("703540"),
        t.e("368991"),
        t.e("256172"),
        t.e("688508"),
        t.e("422037"),
        t.e("656997"),
        t.e("828849"),
        t.e("944121"),
        t.e("655282"),
        t.e("375971"),
        t.e("792818"),
        t.e("630279"),
        t.e("45646"),
        t.e("389684"),
        t.e("728723"),
        t.e("794188"),
        t.e("17094"),
        t.e("305210"),
        t.e("477751"),
        t.e("740705"),
        t.e("730227"),
        t.e("153965"),
        t.e("700792"),
        t.e("592822"),
        t.e("309291"),
        t.e("93461"),
        t.e("437961"),
        t.e("829260"),
        t.e("327198"),
        t.e("504098"),
        t.e("920593"),
        t.e("949013"),
        t.e("256373"),
        t.e("33448"),
        t.e("79216"),
        t.e("420577"),
        t.e("815275"),
        t.e("636516"),
        t.e("360536"),
        t.e("704374"),
        t.e("465694"),
        t.e("874821"),
        t.e("426792"),
        t.e("769014"),
        t.e("654624"),
        t.e("322094"),
        t.e("45916"),
        t.e("979585"),
        t.e("678827"),
        t.e("606913"),
        t.e("291553"),
        t.e("61924"),
        t.e("60701"),
        t.e("215980"),
        t.e("842492"),
        t.e("230761"),
        t.e("975076"),
        t.e("580372"),
    ]).then(t.bind(t, 507007));
}
let u6 = (0, te.Fe)({ createPromise: u5, webpackId: 507007, name: "StageChannelCall", renderLoader: u0 }),
    u9 = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("804510"),
                t.e("527552"),
                t.e("769266"),
                t.e("193845"),
                t.e("249681"),
                t.e("428235"),
                t.e("369501"),
                t.e("161058"),
                t.e("333097"),
                t.e("359702"),
                t.e("220803"),
                t.e("79171"),
                t.e("417664"),
                t.e("662368"),
            ]).then(t.bind(t, 320704)),
        webpackId: 320704,
        name: "SearchResults",
        renderLoader: function () {
            return (0, l.jsx)(sM, {});
        },
    }),
    u8 = (0, te.Fe)({
        createPromise: () =>
            Promise.all([
                t.e("577154"),
                t.e("424216"),
                t.e("877730"),
                t.e("611899"),
                t.e("804510"),
                t.e("527552"),
                t.e("769266"),
                t.e("487873"),
                t.e("765626"),
                t.e("683302"),
                t.e("249681"),
                t.e("728136"),
                t.e("428235"),
                t.e("507775"),
                t.e("369501"),
                t.e("161058"),
                t.e("333097"),
                t.e("636002"),
                t.e("359702"),
                t.e("466913"),
                t.e("71719"),
                t.e("213848"),
            ]).then(t.bind(t, 754744)),
        webpackId: 754744,
        name: "GuildMemberModViewSidebar",
    }),
    u4 = (0, te.Fe)({
        createPromise: () => Promise.all([t.e("386345"), t.e("269178"), t.e("177718")]).then(t.bind(t, 763349)),
        webpackId: 763349,
        name: "FriendsSidebar",
    });
class he extends s.PureComponent {
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
        return null != e && ((0, oU.ZV)(e.type) || null != n);
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === eo.rbe.GUILD_VOICE || (e === eo.rbe.GUILD_STAGE_VOICE && this.props.isStageUnifiedCall)
            ? u3()
            : e === eo.rbe.GUILD_STAGE_VOICE && u5();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ir.iN)(e.id);
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
            (0, nb.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [L.A.CHANNEL_HEADER],
            }));
    };
    openChannelContextMenu(e, n) {
        let { guild: i } = this.props;
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            d()(null != i, "Missing guild in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("947502"),
                    t.e("309004"),
                    t.e("430997"),
                    t.e("379995"),
                    t.e("544058"),
                    t.e("591377"),
                    t.e("35723"),
                    t.e("256372"),
                    t.e("29542"),
                    t.e("359545"),
                ]).then(t.bind(t, 22496));
                return (t) => (0, l.jsx)(e, { ...t, channel: n, guild: i });
            }));
    }
    openThreadContextMenu(e, n) {
        (d()(null != n, "Missing channel in Channel.openChannelContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("926132"),
                    t.e("955557"),
                    t.e("947502"),
                    t.e("965789"),
                    t.e("584615"),
                ]).then(t.bind(t, 612826));
                return (t) => (0, l.jsx)(e, { ...t, channel: n });
            }));
    }
    openDMContextMenu(e, n) {
        d()(null != n, "Missing channel in Channel.openDMContextMenu");
        let i = ee.default.getUser(n.getRecipientId());
        (d()(null != i, "Missing user in Channel.openDMContextMenu"),
            (0, j.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    t.e("463317"),
                    t.e("926132"),
                    t.e("893190"),
                    t.e("146652"),
                    t.e("189673"),
                    t.e("882073"),
                    t.e("797558"),
                    t.e("955557"),
                    t.e("691994"),
                    t.e("576665"),
                    t.e("947502"),
                    t.e("245996"),
                    t.e("700792"),
                    t.e("965789"),
                    t.e("592822"),
                    t.e("529422"),
                    t.e("823427"),
                    t.e("307059"),
                    t.e("309291"),
                    t.e("198415"),
                    t.e("935483"),
                    t.e("17244"),
                    t.e("298199"),
                    t.e("864464"),
                    t.e("439778"),
                ]).then(t.bind(t, 385913));
                return (t) => (0, l.jsx)(e, { ...t, user: i, channelSelected: !0, channel: n });
            }));
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(uQ.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, l.jsx)(iG.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: n } = this.props;
        return e ? (0, l.jsx)(nw.A, { channelId: null != n ? n.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: n } = this.props;
        return e?.type !== dK.lp.STREAM
            ? null
            : (0, l.jsx)(
                  ik.A,
                  { size: dU.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: n },
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
                    o.push((0, l.jsx)(i9.A, { channel: e }, "pins")),
                    o.push((0, l.jsx)(lw.Ay, { channel: e, tooltip: z.intl.string(z.t["PWkO7+"]) }, "invite")),
                    null != a && o.push((0, l.jsx)(i0, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(l1, { channel: e, showCallOrActivityPanel: i || s || r }, "profile")),
                    o.push((0, l.jsx)(lz, { channel: e }, "safety_tools")));
                break;
            case eo.rbe.GROUP_DM:
                (o.push(this.renderJoinRequestInterviewButtons()),
                    o.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    o.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    o.push((0, l.jsx)(lk, { channel: e }, "calls")),
                    o.push((0, l.jsx)(i9.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        o.push((0, l.jsx)(lw.Ay, { channel: e, tooltip: z.intl.string(z.t.NB5DFD) }, "invite")),
                    o.push((0, l.jsx)(i5, { channelId: e.id }, "members")));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                (e.isModeratorReportChannel() && o.push((0, l.jsx)(ip, { channel: e })),
                    null == n || n.isForumLikeChannel() || o.push((0, l.jsx)(rp.A, { channel: n }, "browser")),
                    e.isVocalThread() && o.push((0, l.jsx)(l$, { channel: e }, "thread-call")),
                    o.push((0, l.jsx)(iy, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i9.A, { channel: e }, "pins")),
                    e.isArchivedThread() || o.push((0, l.jsx)(i5, { channelId: e.id }, "members")),
                    null != n && (0, eE.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(rE, { channel: e }, "threads-overflow")));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
                (o.push((0, l.jsx)(rp.A, { channel: e }, "browser")),
                    t || o.push((0, l.jsx)(i6.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i9.A, { channel: e }, "pins")),
                    (0, nV.PD)(e.guild_id, "channel_header") &&
                        o.push((0, l.jsx)(i3, { channelId: e.id }, "conversations")),
                    o.push((0, l.jsx)(i5, { channelId: e.id }, "members")),
                    (0, eE.pk)(e) && o.push((0, l.jsx)(lt, { channel: e }, "summaries")),
                    o.push((0, l.jsx)(nB, { channel: e }, "conjure-close")));
                break;
            case eo.rbe.GUILD_APP:
                if (this.props.isAppChannelChatExpanded) {
                    (o.push((0, l.jsx)(rp.A, { channel: e }, "browser")),
                        t || o.push((0, l.jsx)(i6.A, { channel: e }, "notifications")),
                        o.push((0, l.jsx)(i9.A, { channel: e }, "pins")),
                        o.push((0, l.jsx)(i5, { channelId: e.id }, "members")));
                    break;
                }
                (o.push((0, l.jsx)(nR, { channel: e }, "popout")),
                    t || o.push((0, l.jsx)(i6.A, { channel: e }, "notifications")),
                    o.push((0, l.jsx)(i5, { channelId: e.id }, "members")),
                    o.push((0, l.jsx)(i0, { channelId: e.id }, "chat")),
                    o.push((0, l.jsx)(nT, { channel: e }, "overflow")));
                break;
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
                (e.isGameInvitesChannel() && o.push((0, l.jsx)(lA, {}, "game-invite-channel-learn-more")),
                    t ||
                        (o.push((0, l.jsx)(lc, { channel: e }, "forum-onboarding")),
                        o.push((0, l.jsx)(i6.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || o.push((0, l.jsx)(i5, { channelId: e.id }, "members")));
                break;
            case eo.rbe.GUILD_DIRECTORY:
                o.push((0, l.jsx)(i5, { channelId: e.id }, "members"));
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
                n.push((0, l.jsx)(i5, { channelId: e.id }, "members"));
                break;
            case eo.rbe.ANNOUNCEMENT_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || n.push((0, l.jsx)(i5, { channelId: e.id }, "members"));
                break;
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.GUILD_DIRECTORY:
                n.push((0, l.jsx)(i5, { channelId: e.id }, "members"));
        }
        return n;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: n } = this.props;
        return e && null != n
            ? (0, l.jsx)("div", {
                  className: uZ.u8,
                  children: (0, l.jsx)(x.$, {
                      variant: "secondary",
                      size: "sm",
                      text: z.intl.string(z.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([t.e("836178"), t.e("670774")]).then(
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : u ? () => (0, ir.iN)(e.id) : void 0,
            A = t?.guild_id != null && t?.id != null ? this.handleTitleParentClick : void 0,
            p = this.shouldRenderCall(),
            g = r || o,
            E = p || g;
        return (0, l.jsxs)("div", {
            className: uZ.SC,
            children: [
                (0, l.jsx)(f.N, {
                    theme: c && p ? eo.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, l.jsxs)(
                            lp.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(uZ.DD, r, { [uZ.zh]: e.type === eo.rbe.GROUP_DM }),
                                transparent: E,
                                hidden: o,
                                keepToastsBelow: !0,
                                "aria-label": z.intl.string(z.t.BIYAqa),
                                children: [
                                    u && (0, l.jsx)(tX.i$, { channel: e, guild: i, caretPosition: "right" }),
                                    (0, tX.zF)({
                                        channel: e,
                                        channelName: n,
                                        parentChannel: t,
                                        guild: i,
                                        hasVideo: c,
                                        isAppChannelChatExpanded: h,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: A,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, l.jsx)("div", {
                                              className: uZ.u8,
                                              children: (0, l.jsx)(ni, { channel: e }),
                                          })
                                        : u
                                          ? (0, l.jsx)("div", {
                                                className: uZ.u8,
                                                children: (0, l.jsx)(x.$, {
                                                    onClick: () => (0, nt.uh)(e.guild_id, e.id),
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: z.intl.string(z.t.k5WiPf),
                                                }),
                                            })
                                          : (0, tX.EP)(e, i),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, l.jsx)(sT.A, { channelId: e.id }),
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
                if (!n) return (0, l.jsx)(u6, { channel: e, popoutType: nD.N.NO_POPOUT }, e.id);
            case eo.rbe.GUILD_VOICE:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, l.jsx)(
                    u7,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: nD.N.NO_POPOUT,
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
        return (0, l.jsx)(e6, { maxHeight: t, renderExternalHeader: this.renderHeaderBar });
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
                ? (0, l.jsx)(iz, { guildId: n.id })
                : (0, l.jsx)(iF.H, { guildId: n.id, children: (0, l.jsx)(iZ, { channelId: e.id, guildId: n.id }) });
        if (i) return (0, l.jsx)(oD.A, { guild: n, channelId: e.id });
        if (null != s) return (0, l.jsx)(t$.A, { guild: n, channelId: s });
        if (e.isGuildVocal() || (e.isVocalThread() && r)) return null;
        if (e.isDirectory())
            return (
                d()(null != n, "directory channels must exist within a guild"), (0, l.jsx)(tV, { channel: e, guild: n })
            );
        if (e.isForumLikeChannel()) {
            d()(null != n, "forum channels must exist within a guild");
            let t = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, l.jsx)(u1, { channel: e, guild: n, sidebarState: t }, e.id);
        }
        return (e.type !== eo.rbe.GUILD_APP || this.props.isAppChannelChatExpanded) &&
            null == this.props.dmAppChannelApplicationId
            ? (0, l.jsx)(tq.A, { channel: e, guild: n, chatInputType: nk.oU.NORMAL }, null != n ? n.id : "home")
            : (0, l.jsx)(u2, { channel: e }, e.id);
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
            return (0, l.jsx)(oP, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === eo.YvQ.MEMBERS)
            switch (e.type) {
                case eo.rbe.GROUP_DM:
                    return (0, l.jsx)(sN, { channel: e }, `private-channel-recipients-${e.id}`);
                case eo.rbe.GUILD_DIRECTORY:
                case eo.rbe.GUILD_FORUM:
                case eo.rbe.GUILD_MEDIA:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_APP:
                    let c = !0 === eo.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, l.jsx)(uW, { channel: e }, `channel-members-${c}`);
                case eo.rbe.ANNOUNCEMENT_THREAD:
                    if (null != n) return (0, l.jsx)(uW, { channel: n }, `channel-members-${n.id}`);
                    break;
                case eo.rbe.PUBLIC_THREAD:
                case eo.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != t)
                        return (0, l.jsx)(ep, { channel: e, guild: t }, `channel-members-${e.id}`);
            }
        else if (s === eo.YvQ.CONVERSATIONS)
            switch (e.type) {
                case eo.rbe.GUILD_TEXT:
                case eo.rbe.GUILD_ANNOUNCEMENT:
                    return (0, l.jsx)(n4, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === eo.YvQ.SEARCH) return (0, l.jsx)(u9, { guildId: t?.id, channelId: e.id });
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
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await t.e("638763").then(t.bind(t, 201510));
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => iU(l5.REAL_NAME_PROMPT, n), modalKey: "Guild Hub Real Name Modal" },
                    ),
                s &&
                    (0, p.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([t.e("99643"), t.e("510585")]).then(
                                t.bind(t, 954784),
                            );
                            return (t) => (0, l.jsx)(e, { ...t, guildId: n });
                        },
                        { onCloseCallback: () => (0, ok.ry)(n, r), modalKey: "Guild Welcome Screen Modal" },
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
                case sL.PE.CREATE_THREAD:
                    if (n?.isForumLikeChannel()) return null;
                    e = (0, l.jsx)(ro, {
                        parentChannelId: i.parentChannelId,
                        parentMessageId: i.parentMessageId,
                        location: i.location,
                    });
                    break;
                case sL.PE.VIEW_MOD_REPORT:
                    e = (0, l.jsx)(r_, { channelId: i.channelId, baseChannelId: i.baseChannelId });
                    break;
                case sL.PE.VIEW_CHANNEL: {
                    let t = ew.A.getChannel(i.channelId);
                    if (t?.isThread()) {
                        let t = n?.isForumLikeChannel() ? iM : r_;
                        e = (0, l.jsx)(t, { channelId: i.channelId });
                        break;
                    }
                    if (this.isChatInSidebar()) {
                        e = (0, l.jsx)(u$.A, { channelId: i.channelId, baseChannelId: i.channelId });
                        break;
                    }
                    return null;
                }
                case sL.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== sL.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: n, moderatorReportId: t } = s.details;
                return (0, l.jsx)("div", {
                    style: { width: eo.da6 },
                    className: uZ.uC,
                    children: (0, l.jsx)(u8, {
                        guildId: e,
                        userId: n,
                        moderatorReportId: t,
                        onClose: () => sO.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? 528 : 450,
            c = r - eo.MdR - d;
        return (
            (c += 375),
            (0, l.jsx)(oH.A, {
                sidebarType:
                    n?.type != null && eo.kvI.GUILD_THREADS_ONLY.has(n.type) ? oH.X.PostSidebar : oH.X.ThreadSidebar,
                maxWidth: c,
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
                friendsSidebarAppBarToggleEnabled: m,
                friendsSidebarCollapsed: A,
            } = this.props,
            { threadSidebarWidth: p, isThreadSidebarFloating: g } = this.state,
            x = h && (!m || !A),
            f = this.shouldRenderCall();
        if (i) return (0, l.jsx)(uq, {});
        if (null == e) return (0, l.jsx)(uK.A, { channelId: this.props.channelId });
        let E = r === eo.YvQ.SIDEBAR_CHAT,
            I = (0, uX.UN)("Channel"),
            j = null != d && !E,
            C =
                ((0, oU.nO)(e.type) || this.props.isAppChannelChatExpanded) &&
                !o &&
                null == this.props.dmAppChannelApplicationId,
            y = n?.name,
            b = (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        "data-has-border": e.type !== eo.rbe.GUILD_VOICE || !f,
                        className: a()(uZ.TE, {
                            [uZ.js]: (E && !I) || j,
                            [uZ.Rs]: E ? !I || g : j || x,
                            [uZ.jl]: E && g,
                        }),
                        children: [
                            C
                                ? (0, l.jsx)(ex.A, {
                                      style: { right: E ? p : void 0 },
                                      className: uZ.x4,
                                      channel: e,
                                      draftType: iT.C.ChannelMessage,
                                  })
                                : null,
                            f || c ? null : this.renderHeaderBar(),
                            this.renderCall(),
                            this.renderEmbeddedActivityPanel(),
                            (0, l.jsxs)("div", {
                                className: a()(uZ.Qs, { [uZ.Oo]: s === eo.DUB.NO_CHAT }),
                                children: [this.renderChat(), this.renderSidebar()],
                            }),
                        ],
                    }),
                    this.renderThreadSidebar(),
                ],
            });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tn.HI, { location: y, subsection: t ?? void 0 }),
                u ? (0, l.jsx)("div", { className: uZ.zP, children: b }) : b,
                x && (0, l.jsx)(u4, {}),
            ],
        });
    }
}
let hn = (0, ef.A)(he),
    ht = s.memo(function (e) {
        var n, t, i;
        let r,
            { providedChannel: a } = e,
            [o, d] = s.useState(null),
            c = (0, m.bG)([eU.Ay], () => eU.Ay.getChannelId()),
            g = (0, m.bG)([eU.Ay], () => eU.Ay.getVoiceChannelId()),
            x = (0, m.bG)([ew.A], () => a ?? ew.A.getChannel(c), [c, a]),
            f = (0, tW.DZ)(),
            j = (0, tW.e4)(x),
            C = (0, m.bG)([ew.A], () => ew.A.getChannel(g), [g]),
            y = j?.parent_id,
            b = (0, m.bG)([ew.A], () => ew.A.getChannel(y), [y]),
            _ = (0, m.bG)([ty.A], () => ty.A.getGuild(j?.guild_id), [j]),
            { needSubscriptionToAccess: v } = (0, iH.A)(j?.id ?? void 0),
            N = (0, m.bG)(
                [nP.A],
                () => {
                    let e = null != c ? nP.A.getParticipants(c) : [],
                        n = null != c ? nP.A.getActivityParticipants(c) : [];
                    return e.length - n.length > 0;
                },
                [c],
            ),
            T = (0, iD.A)(),
            S = (0, m.bG)([eU.Ay], () => (T?.channelId ?? eU.Ay.getVoiceChannelId()) === j?.id),
            R = (0, m.bG)([ej.Ay], () => (null != j ? ej.Ay.getSelfEmbeddedActivityForChannel(j.id) : null), [j]),
            M = (0, m.bG)([oF.A], () => oF.A.isConnected()),
            O = (0, eI.Ay)(M),
            L = M && !1 === O;
        s.useEffect(() => {
            S &&
                L &&
                null != R &&
                null != j &&
                E.A.selectParticipant(
                    j.id,
                    (0, nL.Qt)({ applicationId: R.applicationId, instanceId: R.compositeInstanceId }),
                );
        }, [L, j, S, R]);
        let P = (0, m.bG)([ej.Ay], () => ej.Ay.getCurrentEmbeddedActivity()),
            D = (0, m.bG)([ej.Ay], () => ej.Ay.getActivityPanelMode()),
            k = null != P && !(0, ev.A)(j?.id) && D === eZ.Gd.PANEL,
            w = (0, h.zy)().state?.hideThreadCallUI === !0,
            { threadVoiceActive: U, isUserInThisVoice: G } = (0, m.cf)([lM.A], () =>
                null != j && j.isVocalThread()
                    ? {
                          threadVoiceActive: !u().isEmpty(lM.A.getVoiceStatesForChannel(j.id)),
                          isUserInThisVoice: lM.A.isInChannel(j.id),
                      }
                    : { threadVoiceActive: !1, isUserInThisVoice: !1 },
            ),
            F = null != j && j.isPrivate() && !k && N,
            H = j?.isGuildVocal() || F || (U && (G || !w)),
            B = (0, sD.e)(j, "channel"),
            V = (0, m.bG)([nf.A], () => {
                let e = (0, nN.ny)(nf.A.getMainFrame());
                return e?.data.layoutMode === nN.y0.FOCUSED && e.intent === nN.sV.MAIN;
            }),
            { welcomeModalChannelId: Y } = (0, h.zy)(),
            W = (0, m.bG)([iE.A], () => null != j && iE.A.isLurking(j.guild_id), [j]),
            z = (0, m.bG)([ow.A], () => ow.A.hasSeen(j?.guild_id, W), [j, W]),
            q = (0, m.bG)(
                [nP.A, ej.Ay],
                () =>
                    null != ej.Ay.getConnectedActivityLocation() && ej.Ay.getActivityPanelMode() === eZ.Gd.PANEL
                        ? ej.Ay.getFocusedLayout() === eZ.E8.NO_CHAT
                            ? eo.DUB.NO_CHAT
                            : eo.DUB.NORMAL
                        : null != c
                          ? nP.A.getLayout(c)
                          : eo.DUB.NORMAL,
                [c],
            ),
            X =
                ((n = _?.id),
                (r = (0, m.bG)([ty.A, l7, ee.default, $.Ay], () => {
                    let e = ty.A.getGuild(n);
                    if (
                        e?.features.has(eo.GuildFeatures.HUB) !== !0 ||
                        !0 === l7.hasViewedPrompt(l5.REAL_NAME_PROMPT, e.id)
                    )
                        return null;
                    let t = ee.default.getCurrentUser();
                    if (null == t) return null;
                    let i = $.Ay.getMember(e.id, t?.id);
                    return i?.nick == null;
                })),
                s.useEffect(() => {
                    null != n && null != r && (r || iU(l5.REAL_NAME_PROMPT, n));
                }, [r, n]),
                !0 === r),
            K =
                ((t = _?.id),
                (0, m.bG)([ew.A, ty.A, eU.Ay], () => {
                    let e = ty.A.getGuild(t);
                    if (
                        !(
                            e?.features.has(eo.GuildFeatures.WELCOME_SCREEN_ENABLED) === !0 &&
                            e.features.has(eo.GuildFeatures.COMMUNITY)
                        ) ||
                        e.features.has(eo.GuildFeatures.GUILD_SERVER_GUIDE)
                    )
                        return !1;
                    let n = ew.A.getChannel(Y);
                    return Y === eU.Ay.getChannelId(t) && null != n && n.getGuildId() === e.id && (0, oU.ke)(n.type);
                })),
            { section: J, channelSidebarState: Z } = (0, m.cf)(
                [i1.Ay],
                () => ({ section: i1.Ay.getSection(c, j?.isDM()), channelSidebarState: i1.Ay.getSidebarState(c) }),
                [c, j],
            ),
            en = _?.id,
            et = (0, m.bG)([i1.Ay], () => i1.Ay.getGuildSidebarState(en), [en]),
            el = (0, l9.lI)(),
            es = (0, ne.qz)() && j?.type === eo.rbe.GUILD_APP;
        ((i = j?.id),
            s.useEffect(() => {
                if (es && null != i)
                    return nM.A.addRouteRewriter((e, n) => {
                        let { pathname: t, search: l, state: s } = e;
                        return "POP" === n || (0, ne.Dw)(l) || nO.exec(t)?.[1] !== i
                            ? null
                            : { path: (0, ne.gu)(t), state: s };
                    });
            }, [i, es]));
        let er = es && Z?.type === sL.PE.VIEW_CHANNEL && Z.channelId === j.id,
            ea = (0, tz.Ay)(j),
            ed = (0, tz.Ay)(j, !0),
            ec = (0, m.bG)([nP.A], () => (null != j ? nP.A.getSelectedParticipant(j.id) : null)),
            eu = (0, e4.vL)(j),
            eh = (0, tK.Uf)(j),
            em = null != j && g === j.id,
            eA = null != j && j.isGuildStageVoice(),
            { sidebarEnabled: ep, appBarToggleEnabled: eg } = iO.A.useConfig({ location: "Channel" }),
            ex = (0, iP.c)(),
            ef = (0, m.bG)(
                [oG.A, i7.A],
                () => {
                    let e = j?.guild_id ?? i7.A.getGuildId();
                    return null != e && oG.A.isUnavailable(e);
                },
                [j],
            ),
            eC = ep && (0, iL.A)() && null != j && !ef && !j.isGuildVocal();
        (s.useEffect(() => (I.A.setFriendsSidebarAvailable(eC), () => I.A.setFriendsSidebarAvailable(!1)), [eC]),
            (function (e) {
                let { onTransition: n } = e;
                s.useEffect(() => {
                    async function e(e) {
                        let { location: t } = e,
                            i = (0, e_.H)(t);
                        if (null == i || !(0, ev.A)(i)) return;
                        eU.Ay.getVoiceChannelId() !== i && (await (0, e9.A)({ channelId: i }));
                        let l = ew.A.getChannel(i),
                            s = l?.guild_id;
                        setTimeout(() => {
                            ((0, e8.A)(s, t), n?.());
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
                let e = (0, nt.JK)();
                if (e?.location?.state?.stageInviteKey === uJ.J2) {
                    let { channelId: n } = (0, l6.vu)(e?.location?.pathname) ?? {};
                    null != n && d(n);
                }
            }, []));
        let ey = { channel: j, inCurrentVoiceChannel: em },
            eb = s.useRef(ey);
        (s.useEffect(() => {
            eb.current = ey;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: n } = eb.current;
                null != o && null != e && eA && e.id === o && !n && ((0, sP.av)(e), d(null));
            }, [o, eA]));
        let eN = (0, eE.cI)(j),
            eT = null != j && j.isPrivate(),
            eS = (0, eI.Ay)(eT),
            eR = (0, eI.Ay)(j?.id);
        s.useEffect(() => {
            let e = eS && !eT,
                n = eS && eT && j?.id !== eR;
            (e || n) && (0, tY.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: lL.i.AUTO });
        }, [j?.id, eR, eT, eS]);
        let eM = (0, p.useHasAnyModalOpen)(),
            eO = (0, nU.a)(j);
        return (0, l.jsx)(hn, {
            guildId: j?.guild_id,
            channelId: c,
            channel: j,
            channelName: ea,
            formattedChannelName: ed,
            parentChannel: b,
            voiceChannel: C,
            layout: q,
            needSubscriptionToAccess: v,
            isLurking: W,
            hasModalOpen: eM,
            section: J,
            channelSidebarState: er ? void 0 : Z,
            guildSidebarState: et,
            guild: _,
            showCall: !v && H,
            isStageUnifiedCall: B,
            showActivityPanel: k,
            showFramePanel: V,
            channelIsContentGated: eu,
            spoilerGatingChannelId: eh,
            isMobile: (0, m.bG)([Q.A], () => j?.type === eo.rbe.DM && Q.A.isMobileOnline(j.getRecipientId()), [j]),
            isUnavailable: ef,
            showRealNameModal: X,
            showWelcomeModal: !z && K,
            showFollowButton: (j?.type === eo.rbe.GUILD_ANNOUNCEMENT && _?.features.has(eo.GuildFeatures.NEWS)) || !1,
            ...(0, m.cf)([lM.A], () => ({ hasVideo: null != j && lM.A.hasVideo(j.id) }), [j]),
            inCall: em,
            selectedParticipant: ec,
            showChannelSummaries: eN,
            showHeaderGuildBreadcrumb: f || el,
            isAppChannelChatExpanded: es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
            friendsSidebarExperimentEnabled: ep,
            canShowFriendsSidebar: eC,
            friendsSidebarAppBarToggleEnabled: eg,
            friendsSidebarCollapsed: ex,
            dmAppChannelApplicationId: eO,
        });
    });
